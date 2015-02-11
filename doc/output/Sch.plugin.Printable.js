Ext.data.JsonP.Sch_plugin_Printable({"tagname":"class","name":"Sch.plugin.Printable","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Printable.js","href":"Printable.html#Sch-plugin-Printable"}],"aliases":{"plugin":["scheduler_printable"]},"alternateClassNames":[],"extends":"Ext.AbstractPlugin","mixins":[],"requires":["Ext.XTemplate"],"uses":[],"members":[{"name":"autoPrintAndClose","tagname":"cfg","owner":"Sch.plugin.Printable","id":"cfg-autoPrintAndClose","meta":{}},{"name":"docType","tagname":"cfg","owner":"Sch.plugin.Printable","id":"cfg-docType","meta":{}},{"name":"fakeBackgroundColor","tagname":"cfg","owner":"Sch.plugin.Printable","id":"cfg-fakeBackgroundColor","meta":{}},{"name":"lockableScope","tagname":"property","owner":"Sch.plugin.Printable","id":"property-lockableScope","meta":{"private":true}},{"name":"mainTpl","tagname":"property","owner":"Sch.plugin.Printable","id":"property-mainTpl","meta":{"private":true}},{"name":"scheduler","tagname":"property","owner":"Sch.plugin.Printable","id":"property-scheduler","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.plugin.Printable","id":"method-constructor","meta":{}},{"name":"afterPrint","tagname":"method","owner":"Sch.plugin.Printable","id":"method-afterPrint","meta":{}},{"name":"beforePrint","tagname":"method","owner":"Sch.plugin.Printable","id":"method-beforePrint","meta":{}},{"name":"getGridContent","tagname":"method","owner":"Sch.plugin.Printable","id":"method-getGridContent","meta":{"private":true}},{"name":"getStylesheets","tagname":"method","owner":"Sch.plugin.Printable","id":"method-getStylesheets","meta":{"private":true}},{"name":"init","tagname":"method","owner":"Sch.plugin.Printable","id":"method-init","meta":{"private":true}},{"name":"print","tagname":"method","owner":"Sch.plugin.Printable","id":"method-print","meta":{}},{"name":"setupScript","tagname":"method","owner":"Sch.plugin.Printable","id":"method-setupScript","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.plugin.Printable","short_doc":"Plugin (ptype = 'scheduler_printable') for printing an Ext Scheduler instance. ...","component":false,"superclasses":["Ext.AbstractPlugin"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><strong>Sch.plugin.Printable</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.XTemplate</div><h4>Files</h4><div class='dependency'><a href='source/Printable.html#Sch-plugin-Printable' target='_blank'>Printable.js</a></div></pre><div class='doc-contents'><p>Plugin (ptype = 'scheduler_printable') for printing an Ext Scheduler instance. Please note that this will not generate a picture perfect\n printed version, due to various limitations in the browser print implementations. If you require a high quality print, you should use the Export plugin instead and first export to PDF.</p>\n\n<p> To use this plugin, add it to scheduler as usual. The plugin will add an additional <code>print</code> method to the scheduler:</p>\n\n<pre><code>    var scheduler = Ext.create('<a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>', {\n        ...\n\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        plugins         : [\n            Ext.create('<a href=\"#!/api/Sch.plugin.Printable\" rel=\"Sch.plugin.Printable\" class=\"docClass\">Sch.plugin.Printable</a>', {\n                // default values\n                docType             : '&lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"&gt;',\n                autoPrintAndClose   : true\n            })\n        ]\n    });\n\n    ...\n\n    scheduler.print();\n</code></pre>\n\n<p>In the opened print window, a special 'sch-print-body' CSS class will be added to the BODY element. You can use this to\n further customize the printed contents.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-autoPrintAndClose' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-cfg-autoPrintAndClose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-cfg-autoPrintAndClose' class='name expandable'>autoPrintAndClose</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to automatically call print and close the new window after printing. ...</div><div class='long'><p>True to automatically call print and close the new window after printing. Default value is <code>true</code></p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-docType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-cfg-docType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-cfg-docType' class='name expandable'>docType</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is the DOCTYPE to use for the print window. ...</div><div class='long'><p>This is the DOCTYPE to use for the print window. It should be the same DOCTYPE as on your application page.</p>\n<p>Defaults to: <code>'&lt;!DOCTYPE HTML&gt;'</code></p></div></div></div><div id='cfg-fakeBackgroundColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-cfg-fakeBackgroundColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-cfg-fakeBackgroundColor' class='name expandable'>fakeBackgroundColor</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to reset background-color of events and enable use of border-width to fake background color (borders print by de...</div><div class='long'><p>True to reset background-color of events and enable use of border-width to fake background color (borders print by default in every browser). Default value is <code>true</code></p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lockableScope' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-property-lockableScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-property-lockableScope' class='name expandable'>lockableScope</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'top'</code></p></div></div></div><div id='property-mainTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-property-mainTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-property-mainTpl' class='name expandable'>mainTpl</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>private, the template for the new window</p>\n</div><div class='long'><p>private, the template for the new window</p>\n</div></div></div><div id='property-scheduler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-property-scheduler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-property-scheduler' class='name expandable'>scheduler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.plugin.Printable-method-constructor' class='name expandable'>Sch.plugin.Printable</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.plugin.Printable\" rel=\"Sch.plugin.Printable\" class=\"docClass\">Sch.plugin.Printable</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.plugin.Printable\" rel=\"Sch.plugin.Printable\" class=\"docClass\">Sch.plugin.Printable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterPrint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-afterPrint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-afterPrint' class='name expandable'>afterPrint</a>( <span class='pre'>scheduler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>An empty function by default, but provided so that you can perform a custom action\nafter the print plugin has extract...</div><div class='long'><p>An empty function by default, but provided so that you can perform a custom action\nafter the print plugin has extracted the data from the scheduler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scheduler</span> : <a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>/<a href=\"#!/api/Sch.panel.SchedulerTree\" rel=\"Sch.panel.SchedulerTree\" class=\"docClass\">Sch.panel.SchedulerTree</a><div class='sub-desc'><p>The scheduler instance</p>\n</div></li></ul></div></div></div><div id='method-beforePrint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-beforePrint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-beforePrint' class='name expandable'>beforePrint</a>( <span class='pre'>scheduler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>An empty function by default, but provided so that you can perform a custom action\nbefore the print plugin extracts d...</div><div class='long'><p>An empty function by default, but provided so that you can perform a custom action\nbefore the print plugin extracts data from the scheduler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scheduler</span> : <a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>/<a href=\"#!/api/Sch.panel.SchedulerTree\" rel=\"Sch.panel.SchedulerTree\" class=\"docClass\">Sch.panel.SchedulerTree</a><div class='sub-desc'><p>The scheduler instance</p>\n</div></li></ul></div></div></div><div id='method-getGridContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-getGridContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-getGridContent' class='name expandable'>getGridContent</a>( <span class='pre'>component</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getStylesheets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-getStylesheets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-getStylesheets' class='name expandable'>getStylesheets</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-init' class='name expandable'>init</a>( <span class='pre'>scheduler</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scheduler</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-print' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-print' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-print' class='name expandable'>print</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Prints a scheduler panel. ...</div><div class='long'><p>Prints a scheduler panel. This method will be aliased to the main scheduler instance, so you can call it directly:</p>\n\n<pre><code> scheduler.print()\n</code></pre>\n</div></div></div><div id='method-setupScript' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.plugin.Printable'>Sch.plugin.Printable</span><br/><a href='source/Printable.html#Sch-plugin-Printable-method-setupScript' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.plugin.Printable-method-setupScript' class='name expandable'>setupScript</a>( <span class='pre'>syncRowHeight, autoPrintAndClose, isChrome, isIE</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Script executed in the newly open window, to sync row heights ...</div><div class='long'><p>Script executed in the newly open window, to sync row heights</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>syncRowHeight</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>autoPrintAndClose</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>isChrome</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>isIE</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});