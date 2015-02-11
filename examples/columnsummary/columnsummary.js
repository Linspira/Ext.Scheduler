Ext.ns('App');

//Ext.Loader.setConfig({ enabled : true, disableCaching : true });
//Ext.Loader.setPath('Sch', '../../js/Sch');

//Ext.require([
//    'Sch.panel.SchedulerGrid',
//    'Sch.plugin.SummaryColumn'
//]);

Sch.preset.Manager.registerPreset("dayWeek", {
    timeColumnWidth     : 100,
    rowHeight           : 24,
    resourceColumnWidth : 100,
    displayDateFormat   : 'Y-m-d G:i',
    shiftUnit           : "DAY",
    shiftIncrement      : 1,
    defaultSpan         : 5,
    timeResolution      : {
        unit      : "HOUR",
        increment : 1
    },
    headerConfig        : {
        bottom : {
            unit     : "DAY",
            renderer : null // set in scheduler initialization
        },
        middle : {
            unit       : "DAY",
            align      : 'center',
            dateFormat : 'D d M'
        },
        top    : {
            unit     : "WEEK",
            align    : 'center',
            renderer : function (start, end, cfg) {
                return Sch.util.Date.getShortNameOfUnit("WEEK") + '.' + Ext.Date.format(start, 'W M Y');
            }
        }
    }
});


Ext.onReady(function () {


    scheduler = App.SchedulerDemo.init();
});


Ext.define('MyScheduler', {
    extend             : 'Sch.panel.SchedulerGrid',
    xtype              : 'myscheduler',
    eventBarTextField  : 'Name',
    viewPreset         : 'dayWeek',
    startDate          : new Date(2010, 11, 1),
    endDate            : new Date(2010, 11, 14),
    rowHeight          : 36,
    title              : 'Tab 2 - Scheduler',
    //snapToIncrement : true,
    eventResizeHandles : 'both',

    // Setup static columns
    columns            : [
        {header : 'Name', sortable : true, width : 100, dataIndex : 'Name'},
        {header : 'Some link', sortable : true, width : 80, locked : true, renderer : function (v) {
            return '<a class="mylink" href="#">Click me!</a>';
        }},
        {
            xtype       : 'summarycolumn',
            header      : 'Time allocated',
            width       : 80,
            showPercent : false
        },

        {
            xtype       : 'summarycolumn',
            header      : '% allocated',
            showPercent : true,
            align       : 'center',
            width       : 60
        }
    ],

    onEventCreated : function (newEventRecord) {
        newEventRecord.setName('New task...');
    },

    initComponent : function() {
        this.headerTpl = new Ext.XTemplate('<tpl for="."><div class="summary-event" style="left:{left}px;width:{width}px">{text}</div></tpl>');

        Sch.preset.Manager.get('dayWeek').headerConfig.bottom.renderer = Ext.Function.bind(this.frozenHeaderRenderer, this);

        this.callParent(arguments);
    },

    // Render some special 'frozen' header events which are always shown
    frozenHeaderRenderer : function (start, end, cfg, i, eventStore) {
        var me = this;

        if (i === 0) {
            var eventsInSpan = eventStore.queryBy(function (task) {
                return task.getResourceId() === 'frozen' && me.timeAxis.timeSpanInAxis(task.getStartDate(), task.getEndDate());
            });

            var tplData = Ext.Array.map(eventsInSpan.items, function (task) {
                var startX = me.getSchedulingView().getXFromDate(task.getStartDate());
                var endX = me.getSchedulingView().getXFromDate(task.getEndDate());

                return {
                    left  : startX,
                    width : endX - startX,
                    text  : task.getName()
                }
            });

            return me.headerTpl.apply(tplData);
        }
    }
});


App.SchedulerDemo = {

    // Initialize application
    init : function () {

        var vp = new Ext.Viewport({
            layout : 'border',
            items  : [
                {
                    region      : 'north',
                    title       : 'North Panel',
                    height      : 100,
                    bodyPadding : 10,
                    html        : 'This example shows you the Sch.plugin.SummaryColumn plugin which can show either the amount of time or the percentage allocated within the visible view.' +
                        '<p>Note that the js for the example code is not minified so it is readable. See <a href="columnsummary.js">columnsummary.js</a>.</p>'
                },
                {
                    region      : 'west',
                    title       : 'West Panel',
                    width       : 150,
                    bodyPadding : 10,
                    html        : 'Some content...'
                },
                {
                    xtype     : 'tabpanel',
                    region    : 'center',
                    activeTab : 1,
                    items     : [
                        {
                            title : 'Tab 1 - Some other component'
                        },
                        {
                            xtype              : 'myscheduler',
                            startDate          : new Date(2010, 11, 1),
                            endDate            : new Date(2010, 11, 14),

                            // Store holding all the resources
                            resourceStore      : Ext.create("Sch.data.ResourceStore", {
                                data : [
                                    {Id : 'r1', Name : 'Mike'},
                                    {Id : 'r2', Name : 'Linda'},
                                    {Id : 'r3', Name : 'Don'},
                                    {Id : 'r4', Name : 'Karen'},
                                    {Id : 'r5', Name : 'Doug'},
                                    {Id : 'r6', Name : 'Peter'}
                                ]
                            }),

                            // Store holding all the events
                            eventStore         : Ext.create("Sch.data.EventStore", {
                                data : [
                                    {Id : 'e10', ResourceId : 'r1', Name : 'Assignment 1', StartDate : "2010-12-02", EndDate : "2010-12-03"},
                                    {Id : 'e11', ResourceId : 'r2', Name : 'Assignment 2', StartDate : "2010-12-04", EndDate : "2010-12-07"},
                                    {Id : 'e21', ResourceId : 'r3', Name : 'Assignment 3', StartDate : "2010-12-01", EndDate : "2010-12-04"},
                                    {Id : 'e22', ResourceId : 'r4', Name : 'Assignment 4', StartDate : "2010-12-05", EndDate : "2010-12-07"},
                                    {Id : 'e32', ResourceId : 'r5', Name : 'Assignment 5', StartDate : "2010-12-07", EndDate : "2010-12-11"},
                                    {Id : 'e33', ResourceId : 'r6', Name : 'Assignment 6', StartDate : "2010-12-09", EndDate : "2010-12-11"},

                                    {Id : 'special1', ResourceId : 'frozen', Name : 'Summary task', StartDate : "2010-12-02", EndDate : "2010-12-03"},
                                    {Id : 'special2', ResourceId : 'frozen', Name : 'Important info', StartDate : "2010-12-04", EndDate : "2010-12-07"},
                                    {Id : 'special3', ResourceId : 'frozen', Name : 'Some text', StartDate : "2010-12-08", EndDate : "2010-12-09"}
                                ]
                            })
                        }
                    ]
                }
            ]
        });

        var sched = Ext.ComponentQuery.query('schedulergrid[lockable=true]')[0],
            lockedSection = sched.lockedGrid,
            view = lockedSection.getView();

        lockedSection.el.on('click', function (e, t) {
            var rowNode = view.findItemByChild(t);
            var resource = view.getRecord(rowNode);
            Ext.Msg.alert('Hey', 'You clicked ' + resource.get('Name'));
            e.stopEvent();
        }, null, { delegate : '.mylink' });

        return vp.down('schedulergrid');
    }
};
