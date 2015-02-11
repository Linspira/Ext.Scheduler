StartTest(function(t) {
    // bypass alert warning since we're not loading CSS
    window.alert = Ext.emptyFn;

    Ext.Loader.setConfig({
        enabled             : true, 
        disableCaching      : false 
    });
    
    var extFolder = t.getExtBundleFolder();

    if (!extFolder) {
        t.fail('Ext JS folder not found');
        return;
    }

    Ext.Loader.setPath('Sch', '../js/Sch')
    Ext.Loader.setPath('Ext', extFolder + '/src')
    Ext.Loader.setPath('Ext.core', extFolder + '/src/core/src')

    // We should detect when files are not required properly
    var oldFn = Ext.Loader.syncRequire;
    Ext.Loader.syncRequire = function(file) {
        t.fail('FILE NOT REQUIRED:' + file);

        oldFn.apply(this, arguments);
    };

    t.requireOk([
        'Sch.data.ResourceTreeStore',
        'Sch.panel.SchedulerGrid',
        'Sch.panel.SchedulerTree'
    ], function () {
        // Required as of 4.1.1-rc2
        var as = t.beginAsync();
        Ext.onReady(function() {
            t.endAsync(as);
            t.ok(Sch.panel.SchedulerGrid, "Sch.panel.SchedulerGrid is here")
            t.ok(Sch.panel.SchedulerTree, "Sch.panel.SchedulerTree is here")
        
            var schedulerGrid = t.getScheduler();
            var schedulerTree = t.getSchedulerTree();
        
            schedulerGrid.render(Ext.getBody());
            schedulerTree.render(Ext.getBody());
            
            t.ok(schedulerGrid.getEl(), 'Scheduler grid has been rendered')
            t.ok(schedulerTree.getEl(), 'Scheduler tree has been rendered')
        })
    })
})    
