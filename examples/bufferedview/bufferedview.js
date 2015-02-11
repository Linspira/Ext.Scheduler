Ext.ns('App');

//Ext.Loader.setConfig({ enabled : true, disableCaching : true });
//Ext.Loader.setPath('Sch', '../../js/Sch');

//Ext.require([
//    'Sch.panel.SchedulerGrid'
//]);

Ext.onReady(function() {
    App.Scheduler.init();
});

App.Scheduler = {
    
    createFakeData : function (count) {
        var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
            lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'],
            salaries     = [100, 400, 900, 1500, 1000000];

        var data = [];
        for (var i = 0; i < (count || 25); i++) {
            var salaryId    = Math.floor(Math.random() * salaries.length),
                firstNameId = Math.floor(Math.random() * firstNames.length),
                lastNameId  = Math.floor(Math.random() * lastNames.length),

                salary      = salaries[salaryId],
                name        = Ext.String.format("{0} {1}", firstNames[firstNameId], lastNames[lastNameId]);

            data.push({
                Id          : i,
                index       : i,
                salary      : salary,
                name        : name
            });
        }
        
        Ext.define('Employee', {
            extend: 'Sch.model.Resource',
            fields: [
               {name: 'Id', type: 'int'},
               {name: 'index', type: 'int'},
               {name: 'salary', type: 'float'},
               {name: 'name'}
            ]
        });
        
        // create the Resource Store
        var resourceStore   = Ext.create('Sch.data.ResourceStore', {
            model           : 'Employee',
            data            : data,
            proxy           : {
                type: 'memory'
            }            
        });
        
        var eventData       = []

        for (var i = 0; i < (count || 25); i++) {
            eventData.push({
                Id          : 'Event' + i,
                Name        : 'Event' + i + '-1',
                ResourceId  : i,
                StartDate   : "2011-01-26",
                EndDate     : "2011-01-27"
            });
            
            if (i % 2) eventData.push({
                Id          : 'Event' + i + '-2',
                Name        : 'Event' + i + '-2',
                ResourceId  : i,
                StartDate   : "2011-01-26",
                EndDate     : "2011-01-28"
            });
            
        }
        
        // Store holding all the events
        var eventStore = Ext.create('Sch.data.EventStore', {
            data            : eventData
        });
        
        return {
            resourceStore       : resourceStore,
            eventStore          : eventStore
        }
    },

    // Initialize application
    init : function() {
        
        var data        = this.createFakeData(1000)
        
        Ext.define('Line', {
            extend      : 'Ext.data.Model',
            fields      : [
                'Date',
                'Text',
                'Cls'
             ]
        });

        var lineStore = Ext.create('Ext.data.Store', {
            model       : 'Line',
            data        : [
                {
                    Date    : new Date(2011, 0, 28, 12),
                    Text    : 'Some important date',
                    Cls     : 'important'
                }
            ]
        });
        
        var zoneStore   = Ext.create('Ext.data.Store', {
            model   : 'Sch.model.Range',
            data    : [
                {
                    StartDate   : new Date(2011, 0, 27),
                    EndDate     : new Date(2011, 0, 29),
                    Cls         : 'myZoneStyle'
                }
            ]
        });
        

        var sched = Ext.create("Sch.panel.SchedulerGrid", {
            width       : ExampleDefaults.width,
            height      : ExampleDefaults.height,
            
            title       : 'Buffered view',
            
            renderTo    : 'example-container',
            
            startDate   : new Date(2011, 0, 25),
            endDate     : new Date(2011, 0, 30),
            
            disableSelection    : true,
            loadMask            : true,
            border              : true,
            
            viewPreset  : 'dayAndWeek', 
            
            // Setup static columns
            columns     : [ 
                { header : '#', sortable:true, width:50, dataIndex : 'index'},
                { header : 'Name', sortable:true, width:100, dataIndex : 'name'},
                { header : 'Salary', sortable:true, width:60, dataIndex : 'salary'}
            ],
            viewConfig  : {
                trackOver   : false
            },
            
            resourceStore   : data.resourceStore,
            eventStore      : data.eventStore,
            
            plugins : [
                'bufferedrenderer',

                Ext.create("Sch.plugin.Zones", {
                    store : zoneStore
                }),

                Ext.create("Sch.plugin.Lines", {
                    store : lineStore
                })
            ]
        });
    }
};
