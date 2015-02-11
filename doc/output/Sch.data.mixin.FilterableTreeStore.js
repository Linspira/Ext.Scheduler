Ext.data.JsonP.Sch_data_mixin_FilterableTreeStore({"tagname":"class","name":"Sch.data.mixin.FilterableTreeStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FilterableTreeStore.js","href":"FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Sch.data.FilterableNodeStore"],"uses":[],"members":[{"name":"allowExpandCollapseWhileFiltered","tagname":"cfg","owner":"Sch.data.mixin.FilterableTreeStore","id":"cfg-allowExpandCollapseWhileFiltered","meta":{}},{"name":"reApplyFilterOnDataChange","tagname":"cfg","owner":"Sch.data.mixin.FilterableTreeStore","id":"cfg-reApplyFilterOnDataChange","meta":{}},{"name":"currentFilterGeneration","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-currentFilterGeneration","meta":{"private":true}},{"name":"dataChangeListeners","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-dataChangeListeners","meta":{"private":true}},{"name":"filterGeneration","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-filterGeneration","meta":{"private":true}},{"name":"isFilteredFlag","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-isFilteredFlag","meta":{"private":true}},{"name":"isHiddenFlag","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-isHiddenFlag","meta":{"private":true}},{"name":"lastTreeFilter","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-lastTreeFilter","meta":{"private":true}},{"name":"lastTreeHiding","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-lastTreeHiding","meta":{"private":true}},{"name":"monitoringDataChange","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-monitoringDataChange","meta":{"private":true}},{"name":"nodeStore","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-nodeStore","meta":{"private":true}},{"name":"nodeStoreClassName","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-nodeStoreClassName","meta":{"private":true}},{"name":"suspendIncrementalFilterRefresh","tagname":"property","owner":"Sch.data.mixin.FilterableTreeStore","id":"property-suspendIncrementalFilterRefresh","meta":{"private":true}},{"name":"clearTreeFilter","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-clearTreeFilter","meta":{}},{"name":"collectFilteredNodes","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-collectFilteredNodes","meta":{"private":true}},{"name":"createNodeStore","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-createNodeStore","meta":{"private":true}},{"name":"filterTreeBy","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-filterTreeBy","meta":{}},{"name":"getIndexInTotalDataset","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-getIndexInTotalDataset","meta":{"private":true}},{"name":"hideNodesBy","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-hideNodesBy","meta":{}},{"name":"inheritables","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-inheritables","meta":{"private":true}},{"name":"initTreeFiltering","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-initTreeFiltering","meta":{}},{"name":"isTreeFiltered","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-isTreeFiltered","meta":{}},{"name":"onNeedToUpdateFilter","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-onNeedToUpdateFilter","meta":{"private":true}},{"name":"reApplyFilter","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-reApplyFilter","meta":{"private":true}},{"name":"refreshNodeStoreContent","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-refreshNodeStoreContent","meta":{"private":true}},{"name":"showAllNodes","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-showAllNodes","meta":{}},{"name":"startDataChangeMonitoring","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-startDataChangeMonitoring","meta":{"private":true}},{"name":"stopDataChangeMonitoring","tagname":"method","owner":"Sch.data.mixin.FilterableTreeStore","id":"method-stopDataChangeMonitoring","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.data.mixin.FilterableTreeStore","short_doc":"This is a mixin for the Ext.data.TreeStore providing filtering functionality. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":["Sch.data.ResourceTreeStore"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Sch.data.mixin.FilterableTreeStore</strong></div></div><h4>Requires</h4><div class='dependency'>Sch.data.FilterableNodeStore</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Sch.data.ResourceTreeStore' rel='Sch.data.ResourceTreeStore' class='docClass'>Sch.data.ResourceTreeStore</a></div><h4>Files</h4><div class='dependency'><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore' target='_blank'>FilterableTreeStore.js</a></div></pre><div class='doc-contents'><p>This is a mixin for the Ext.data.TreeStore providing filtering functionality. Please note, that Ext JS does not support filtering of tree stores,\nand the functionality of this mixin is not related to the standard Ext JS store filtering (which utilizes Ext.util.Filter etc). This implementation should however be flexible\nenough to cover all common uses cases.</p>\n\n<p>The functionality of this class can be divided into two sections:</p>\n\n<h1>Filtering</h1>\n\n<p>Filtering of a tree store is different from filtering flat stores. In a flat store, all nodes (items)\nare of the same type and on the same hierarchical level. Filtering can hide any nodes that not matching some criteria.</p>\n\n<p>On the other hand, in tree stores some of the nodes represent parent nodes with child nodes\n(\"parent\", \"folder\", \"group\" etc) and other nodes are \"leaves\". And usually a \"leaf\" node can't be\nsufficiently identified w/o its parents - i.e. it is important to know all the parents that\na particular leaf node belongs to. So when filtering tree stores, we need to show all parent nodes of the filtered nodes.</p>\n\n<p>Moreover, filtering is usually being used for searching and thus should ignore the \"expanded/collapsed\"\nstate of tree nodes (we need to search among all nodes, including collapsed ones).</p>\n\n<p>Filtering can be activated with the <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" class=\"docClass\">filterTreeBy</a> method and cleared with <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-clearTreeFilter\" rel=\"Sch.data.mixin.FilterableTreeStore-method-clearTreeFilter\" class=\"docClass\">clearTreeFilter</a>.</p>\n\n<h1>Hiding/Showing nodes</h1>\n\n<p>Sometimes we want to keep some nodes in the tree, but remove them from the visual presentation and hide them.\nThis can be done with <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" class=\"docClass\">hideNodesBy</a> method and <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-showAllNodes\" rel=\"Sch.data.mixin.FilterableTreeStore-method-showAllNodes\" class=\"docClass\">showAllNodes</a> can be used to restore the previous state.\nWhen a node is hidden, all its child nodes are hidden too.</p>\n\n<p>\"Hidden\" nodes will never appear in filtered results - consider them removed from the tree store completely.\nThey will, however, appear in a data package for a <code>store.sync()</code> operation (you can override the the \"filterUpdated\" method to exclude them from there if needed).</p>\n\n<p>Note, that it is possible to filter a store with hidden nodes, but not the other way around (hide some nodes of a filtered store).</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-allowExpandCollapseWhileFiltered' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-cfg-allowExpandCollapseWhileFiltered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-cfg-allowExpandCollapseWhileFiltered' class='name expandable'>allowExpandCollapseWhileFiltered</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>When enabled (by default), tree store allows user to expand/collapse nodes while it is\nfiltered with the filterTreeBy...</div><div class='long'><p>When enabled (by default), tree store allows user to expand/collapse nodes while it is\nfiltered with the <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" class=\"docClass\">filterTreeBy</a> method. Please set it explicitly to <code>false</code> to restore the previous behavior,\nwhere collapse/expand operations were disabled.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-reApplyFilterOnDataChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-cfg-reApplyFilterOnDataChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-cfg-reApplyFilterOnDataChange' class='name expandable'>reApplyFilterOnDataChange</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>When enabled (by default), tree store will update the filtering (both filterTreeBy\nand hideNodesBy) after new data is...</div><div class='long'><p>When enabled (by default), tree store will update the filtering (both <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-filterTreeBy\" class=\"docClass\">filterTreeBy</a>\nand <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" class=\"docClass\">hideNodesBy</a>) after new data is added to the tree or removed from it. Please set it explicitly to <code>false</code> to restore the previous behavior,\nwhere this feature did not exist.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-currentFilterGeneration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-currentFilterGeneration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-currentFilterGeneration' class='name expandable'>currentFilterGeneration</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-dataChangeListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-dataChangeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-dataChangeListeners' class='name expandable'>dataChangeListeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-filterGeneration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-filterGeneration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-filterGeneration' class='name expandable'>filterGeneration</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-isFilteredFlag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-isFilteredFlag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-isFilteredFlag' class='name expandable'>isFilteredFlag</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-isHiddenFlag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-isHiddenFlag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-isHiddenFlag' class='name expandable'>isHiddenFlag</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-lastTreeFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-lastTreeFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-lastTreeFilter' class='name expandable'>lastTreeFilter</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>ref to the last filter applied</p>\n</div><div class='long'><p>ref to the last filter applied</p>\n</div></div></div><div id='property-lastTreeHiding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-lastTreeHiding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-lastTreeHiding' class='name expandable'>lastTreeHiding</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-monitoringDataChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-monitoringDataChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-monitoringDataChange' class='name expandable'>monitoringDataChange</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-nodeStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-nodeStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-nodeStore' class='name expandable'>nodeStore</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-nodeStoreClassName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-nodeStoreClassName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-nodeStoreClassName' class='name expandable'>nodeStoreClassName</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Sch.data.FilterableNodeStore'</code></p></div></div></div><div id='property-suspendIncrementalFilterRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-property-suspendIncrementalFilterRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-property-suspendIncrementalFilterRefresh' class='name expandable'>suspendIncrementalFilterRefresh</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clearTreeFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-clearTreeFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-clearTreeFilter' class='name expandable'>clearTreeFilter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears the current filter (if any). ...</div><div class='long'><p>Clears the current filter (if any).</p>\n\n<p>See also <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore\" rel=\"Sch.data.mixin.FilterableTreeStore\" class=\"docClass\">Sch.data.mixin.FilterableTreeStore</a> for additional information.</p>\n<h3 class='pa'>Fires</h3><ul><li>filter-clear</li><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-collectFilteredNodes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-collectFilteredNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-collectFilteredNodes' class='name expandable'>collectFilteredNodes</a>( <span class='pre'>top, params</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>top</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-createNodeStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-createNodeStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-createNodeStore' class='name expandable'>createNodeStore</a>( <span class='pre'>treeStore</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>treeStore</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-filterTreeBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-filterTreeBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-filterTreeBy' class='name expandable'>filterTreeBy</a>( <span class='pre'>params</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method filters the tree store. ...</div><div class='long'><p>This method filters the tree store. It accepts an object with the following properties:</p>\n\n<ul>\n<li><code>filter</code> - a function to check if a node should be included in the result. It will be called for each <strong>leaf</strong> node in the tree and will receive the current node as the first argument.\nIt should return <code>true</code> if the node should remain visible, <code>false</code> otherwise. The result will also contain all parents nodes of all matching leafs. Results will not include\nparent nodes, which do not have at least one matching child.\nTo call this method for parent nodes too, pass an additional parameter - <code>checkParents</code> (see below).</li>\n<li><code>scope</code> - a scope to call the filter with (optional)</li>\n<li><code>checkParents</code> - when set to <code>true</code> will also call the <code>filter</code> function for each parent node. If the function returns <code>false</code> for some parent node,\nit could still be included in the filtered result if some of its children match the <code>filter</code> (see also \"shallow\" option below). If the function returns <code>true</code> for a parent node, it will be\nincluded in the filtering results even if it does not have any matching child nodes.</li>\n<li><code>shallow</code> - implies <code>checkParents</code>. When set to <code>true</code>, it will stop checking child nodes if the <code>filter</code> function return <code>false</code> for a parent node. The whole sub-tree, starting\nfrom a non-matching parent, will be excluded from the result in such case.</li>\n<li><code>onlyParents</code> - alternative to <code>checkParents</code>. When set to <code>true</code> it will only call the provided <code>filter</code> function for parent tasks. If\nthe filter returns <code>true</code>, the parent and all its direct child leaf nodes will be included in the results. If the <code>filter</code> returns <code>false</code>, a parent node still can\nbe included in the results (w/o direct children leafs), if some of its child nodes matches the filter.</li>\n<li><code>fullMatchingParents</code> - implies <code>onlyParents</code>. In this mode, if a parent node matches the filter, then not only its direct children\nwill be included in the results, but the whole sub-tree, starting from the matching node.</li>\n</ul>\n\n\n<p>Repeated calls to this method will clear previous filters.</p>\n\n<p>This function can be also called with 2 arguments, which should be the <code>filter</code> function and <code>scope</code> in such case.</p>\n\n<p>For example:</p>\n\n<pre><code>treeStore.filterTreeBy({\n    filter          : function (node) { return node.get('name').match(/some regexp/) },\n    checkParents    : true\n})\n\n// or, if you don't need to set any options:\ntreeStore.filterTreeBy(function (node) { return node.get('name').match(/some regexp/) })\n</code></pre>\n\n<p>See also <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore\" rel=\"Sch.data.mixin.FilterableTreeStore\" class=\"docClass\">Sch.data.mixin.FilterableTreeStore</a> for additional information.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>filter-set</li><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-getIndexInTotalDataset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-getIndexInTotalDataset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-getIndexInTotalDataset' class='name expandable'>getIndexInTotalDataset</a>( <span class='pre'>record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-hideNodesBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-hideNodesBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-hideNodesBy' class='name expandable'>hideNodesBy</a>( <span class='pre'>filter, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hide nodes from the visual presentation of tree store (they still remain in the store). ...</div><div class='long'><p>Hide nodes from the visual presentation of tree store (they still remain in the store).</p>\n\n<p>See also <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore\" rel=\"Sch.data.mixin.FilterableTreeStore\" class=\"docClass\">Sch.data.mixin.FilterableTreeStore</a> for additional information.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : Function<div class='sub-desc'><ul>\n<li>A filtering function. Will be called for each node in the tree store and receive\nthe current node as the 1st argument. Should return <code>true</code> to <strong>hide</strong> the node\nand <code>false</code>, to <strong>keep it visible</strong>.</li>\n</ul>\n\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-inheritables' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-inheritables' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-inheritables' class='name expandable'>inheritables</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initTreeFiltering' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-initTreeFiltering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-initTreeFiltering' class='name expandable'>initTreeFiltering</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Should be called in the constructor of the consuming class, to activate the filtering functionality. ...</div><div class='long'><p>Should be called in the constructor of the consuming class, to activate the filtering functionality.</p>\n</div></div></div><div id='method-isTreeFiltered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-isTreeFiltered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-isTreeFiltered' class='name expandable'>isTreeFiltered</a>( <span class='pre'>orHasHiddenNodes</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if this store is currently filtered ...</div><div class='long'><p>Returns true if this store is currently filtered</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>orHasHiddenNodes</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onNeedToUpdateFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-onNeedToUpdateFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-onNeedToUpdateFilter' class='name expandable'>onNeedToUpdateFilter</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li>filter-set</li><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-reApplyFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-reApplyFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-reApplyFilter' class='name expandable'>reApplyFilter</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Fires</h3><ul><li>filter-set</li><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-refreshNodeStoreContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-refreshNodeStoreContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-refreshNodeStoreContent' class='name expandable'>refreshNodeStoreContent</a>( <span class='pre'>skipUIRefresh</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>skipUIRefresh</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-showAllNodes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-showAllNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-showAllNodes' class='name expandable'>showAllNodes</a>( <span class='pre'>skipNodeStoreRefresh</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shows all nodes that was previously hidden with hideNodesBy\n\nSee also Sch.data.mixin.FilterableTreeStore for addition...</div><div class='long'><p>Shows all nodes that was previously hidden with <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" rel=\"Sch.data.mixin.FilterableTreeStore-method-hideNodesBy\" class=\"docClass\">hideNodesBy</a></p>\n\n<p>See also <a href=\"#!/api/Sch.data.mixin.FilterableTreeStore\" rel=\"Sch.data.mixin.FilterableTreeStore\" class=\"docClass\">Sch.data.mixin.FilterableTreeStore</a> for additional information.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>skipNodeStoreRefresh</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>nodestore-datachange-end</li><li>nodestore-datachange-start</li></ul></div></div></div><div id='method-startDataChangeMonitoring' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-startDataChangeMonitoring' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-startDataChangeMonitoring' class='name expandable'>startDataChangeMonitoring</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-stopDataChangeMonitoring' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.data.mixin.FilterableTreeStore'>Sch.data.mixin.FilterableTreeStore</span><br/><a href='source/FilterableTreeStore.html#Sch-data-mixin-FilterableTreeStore-method-stopDataChangeMonitoring' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.data.mixin.FilterableTreeStore-method-stopDataChangeMonitoring' class='name expandable'>stopDataChangeMonitoring</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});