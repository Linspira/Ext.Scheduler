Ext.data.JsonP.Sch_tooltip_Tooltip({"tagname":"class","name":"Sch.tooltip.Tooltip","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Tooltip.js","href":"Tooltip.html#Sch-tooltip-Tooltip"}],"extends":"Ext.ToolTip","private":true,"aliases":{},"alternateClassNames":[],"mixins":[],"requires":["Sch.tooltip.ClockTemplate"],"uses":[],"members":[{"name":"anchor","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-anchor","meta":{"private":true}},{"name":"anchorOffset","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-anchorOffset","meta":{"private":true}},{"name":"autoHide","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-autoHide","meta":{"private":true}},{"name":"dismissDelay","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-dismissDelay","meta":{"private":true}},{"name":"frame","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-frame","meta":{"private":true}},{"name":"hideDelay","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-hideDelay","meta":{"private":true}},{"name":"padding","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-padding","meta":{"private":true}},{"name":"quickShowInterval","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-quickShowInterval","meta":{"private":true}},{"name":"shadow","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-shadow","meta":{"private":true}},{"name":"showDelay","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-showDelay","meta":{"private":true}},{"name":"trackMouse","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-trackMouse","meta":{"private":true}},{"name":"valid","tagname":"property","owner":"Sch.tooltip.Tooltip","id":"property-valid","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-constructor","meta":{}},{"name":"afterRender","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-afterRender","meta":{"private":true}},{"name":"onElMouseEnter","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-onElMouseEnter","meta":{"private":true}},{"name":"onMyMouseMove","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-onMyMouseMove","meta":{"private":true}},{"name":"onMyMouseUp","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-onMyMouseUp","meta":{"private":true}},{"name":"show","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-show","meta":{"private":true}},{"name":"update","tagname":"method","owner":"Sch.tooltip.Tooltip","id":"method-update","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.tooltip.Tooltip","component":false,"superclasses":["Ext.ToolTip"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.ToolTip<div class='subclass '><strong>Sch.tooltip.Tooltip</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sch.tooltip.ClockTemplate' rel='Sch.tooltip.ClockTemplate' class='docClass'>Sch.tooltip.ClockTemplate</a></div><h4>Files</h4><div class='dependency'><a href='source/Tooltip.html#Sch-tooltip-Tooltip' target='_blank'>Tooltip.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Internal plugin showing a tooltip with event start/end information.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-anchor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-anchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-anchor' class='name expandable'>anchor</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'b'</code></p></div></div></div><div id='property-anchorOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-anchorOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-anchorOffset' class='name expandable'>anchorOffset</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='property-autoHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-autoHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-autoHide' class='name expandable'>autoHide</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-dismissDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-dismissDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-dismissDelay' class='name expandable'>dismissDelay</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-frame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-frame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-frame' class='name expandable'>frame</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-hideDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-hideDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-hideDelay' class='name expandable'>hideDelay</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-padding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-padding' class='name expandable'>padding</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'0 3 0 0'</code></p></div></div></div><div id='property-quickShowInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-quickShowInterval' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-quickShowInterval' class='name expandable'>quickShowInterval</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-shadow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-shadow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-shadow' class='name expandable'>shadow</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-showDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-showDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-showDelay' class='name expandable'>showDelay</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-trackMouse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-trackMouse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-trackMouse' class='name expandable'>trackMouse</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-valid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-property-valid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-property-valid' class='name expandable'>valid</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.tooltip.Tooltip-method-constructor' class='name expandable'>Sch.tooltip.Tooltip</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.tooltip.Tooltip\" rel=\"Sch.tooltip.Tooltip\" class=\"docClass\">Sch.tooltip.Tooltip</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.tooltip.Tooltip\" rel=\"Sch.tooltip.Tooltip\" class=\"docClass\">Sch.tooltip.Tooltip</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onElMouseEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-onElMouseEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-onElMouseEnter' class='name expandable'>onElMouseEnter</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onMyMouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-onMyMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-onMyMouseMove' class='name expandable'>onMyMouseMove</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onMyMouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-onMyMouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-onMyMouseUp' class='name expandable'>onMyMouseUp</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-show' class='name expandable'>show</a>( <span class='pre'>el, xOffset</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>xOffset</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.tooltip.Tooltip'>Sch.tooltip.Tooltip</span><br/><a href='source/Tooltip.html#Sch-tooltip-Tooltip-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.tooltip.Tooltip-method-update' class='name expandable'>update</a>( <span class='pre'>startDate, endDate, valid, redraw</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>set redraw to true if you want to force redraw of the tip\nrequired to update drag tip after scroll ...</div><div class='long'><p>set redraw to true if you want to force redraw of the tip\nrequired to update drag tip after scroll</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startDate</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>endDate</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>valid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>redraw</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});