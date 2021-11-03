/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.1 (2021-11-03)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),f=tinymce.util.Tools.resolve("tinymce.Env"),w=tinymce.util.Tools.resolve("tinymce.util.Tools");e.add("preview",function(e){var n,t;function i(){return t.execCommand("mcePreview")}(n=e).addCommand("mcePreview",function(){var e,t;t=function(t){var n="",i=t.dom.encode,e=t.getParam("content_style","","string");n+='<base href="'+i(t.documentBaseURI.getURI())+'">';var o=t.getParam("content_css_cors",!1,"boolean")?' crossorigin="anonymous"':"";w.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+i(t.documentBaseURI.toAbsolute(e))+'"'+o+">"}),e&&(n+='<style type="text/css">'+e+"</style>");var a,r,s,c,d,l,m,y=-1===(c=(a=t).getParam("body_id","tinymce","string")).indexOf("=")?c:(s=(r=a).getParam("body_id","","hash"))[r.id]||s,u=-1===(m=(d=t).getParam("body_class","","string")).indexOf("=")?m:(l=d).getParam("body_class","","hash")[l.id]||"",v='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(f.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",g=t.getBody().dir,p=g?' dir="'+i(g)+'"':"";return"<!DOCTYPE html><html><head>"+n+'</head><body id="'+i(y)+'" class="mce-content-body '+i(u)+'"'+p+">"+t.getContent()+v+"</body></html>"}(e=n),e.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:t}}).focus("close")}),(t=e).ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction:i}),t.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction:i})})}();