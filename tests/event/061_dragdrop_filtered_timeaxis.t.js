StartTest(function(t) {
    var scheduler, view, isVertical, tickWidth;

    function setup(config) {
        config      = config || {};
        
        if (scheduler) scheduler.destroy()

        scheduler   = t.getScheduler(Ext.apply({
            width                   : 800,
            heigh                   : 600,
            
            startDate               : new Date(2010, 0, 6),
            endDate                 : new Date(2010, 2, 1),
            
            eventStore              : t.getEventStore({
                data        : [
                    {
                        Id          : 1,
                        Name        : 'Test event',
                        ResourceId  : 'r1',
                        StartDate   : new Date(2010, 0, 11),
                        EndDate     : new Date(2010, 0, 14)
                    }
                ]
            }),
            
            resourceStore           : config.__tree ? t.getResourceTreeStore() : t.getResourceStore(),
            
            enableDragCreation      : false,
            renderTo                : Ext.getBody(),
            dragConfig              : { showTooltip : false }
        }, config));
        
        scheduler.getTimeAxis().filterBy(function(tick) {
            return tick.start.getDay() !== 6 && tick.start.getDay() !== 0;
        });

        view            = scheduler.getSchedulingView()
        isVertical      = scheduler.getOrientation() === 'vertical'
        tickWidth       = scheduler.timeAxisViewModel.getTickWidth()
    }

    var testSteps = [
        { waitFor : 'eventsToRender' }, 
        { 
            drag    : '.sch-event', 
            offset  : function () { return [ tickWidth * 2, 10 ] }, 
            by      : function () { 
                return isVertical ? [ view.resourceColumnWidth, tickWidth ] : [ -tickWidth, 0 ]
            } 
        }, 

        function (next, el) {
            var event   = scheduler.getSchedulingView().resolveEventRecord(el);
            
            t.is(event.getStartDate(), new Date(2010, 0, 8), "Event's start date has been changed according to the proxy element's position")
            
            next();
        }
    ]
    // eof test steps

    setup();
    t.diag('Plain horizontal scheduler');

    t.chain(
        testSteps
//        ,

//        function(next) {
//            t.diag('Tree scheduler');
//            setup({ __tree : true });
//            next()
//        },
//        testSteps,
//
//        function(next) {
//            t.diag('Vertical scheduler');
//            setup({ orientation : 'vertical' });
//            next()
//        },
//        testSteps
    );
})    