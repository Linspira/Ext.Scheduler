StartTest(function(t) {

    var SM                      = Sch.util.ScrollManager;
    var outerEl;

    function applyFixture() {
        document.body.innerHTML = '';
        document.body.innerHTML = '<div style="overflow:scroll;background:#eee;width:200px;height:200px"><div style="background:#aaa;margin:20px;width:400px;height:400px"></div></div>'
        
        outerEl                 = document.body.firstChild;
        outerEl.scrollLeft      = outerEl.scrollTop = 0;
    }
    
    function createDom () {
        document.body.innerHTML = '';
        document.body.innerHTML = '<div style="overflow:scroll;background:#eee;width:200px;height:200px"><div style="background:#aaa;margin:20px;width:400px;height:400px"></div></div>'
    }
    
    function updateOuterEl () {
        outerEl                 = document.body.firstChild;
        outerEl.scrollLeft      = outerEl.scrollTop = 0;
    }

    t.it('Should store and clear variables on activate/deactivate', function (t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                t.wontFire(outerEl, 'scroll');
                
                SM.activate(outerEl, 'horizontal');
                t.is(SM.direction, 'horizontal', 'Should use direction if provided');
                
                SM.deactivate();
                
                SM.activate(outerEl);
                t.is(SM.direction, 'both', 'Should default to both if direction is omitted');
        
                t.is(SM.activeEl.dom, outerEl, 'Element ref stored')
                t.isDeeply(SM.scrollElRegion, Ext.fly(outerEl).getRegion(), 'Element region ref stored')
        
                SM.deactivate();
        
                t.notOk(SM.activeEl, 'Element ref cleared')
                t.notOk(SM.scrollElRegion, 'Element region ref cleared');
            }
        );
    });


    t.it('Should not scroll target el if not activated', function (t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                t.wontFire(outerEl, 'scroll');
                next();
            },
            { moveCursorTo : outerEl, offset : [ '14', '100%-24' ] },

            { waitFor : 1000 },

            function() {
                t.is(outerEl.scrollLeft, 0);
                t.is(outerEl.scrollTop, 0);
            }
        )
    })

    t.it('Should scroll target el when mouse is close to right edge', function (t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                
                t.firesAtLeastNTimes(outerEl, 'scroll', 1);
                SM.activate(outerEl, 'both');
                
                next();
            },
            { moveCursorTo : outerEl, offset : ['100%-24', '50%'] },

            {
                waitFor : function() {
                    return outerEl.scrollLeft == outerEl.scrollWidth - outerEl.clientWidth && outerEl.scrollTop == 0;
                }
            },

            function() {
                t.isGreater(outerEl.scrollLeft, 0);
                t.is(outerEl.scrollTop, 0);

                SM.deactivate();
            }
        )
    })

    t.it('Should scroll target el when mouse is close to bottom edge', function(t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                
                t.firesAtLeastNTimes(outerEl, 'scroll', 1);

                SM.activate(outerEl, 'both');
                
                next();
            },
            { moveCursorTo : outerEl, offset : ['20', '100%-20'] },

            {
                waitFor : function() {
                    return outerEl.scrollLeft == 0 && outerEl.scrollTop == outerEl.scrollHeight - outerEl.clientHeight;
                }
            },

            function() {
                SM.deactivate();
            }
        )
    })

    t.it('Should scroll left+top when mouse is close to bottom/left edge', function(t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                
                outerEl.scrollLeft = outerEl.scrollTop = 100;

                t.firesAtLeastNTimes(outerEl, 'scroll', 1);
        
                SM.activate(outerEl, 'both');
                
                next();
            },
            { moveCursorTo : outerEl, offset : ['4', '100%-24'] },

            {
                waitFor : function() {
                    return outerEl.scrollLeft == 0 && outerEl.scrollTop == outerEl.scrollHeight - outerEl.clientHeight;
                }
            },
            function () {
                SM.deactivate();
            }
        )
    })

	t.it('Should not scroll horizontally when SM configured with the vertical direction.', function (t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                t.wontFire(outerEl, 'scroll');
                SM.activate(outerEl, 'vertical');
                next();
            },
            { moveCursorTo : outerEl, offset : ['100%-24', '50%'] },

            {
                waitFor : 500
            },

            function() {
                t.is(outerEl.scrollLeft, 0);
                t.is(outerEl.scrollTop, 0);

                SM.deactivate();
            }
        )
    })
    
    t.it('Should not scroll vertically when SM configured with the horizontal direction.', function (t) {
        t.chain(
            function (next) {
                createDom();
                next();
            },
            { waitFor : 500 },
            function (next) {
                updateOuterEl();
                t.wontFire(outerEl, 'scroll');
                SM.activate(outerEl, 'horizontal');
                next();
            },
            { moveCursorTo : outerEl, offset : ['50%', '100%-24'] },

            { waitFor : 500 },

            function() {
                t.is(outerEl.scrollLeft, 0);
                t.is(outerEl.scrollTop, 0);

                SM.deactivate();
            }
        )
    })
    
})    
