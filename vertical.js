Ext.ns('App');
Ext.Loader.setConfig({ enabled : true, disableCaching : true });
Ext.Loader.setPath('Sch', '../../js/Sch');

Ext.require([
    'Sch.panel.SchedulerGrid',
    'Sch.plugin.Zones'
]);


Ext.onReady(function () {
    App.SchedulerDemo.init();
});

App.SchedulerDemo = {

    // Initialize application
    init : function () {
        Ext.define('Event', {
            extend : 'Sch.model.Event',
            fields : [
                {name : 'Title'},
                {name : 'Type'}
            ]
        });

        var zoneStore = Ext.create('Ext.data.JsonStore', {
            model : 'Sch.model.Range',
            data  : [
                {
                    // Nice 2 hour lunch
                    StartDate : new Date(2011, 11, 9, 12),
                    EndDate   : new Date(2011, 11, 9, 14),
                    Cls       : 'lunch-style'
                }
            ]
        });

        var sched = App.sched = Ext.create("Sch.panel.SchedulerGrid", {
            height                  : ExampleDefaults.height,
            width                   : ExampleDefaults.width,
            rowHeight               : 40,
            eventBarTextField       : 'Title',
            viewPreset              : 'hourAndDay',
            startDate               : new Date(2011, 11, 9, 7),
            endDate                 : new Date(2011, 11, 9, 17),
            orientation             : 'vertical',
            constrainDragToResource : false,
            snapToIncrement         : true,
            //constrainDragToResource : true,
            eventResizeHandles      : 'end',
            resourceColumnWidth     : 140,

            // For horizontal mode
            columns                 : [
                {
                    text      : 'Name',
                    width     : 200,
                    sortable  : true,
                    dataIndex : 'Name'
                }
            ],

            viewConfig : {
                // Experimental for CSS3 enabled browsers only
                altColCls       : '',
                stripeRows      : false,
                eventAnimations : true
            },

            eventBodyTemplate : new Ext.XTemplate(
                '<span class="time">{[Ext.Date.format(values.StartDate, "G:i")]}</span> {Title}'
            ),

            eventRenderer : function (event, resource, data) {
                data.cls = resource.data.Name;
                return event.data;
            },

            lockedViewConfig : {
                getRowClass : function (resource) {
                    return resource.data.Name;
                }
            },

            timeAxisColumnCfg : {
                text : 'Time of day'
            },

            // Store holding all the resources
            resourceStore     : Ext.create("Sch.data.ResourceStore", {
                model : 'Sch.model.Resource',
                data  : [
                    {Id : 'toJesrel', Name : 'Jesrel'},
                    {Id : 'toKevin', Name : 'Kevin'},
                    {Id : 'toWilfred', Name : 'Wilfred'},
                    {Id : 'toRichie', Name : 'Richie'},
                    {Id : 'toK1', Name : 'K1'},
                    {Id : 'toRany', Name : 'Rany'},
                    {Id : 'toLeysa', Name : 'Leysa'},
                    {Id : 'toRonquillo', Name : 'Ronquillo'},
                    {Id : 'toAgang', Name : 'Agang'}
                ]
            }),

            // Store holding all the events
            eventStore        : Ext.create("Sch.data.EventStore", {
                model : 'Event',
                data  : [
                    {ResourceId : 'toJesrel', Type : 'Call', Title : 'Assignment 1', StartDate : "2011-12-09 10:00", EndDate : "2011-12-09 11:00"},
                    {ResourceId : 'toWilfred', Type : 'Call', Title : 'Customer call', StartDate : "2011-12-09 14:00", EndDate : "2011-12-09 16:00"},
                    {ResourceId : 'toRany', Type : 'Meeting', Title : 'Assignment 2', StartDate : "2011-12-09 10:00", EndDate : "2011-12-09 12:00"}
                ]
            }),

//            plugins : [
//                this.zonePlugin = Ext.create("Sch.plugin.Zones", {
//                    store : zoneStore
//                })
//            ],

            onEventCreated : function (newEventRecord) {
                // Overridden to provide some defaults before adding it to the store
                newEventRecord.set({
                    Title : "Hey, let's meet",
                    Type  : 'Meeting'
                });
            },


            listeners : {
                columnwidthchange : function (timeAxisViewModel, width) {
                    sched && sched.getDockedItems('toolbar')[ 0 ].child('slider').setValue(width)
                }
            },

            tbar : [
                {
                    text         : 'Vertical view',
                    pressed      : true,
                    iconCls      : 'icon-vertical',
                    enableToggle : true,
                    toggleGroup  : 'orientation',
                    handler      : function () {
                        sched.setOrientation('vertical');
                    }
                },
                {
                    text         : 'Horizontal view',
                    enableToggle : true,
                    iconCls      : 'icon-horizontal',
                    toggleGroup  : 'orientation',
                    handler      : function () {
                        sched.setOrientation('horizontal');
                    }
                },
                '->',
                {
                    text    : 'Fit columns',
                    handler : function () {
                        Ext.getCmp('col-slider').suspendEvents();
                        sched.getSchedulingView().fitColumns();
                        Ext.getCmp('col-slider').resumeEvents();
                    }
                },
                'Column Width:',
                {
                    id    : 'col-slider',
                    xtype : 'slider',
                    width : 100,

                    value     : 160,
                    increment : 10,
                    minValue  : 30,
                    maxValue  : 200,

                    listeners : {
                        change : function (slider, value) {
                            sched.getSchedulingView().setColumnWidth(value);
                        }
                    }
                },
                ' ',
                'Row Height:',
                {
                    xtype : 'slider',
                    width : 100,

                    value     : 60,
                    increment : 10,
                    minValue  : 30,
                    maxValue  : 150,

                    listeners : {
                        change : function (sli, v) {
                            var schedulingView = sched.getSchedulingView();
                            schedulingView.setRowHeight(v);
                        }
                    }
                }
            ]
        });

        sched.render(Ext.getBody());
    }
};
