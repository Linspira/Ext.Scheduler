Ext.define("DEMO.store.NavigationItems", {
    extend : 'Ext.data.Store',
    model : 'DEMO.model.NavigationItem',
    data : [
        { id : 'employeeList' , name : 'Employee List' },
        { id : 'schedule' , name : 'Schedule' }
    ]
});