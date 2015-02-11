StartTest(function(t) {

    var schedulerPanel = t.getScheduler({
        renderTo : document.body
    });

    schedulerPanel.zoomInFull();

    function verifyLines(next) {
        var lines = Ext.select('.sch-column-line');
        var headerCells = Ext.select('.sch-header-row-middle td');

        t.isApprox(headerCells.item(0).getX() + headerCells.item(0).getWidth(), lines.item(0).getX(), 1, 'Line aligned');

        next();
    }

    function zoomOut(next) {
        Ext.select('.sch-column-line').remove();
        if (Ext.isGecko) {
            this.waitForEvent(schedulerPanel.getSchedulingView(), 'bodyscroll', next);
        } else {
            this.waitForEvent(schedulerPanel.columnLinesFeature, 'columnlinessynced', next);
        }
        schedulerPanel.zoomOut();
    }

    t.chain(
        { waitFor : 'EventsVisible' },

        zoomOut,
        // have to wait also for this selector (specially for FF)
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines,
        zoomOut,
        { waitForSelector : '.sch-column-line' },
        verifyLines
    );
});  
