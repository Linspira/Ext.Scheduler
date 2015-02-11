StartTest(function(t) {

    var scheduler = t.getScheduler({ renderTo : Ext.getBody() });

    t.waitForEventsToRender(scheduler, function() {
        var taskEl = t.getFirstEventEl(scheduler),
            firstTimeCellEl = t.getFirstScheduleCellEl(scheduler),
            task = scheduler.getSchedulingView().resolveEventRecord(taskEl);

        function verifyEventSignature() {
            /**
             * @event event_xxx
             * Fires when xxx
             * @param {SchedulerView}    scheduler The scheduler view object
             * @param {Sch.model.Event}  eventRecord The event record
             * @param {Ext.EventObject}  e The event object
             */
            t.is(arguments[0], scheduler.getSchedulingView(), 'Correct 1st argument');
            t.is(arguments[1], task, 'Correct 2nd argument');
            t.ok(!!arguments[2].getTarget, 'Correct 3rd argument');
        }

        function verifyScheduleEventSignature() {

            /**
             * @event scheduledblclick
             * Fires after a doubleclick on the schedule area
             * @param {SchedulerView} scheduler The scheduler object
             * @param {Date} clickedDate The clicked date
             * @param {Int} rowIndex The row index
             * @param {Ext.EventObject} e The event object
             */
            t.is(arguments[0], scheduler.getSchedulingView(), 'Correct 1st argument');
            t.ok(arguments[1] instanceof Date, 'Correct 2nd argument');
            t.is(arguments[2], 0, 'Correct 3rd argument');
            t.isaOk(arguments[3], Sch.model.Resource, 'Correct 3rd argument');
            t.ok(!!arguments[4].getTarget, 'Correct 4th argument');
        }

        scheduler.on({
            'eventclick'            : verifyEventSignature,
            'eventdblclick'         : verifyEventSignature,
            'eventcontextmenu'      : verifyEventSignature,

            'scheduleclick'         : verifyScheduleEventSignature,
            'scheduledblclick'      : verifyScheduleEventSignature,
            'schedulecontextmenu'   : verifyScheduleEventSignature,

            'eventmouseenter'       : verifyEventSignature,
            'eventmouseleave'       : verifyEventSignature

        });

        Ext.each(["eventdblclick", "eventcontextmenu", "scheduledblclick", "schedulecontextmenu"], function(evName) {
            t.willFireNTimes(scheduler, evName, 1);
        });

        Ext.each(["eventmouseenter", "eventmouseleave"], function(evName) {
            // These events bubble in IE8
            t.firesAtLeastNTimes(scheduler, evName, 1);
        });

        Ext.each(["eventclick", "scheduleclick"], function(evName) {
            t.willFireNTimes(scheduler, evName, 3);
        });

        t.ok(firstTimeCellEl, 'Time cell found');

        t.chain(
            { action : 'click', target : taskEl },
            { action : 'doubleClick', target : taskEl },
            { action : 'rightClick', target : taskEl },
            { action : 'moveCursorTo', target : '.x-column-header' },

            function(next) {
                Ext.select('.sch-event').remove();
                next();
            },
            { action : 'click', target : firstTimeCellEl },
            { action : 'doubleClick', target : firstTimeCellEl },
            { action : 'rightClick', target : firstTimeCellEl }
        )
    });
})
