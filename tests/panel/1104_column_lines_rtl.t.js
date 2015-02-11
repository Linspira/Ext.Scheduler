StartTest(function (t) {
    var s1 = t.getScheduler({
        height      : 200,
        width       : 600,
        viewPreset  : 'hourAndDay',
        startDate   : new Date(2010, 1, 1),
        endDate     : new Date(2010, 1, 1, 10),
        columnLines : true,
        rtl         : true,
        renderTo    : Ext.getBody()
    });

    t.chain(
        { waitFor : 'selector', args : '.sch-column-line' },

        { waitFor : 100 },

        function (next) {
            var lines = Ext.select('.sch-column-line');
            var colWidth = s1.getSchedulingView().getTimeColumnWidth();

            t.is(lines.first().getStyle('right'), colWidth + 'px', 'First column line right style ok');
            t.is(lines.last().getStyle('right'), colWidth*9 + 'px', 'Last column line right style ok');

            // http://www.sencha.com/forum/showthread.php?272536-4.2.1-Grid-RTL-columns-misaligned&p=998884#post998884
            t.knownBugIn('4.2.2.1144', function(t) {
                t.is(s1.normalGrid.view.el.getRight(), s1.el.down('.sch-secondary-canvas').el.getRight(), 'Secondary canvas ok');
                t.is(s1.normalGrid.view.el.dom.clientWidth, s1.normalGrid.headerCt.el.dom.clientWidth, 'Grid view and header equally sized');
            })
        }
    );
})    

