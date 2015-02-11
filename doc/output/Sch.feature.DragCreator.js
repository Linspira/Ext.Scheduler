Ext.data.JsonP.Sch_feature_DragCreator({"tagname":"class","name":"Sch.feature.DragCreator","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"DragCreator.js","href":"DragCreator.html#Sch-feature-DragCreator"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Ext.XTemplate","Sch.tooltip.ClockTemplate","Sch.tooltip.Tooltip","Sch.util.Date","Sch.util.DragTracker","Sch.util.ScrollManager"],"uses":[],"members":[{"name":"disabled","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-disabled","meta":{}},{"name":"dragTip","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-dragTip","meta":{}},{"name":"dragTolerance","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-dragTolerance","meta":{}},{"name":"showDragTip","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-showDragTip","meta":{}},{"name":"showHoverTip","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-showHoverTip","meta":{}},{"name":"template","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-template","meta":{}},{"name":"validatorFnScope","tagname":"cfg","owner":"Sch.feature.DragCreator","id":"cfg-validatorFnScope","meta":{}},{"name":"dragging","tagname":"property","owner":"Sch.feature.DragCreator","id":"property-dragging","meta":{"private":true}},{"name":"hoverTipTemplate","tagname":"property","owner":"Sch.feature.DragCreator","id":"property-hoverTipTemplate","meta":{"private":true}},{"name":"tipCfg","tagname":"property","owner":"Sch.feature.DragCreator","id":"property-tipCfg","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-constructor","meta":{}},{"name":"eventSwallower","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-eventSwallower","meta":{"private":true}},{"name":"finalize","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-finalize","meta":{"private":true}},{"name":"getProxy","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-getProxy","meta":{"private":true}},{"name":"onBeforeDragStart","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onBeforeDragStart","meta":{"private":true}},{"name":"onDrag","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onDrag","meta":{"private":true}},{"name":"onDragEnd","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onDragEnd","meta":{"private":true}},{"name":"onDragStart","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onDragStart","meta":{"private":true}},{"name":"onMouseMove","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onMouseMove","meta":{"private":true}},{"name":"onSchedulerDestroy","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-onSchedulerDestroy","meta":{"private":true}},{"name":"setDisabled","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-setDisabled","meta":{}},{"name":"setupTooltips","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-setupTooltips","meta":{"private":true}},{"name":"tipOnBeforeShow","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-tipOnBeforeShow","meta":{"private":true}},{"name":"updateHoverTip","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-updateHoverTip","meta":{"private":true}},{"name":"validatorFn","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-validatorFn","meta":{}},{"name":"verifyLeftButtonPressed","tagname":"method","owner":"Sch.feature.DragCreator","id":"method-verifyLeftButtonPressed","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.feature.DragCreator","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Sch.feature.DragCreator</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.XTemplate</div><div class='dependency'><a href='#!/api/Sch.tooltip.ClockTemplate' rel='Sch.tooltip.ClockTemplate' class='docClass'>Sch.tooltip.ClockTemplate</a></div><div class='dependency'><a href='#!/api/Sch.tooltip.Tooltip' rel='Sch.tooltip.Tooltip' class='docClass'>Sch.tooltip.Tooltip</a></div><div class='dependency'><a href='#!/api/Sch.util.Date' rel='Sch.util.Date' class='docClass'>Sch.util.Date</a></div><div class='dependency'><a href='#!/api/Sch.util.DragTracker' rel='Sch.util.DragTracker' class='docClass'>Sch.util.DragTracker</a></div><div class='dependency'><a href='#!/api/Sch.util.ScrollManager' rel='Sch.util.ScrollManager' class='docClass'>Sch.util.ScrollManager</a></div><h4>Files</h4><div class='dependency'><a href='source/DragCreator.html#Sch-feature-DragCreator' target='_blank'>DragCreator.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-disabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to start disabled ...</div><div class='long'><p>true to start disabled</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-dragTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-dragTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-dragTip' class='name expandable'>dragTip</a> : Ext.tip.ToolTip/Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The tooltip instance to show while dragging to create a new event or a configuration object for the default instance ...</div><div class='long'><p>The tooltip instance to show while dragging to create a new event or a configuration object for the default instance of\nSch.tooltip.ToolTip</p>\n</div></div></div><div id='cfg-dragTolerance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-dragTolerance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-dragTolerance' class='name expandable'>dragTolerance</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Number of pixels the drag target must be moved before dragging is considered to have started. ...</div><div class='long'><p>Number of pixels the drag target must be moved before dragging is considered to have started. Defaults to 2.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='cfg-showDragTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-showDragTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-showDragTip' class='name expandable'>showDragTip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to show a time tooltip when dragging to create a new event ...</div><div class='long'><p>true to show a time tooltip when dragging to create a new event</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-showHoverTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-showHoverTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-showHoverTip' class='name expandable'>showHoverTip</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true to show a time tooltip when hovering over the time cells ...</div><div class='long'><p>true to show a time tooltip when hovering over the time cells</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-template' class='name expandable'>template</a> : Ext.Template/String<span class=\"signature\"></span></div><div class='description'><div class='short'>The HTML template shown when dragging to create new items ...</div><div class='long'><p>The HTML template shown when dragging to create new items</p>\n<p>Defaults to: <code>'&lt;div class=&quot;sch-dragcreator-proxy&quot;&gt;' + '&lt;div class=&quot;sch-event-inner&quot;&gt;&amp;#160;&lt;/div&gt;' + '&lt;/div&gt;'</code></p></div></div></div><div id='cfg-validatorFnScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-cfg-validatorFnScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-cfg-validatorFnScope' class='name expandable'>validatorFnScope</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The scope for the validatorFn</p>\n</div><div class='long'><p>The scope for the validatorFn</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dragging' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-property-dragging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-property-dragging' class='name expandable'>dragging</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-hoverTipTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-property-hoverTipTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-property-hoverTipTemplate' class='name expandable'>hoverTipTemplate</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tipCfg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-property-tipCfg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-property-tipCfg' class='name expandable'>tipCfg</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{trackMouse: true, bodyCls: 'sch-hovertip', autoHide: false, dismissDelay: 1000, showDelay: 300}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.feature.DragCreator-method-constructor' class='name expandable'>Sch.feature.DragCreator</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.feature.DragCreator\" rel=\"Sch.feature.DragCreator\" class=\"docClass\">Sch.feature.DragCreator</a><span class=\"signature\"></span></div><div class='description'><div class='short'>An internal class which shows a drag proxy while clicking and dragging. ...</div><div class='long'><p>An internal class which shows a drag proxy while clicking and dragging.\nCreate a new instance of this plugin</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.feature.DragCreator\" rel=\"Sch.feature.DragCreator\" class=\"docClass\">Sch.feature.DragCreator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-eventSwallower' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-eventSwallower' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-eventSwallower' class='name expandable'>eventSwallower</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-finalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-finalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-finalize' class='name expandable'>finalize</a>( <span class='pre'>doCreate</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>doCreate</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-getProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBeforeDragStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onBeforeDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onBeforeDragStart' class='name expandable'>onBeforeDragStart</a>( <span class='pre'>tracker, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tracker</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>tracker, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tracker</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onDragEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onDragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onDragEnd' class='name expandable'>onDragEnd</a>( <span class='pre'>tracker, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tracker</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onDragStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onDragStart' class='name expandable'>onDragStart</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onMouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onMouseMove' class='name expandable'>onMouseMove</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onSchedulerDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-onSchedulerDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-onSchedulerDestroy' class='name expandable'>onSchedulerDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enable/disable the plugin ...</div><div class='long'><p>Enable/disable the plugin</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>True to disable this plugin</p>\n</div></li></ul></div></div></div><div id='method-setupTooltips' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-setupTooltips' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-setupTooltips' class='name expandable'>setupTooltips</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-tipOnBeforeShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-tipOnBeforeShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-tipOnBeforeShow' class='name expandable'>tipOnBeforeShow</a>( <span class='pre'>tip</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tip</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-updateHoverTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-updateHoverTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-updateHoverTip' class='name expandable'>updateHoverTip</a>( <span class='pre'>date</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-validatorFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-validatorFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-validatorFn' class='name expandable'>validatorFn</a>( <span class='pre'>resourceRecord, startDate, endDate, e</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>An empty function by default, but provided so that you can perform custom validation on the event being created. ...</div><div class='long'><p>An empty function by default, but provided so that you can perform custom validation on the event being created.\nReturn true if the new event is valid, false to prevent an event being created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resourceRecord</span> : <a href=\"#!/api/Sch.model.Resource\" rel=\"Sch.model.Resource\" class=\"docClass\">Sch.model.Resource</a><div class='sub-desc'><p>the resource for which the event is being created</p>\n</div></li><li><span class='pre'>startDate</span> : Date<div class='sub-desc'>\n</div></li><li><span class='pre'>endDate</span> : Date<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Ext.EventObject<div class='sub-desc'><p>The event object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>isValid</p>\n</div></li></ul></div></div></div><div id='method-verifyLeftButtonPressed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.feature.DragCreator'>Sch.feature.DragCreator</span><br/><a href='source/DragCreator.html#Sch-feature-DragCreator-method-verifyLeftButtonPressed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.feature.DragCreator-method-verifyLeftButtonPressed' class='name expandable'>verifyLeftButtonPressed</a>( <span class='pre'>dragTracker, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dragTracker</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});