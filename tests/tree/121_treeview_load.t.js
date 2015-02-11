StartTest(function(t) {
    var scheduler = t.getSchedulerTree({
        renderTo : Ext.getBody()
    });
    
    t.waitForRowsVisible(scheduler, function() { 

        scheduler.eventStore.add(new Sch.model.Event({ 
            StartDate : scheduler.getStart(),
            EndDate : scheduler.getEnd(),
            ResourceId : scheduler.resourceStore.getRootNode().firstChild.getId(),
            Name : 'new_ev'
        }))

        t.contentLike(scheduler.getSchedulingView().el, 'new_ev', 'New event rendered');

        scheduler.eventStore.loadData(
            [
                new Sch.model.Event({ 
                    StartDate : scheduler.getStart(),
                    EndDate : scheduler.getEnd(),
                    ResourceId : scheduler.resourceStore.getRootNode().firstChild.getId(),
                    Name : 'new_ev2'
                })
            ]
        )
        t.contentLike(scheduler.getSchedulingView().el, 'new_ev2', 'New event2 rendered');
    })
})    
