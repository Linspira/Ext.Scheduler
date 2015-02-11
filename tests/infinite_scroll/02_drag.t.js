StartTest(function (t) {

    var scheduler = t.getScheduler({
        height         : 200,
        width          : 400,
        infiniteScroll : true,
        renderTo       : Ext.getBody()
    });

    t.firesOnce(scheduler, 'viewchange');

    t.it('Should activate scroll on task drag, and just produce one viewchange event when shifting', function (t) {

        t.chain(
            { waitFor : "RowsVisible" },

            { drag : Ext.grid.View.prototype.itemSelector + ':nth-child(3) .sch-event-inner', to : '>> schedulergridview', toOffset : ['100%-3', 40], dragOnly : true },

            { waitForEvent : [scheduler, 'viewchange'] },

            { waitFor : 1000 },

            { action : 'mouseUp' }
        )
    });
});
