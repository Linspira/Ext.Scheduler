describe('Should not show lock/unlock options for locked grid columns', function (t) {

    // http://www.sencha.com/forum/showthread.php?274441-Locked-grouped-grid-doesn-t-respect-lockable-attribute-of-column&p=1005556#post1005556
    function doTest(name, cfg) {

        t.it(name, function(t) {
            var scheduler = t.getScheduler(Ext.apply({
                renderTo : Ext.getBody(),
                height   : 120,
                columns  : [
                    { header : 'Name', sortable : true, width : 100, dataIndex : 'Name'}
                ]
            }, cfg));

            var col = scheduler.down('gridcolumn');

            t.chain(
                { moveCursorTo : col, offset : ['100%-5', '50%'] },

                { action : "click" },

                function () {
                    var col = t.cq1('menuitem[text=Lock]')

                    t.cqNotExists('menuitem[text=Lock]{isVisible()}')
                }
            )
        })
    }

    doTest('basic');

    doTest('grouping', {
        features : [
            {
                ftype              : 'grouping',
                hideGroupedHeader  : false,
                startCollapsed     : true,
                enableGroupingMenu : true
            }
        ]
    })
});
