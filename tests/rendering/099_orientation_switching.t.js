StartTest(function (t) {

    var scheduler = t.getScheduler({
        renderTo    : Ext.getBody(),
        columns     : [{ width : 400 }],
        timeAxisColumnCfg   : { width : 100 },
        calendarTimeAxisCfg : { width : 150 },
        snapToIncrement     : true,
        viewPreset  : 'hourAndDay',
        startDate   : new Date(2010, 1, 2),
        endDate     : new Date(2010, 1, 2, 10)
    });
    
    var origHeaderWidth;
    
    t.chain(
        { waitForRowsVisible : scheduler },
        function (next) {
            origHeaderWidth = scheduler.down('timeaxiscolumn').getWidth();
            
            scheduler.setOrientation('vertical');
            t.is(scheduler.lockedGrid.getWidth(), 100, 'Correct width for locked grid in vertical mode');
            
            scheduler.setOrientation('calendar');
            t.is(scheduler.lockedGrid.getWidth(), 150, 'Correct width for locked grid in vertical mode');
            
            scheduler.setOrientation('horizontal');
            t.is(scheduler.down('timeaxiscolumn').getWidth(), origHeaderWidth, 'Time axis width unchanged');
            next();
        }
    );
});

