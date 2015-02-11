StartTest(function (t) {
    Ext.define('Sch.model.TempResource', {
        extend  : 'Sch.model.Resource',
        fields  : ['Group']
    });
    
    var scenario = function (config) {
        var resourceStore = t.getResourceStore({
            groupField  : 'Group',
            model       : 'Sch.model.TempResource',
            data        : (function () {
                var resources = [];
                for (var i = 1; i <= 5; i++) {
                    resources.push({
                        Id          : 'r' + i,
                        Name        : 'Resource ' + i,
                        Group       : 'Group'
                    });
                }

                return resources;
            })()
        });
        
        return t.getScheduler(Ext.apply({
            renderTo    : Ext.getBody(),
            features    : [{
                id                 : 'group',
                ftype              : 'scheduler_grouping',
                groupHeaderTpl     : '{name}',
                hideGroupedHeader  : true,
                enableGroupingMenu : false,
                
                headerRenderer     : function (startDate, endDate, resources, meta) {
                    meta.cellCls    = 'testCls';
                    meta.cellStyle  = 'border-left: red 4px solid;';
                    
                    var count = 0;
                    
                    Ext.each(resources, function (resource) {
                        Ext.each(resource.getEvents(), function (event) {
                            if (startDate <= event.getStartDate() && endDate > event.getStartDate()) {
                                ++count;
                            }
                        });
                    });
                    
                    return 'Events: ' + count;
                }
            }],
            store           : resourceStore,
            resourceStore   : resourceStore
        }, config));
    }
        
    t.it('Should apply custom renderer to grouping header', function (t) {
        var scheduler = scenario({
            cls : 'first'
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            function (next) {
                var cells = scheduler.el.query('.sch-grid-group-hd-cell');
                var el = Ext.fly(cells[1]);
                
                t.hasCls(el, 'testCls', 'Custom class set correctly');
                t.is(el.getStyle('border-left-color'), 'rgb(255, 0, 0)', 'Border color set correctly');
                t.is(el.getStyle('border-left-style'), 'solid', 'Border style set correctly');
                t.is(el.getStyle('border-left-width'), '4px', 'Border width set correctly');
                t.contentLike(el, 'Events: 1', 'Content rendered correctly');
                
                t.lockedAndNormalRowsSynced(scheduler);
                scheduler.destroy();
            }
        );
    });
    
    t.it('Should update grouping header after drag & drop', function (t) {
        var scheduler = scenario({
            cls : 'second'
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            { action : "drag", target : ".second " + Ext.grid.View.prototype.itemSelector + ":nth-child(2) > .sch-timetd .sch-event-inner", by : [-60, 2], offset : [58, 7] },
            function (next) {
                var cells = scheduler.el.query('.sch-grid-group-hd-cell');
                t.contentLike(Ext.fly(cells[1]), 'Events: 2', 'Header cell updated correctly');
                t.contentLike(Ext.fly(cells[2]), 'Events: 0', 'Header cell updated correctly');
                next();
            },
            { action : "drag", target : ".second " + Ext.grid.View.prototype.itemSelector + ":nth-child(3) > .sch-timetd .sch-resizable-handle-start", by : [-38, -2], offset : [5, 13] },
            function (next) {
                var cells = scheduler.el.query('.sch-grid-group-hd-cell');
                t.contentLike(Ext.fly(cells[2]), 'Events: 1', 'Header cell updated correctly');
                t.contentLike(Ext.fly(cells[3]), 'Events: 0', 'Header cell updated correctly');
                next();
            },
            { action : "drag", target : ".second " + Ext.grid.View.prototype.itemSelector + ":nth-child(4) > .sch-timetd", by : [57, 1], offset : [17, 17] },
            function (next) {
                var cells = scheduler.el.query('.sch-grid-group-hd-cell');
                t.contentLike(Ext.fly(cells[0]), 'Events: 1', 'Header cell updated correctly');
                scheduler.destroy();
                next();
            }
        );
    });
    
    t.it('Should update grouping header after CUD operations on event', function (t) {
        var scheduler = scenario({
            cls : 'third'
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            function (next) {
                // create
                t.contentLike(scheduler.el.down('.sch-grid-group-hd-cell'), 'Events: 0', 'Header updated correctly');
                scheduler.eventStore.add({
                    Id          : 100,
                    ResourceId  : 'r1',
                    Name        : 'Test assignment',
                    StartDate   : new Date(2011, 0, 3),
                    EndDate     : new Date(2011, 0, 7)
                });
                t.contentLike(scheduler.el.down('.sch-grid-group-hd-cell'), 'Events: 1', 'Header updated correctly');
                
                // update
                scheduler.eventStore.last().setStartDate(new Date(2011, 0, 5));
                t.contentLike(Ext.fly(scheduler.el.query('.sch-grid-group-hd-cell')[2]), 'Events: 2', 'Header updated correctly');
                
                scheduler.eventStore.remove(scheduler.eventStore.last());
                t.contentLike(Ext.fly(scheduler.el.query('.sch-grid-group-hd-cell')[2]), 'Events: 1', 'Header updated correctly');
                
                scheduler.destroy();
                next();
            }
        );
    });
    
    t.it('Should update grouping header after CUD operations on resource', function (t) {
        var scheduler = scenario({
            cls : 'fourth',
            
            features    : [{
                id                 : 'group',
                ftype              : 'scheduler_grouping',
                groupHeaderTpl     : '{name}',
                hideGroupedHeader  : true,
                enableGroupingMenu : false,
                
                headerRenderer     : function (startDate, endDate, resources, meta) {
                    return 'Resources: ' + resources.length;
                }
            }]
        });
        
        t.chain(
            { waitForEventsToRender : scheduler },
            function (next) {
                // create
                scheduler.resourceStore.add({
                    Id      : 'test',
                    Name    : 'test',
                    Group   : 'Group'
                });
                t.contentLike(Ext.fly(scheduler.el.query('.sch-grid-group-hd-cell')[1]), 'Resources: 6', 'Header updated correctly');
                
                // update
                scheduler.resourceStore.getAt(0).set('Group', 'Test Group');
                t.contentLike(Ext.fly(scheduler.el.query('.sch-grid-group-hd-cell')[1]), 'Resources: 5', 'Header updated correctly');
                
                // remove
                scheduler.resourceStore.removeAt(0);
                t.contentLike(Ext.fly(scheduler.el.query('.sch-grid-group-hd-cell')[1]), 'Resources: 4', 'Header updated correctly');
                
                scheduler.destroy();
                next();
            }
        );
    });
    
    if (Ext.getVersion().isGreaterThanOrEqual('4.2.2.1144')) {
        t.it('Drag create should work correctly with group collapsed', function (t) {
            var scheduler = scenario({
                cls : 'fifth',
                
                resourceStore   : t.getResourceStore({
                    groupField  : 'Group',
                    model       : 'Sch.model.TempResource',
                    data        : (function () {
                        var resources = [];
                        for (var i = 1; i < 3; i++) {
                            for (var j = 1; j <= 5; j++) {
                                resources.push({
                                    Id          : 'r' + i + j,
                                    Name        : 'Resource ' + i + j,
                                    Group       : 'Group' + i
                                });
                            }
                        }
        
                        return resources;
                    })()
                })
            });
            
            t.chain(
                { waitForRowsVisible : scheduler },
                { action : "click", target : "schedulergrid gridpanel => .x-grid-group-title", offset : [7, 7] },
                { action : "drag", target : "tr.x-grid-row:nth-child(4) .sch-timetd", offset : [104, 16], by : [86, -1] },
                function (next) {
                    var event = scheduler.eventStore.last();
                    t.ok(Sch.util.Date.betweenLesser(event.getStartDate(), new Date(2011, 0, 4), new Date(2011, 0, 5)), 'Start date is correct');
                    t.is(scheduler.resourceStore.getAt(7), event.getResource(), 'Resource is correct');
                    
                    next();
                },
                { action : "drag", target : [108, 122], by : [87, 4] },
                function (next) {
                    t.contentLike(scheduler.el.query('.testCls span')[scheduler.timeAxis.getCount()], 'Events: 1', 'Header updated');
                    scheduler.destroy();
                    next();
                }
            );
        });
    }
});