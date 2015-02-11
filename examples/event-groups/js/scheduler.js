Ext.define("Scheduler", {
    extend : 'Sch.SchedulerPanel',
    stripeRows: true,
    resizeHandles: 'none',
	allowOverlap : true,
    enableDragCreation: false,
	constrainDragToResource : true,
    eventResizeHandles : 'none',
    viewPreset: 'customday',
    viewConfig: {
        barMargin: 4
    },
    rowHeight: 30,

    // Extra cfg for drag zone
    dragConfig : null,

    getTimelineRecordByEventRecord : function(groupId) {
        return this.timelineStore.getById(groupId);
    },

    eventRenderer : function(item, r, tplData, row, col) {
		tplData.cls = item.get('Group') + ' ' + item.getResourceId();

        return Ext.apply({
            text : item.getResourceId() === 'truckloading' ? 'Truck Loading' : ''
        }, item.data);
    },

    initComponent: function() {
        var me = this;
        Ext.apply(this, {
            eventBodyTemplate : new Ext.XTemplate(
                '{text}<div {[this.getAttr(values)]}><div class="bullet"></div></div>',
                {
                    getAttr : function(data) {
                        var timelineRecord = me.getTimelineRecordByEventRecord(data.Group);
                        if (!timelineRecord) {
                            return 'class="x-hidden"';
                        }
                        
                        var timelineDate = timelineRecord.get('Date');
                        
                        if (Ext.Date.between(timelineDate, data.StartDate, data.EndDate)) {
                            return 'class="x-hidden"';
                        }
                        var view = me.getSchedulingView(),
                            position,
                            diff;
                        
                        if (timelineDate > data.EndDate) {
                            position = 'right';
                            diff = view.getCoordinateFromDate(timelineDate) - view.getCoordinateFromDate(data.EndDate) + 2;
                        } else {
                            position = 'left';
                            diff = view.getCoordinateFromDate(data.StartDate) - view.getCoordinateFromDate(timelineDate) - 2;
                        }
                        
                        if (Math.abs(diff) < 5) {
                            return 'class="x-hidden"';
                        }

                        return Ext.String.format('style="{0}:-{1}px;width:{1}px" class="dash {2}"', position, diff, position === 'right' ? 'dash-after' : 'dash-before');
                    }
                }
            ),
            
            columns : [
        	    {header: 'Name',sortable: true,width: 120, dataIndex: 'Name'}
            ],

		    plugins : [
                this.zonePlugin = Ext.create("Sch.plugin.Zones", {
                    store : Ext.create('Ext.data.JsonStore', {
                        model : 'Sch.model.Range',
                        data : [
                            {
                                StartDate : new Date(2011, 0, 1, 12, 30),
                                EndDate : new Date(2011, 0, 1, 13, 15),
                                Cls : 'customZoneStyle'
                            }
                        ]
                    })
                }),
			    this.linePlugin = new Lines({
				    store : this.timelineStore
        	    })
		    ]
        });

        this.callParent(arguments);
		this.resourceStore.loadData([
            {Id : 'conveyor', Name : 'Load Conveyor 1'},
            {Id : 'machine1', Name : 'Start Machine 1'},
            {Id : 'spareparts', Name : 'Gather spare parts'},
            {Id : 'packaging1', Name : 'Packaging #1'},
            {Id : 'packaging2', Name : 'Packaging #2'},
            {Id : 'truckloading', Name : 'Truck loading'}
        ]);
    },

    afterRender : function() {
        this.callParent(arguments);
        if (this.normalGrid) {
            var v = this.getSchedulingView();

            this.dz = new LineDragZone(this.el, Ext.apply({
                scheduler : this,
                view : v,
                sequenceStore : this.sequenceStore,
                linePlugin : this.linePlugin
            }, this.dragConfig || {}));
        }
    }
});

