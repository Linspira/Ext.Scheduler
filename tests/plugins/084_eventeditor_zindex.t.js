StartTest(function(t) {
    var titleField = titleField = new Ext.form.TextField({
        name        : 'Name',
        fieldLabel  : 'Task'
    });
    
    var editor = Ext.create("Sch.plugin.EventEditor", {
            height          : 140,
            width           : 280,
            constrain       : true,
            animCollapse    : false,

            // panel with some form fields
            fieldsPanelConfig : {
                border      :false,
                padding     :10,
                xtype       : 'form',
                items       : titleField
            }
        }),
        editorPos;

    var s = t.getScheduler({
        width:undefined,
        height:undefined,
        //renderTo : Ext.getBody(),
        allowOverlap : false,
        forceFit : true,
        plugins : editor
    }, 2);

    var win = new Ext.window.Window({
        width: 500,
        height: 300,
        x:0,
        y:0,
        draggable: true,
        layout : 'fit',
        items: s,

        renderTo: Ext.getBody()
    });

    win.show();

    t.chain(
        { waitFor : 'eventsToRender', args : s },

        { action : 'doubleClick', target : '.sch-event' },

        { action : 'click', target : 'eventeditor datefield => .x-form-trigger' },
        { action : 'click', target : '.x-datepicker-date' },

        function(next) {
            t.ok(editor.isVisible(), 'Editor visible when clicking date in date picker');
            next();
        },

        { action : 'click', target : win.getHeader() },

        function(next) {
            t.ok(editor.isVisible(), 'Editor visible when clicking containing window');
            t.isGreater(editor.getEl().getZIndex(), win.getEl().getZIndex(), 'Editor visible when clicking containing window header');
            next();
        },

        //Testing position/layer of the editor when parent window is dragged
        { action : 'drag', target : '.x-window-header-draggable', by : [0, 50]},
        { action : 'doubleClick', target : '.sch-event' },

        function(next) {
            // dragging hides the editor, it should be no problem to bring it back
            t.isGreater(editor.getEl().getZIndex(), win.getEl().getZIndex(), 'Editor on top of window');
            next();

            // Clear first row to set the stage for drag create
            s.eventStore.remove(s.resourceStore.first().getEvents()[0]);
        },

        { action : 'drag', target : '.sch-timetd', by: [100, 0] },

        //Testing clicking outside of event editor
        function(next) {
            editorPos = editor.getPosition();
            var proxy = s.el.down(".sch-dragcreator-proxy");

            t.click([ editorPos[0] - 10, editorPos[1] ], function(){
                t.elementIsNotVisible(proxy, 'Proxy hidden after clicking on schedule');
                next();
            });
        },

        { action : 'drag', target : '.sch-timetd', by: [100, 0] },

        //Testing clicking an existing event with drag creator proxy shown
        function(next) {
            var proxy = s.el.down(".sch-dragcreator-proxy");

            t.doubleClick('.sch-event');
            t.elementIsNotVisible(proxy, 'Proxy hidden after clicking on existing event');
        }
    );
});
