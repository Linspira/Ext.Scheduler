Sch.preset.Manager.registerPreset("customday", {
    timeColumnWidth :30,
    displayDateFormat : 'G:i',
    shiftIncrement : 1,
    shiftUnit :"DAY",
    timeResolution : {
        unit :"MINUTE",
        increment : 5
    },
    defaultSpan : 24,
    headerConfig : {
        bottom : {
            unit :"MINUTE",
            increment : 15,
            dateFormat : 'i'
        },
        middle : {
            unit :"HOUR",
            increment : 1,
            dateFormat : 'G:i'
        },
        top: {
            unit :"DAY",
            dateFormat : 'Y-m-d'
        }
    }
});

App = function() {
    return {
	   init: function() {
            Ext.define('ProcessStep', {
                extend : 'Sch.model.Event',
                fields: [
				    {name: 'Group'} 
                ]
            });

            Ext.define('LoadingLine', {
                extend : 'Ext.data.Model',
                idProperty: 'Group',
                fields: [
				    {name: 'Group'}, 
                    {name: 'Name'},
				    {name: 'Date',	type: 'date', dateFormat: 'Y-m-d G:i'}
                ]
            });

            var eventStore = new Sch.data.EventStore({
                model : 'ProcessStep',
                autoLoad : true,
                proxy : {
                    url : 'data.js',
                    type : 'ajax',
                    reader : {
                        type : 'json',
                        root : 'events'
                    }
                }
            });

            var timelineStore = new Ext.data.JsonStore({
                model : 'LoadingLine'
            });

		    this.ui = new Scheduler({
                width : ExampleDefaults.width,
                height : ExampleDefaults.height,
                timelineStore : timelineStore,
                loadMask : { store : eventStore },
                resourceStore : new Sch.data.ResourceStore(),

                // Store holding all the events
                eventStore : eventStore,

                renderTo : 'example-container',
                startDate: new Date(2011, 0, 1, 10),
                endDate: new Date(2011, 0, 1, 16)
            });

            eventStore.on('load', function(s) {
                timelineStore.loadData(s.proxy.reader.jsonData.deliveries);
                this.ui.getView().refresh();
            }, this);
        }
    };
}();

Ext.onReady(App.init, App); 
