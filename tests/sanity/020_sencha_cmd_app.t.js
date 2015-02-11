StartTest(function (t) {
    t.expectGlobal('TestApp')
    
    t.chain(
        {
            waitFor     : 'Selector',
            args        : '.sch-timetd'
        },
        function() {
            t.pass('Scheduler CMD app rendered without exception');
            
            t.monkeyTest(t.cq1('schedulerpanel').el, 10, null, t.done, t);
        }
    )

})
