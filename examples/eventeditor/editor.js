Ext.ns('App');

Ext.Loader.setConfig({ enabled : true, disableCaching : true });

Ext.Loader.setPath('App', '.');
Ext.Loader.setPath('Sch', '../../js/Sch');

Ext.require([
    'App.DemoScheduler',
    'App.DemoEditor'
]);

Ext.onReady(function () {
    Ext.QuickTips.init();

    App.Scheduler.init();
});

App.Scheduler = {

    // Bootstrap function
    init: function () {
        this.scheduler = this.createScheduler();

        this.initStoreEvents();
    },

    onEventContextMenu: function (s, rec, e) {
        e.stopEvent();

        if (!s.ctx) {
            s.ctx = new Ext.menu.Menu({
                items: [{
                    text: 'Delete event',
                    iconCls: 'icon-delete',
                    handler : function() {
                        s.eventStore.remove(s.ctx.rec);
                    }
                }]
            });
        }
        s.ctx.rec = rec;
        s.ctx.showAt(e.getXY());
    },

    // Don't show tooltip if editor is visible
    beforeTooltipShow: function (s, r) {
        return s.getEventEditor().getCollapsed();
    },

    initStoreEvents: function () {
        var s = this.scheduler;

//        s.eventStore.on({
//            'update' : function (store, bookingRecord, operation) {
//                if (operation !== Ext.data.Model.EDIT) return;
//
//                var el= s.getSchedulingView().getElementFromEventRecord(bookingRecord);
//
//                if (el) {
//                    el.addCls('sch-fake-loading');
//
//                    // Simulate server delay 1.5 seconds
//                    Ext.Function.defer(function() {
//                        bookingRecord.commit();
//                        s.getSchedulingView().getElementFromEventRecord(bookingRecord).removeCls('sch-fake-loading');
//                    }, 1500);
//                }
//            },
//
//            add : function(s, rs) {
//                // Pretend it's been sent to server and stored
//                rs[0].commit();
//            }
//        });

        s.resourceStore.on('load', function(rStore) {

            // Events piggyback on the resource store load
            s.eventStore.loadData(rStore.proxy.getReader().rawData.tasks);
        });
    },


    allowModify : function(s, r) {
        // Don't allow modifications while "fake loading" is happening
//        return !r.dirty;
    },


    createScheduler: function () {

        Ext.define('MyResource', {
            extend : 'Sch.model.Resource',
            idProperty : 'YourIdField',
            fields: [
                'YourIdField',
                'ImgUrl',
                'Type',
                'Color'
             ]
        });

        Ext.define('MyEvent', {
            extend : 'Sch.model.Event',
            nameField : 'Title',

            fields: [
                'Type',
                'EventType',
                'Title',
                'Location'
             ]
        });

        // Store holding all the resources
        var resourceStore = Ext.create("Sch.data.ResourceStore", {
            model   : 'MyResource',

            proxy   : {
                type    : 'ajax',
                url     : 'data.js',

                reader  : {
                    type    : 'json',
                    root    : 'staff'
                }
            },

            sortInfo: { field: 'Id', direction: "ASC" }
        });

        // Store holding all the events
        var eventStore = Ext.create("Sch.data.EventStore", {
            model   : 'MyEvent'
        });

        var start = new Date(2011, 1, 7, 8);

        var ds = Ext.create("App.DemoScheduler", {
            height          : ExampleDefaults.height,
            width           : ExampleDefaults.width,
            renderTo        : 'example-container',

            resourceStore   : resourceStore,
            eventStore      : eventStore,

            viewPreset      : 'hourAndDay',

            startDate       : start,
            endDate         : Sch.util.Date.add(start,Sch.util.Date.HOUR, 10),

            listeners       : {
                eventcontextmenu    : this.onEventContextMenu,
                beforetooltipshow   : this.beforeTooltipShow,
                beforeeventresize   : this.allowModify,
                beforeeventdrag     : this.allowModify,

                scope               : this
            }
        });

        resourceStore.load();

        return ds;
    }
};
