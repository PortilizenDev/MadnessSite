function setHref(id, href) {
  var a = document.getElementById(id);
  a.href = href;
}

var GITLINK = "https://github.com/DragginGroup/MadnessSite/issues/new/choose"
let VERSION = document.getElementById('version').innerHTML

if (VERSION.contains('-dev')) {
  GITLINK = "https://github.com/PortilizenDev/MadnessSite/issues/new/choose"
}

setHref('reportI', GITLINK)
