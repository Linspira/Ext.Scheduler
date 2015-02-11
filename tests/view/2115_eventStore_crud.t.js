describe('View should react to eventStore CRUD operations', function (t) {

    var doTest = function (t, orientation) {
        var eventStore = new Sch.data.EventStore();

        var scheduler = t.getScheduler({
            height           : 200,
            orientation      : orientation,
            eventStore       : eventStore,
            renderTo         : Ext.getBody()
        });

        var resource = scheduler.resourceStore.first();

        t.chain(
            { waitForRowsVisible : scheduler },

            function(next) {

                var newEvent = new Sch.model.Event({
                    StartDate  : new Date(scheduler.getStart()),
                    EndDate    : new Date(scheduler.getEnd()),
                    ResourceId : resource.data.Id
                });

                var newEvent2 = new Sch.model.Event({
                    StartDate  : new Date(scheduler.getStart()),
                    EndDate    : new Date(scheduler.getEnd())
                });

                newEvent2.assign(resource);

                t.selectorNotExists('.sch-event', 'No events initially');

                eventStore.add(newEvent);
                eventStore.add(newEvent2);

                t.selectorExists('tr:first-child .sch-event', 'Add ok');

                eventStore.rejectChanges();

                t.selectorNotExists('.sch-event', 'No events after reject');

                eventStore.add(newEvent);

                newEvent.setCls('foo');

                t.selectorExists('tr:first-child .sch-event.foo', 'Update ok');

                eventStore.remove(newEvent);

                t.waitForSelectorNotFound('.sch-event', next);
            }
        )
    };

    t.it('Horizontal orientation', function(t) {
        doTest(t, 'horizontal');
    });

    t.it('Vertical orientation', function(t) {
        doTest(t, 'vertical');
    });
})

