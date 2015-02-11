StartTest(function(t) {
    
    var scheduler = t.getScheduler({
        viewPreset          : 'weekAndDay',
        plugins             : new Sch.plugin.Pan({ enableVerticalPan : true }),
        renderTo            : Ext.getBody(),
        height              : 300,
        enableDragCreation  : false
    });
    
    t.waitForEventsToRender(scheduler, function () {

        t.is(scheduler.normalGrid.headerCt.items.first().getWidth(),
            scheduler.getSchedulingView().getEl().down('table').getWidth(),
            'Should find same width on header el as on table view el');

        var schedulerView   = scheduler.getSchedulingView(),
            event           = scheduler.eventStore.first(),
            eventEndDate    = event.getEndDate(),
            eventEl         = schedulerView.getElementFromEventRecord(event),
            resizeHandle    = eventEl.child('.sch-resizable-handle-end');
        
        // drag resizer 100px to the right
        t.dragBy(resizeHandle, [ 100, 0 ], function () {
            t.notOk("StartDate" in event.modified, "Event's start date not changed");
            t.isGreater(event.getEndDate(), eventEndDate, "Event's end date has increased");

            var scrollEl = scheduler.getSchedulingView().el,
                xy = scrollEl.getXY();
            
            xy[0] += 15;
            xy[1] += 15;
            // Clear events
            scrollEl.select(scheduler.getSchedulingView().eventSelector).remove();

            t.is(scrollEl.getScroll().left, 0, 'Scroll 0 before drag');
            
            t.dragBy(xy, [-30, 0], function() {
                t.is(scrollEl.getScroll().left, 30, 'Scroll 30 after drag');
                
                t.dragBy(xy, [30, 0], function() {
                    t.is(scrollEl.getScroll().left, 0, 'Scroll 0 after drag back');
                });
            });
        });
    });
})    
