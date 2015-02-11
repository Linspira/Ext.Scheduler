StartTest(function(t) {
    
    //======================================================================================================================================================================================================================================================
    t.diag('Sanity')
    
    t.expectGlobal('My')
    
    
    
    Ext.define('My.Model', {
        extend      : 'Ext.data.Model',
        
        idProperty  : 'id',
        fields      : [ 'id', 'name' ]
    })
    
    
    Ext.define('My.TreeStore', {
        extend      : 'Ext.data.TreeStore',
        
        model       : 'My.Model',
        
        mixins      : [
            'Sch.data.mixin.FilterableTreeStore'
        ],
        
        constructor : function () {
            this.callParent(arguments)
            
            this.initTreeFiltering()
        }
    })
    
    
    Ext.define('My.TreeView', {
        extend      : 'Ext.tree.View',
        
        alias       : 'widget.filtered-view',
        
        mixins      : [
            'Sch.mixin.FilterableTreeView'
        ],
        
        constructor : function () {
            this.callParent(arguments)
            
            this.initTreeFiltering()
        }
    })
    
    
    var treeStore = new My.TreeStore({
        proxy       : { type : 'memory', reader : { type : 'json' } },
        root        : { expanded : true, loaded : true },
        rootVisible : false
    })
    
    var nodeStore       = treeStore.nodeStore
    
    treeStore.proxy.data = {
        expanded        : true,
        loaded          : true,
        children        : [
            {
                id      : 1,
                leaf    : true,
                name    : 'one foo'
            },
            {
                id          : 2,
                name        : 'two bar',
                expanded    : true,
                
                children    : [
                    {
                        id          : 3,
                        name        : 'foo',
                        expanded    : true,
                        
                        children    : [
                            {
                                id          : 4,
                                name        : 'foobar',
                                expanded    : true,
                                
                                children    : [
                                    {
                                        id          : 5,
                                        leaf        : true,
                                        name        : 'blarg'
                                    }
                                ]
                            }
                            // eof 4
                        ]
                    },
                    // eof 3
                    {
                        id          : 6,
                        name        : 'blart',
                        leaf        : true
                    }
                ]
            },
            {
                id          : 7,
                name        : 'foo quix',
                children    : []
            }
        ]
    }
    
    treeStore.load()

    
    var treePanel       = new Ext.tree.Panel({
        treeStore       : treeStore,

        viewType        : 'filtered-view',
        viewConfig      : {
            store       : nodeStore
        },
        
        columns         : [
            {
                xtype       : 'treecolumn',
                dataIndex   : 'id'
            },
            {
                dataIndex   : 'name'
            }
        ],
        
        width           : 800,
        height          : 600,
        renderTo        : Ext.getBody()
    })
    
    var id = function (id) { return treeStore.tree.getNodeById(id) }
    
    
    // filtering, with "onlyParents". Should include the node 2, since its child node 3 matches the filter
    
    treeStore.filterTreeBy({
        filter          : function (node) {
            return node.get('name').match(/foo/)
        },
        onlyParents     : true
    })
    
    t.isDeeply(nodeStore.getRange(), [ id(2), id(3), id(4), id(5), id(7) ], 'Only matching parent nodes, their direct children and parent nodes left in view after filtering')
    
    // filtering, with "checkParents" and "shallowScan". Should not include the nodes 2 and 3, since 2 does not match
    // and filter should not recurse after finding non-matching parent
    
    treeStore.filterTreeBy({
        filter          : function (node) {
            return node.get('name').match(/two/)
        },
        onlyParents             : true,
        fullMathchingParents    : true
    })
    
    t.isDeeply(nodeStore.getRange(), [ id(2), id(3), id(4), id(5), id(6) ], 'Full sub-tree is included when `fullMathchingParents` option is provided')
    
    t.is(treePanel.getView().getNodes().length, 5, 'View was updated')
})    
