StartTest(function (t) {
    var scheduler = t.getScheduler({
        height          : 1000,
        width           : 400,
        startDate       : new Date(2011, 0, 3),
        endDate         : new Date(2011, 0, 4),
        viewPreset      : 'hourAndDay',
        orientation     : 'vertical'
    });

    scheduler.render(Ext.getBody());
    scheduler.getSchedulingView().setRowHeight(60);

    t.waitForRowsVisible(scheduler, function () {
        var viewTop = scheduler.lockedGrid.view.el.getY();
        var twelvePos = scheduler.lockedGrid.el.down('.x-grid-cell:contains(12:00)').getY()-viewTop;

        t.is(scheduler.el.down('.sch-timetd').getHeight(), 60, 'Cell element has the correct height')
        t.isApprox(twelvePos, 12*60, 1, '12th cell at correct position')
        t.is(scheduler.normalGrid.el.down(Ext.grid.View.prototype.itemSelector + ':nth-child(13) .x-grid-cell').getY() - viewTop, twelvePos, 'Rows in sync')
    });
});
