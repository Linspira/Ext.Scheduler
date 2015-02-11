StartTest(function(t) {
    
    // Note, that different numbers of events (600) and resources (800) is crucial in 
    // reproducing the row desynchronization issue
    
    var createFakeData = function (count) {
        var data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                Id : i, 
                Name : 'BuffRow' + i
            });
        }
        return data;
    };

    // create the Resource Store
    var resourceStore = Ext.create('Sch.data.ResourceStore', {
        data : createFakeData(800)
    });

    // create the Event Store
    var eventStore = Ext.create('Sch.data.EventStore', {
        data : (function (count) {
            var data = [];

            for (var i = 0; i < count; i+=2) {
                data.push({
                    ResourceId : i,
                    StartDate : new Date(2010, 1, 1),
                    EndDate : new Date(2010, 1, 10),
                    Name : 'Event' + i
                });
                data.push({
                    ResourceId : i,
                    StartDate : new Date(2010, 1, 1),
                    EndDate : new Date(2010, 1, 10),
                    Name : 'Event' + i
                });
            }

            return data;
        })(600)
    });
    
    var scheduler = t.getScheduler({
        resourceStore   : resourceStore,
        eventStore      : eventStore,
        
        width           : 500,
        height          : 300,
        
        startDate       : new Date(2010, 1, 1),
        endDate         : new Date(2010, 1, 20),
        
        columns         : [ { dataIndex : 'Id', text : 'Id' }, { dataIndex : 'Name', text : 'Name' }],
        plugins         : 'bufferedrenderer',
        
        renderTo        : Ext.getBody()
    });

    var schedulingView  = scheduler.getSchedulingView()
    var normalView      = schedulingView
    var lockedView      = scheduler.lockedGrid.getView()
    
    var el              = schedulingView.el
    
    t.chain(
        {
            waitFor     : 'rowsVisible',
            args        : [ scheduler ]
        },
        {
            // it seems shortly after initial rendering, the "scrollTop" position of the buffered schedulingView will be reset to 0
            // need to wait some time before modifiying it
            waitFor     : 300
        },
        function (next) {
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")

            t.scrollVerticallyTo(el, el.dom.scrollHeight, 300, next)
        },
        function (next) {
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")
            
            var lastNormalRow   = el.down('tr:last-child');
            var lastLockedRow   = lockedView.el.down('tr:last-child')
            
            t.is(schedulingView.getRecord(lastNormalRow.dom).getId(), 799, 'Found last record row in scheduler schedulingView');

            resourceStore.sort('Id', 'DESC');
            
            lastLockedRow       = scheduler.lockedGrid.view.el.down('tr:last-child')

            t.is(schedulingView.getRecord(lastNormalRow.dom).getId(), 0, 'Found first record row in scheduler schedulingView');
            
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")
            
            next()
        },
        {
            // 4.2.1 buffered renderer calls "onStoreClear" on any refresh
            // this call resets the scroll position to 0 and ignores "scroll" event caused by this action
            // we need to start scrolling only after that action
            waitFor : function () {
                return !schedulingView.bufferedRenderer.ignoreNextScrollEvent
            }
        },
        // scroll bottom max
        function (next) {
            t.scrollVerticallyTo(el, el.dom.scrollHeight, 300, next)
        },
        function (next) {
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")
            
            resourceStore.sort('Name', 'ASC');
            
            next()
        },
        {
            // see comment above
            // prior 4.2.1 we just wait for 300ms since refresh+postprocessing should happen synchronously at all (though it does not)
            waitFor : Ext.getVersion('extjs').isLessThan('4.2.1.883') ? 300 : function () {
                return !schedulingView.bufferedRenderer.ignoreNextScrollEvent
            }
        },
        function (next) {
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")
            
            resourceStore.sort('Name', 'DESC');
            
            next()
        },
        {
            waitFor : Ext.getVersion('extjs').isLessThan('4.2.1.883') ? 300 : function () {
                return !schedulingView.bufferedRenderer.ignoreNextScrollEvent
            }
        },
        function (next) {
            t.bufferedRowsAreSync(scheduler, "Rows are synchronized")
        }
    )
})    

