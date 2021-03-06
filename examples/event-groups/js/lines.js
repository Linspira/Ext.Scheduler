Ext.define("Lines", {
    extend : "Sch.plugin.Lines", 

    init:function(scheduler) {
        this.uniqueCls = 'sch-linegroup';
        
        this.template = new Ext.XTemplate(
            '<tpl for=".">',
                '<div id="' + scheduler.id + '-{Group}" class="{Group} sch-timeline sch-summaryline sch-linegroup {Cls}" style="left:{left}px;top:{top}px;height:{[values.height+6]}px;">',
                    '<div title="Drag me" class="timeline-draghandle"><span>{Name}</span></div>',
                '</div>',
            '</tpl>'
        );       
        this.lineRe = new RegExp(scheduler.id + '-([^\\s]+)');
        this.callParent(arguments);  
    },
    
    resolveLineRecord : function(el) {
        var match = el.id.match(this.lineRe);

        if (match && match.length > 0) {
            var groupId = match[1];
            return this.store.getById(groupId);
        }
    }
});