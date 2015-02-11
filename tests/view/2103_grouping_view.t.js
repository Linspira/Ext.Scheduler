StartTest(function(t) {
    
    var scheduler = t.getScheduler({
        features : [{
            ftype               : 'grouping',
            groupHeaderTpl      : '{name}',
            hideGroupedHeader   : false,
            startCollapsed      : true
        }],

        resourceStore : t.getResourceStore({
            groupField : 'Name'
        }),
        renderTo : Ext.getBody()
    });

    t.waitForRowsVisible(scheduler, function() {
        var GP = Ext.grid.feature.Grouping.prototype;
        var collCls = '.x-grid-group-hd-collapsed';
        var nbrGroups = scheduler.getResourceStore().getCount();

        t.chain(
            // Testing clicking on locked view section
            function(next) {
                t.is(scheduler.lockedGrid.el.select(collCls).getCount(), nbrGroups, 'Locked collapsed groups found');
                t.is(scheduler.normalGrid.el.select(collCls).getCount(), nbrGroups, 'Schedule collapsed groups found');
                
                next();
            },
            { action : 'click', target : '.x-grid-locked ' + GP.eventSelector },

            function(next) {
                t.is(scheduler.lockedGrid.el.select(collCls).getCount(), nbrGroups - 1, '-1 Locked collapsed groups found');
                t.is(scheduler.normalGrid.el.select(collCls).getCount(), nbrGroups - 1, '-1 Schedule collapsed groups found');

                t.rowHeightsAreInSync(scheduler, 'After collapsed group is expanded');
                scheduler.resourceStore.first().set('Id', 'asf'); // Triggers a row update
                t.rowHeightsAreInSync(scheduler, 'After collapsed group is expanded');

                next();
            },

            { action : 'click', target : '.sch-schedulerview ' + GP.eventSelector },

            // Testing clicking on normal view section
            function(next) {
                t.is(scheduler.lockedGrid.el.select(collCls).getCount(), nbrGroups, 'Locked collapsed groups found');
                t.is(scheduler.normalGrid.el.select(collCls).getCount(), nbrGroups, 'Schedule collapsed groups found');

                next();
            },

            { action : 'click', target : '.sch-schedulerview ' + GP.eventSelector },

            function(next) {
                t.is(scheduler.lockedGrid.el.select(collCls).getCount(), nbrGroups - 1, '-1 Locked collapsed groups found');
                t.is(scheduler.normalGrid.el.select(collCls).getCount(), nbrGroups - 1, '-1 Schedule collapsed groups found');

                next();
            }
        );        
    });
});

