StartTest(function (t) {


    t.it('SchedulingView will fire `refresh` only once when rendered', function (t) {

        var scheduler = t.getScheduler();

        t.willFireNTimes(scheduler.getSchedulingView(), 'refresh', 1);
        t.waitForEvent(scheduler.getSchedulingView(), 'refresh', function() {
            scheduler.destroy()
        });

        scheduler.render(Ext.getBody());
    });

    t.it('SchedulingView drag drop, resize or row update should not cause a layout', function (t) {

        function getLayoutCount(ct) {
            var count = 0;

            Ext.each(ct.query('[layoutCounter]').concat(ct), function(c) { count += c.layoutCounter });

            return count;
        }

        var scheduler = t.getScheduler({
            renderTo           : document.body,
            cls                : 'nbr2',
            enableDragCreation : false,
            dragConfig         : {
                showTooltip : false
            }
        });

        var view = scheduler.getSchedulingView();

        t.assertNoLayoutTriggered(function () {
            view.repaintEventsForResource(scheduler.resourceStore.first())
        })

        var before;

        t.chain(
            { waitFor : 'eventsToRender' },

            function(next) {
                before = getLayoutCount(scheduler);

                next()
            },

            { drag : '.nbr2 .sch-event', by : [10, 0] },

            function (next) {
                t.is(getLayoutCount(scheduler), before, 'drag drop should not cause layouts');

                next()
            },

            { drag : '.nbr2 .sch-resizable-handle-end', by : [10, 0] },

            function () {
                t.is(getLayoutCount(scheduler), before, 'resize should not cause layouts');
            }
        )

    });

});
