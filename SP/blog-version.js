let VERSION = "0.0.2"
let STATE = "-alpha"
let SUFFIX = ""
let PREFIX = ""
let FALLBACK_VERSION = "v0.0.0"

var string_ver = ""

function validVersion()
{
  var returnVer = PREFIX + "v" + VERSION + SUFFIX + STATE;
  
  if (VERSION.length < 5)
    return FALLBACK_VERSION;

  return returnVer;
}

string_ver = validVersion()

document.getElementById('version').innerHTML = "Blog Version: " + string_ver
