StartTest(function (t) {
    var scheduler;

    var setup = function (config) {
        scheduler && scheduler.destroy();

        scheduler = t.getScheduler(Ext.apply({
            mode        : 'calendar',
            calendarViewPreset  : 'week',
            startDate   : new Date(2014, 4, 28),
            eventStore  : t.getEventStore({
                data    : [{
                    Id          : 1,
                    StartDate   : new Date(2014, 4, 28, 2),
                    EndDate     : new Date(2014, 4, 29, 3),
                    ResourceId  : 'r1',
                    Name        : 'Test'
                }, {
                    Id          : 2,
                    StartDate   : new Date(2014, 4, 29, 5),
                    EndDate     : new Date(2014, 4, 29, 6),
                    ResourceId  : 'r1',
                    Name        : 'Test'
                }, {
                    Id          : 3,
                    StartDate   : new Date(2014, 4, 27, 1),
                    EndDate     : new Date(2014, 4, 27, 3),
                    ResourceId  : 'r1',
                    Name        : 'Test'
                }]
            }),
            renderTo    : Ext.getBody()
        }, config));
    };

    t.it('Should relayout events correctly after drag drop', function (t) {
        setup();

        var trEl, width;

        t.chain(
            { waitForEventsToRender : scheduler },
            { waitFor : 500 },
            function (next) {
                trEl        = scheduler.getSchedulingView().el.down('tr:nth-child(1)');
                width       = scheduler.timeAxisViewModel.calendarColumnWidth;
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(4) .sch-event'); }, by : [0, 116] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(3) .sch-event').getWidth(), width, 4, 'First part\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(4) .sch-event').getWidth(), (width - 4) / 2, 1, 'Second part\'s width is correct');
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(3) .sch-event'); }, offset : [10, 10], by : [0, -45] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(3) .sch-event').getWidth(), width, 4, 'First part\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(4) .sch-event').getWidth(), width, 4, 'Second part\'s width is correct');
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(3) .sch-event'); }, offset : [10, 10], by : [-81, -86] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(2) .sch-event:nth-child(2)').getWidth(), (width - 4) / 2, 1, 'First part\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(3) .sch-event').getWidth(), width, 4, 'Second part\'s width is correct');
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(4) .sch-event'); }, by : [-120, -109] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(3) .sch-event:nth-child(2)').getWidth(), (width - 4) / 2, 1, 'Short event\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(3) .sch-event').getWidth(), (width - 4) / 2, 1, 'Second part\'s width is correct');
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(3) .sch-event:nth-child(2)'); }, by : [-120, 54] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(3) .sch-event').getWidth(), width, 4, 'Second part\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(2) .sch-event:nth-child(3)').getWidth(), (width - 4) / 2, 1, 'Short event\'s width is correct');
                next();
            },
            { drag : function () { return trEl.el.down('td:nth-child(2) .sch-event:nth-child(2)'); }, offset : [10, 10], by : [-100, -6] },
            { waitForCSSTransition : scheduler.el },
            function (next) {
                t.isApprox(trEl.down('td:nth-child(1) .sch-event').getWidth(), width, 4, 'First part\'s width is correct');
                t.isApprox(trEl.down('td:nth-child(2) .sch-event:nth-child(3)').getWidth(), (width - 4) / 2, 1, 'Second\'s width is correct');
                next();
            }
        );
    });

    t.it('getElementFromEventRecord should return correct dom nodes', function (t) {
        setup();

        t.chain(
            { waitForEventsToRender : scheduler },
            function (next) {
                var view = scheduler.getSchedulingView();
                var record = scheduler.eventStore.getAt(0);

                t.it('Should lookup dom node and then perform reverse lookup', function (t) {
                    var node = view.getElementFromEventRecord(record);

                    if (node) {
                        t.is(record, view.getEventRecordFromDomId(node.dom.id), 'Record looked up correctly');
                    } else {
                        t.fail('Cannot lookup node by record');
                    }
                });

                t.it('Record should be found using any event node (in case of multicolumn events)', function (t) {
                    var nodes = view.getElementFromEventRecord(record, true);

                    t.is(nodes.getCount(), 2, 'Got correct amount of nodes');

                    nodes.each(function (node) {
                        if (node) {
                            t.is(record, view.getEventRecordFromDomId(node.dom.id), 'Record looked up correctly');
                        } else {
                            t.fail('Cannot lookup node by record');
                        }
                    });
                });

                next();
            }
        );
    });
});