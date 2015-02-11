StartTest(function(t) {

    var scheduler = t.getScheduler({
        viewPreset          : 'weekAndDay',
        plugins             : new Sch.plugin.Pan({
            pluginId          : 'pan',
            enableVerticalPan : true
        }),
        renderTo            : Ext.getBody(),
        height              : 300,
        enableDragCreation  : false
    });

    t.waitForEventsToRender(scheduler, function () {
        var panPlugin = scheduler.getPlugin('pan'),
            schedulerView   = scheduler.getSchedulingView(),
            scrollEl = schedulerView.el,
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

                panPlugin.disableOnKey = Sch.plugin.Pan.KEY_SHIFT;

                t.dragBy(xy, [-30, 0], function() {
                    t.is(scrollEl.getScroll().left, 0, 'Scroll 0 after drag when SHIFT key is disabled and pressed');

                    panPlugin.disableOnKey = Sch.plugin.Pan.KEY_CTRL;

                    t.dragBy(xy, [-30, 0], function() {
                        t.is(scrollEl.getScroll().left, 0, 'Scroll 0 after drag when CTRL key is disabled and pressed');

                        panPlugin.disableOnKey = Sch.plugin.Pan.KEY_ALT;

                        t.dragBy(xy, [-30, 0], function() {
                            t.is(scrollEl.getScroll().left, 0, 'Scroll 0 after drag when ALT key is disabled and pressed');
                        }, null, {
                            altKey : true
                        });
                    }, null, {
                        ctrlKey : true
                    });
                }, null, {
                    shiftKey : true
                });
            });
        });
    });
})
