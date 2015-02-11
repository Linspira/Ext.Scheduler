google.load("gdata", "1");

//Ext.Loader.setConfig({ enabled : true, disableCaching : true });
//Ext.Loader.setPath('Sch', '../../js/Sch');

//Ext.require([
//    'Sch.panel.SchedulerGrid',
//    'Sch.plugin.DragSelector'
//]);


Ext.ns('App');

Ext.onReady(function () {
    Ext.QuickTips.init();

    Sch.preset.Manager.registerPreset('calendar', {
        timeColumnWidth   : 300,
        displayDateFormat : 'G:i',
        shiftIncrement    : 1,
        shiftUnit         : "DAY",
        timeResolution    : {
            unit      : "MINUTE",
            increment : 5
        },
        headerConfig      : {
            middle : {
                unit       : "DAY",
                dateFormat : 'Y-m-d'
            }
        }
    });
    App.Calendar.init();
});

App.Calendar = {

    // Initialize application
    init : function () {

        this.grid = this.createGrid();

        this.gService = new google.gdata.calendar.CalendarService('exampleCo-exampleApp-1');

        // Add some dummy data
        this.addCalendar('egtovnheg2kg2v4eq7lbrgbm1g@group.calendar.google.com');
        this.addCalendar('lt5tsrugvhceecl61ervg34u3c@group.calendar.google.com');
        this.addCalendar('07efbagvhi6ktqglgq4b956nm0@group.calendar.google.com');
        this.addCalendar('developer-calendar@google.com');
    },

    addCalendar : function (email) {
        // Add to resource store right away
        this.grid.resourceStore.loadData([
            {Id : email, Title : email}
        ], true);

        var query = new google.gdata.calendar.CalendarEventQuery(Ext.String.format("http://www.google.com/calendar/feeds/{0}/public/full", email));

        // Create and set the minimum and maximum start time for the date query
        var startMin = new google.gdata.DateTime(Ext.Date.add(new Date(), Sch.util.Date.MONTH, -3));
        var startMax = new google.gdata.DateTime(Ext.Date.add(new Date(), Sch.util.Date.MONTH, 3));
        query.setMinimumStartTime(startMin);
        query.setMaximumStartTime(startMax);
        query.setSingleEvents(true);

        this.gService.getEventsFeed(query, Ext.Function.bind(this.onFeedLoad, this, [email], true), Ext.Function.bind(this.onFeedLoadError, this, [email]));
    },

    onFeedLoadError : function (email) {
        this.grid.resourceStore.remove(this.grid.resourceStore.getById(email));
        Ext.Msg.alert('Error', 'No public calendar found with the name ' - email);
    },

    onFeedLoad : function (root) {
        var events = [],
            entries = root.feed.entry,
            resourceStore = this.grid.store,
            rowRec = resourceStore.getById(arguments[arguments.length - 1]);

        rowRec.set('Title', root.feed.getTitle().getText());
        rowRec.set('Loaded', true);
        rowRec.commit();

        for (var i = 0; i < entries.length; i++) {
            var calendarEntry = entries[i];
            var entryTitle = calendarEntry.getTitle().getText();
            events.push({
                Id          : calendarEntry.id.getValue(),
                ResourceId  : rowRec.get('Id'),
                Title       : entryTitle,
                Description : calendarEntry.content.getText(),
                StartDate   : calendarEntry.getTimes()[0].startTime,
                EndDate     : calendarEntry.getTimes()[0].endTime
            });
        }

        this.grid.eventStore.loadData(events, true);
    },

    createGrid : function () {
        var start = new Date();

        Ext.define('Calendar', {
            extend : 'Sch.model.Resource',
            fields : [
                'Title',
                'Loaded'
            ]
        });

        Ext.define('Event', {
            extend : 'Sch.model.Event',
            fields : [
                {name : 'Title'},
                {name : 'Description'}
            ]
        });

        // Store holding all the resources
        var calendarStore = new Sch.data.ResourceStore({
            model : 'Calendar'
        });

        // Store holding all the events
        var eventStore = new Sch.data.EventStore({
            model : 'Event'
        });

        var filterField = new Ext.form.TextField({
            width           : 150,
            enableKeyEvents : true,
            emptyText       : 'Local filter'
        });

        filterField.on({
            keyup      : function (field, e) {
                if (e.getKey() == e.ESC || !this.getValue()) {
                    field.reset();
                    eventStore.clearFilter();
                } else {
                    eventStore.filterBy(function(rec) {
                        return rec.data.Title.match(this.getValue());
                    }, this);
                }
            },
            specialkey : function (field, e) {
                if (e.getKey() == e.ESC || !this.getValue()) {
                    field.reset();
                    eventStore.clearFilter();
                }
            }
        });

        var g = Ext.create("Sch.panel.SchedulerGrid", {
            readOnly          : true,
            height            : ExampleDefaults.height,
            width             : ExampleDefaults.width,
            renderTo          : 'example-container',
            enabledHdMenu     : false,
            multiSelect       : true,
            startDate         : start,
            endDate           : Sch.util.Date.add(start, Sch.util.Date.DAY, 7),
            viewPreset        : 'calendar',
            rowHeight         : 38,
            eventBarTextField : 'Title',
            forceFit          : true,

            // Setup static columns
            columns           : [
                {header : 'Calendar', sortable : true, width : 200, dataIndex : 'Title', renderer : function (v, m, r) {
                    m.tdCls = 'user';
                    return v;
                }}
            ],

            resourceStore : calendarStore,
            eventStore    : eventStore,
            border        : true,

            tooltipTpl : new Ext.XTemplate(
                '{[this.renderClock(values)]}',
                '<dl class="eventTip">',
                '<dt class="icon-task">What?</dt><dd>{Title}<br/>{Description}</dd>',
                '</dl>',
                {
                    renderClock : (function () {
                        var clockTpl = Ext.create("Sch.tooltip.ClockTemplate");
                        return function (values) {
                            return clockTpl.apply({
                                date : values.StartDate,
                                text : Ext.Date.format(values.StartDate, "G:i") + " - " + Ext.Date.format(values.EndDate, "G:i")
                            });
                        };
                    })()
                }
            ),

            tbar : [
                {
                    iconCls : 'icon-previous',
                    handler : function () {
                        g.shiftPrevious();
                    }
                },
                filterField,
                '->',
                {
                    iconCls : 'icon-next',
                    handler : function () {
                        g.shiftNext();
                    }
                }
            ]
        });

        return g;
    }
};

