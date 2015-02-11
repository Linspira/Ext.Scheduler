StartTest(function(t) {

    // Clicking rows in IE has caused scroll resets a few times:
    // https://www.assembla.com/spaces/bryntum/tickets/661#/activity/ticket:
    // https://www.assembla.com/spaces/bryntum/tickets/1095?comment=413136983#comment:413136983

    t.it('Click locked row or normal row should not trigger scroll change', function(t) {
        var panel       = t.getScheduler({
            width       : 400,
            height      : 200,
            
            columns             : [
                { dataIndex : 'Name' }, { dataIndex : 'StartDate' }, { dataIndex : 'EndDate' }
            ],

            lockedGridConfig         : {
                width    : 150
            },
            renderTo        : Ext.getBody()
        })

        var lockedViewEl = panel.lockedGrid.view.el;
        var normalViewEl = panel.normalGrid.view.el;


        t.chain(
            { waitFor : 'rowsVisible' },

            function (next) {
                // only need to set the scroll top in one view and another will reflect
                t.scrollVerticallyTo(lockedViewEl.dom, 50, next)
            },
            function (next) {
                t.scrollHorizontallyTo(normalViewEl.dom, 250, next)
            },
            function (next) {
                t.scrollHorizontallyTo(lockedViewEl.dom, 50, next)
            },
            
            { waitFor : 1000 },

            function(next) {
                // in IE, locked view fires the "scroll" event, but the actual scroll position does not change,
                // wo we allow 1 "scroll" event, w/o position change (see below)
                t.firesOk(lockedViewEl.dom, 'scroll', '<=1', 'Locked')
                t.wontFire(normalViewEl.dom, 'scroll', 'Normal');
                
                var beforeScrollTop     = lockedViewEl.dom.scrollTop
                var beforeScrollLeft    = lockedViewEl.dom.scrollLeft

                lockedViewEl.on('scroll', function() {
                    if (lockedViewEl.dom.scrollLeft != beforeScrollLeft || lockedViewEl.dom.scrollTop != beforeScrollTop) {
                        t.fail("Locked view has changed the scroll position")
                    }
                })

                next();
            },

            { click : '.x-grid-inner-locked .x-grid-view' },
            { click : '.sch-timelineview' }
        )
    })
})

