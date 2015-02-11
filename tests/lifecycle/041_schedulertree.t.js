StartTest(function (t) {

    //======================================================================================================================================================================================================================================================
    t.diag('Sanity')

    t.ok(Sch.panel.SchedulerGrid, "Sch.panel.SchedulerGrid is here")


    var resourceStore = Ext.create('Sch.data.ResourceTreeStore', {
        model: 'Sch.model.Resource',

        root: {
            Id: 0,
            loaded : true,
            children: [{
                Id: 1,

                Name: 'Kastrup Airport',
                iconCls: 'sch-airport',
                expanded: true,

                children: [{
                    Id: 2,
                    Name: 'Terminal A',
                    iconCls: 'sch-terminal',
                    expanded: true,

                    children: [{
                        Id: 3,
                        Name: 'Gates 1 - 5',
                        iconCls: 'sch-gates-bundle'
                    }]
                }]
            }]
        }
    });

    // Store holding all the events
    var eventStore = Ext.create('Sch.data.EventStore', {
        data: [{
            Id: '1',
            ResourceId: 'r1',
            Name: 'Assignment 1',
            StartDate: "2011-01-04",
            EndDate: "2011-01-06"
        }, {
            Id: '2',
            ResourceId: 'r2',
            Name: 'Assignment 1',
            StartDate: "2011-01-05",
            EndDate: "2011-01-08"
        }, {
            Id: 'e21',
            ResourceId: '3',
            Name: 'Assignment 2',
            StartDate: "2011-01-06",
            EndDate: "2011-01-08"
        }, {
            Id: 'e22',
            ResourceId: '1',
            Name: 'Assignment 2',
            StartDate: "2011-01-07",
            EndDate: "2011-01-09"
        }, {
            Id: 'e32',
            ResourceId: '2',
            Name: 'Assignment 3',
            StartDate: "2011-01-03",
            EndDate: "2011-01-05"
        }, {
            Id: 'e33',
            ResourceId: '3',
            Name: 'Assignment 3',
            StartDate: "2011-01-09",
            EndDate: "2011-01-11"
        }]

    });

    //======================================================================================================================================================================================================================================================
    t.diag('Instantiation')

    var scheduler = new Sch.panel.SchedulerTree({
        eventResizeHandles: 'both',

        startDate: new Date(2011, 0, 3),
        endDate: new Date(2011, 0, 13),

        viewPreset: 'dayAndWeek',

        width: 800,
        height: 600,

        rowHeight: 30,

        // Setup static columns
        columns: [{
            header: 'Name',
            sortable: true,
            width: 100,
            xtype : 'treecolumn',
            dataIndex: 'Name'
        }],

        resourceStore: resourceStore,
        eventStore: eventStore
    });

    t.pass("Scheduler has been successfully instantiated")


    //======================================================================================================================================================================================================================================================
    t.diag('Rendering')

    scheduler.render(Ext.getBody())

    t.ok(scheduler.el, "Scheduler tree has been successfully rendered")


    //======================================================================================================================================================================================================================================================
    t.diag('Switch preset')

    scheduler.switchViewPreset('weekAndMonth');
    scheduler.switchViewPreset('monthAndYear');

    t.pass("View preset has been successfully changed")

    t.getSchedulerTree().destroy();
    t.pass("Destroyed, without rendering")
})