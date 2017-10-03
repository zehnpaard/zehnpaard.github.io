if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

!function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require
if(!a&&l)return l(o,!0)
if(s)return s(o,!0)
var h=new Error("Cannot find module '"+o+"'")
throw h.code="MODULE_NOT_FOUND",h}var u=n[o]={exports:{}}
t[o][0].call(u.exports,function(e){var n=t[o][1][e]
return i(n?n:e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o])
return i}({1:[function(e,t,n){var r={isDomPresent:!0,navigator:navigator,window:window,document:document,ajax:function(e){var t=new XMLHttpRequest
if(t.open("GET",e,!1),t.overrideMimeType&&t.overrideMimeType("text/plain"),t.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT"),t.send(null),200!==t.status&&0!==t.status)throw"XMLHttpRequest failed, status code "+t.status
return t.responseText}}
window.Processing=e("./src/")(r)},{"./src/":28}],2:[function(e,t,n){t.exports={name:"processing-js",version:"1.6.4",author:"Processing.js",repository:{type:"git",url:"git@github.com/processing-js/processing-js.git"},main:"processing.min.js",bugs:"https://github.com/processing-js/processing-js/issues",devDependencies:{argv:"~0.0.2",browserify:"^11.0.1",express:"~3.3.3",grunt:"~0.4.1","grunt-cli":"~0.1.8","grunt-contrib-jshint":"~0.4.3","http-server":"^0.9.0",minifier:"^0.7.1","node-minify":"~0.7.3",nunjucks:"~0.1.9",open:"0.0.3"},scripts:{test:"node test","test:manual":"http-server -o test/manual",start:"browserify build.js -o processing.js && minify --output processing.min.js processing.js"},license:"MIT",dependencies:{minifier:"^0.7.1"}}},{}],3:[function(e,t,n){t.exports=function(e){if(!(e instanceof Array)){if(e.iterator instanceof Function)return e.iterator()
throw"Unable to iterate: "+e}var t=-1
this.hasNext=function(){return++t<e.length},this.next=function(){return e[t]}}},{}],4:[function(e,t,n){t.exports={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:Math.PI,TWO_PI:2*Math.PI,TAU:2*Math.PI,HALF_PI:Math.PI/2,THIRD_PI:Math.PI/3,QUARTER_PI:Math.PI/4,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,WHITESPACE:" \t\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1,ADD:2,SUBTRACT:4,LIGHTEST:8,DARKEST:16,DIFFERENCE:32,EXCLUSION:64,MULTIPLY:128,SCREEN:256,OVERLAY:512,HARD_LIGHT:1024,SOFT_LIGHT:2048,DODGE:4096,BURN:8192,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,CHORD:2,PIE:3,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:32768,PREC_MAXVAL:32767,PREC_ALPHA_SHIFT:9,PREC_RED_SHIFT:1,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}},{}],5:[function(e,n,r){n.exports=function(e){var n={BufferMax:200},r=e.createElement("style"),i=!1
return r.textContent=[".pjsconsole.hidden {","  display: none!important;","}"].join("\n"),n.wrapper=e.createElement("div"),r.textContent+=["",".pjsconsole {","  opacity: .75;","  display: block;","  position: fixed;","  bottom: 0px;","  left: 0px;","  right: 0px;","  height: 50px;","  background-color: #aaa;","}"].join("\n"),n.wrapper.classList.add("pjsconsole"),n.dragger=e.createElement("div"),r.textContent+=["",".pjsconsole .dragger {","  display: block;","  border: 3px black raised;","  cursor: n-resize;","  position: absolute;","  top: 0px;","  left: 0px;","  right: 0px;","  height: 5px;","  background-color: #333;","}"].join("\n"),n.dragger.classList.add("dragger"),n.closer=e.createElement("div"),r.textContent+=["",".pjsconsole .closer {","  opacity: .5;","  display: block;","  border: 3px black raised;","  position: absolute;","  top: 10px;","  right: 30px;","  height: 20px;","  width: 20px;","  background-color: #ddd;","  color: #000;","  line-height: 20px;","  text-align: center;","  cursor: pointer","}"].join("\n"),n.closer.classList.add("closer"),n.closer.innerHTML="&#10006;",n.javaconsole=e.createElement("div"),r.textContent+=["",".pjsconsole .console {","  overflow-x: auto;","  display: block;","  position: absolute;","  left: 10px;","  right: 0px;","  bottom: 5px;","  top: 10px;","  overflow-y: scroll;","  height: 40px;","}"].join("\n"),n.javaconsole.setAttribute("class","console"),n.wrapper.appendChild(n.dragger),n.wrapper.appendChild(n.javaconsole),n.wrapper.appendChild(n.closer),n.dragger.onmousedown=function(t){n.divheight=n.wrapper.style.height,e.selection?e.selection.empty():window.getSelection().removeAllRanges()
var r=t.screenY
window.onmousemove=function(e){n.wrapper.style.height=parseFloat(n.divheight)+(r-e.screenY)+"px",n.javaconsole.style.height=parseFloat(n.divheight)+(r-e.screenY)-10+"px"},window.onmouseup=function(t){e.selection?e.selection.empty():window.getSelection().removeAllRanges(),n.wrapper.style.height=parseFloat(n.divheight)+(r-t.screenY)+"px",n.javaconsole.style.height=parseFloat(n.divheight)+(r-t.screenY)-10+"px",window.onmousemove=null,window.onmouseup=null}},n.BufferArray=[],n.print=n.log=function(){i||(e.body.appendChild(r),e.body.appendChild(n.wrapper),i=!0)
var s=Array.prototype.slice.call(arguments)
t=s.map(function(e,t){return e+(t+1===s.length?"":" ")}).join(""),n.BufferArray[n.BufferArray.length-1]?n.BufferArray[n.BufferArray.length-1]+=t+"":n.BufferArray.push(t),n.javaconsole.innerHTML=n.BufferArray.join(""),n.showconsole()},n.println=function(){var e=Array.prototype.slice.call(arguments)
e.push("<br>"),n.print.apply(n,e),n.BufferArray.length>n.BufferMax?n.BufferArray.splice(0,1):n.javaconsole.scrollTop=n.javaconsole.scrollHeight},n.showconsole=function(){n.wrapper.classList.remove("hidden")},n.hideconsole=function(){n.wrapper.classList.add("hidden")},n.closer.onclick=function(){n.hideconsole()},n.hideconsole(),n}},{}],6:[function(e,t,n){t.exports=function(e){function t(){}function n(e,t,n){if(!e.hasOwnProperty(t)||"function"!=typeof e[t])return void(e[t]=n)
var r=e[t]
if("$overloads"in r)return void(r.$defaultOverload=n)
if("$overloads"in n||r.length!==n.length){var i,s
"$overloads"in n?(i=n.$overloads.slice(0),i[r.length]=r,s=n.$defaultOverload):(i=[],i[n.length]=n,i[r.length]=r,s=r)
var o=function(){var e=o.$overloads[arguments.length]||("$methodArgsIndex"in o&&arguments.length>o.$methodArgsIndex?o.$overloads[o.$methodArgsIndex]:null)||o.$defaultOverload
return e.apply(this,arguments)}
o.$overloads=i,"$methodArgsIndex"in n&&(o.$methodArgsIndex=n.$methodArgsIndex),o.$defaultOverload=s,o.name=t,e[t]=o}}function r(e,t){function r(n){s.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},enumerable:!0})}var i=[]
for(var o in t)"function"==typeof t[o]?n(e,o,t[o]):"$"===o.charAt(0)||o in e||i.push(o)
for(;i.length>0;)r(i.shift())
e.$super=t}function i(e){return"string"==typeof e&&["byte","int","char","color","float","long","double"].indexOf(e)!==-1}t.prototype=e.PConstants
var s=new t
return Object.keys(e).forEach(function(t){s[t]=e[t]}),s.defineProperty=function(e,t,n){"defineProperty"in Object?Object.defineProperty(e,t,n):(n.hasOwnProperty("get")&&e.__defineGetter__(t,n.get),n.hasOwnProperty("set")&&e.__defineSetter__(t,n.set))},s.extendClassChain=function(e){for(var t=[e],n=e.$upcast;n;n=n.$upcast)r(n,e),t.push(n),e=n
for(;t.length>0;)t.pop().$self=e},s.extendStaticMembers=function(e,t){r(e,t)},s.extendInterfaceMembers=function(e,t){r(e,t)},s.addMethod=function(e,t,n,r){var i=e[t]
if(i||r){var s=n.length
if("$overloads"in i)i.$overloads[s]=n
else{var o=function(){var e=o.$overloads[arguments.length]||("$methodArgsIndex"in o&&arguments.length>o.$methodArgsIndex?o.$overloads[o.$methodArgsIndex]:null)||o.$defaultOverload
return e.apply(this,arguments)},a=[]
i&&(a[i.length]=i),a[s]=n,o.$overloads=a,o.$defaultOverload=i||n,r&&(o.$methodArgsIndex=s),o.name=t,e[t]=o}}else e[t]=n},s.createJavaArray=function(e,t){var n=null,r=null
if("string"==typeof e&&("boolean"===e?r=!1:i(e)&&(r=0)),"number"==typeof t[0]){var o=0|t[0]
if(t.length<=1){n=[],n.length=o
for(var a=0;a<o;++a)n[a]=r}else{n=[]
for(var l=t.slice(1),h=0;h<o;++h)n.push(s.createJavaArray(e,l))}}return n},s.defineProperty(s,"screenWidth",{get:function(){return window.innerWidth}}),s.defineProperty(s,"screenHeight",{get:function(){return window.innerHeight}}),s}},{}],7:[function(e,t,n){t.exports=function(e,t){var n,r=t.window,i=t.document,s=r.XMLHttpRequest,o=t.noop,a=t.isDOMPresent,h=t.version
e.version=h?h:"@DEV-VERSION@",e.lib={},e.registerLibrary=function(t,n){e.lib[t]=n,n.hasOwnProperty("init")&&n.init(defaultScope)},e.Sketch=function(e){this.attachFunction=e,this.options={pauseOnBlur:!1,globalKeyEvents:!1},this.onLoad=o,this.onSetup=o,this.onPause=o,this.onLoop=o,this.onFrameStart=o,this.onFrameEnd=o,this.onExit=o,this.params={},this.imageCache={pending:0,images:{},operaCache:{},add:function(e,t){if(!this.images[e]&&(a||(this.images[e]=null),t||(t=new Image,t.onload=function(e){return function(){e.pending--}}(this),this.pending++,t.src=e),this.images[e]=t,r.opera)){var n=i.createElement("div")
n.appendChild(t),n.style.position="absolute",n.style.opacity=0,n.style.width="1px",n.style.height="1px",this.operaCache[e]||(i.body.appendChild(n),this.operaCache[e]=n)}}},this.sourceCode=void 0,this.attach=function(e){if("function"==typeof this.attachFunction)this.attachFunction(e)
else{if(!this.sourceCode)throw"Unable to attach sketch to the processing instance"
var t=new Function("return ("+this.sourceCode+");")()
t(e),this.attachFunction=t}},this.toString=function(){var e,t="((function(Sketch) {\n"
t+="var sketch = new Sketch(\n"+this.sourceCode+");\n"
for(e in this.options)if(this.options.hasOwnProperty(e)){var n=this.options[e]
t+="sketch.options."+e+" = "+("string"==typeof n?'"'+n+'"':""+n)+";\n"}for(e in this.imageCache)this.options.hasOwnProperty(e)&&(t+='sketch.imageCache.add("'+e+'");\n')
return t+="return sketch;\n})(Processing.Sketch))"}}
var u=e.loadSketchFromSources=function(t,n,o){function a(e,t){var n=new s
n.onreadystatechange=function(){if(4===n.readyState){var e
200!==n.status&&0!==n.status?e="Invalid XHR status "+n.status:""===n.responseText&&(e="withCredentials"in new s&&(new s).withCredentials===!1&&"file:"===r.location.protocol?"XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.":"File is empty."),t(n.responseText,e)}},n.open("GET",e,!0),n.overrideMimeType&&n.overrideMimeType("application/json"),n.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT"),n.send(null)}function l(n,r){function s(i,s){if(h[n]=i,++f,s&&u.push(r+" ==> "+s),f===c){if(0!==u.length)throw"Processing.js: Unable to load pjs sketch files: "+u.join("\n")
var a=new e(t,h.join("\n"))
o&&o(a)}}if("#"===r.charAt(0)){var l=i.getElementById(r.substring(1))
return void(l?s(l.text||l.textContent):s("","Unable to load pjs sketch: element with id '"+r.substring(1)+"' was not found"))}a(r,s)}for(var h=[],u=[],c=n.length,f=0,p=0;p<c;++p)l(p,n[p])},c=function(){i.removeEventListener("DOMContentLoaded",c,!1)
for(var t;e.instances.length>0;)for(t=e.instances.length-1;t>=0;t--)e.instances[t]&&e.instances[t].exit()
var r,s=i.getElementsByTagName("canvas")
for(t=0,l=s.length;t<l;t++){var o=s[t].getAttribute("data-processing-sources")
if(null===o&&(o=s[t].getAttribute("data-src"),null===o&&(o=s[t].getAttribute("datasrc"))),o){r=o.split(/\s+/g)
for(var a=0;a<r.length;)r[a]?a++:r.splice(a,1)
u(s[t],r)}}var h,f,p,m,g=i.getElementsByTagName("script"),d=[]
for(h=g.length-1;h>=0;h--)d.push(g[h])
for(h=0,f=d.length;h<f;h++){var v=d[h]
if(v.getAttribute){var y=v.getAttribute("type")
if(y&&("text/processing"===y.toLowerCase()||"application/processing"===y.toLowerCase())){var A=v.getAttribute("data-processing-target")
if(s=n,A)s=i.getElementById(A)
else{for(var x=v.nextSibling;x&&1!==x.nodeType;)x=x.nextSibling
x&&"canvas"===x.nodeName.toLowerCase()&&(s=x)}if(s){if(v.getAttribute("src")){r=v.getAttribute("src").split(/\s+/),u(s,r)
continue}p=v.textContent||v.text,m=new e(s,p)}}}}}
return i.addEventListener("DOMContentLoaded",c,!1),e.reload=c,e.disableInit=function(){i.removeEventListener("DOMContentLoaded",c,!1)},e}},{}],8:[function(e,t,n){t.exports=function(e,t){return null===e||null===t?null===e&&null===t:"string"==typeof e?e===t:"object"!=typeof e?e===t:e.equals instanceof Function?e.equals(t):e===t}},{}],9:[function(e,t,n){t.exports=function(e,t){if("string"==typeof e){for(var n=0,r=0;r<e.length;++r)n=31*n+e.charCodeAt(r)&4294967295
return n}return"object"!=typeof e?4294967295&e:e.hashCode instanceof Function?e.hashCode():(e.$id===t&&(e.$id=Math.floor(65536*Math.random())-32768<<16|Math.floor(65536*Math.random())),e.$id)}},{}],10:[function(e,t,n){t.exports=function(e){function t(e){var t=-1
this.hasNext=function(){return t+1<e.length},this.next=function(){return e[++t]},this.remove=function(){e.splice(t--,1)}}function n(e){var i=[]
e&&e.toArray&&(i=e.toArray()),this.get=function(e){return i[e]},this.contains=function(e){return this.indexOf(e)>-1},this.indexOf=function(e){for(var t=0,n=i.length;t<n;++t)if(r(e,i[t]))return t
return-1},this.lastIndexOf=function(e){for(var t=i.length-1;t>=0;--t)if(r(e,i[t]))return t
return-1},this.add=function(){if(1===arguments.length)i.push(arguments[0])
else{if(2!==arguments.length)throw"Please use the proper number of parameters."
var e=arguments[0]
if("number"!=typeof e)throw typeof e+" is not a number"
if(!(e>=0&&e<=i.length))throw e+" is not a valid index"
i.splice(e,0,arguments[1])}},this.addAll=function(e,t){var n
if("number"==typeof e){if(e<0||e>i.length)throw"Index out of bounds for addAll: "+e+" greater or equal than "+i.length
for(n=new ObjectIterator(t);n.hasNext();)i.splice(e++,0,n.next())}else for(n=new ObjectIterator(e);n.hasNext();)i.push(n.next())},this.set=function(){if(2!==arguments.length)throw"Please use the proper number of parameters."
var e=arguments[0]
if("number"!=typeof e)throw typeof e+" is not a number"
if(!(e>=0&&e<i.length))throw e+" is not a valid index."
i.splice(e,1,arguments[1])},this.size=function(){return i.length},this.clear=function(){i.length=0},this.remove=function(e){return"number"==typeof e?i.splice(e,1)[0]:(e=this.indexOf(e),e>-1&&(i.splice(e,1),!0))},this.removeAll=function(e){var t,r,i,s=new n
for(s.addAll(this),this.clear(),t=0,r=0;t<s.size();t++)i=s.get(t),e.contains(i)||this.add(r++,i)
return this.size()<s.size()},this.isEmpty=function(){return!i.length},this.clone=function(){return new n(this)},this.toArray=function(){return i.slice(0)},this.iterator=function(){return new t(i)}}var r=(e.virtHashCode,e.virtEquals)
return n}},{}],11:[function(e,t,n){t.exports=function(e,t){var n=function(r){return"string"==typeof r&&1===r.length?this.code=r.charCodeAt(0):"number"==typeof r?this.code=r:r instanceof n?this.code=r:this.code=NaN,e[this.code]===t?e[this.code]=this:e[this.code]}
return n.prototype.toString=function(){return String.fromCharCode(this.code)},n.prototype.valueOf=function(){return this.code},n}({})},{}],12:[function(e,t,n){t.exports=function(e){function t(){function e(e){var t=n(e)%u.length
return t<0?u.length+t:t}function i(){if(!(c<=h*u.length)){for(var t=[],n=0;n<u.length;++n)void 0!==u[n]&&(t=t.concat(u[n]))
var r=2*u.length
u=[],u.length=r
for(var i=0;i<t.length;++i){var s=e(t[i].key),o=u[s]
void 0===o&&(u[s]=o=[]),o.push(t[i])}}}function s(e,t){function n(){for(;!o;)if(++s,i>=u.length)o=!0
else{if(!(void 0===u[i]||s>=u[i].length))return
s=-1,++i}}var r,i=0,s=-1,o=!1
this.hasNext=function(){return!o},this.next=function(){return r=e(u[i][s]),n(),r},this.remove=function(){void 0!==r&&(t(r),--s,n())},n()}function o(e,t,n){this.clear=function(){f.clear()},this.contains=function(e){return t(e)},this.containsAll=function(e){for(var t=e.iterator();t.hasNext();)if(!this.contains(t.next()))return!1
return!0},this.isEmpty=function(){return f.isEmpty()},this.iterator=function(){return new s(e,n)},this.remove=function(e){return!!this.contains(e)&&(n(e),!0)},this.removeAll=function(e){for(var t=e.iterator(),r=!1;t.hasNext();){var i=t.next()
this.contains(i)&&(n(i),r=!0)}return!0},this.retainAll=function(e){for(var t=this.iterator(),r=[];t.hasNext();){var i=t.next()
e.contains(i)||r.push(i)}for(var s=0;s<r.length;++s)n(r[s])
return r.length>0},this.size=function(){return f.size()},this.toArray=function(){for(var e=[],t=this.iterator();t.hasNext();)e.push(t.next())
return e}}function a(e){this._isIn=function(t){return t===f&&void 0===e.removed},this.equals=function(t){return r(e.key,t.getKey())},this.getKey=function(){return e.key},this.getValue=function(){return e.value},this.hashCode=function(t){return n(e.key)},this.setValue=function(t){var n=e.value
return e.value=t,n}}if(1===arguments.length&&arguments[0]instanceof t)return arguments[0].clone()
var l=arguments.length>0?arguments[0]:16,h=arguments.length>1?arguments[1]:.75,u=[]
u.length=l
var c=0,f=this
this.clear=function(){c=0,u=[],u.length=l},this.clone=function(){var e=new t
return e.putAll(this),e},this.containsKey=function(t){var n=e(t),i=u[n]
if(void 0===i)return!1
for(var s=0;s<i.length;++s)if(r(i[s].key,t))return!0
return!1},this.containsValue=function(e){for(var t=0;t<u.length;++t){var n=u[t]
if(void 0!==n)for(var i=0;i<n.length;++i)if(r(n[i].value,e))return!0}return!1},this.entrySet=function(){return new o(function(e){return new a(e)},function(e){return e instanceof a&&e._isIn(f)},function(e){return f.remove(e.getKey())})},this.get=function(t){var n=e(t),i=u[n]
if(void 0===i)return null
for(var s=0;s<i.length;++s)if(r(i[s].key,t))return i[s].value
return null},this.isEmpty=function(){return 0===c},this.keySet=function(){return new o(function(e){return e.key},function(e){return f.containsKey(e)},function(e){return f.remove(e)})},this.values=function(){return new o(function(e){return e.value},function(e){return f.containsValue(e)},function(e){return f.removeByValue(e)})},this.put=function(t,n){var s=e(t),o=u[s]
if(void 0===o)return++c,u[s]=[{key:t,value:n}],i(),null
for(var a=0;a<o.length;++a)if(r(o[a].key,t)){var l=o[a].value
return o[a].value=n,l}return++c,o.push({key:t,value:n}),i(),null},this.putAll=function(e){for(var t=e.entrySet().iterator();t.hasNext();){var n=t.next()
this.put(n.getKey(),n.getValue())}},this.remove=function(t){var n=e(t),i=u[n]
if(void 0===i)return null
for(var s=0;s<i.length;++s)if(r(i[s].key,t)){--c
var o=i[s].value
return i[s].removed=!0,i.length>1?i.splice(s,1):u[n]=void 0,o}return null},this.removeByValue=function(e){var t,n,r,i
for(t in u)if(u.hasOwnProperty(t))for(n=0,r=u[t].length;n<r;n++)if(i=u[t][n],i.value===e)return u[t].splice(n,1),!0
return!1},this.size=function(){return c}}var n=e.virtHashCode,r=e.virtEquals
return t}},{}],13:[function(e,t,n){t.exports=function(e,t){function n(e){var t=250,n=e.size/t,r=i.createElement("canvas")
r.width=2*t,r.height=2*t,r.style.opacity=0
var o=e.getCSSDefinition(t+"px","normal"),a=r.getContext("2d")
a.font=o
var l="dbflkhyjqpg"
r.width=a.measureText(l).width,a.font=o
var h=i.createElement("div")
h.style.position="absolute",h.style.opacity=0,h.style.fontFamily='"'+e.name+'"',h.style.fontSize=t+"px",h.innerHTML=l+"<br/>"+l,i.body.appendChild(h)
var u=r.width,c=r.height,f=c/2
a.fillStyle="white",a.fillRect(0,0,u,c),a.fillStyle="black",a.fillText(l,0,f)
for(var p=a.getImageData(0,0,u,c).data,m=0,g=4*u,d=p.length;++m<d&&255===p[m];)s()
var v=Math.round(m/g)
for(m=d-1;--m>0&&255===p[m];)s()
var y=Math.round(m/g)
if(e.ascent=n*(f-v),e.descent=n*(y-f),i.defaultView.getComputedStyle){var A=i.defaultView.getComputedStyle(h,null).getPropertyValue("height")
A=n*A.replace("px",""),A>=2*e.size&&(e.leading=Math.round(A/2))}if(i.body.removeChild(h),e.caching)return a}function r(e,r){e===t&&(e=""),this.name=e,r===t&&(r=0),this.size=r,this.glyph=!1,this.ascent=0,this.descent=0,this.leading=1.2*r
var i=e.indexOf(" Italic Bold")
i!==-1&&(e=e.substring(0,i)),this.style="normal"
var s=e.indexOf(" Italic")
s!==-1&&(e=e.substring(0,s),this.style="italic"),this.weight="normal"
var o=e.indexOf(" Bold")
if(o!==-1&&(e=e.substring(0,o),this.weight="bold"),this.family="sans-serif",e!==t)switch(e){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=e
break
default:this.family='"'+e+'", sans-serif'}this.context2d=n(this),this.css=this.getCSSDefinition(),this.context2d&&(this.context2d.font=this.css)}var i=(e.Browser.window,e.Browser.document),s=e.noop
return r.prototype.caching=!0,r.prototype.getCSSDefinition=function(e,n){e===t&&(e=this.size+"px"),n===t&&(n=this.leading+"px")
var r=[this.style,"normal",this.weight,e+"/"+n,this.family]
return r.join(" ")},r.prototype.measureTextWidth=function(e){return this.context2d.measureText(e).width},r.prototype.measureTextWidthFallback=function(e){var t=i.createElement("canvas"),n=t.getContext("2d")
return n.font=this.css,n.measureText(e).width},r.PFontCache={length:0},r.get=function(e,t){t=(10*t+.5|0)/10
var n=r.PFontCache,i=e+"/"+t
if(!n[i]){if(n[i]=new r(e,t),n.length++,50===n.length){r.prototype.measureTextWidth=r.prototype.measureTextWidthFallback,r.prototype.caching=!1
var s
for(s in n)"length"!==s&&(n[s].context2d=null)
return new r(e,t)}if(400===n.length)return r.PFontCache={},r.get=r.getFallback,new r(e,t)}return n[i]},r.getFallback=function(e,t){return new r(e,t)},r.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]},r.preloading={template:{},initialized:!1,initialize:function(){var e=function(){var e="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#",t=function(e){return"AAAAAAAA".substr(~~e?7-e:6)}
return e.replace(/[#237]/g,t)},t=i.createElement("style")
t.setAttribute("type","text/css"),t.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+e()+"')\n       format('truetype');\n}",i.head.appendChild(t)
var n=i.createElement("span")
n.style.cssText='position: absolute; top: -1000; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;',n.innerHTML="AAAAAAAA",i.body.appendChild(n),this.template=n,this.initialized=!0},getElementWidth:function(e){return i.defaultView.getComputedStyle(e,"").getPropertyValue("width")},timeAttempted:0,pending:function(e){this.initialized||this.initialize()
for(var t,n,r=this.getElementWidth(this.template),s=0;s<this.fontList.length;s++){if(t=this.fontList[s],n=this.getElementWidth(t),this.timeAttempted<4e3&&n===r)return this.timeAttempted+=e,!0
i.body.removeChild(t),this.fontList.splice(s--,1),this.timeAttempted=0}return 0!==this.fontList.length},fontList:[],addedList:{},add:function(e){this.initialized||this.initialize()
var t="object"==typeof e?e.fontFace:e,n="object"==typeof e?e.url:e
if(!this.addedList[t]){var r=i.createElement("style")
r.setAttribute("type","text/css"),r.innerHTML="@font-face{\n  font-family: '"+t+"';\n  src:  url('"+n+"');\n}\n",i.head.appendChild(r),this.addedList[t]=!0
var s=i.createElement("span")
s.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;",s.style.fontFamily='"'+t+'", "PjsEmptyFont", fantasy',s.innerHTML="AAAAAAAA",i.body.appendChild(s),this.fontList.push(s)}}},r}},{}],14:[function(e,t,n){t.exports=function(e,t){var n=e.p,r=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof r?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}
return r.prototype={set:function(){if(6===arguments.length){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else 1===arguments.length&&arguments[0]instanceof r?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new r
return e.set(this.elements),e},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2],this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
return e instanceof PVector?(n=e.x,r=e.y,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],t||(t=[])),t instanceof Array?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2],t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]):t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2],t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5],t.z=0),t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},shearX:function(e){this.apply(1,0,1,Math.tan(e),0,0)},shearY:function(e){this.apply(1,0,1,0,Math.tan(e),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(Math.abs(e)>PConstants.MIN_INT){var t=this.elements[0],n=this.elements[1],r=this.elements[2],i=this.elements[3],s=this.elements[4],o=this.elements[5]
return this.elements[0]=s/e,this.elements[3]=-i/e,this.elements[1]=-n/e,this.elements[4]=t/e,this.elements[2]=(n*o-s*r)/e,this.elements[5]=(i*r-t*o)/e,!0}return!1},scale:function(e,n){e&&n===t&&(n=e),e&&n&&(this.elements[0]*=e,this.elements[1]*=n,this.elements[3]*=e,this.elements[4]*=n)},invScale:function(e,t){e&&!t&&(t=e),this.scale(1/e,1/t)},apply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,this.elements[2],0,0,this.elements[5]],n=0,i=0;i<2;i++)for(var s=0;s<3;s++,n++)t[n]+=this.elements[3*i+0]*e[s+0]+this.elements[3*i+1]*e[s+3]
this.elements=t.slice()},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1],t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4],t[0]=this.elements[0]*e[0]+this.elements[3]*e[1],t[3]=this.elements[0]*e[3]+this.elements[3]*e[4],t[1]=this.elements[1]*e[0]+this.elements[4]*e[1],t[4]=this.elements[1]*e[3]+this.elements[4]*e[4],this.elements=t.slice()},rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=this.elements[0],i=this.elements[1]
this.elements[0]=t*r+n*i,this.elements[1]=-n*r+t*i,r=this.elements[3],i=this.elements[4],this.elements[3]=t*r+n*i,this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-Math.PI)},print:function(){var e=printMatrixHelper(this.elements),t=""+n.nfs(this.elements[0],e,4)+" "+n.nfs(this.elements[1],e,4)+" "+n.nfs(this.elements[2],e,4)+"\n"+n.nfs(this.elements[3],e,4)+" "+n.nfs(this.elements[4],e,4)+" "+n.nfs(this.elements[5],e,4)+"\n\n"
n.println(t)}},r}},{}],15:[function(e,t,n){t.exports=function(e,t){var n=e.p,r=function(){this.reset()}
return r.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof r?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new r
return e.set(this.elements),e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(e,n,r){r===t&&(r=0),this.elements[3]+=e*this.elements[0]+n*this.elements[1]+r*this.elements[2],this.elements[7]+=e*this.elements[4]+n*this.elements[5]+r*this.elements[6],this.elements[11]+=e*this.elements[8]+n*this.elements[9]+r*this.elements[10],this.elements[15]+=e*this.elements[12]+n*this.elements[13]+r*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1],this.elements[1]=e,e=this.elements[8],this.elements[8]=this.elements[2],this.elements[2]=e,e=this.elements[6],this.elements[6]=this.elements[9],this.elements[9]=e,e=this.elements[3],this.elements[3]=this.elements[12],this.elements[12]=e,e=this.elements[7],this.elements[7]=this.elements[13],this.elements[13]=e,e=this.elements[11],this.elements[11]=this.elements[14],this.elements[14]=e},mult:function(e,t){var n,r,i,s
return e instanceof PVector?(n=e.x,r=e.y,i=e.z,s=1,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],i=e[2],s=e[3]||1,(!t||3!==t.length&&4!==t.length)&&(t=[0,0,0])),t instanceof Array&&(3===t.length?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]):4===t.length&&(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*s,t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*s,t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*s,t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*s)),t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]),t},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,i=0;i<4;i++)for(var s=0;s<4;s++,n++)t[n]+=this.elements[s+0]*e[4*i+0]+this.elements[s+4]*e[4*i+1]+this.elements[s+8]*e[4*i+2]+this.elements[s+12]*e[4*i+3]
this.elements=t.slice()},apply:function(){var e
1===arguments.length&&arguments[0]instanceof r?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,i=0;i<4;i++)for(var s=0;s<4;s++,n++)t[n]+=this.elements[4*i+0]*e[s+0]+this.elements[4*i+1]*e[s+4]+this.elements[4*i+2]*e[s+8]+this.elements[4*i+3]*e[s+12]
this.elements=t.slice()},rotate:function(e,t,n,r){if(n){var i=Math.cos(e),s=Math.sin(e),o=1-i
this.apply(o*t*t+i,o*t*n-s*r,o*t*r+s*n,0,o*t*n+s*r,o*n*n+i,o*n*r-s*t,0,o*t*r-s*n,o*n*r+s*t,o*r*r+i,0,0,0,0,1)}else this.rotateZ(e)},invApply:function(){inverseCopy===t&&(inverseCopy=new r)
var e=arguments
return inverseCopy.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),!!inverseCopy.invert()&&(this.preApply(inverseCopy),!0)},rotateX:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,n,r){e&&n===t&&r===t?n=r=e:e&&n&&r===t&&(r=1),e&&n&&r&&(this.elements[0]*=e,this.elements[1]*=n,this.elements[2]*=r,this.elements[4]*=e,this.elements[5]*=n,this.elements[6]*=r,this.elements[8]*=e,this.elements[9]*=n,this.elements[10]*=r,this.elements[12]*=e,this.elements[13]*=n,this.elements[14]*=r)},skewX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){return n?r?this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r:this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]:this.elements[0]*e+this.elements[1]*t+this.elements[3]},multY:function(e,t,n,r){return n?r?this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r:this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]:this.elements[4]*e+this.elements[5]*t+this.elements[7]},multZ:function(e,t,n,r){return r?this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r:this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]},multW:function(e,t,n,r){return r?this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r:this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],n=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],r=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],i=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],a=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],l=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],h=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],u=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],c=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],f=e*c-t*u+n*h+r*l-i*a+s*o
if(Math.abs(f)<=1e-9)return!1
var p=[]
p[0]=+this.elements[5]*c-this.elements[6]*u+this.elements[7]*h,p[4]=-this.elements[4]*c+this.elements[6]*l-this.elements[7]*a,p[8]=+this.elements[4]*u-this.elements[5]*l+this.elements[7]*o,p[12]=-this.elements[4]*h+this.elements[5]*a-this.elements[6]*o,p[1]=-this.elements[1]*c+this.elements[2]*u-this.elements[3]*h,p[5]=+this.elements[0]*c-this.elements[2]*l+this.elements[3]*a,p[9]=-this.elements[0]*u+this.elements[1]*l-this.elements[3]*o,p[13]=+this.elements[0]*h-this.elements[1]*a+this.elements[2]*o,p[2]=+this.elements[13]*s-this.elements[14]*i+this.elements[15]*r,p[6]=-this.elements[12]*s+this.elements[14]*n-this.elements[15]*t,p[10]=+this.elements[12]*i-this.elements[13]*n+this.elements[15]*e,p[14]=-this.elements[12]*r+this.elements[13]*t-this.elements[14]*e,p[3]=-this.elements[9]*s+this.elements[10]*i-this.elements[11]*r,p[7]=+this.elements[8]*s-this.elements[10]*n+this.elements[11]*t,p[11]=-this.elements[8]*i+this.elements[9]*n-this.elements[11]*e,p[15]=+this.elements[8]*r-this.elements[9]*t+this.elements[10]*e
var m=1/f
return p[0]*=m,p[1]*=m,p[2]*=m,p[3]*=m,p[4]*=m,p[5]*=m,p[6]*=m,p[7]*=m,p[8]*=m,p[9]*=m,p[10]*=m,p[11]*=m,p[12]*=m,p[13]*=m,p[14]*=m,p[15]*=m,this.elements=p.slice(),!0},toString:function(){for(var e="",t=0;t<15;t++)e+=this.elements[t]+", "
return e+=this.elements[15]},print:function(){var e=printMatrixHelper(this.elements),t=""+n.nfs(this.elements[0],e,4)+" "+n.nfs(this.elements[1],e,4)+" "+n.nfs(this.elements[2],e,4)+" "+n.nfs(this.elements[3],e,4)+"\n"+n.nfs(this.elements[4],e,4)+" "+n.nfs(this.elements[5],e,4)+" "+n.nfs(this.elements[6],e,4)+" "+n.nfs(this.elements[7],e,4)+"\n"+n.nfs(this.elements[8],e,4)+" "+n.nfs(this.elements[9],e,4)+" "+n.nfs(this.elements[10],e,4)+" "+n.nfs(this.elements[11],e,4)+"\n"+n.nfs(this.elements[12],e,4)+" "+n.nfs(this.elements[13],e,4)+" "+n.nfs(this.elements[14],e,4)+" "+n.nfs(this.elements[15],e,4)+"\n\n"
n.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}},r}},{}],16:[function(e,t,n){t.exports=function(e){var t=e.PConstants,n=e.PMatrix2D,r=e.PMatrix3D,i=function(e){this.family=e||t.GROUP,this.visible=!0,this.style=!0,this.children=[],this.nameTable=[],this.params=[],this.name="",this.image=null,this.matrix=null,this.kind=null,this.close=null,this.width=null,this.height=null,this.parent=null}
return i.prototype={isVisible:function(){return this.visible},setVisible:function(e){this.visible=e},disableStyle:function(){this.style=!1
for(var e=0,t=this.children.length;e<t;e++)this.children[e].disableStyle()},enableStyle:function(){this.style=!0
for(var e=0,t=this.children.length;e<t;e++)this.children[e].enableStyle()},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(e){this.name=e},getName:function(){return this.name},draw:function(e){if(!e)throw"render context missing for draw() in PShape"
this.visible&&(this.pre(e),this.drawImpl(e),this.post(e))},drawImpl:function(e){this.family===t.GROUP?this.drawGroup(e):this.family===t.PRIMITIVE?this.drawPrimitive(e):this.family===t.GEOMETRY?this.drawGeometry(e):this.family===t.PATH&&this.drawPath(e)},drawPath:function(e){var n,r
if(0!==this.vertices.length){if(e.beginShape(),0===this.vertexCodes.length)if(2===this.vertices[0].length)for(n=0,r=this.vertices.length;n<r;n++)e.vertex(this.vertices[n][0],this.vertices[n][1])
else for(n=0,r=this.vertices.length;n<r;n++)e.vertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
else{var i=0
if(2===this.vertices[0].length)for(n=0,r=this.vertexCodes.length;n<r;n++)this.vertexCodes[n]===t.VERTEX?(e.vertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i].moveTo),e.breakShape=!1,i++):this.vertexCodes[n]===t.BEZIER_VERTEX?(e.bezierVertex(this.vertices[i+0][0],this.vertices[i+0][1],this.vertices[i+1][0],this.vertices[i+1][1],this.vertices[i+2][0],this.vertices[i+2][1]),i+=3):this.vertexCodes[n]===t.CURVE_VERTEX?(e.curveVertex(this.vertices[i][0],this.vertices[i][1]),i++):this.vertexCodes[n]===t.BREAK&&(e.breakShape=!0)
else for(n=0,r=this.vertexCodes.length;n<r;n++)this.vertexCodes[n]===t.VERTEX?(e.vertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i][2]),this.vertices[i].moveTo===!0?vertArray[vertArray.length-1].moveTo=!0:this.vertices[i].moveTo===!1&&(vertArray[vertArray.length-1].moveTo=!1),e.breakShape=!1):this.vertexCodes[n]===t.BEZIER_VERTEX?(e.bezierVertex(this.vertices[i+0][0],this.vertices[i+0][1],this.vertices[i+0][2],this.vertices[i+1][0],this.vertices[i+1][1],this.vertices[i+1][2],this.vertices[i+2][0],this.vertices[i+2][1],this.vertices[i+2][2]),i+=3):this.vertexCodes[n]===t.CURVE_VERTEX?(e.curveVertex(this.vertices[i][0],this.vertices[i][1],this.vertices[i][2]),i++):this.vertexCodes[n]===t.BREAK&&(e.breakShape=!0)}e.endShape(this.close?t.CLOSE:t.OPEN)}},drawGeometry:function(e){var t,n
if(e.beginShape(this.kind),this.style)for(t=0,n=this.vertices.length;t<n;t++)e.vertex(this.vertices[t])
else for(t=0,n=this.vertices.length;t<n;t++){var r=this.vertices[t]
0===r[2]?e.vertex(r[0],r[1]):e.vertex(r[0],r[1],r[2])}e.endShape()},drawGroup:function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].draw(e)},drawPrimitive:function(e){if(this.kind===t.POINT)e.point(this.params[0],this.params[1])
else if(this.kind===t.LINE)4===this.params.length?e.line(this.params[0],this.params[1],this.params[2],this.params[3]):e.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])
else if(this.kind===t.TRIANGLE)e.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])
else if(this.kind===t.QUAD)e.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])
else if(this.kind===t.RECT)if(null!==this.image){var n=imageModeConvert
e.imageMode(t.CORNER),e.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]),imageModeConvert=n}else{var r=e.curRectMode
e.rectMode(t.CORNER),e.rect(this.params[0],this.params[1],this.params[2],this.params[3]),e.curRectMode=r}else if(this.kind===t.ELLIPSE){var i=e.curEllipseMode
e.ellipseMode(t.CORNER),e.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]),e.curEllipseMode=i}else if(this.kind===t.ARC){var s=curEllipseMode
e.ellipseMode(t.CORNER),e.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]),curEllipseMode=s}else this.kind===t.BOX?1===this.params.length?e.box(this.params[0]):e.box(this.params[0],this.params[1],this.params[2]):this.kind===t.SPHERE&&e.sphere(this.params[0])},pre:function(e){this.matrix&&(e.pushMatrix(),e.transform(this.matrix)),this.style&&(e.pushStyle(),this.styles(e))},post:function(e){this.matrix&&e.popMatrix(),this.style&&e.popStyle()},styles:function(e){this.stroke?(e.stroke(this.strokeColor),e.strokeWeight(this.strokeWeight),e.strokeCap(this.strokeCap),e.strokeJoin(this.strokeJoin)):e.noStroke(),this.fill?e.fill(this.fillColor):e.noFill()},getChild:function(e){var t,n
if("number"==typeof e)return this.children[e]
var r
if(""===e||this.name===e)return this
if(this.nameTable.length>0){for(t=0,n=this.nameTable.length;t<n||r;t++)if(this.nameTable[t].getName===e){r=this.nameTable[t]
break}if(r)return r}for(t=0,n=this.children.length;t<n;t++)if(r=this.children[t].getChild(e))return r
return null},getChildCount:function(){return this.children.length},addChild:function(e){this.children.push(e),e.parent=this,null!==e.getName()&&this.addName(e.getName(),e)},addName:function(e,t){null!==this.parent?this.parent.addName(e,t):this.nameTable.push([e,t])},translate:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.translate(arguments[0],arguments[1])):(this.checkMatrix(3),this.matrix.translate(arguments[0],arguments[1],0))},checkMatrix:function(e){null===this.matrix?2===e?this.matrix=new n:this.matrix=new r:3===e&&this.matrix instanceof n&&(this.matrix=new r)},rotateX:function(e){this.rotate(e,1,0,0)},rotateY:function(e){this.rotate(e,0,1,0)},rotateZ:function(e){this.rotate(e,0,0,1)},rotate:function(){1===arguments.length?(this.checkMatrix(2),this.matrix.rotate(arguments[0])):(this.checkMatrix(3),this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3]))},scale:function(){2===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1])):3===arguments.length?(this.checkMatrix(2),this.matrix.scale(arguments[0],arguments[1],arguments[2])):(this.checkMatrix(2),this.matrix.scale(arguments[0]))},resetMatrix:function(){this.checkMatrix(2),this.matrix.reset()},applyMatrix:function(e){1===arguments.length?this.applyMatrix(e.elements[0],e.elements[1],0,e.elements[2],e.elements[3],e.elements[4],0,e.elements[5],0,0,1,0,0,0,0,1):6===arguments.length?(this.checkMatrix(2),this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)):16===arguments.length&&(this.checkMatrix(3),this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15]))}},i}},{}],17:[function(e,t,n){t.exports=function(e){var t=e.CommonFunctions,n=e.PConstants,r=e.PShape,i=e.XMLElement,s=e.colors,o=function(){if(r.call(this),1===arguments.length){if(this.element=arguments[0],this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=n.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=n.SQUARE,this.strokeJoin=n.MITER,this.strokeGradient=null,this.strokeGradientPaint=null,this.strokeName=null,this.strokeOpacity=1,this.fill=!0,this.fillColor=n.ALPHA_MASK,this.fillGradient=null,this.fillGradientPaint=null,this.fillName=null,this.fillOpacity=1,"svg"!==this.element.getName())throw"root is not <svg>, it's <"+this.element.getName()+">"}else 2===arguments.length&&("string"==typeof arguments[1]?arguments[1].indexOf(".svg")>-1&&(this.element=new i((!0),arguments[1]),this.vertexCodes=[],this.vertices=[],this.opacity=1,this.stroke=!1,this.strokeColor=n.ALPHA_MASK,this.strokeWeight=1,this.strokeCap=n.SQUARE,this.strokeJoin=n.MITER,this.strokeGradient="",this.strokeGradientPaint="",this.strokeName="",this.strokeOpacity=1,this.fill=!0,this.fillColor=n.ALPHA_MASK,this.fillGradient=null,this.fillGradientPaint=null,this.fillOpacity=1):arguments[0]&&(this.element=arguments[1],this.vertexCodes=arguments[0].vertexCodes.slice(),this.vertices=arguments[0].vertices.slice(),this.stroke=arguments[0].stroke,this.strokeColor=arguments[0].strokeColor,this.strokeWeight=arguments[0].strokeWeight,this.strokeCap=arguments[0].strokeCap,this.strokeJoin=arguments[0].strokeJoin,this.strokeGradient=arguments[0].strokeGradient,this.strokeGradientPaint=arguments[0].strokeGradientPaint,this.strokeName=arguments[0].strokeName,this.fill=arguments[0].fill,this.fillColor=arguments[0].fillColor,this.fillGradient=arguments[0].fillGradient,this.fillGradientPaint=arguments[0].fillGradientPaint,this.fillName=arguments[0].fillName,this.strokeOpacity=arguments[0].strokeOpacity,this.fillOpacity=arguments[0].fillOpacity,this.opacity=arguments[0].opacity))
this.name=this.element.getStringAttribute("id")
var e=this.element.getStringAttribute("display","inline")
this.visible="none"!==e
var t=this.element.getAttribute("transform")
t&&(this.matrix=this.parseMatrix(t))
var s=this.element.getStringAttribute("viewBox")
if(null!==s){var o=s.split(" ")
this.width=o[2],this.height=o[3]}var a=this.element.getStringAttribute("width"),l=this.element.getStringAttribute("height")
if(null!==a)this.width=this.parseUnitSize(a),this.height=this.parseUnitSize(l)
else if(0===this.width||0===this.height)throw this.width=1,this.height=1,"The width and/or height is not readable in the <svg> tag of this file."
this.parseColors(this.element),this.parseChildren(this.element)}
return o.prototype=new r,o.prototype.parseMatrix=function(){function e(e){var t=[]
return e.replace(/\((.*?)\)/,function(){return function(e,n){t=n.replace(/,+/g," ").split(/\s+/)}}()),t}return function(n){this.checkMatrix(2)
var r=[]
if(n.replace(/\s*(\w+)\((.*?)\)/g,function(e){r.push(t.trim(e))}),0===r.length)return null
for(var i=0,s=r.length;i<s;i++){var o=e(r[i])
if(r[i].indexOf("matrix")!==-1)this.matrix.set(o[0],o[2],o[4],o[1],o[3],o[5])
else if(r[i].indexOf("translate")!==-1){var a=o[0],l=2===o.length?o[1]:0
this.matrix.translate(a,l)}else if(r[i].indexOf("scale")!==-1){var h=o[0],u=2===o.length?o[1]:o[0]
this.matrix.scale(h,u)}else if(r[i].indexOf("rotate")!==-1){var c=o[0]
1===o.length?this.matrix.rotate(t.radians(c)):3===o.length&&(this.matrix.translate(o[1],o[2]),this.matrix.rotate(t.radians(o[0])),this.matrix.translate(-o[1],-o[2]))}else r[i].indexOf("skewX")!==-1?this.matrix.skewX(parseFloat(o[0])):r[i].indexOf("skewY")!==-1?this.matrix.skewY(o[0]):r[i].indexOf("shearX")!==-1?this.matrix.shearX(o[0]):r[i].indexOf("shearY")!==-1&&this.matrix.shearY(o[0])}return this.matrix}}(),o.prototype.parseChildren=function(e){var t,n,i=e.getChildren(),s=new r
for(t=0,n=i.length;t<n;t++){var o=this.parseChild(i[t])
o&&s.addChild(o)}for(t=0,n=s.children.length;t<n;t++)this.children.push(s.children[t])},o.prototype.getName=function(){return this.name},o.prototype.parseChild=function(e){var t,n=e.getName()
return"g"===n?t=new o(this,e):"defs"===n?t=new o(this,e):"line"===n?(t=new o(this,e),t.parseLine()):"circle"===n?(t=new o(this,e),t.parseEllipse(!0)):"ellipse"===n?(t=new o(this,e),t.parseEllipse(!1)):"rect"===n?(t=new o(this,e),t.parseRect()):"polygon"===n?(t=new o(this,e),t.parsePoly(!0)):"polyline"===n?(t=new o(this,e),t.parsePoly(!1)):"path"===n?(t=new o(this,e),t.parsePath()):"radialGradient"===n?unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient"):"linearGradient"===n?unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient"):"text"===n?unimplemented("PShapeSVG.prototype.parseChild, name = text"):"filter"===n?unimplemented("PShapeSVG.prototype.parseChild, name = filter"):"mask"===n&&unimplemented("PShapeSVG.prototype.parseChild, name = mask"),t},o.prototype.parsePath=function(){this.family=n.PATH,this.kind=0
var e=t.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "))
if(null!==e){e=e.split("")
for(var r,i,s,o,a=0,l=0,h=0,u=0,c=0,f=0,p=0,m=0,g=0,d=0,v=0,y=0,A=0,x=0,b=0,w=0,E="",S=[],P=!1;b<e.length;)if(w=e[b].charCodeAt(0),w>=65&&w<=90||w>=97&&w<=122){if(s=b,b++,b<e.length)for(S=[],w=e[b].charCodeAt(0);!(w>=65&&w<=90||w>=97&&w<=100||w>=102&&w<=122)&&P===!1;)32===w?(""!==E&&(S.push(parseFloat(E)),E=""),b++):45===w?101===e[b-1].charCodeAt(0)?(E+=e[b].toString(),b++):(""!==E&&S.push(parseFloat(E)),E=e[b].toString(),b++):(E+=e[b].toString(),b++),b===e.length?P=!0:w=e[b].charCodeAt(0)
if(""!==E&&(S.push(parseFloat(E)),E=""),i=e[s],w=i.charCodeAt(0),77===w){if(S.length>=2&&S.length%2===0&&(a=S[0],l=S[1],this.parsePathMoveto(a,l),S.length>2))for(s=2,o=S.length;s<o;s+=2)a=S[s],l=S[s+1],this.parsePathLineto(a,l)}else if(109===w){if(S.length>=2&&S.length%2===0&&(a+=S[0],l+=S[1],this.parsePathMoveto(a,l),S.length>2))for(s=2,o=S.length;s<o;s+=2)a+=S[s],l+=S[s+1],this.parsePathLineto(a,l)}else if(76===w){if(S.length>=2&&S.length%2===0)for(s=0,o=S.length;s<o;s+=2)a=S[s],l=S[s+1],this.parsePathLineto(a,l)}else if(108===w){if(S.length>=2&&S.length%2===0)for(s=0,o=S.length;s<o;s+=2)a+=S[s],l+=S[s+1],this.parsePathLineto(a,l)}else if(72===w)for(s=0,o=S.length;s<o;s++)a=S[s],this.parsePathLineto(a,l)
else if(104===w)for(s=0,o=S.length;s<o;s++)a+=S[s],this.parsePathLineto(a,l)
else if(86===w)for(s=0,o=S.length;s<o;s++)l=S[s],this.parsePathLineto(a,l)
else if(118===w)for(s=0,o=S.length;s<o;s++)l+=S[s],this.parsePathLineto(a,l)
else if(67===w){if(S.length>=6&&S.length%6===0)for(s=0,o=S.length;s<o;s+=6)c=S[s],p=S[s+1],f=S[s+2],m=S[s+3],g=S[s+4],d=S[s+5],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(99===w){if(S.length>=6&&S.length%6===0)for(s=0,o=S.length;s<o;s+=6)c=a+S[s],p=l+S[s+1],f=a+S[s+2],m=l+S[s+3],g=a+S[s+4],d=l+S[s+5],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(83===w){if(S.length>=4&&S.length%4===0)for(s=0,o=S.length;s<o;s+=4)"c"===r.toLowerCase()||"s"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],A=this.vertices[this.vertices.length-1][0],x=this.vertices[this.vertices.length-1][1],c=A+(A-v),p=x+(x-y)):(c=this.vertices[this.vertices.length-1][0],p=this.vertices[this.vertices.length-1][1]),f=S[s],m=S[s+1],g=S[s+2],d=S[s+3],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(115===w){if(S.length>=4&&S.length%4===0)for(s=0,o=S.length;s<o;s+=4)"c"===r.toLowerCase()||"s"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],A=this.vertices[this.vertices.length-1][0],x=this.vertices[this.vertices.length-1][1],c=A+(A-v),p=x+(x-y)):(c=this.vertices[this.vertices.length-1][0],p=this.vertices[this.vertices.length-1][1]),f=a+S[s],m=l+S[s+1],g=a+S[s+2],d=l+S[s+3],this.parsePathCurveto(c,p,f,m,g,d),a=g,l=d}else if(81===w){if(S.length>=4&&S.length%4===0)for(s=0,o=S.length;s<o;s+=4)h=S[s],u=S[s+1],g=S[s+2],d=S[s+3],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(113===w){if(S.length>=4&&S.length%4===0)for(s=0,o=S.length;s<o;s+=4)h=a+S[s],u=l+S[s+1],g=a+S[s+2],d=l+S[s+3],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(84===w){if(S.length>=2&&S.length%2===0)for(s=0,o=S.length;s<o;s+=2)"q"===r.toLowerCase()||"t"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],A=this.vertices[this.vertices.length-1][0],x=this.vertices[this.vertices.length-1][1],h=A+(A-v),u=x+(x-y)):(h=a,u=l),g=S[s],d=S[s+1],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else if(116===w){if(S.length>=2&&S.length%2===0)for(s=0,o=S.length;s<o;s+=2)"q"===r.toLowerCase()||"t"===r.toLowerCase()?(v=this.vertices[this.vertices.length-2][0],y=this.vertices[this.vertices.length-2][1],A=this.vertices[this.vertices.length-1][0],x=this.vertices[this.vertices.length-1][1],h=A+(A-v),u=x+(x-y)):(h=a,u=l),g=a+S[s],d=l+S[s+1],this.parsePathQuadto(a,l,h,u,g,d),a=g,l=d}else 90!==w&&122!==w||(this.close=!0)
r=i.toString()}else b++}},o.prototype.parsePathQuadto=function(e,t,r,i,s,o){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.BEZIER_VERTEX),this.parsePathVertex(e+2*(r-e)/3,t+2*(i-t)/3),this.parsePathVertex(s+2*(r-s)/3,o+2*(i-o)/3),this.parsePathVertex(s,o)},o.prototype.parsePathCurveto=function(e,t,r,i,s,o){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.BEZIER_VERTEX),this.parsePathVertex(e,t),this.parsePathVertex(r,i),this.parsePathVertex(s,o)},o.prototype.parsePathLineto=function(e,t){if(!(this.vertices.length>0))throw"Path must start with M/m"
this.parsePathCode(n.VERTEX),this.parsePathVertex(e,t),this.vertices[this.vertices.length-1].moveTo=!1},o.prototype.parsePathMoveto=function(e,t){this.vertices.length>0&&this.parsePathCode(n.BREAK),this.parsePathCode(n.VERTEX),this.parsePathVertex(e,t),this.vertices[this.vertices.length-1].moveTo=!0},o.prototype.parsePathVertex=function(e,t){var n=[]
n[0]=e,n[1]=t,this.vertices.push(n)},o.prototype.parsePathCode=function(e){this.vertexCodes.push(e)},o.prototype.parsePoly=function(e){this.family=n.PATH,this.close=e
var r=t.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "))
if(null!==r){var i=r.split(" ")
if(i.length%2!==0)throw"Error parsing polygon points: odd number of coordinates provided"
for(var s=0,o=i.length;s<o;s++){var a=[]
a[0]=i[s],a[1]=i[++s],this.vertices.push(a)}}},o.prototype.parseRect=function(){if(this.kind=n.RECT,this.family=n.PRIMITIVE,this.params=[],this.params[0]=this.element.getFloatAttribute("x"),this.params[1]=this.element.getFloatAttribute("y"),this.params[2]=this.element.getFloatAttribute("width"),this.params[3]=this.element.getFloatAttribute("height"),this.params[2]<0||this.params[3]<0)throw"svg error: negative width or height found while parsing <rect>"},o.prototype.parseEllipse=function(e){this.kind=n.ELLIPSE,this.family=n.PRIMITIVE,this.params=[],this.params[0]=0|this.element.getFloatAttribute("cx"),this.params[1]=0|this.element.getFloatAttribute("cy")
var t,r
if(e){if(t=r=this.element.getFloatAttribute("r"),t<0)throw"svg error: negative radius found while parsing <circle>"}else if(t=this.element.getFloatAttribute("rx"),r=this.element.getFloatAttribute("ry"),t<0||r<0)throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"
this.params[0]-=t,this.params[1]-=r,this.params[2]=2*t,this.params[3]=2*r},o.prototype.parseLine=function(){this.kind=n.LINE,this.family=n.PRIMITIVE,this.params=[],this.params[0]=this.element.getFloatAttribute("x1"),this.params[1]=this.element.getFloatAttribute("y1"),this.params[2]=this.element.getFloatAttribute("x2"),this.params[3]=this.element.getFloatAttribute("y2")},o.prototype.parseColors=function(e){if(e.hasAttribute("opacity")&&this.setOpacity(e.getAttribute("opacity")),e.hasAttribute("stroke")&&this.setStroke(e.getAttribute("stroke")),e.hasAttribute("stroke-width")&&this.setStrokeWeight(e.getAttribute("stroke-width")),e.hasAttribute("stroke-linejoin")&&this.setStrokeJoin(e.getAttribute("stroke-linejoin")),e.hasAttribute("stroke-linecap")&&this.setStrokeCap(e.getStringAttribute("stroke-linecap")),e.hasAttribute("fill")&&this.setFill(e.getStringAttribute("fill")),e.hasAttribute("style"))for(var n=e.getStringAttribute("style"),r=n.toString().split(";"),i=0,s=r.length;i<s;i++){var o=t.trim(r[i].split(":"))
"fill"===o[0]?this.setFill(o[1]):"fill-opacity"===o[0]?this.setFillOpacity(o[1]):"stroke"===o[0]?this.setStroke(o[1]):"stroke-width"===o[0]?this.setStrokeWeight(o[1]):"stroke-linecap"===o[0]?this.setStrokeCap(o[1]):"stroke-linejoin"===o[0]?this.setStrokeJoin(o[1]):"stroke-opacity"===o[0]?this.setStrokeOpacity(o[1]):"opacity"===o[0]&&this.setOpacity(o[1])}},o.prototype.setFillOpacity=function(e){this.fillOpacity=parseFloat(e),this.fillColor=255*this.fillOpacity<<24|16777215&this.fillColor},o.prototype.setFill=function(e){var t=4278190080&this.fillColor
"none"===e?this.fill=!1:0===e.indexOf("#")?(this.fill=!0,4===e.length&&(e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.fillColor=t|16777215&parseInt(e.substring(1),16)):0===e.indexOf("rgb")?(this.fill=!0,this.fillColor=t|this.parseRGB(e)):0===e.indexOf("url(#")?this.fillName=e.substring(5,e.length-1):s[e]&&(this.fill=!0,this.fillColor=t|16777215&parseInt(s[e].substring(1),16))},o.prototype.setOpacity=function(e){this.strokeColor=255*parseFloat(e)<<24|16777215&this.strokeColor,this.fillColor=255*parseFloat(e)<<24|16777215&this.fillColor},o.prototype.setStroke=function(e){var t=4278190080&this.strokeColor
"none"===e?this.stroke=!1:"#"===e.charAt(0)?(this.stroke=!0,4===e.length&&(e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")),this.strokeColor=t|16777215&parseInt(e.substring(1),16)):0===e.indexOf("rgb")?(this.stroke=!0,this.strokeColor=t|this.parseRGB(e)):0===e.indexOf("url(#")?this.strokeName=e.substring(5,e.length-1):s[e]&&(this.stroke=!0,this.strokeColor=t|16777215&parseInt(s[e].substring(1),16))},o.prototype.setStrokeWeight=function(e){this.strokeWeight=this.parseUnitSize(e)},o.prototype.setStrokeJoin=function(e){"miter"===e?this.strokeJoin=n.MITER:"round"===e?this.strokeJoin=n.ROUND:"bevel"===e&&(this.strokeJoin=n.BEVEL)},o.prototype.setStrokeCap=function(e){"butt"===e?this.strokeCap=n.SQUARE:"round"===e?this.strokeCap=n.ROUND:"square"===e&&(this.strokeCap=n.PROJECT)},o.prototype.setStrokeOpacity=function(e){this.strokeOpacity=parseFloat(e),this.strokeColor=255*this.strokeOpacity<<24|16777215&this.strokeColor},o.prototype.parseRGB=function(e){var t=e.substring(e.indexOf("(")+1,e.indexOf(")")),n=t.split(", ")
return n[0]<<16|n[1]<<8|n[2]},o.prototype.parseUnitSize=function(e){var t=e.length-2
return t<0?e:e.indexOf("pt")===t?1.25*parseFloat(e.substring(0,t)):e.indexOf("pc")===t?15*parseFloat(e.substring(0,t)):e.indexOf("mm")===t?3.543307*parseFloat(e.substring(0,t)):e.indexOf("cm")===t?35.43307*parseFloat(e.substring(0,t)):e.indexOf("in")===t?90*parseFloat(e.substring(0,t)):e.indexOf("px")===t?parseFloat(e.substring(0,t)):parseFloat(e)},o}},{}],18:[function(e,t,n){t.exports=function(e,t){function n(e,t,n){this.x=e||0,this.y=t||0,this.z=n||0}function r(e){return function(t,n){var r=t.get()
return r[e](n),r}}var i=e.PConstants
n.fromAngle=function(e,r){return r!==t&&null!==r||(r=new n),r.x=Math.cos(e),r.y=Math.sin(e),r},n.random2D=function(e){return n.fromAngle(Math.random()*i.TWO_PI,e)},n.random3D=function(e){var r=Math.random()*i.TWO_PI,s=2*Math.random()-1,o=Math.sqrt(1-s*s),a=o*Math.cos(r),l=o*Math.sin(r)
return e===t||null===e?e=new n(a,l,s):e.set(a,l,s),e},n.dist=function(e,t){return e.dist(t)},n.dot=function(e,t){return e.dot(t)},n.cross=function(e,t){return e.cross(t)},n.sub=function(e,t){return new n(e.x-t.x,e.y-t.y,e.z-t.z)},n.angleBetween=function(e,t){return Math.acos(e.dot(t)/Math.sqrt(e.magSq()*t.magSq()))},n.lerp=function(e,t,r){var i=new n(e.x,e.y,e.z)
return i.lerp(t,r),i},n.prototype={set:function(e,t,n){1===arguments.length?this.set(e.x||e[0]||0,e.y||e[1]||0,e.z||e[2]||0):(this.x=e,this.y=t,this.z=n)},get:function(){return new n(this.x,this.y,this.z)},mag:function(){var e=this.x,t=this.y,n=this.z
return Math.sqrt(e*e+t*t+n*n)},magSq:function(){var e=this.x,t=this.y,n=this.z
return e*e+t*t+n*n},setMag:function(e,n){if(n!==t){var r=e
return r.normalize(),r.mult(n),r}n=e,this.normalize(),this.mult(n)},add:function(e,t,n){1===arguments.length?(this.x+=e.x,this.y+=e.y,this.z+=e.z):2===arguments.length?(this.x+=e,this.y+=t):(this.x+=e,this.y+=t,this.z+=n)},sub:function(e,t,n){1===arguments.length?(this.x-=e.x,this.y-=e.y,this.z-=e.z):2===arguments.length?(this.x-=e,this.y-=t):(this.x-=e,this.y-=t,this.z-=n)},mult:function(e){"number"==typeof e?(this.x*=e,this.y*=e,this.z*=e):(this.x*=e.x,this.y*=e.y,this.z*=e.z)},div:function(e){"number"==typeof e?(this.x/=e,this.y/=e,this.z/=e):(this.x/=e.x,this.y/=e.y,this.z/=e.z)},rotate:function(e){var t=this.x,n=Math.cos(e),r=Math.sin(e)
this.x=n*this.x-r*this.y,this.y=r*t+n*this.y},dist:function(e){var t=this.x-e.x,n=this.y-e.y,r=this.z-e.z
return Math.sqrt(t*t+n*n+r*r)},dot:function(e,t,n){return 1===arguments.length?this.x*e.x+this.y*e.y+this.z*e.z:this.x*e+this.y*t+this.z*n},cross:function(e){var t=this.x,r=this.y,i=this.z
return new n(r*e.z-e.y*i,i*e.x-e.z*t,t*e.y-e.x*r)},lerp:function(e,t,n,r){var i,s,o=function(e,t,n){return e+(t-e)*n}
2===arguments.length?(r=t,i=e.x,s=e.y,n=e.z):(i=e,s=t),this.x=o(this.x,i,r),this.y=o(this.y,s,r),this.z=o(this.z,n,r)},normalize:function(){var e=this.mag()
e>0&&this.div(e)},limit:function(e){this.mag()>e&&(this.normalize(),this.mult(e))},heading:function(){return-Math.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}}
for(var s in n.prototype)n.prototype.hasOwnProperty(s)&&!n.hasOwnProperty(s)&&(n[s]=r(s))
return n}},{}],19:[function(e,t,n){t.exports=function(){var e=function(e,t,n,r,i){this.fullName=e||"",this.name=t||"",this.namespace=n||"",this.value=r,this.type=i}
return e.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(e){this.value=e}},e}},{}],20:[function(e,t,n){t.exports=function(e,t){var n=e.Browser,r=n.ajax,i=n.window,s=(i.XMLHttpRequest,i.DOMParser),o=e.XMLAttribute,a=function(e,n,r,i){this.attributes=[],this.children=[],this.fullName=null,this.name=null,this.namespace="",this.content=null,this.parent=null,this.lineNr="",this.systemID="",this.type="ELEMENT",e&&("string"==typeof e?n===t&&e.indexOf("<")>-1?this.parse(e):(this.fullName=e,this.namespace=n,this.systemId=r,this.lineNr=i):this.parse(n,!0))}
return a.prototype={parse:function(e,t){var n
try{t&&(e=r(e)),n=(new s).parseFromString(e,"text/xml")
var i=n.documentElement
if(!i)throw"Error loading document"
return this.parseChildrenRecursive(null,i),this}catch(e){throw e}},parseChildrenRecursive:function(e,t){var n,r,i,s,l,h
if(e?(n=new a(t.nodeName),n.parent=e):(this.fullName=t.localName,this.name=t.nodeName,n=this),3===t.nodeType&&""!==t.textContent)return this.createPCDataElement(t.textContent)
if(4===t.nodeType)return this.createCDataElement(t.textContent)
if(t.attributes)for(s=0,l=t.attributes.length;s<l;s++)i=t.attributes[s],r=new o(i.getname,i.nodeName,i.namespaceURI,i.nodeValue,i.nodeType),n.attributes.push(r)
if(t.childNodes)for(s=0,l=t.childNodes.length;s<l;s++){var u=t.childNodes[s]
h=n.parseChildrenRecursive(n,u),null!==h&&n.children.push(h)}return n},createElement:function(e,n,r,i){return r===t?new a(e,n):new a(e,n,r,i)},createPCDataElement:function(e,t){if(""===e.replace(/^\s+$/g,""))return null
var n=new a
return n.type="TEXT",n.content=e,n},createCDataElement:function(e){var t=this.createPCDataElement(e)
if(null===t)return null
t.type="CDATA"
var n,r={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}
for(n in r)Object.hasOwnProperty(r,n)||(e=e.replace(new RegExp(n,"g"),r[n]))
return t.cdata=e,t},hasAttribute:function(){return 1===arguments.length?null!==this.getAttribute(arguments[0]):2===arguments.length?null!==this.getAttribute(arguments[0],arguments[1]):void 0},equals:function(e){if(!(e instanceof a))return!1
var t,n
if(this.fullName!==e.fullName)return!1
if(this.attributes.length!==e.getAttributeCount())return!1
if(this.attributes.length!==e.attributes.length)return!1
var r,i,s
for(t=0,n=this.attributes.length;t<n;t++){if(r=this.attributes[t].getName(),i=this.attributes[t].getNamespace(),s=e.findAttribute(r,i),null===s)return!1
if(this.attributes[t].getValue()!==s.getValue())return!1
if(this.attributes[t].getType()!==s.getType())return!1}if(this.children.length!==e.getChildCount())return!1
if(this.children.length>0){var o,l
for(t=0,n=this.children.length;t<n;t++)if(o=this.getChild(t),l=e.getChild(t),!o.equals(l))return!1
return!0}return this.content===e.content},getContent:function(){if("TEXT"===this.type||"CDATA"===this.type)return this.content
var e=this.children
return 1!==e.length||"TEXT"!==e[0].type&&"CDATA"!==e[0].type?null:e[0].content},getAttribute:function(){var e
return 2===arguments.length?(e=this.findAttribute(arguments[0]),e?e.getValue():arguments[1]):1===arguments.length?(e=this.findAttribute(arguments[0]),e?e.getValue():null):3===arguments.length?(e=this.findAttribute(arguments[0],arguments[1]),e?e.getValue():arguments[2]):void 0},getStringAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0]):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(e){return this.getStringAttribute(e)},getFloatAttribute:function(){return 1===arguments.length?parseFloat(this.getAttribute(arguments[0],0)):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(e){return this.getFloatAttribute(e)},getIntAttribute:function(){return 1===arguments.length?this.getAttribute(arguments[0],0):2===arguments.length?this.getAttribute(arguments[0],arguments[1]):this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(e){return this.getIntAttribute(e)},hasChildren:function(){return this.children.length>0},addChild:function(e){null!==e&&(e.parent=this,this.children.push(e))},insertChild:function(e,t){if(e){if(null===e.getLocalName()&&!this.hasChildren()){var n=this.children[this.children.length-1]
if(null===n.getLocalName())return void n.setContent(n.getContent()+e.getContent())}e.parent=this,this.children.splice(t,0,e)}},getChild:function(e){if("number"==typeof e)return this.children[e]
if(e.indexOf("/")!==-1)return this.getChildRecursive(e.split("/"),0)
for(var t,n,r=0,i=this.getChildCount();r<i;r++)if(t=this.getChild(r),n=t.getName(),null!==n&&n===e)return t
return null},getChildren:function(){if(1===arguments.length){if("number"==typeof arguments[0])return this.getChild(arguments[0])
if(arguments[0].indexOf("/")!==-1)return this.getChildrenRecursive(arguments[0].split("/"),0)
for(var e,t,n=[],r=0,i=this.getChildCount();r<i;r++)e=this.getChild(r),t=e.getName(),null!==t&&t===arguments[0]&&n.push(e)
return n}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(e,t){if(t===e.length)return this
for(var n,r,i=e[t],s=0,o=this.getChildCount();s<o;s++)if(n=this.getChild(s),r=n.getName(),null!==r&&r===i)return n.getChildRecursive(e,t+1)
return null},getChildrenRecursive:function(e,t){if(t===e.length-1)return this.getChildren(e[t])
for(var n=this.getChildren(e[t]),r=[],i=0;i<n.length;i++)r=r.concat(n[i].getChildrenRecursive(e,t+1))
return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){for(var e=[],t=0,n=this.children.length;t<n;t++)e.push(this.getChild(t).getName())
return e},removeAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++)if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){this.attributes.splice(n,1)
break}},removeChild:function(e){if(e)for(var t=0,n=this.children.length;t<n;t++)if(this.children[t].equals(e)){this.children.splice(t,1)
break}},removeChildAtIndex:function(e){this.children.length>e&&this.children.splice(e,1)},findAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++)if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace)return this.attributes[n]
return null},setAttribute:function(){var e
if(3===arguments.length){var t=arguments[0].indexOf(":"),n=arguments[0].substring(t+1)
e=this.findAttribute(n,arguments[1]),e?e.setValue(arguments[2]):(e=new o(arguments[0],n,arguments[1],arguments[2],"CDATA"),this.attributes.push(e))}else e=this.findAttribute(arguments[0]),e?e.setValue(arguments[1]):(e=new o(arguments[0],arguments[0],null,arguments[1],"CDATA"),this.attributes.push(e))},setString:function(e,t){this.setAttribute(e,t)},setInt:function(e,t){this.setAttribute(e,t)},setFloat:function(e,t){this.setAttribute(e,t)},setContent:function(e){this.children.length>0&&Processing.debug("Tried to set content for XMLElement with children"),this.content=e},setName:function(){if(1===arguments.length)this.name=arguments[0],this.fullName=arguments[0],this.namespace=null
else{var e=arguments[0].indexOf(":")
null===arguments[1]||e<0?this.name=arguments[0]:this.name=arguments[0].substring(e+1),this.fullName=arguments[0],this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if("TEXT"===this.type)return this.content||""
if("CDATA"===this.type)return this.cdata||""
var e,t,n=this.fullName,r="<"+n
for(e=0;e<this.attributes.length;e++){var i=this.attributes[e]
r+=" "+i.getName()+'="'+i.getValue()+'"'}if(0===this.children.length)r+=""===this.content||null===this.content||void 0===this.content?"/>":">"+this.content+"</"+n+">"
else{for(r+=">",t=0;t<this.children.length;t++)r+=this.children[t].toString()
r+="</"+n+">"}return r}},a.parse=function(e){var t=new a
return t.parse(e),t},a}},{}],21:[function(e,t,n){t.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],22:[function(e,t,n){t.exports=function(e,t,n){return function(r,i){r.__contains=function(e,t){return"string"!=typeof e?e.contains.apply(e,i(arguments)):null!==e&&null!==t&&"string"==typeof t&&e.indexOf(t)>-1},r.__replaceAll=function(e,t,n){return"string"!=typeof e?e.replaceAll.apply(e,i(arguments)):e.replace(new RegExp(t,"g"),n)},r.__replaceFirst=function(e,t,n){return"string"!=typeof e?e.replaceFirst.apply(e,i(arguments)):e.replace(new RegExp(t,""),n)},r.__replace=function(e,t,n){if("string"!=typeof e)return e.replace.apply(e,i(arguments))
if(t instanceof RegExp)return e.replace(t,n)
if("string"!=typeof t&&(t=t.toString()),""===t)return e
var r=e.indexOf(t)
if(r<0)return e
var s=0,o=""
do o+=e.substring(s,r)+n,s=r+t.length
while((r=e.indexOf(t,s))>=0)
return o+e.substring(s)},r.__equals=function(e,n){return e.equals instanceof Function?e.equals.apply(e,i(arguments)):t(e,n)},r.__equalsIgnoreCase=function(e,t){return"string"!=typeof e?e.equalsIgnoreCase.apply(e,i(arguments)):e.toLowerCase()===t.toLowerCase()},r.__toCharArray=function(e){if("string"!=typeof e)return e.toCharArray.apply(e,i(arguments))
for(var t=[],n=0,r=e.length;n<r;++n)t[n]=new Char(e.charAt(n))
return t},r.__split=function(e,t,r){if("string"!=typeof e)return e.split.apply(e,i(arguments))
var s=new RegExp(t)
if(r===n||r<1)return e.split(s)
for(var o,a=[],l=e;(o=l.search(s))!==-1&&a.length<r-1;){var h=s.exec(l).toString()
a.push(l.substring(0,o)),l=l.substring(o+h.length)}return o===-1&&""===l||a.push(l),a},r.__codePointAt=function(e,t){var n,r,i=e.charCodeAt(t)
return 55296<=i&&i<=56319?(n=i,r=e.charCodeAt(t+1),1024*(n-55296)+(r-56320)+65536):i},r.__matches=function(e,t){return new RegExp(t).test(e)},r.__startsWith=function(e,t,n){return"string"!=typeof e?e.startsWith.apply(e,i(arguments)):(n=n||0,!(n<0||n>e.length)&&(""===t||t===e||e.indexOf(t)===n))},r.__endsWith=function(e,t){if("string"!=typeof e)return e.endsWith.apply(e,i(arguments))
var n=t?t.length:0
return""===t||t===e||e.indexOf(t)===e.length-n},r.__hashCode=function(t){return t.hashCode instanceof Function?t.hashCode.apply(t,i(arguments)):e(t)},r.__printStackTrace=function(e){r.println("Exception: "+e.toString())}}}},{}],23:[function(e,t,n){t.exports=function(e,t){function n(e,t){var n=e||362436069,r=t||521288629,i=function(){return n=36969*(65535&n)+(n>>>16)&4294967295,r=18e3*(65535&r)+(r>>>16)&4294967295,4294967295&((65535&n)<<16|65535&r)}
this.doubleGenerator=function(){var e=i()/4294967296
return e<0?1+e:e},this.intGenerator=i}function r(e){function r(e,t,n,r){var i=15&e,s=i<8?t:n,o=i<4?n:12===i||14===i?t:r
return(0===(1&i)?s:-s)+(0===(2&i)?o:-o)}function i(e,t,n){var r=0===(1&e)?t:n
return 0===(2&e)?-r:r}function s(e,t){return 0===(1&e)?-t:t}function o(e,t,n){return t+e*(n-t)}var a,l,h=e!==t?new n(e,(e<<16)+(e>>16)):n.createRandomized(),u=new Uint8Array(512)
for(a=0;a<256;++a)u[a]=a
for(a=0;a<256;++a){var c=u[l=255&h.intGenerator()]
u[l]=u[a],u[a]=c}for(a=0;a<256;++a)u[a+256]=u[a]
this.noise3d=function(e,t,n){var i=255&Math.floor(e),s=255&Math.floor(t),a=255&Math.floor(n)
e-=Math.floor(e),t-=Math.floor(t),n-=Math.floor(n)
var l=(3-2*e)*e*e,h=(3-2*t)*t*t,c=(3-2*n)*n*n,f=u[i]+s,p=u[f]+a,m=u[f+1]+a,g=u[i+1]+s,d=u[g]+a,v=u[g+1]+a
return o(c,o(h,o(l,r(u[p],e,t,n),r(u[d],e-1,t,n)),o(l,r(u[m],e,t-1,n),r(u[v],e-1,t-1,n))),o(h,o(l,r(u[p+1],e,t,n-1),r(u[d+1],e-1,t,n-1)),o(l,r(u[m+1],e,t-1,n-1),r(u[v+1],e-1,t-1,n-1))))},this.noise2d=function(e,t){var n=255&Math.floor(e),r=255&Math.floor(t)
e-=Math.floor(e),t-=Math.floor(t)
var s=(3-2*e)*e*e,a=(3-2*t)*t*t,l=u[n]+r,h=u[n+1]+r
return o(a,o(s,i(u[l],e,t),i(u[h],e-1,t)),o(s,i(u[l+1],e,t-1),i(u[h+1],e-1,t-1)))},this.noise1d=function(e){var t=255&Math.floor(e)
e-=Math.floor(e)
var n=(3-2*e)*e*e
return o(n,s(u[t],e),s(u[t+1],e-1))}}var i=function(){return Math.random()}
e.abs=Math.abs,e.ceil=Math.ceil,e.exp=Math.exp,e.floor=Math.floor,e.log=Math.log,e.pow=Math.pow,e.round=Math.round,e.sqrt=Math.sqrt,e.acos=Math.acos,e.asin=Math.asin,e.atan=Math.atan,e.atan2=Math.atan2,e.cos=Math.cos,e.sin=Math.sin,e.tan=Math.tan,e.constrain=function(e,t,n){return e>n?n:e<t?t:e},e.dist=function(){var e,t,n
return 4===arguments.length?(e=arguments[0]-arguments[2],t=arguments[1]-arguments[3],Math.sqrt(e*e+t*t)):6===arguments.length?(e=arguments[0]-arguments[3],t=arguments[1]-arguments[4],n=arguments[2]-arguments[5],Math.sqrt(e*e+t*t+n*n)):void 0},e.lerp=function(e,t,n){return(t-e)*n+e},e.mag=function(e,t,n){return n?Math.sqrt(e*e+t*t+n*n):Math.sqrt(e*e+t*t)},e.map=function(e,t,n,r,i){return r+(i-r)*((e-t)/(n-t))},e.max=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[1]:arguments[0]
var e=1===arguments.length?arguments[0]:arguments
if(!("length"in e&&e.length>0))throw"Non-empty array is expected"
for(var t=e[0],n=e.length,r=1;r<n;++r)t<e[r]&&(t=e[r])
return t},e.min=function(){if(2===arguments.length)return arguments[0]<arguments[1]?arguments[0]:arguments[1]
var e=1===arguments.length?arguments[0]:arguments
if(!("length"in e&&e.length>0))throw"Non-empty array is expected"
for(var t=e[0],n=e.length,r=1;r<n;++r)t>e[r]&&(t=e[r])
return t},e.norm=function(e,t,n){return(e-t)/(n-t)},e.sq=function(e){return e*e},e.degrees=function(e){return 180*e/Math.PI},e.random=function(e,t){if(0===arguments.length?(t=1,e=0):1===arguments.length&&(t=e,e=0),e===t)return e
for(var n=0;n<100;n++){var r=i(),s=r*(t-e)+e
if(s!==t)return s}return e},n.createRandomized=function(){var e=new Date
return new n(e/6e4&4294967295,4294967295&e)},e.randomSeed=function(e){i=new n(e,(e<<16)+(e>>16)).doubleGenerator,this.haveNextNextGaussian=!1},e.randomGaussian=function(){if(this.haveNextNextGaussian)return this.haveNextNextGaussian=!1,this.nextNextGaussian
var e,t,n
do e=2*i()-1,t=2*i()-1,n=e*e+t*t
while(n>=1||0===n)
var r=Math.sqrt(-2*Math.log(n)/n)
return this.nextNextGaussian=t*r,this.haveNextNextGaussian=!0,e*r}
var s={generator:t,octaves:4,fallout:.5,seed:t}
e.noise=function(e,n,i){s.generator===t&&(s.generator=new r(s.seed))
for(var o=s.generator,a=1,l=1,h=0,u=0;u<s.octaves;++u){switch(a*=s.fallout,arguments.length){case 1:h+=a*(1+o.noise1d(l*e))/2
break
case 2:h+=a*(1+o.noise2d(l*e,l*n))/2
break
case 3:h+=a*(1+o.noise3d(l*e,l*n,l*i))/2}l*=2}return h},e.noiseDetail=function(e,n){s.octaves=e,n!==t&&(s.fallout=n)},e.noiseSeed=function(e){s.seed=e,s.generator=t}}},{}],24:[function(e,t,n){t.exports=function(e){var t={trim:function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(e[n].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))
return t}return e.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")},radians:function(e){return e/180*Math.PI},nfCoreScalar:function(t,n,r,i,s,o){var a=t<0?r:n,l=0===s,h=s===e||s<0?0:s,u=Math.abs(t)
if(l)for(h=1,u*=10;Math.abs(Math.round(u)-u)>1e-6&&h<7;)++h,u*=10
else 0!==h&&(u*=Math.pow(10,h))
var c,f=2*u
if(Math.floor(u)===u)c=u
else if(Math.floor(f)===f){var p=Math.floor(u)
c=p+p%2}else c=Math.round(u)
for(var m="",g=i+h;g>0||c>0;)g--,m=""+c%10+m,c=Math.floor(c/10)
if(o!==e)for(var d=m.length-3-h;d>0;)m=m.substring(0,d)+o+m.substring(d),d-=3
return h>0?a+m.substring(0,m.length-h)+"."+m.substring(m.length-h,m.length):a+m},nfCore:function(e,n,r,i,s,o){if(e instanceof Array){for(var a=[],l=0,h=e.length;l<h;l++)a.push(t.nfCoreScalar(e[l],n,r,i,s,o))
return a}return t.nfCoreScalar(e,n,r,i,s,o)},nf:function(e,n,r){return t.nfCore(e,"","-",n,r)},nfs:function(e,n,r){return t.nfCore(e," ","-",n,r)},nfp:function(e,n,r){return t.nfCore(e,"+","-",n,r)},nfc:function(e,n){return t.nfCore(e,"","-",0,n,",")},withCommonFunctions:function(e){["trim","radians","nf","nfs","nfp","nfc"].forEach(function(n){e[n]=t[n]})}}
return t}()},{}],25:[function(e,t,n){t.exports=function(e,t,n,r,i,s){function o(t,n){var i=t,s=0,o=0
if(e.pmouseX=e.mouseX,e.pmouseY=e.mouseY,i.offsetParent)do s+=i.offsetLeft,o+=i.offsetTop
while(i=i.offsetParent)
i=t
do s-=i.scrollLeft||0,o-=i.scrollTop||0
while(i=i.parentNode)
var a,l,h,u
return r.defaultView&&r.defaultView.getComputedStyle&&(a=parseInt(r.defaultView.getComputedStyle(t,null).paddingLeft,10)||0,l=parseInt(r.defaultView.getComputedStyle(t,null).paddingTop,10)||0,h=parseInt(r.defaultView.getComputedStyle(t,null).borderLeftWidth,10)||0,u=parseInt(r.defaultView.getComputedStyle(t,null).borderTopWidth,10)||0),s+=a,o+=l,s+=h,o+=u,s+=window.pageXOffset,o+=window.pageYOffset,{X:s,Y:o}}function a(t,n){var r=o(t,n)
e.mouseX=n.pageX-r.X,e.mouseY=n.pageY-r.Y}function l(e){var t,n=o(e.changedTouches[0].target,e.changedTouches[0])
for(t=0;t<e.touches.length;t++){var r=e.touches[t]
r.offsetX=r.pageX-n.X,r.offsetY=r.pageY-n.Y}for(t=0;t<e.targetTouches.length;t++){var i=e.targetTouches[t]
i.offsetX=i.pageX-n.X,i.offsetY=i.pageY-n.Y}for(t=0;t<e.changedTouches.length;t++){var s=e.changedTouches[t]
s.offsetX=s.pageX-n.X,s.offsetY=s.pageY-n.Y}return e}n(t,"touchstart",function(r){t.setAttribute("style","-webkit-user-select: none"),t.setAttribute("onclick","void(0)"),t.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)")
for(var o=0,h=eventHandlers.length;o<h;o++){var u=eventHandlers[o].type
"mouseout"!==u&&"mousemove"!==u&&"mousedown"!==u&&"mouseup"!==u&&"DOMMouseScroll"!==u&&"mousewheel"!==u&&"touchstart"!==u||detachEventHandler(eventHandlers[o])}e.touchStart!==s||e.touchMove!==s||e.touchEnd!==s||e.touchCancel!==s?(n(t,"touchstart",function(t){e.touchStart!==s&&(t=l(t),e.touchStart(t))}),n(t,"touchmove",function(t){e.touchMove!==s&&(t.preventDefault(),t=l(t),e.touchMove(t))}),n(t,"touchend",function(t){e.touchEnd!==s&&(t=l(t),e.touchEnd(t))}),n(t,"touchcancel",function(t){e.touchCancel!==s&&(t=l(t),e.touchCancel(t))})):(n(t,"touchstart",function(n){a(t,n.touches[0]),e.__mousePressed=!0,e.mouseDragging=!1,e.mouseButton=i.LEFT,"function"==typeof e.mousePressed&&e.mousePressed()}),n(t,"touchmove",function(n){n.preventDefault(),a(t,n.touches[0]),"function"!=typeof e.mouseMoved||e.__mousePressed||e.mouseMoved(),"function"==typeof e.mouseDragged&&e.__mousePressed&&(e.mouseDragged(),e.mouseDragging=!0)}),n(t,"touchend",function(t){e.__mousePressed=!1,"function"!=typeof e.mouseClicked||e.mouseDragging||e.mouseClicked(),"function"==typeof e.mouseReleased&&e.mouseReleased()})),t.dispatchEvent(r)}),function(){var r=!0,i=function(e){e.preventDefault(),e.stopPropagation()}
e.disableContextMenu=function(){r&&(n(t,"contextmenu",i),r=!1)},e.enableContextMenu=function(){r||(detachEventHandler({elem:t,type:"contextmenu",fn:i}),r=!0)}}(),n(t,"mousemove",function(n){a(t,n),"function"!=typeof e.mouseMoved||e.__mousePressed||e.mouseMoved(),"function"==typeof e.mouseDragged&&e.__mousePressed&&(e.mouseDragged(),e.mouseDragging=!0)}),n(t,"mouseout",function(t){"function"==typeof e.mouseOut&&e.mouseOut()}),n(t,"mouseover",function(n){a(t,n),"function"==typeof e.mouseOver&&e.mouseOver()}),t.onmousedown=function(){return t.focus(),!1},n(t,"mousedown",function(t){switch(e.__mousePressed=!0,e.mouseDragging=!1,t.which){case 1:e.mouseButton=i.LEFT
break
case 2:e.mouseButton=i.CENTER
break
case 3:e.mouseButton=i.RIGHT}"function"==typeof e.mousePressed&&e.mousePressed()}),n(t,"mouseup",function(t){e.__mousePressed=!1,"function"!=typeof e.mouseClicked||e.mouseDragging||e.mouseClicked(),"function"==typeof e.mouseReleased&&e.mouseReleased()})
var h=function(n){if(n.target===t){var r=0
n.wheelDelta?(r=n.wheelDelta/120,window.opera&&(r=-r)):n.detail&&(r=-n.detail/3),e.mouseScroll=r,r&&"function"==typeof e.mouseScrolled&&(n.stopPropagation(),n.preventDefault(),e.mouseScrolled())}}
n(r,"DOMMouseScroll",h),n(r,"mousewheel",h)}},{}],26:[function(e,t,n){t.exports=function(t,n){function r(){var e=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadXML","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","parseXML","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","randomGaussian","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shearX","shearY","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","transform","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","XML","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith","__matches"]
h&&Object.keys(h).forEach(function(t){e.push(t)})
var n,r,i={}
for(n=0,r=e.length;n<r;++n)i[e[n]]=null
for(var s in t.lib)if(t.lib.hasOwnProperty(s)&&t.lib[s].exports){var o=t.lib[s].exports
for(n=0,r=o.length;n<r;++n)i[o[n]]=null}return i}function i(e){function t(e){for(var t=[],n=e.split(/([\{\[\(\)\]\}])/),r=n[0],i=[],s=1;s<n.length;s+=2){var o=n[s]
if("["===o||"{"===o||"("===o)i.push(r),r=o
else if("]"===o||"}"===o||")"===o){var a="}"===o?"A":")"===o?"B":"C",l=t.length
t.push(r+o),r=i.pop()+'"'+a+(l+1)+'"'}r+=n[s+1]}return t.unshift(r),t}function n(e,t){return e.replace(/'(\d+)'/g,function(e,n){var r=t[n]
return"/"===r.charAt(0)?r:/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(r)?"(new $p.Character("+r+"))":r})}function i(e){var t,n=/^\s*/.exec(e)
if(n[0].length===e.length)t={left:n[0],middle:"",right:""}
else{var r=/\s*$/.exec(e)
t={left:n[0],middle:e.substring(n[0].length,r.index),right:r[0]}}return t.untrim=function(e){return this.left+e+this.right},t}function s(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function h(e,t){for(var n=0,r=t.length;n<r;++n)e[t[n]]=null
return e}function u(e){for(var t in e)if(e.hasOwnProperty(t))return!1
return!0}function c(e){return e.substring(2,e.length-1)}function f(e,t){var n=_e.length
return _e.push(e),'"'+t+n+'"'}function p(){return"class"+ ++Le}function m(e,t,n){e.classId=t,e.scopeId=n,Re[t]=e}function g(e){var t=e
return t=t.replace(Ie,function(e){return f(e,"E")}),t=t.replace(De,function(e){return f(e,"D")}),t=t.replace(ke,function(e){return f(e,"H")})}function d(e,t){var n=e.replace(Ne,function(e,n,r,i,s,o){return r!==t?e:f(e,"G")})
return n}function v(e){this.name=e}function y(e,t){this.params=e,this.methodArgsParam=t}function A(e){var t=s(e.substring(1,e.length-1)),n=[],r=null
if(""!==t)for(var i=t.split(","),o=0;o<i.length;++o){var a=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(i[o])
if(o===i.length-1&&i[o].indexOf("...")>=0){r=new v(a[1])
break}n.push(new v(a[1]))}return new y(n,r)}function x(e){function t(e,t,n,r){var o=_e[r]
s=!0
var a=i(o.substring(1,o.length-1))
return"__"+n+(""===a.middle?f("("+t.replace(/\.\s*$/,"")+")","B"):f("("+t.replace(/\.\s*$/,"")+","+a.middle+")","B"))}function n(e,t,n){return s=!0,"__instanceof"+f("("+t+", "+n+")","B")}var r=e
r=r.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(e,t,n){return n}),r=r.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(e,t,n){return f(e,"F")}),r=r.replace(ke,function(e){return f(e,"H")}),r=r.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(e,t,n){var r=n.replace(/"C(\d+)"/g,function(e,t){return _e[t]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", "),i="{"+r.substring(1,r.length-1)+"}",s="('"+t+"', "+f(i,"A")+")"
return"$p.createJavaArray"+f(s,"B")}),r=r.replace(/(\.\s*length)\s*"B\d+"/g,"$1"),r=r.replace(/#([0-9A-Fa-f]{6})\b/g,function(e,t){return"0xFF"+t}),r=r.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(e,t,n){var r=_e[t]
if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(r))return e
if(/^\(\s*int\s*\)$/.test(r))return"(int)"+n
var i=r.split(/"C(\d+)"/g)
return i.length>1&&!/^\[\s*\]$/.test(_e[i[1]])?e:""+n}),r=r.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(e,t){var n=i(t)
return n.untrim("__int_cast("+n.middle+")")}),r=r.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1"),r=r.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(e,t,n){return t===n?e:""===n?"0"+t:t}),r=r.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1"),r=r.replace(/([^\s])%([^=\s])/g,"$1 % $2"),r=r.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1"),r=r.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(e,t){return"parse"+t.substring(0,1).toUpperCase()+t.substring(1)+'"B'}),r=r.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(e,t,n,r,i,s){if(n){var o=_e[r]
return i?"pixels.setPixel"+f("("+o.substring(1,o.length-1)+","+s+")","B"):"pixels.getPixel"+f("("+o.substring(1,o.length-1)+")","B")}return t?"pixels.getLength"+f("()","B"):i?"pixels.set"+f("("+s+")","B"):"pixels.toArray"+f("()","B")})
var s
do s=!1,r=r.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,t)
while(s)
do s=!1,r=r.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,n)
while(s)
return r=r.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")}function b(e,t){this.baseInterfaceName=e,this.body=t,t.owner=this}function w(e){var t=new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e),n=we,r=p()
we=r
var i=t[1]+"$"+r,s=new b(i,Ee(_e[t[2]],i,"","implements "+t[1]))
return m(s,r,n),we=n,s}function E(e,t,n){this.name=e,this.params=t,this.body=n}function S(e){var t=new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e)
return new E("function"!==t[1]?t[1]:null,A(_e[t[2]]),Pe(_e[t[3]]))}function P(e){this.members=e}function C(e){for(var t=e.split(","),n=0;n<t.length;++n){var r=t[n].indexOf(":")
r<0?t[n]={value:Te(t[n])}:t[n]={label:s(t[n].substring(0,r)),value:Te(s(t[n].substring(r+1)))}}return new P(t)}function M(e){if("("===e.charAt(0)||"["===e.charAt(0))return e.charAt(0)+M(e.substring(1,e.length-1))+e.charAt(e.length-1)
if("{"===e.charAt(0))return/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e)?"{"+f(e.substring(1,e.length-1),"I")+"}":"["+M(e.substring(1,e.length-1))+"]"
var t=i(e),n=x(t.middle)
return n=n.replace(/"[ABC](\d+)"/g,function(e,t){return M(_e[t])}),t.untrim(n)}function T(e){return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(e,t,n,r,i,s){if(t)return e
var a={name:n,member:i,callSign:!!s}
return be(a)+(r===o?"":r)})}function _(e,t){this.expr=e,this.transforms=t}function R(e,t,n){this.name=e,this.value=t,this.isDefault=n}function L(e,t){var n,r,i,o=e.indexOf("=")
return o<0?(n=e,r=t,i=!0):(n=e.substring(0,o),r=Te(e.substring(o+1)),i=!1),new R(s(n.replace(/(\s*"C\d+")+/g,"")),r,i)}function I(e){return"int"===e||"float"===e?"0":"boolean"===e?"false":"color"===e?"0x00000000":"null"}function D(e,t){this.definitions=e,this.varType=t}function O(e){this.expression=e}function N(e){if(Oe.test(e)){for(var t=Fe.exec(e),n=e.substring(t[0].length).split(","),r=I(t[2]),i=0;i<n.length;++i)n[i]=L(n[i],r)
return new D(n,t[2])}return new O(Te(e))}function F(e,t,n){this.initStatement=e,this.condition=t,this.step=n}function k(e,t){this.initStatement=e,this.container=t}function B(e,t){this.initStatement=e,this.container=t}function $(e){var t
return/\bin\b/.test(e)?(t=e.substring(1,e.length-1).split(/\bin\b/g),new k(N(s(t[0])),Te(t[1]))):e.indexOf(":")>=0&&e.indexOf(";")<0?(t=e.substring(1,e.length-1).split(":"),new B(N(s(t[0])),Te(t[1]))):(t=e.substring(1,e.length-1).split(";"),new F(N(s(t[0])),Te(t[1]),Te(t[2])))}function G(e){e.sort(function(e,t){return t.weight-e.weight})}function V(e,t,n){this.name=e,this.body=t,this.isStatic=n,t.owner=this}function z(e,t,n){this.name=e,this.body=t,this.isStatic=n,t.owner=this}function U(e){var t=Ie.exec(e)
Ie.lastIndex=0
var n,r=t[1].indexOf("static")>=0,i=_e[c(t[6])],s=we,o=p()
return we=o,n="interface"===t[2]?new V(t[3],Se(i,t[3],t[4]),r):new z(t[3],Ee(i,t[3],t[4],t[5]),r),m(n,o,s),we=s,n}function H(e,t,n,r){this.name=e,this.params=t,this.body=n,this.isStatic=r}function X(e){var t=De.exec(e)
De.lastIndex=0
var n=t[1].indexOf("static")>=0,r=";"!==t[6]?_e[c(t[6])]:"{}"
return new H(t[3],A(_e[c(t[4])]),Pe(r),n)}function Y(e,t,n){this.definitions=e,this.fieldType=t,this.isStatic=n}function K(e){for(var t=Fe.exec(e),n=t[1].indexOf("static")>=0,r=e.substring(t[0].length).split(/,\s*/g),i=I(t[2]),s=0;s<r.length;++s)r[s]=L(r[s],i)
return new Y(r,t[2],n)}function j(e,t){this.params=e,this.body=t}function W(e){var t=new RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e),n=A(_e[t[1]])
return new j(n,Pe(_e[t[2]]))}function Z(e,t,n,r,i,s){var o,a
for(this.name=e,this.interfacesNames=t,this.methodsNames=n,this.fields=r,this.innerClasses=i,this.misc=s,o=0,a=r.length;o<a;++o)r[o].owner=this}function q(e,t,n,r,i,s,o,a,l){var h,u
for(this.name=e,this.baseClassName=t,this.interfacesNames=n,this.functions=r,this.methods=i,this.fields=s,this.cstrs=o,this.innerClasses=a,this.misc=l,h=0,u=s.length;h<u;++h)s[h].owner=this}function Q(e,t){this.name=e,this.body=t,t.owner=this}function J(e,t){this.name=e,this.body=t,t.owner=this}function ee(e){var t=Ie.exec(e)
Ie.lastIndex=0
var n=_e[c(t[6])],r=we,i=p()
we=i
var s
return s="interface"===t[2]?new Q(t[3],Se(n,t[3],t[4])):new J(t[3],Ee(n,t[3],t[4],t[5])),m(s,i,r),we=r,s}function te(e,t,n){this.name=e,this.params=t,this.body=n}function ne(e){var t=De.exec(e)
De.lastIndex=0
return new te(t[3],A(_e[c(t[4])]),Pe(_e[c(t[6])]))}function re(e){var t=e
return t=t.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1")}function ie(e,t){this.argument=e,this.misc=t}function se(e,t){this.argument=e,this.misc=t}function oe(e,t,n){this.name=e,this.argument=t,this.misc=n}function ae(e){this.expr=e}function le(e){this.label=e}function he(e){for(var t=[],n=0,r=e.length;n<r;++n){var i=e[n]
i instanceof D?t=t.concat(i.getNames()):i instanceof ie&&i.argument.initStatement instanceof D?t=t.concat(i.argument.initStatement.getNames()):(i instanceof V||i instanceof z||i instanceof Q||i instanceof J||i instanceof te||i instanceof E)&&t.push(i.name)}return h({},t)}function ue(e){this.statements=e}function ce(e){this.statements=e}function fe(e){function t(e,t){for(var n,r=t.split("."),s=e.scope;s;){if(s.hasOwnProperty(r[0])){n=s[r[0]]
break}s=s.scope}n===o&&(n=i[r[0]])
for(var a=1,l=r.length;a<l&&n;++a)n=n.inScope[r[a]]
return n}var n,r,i={}
for(n in Re)if(Re.hasOwnProperty(n)){r=Re[n]
var s=r.scopeId,a=r.name
if(s){var l=Re[s]
r.scope=l,l.inScope===o&&(l.inScope={}),l.inScope[a]=r}else i[a]=r}for(n in Re)if(Re.hasOwnProperty(n)){r=Re[n]
var h=r.body.baseClassName
if(h){var u=t(r,h)
u&&(r.base=u,u.derived||(u.derived=[]),u.derived.push(r))}var c,f,p=r.body.interfacesNames,m=[]
if(p&&p.length>0){for(c=0,f=p.length;c<f;++c){var g=t(r,p[c])
m.push(g),g&&(g.derived||(g.derived=[]),g.derived.push(r))}m.length>0&&(r.interfaces=m)}}}function pe(e){function t(e,t){var n=o[e]
if(!n)return!1
var r=n.indexOf(t)
return!(r<0)&&(n.splice(r,1),!(n.length>0)&&(delete o[e],!0))}var n,r,i,s=[],o={}
for(n in Re)if(Re.hasOwnProperty(n))if(i=Re[n],i.inScope||i.derived){var a=[]
if(i.inScope)for(r in i.inScope)i.inScope.hasOwnProperty(r)&&a.push(i.inScope[r])
i.derived&&(a=a.concat(i.derived)),o[n]=a}else s.push(n),i.weight=0
for(;s.length>0;)if(n=s.shift(),i=Re[n],i.scopeId&&t(i.scopeId,i)&&(s.push(i.scopeId),Re[i.scopeId].weight=i.weight+1),i.base&&t(i.base.classId,i)&&(s.push(i.base.classId),i.base.weight=i.weight+1),i.interfaces){var l,h
for(l=0,h=i.interfaces.length;l<h;++l)i.interfaces[l]&&t(i.interfaces[l].classId,i)&&(s.push(i.interfaces[l].classId),i.interfaces[l].weight=i.weight+1)}}var me=r(),ge=e.replace(/\r\n?|\n\r/g,"\n"),de=[],ve=ge.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(e,t,n,r,i,s,o,a){var l
return t||n?(l=de.length,de.push(e),"'"+l+"'"):r?(l=de.length,de.push(s),i+"'"+l+"'"):""!==a?" ":"\n"})
ve=ve.replace(/__x([0-9A-F]{4})/g,function(e,t){return"__x005F_x"+t}),ve=ve.replace(/\$/g,"__x0024"),ve=ve.replace(/return\s*[\n\r]+/g,"return ")
var ye,Ae=ve,xe=function(e,t,n,r){return t||r?e:(ye=!0,"")}
do ye=!1,Ae=Ae.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,xe)
while(ye)
var be,we,Ee,Se,Pe,Ce,Me,Te,_e=t(Ae),Re={},Le=0,Ie=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g,De=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g,Oe=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/,Ne=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g,Fe=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/,ke=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g
v.prototype.toString=function(){return this.name},y.prototype.getNames=function(){for(var e=[],t=0,n=this.params.length;t<n;++t)e.push(this.params[t].name)
return e},y.prototype.prependMethodArgs=function(e){return this.methodArgsParam?"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+e.substring(1):e},y.prototype.toString=function(){if(0===this.params.length)return"()"
for(var e="(",t=0,n=this.params.length;t<n;++t)e+=this.params[t]+", "
return e.substring(0,e.length-2)+")"},b.prototype.toString=function(){return"new ("+this.body+")"},E.prototype.toString=function(){var e=be,t=h({this:null},this.params.getNames())
be=function(n){return t.hasOwnProperty(n.name)?n.name:e(n)}
var n="function"
this.name&&(n+=" "+this.name)
var r=this.params.prependMethodArgs(this.body.toString())
return n+=this.params+" "+r,be=e,n},P.prototype.toString=function(){var e=be
be=function(t){return"this"===t.name?"this":e(t)}
for(var t="",n=0,r=this.members.length;n<r;++n)this.members[n].label&&(t+=this.members[n].label+": "),t+=this.members[n].value.toString()+", "
return be=e,t.substring(0,t.length-2)},_.prototype.toString=function(){var e=this.transforms,t=T(this.expr)
return t.replace(/"!(\d+)"/g,function(t,n){return e[n].toString()})},Te=function(e){var t=[],n=M(e)
return n=n.replace(/"H(\d+)"/g,function(e,n){return t.push(S(_e[n])),'"!'+(t.length-1)+'"'}),n=n.replace(/"F(\d+)"/g,function(e,n){return t.push(w(_e[n])),'"!'+(t.length-1)+'"'}),n=n.replace(/"I(\d+)"/g,function(e,n){return t.push(C(_e[n])),'"!'+(t.length-1)+'"'}),new _(n,t)},R.prototype.toString=function(){return this.name+" = "+this.value},D.prototype.getNames=function(){for(var e=[],t=0,n=this.definitions.length;t<n;++t)e.push(this.definitions[t].name)
return e},D.prototype.toString=function(){return"var "+this.definitions.join(",")},O.prototype.toString=function(){return this.expression.toString()},F.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"},k.prototype.toString=function(){var e=this.initStatement.toString()
return e.indexOf("=")>=0&&(e=e.substring(0,e.indexOf("="))),"("+e+" in "+this.container+")"},B.iteratorId=0,B.prototype.toString=function(){var e=this.initStatement.toString(),t="$it"+B.iteratorId++,n=e.replace(/^\s*var\s*/,"").split("=")[0],r="var "+t+" = new $p.ObjectIterator("+this.container+"), "+n+" = void(0)",i=t+".hasNext() && (("+n+" = "+t+".next()) || true)"
return"("+r+"; "+i+";)"},V.prototype.toString=function(){return""+this.body},z.prototype.toString=function(){return""+this.body},H.prototype.toString=function(){var e=h({},this.params.getNames()),t=be
be=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n=this.params.prependMethodArgs(this.body.toString()),r="function "+this.methodId+this.params+" "+n+"\n"
return be=t,r},Y.prototype.getNames=function(){for(var e=[],t=0,n=this.definitions.length;t<n;++t)e.push(this.definitions[t].name)
return e},Y.prototype.toString=function(){var e=be({name:"[this]"})
if(this.isStatic){for(var t=this.owner.name,n=[],r=0,i=this.definitions.length;r<i;++r){var s=this.definitions[r],o=s.name,a=t+"."+o,l="if("+a+" === void(0)) {\n "+a+" = "+s.value+"; }\n$p.defineProperty("+e+", '"+o+"', { get: function(){return "+a+";}, set: function(val){"+a+" = val;} });\n"
n.push(l)}return n.join("")}return e+"."+this.definitions.join("; "+e+".")},j.prototype.toString=function(){var e=h({},this.params.getNames()),t=be
be=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function $constr_"+this.params.params.length+this.params.toString(),r=this.params.prependMethodArgs(this.body.toString())
return/\$(superCstr|constr)\b/.test(r)||(r="{\n$superCstr();\n"+r.substring(1)),be=t,n+r+"\n"},Z.prototype.getMembers=function(e,t,n){this.owner.base&&this.owner.base.body.getMembers(e,t,n)
var r,i,s,o
for(r=0,s=this.fields.length;r<s;++r){var a=this.fields[r].getNames()
for(i=0,o=a.length;i<o;++i)e[a[i]]=this.fields[r]}for(r=0,s=this.methodsNames.length;r<s;++r){var l=this.methodsNames[r]
t[l]=!0}for(r=0,s=this.innerClasses.length;r<s;++r){var h=this.innerClasses[r]
n[h.name]=h}},Z.prototype.toString=function(){function e(e){for(var t=0;e;)++t,e=e.scope
return t}var t=(e(this.owner),this.name),n="",r="",i={},s={},o={}
this.getMembers(i,s,o)
var a,l
if(this.owner.interfaces){var h,u=[]
for(a=0,l=this.interfacesNames.length;a<l;++a)this.owner.interfaces[a]&&(h=be({name:this.interfacesNames[a]}),u.push(h),n+="$p.extendInterfaceMembers("+t+", "+h+");\n")
r+=t+".$interfaces = ["+u.join(", ")+"];\n"}for(r+=t+".$isInterface = true;\n",r+=t+".$methods = ['"+this.methodsNames.join("', '")+"'];\n",G(this.innerClasses),a=0,l=this.innerClasses.length;a<l;++a){var c=this.innerClasses[a]
c.isStatic&&(n+=t+"."+c.name+" = "+c+";\n")}for(a=0,l=this.fields.length;a<l;++a){var f=this.fields[a]
f.isStatic&&(n+=t+"."+f.definitions.join(";\n"+t+".")+";\n")}return"(function() {\nfunction "+t+"() { throw 'Unable to create the interface'; }\n"+n+r+"return "+t+";\n})()"},Se=function(e,t,n){var r=e.substring(1,e.length-1)
r=g(r),r=d(r,t)
var s=[],a=[]
r=r.replace(/"([DE])(\d+)"/g,function(e,t,n){return"D"===t?s.push(n):"E"===t&&a.push(n),""})
var l,h,u,c=r.split(/;(?:\s*;)*/g)
for(n!==o&&(l=n.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)),h=0,u=s.length;h<u;++h){var f=X(_e[s[h]])
s[h]=f.name}for(h=0,u=c.length-1;h<u;++h){var p=i(c[h])
c[h]=K(p.middle)}var m=c.pop()
for(h=0,u=a.length;h<u;++h)a[h]=U(_e[a[h]])
return new Z(t,l,s,c,a,{tail:m})},q.prototype.getMembers=function(e,t,n){this.owner.base&&this.owner.base.body.getMembers(e,t,n)
var r,i,s,o
for(r=0,s=this.fields.length;r<s;++r){var a=this.fields[r].getNames()
for(i=0,o=a.length;i<o;++i)e[a[i]]=this.fields[r]}for(r=0,s=this.methods.length;r<s;++r){var l=this.methods[r]
t[l.name]=l}for(r=0,s=this.innerClasses.length;r<s;++r){var h=this.innerClasses[r]
n[h.name]=h}},q.prototype.toString=function(){function e(e){for(var t=0;e;)++t,e=e.scope
return t}var t=e(this.owner),n="$this_"+t,r=this.name,i="var "+n+" = this;\n",o="",a="",l={},h={},u={}
this.getMembers(l,h,u)
var c=be
be=function(e){var t=e.name
return"this"===t?e.callSign||!e.member?n+".$self":n:l.hasOwnProperty(t)?l[t].isStatic?r+"."+t:n+"."+t:u.hasOwnProperty(t)?n+"."+t:h.hasOwnProperty(t)?h[t].isStatic?r+"."+t:n+".$self."+t:c(e)}
var f
this.baseClassName?(f=c({name:this.baseClassName}),i+="var $super = { $upcast: "+n+" };\n",i+="function $superCstr(){"+f+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n",a+=r+".$base = "+f+";\n"):i+="function $superCstr(){$p.extendClassChain("+n+")}\n",this.owner.base&&(o+="$p.extendStaticMembers("+r+", "+f+");\n")
var p,m,g,d
if(this.owner.interfaces){var v,y=[]
for(p=0,m=this.interfacesNames.length;p<m;++p)this.owner.interfaces[p]&&(v=c({name:this.interfacesNames[p]}),y.push(v),o+="$p.extendInterfaceMembers("+r+", "+v+");\n")
a+=r+".$interfaces = ["+y.join(", ")+"];\n"}for(this.functions.length>0&&(i+=this.functions.join("\n")+"\n"),G(this.innerClasses),p=0,m=this.innerClasses.length;p<m;++p){var A=this.innerClasses[p]
A.isStatic?(o+=r+"."+A.name+" = "+A+";\n",i+=n+"."+A.name+" = "+r+"."+A.name+";\n"):i+=n+"."+A.name+" = "+A+";\n"}for(p=0,m=this.fields.length;p<m;++p){var x=this.fields[p]
if(x.isStatic)for(o+=r+"."+x.definitions.join(";\n"+r+".")+";\n",g=0,d=x.definitions.length;g<d;++g){var b=x.definitions[g].name,w=r+"."+b
i+="$p.defineProperty("+n+", '"+b+"', {get: function(){return "+w+"}, set: function(val){"+w+" = val}});\n"}else i+=n+"."+x.definitions.join(";\n"+n+".")+";\n"}var E={}
for(p=0,m=this.methods.length;p<m;++p){var S=this.methods[p],P=E[S.name],C=S.name+"$"+S.params.params.length,M=!!S.params.methodArgsParam
P?(++P,C+="_"+P):P=1,S.methodId=C,E[S.name]=P,S.isStatic?(o+=S,o+="$p.addMethod("+r+", '"+S.name+"', "+C+", "+M+");\n",i+="$p.addMethod("+n+", '"+S.name+"', "+C+", "+M+");\n"):(i+=S,i+="$p.addMethod("+n+", '"+S.name+"', "+C+", "+M+");\n")}i+=s(this.misc.tail),this.cstrs.length>0&&(i+=this.cstrs.join("\n")+"\n"),i+="function $constr() {\n"
var T=[]
for(p=0,m=this.cstrs.length;p<m;++p){var _=this.cstrs[p].params.params.length,R=!!this.cstrs[p].params.methodArgsParam
T.push("if(arguments.length "+(R?">=":"===")+" "+_+") { $constr_"+_+".apply("+n+", arguments); }")}return T.length>0&&(i+=T.join(" else ")+" else "),i+="$superCstr();\n}\n",i+="$constr.apply(null, arguments);\n",be=c,"(function() {\nfunction "+r+"() {\n"+i+"}\n"+o+a+"return "+r+";\n})()"},Ee=function(e,t,n,r){var s=e.substring(1,e.length-1)
s=g(s),s=d(s,t)
var a=[],l=[],h=[],u=[]
s=s.replace(/"([DEGH])(\d+)"/g,function(e,t,n){return"D"===t?a.push(n):"E"===t?l.push(n):"H"===t?u.push(n):h.push(n),""})
var c,f,p,m=s.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g)
for(n!==o&&(c=n.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")),r!==o&&(f=r.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)),p=0;p<u.length;++p)u[p]=S(_e[u[p]])
for(p=0;p<a.length;++p)a[p]=X(_e[a[p]])
for(p=0;p<m.length-1;++p){var v=i(m[p])
m[p]=K(v.middle)}var y=m.pop()
for(p=0;p<h.length;++p)h[p]=W(_e[h[p]])
for(p=0;p<l.length;++p)l[p]=U(_e[l[p]])
return new q(t,c,f,u,a,m,h,l,{tail:y})},Q.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"},J.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"},te.prototype.toString=function(){var e=h({},this.params.getNames()),t=be
be=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n=this.params.prependMethodArgs(this.body.toString()),r="function "+this.name+this.params+" "+n+"\n$p."+this.name+" = "+this.name+";\n"+this.name+" = "+this.name+".bind($p);"
return be=t,r},ie.prototype.toString=function(){return this.misc.prefix+this.argument.toString()},se.prototype.toString=function(){return this.misc.prefix+this.argument.toString()},oe.prototype.toString=function(){var e=this.misc.prefix
return this.argument!==o&&(e+=this.argument.toString()),e},ae.prototype.toString=function(){return"case "+this.expr+":"},le.prototype.toString=function(){return this.label},Ce=function(e,t,n){var r=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g),a=[]
e=re(e)
for(var l,h,u=0;null!==(l=r.exec(e));){if(l[1]!==o){var c=e.lastIndexOf('"B',r.lastIndex),f=e.substring(u,c)
"for"===l[1]?a.push(new ie($(_e[l[2]]),{prefix:f})):"catch"===l[1]?a.push(new se(A(_e[l[2]]),{prefix:f})):a.push(new oe(l[1],Te(_e[l[2]]),{prefix:f}))}else if(l[3]!==o)a.push(new oe(l[3],o,{prefix:e.substring(u,r.lastIndex)}))
else if(l[4]!==o){if(h=e.substring(u,r.lastIndex-l[4].length),0!==s(h).length)continue
a.push(h)
var p=l[4].charAt(1),m=l[5]
"D"===p?a.push(t(_e[m])):"E"===p?a.push(n(_e[m])):"H"===p?a.push(S(_e[m])):a.push(Pe(_e[m]))}else if(l[6]!==o)a.push(new ae(Te(s(l[7]))))
else if(l[8]!==o){if(h=e.substring(u,r.lastIndex-l[8].length),0!==s(h).length)continue
a.push(new le(e.substring(u,r.lastIndex)))}else{var g=i(e.substring(u,r.lastIndex-1))
a.push(g.left),a.push(N(g.middle)),a.push(g.right+";")}u=r.lastIndex}var d=i(e.substring(u))
return a.push(d.left),""!==d.middle&&(a.push(N(d.middle)),a.push(";"+d.right)),a},ue.prototype.toString=function(){var e=he(this.statements),t=be
u(e)||(be=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)})
var n="{\n"+this.statements.join("")+"\n}"
return be=t,n},Pe=function(e){var t=i(e.substring(1,e.length-1))
return new ue(Ce(t.middle))},ce.prototype.toString=function(){for(var e,t=[],n=[],r=0,i=this.statements.length;r<i;++r)e=this.statements[r],e instanceof J||e instanceof Q?t.push(e):n.push(e)
G(t)
var s=he(this.statements)
be=function(e){var t=e.name
return s.hasOwnProperty(t)?t:me.hasOwnProperty(t)||l.hasOwnProperty(t)||a.hasOwnProperty(t)?"$p."+t:t}
var o="// this code was autogenerated from PJS\n(function($p) {\n"+t.join("")+"\n"+n.join("")+"\n})"
return be=null,o},Me=function(){var e=g(_e[0])
return e=e.replace(/\bimport\s+[^;]+;/g,""),new ce(Ce(e,ne,ee))}
var Be=Me()
fe(Be),pe(Be)
var $e=Be.toString()
return $e=$e.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n"),$e=$e.replace(/__x([0-9A-F]{4})/g,function(e,t){return String.fromCharCode(parseInt(t,16))}),n($e,de)}function s(e,t){var n=new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e)
if(n&&2===n.length)for(var r=[],i=n.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(e,t){return r.push(t),"{"+(r.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";"),s=function(e){return e.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")},o=0,a=i.length;o<a;o++){var l=i[o].split("=")
if(l&&2===l.length){var h=s(l[0]),u=s(l[1]),c=[]
if("preload"===h){c=u.split(",")
for(var f=0,p=c.length;f<p;f++){var m=s(c[f])
t.imageCache.add(m)}}else if("font"===h){c=u.split(",")
for(var g=0,d=c.length;g<d;g++){var v=s(c[g]),y=/^\{(\d*?)\}$/.exec(v)
PFont.preloading.add(y?JSON.parse("{"+r[y[1]]+"}"):v)}}else"pauseOnBlur"===h?t.options.pauseOnBlur="true"===u:"globalKeyEvents"===h?t.options.globalKeyEvents="true"===u:"param-"===h.substring(0,6)?t.params[h.substring(6)]=u:t.options[h]=u}}return e}var o,a=n.defaultScope,l=a.PConstants,h=n.aFunctions,u=n.Browser,c=u.document
t.compile=function(e){var n=new t.Sketch,r=s(e,n),o=i(r)
return n.sourceCode=o,n}
var f=e("../Helpers/PjsConsole")
return t.logger=new f(c),t}},{"../Helpers/PjsConsole":5}],27:[function(e,t,n){t.exports=function(e,t){function n(e,t){return e in l?l[e]:"function"==typeof l[t]?l[t]:function(e){if(e instanceof Array)return e
if("number"==typeof e){var t=[]
return t.length=e,t}}}var r=e.defaultScope,i=e.extend,s=e.Browser,o=s.ajax,a=s.navigator,l=s.window,h=(l.XMLHttpRequest,s.document),u=e.noop,c=r.PConstants
PFont=r.PFont,PShapeSVG=r.PShapeSVG,PVector=r.PVector,Char=Character=r.Char,ObjectIterator=r.ObjectIterator,XMLElement=r.XMLElement,XML=r.XML
var f,p=l.HTMLCanvasElement,m=l.HTMLImageElement
try{f=l.localStorage}catch(e){f={}}"document"in this&&!("fake"in this.document)
h.head||(h.head=h.getElementsByTagName("head")[0])
var g=n("Float32Array","WebGLFloatArray"),d=n("Int32Array","WebGLIntArray"),v=n("Uint16Array","WebGLUnsignedShortArray"),y=n("Uint8Array","WebGLUnsignedByteArray")
if(h.documentMode>=9&&!h.doctype)throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>"
var A=[],x={},b=function(e){e.externals.canvas.id!==t&&e.externals.canvas.id.length||(e.externals.canvas.id="__processing"+A.length),x[e.externals.canvas.id]=A.length,A.push(e)},w=function(e){A.splice(x[e],1),delete x[e]},E=this.Processing=function(e,n,s){function A(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n),ve.push({elem:e,type:t,fn:n})}function x(e){var t=e.elem,n=e.type,r=e.fn
t.removeEventListener?t.removeEventListener(n,r,!1):t.detachEvent&&t.detachEvent("on"+n,r)}function S(e){return Array.prototype.slice.call(e,1)}function P(e,n,r,i){var s=jt.locations[e]
s===t&&(s=Ae.getUniformLocation(n,r),jt.locations[e]=s),null!==s&&(4===i.length?Ae.uniform4fv(s,i):3===i.length?Ae.uniform3fv(s,i):2===i.length?Ae.uniform2fv(s,i):Ae.uniform1f(s,i))}function C(e,n,r,i){var s=jt.locations[e]
s===t&&(s=Ae.getUniformLocation(n,r),jt.locations[e]=s),null!==s&&(4===i.length?Ae.uniform4iv(s,i):3===i.length?Ae.uniform3iv(s,i):2===i.length?Ae.uniform2iv(s,i):Ae.uniform1i(s,i))}function M(e,n,r,i,s){var o=jt.locations[e]
o===t&&(o=Ae.getUniformLocation(n,r),jt.locations[e]=o),o!==-1&&(16===s.length?Ae.uniformMatrix4fv(o,i,s):9===s.length?Ae.uniformMatrix3fv(o,i,s):Ae.uniformMatrix2fv(o,i,s))}function T(e,n,r,i,s){var o=jt.attributes[e]
o===t&&(o=Ae.getAttribLocation(n,r),jt.attributes[e]=o),o!==-1&&(Ae.bindBuffer(Ae.ARRAY_BUFFER,s),Ae.vertexAttribPointer(o,i,Ae.FLOAT,!1,0,0),Ae.enableVertexAttribArray(o))}function _(e,n,r){var i=jt.attributes[e]
i===t&&(i=Ae.getAttribLocation(n,r),jt.attributes[e]=i),i!==-1&&Ae.disableVertexAttribArray(i)}function R(e,t,n,r){var i,s,o,a
if(zt===c.HSB){var l=ye.color.toRGB(e,t,n)
i=l[0],s=l[1],o=l[2]}else i=Math.round(255*(e/kt)),s=Math.round(255*(t/Bt)),o=Math.round(255*(n/$t))
return a=Math.round(255*(r/Ft)),i=i<0?0:i,s=s<0?0:s,o=o<0?0:o,a=a<0?0:a,i=i>255?255:i,s=s>255?255:s,o=o>255?255:o,a=a>255?255:a,a<<24&c.ALPHA_MASK|i<<16&c.RED_MASK|s<<8&c.GREEN_MASK|o&c.BLUE_MASK}function L(e,t){var n
return e&c.ALPHA_MASK?(n=Math.round(255*(t/Ft)),n=n>255?255:n,n=n<0?0:n,e-(e&c.ALPHA_MASK)+(n<<24&c.ALPHA_MASK)):zt===c.RGB?R(e,e,e,t):zt===c.HSB?R(0,0,e/kt*$t,t):void 0}function I(e){if(e<=kt&&e>=0){if(zt===c.RGB)return R(e,e,e,Ft)
if(zt===c.HSB)return R(0,0,e/kt*$t,Ft)}if(e)return e>2147483647&&(e-=4294967296),e}function D(e){var t,n,r
t=((e&c.RED_MASK)>>>16)/255,n=((e&c.GREEN_MASK)>>>8)/255,r=(e&c.BLUE_MASK)/255
var i,s,o=ye.max(ye.max(t,n),r),a=ye.min(ye.min(t,n),r)
return a===o?[0,0,o*$t]:(s=(o-a)/o,i=t===o?(n-r)/(o-a):n===o?2+(r-t)/(o-a):4+(t-n)/(o-a),i/=6,i<0?i+=1:i>1&&(i-=1),[i*kt,s*Bt,o*$t])}function O(){Ae.save()}function N(){Ae.restore(),pt=!0,ht=!0}function F(){var e=(Date.now()-Yt)/1e3
Kt++
var t=Kt/e
e>.5&&(Yt=Date.now(),Kt=0,ye.__frameRate=t),ye.frameCount++}function k(e){var t=parseInt("0x"+e,16)
return t>2147483647&&(t-=4294967296),t}function B(e){return"number"==typeof e?0!==e:"boolean"==typeof e?e:"string"==typeof e?"true"===e.toLowerCase():e instanceof Char?49===e.code||84===e.code||116===e.code:void 0}function $(e){return"number"==typeof e?e:"boolean"==typeof e?e?1:0:"string"==typeof e?parseFloat(e):e instanceof Char?e.code:void 0}function G(e,t){if("number"==typeof e)return 4294967295&e
if("boolean"==typeof e)return e?1:0
if("string"==typeof e){var n=parseInt(e,t||10)
return 4294967295&n}return e instanceof Char?e.code:void 0}function V(){ot&&(ht&&(Ae.fillStyle=ye.color.toString(lt),ht=!1),Ae.fill())}function z(){ut&&(pt&&(Ae.strokeStyle=ye.color.toString(ft),pt=!1),Ae.stroke())}function U(){V(),z(),Ae.closePath()}function H(e,n,r){var i=br.shift()
i===t&&(i={},i.canvas=h.createElement("canvas"),i.context=i.canvas.getContext("2d")),br.push(i)
var s=i.canvas,o=i.context,a=n||e.width,l=r||e.height
return s.width=a,s.height=l,e?"data"in e?o.putImageData(e,0,0):(o.clearRect(0,0,a,l),o.drawImage(e,0,0,a,l)):o.clearRect(0,0,a,l),i}function X(e){return{getLength:function(e){return function(){if(e.isRemote)throw"Image is loaded remotely. Cannot get length."
return e.imageData.data.length?e.imageData.data.length/4:0}}(e),getPixel:function(e){return function(t){var n=4*t,r=e.imageData.data
if(e.isRemote)throw"Image is loaded remotely. Cannot get pixels."
return r[n+3]<<24&c.ALPHA_MASK|r[n]<<16&c.RED_MASK|r[n+1]<<8&c.GREEN_MASK|r[n+2]&c.BLUE_MASK}}(e),setPixel:function(e){return function(t,n){var r=4*t,i=e.imageData.data
if(e.isRemote)throw"Image is loaded remotely. Cannot set pixel."
i[r+0]=(n&c.RED_MASK)>>>16,i[r+1]=(n&c.GREEN_MASK)>>>8,i[r+2]=n&c.BLUE_MASK,i[r+3]=(n&c.ALPHA_MASK)>>>24,e.__isDirty=!0}}(e),toArray:function(e){return function(){var t=[],n=e.imageData.data,r=e.width*e.height
if(e.isRemote)throw"Image is loaded remotely. Cannot get pixels."
for(var i=0,s=0;i<r;i++,s+=4)t.push(n[s+3]<<24&c.ALPHA_MASK|n[s]<<16&c.RED_MASK|n[s+1]<<8&c.GREEN_MASK|n[s+2]&c.BLUE_MASK)
return t}}(e),set:function(e){return function(t){var n,r,i
if(this.isRemote)throw"Image is loaded remotely. Cannot set pixels."
r=e.imageData.data
for(var s=0,o=t.length;s<o;s++)i=t[s],n=4*s,r[n+0]=(i&c.RED_MASK)>>>16,r[n+1]=(i&c.GREEN_MASK)>>>8,r[n+2]=i&c.BLUE_MASK,r[n+3]=(i&c.ALPHA_MASK)>>>24
e.__isDirty=!0}}(e)}}function Y(e,t){var n
if(e>=ye.width||e<0||t<0||t>=ye.height)return 0
if(hn){var r=4*((0|e)+ye.width*(0|t))
return n=ye.imageData.data,n[r+3]<<24&c.ALPHA_MASK|n[r]<<16&c.RED_MASK|n[r+1]<<8&c.GREEN_MASK|n[r+2]&c.BLUE_MASK}return n=ye.toImageData(0|e,0|t,1,1).data,n[3]<<24&c.ALPHA_MASK|n[0]<<16&c.RED_MASK|n[1]<<8&c.GREEN_MASK|n[2]&c.BLUE_MASK}function K(e,t,n){if(n.isRemote)throw"Image is loaded remotely. Cannot get x,y."
var r=t*n.width*4+4*e,i=n.imageData.data
return i[r+3]<<24&c.ALPHA_MASK|i[r]<<16&c.RED_MASK|i[r+1]<<8&c.GREEN_MASK|i[r+2]&c.BLUE_MASK}function j(e,t,n,r){var i=new wr(n,r,c.ARGB)
return i.fromImageData(ye.toImageData(e,t,n,r)),i}function W(e,t,n,r,i){if(i.isRemote)throw"Image is loaded remotely. Cannot get x,y,w,h."
for(var s=new wr(n,r,c.ARGB),o=s.imageData.data,a=i.width,l=i.height,h=i.imageData.data,u=Math.max(0,-t),f=Math.max(0,-e),p=Math.min(r,l-t),m=Math.min(n,a-e),g=u;g<p;++g)for(var d=4*((t+g)*a+(e+f)),v=4*(g*n+f),y=f;y<m;++y)o[v++]=h[d++],o[v++]=h[d++],o[v++]=h[d++],o[v++]=h[d++]
return s.__isDirty=!0,s}function Z(){hn&&(Ae=We,hn=!1,ye.updatePixels())}function q(){function e(e,t){function n(){Z(),Ae[t].apply(Ae,arguments)}e[t]=n}function t(e,t){function n(){return Z(),Ae[t]}function r(e){Z(),Ae[t]=e}ye.defineProperty(e,t,{get:n,set:r})}for(var n in Ae)"function"==typeof Ae[n]?e(this,n):t(this,n)}function Q(){hn||(ye.loadPixels(),null===ln&&(We=Ae,ln=new q),hn=!0,Ae=ln,Ze=0)}function J(e,t,n){e<ye.width&&e>=0&&t>=0&&t<ye.height&&(Q(),ye.pixels.setPixel((0|e)+ye.width*(0|t),n),++Ze>un&&Z())}function ee(e,t,n,r){if(r.isRemote)throw"Image is loaded remotely. Cannot set x,y."
var i=ye.color.toArray(n),s=t*r.width*4+4*e,o=r.imageData.data
o[s]=i[0],o[s+1]=i[1],o[s+2]=i[2],o[s+3]=i[3]}function te(e){return e instanceof String?e:"number"==typeof e?e===(0|e)?e.toString():ye.nf(e,0,3):null===e||e===t?"":e.toString()}function ne(e,t,n,r){var i,s
e.indexOf("\n")<0?(i=[e],s=1):(i=e.split(/\r?\n/g),s=i.length)
var o=0
Jt===c.TOP?o=rn+sn:Jt===c.CENTER?o=rn/2-(s-1)*on/2:Jt===c.BOTTOM&&(o=-(sn+(s-1)*on))
for(var a=0;a<s;++a){var l=i[a]
be.text$line(l,t,n+o,r,Qt),o+=on}}function re(e,t,n,r,i,s){if(0!==e.length&&0!==r&&0!==i&&!(nn>i)){for(var o=-1,a=0,l=0,h=[],u=0,f=e.length;u<f;u++){var p=e[u],m=" "===p,g=an.measureTextWidth(p)
if("\n"!==p&&l+g<=r)m&&(o=u),l+=g
else{if(o+1===a){if(!(u>0))return
o=u}"\n"===p?(h.push({text:e.substring(a,u),width:l}),a=u+1):(h.push({text:e.substring(a,o+1),width:l}),a=o+1),l=0,u=a-1}}a<f&&h.push({text:e.substring(a),width:l})
var d=1,v=rn
Qt===c.CENTER?d=r/2:Qt===c.RIGHT&&(d=r)
var y=h.length,A=Math.min(y,Math.floor(i/on))
Jt===c.TOP?v=rn+sn:Jt===c.CENTER?v=i/2-on*(A/2-1):Jt===c.BOTTOM&&(v=sn+on)
var x,b,w
for(x=0;x<y&&(w=x*on,!(v+w>i-sn));x++)b=h[x],be.text$line(b.text,t+d,n+v+w,s,Qt)}}function ie(e){be="3D"===e?new ir:"2D"===e?new rr:new sr
for(var t in sr.prototype)sr.prototype.hasOwnProperty(t)&&t.indexOf("$")<0&&(ye[t]=be[t])
be.$init()}function se(e){return function(){return ie("2D"),be[e].apply(this,arguments)}}function oe(e){var t=e.which||e.keyCode
switch(t){case 13:return 10
case 91:case 93:case 224:return 157
case 57392:return 17
case 46:return 127
case 45:return 155}return t}function ae(e){var t=e.which||e.keyCode,n=e.shiftKey||e.ctrlKey||e.altKey||e.metaKey
switch(t){case 13:t=n?13:10
break
case 8:t=n?127:8}return new Char(t)}function le(e){return"function"==typeof e.preventDefault?e.preventDefault():"function"==typeof e.stopPropagation&&e.stopPropagation(),!1}function he(){var e
for(e in cn)if(cn.hasOwnProperty(e))return void(ye.__keyPressed=!0)
ye.__keyPressed=!1}function ue(){ye.__keyPressed=!1,cn=[],fn=null}function ce(e,t){cn[e]=t,fn=null,ye.key=t,ye.keyCode=e,ye.keyPressed(),ye.keyCode=0,ye.keyTyped(),he()}function fe(e){var t=oe(e)
if(t===c.DELETE)return void ce(t,new Char(127))
if(pn.indexOf(t)<0)return void(fn=t)
var n=new Char(c.CODED)
return ye.key=n,ye.keyCode=t,cn[t]=n,ye.keyPressed(),fn=null,he(),le(e)}function pe(e){if(null!==fn){var t=fn,n=ae(e)
return ce(t,n),le(e)}}function me(e){var n=oe(e),r=cn[n]
r!==t&&(ye.key=r,ye.keyCode=n,ye.keyReleased(),delete cn[n],he())}if(!(this instanceof E))throw"called Processing constructor as if it were a function: missing 'new'."
var ge={},de=e===t&&n===t
if(ge=de?h.createElement("canvas"):"string"==typeof e?h.getElementById(e):e,!("getContext"in ge))throw"called Processing constructor without passing canvas element reference or id."
var ve=[],ye=this
ye.Char=ye.Character=Char,i.withCommonFunctions(ye),i.withMath(ye),i.withProxyFunctions(ye,S),i.withTouch(ye,ge,A,h,c),s&&Object.keys(s).forEach(function(e){ye[e]=s[e]}),ye.externals={canvas:ge,context:t,sketch:t,window:l},ye.name="Processing.js Instance",ye.use3DContext=!1,ye.focused=!1,ye.breakShape=!1,ye.glyphTable={},ye.pmouseX=0,ye.pmouseY=0,ye.mouseX=0,ye.mouseY=0,ye.mouseButton=0,ye.mouseScroll=0,ye.mouseClicked=t,ye.mouseDragged=t,ye.mouseMoved=t,ye.mousePressed=t,ye.mouseReleased=t,ye.mouseScrolled=t,ye.mouseOver=t,ye.mouseOut=t,ye.touchStart=t,ye.touchEnd=t,ye.touchMove=t,ye.touchCancel=t,ye.key=t,ye.keyCode=t,ye.keyPressed=u,ye.keyReleased=u,ye.keyTyped=u,ye.draw=t,ye.setup=t,ye.__mousePressed=!1,ye.__keyPressed=!1,ye.__frameRate=60,ye.frameCount=0,ye.width=100,ye.height=100
var Ae,xe,be,we,Ee,Se,Pe,Ce,Me,Te,_e,Re,Le,Ie,De,Oe,Ne,Fe,ke,Be,$e,Ge,Ve,ze,Ue,He,Xe,Ye,Ke,je,We,Ze,qe,Qe,Je,et,tt,nt,rt,it,st,ot=!0,at=[1,1,1,1],lt=4294967295,ht=!0,ut=!0,ct=[0,0,0,1],ft=4278190080,pt=!0,mt=1,gt=!1,dt=!1,vt=!0,yt=0,At=c.CORNER,xt=c.CENTER,bt=0,wt=0,Et=0,St=c.NORMAL_MODE_AUTO,Pt=60,Ct=1e3/Pt,Mt=c.ARROW,Tt=ge.style.cursor,_t=c.POLYGON,Rt=[],Lt=0,It=20,Dt=!1,Ot=-3355444,Nt=20,Ft=255,kt=255,Bt=255,$t=255,Gt=0,Vt=0,zt=c.RGB,Ut=null,Ht=null,Xt=Date.now(),Yt=Xt,Kt=0,jt={attributes:{},locations:{}},Wt={width:0,height:0},Zt=c.IMAGE,qt=!1,Qt=c.LEFT,Jt=c.BASELINE,en=c.MODEL,tn="Arial",nn=12,rn=9,sn=2,on=14,an=PFont.get(tn,nn),ln=null,hn=!1,un=1e3,cn=[],fn=null,pn=[c.SHIFT,c.CONTROL,c.ALT,c.CAPSLK,c.PGUP,c.PGDN,c.END,c.HOME,c.LEFT,c.UP,c.RIGHT,c.DOWN,c.NUMLK,c.INSERT,c.F1,c.F2,c.F3,c.F4,c.F5,c.F6,c.F7,c.F8,c.F9,c.F10,c.F11,c.F12,c.META],mn=0,gn=0,dn=0,vn=[],yn=[],An=[],xn=new g(c.SINCOS_LENGTH),bn=new g(c.SINCOS_LENGTH),wn=!1,En=!1,Sn=60*(Math.PI/180),Pn=ye.width/2,Cn=ye.height/2,Mn=Cn/Math.tan(Sn/2),Tn=Mn/10,_n=10*Mn,Rn=ye.width/ye.height,Ln=[],In=[],Dn=0,On=!1,Nn=!1,Fn=!0,kn=c.CORNER,Bn=[],$n=new g([.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5]),Gn=new g([.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5]),Vn=new g([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),zn=new g([0,0,0,0,1,0,1,1,0,1,0,0]),Un=new g([0,0,1,0,0,1,0,0,1,0,0,1]),Hn="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}",Xn="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}",Yn="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}",Kn="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}",jn=/Windows/.test(a.userAgent),Wn="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+(jn?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}",Zn="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}",qn=function(e,t,n){var r=e.createShader(e.VERTEX_SHADER)
if(e.shaderSource(r,t),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r)
var i=e.createShader(e.FRAGMENT_SHADER)
if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw e.getShaderInfoLog(i)
var s=e.createProgram()
if(e.attachShader(s,r),e.attachShader(s,i),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS))throw"Error linking shaders."
return s},Qn=function(e,t,n,r,i){return{x:e,y:t,w:n,h:r}},Jn=Qn,er=function(e,t,n,r,i){return{x:e,y:t,w:i?n:n-e,h:i?r:r-t}},tr=function(e,t,n,r,i){return{x:e-n/2,y:t-r/2,w:n,h:r}},nr=function(){},rr=function(){},ir=function(){},sr=function(){}
rr.prototype=new nr,rr.prototype.constructor=rr,ir.prototype=new nr,ir.prototype.constructor=ir,sr.prototype=new nr,sr.prototype.constructor=sr,nr.prototype.a3DOnlyFunction=u,ye.shape=function(e,t,n,r,i){arguments.length>=1&&null!==arguments[0]&&e.isVisible()&&(ye.pushMatrix(),kn===c.CENTER?5===arguments.length?(ye.translate(t-r/2,n-i/2),ye.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length?ye.translate(t-e.getWidth()/2,-e.getHeight()/2):ye.translate(-e.getWidth()/2,-e.getHeight()/2):kn===c.CORNER?5===arguments.length?(ye.translate(t,n),ye.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length&&ye.translate(t,n):kn===c.CORNERS&&(5===arguments.length?(r-=t,i-=n,ye.translate(t,n),ye.scale(r/e.getWidth(),i/e.getHeight())):3===arguments.length&&ye.translate(t,n)),e.draw(ye),(1===arguments.length&&kn===c.CENTER||arguments.length>1)&&ye.popMatrix())},ye.shapeMode=function(e){kn=e},ye.loadShape=function(e){return 1===arguments.length&&e.indexOf(".svg")>-1?new PShapeSVG(null,e):null},ye.loadXML=function(e){return new XML(ye,e)},ye.parseXML=function(e){var t=new XML
return t.parse(e),t}
var or=function(e){for(var t=0,n=0;n<e.length;n++)t=0!==n?Math.max(t,Math.abs(e[n])):Math.abs(e[n])
var r=(t+"").indexOf(".")
return 0===r?r=1:r===-1&&(r=(t+"").length),r},ar=ye.PMatrix2D=function(){0===arguments.length?this.reset():1===arguments.length&&arguments[0]instanceof ar?this.set(arguments[0].array()):6===arguments.length&&this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}
ar.prototype={set:function(){if(6===arguments.length){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else 1===arguments.length&&arguments[0]instanceof ar?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new ar
return e.set(this.elements),e},reset:function(){this.set([1,0,0,0,1,0])},array:function(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2],this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
return e instanceof PVector?(n=e.x,r=e.y,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],t||(t=[])),t instanceof Array?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2],t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]):t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2],t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5],t.z=0),t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},shearX:function(e){this.apply(1,0,1,Math.tan(e),0,0)},shearY:function(e){this.apply(1,0,1,0,Math.tan(e),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(Math.abs(e)>c.MIN_INT){var t=this.elements[0],n=this.elements[1],r=this.elements[2],i=this.elements[3],s=this.elements[4],o=this.elements[5]
return this.elements[0]=s/e,this.elements[3]=-i/e,this.elements[1]=-n/e,this.elements[4]=t/e,this.elements[2]=(n*o-s*r)/e,this.elements[5]=(i*r-t*o)/e,!0}return!1},scale:function(e,t){e&&!t&&(t=e),e&&t&&(this.elements[0]*=e,this.elements[1]*=t,this.elements[3]*=e,this.elements[4]*=t)},invScale:function(e,t){e&&!t&&(t=e),this.scale(1/e,1/t)},apply:function(){var e
1===arguments.length&&arguments[0]instanceof ar?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,this.elements[2],0,0,this.elements[5]],n=0,r=0;r<2;r++)for(var i=0;i<3;i++,n++)t[n]+=this.elements[3*r+0]*e[i+0]+this.elements[3*r+1]*e[i+3]
this.elements=t.slice()},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof ar?e=arguments[0].array():6===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1],t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4],t[0]=this.elements[0]*e[0]+this.elements[3]*e[1],t[3]=this.elements[0]*e[3]+this.elements[3]*e[4],t[1]=this.elements[1]*e[0]+this.elements[4]*e[1],t[4]=this.elements[1]*e[3]+this.elements[4]*e[4],this.elements=t.slice()},rotate:function(e){var t=Math.cos(e),n=Math.sin(e),r=this.elements[0],i=this.elements[1]
this.elements[0]=t*r+n*i,this.elements[1]=-n*r+t*i,r=this.elements[3],i=this.elements[4],this.elements[3]=t*r+n*i,this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-Math.PI)},print:function(){var e=or(this.elements),t=""+ye.nfs(this.elements[0],e,4)+" "+ye.nfs(this.elements[1],e,4)+" "+ye.nfs(this.elements[2],e,4)+"\n"+ye.nfs(this.elements[3],e,4)+" "+ye.nfs(this.elements[4],e,4)+" "+ye.nfs(this.elements[5],e,4)+"\n\n"
ye.println(t)}}
var lr=ye.PMatrix3D=function(){this.reset()}
lr.prototype={set:function(){16===arguments.length?this.elements=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof lr?this.elements=arguments[0].array():1===arguments.length&&arguments[0]instanceof Array&&(this.elements=arguments[0].slice())},get:function(){var e=new lr
return e.set(this.elements),e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function(){return this.elements.slice()},translate:function(e,n,r){r===t&&(r=0),this.elements[3]+=e*this.elements[0]+n*this.elements[1]+r*this.elements[2],this.elements[7]+=e*this.elements[4]+n*this.elements[5]+r*this.elements[6],this.elements[11]+=e*this.elements[8]+n*this.elements[9]+r*this.elements[10],this.elements[15]+=e*this.elements[12]+n*this.elements[13]+r*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1],this.elements[1]=e,e=this.elements[8],this.elements[8]=this.elements[2],this.elements[2]=e,e=this.elements[6],this.elements[6]=this.elements[9],this.elements[9]=e,e=this.elements[3],this.elements[3]=this.elements[12],this.elements[12]=e,e=this.elements[7],this.elements[7]=this.elements[13],this.elements[13]=e,e=this.elements[11],this.elements[11]=this.elements[14],this.elements[14]=e},mult:function(e,t){var n,r,i,s
return e instanceof PVector?(n=e.x,r=e.y,i=e.z,s=1,t||(t=new PVector)):e instanceof Array&&(n=e[0],r=e[1],i=e[2],s=e[3]||1,(!t||3!==t.length&&4!==t.length)&&(t=[0,0,0])),t instanceof Array&&(3===t.length?(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]):4===t.length&&(t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*s,t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*s,t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*s,t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*s)),t instanceof PVector&&(t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3],t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7],t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]),t},preApply:function(){var e
1===arguments.length&&arguments[0]instanceof lr?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,r=0;r<4;r++)for(var i=0;i<4;i++,n++)t[n]+=this.elements[i+0]*e[4*r+0]+this.elements[i+4]*e[4*r+1]+this.elements[i+8]*e[4*r+2]+this.elements[i+12]*e[4*r+3]
this.elements=t.slice()},apply:function(){var e
1===arguments.length&&arguments[0]instanceof lr?e=arguments[0].array():16===arguments.length?e=Array.prototype.slice.call(arguments):1===arguments.length&&arguments[0]instanceof Array&&(e=arguments[0])
for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0,r=0;r<4;r++)for(var i=0;i<4;i++,n++)t[n]+=this.elements[4*r+0]*e[i+0]+this.elements[4*r+1]*e[i+4]+this.elements[4*r+2]*e[i+8]+this.elements[4*r+3]*e[i+12]
this.elements=t.slice()},rotate:function(e,t,n,r){if(arguments.length<4)this.rotateZ(e)
else{var i=new PVector(t,n,r),s=i.mag()
if(0===s)return
1!=s&&(i.normalize(),t=i.x,n=i.y,r=i.z)
var o=ye.cos(e),a=ye.sin(e),l=1-o
this.apply(l*t*t+o,l*t*n-a*r,l*t*r+a*n,0,l*t*n+a*r,l*n*n+o,l*n*r-a*t,0,l*t*r-a*n,l*n*r+a*t,l*r*r+o,0,0,0,0,1)}},invApply:function(){it===t&&(it=new lr)
var e=arguments
return it.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),!!it.invert()&&(this.preApply(it),!0)},rotateX:function(e){var t=ye.cos(e),n=ye.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=ye.cos(e),n=ye.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=Math.cos(e),n=Math.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,t,n){!e||t||n?e&&t&&!n&&(n=1):t=n=e,e&&t&&n&&(this.elements[0]*=e,this.elements[1]*=t,this.elements[2]*=n,this.elements[4]*=e,this.elements[5]*=t,this.elements[6]*=n,this.elements[8]*=e,this.elements[9]*=t,this.elements[10]*=n,this.elements[12]*=e,this.elements[13]*=t,this.elements[14]*=n)},skewX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(e){var t=Math.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(e){var t=Math.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){return n?r?this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r:this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]:this.elements[0]*e+this.elements[1]*t+this.elements[3]},multY:function(e,t,n,r){return n?r?this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r:this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]:this.elements[4]*e+this.elements[5]*t+this.elements[7]},multZ:function(e,t,n,r){return r?this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r:this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]},multW:function(e,t,n,r){return r?this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r:this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4],t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4],n=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4],r=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5],i=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5],s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6],o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12],a=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12],l=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12],h=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13],u=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13],c=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14],f=e*c-t*u+n*h+r*l-i*a+s*o
if(Math.abs(f)<=1e-9)return!1
var p=[]
p[0]=+this.elements[5]*c-this.elements[6]*u+this.elements[7]*h,p[4]=-this.elements[4]*c+this.elements[6]*l-this.elements[7]*a,p[8]=+this.elements[4]*u-this.elements[5]*l+this.elements[7]*o,p[12]=-this.elements[4]*h+this.elements[5]*a-this.elements[6]*o,p[1]=-this.elements[1]*c+this.elements[2]*u-this.elements[3]*h,p[5]=+this.elements[0]*c-this.elements[2]*l+this.elements[3]*a,p[9]=-this.elements[0]*u+this.elements[1]*l-this.elements[3]*o,p[13]=+this.elements[0]*h-this.elements[1]*a+this.elements[2]*o,p[2]=+this.elements[13]*s-this.elements[14]*i+this.elements[15]*r,p[6]=-this.elements[12]*s+this.elements[14]*n-this.elements[15]*t,p[10]=+this.elements[12]*i-this.elements[13]*n+this.elements[15]*e,p[14]=-this.elements[12]*r+this.elements[13]*t-this.elements[14]*e,p[3]=-this.elements[9]*s+this.elements[10]*i-this.elements[11]*r,p[7]=+this.elements[8]*s-this.elements[10]*n+this.elements[11]*t,p[11]=-this.elements[8]*i+this.elements[9]*n-this.elements[11]*e,p[15]=+this.elements[8]*r-this.elements[9]*t+this.elements[10]*e
var m=1/f
return p[0]*=m,p[1]*=m,p[2]*=m,p[3]*=m,p[4]*=m,p[5]*=m,p[6]*=m,p[7]*=m,p[8]*=m,p[9]*=m,p[10]*=m,p[11]*=m,p[12]*=m,p[13]*=m,p[14]*=m,p[15]*=m,this.elements=p.slice(),!0},toString:function(){for(var e="",t=0;t<15;t++)e+=this.elements[t]+", "
return e+=this.elements[15]},print:function(){var e=or(this.elements),t=""+ye.nfs(this.elements[0],e,4)+" "+ye.nfs(this.elements[1],e,4)+" "+ye.nfs(this.elements[2],e,4)+" "+ye.nfs(this.elements[3],e,4)+"\n"+ye.nfs(this.elements[4],e,4)+" "+ye.nfs(this.elements[5],e,4)+" "+ye.nfs(this.elements[6],e,4)+" "+ye.nfs(this.elements[7],e,4)+"\n"+ye.nfs(this.elements[8],e,4)+" "+ye.nfs(this.elements[9],e,4)+" "+ye.nfs(this.elements[10],e,4)+" "+ye.nfs(this.elements[11],e,4)+"\n"+ye.nfs(this.elements[12],e,4)+" "+ye.nfs(this.elements[13],e,4)+" "+ye.nfs(this.elements[14],e,4)+" "+ye.nfs(this.elements[15],e,4)+"\n\n"
ye.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=Math.cos(-e),n=Math.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}}
var hr=ye.PMatrixStack=function(){this.matrixStack=[]}
hr.prototype.load=function(){var e=be.$newPMatrix()
1===arguments.length?e.set(arguments[0]):e.set(arguments),this.matrixStack.push(e)},rr.prototype.$newPMatrix=function(){return new ar},ir.prototype.$newPMatrix=function(){return new lr},hr.prototype.push=function(){this.matrixStack.push(this.peek())},hr.prototype.pop=function(){return this.matrixStack.pop()},hr.prototype.peek=function(){var e=be.$newPMatrix()
return e.set(this.matrixStack[this.matrixStack.length-1]),e},hr.prototype.mult=function(e){this.matrixStack[this.matrixStack.length-1].apply(e)},ye.split=function(e,t){return e.split(t)},ye.splitTokens=function(e,n){if(n===t)return e.split(/\s+/g)
var r,i,s=n.split(/()/g),o="",a=e.length,l=[]
for(r=0;r<a;r++)i=e[r],s.indexOf(i)>-1?(""!==o&&l.push(o),o=""):o+=i
return""!==o&&l.push(o),l},ye.append=function(e,t){return e[e.length]=t,e},ye.concat=function(e,t){return e.concat(t)},ye.sort=function(e,t){var n=[]
if(e.length>0){for(var r=t>0?t:e.length,i=0;i<r;i++)n.push(e[i])
if("string"==typeof e[0]?n.sort():n.sort(function(e,t){return e-t}),t>0)for(var s=n.length;s<e.length;s++)n.push(e[s])}return n},ye.splice=function(e,t,n){if(0===t.length)return e
if(t instanceof Array)for(var r=0,i=n;r<t.length;i++,r++)e.splice(i,0,t[r])
else e.splice(n,0,t)
return e},ye.subset=function(e,n,r){var i=r!==t?n+r:e.length
return e.slice(n,i)},ye.join=function(e,t){return e.join(t)},ye.shorten=function(e){for(var t=[],n=e.length,r=0;r<n;r++)t[r]=e[r]
return t.pop(),t},ye.expand=function(e,t){var n=e.slice(0),r=t||2*e.length
return n.length=r,n},ye.arrayCopy=function(){var e,n,r,i=0,s=0
2===arguments.length?(e=arguments[0],n=arguments[1],r=e.length):3===arguments.length?(e=arguments[0],n=arguments[1],r=arguments[2]):5===arguments.length&&(e=arguments[0],i=arguments[1],n=arguments[2],s=arguments[3],r=arguments[4])
for(var o=i,a=s;o<r+i;o++,a++){if(n[a]===t)throw"array index out of bounds exception"
n[a]=e[o]}},ye.reverse=function(e){return e.reverse()},ye.mix=function(e,t,n){return e+((t-e)*n>>8)},ye.peg=function(e){return e<0?0:e>255?255:e},ye.modes=function(){function e(e,t,n,r,i,o,a,l,h,u,c){var f=s(((4278190080&e)>>>24)+t,255)<<24,p=n+((h-n)*t>>8)
p=(p<0?0:p>255?255:p)<<16
var m=r+((u-r)*t>>8)
m=(m<0?0:m>255?255:m)<<8
var g=i+((c-i)*t>>8)
return g=g<0?0:g>255?255:g,f|p|m|g}var t=c.ALPHA_MASK,n=c.RED_MASK,r=c.GREEN_MASK,i=c.BLUE_MASK,s=Math.min,o=Math.max
return{replace:function(e,t){return t},blend:function(e,o){var a=(o&t)>>>24,l=e&n,h=e&r,u=e&i,c=o&n,f=o&r,p=o&i
return s(((e&t)>>>24)+a,255)<<24|l+((c-l)*a>>8)&n|h+((f-h)*a>>8)&r|u+((p-u)*a>>8)&i},add:function(e,o){var a=(o&t)>>>24
return s(((e&t)>>>24)+a,255)<<24|s((e&n)+((o&n)>>8)*a,n)&n|s((e&r)+((o&r)>>8)*a,r)&r|s((e&i)+((o&i)*a>>8),i)},subtract:function(e,a){var l=(a&t)>>>24
return s(((e&t)>>>24)+l,255)<<24|o((e&n)-((a&n)>>8)*l,r)&n|o((e&r)-((a&r)>>8)*l,i)&r|o((e&i)-((a&i)*l>>8),0)},lightest:function(e,a){var l=(a&t)>>>24
return s(((e&t)>>>24)+l,255)<<24|o(e&n,((a&n)>>8)*l)&n|o(e&r,((a&r)>>8)*l)&r|o(e&i,(a&i)*l>>8)},darkest:function(e,o){var a=(o&t)>>>24,l=e&n,h=e&r,u=e&i,c=s(e&n,((o&n)>>8)*a),f=s(e&r,((o&r)>>8)*a),p=s(e&i,(o&i)*a>>8)
return s(((e&t)>>>24)+a,255)<<24|l+((c-l)*a>>8)&n|h+((f-h)*a>>8)&r|u+((p-u)*a>>8)&i},difference:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=l>c?l-c:c-l,g=h>f?h-f:f-h,d=u>p?u-p:p-u
return e(s,a,l,h,u,c,f,p,m,g,d)},exclusion:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=l+c-(l*c>>7),g=h+f-(h*f>>7),d=u+p-(u*p>>7)
return e(s,a,l,h,u,c,f,p,m,g,d)},multiply:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=l*c>>8,g=h*f>>8,d=u*p>>8
return e(s,a,l,h,u,c,f,p,m,g,d)},screen:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=255-((255-l)*(255-c)>>8),g=255-((255-h)*(255-f)>>8),d=255-((255-u)*(255-p)>>8)
return e(s,a,l,h,u,c,f,p,m,g,d)},hard_light:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=c<128?l*c>>7:255-((255-l)*(255-c)>>7),g=f<128?h*f>>7:255-((255-h)*(255-f)>>7),d=p<128?u*p>>7:255-((255-u)*(255-p)>>7)
return e(s,a,l,h,u,c,f,p,m,g,d)},soft_light:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=(l*c>>7)+(l*l>>8)-(l*l*c>>15),g=(h*f>>7)+(h*h>>8)-(h*h*f>>15),d=(u*p>>7)+(u*u>>8)-(u*u*p>>15)
return e(s,a,l,h,u,c,f,p,m,g,d)},overlay:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=l<128?l*c>>7:255-((255-l)*(255-c)>>7),g=h<128?h*f>>7:255-((255-h)*(255-f)>>7),d=u<128?u*p>>7:255-((255-u)*(255-p)>>7)
return e(s,a,l,h,u,c,f,p,m,g,d)},dodge:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=255
255!==c&&(m=(l<<8)/(255-c),m=m<0?0:m>255?255:m)
var g=255
255!==f&&(g=(h<<8)/(255-f),g=g<0?0:g>255?255:g)
var d=255
return 255!==p&&(d=(u<<8)/(255-p),d=d<0?0:d>255?255:d),e(s,a,l,h,u,c,f,p,m,g,d)},burn:function(s,o){var a=(o&t)>>>24,l=(s&n)>>16,h=(s&r)>>8,u=s&i,c=(o&n)>>16,f=(o&r)>>8,p=o&i,m=0
0!==c&&(m=(255-l<<8)/c,m=255-(m<0?0:m>255?255:m))
var g=0
0!==f&&(g=(255-h<<8)/f,g=255-(g<0?0:g>255?255:g))
var d=0
return 0!==p&&(d=(255-u<<8)/p,d=255-(d<0?0:d>255?255:d)),e(s,a,l,h,u,c,f,p,m,g,d)}}}(),ye.color=function(e,n,r,i){return e!==t&&n!==t&&r!==t&&i!==t?R(e,n,r,i):e!==t&&n!==t&&r!==t?R(e,n,r,Ft):e!==t&&n!==t?L(e,n):"number"==typeof e?I(e):R(kt,Bt,$t,Ft)},ye.color.toString=function(e){return"rgba("+((e&c.RED_MASK)>>>16)+","+((e&c.GREEN_MASK)>>>8)+","+(e&c.BLUE_MASK)+","+((e&c.ALPHA_MASK)>>>24)/255+")"},ye.color.toInt=function(e,t,n,r){return r<<24&c.ALPHA_MASK|e<<16&c.RED_MASK|t<<8&c.GREEN_MASK|n&c.BLUE_MASK},ye.color.toArray=function(e){return[(e&c.RED_MASK)>>>16,(e&c.GREEN_MASK)>>>8,e&c.BLUE_MASK,(e&c.ALPHA_MASK)>>>24]},ye.color.toGLArray=function(e){return[((e&c.RED_MASK)>>>16)/255,((e&c.GREEN_MASK)>>>8)/255,(e&c.BLUE_MASK)/255,((e&c.ALPHA_MASK)>>>24)/255]},ye.color.toRGB=function(e,t,n){e=e>kt?kt:e,t=t>Bt?Bt:t,n=n>$t?$t:n,e=e/kt*360,t=t/Bt*100,n=n/$t*100
var r=Math.round(n/100*255)
if(0===t)return[r,r,r]
var i=e%360,s=i%60,o=Math.round(n*(100-t)/1e4*255),a=Math.round(n*(6e3-t*s)/6e5*255),l=Math.round(n*(6e3-t*(60-s))/6e5*255)
switch(Math.floor(i/60)){case 0:return[r,l,o]
case 1:return[a,r,o]
case 2:return[o,r,l]
case 3:return[o,a,r]
case 4:return[l,o,r]
case 5:return[r,o,a]}},ye.brightness=function(e){return D(e)[2]},ye.saturation=function(e){return D(e)[1]},ye.hue=function(e){return D(e)[0]},ye.red=function(e){return((e&c.RED_MASK)>>>16)/255*kt},ye.green=function(e){return((e&c.GREEN_MASK)>>>8)/255*Bt},ye.blue=function(e){return(e&c.BLUE_MASK)/255*$t},ye.alpha=function(e){return((e&c.ALPHA_MASK)>>>24)/255*Ft},ye.lerpColor=function(e,t,n){var r,i,s,o,a,l,h,u,f,p,m,g,d,v,y,A,x,b=ye.color(e),w=ye.color(t)
return zt===c.HSB?(d=D(b),u=((b&c.ALPHA_MASK)>>>24)/Ft,v=D(w),g=((w&c.ALPHA_MASK)>>>24)/Ft,A=ye.lerp(d[0],v[0],n),x=ye.lerp(d[1],v[1],n),s=ye.lerp(d[2],v[2],n),y=ye.color.toRGB(A,x,s),o=ye.lerp(u,g,n)*Ft+.5|0,o<<24&c.ALPHA_MASK|y[0]<<16&c.RED_MASK|y[1]<<8&c.GREEN_MASK|y[2]&c.BLUE_MASK):(a=(b&c.RED_MASK)>>>16,l=(b&c.GREEN_MASK)>>>8,h=b&c.BLUE_MASK,u=((b&c.ALPHA_MASK)>>>24)/Ft,f=(w&c.RED_MASK)>>>16,p=(w&c.GREEN_MASK)>>>8,m=w&c.BLUE_MASK,g=((w&c.ALPHA_MASK)>>>24)/Ft,r=ye.lerp(a,f,n)+.5|0,i=ye.lerp(l,p,n)+.5|0,s=ye.lerp(h,m,n)+.5|0,o=ye.lerp(u,g,n)*Ft+.5|0,o<<24&c.ALPHA_MASK|r<<16&c.RED_MASK|i<<8&c.GREEN_MASK|s&c.BLUE_MASK)},ye.colorMode=function(){zt=arguments[0],arguments.length>1&&(kt=arguments[1],Bt=arguments[2]||arguments[1],$t=arguments[3]||arguments[1],Ft=arguments[4]||arguments[1])},ye.blendColor=function(e,t,n){return n===c.REPLACE?ye.modes.replace(e,t):n===c.BLEND?ye.modes.blend(e,t):n===c.ADD?ye.modes.add(e,t):n===c.SUBTRACT?ye.modes.subtract(e,t):n===c.LIGHTEST?ye.modes.lightest(e,t):n===c.DARKEST?ye.modes.darkest(e,t):n===c.DIFFERENCE?ye.modes.difference(e,t):n===c.EXCLUSION?ye.modes.exclusion(e,t):n===c.MULTIPLY?ye.modes.multiply(e,t):n===c.SCREEN?ye.modes.screen(e,t):n===c.HARD_LIGHT?ye.modes.hard_light(e,t):n===c.SOFT_LIGHT?ye.modes.soft_light(e,t):n===c.OVERLAY?ye.modes.overlay(e,t):n===c.DODGE?ye.modes.dodge(e,t):n===c.BURN?ye.modes.burn(e,t):void 0},ye.printMatrix=function(){et.print()},rr.prototype.translate=function(e,t){et.translate(e,t),tt.invTranslate(e,t),Ae.translate(e,t)},ir.prototype.translate=function(e,t,n){et.translate(e,t,n),tt.invTranslate(e,t,n)},rr.prototype.scale=function(e,t){et.scale(e,t),tt.invScale(e,t),Ae.scale(e,t||e)},ir.prototype.scale=function(e,t,n){et.scale(e,t,n),tt.invScale(e,t,n)},rr.prototype.transform=function(e){var t=e.array()
Ae.transform(t[0],t[3],t[1],t[4],t[2],t[5])},ir.prototype.transformm=function(e){throw"p.transform is currently not supported in 3D mode"},rr.prototype.pushMatrix=function(){nt.load(et),rt.load(tt),O()},ir.prototype.pushMatrix=function(){nt.load(et),rt.load(tt)},rr.prototype.popMatrix=function(){et.set(nt.pop()),tt.set(rt.pop()),N()},ir.prototype.popMatrix=function(){et.set(nt.pop()),tt.set(rt.pop())},rr.prototype.resetMatrix=function(){et.reset(),tt.reset(),Ae.setTransform(1,0,0,1,0,0)},ir.prototype.resetMatrix=function(){et.reset(),tt.reset()},nr.prototype.applyMatrix=function(){var e=arguments
et.apply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),tt.invApply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])},rr.prototype.applyMatrix=function(){for(var e=arguments,t=e.length;t<16;t++)e[t]=0
e[10]=e[15]=1,nr.prototype.applyMatrix.apply(this,e)},ye.rotateX=function(e){et.rotateX(e),tt.invRotateX(e)},rr.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."},ir.prototype.rotateZ=function(e){et.rotateZ(e),tt.invRotateZ(e)},ye.rotateY=function(e){et.rotateY(e),tt.invRotateY(e)},rr.prototype.rotate=function(e){et.rotateZ(e),tt.invRotateZ(e),Ae.rotate(e)},ir.prototype.rotate=function(e){arguments.length<4?ye.rotateZ(e):(et.rotate(e,arguments[1],arguments[2],arguments[3]),tt.rotate(-e,arguments[1],arguments[2],arguments[3]))},rr.prototype.shearX=function(e){et.shearX(e),Ae.transform(1,0,e,1,0,0)},ir.prototype.shearX=function(e){et.shearX(e)},rr.prototype.shearY=function(e){et.shearY(e),Ae.transform(1,e,0,1,0,0)},ir.prototype.shearY=function(e){et.shearY(e)},ye.pushStyle=function(){O(),ye.pushMatrix()
var e={doFill:ot,currentFillColor:lt,doStroke:ut,currentStrokeColor:ft,curTint:Ut,curRectMode:At,curColorMode:zt,colorModeX:kt,colorModeZ:$t,colorModeY:Bt,colorModeA:Ft,curTextFont:an,horizontalTextAlignment:Qt,verticalTextAlignment:Jt,textMode:en,curFontName:tn,curTextSize:nn,curTextAscent:rn,curTextDescent:sn,curTextLeading:on}
Bn.push(e)},ye.popStyle=function(){var e=Bn.pop()
if(!e)throw"Too many popStyle() without enough pushStyle()"
N(),ye.popMatrix(),ot=e.doFill,lt=e.currentFillColor,ut=e.doStroke,ft=e.currentStrokeColor,Ut=e.curTint,At=e.curRectMode,zt=e.curColorMode,kt=e.colorModeX,$t=e.colorModeZ,Bt=e.colorModeY,Ft=e.colorModeA,an=e.curTextFont,tn=e.curFontName,nn=e.curTextSize,Qt=e.horizontalTextAlignment,Jt=e.verticalTextAlignment,en=e.textMode,rn=e.curTextAscent,sn=e.curTextDescent,on=e.curTextLeading},ye.year=function(){return(new Date).getFullYear()},ye.month=function(){return(new Date).getMonth()+1},ye.day=function(){return(new Date).getDate()},ye.hour=function(){return(new Date).getHours()},ye.minute=function(){return(new Date).getMinutes()},ye.second=function(){return(new Date).getSeconds()},ye.millis=function(){return Date.now()-Xt},rr.prototype.redraw=function(){F(),Ae.lineWidth=mt
var e=ye.pmouseX,t=ye.pmouseY
ye.pmouseX=Gt,ye.pmouseY=Vt,O(),ye.draw(),N(),Gt=ye.mouseX,Vt=ye.mouseY,ye.pmouseX=e,ye.pmouseY=t},ir.prototype.redraw=function(){F()
var e=ye.pmouseX,t=ye.pmouseY
ye.pmouseX=Gt,ye.pmouseY=Vt,Ae.clear(Ae.DEPTH_BUFFER_BIT),jt={attributes:{},locations:{}},ye.noLights(),ye.lightFalloff(1,0,0),ye.shininess(1),ye.ambient(255,255,255),ye.specular(0,0,0),ye.emissive(0,0,0),ye.camera(),ye.draw(),Gt=ye.mouseX,Vt=ye.mouseY,ye.pmouseX=e,ye.pmouseY=t},ye.noLoop=function(){vt=!1,gt=!1,clearInterval(yt),xe.onPause()},ye.loop=function(){gt||(Yt=Date.now(),Kt=0,yt=l.setInterval(function(){try{xe.onFrameStart(),ye.redraw(),xe.onFrameEnd()}catch(e){throw l.clearInterval(yt),e}},Ct),vt=!0,gt=!0,xe.onLoop())},ye.frameRate=function(e){Pt=e,Ct=1e3/Pt,vt&&(ye.noLoop(),ye.loop())},ye.exit=function(){l.clearInterval(yt),w(ye.externals.canvas.id),delete ge.onmousedown
for(var e in E.lib)E.lib.hasOwnProperty(e)&&E.lib[e].hasOwnProperty("detach")&&E.lib[e].detach(ye)
for(var t=ve.length;t--;)x(ve[t])
xe.onExit()},ye.cursor=function(){if(arguments.length>1||1===arguments.length&&arguments[0]instanceof ye.PImage){var e,t,n=arguments[0]
if(arguments.length>=3){if(e=arguments[1],t=arguments[2],e<0||t<0||t>=n.height||e>=n.width)throw"x and y must be non-negative and less than the dimensions of the image"}else e=n.width>>>1,t=n.height>>>1
var r=n.toDataURL(),i='url("'+r+'") '+e+" "+t+", default"
Mt=ge.style.cursor=i}else if(1===arguments.length){var s=arguments[0]
Mt=ge.style.cursor=s}else Mt=ge.style.cursor=Tt},ye.noCursor=function(){Mt=ge.style.cursor=c.NOCURSOR},ye.link=function(e,n){n!==t?l.open(e,n):l.location=e},ye.beginDraw=u,ye.endDraw=u,rr.prototype.toImageData=function(e,n,r,i){return e=e!==t?e:0,n=n!==t?n:0,r=r!==t?r:ye.width,i=i!==t?i:ye.height,Ae.getImageData(e,n,r,i)},ir.prototype.toImageData=function(e,n,r,i){e=e!==t?e:0,n=n!==t?n:0,r=r!==t?r:ye.width,i=i!==t?i:ye.height
var s=h.createElement("canvas"),o=s.getContext("2d"),a=o.createImageData(r,i),l=new y(r*i*4)
Ae.readPixels(e,n,r,i,Ae.RGBA,Ae.UNSIGNED_BYTE,l)
for(var u=0,c=l.length,f=a.data;u<c;u++)f[u]=l[(i-1-Math.floor(u/4/r))*r*4+u%(4*r)]
return a},ye.status=function(e){l.status=e},ye.binary=function(e,t){var n
if(t>0)n=t
else if(e instanceof Char)n=16,e|=0
else for(n=32;n>1&&!(e>>>n-1&1);)n--
for(var r="";n>0;)r+=e>>>--n&1?"1":"0"
return r},ye.unbinary=function(e){for(var t=e.length-1,n=1,r=0;t>=0;){var i=e[t--]
if("0"!==i&&"1"!==i)throw"the value passed into unbinary was not an 8 bit binary number"
"1"===i&&(r+=n),n<<=1}return r}
var ur=function(e,n){n=n===t||null===n?n=8:n,e<0&&(e=4294967295+e+1)
for(var r=Number(e).toString(16).toUpperCase();r.length<n;)r="0"+r
return r.length>=n&&(r=r.substring(r.length-n,r.length)),r}
ye.hex=function(e,t){return 1===arguments.length&&(t=e instanceof Char?4:8),ur(e,t)},ye.unhex=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(k(e[n]))
return t}return k(e)},ye.loadStrings=function(e){if(f[e])return f[e].split("\n")
var t=o(e)
return"string"!=typeof t||""===t?[]:(t=t.replace(/(\r\n?)/g,"\n").replace(/\n$/,""),t.split("\n"))},ye.saveStrings=function(e,t){f[e]=t.join("\n")},ye.loadBytes=function(e){for(var t=o(e),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r))
return n},ye.matchAll=function(e,t){for(var n,r=[],i=new RegExp(t,"g");null!==(n=i.exec(e));)r.push(n),0===n[0].length&&++i.lastIndex
return r.length>0?r:null},ye.match=function(e,t){return e.match(t)}
ye.println=function(){E.logger.println.apply(E.logger,arguments)},ye.print=function(){E.logger.print.apply(E.logger,arguments)},ye.str=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(e[n].toString()+"")
return t}return e.toString()+""},ye.parseBoolean=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(B(e[n]))
return t}return B(e)},ye.parseByte=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(0-(128&e[n])|127&e[n])
return t}return 0-(128&e)|127&e},ye.parseChar=function(e){if("number"==typeof e)return new Char(String.fromCharCode(65535&e))
if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push(new Char(String.fromCharCode(65535&e[n])))
return t}throw"char() may receive only one argument of type int, byte, int[], or byte[]."},ye.parseFloat=function(e){if(e instanceof Array){for(var t=[],n=0;n<e.length;n++)t.push($(e[n]))
return t}return $(e)},ye.parseInt=function(e,t){if(e instanceof Array){for(var n=[],r=0;r<e.length;r++)"string"!=typeof e[r]||/^\s*[+\-]?\d+\s*$/.test(e[r])?n.push(G(e[r],t)):n.push(0)
return n}return G(e,t)},ye.__int_cast=function(e){return 0|e},ye.__instanceof=function(e,t){if("function"!=typeof t)throw"Function is expected as type argument for instanceof operator"
if("string"==typeof e)return t===Object||t===String
if(e instanceof t)return!0
if("object"!=typeof e||null===e)return!1
var n=e.constructor
if(t.$isInterface){for(var r=[];n;)n.$interfaces&&(r=r.concat(n.$interfaces)),n=n.$base
for(;r.length>0;){var i=r.shift()
if(i===t)return!0
i.$interfaces&&(r=r.concat(i.$interfaces))}return!1}for(;n.hasOwnProperty("$base");)if(n=n.$base,n===t)return!0
return!1},nr.prototype.size=function(e,t,n){ut&&ye.stroke(0),ot&&ye.fill(255)
var r={fillStyle:Ae.fillStyle,strokeStyle:Ae.strokeStyle,lineCap:Ae.lineCap,lineJoin:Ae.lineJoin}
ge.style.length>0&&(ge.style.removeProperty("width"),ge.style.removeProperty("height")),ge.width=ye.width=e||100,ge.height=ye.height=t||100
for(var i in r)r.hasOwnProperty(i)&&(Ae[i]=r[i])
ye.textFont(an),ye.background(),un=Math.max(1e3,e*t*.05),ye.externals.context=Ae
for(var s=0;s<c.SINCOS_LENGTH;s++)xn[s]=ye.sin(s*(c.PI/180)*.5),bn[s]=ye.cos(s*(c.PI/180)*.5)},rr.prototype.size=function(e,n,r){Ae===t&&(Ae=ge.getContext("2d"),nt=new hr,rt=new hr,et=new ar,tt=new ar),nr.prototype.size.apply(this,arguments)},ir.prototype.size=function(){var e=!1
return function(t,n,r){function i(e){for(var t,n=["experimental-webgl","webgl","webkit-3d"],r=0,i=n.length;r<i&&!(t=e.getContext(n[r],{antialias:!1,preserveDrawingBuffer:!0}));r++);return t}if(e)throw"Multiple calls to size() for 3D renders are not allowed."
e=!0
try{ge.width=ye.width=t||100,ge.height=ye.height=n||100,Ae=i(ge),He=Ae.createTexture(),Xe=Ae.createTexture()}catch(e){E.debug(e)}if(!Ae)throw"WebGL context is not supported on this browser."
Ae.viewport(0,0,ge.width,ge.height),Ae.enable(Ae.DEPTH_TEST),Ae.enable(Ae.BLEND),Ae.blendFunc(Ae.SRC_ALPHA,Ae.ONE_MINUS_SRC_ALPHA),Re=qn(Ae,Yn,Kn),Le=qn(Ae,Hn,Xn),ye.strokeWeight(1),_e=qn(Ae,Wn,Zn),Ae.useProgram(_e),C("usingTexture3d",_e,"usingTexture",qt),ye.lightFalloff(1,0,0),ye.shininess(1),ye.ambient(255,255,255),ye.specular(0,0,0),ye.emissive(0,0,0),Ie=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ie),Ae.bufferData(Ae.ARRAY_BUFFER,$n,Ae.STATIC_DRAW),De=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,De),Ae.bufferData(Ae.ARRAY_BUFFER,Vn,Ae.STATIC_DRAW),Oe=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Oe),Ae.bufferData(Ae.ARRAY_BUFFER,Gn,Ae.STATIC_DRAW),Ne=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ne),Ae.bufferData(Ae.ARRAY_BUFFER,zn,Ae.STATIC_DRAW),Fe=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Fe),Ae.bufferData(Ae.ARRAY_BUFFER,Un,Ae.STATIC_DRAW),ke=Ae.createBuffer(),Be=Ae.createBuffer(),$e=Ae.createBuffer(),Ge=Ae.createBuffer(),Ve=Ae.createBuffer(),Ue=Ae.createBuffer(),ze=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,ze),Ae.bufferData(Ae.ARRAY_BUFFER,new g([0,0,0]),Ae.STATIC_DRAW),Ye=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ye),Ae.bufferData(Ae.ARRAY_BUFFER,new g([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),Ae.STATIC_DRAW),Ke=Ae.createBuffer(),Ae.bindBuffer(Ae.ARRAY_BUFFER,Ke),Ae.bufferData(Ae.ARRAY_BUFFER,new g([0,0,1,0,1,1,0,1]),Ae.STATIC_DRAW),je=Ae.createBuffer(),Ae.bindBuffer(Ae.ELEMENT_ARRAY_BUFFER,je),Ae.bufferData(Ae.ELEMENT_ARRAY_BUFFER,new v([0,1,2,2,3,0]),Ae.STATIC_DRAW),Qe=new lr,Je=new lr,et=new lr,tt=new lr,st=new lr,ye.camera(),ye.perspective(),nt=new hr,rt=new hr,Ee=new lr,Se=new lr,Pe=new lr,Ce=new lr,Me=new lr,Te=new lr,Te.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0),nr.prototype.size.apply(this,arguments)}}(),rr.prototype.ambientLight=nr.prototype.a3DOnlyFunction,ir.prototype.ambientLight=function(e,t,n,r,i,s){if(mn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
var o=new PVector(r,i,s),a=new lr
a.scale(1,-1,1),a.apply(et.array()),a.mult(o,o)
var l=R(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
Ae.useProgram(_e),P("uLights.color.3d."+mn,_e,"uLights"+mn+".color",h),P("uLights.position.3d."+mn,_e,"uLights"+mn+".position",o.array()),C("uLights.type.3d."+mn,_e,"uLights"+mn+".type",0),C("uLightCount3d",_e,"uLightCount",++mn)},rr.prototype.directionalLight=nr.prototype.a3DOnlyFunction,ir.prototype.directionalLight=function(e,t,n,r,i,s){if(mn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
Ae.useProgram(_e)
var o=new lr
o.scale(1,-1,1),o.apply(et.array()),o=o.array()
var a=[o[0]*r+o[4]*i+o[8]*s,o[1]*r+o[5]*i+o[9]*s,o[2]*r+o[6]*i+o[10]*s],l=R(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
P("uLights.color.3d."+mn,_e,"uLights"+mn+".color",h),P("uLights.position.3d."+mn,_e,"uLights"+mn+".position",a),C("uLights.type.3d."+mn,_e,"uLights"+mn+".type",1),C("uLightCount3d",_e,"uLightCount",++mn)},rr.prototype.lightFalloff=nr.prototype.a3DOnlyFunction,ir.prototype.lightFalloff=function(e,t,n){Ae.useProgram(_e),P("uFalloff3d",_e,"uFalloff",[e,t,n])},rr.prototype.lightSpecular=nr.prototype.a3DOnlyFunction,ir.prototype.lightSpecular=function(e,t,n){var r=R(e,t,n,0),i=[((r&c.RED_MASK)>>>16)/255,((r&c.GREEN_MASK)>>>8)/255,(r&c.BLUE_MASK)/255]
Ae.useProgram(_e),P("uSpecular3d",_e,"uSpecular",i)},ye.lights=function(){ye.ambientLight(128,128,128),ye.directionalLight(128,128,128,0,0,-1),ye.lightFalloff(1,0,0),ye.lightSpecular(0,0,0)},rr.prototype.pointLight=nr.prototype.a3DOnlyFunction,ir.prototype.pointLight=function(e,t,n,r,i,s){if(mn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
var o=new PVector(r,i,s),a=new lr
a.scale(1,-1,1),a.apply(et.array()),a.mult(o,o)
var l=R(e,t,n,0),h=[((l&c.RED_MASK)>>>16)/255,((l&c.GREEN_MASK)>>>8)/255,(l&c.BLUE_MASK)/255]
Ae.useProgram(_e),P("uLights.color.3d."+mn,_e,"uLights"+mn+".color",h),P("uLights.position.3d."+mn,_e,"uLights"+mn+".position",o.array()),C("uLights.type.3d."+mn,_e,"uLights"+mn+".type",2),C("uLightCount3d",_e,"uLightCount",++mn)},rr.prototype.noLights=nr.prototype.a3DOnlyFunction,ir.prototype.noLights=function(){mn=0,Ae.useProgram(_e),C("uLightCount3d",_e,"uLightCount",mn)},rr.prototype.spotLight=nr.prototype.a3DOnlyFunction,ir.prototype.spotLight=function(e,t,n,r,i,s,o,a,l,h,u){if(mn===c.MAX_LIGHTS)throw"can only create "+c.MAX_LIGHTS+" lights"
Ae.useProgram(_e)
var f=new PVector(r,i,s),p=new lr
p.scale(1,-1,1),p.apply(et.array()),p.mult(f,f),p=p.array()
var m=[p[0]*o+p[4]*a+p[8]*l,p[1]*o+p[5]*a+p[9]*l,p[2]*o+p[6]*a+p[10]*l],g=R(e,t,n,0),d=[((g&c.RED_MASK)>>>16)/255,((g&c.GREEN_MASK)>>>8)/255,(g&c.BLUE_MASK)/255]
P("uLights.color.3d."+mn,_e,"uLights"+mn+".color",d),P("uLights.position.3d."+mn,_e,"uLights"+mn+".position",f.array()),P("uLights.direction.3d."+mn,_e,"uLights"+mn+".direction",m),P("uLights.concentration.3d."+mn,_e,"uLights"+mn+".concentration",u),P("uLights.angle.3d."+mn,_e,"uLights"+mn+".angle",h),C("uLights.type.3d."+mn,_e,"uLights"+mn+".type",3),C("uLightCount3d",_e,"uLightCount",++mn)},rr.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"},ir.prototype.beginCamera=function(){if(wn)throw"You cannot call beginCamera() again before calling endCamera()"
wn=!0,et=Je,tt=Qe},rr.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"},ir.prototype.endCamera=function(){if(!wn)throw"You cannot call endCamera() before calling beginCamera()"
et.set(Qe),tt.set(Je),wn=!1},ye.camera=function(e,n,r,i,s,o,a,l,h){e===t&&(Pn=ye.width/2,Cn=ye.height/2,Mn=Cn/Math.tan(Sn/2),e=Pn,n=Cn,r=Mn,i=Pn,s=Cn,o=0,a=0,l=1,h=0)
var u=new PVector(e-i,n-s,r-o),c=new PVector(a,l,h)
u.normalize()
var f=PVector.cross(c,u)
c=PVector.cross(u,f),f.normalize(),c.normalize()
var p=f.x,m=f.y,g=f.z,d=c.x,v=c.y,y=c.z,A=u.x,x=u.y,b=u.z
Qe.set(p,m,g,0,d,v,y,0,A,x,b,0,0,0,0,1),Qe.translate(-e,-n,-r),Je.reset(),Je.invApply(p,m,g,0,d,v,y,0,A,x,b,0,0,0,0,1),Je.translate(e,n,r),et.set(Qe),tt.set(Je)},ye.perspective=function(e,t,n,r){0===arguments.length&&(Cn=ge.height/2,Mn=Cn/Math.tan(Sn/2),Tn=Mn/10,_n=10*Mn,Rn=ye.width/ye.height,e=Sn,t=Rn,n=Tn,r=_n)
var i,s,o,a
i=n*Math.tan(e/2),s=-i,o=i*t,a=s*t,ye.frustum(a,o,s,i,n,r)},rr.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"},ir.prototype.frustum=function(e,t,n,r,i,s){En=!0,st=new lr,st.set(2*i/(t-e),0,(t+e)/(t-e),0,0,2*i/(r-n),(r+n)/(r-n),0,0,0,-(s+i)/(s-i),-(2*s*i)/(s-i),0,0,-1,0)
var o=new lr
o.set(st),o.transpose(),Ae.useProgram(Re),M("projection2d",Re,"uProjection",!1,o.array()),Ae.useProgram(_e),M("projection3d",_e,"uProjection",!1,o.array()),Ae.useProgram(Le),M("uProjectionUS",Le,"uProjection",!1,o.array())},ye.ortho=function(e,t,n,r,i,s){0===arguments.length&&(e=0,t=ye.width,n=0,r=ye.height,i=-10,s=10)
var o=2/(t-e),a=2/(r-n),l=-2/(s-i),h=-(t+e)/(t-e),u=-(r+n)/(r-n),c=-(s+i)/(s-i)
st=new lr,st.set(o,0,0,h,0,a,0,u,0,0,l,c,0,0,0,1)
var f=new lr
f.set(st),f.transpose(),Ae.useProgram(Re),M("projection2d",Re,"uProjection",!1,f.array()),Ae.useProgram(_e),M("projection3d",_e,"uProjection",!1,f.array()),Ae.useProgram(Le),M("uProjectionUS",Le,"uProjection",!1,f.array()),En=!1},ye.printProjection=function(){st.print()},ye.printCamera=function(){Qe.print()},rr.prototype.box=nr.prototype.a3DOnlyFunction,ir.prototype.box=function(e,t,n){t&&n||(t=n=e)
var r=new lr
r.scale(e,t,n)
var i=new lr
if(i.scale(1,-1,1),i.apply(et.array()),i.transpose(),ot){if(Ae.useProgram(_e),M("model3d",_e,"uModel",!1,r.array()),M("view3d",_e,"uView",!1,i.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),P("color3d",_e,"uColor",at),mn>0){var s=new lr
s.set(i)
var o=new lr
o.set(r),s.mult(o)
var a=new lr
a.set(s),a.invert(),a.transpose(),M("uNormalTransform3d",_e,"uNormalTransform",!1,a.array()),T("aNormal3d",_e,"aNormal",3,De)}else _("aNormal3d",_e,"aNormal")
T("aVertex3d",_e,"aVertex",3,Ie),_("aColor3d",_e,"aColor"),_("aTexture3d",_e,"aTexture"),Ae.drawArrays(Ae.TRIANGLES,0,$n.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}mt>0&&ut&&(Ae.useProgram(Re),M("uModel2d",Re,"uModel",!1,r.array()),M("uView2d",Re,"uView",!1,i.array()),P("uColor2d",Re,"uColor",ct),C("uIsDrawingText2d",Re,"uIsDrawingText",!1),T("vertex2d",Re,"aVertex",3,Oe),_("aTextureCoord2d",Re,"aTextureCoord"),Ae.drawArrays(Ae.LINES,0,Gn.length/3))}
var cr=function(){var e
for(qe=[],e=0;e<dn;e++)qe.push(0),qe.push(-1),qe.push(0),qe.push(vn[e]),qe.push(yn[e]),qe.push(An[e])
qe.push(0),qe.push(-1),qe.push(0),qe.push(vn[0]),qe.push(yn[0]),qe.push(An[0])
var t,n,r,i=0
for(e=2;e<gn;e++){t=n=i,i+=dn,r=i
for(var s=0;s<dn;s++)qe.push(vn[t]),qe.push(yn[t]),qe.push(An[t++]),qe.push(vn[r]),qe.push(yn[r]),qe.push(An[r++])
t=n,r=i,qe.push(vn[t]),qe.push(yn[t]),qe.push(An[t]),qe.push(vn[r]),qe.push(yn[r]),qe.push(An[r])}for(e=0;e<dn;e++)r=i+e,qe.push(vn[r]),qe.push(yn[r]),qe.push(An[r]),qe.push(0),qe.push(1),qe.push(0)
qe.push(vn[i]),qe.push(yn[i]),qe.push(An[i]),qe.push(0),qe.push(1),qe.push(0),Ae.bindBuffer(Ae.ARRAY_BUFFER,ke),Ae.bufferData(Ae.ARRAY_BUFFER,new g(qe),Ae.STATIC_DRAW)}
ye.sphereDetail=function(e,t){var n
if(1===arguments.length&&(e=t=arguments[0]),e<3&&(e=3),t<2&&(t=2),e!==dn||t!==gn){var r=c.SINCOS_LENGTH/e,i=new g(e),s=new g(e)
for(n=0;n<e;n++)i[n]=bn[n*r%c.SINCOS_LENGTH|0],s[n]=xn[n*r%c.SINCOS_LENGTH|0]
var o=e*(t-1)+2,a=0
vn=new g(o),yn=new g(o),An=new g(o)
var l=.5*c.SINCOS_LENGTH/t,h=l
for(n=1;n<t;n++){for(var u=xn[h%c.SINCOS_LENGTH|0],f=-bn[h%c.SINCOS_LENGTH|0],p=0;p<e;p++)vn[a]=i[p]*u,yn[a]=f,An[a++]=s[p]*u
h+=l}dn=e,gn=t,cr()}},rr.prototype.sphere=nr.prototype.a3DOnlyFunction,ir.prototype.sphere=function(){var e=arguments[0];(dn<3||gn<2)&&ye.sphereDetail(30)
var t=new lr
t.scale(e,e,e)
var n=new lr
if(n.scale(1,-1,1),n.apply(et.array()),n.transpose(),ot){if(mn>0){var r=new lr
r.set(n)
var i=new lr
i.set(t),r.mult(i)
var s=new lr
s.set(r),s.invert(),s.transpose(),M("uNormalTransform3d",_e,"uNormalTransform",!1,s.array()),T("aNormal3d",_e,"aNormal",3,ke)}else _("aNormal3d",_e,"aNormal")
Ae.useProgram(_e),_("aTexture3d",_e,"aTexture"),M("uModel3d",_e,"uModel",!1,t.array()),M("uView3d",_e,"uView",!1,n.array()),T("aVertex3d",_e,"aVertex",3,ke),_("aColor3d",_e,"aColor"),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),P("uColor3d",_e,"uColor",at),Ae.drawArrays(Ae.TRIANGLE_STRIP,0,qe.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}mt>0&&ut&&(Ae.useProgram(Re),M("uModel2d",Re,"uModel",!1,t.array()),M("uView2d",Re,"uView",!1,n.array()),T("aVertex2d",Re,"aVertex",3,ke),_("aTextureCoord2d",Re,"aTextureCoord"),P("uColor2d",Re,"uColor",ct),C("uIsDrawingText",Re,"uIsDrawingText",!1),Ae.drawArrays(Ae.LINE_STRIP,0,qe.length/3))},ye.modelX=function(e,t,n){var r=et.array(),i=Je.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[0]*s+i[1]*o+i[2]*a+i[3]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},ye.modelY=function(e,t,n){var r=et.array(),i=Je.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[4]*s+i[5]*o+i[6]*a+i[7]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},ye.modelZ=function(e,t,n){var r=et.array(),i=Je.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[8]*s+i[9]*o+i[10]*a+i[11]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u?h/u:h},rr.prototype.ambient=nr.prototype.a3DOnlyFunction,ir.prototype.ambient=function(e,t,n){Ae.useProgram(_e),C("uUsingMat3d",_e,"uUsingMat",!0)
var r=ye.color(e,t,n)
P("uMaterialAmbient3d",_e,"uMaterialAmbient",ye.color.toGLArray(r).slice(0,3))},rr.prototype.emissive=nr.prototype.a3DOnlyFunction,ir.prototype.emissive=function(e,t,n){Ae.useProgram(_e),C("uUsingMat3d",_e,"uUsingMat",!0)
var r=ye.color(e,t,n)
P("uMaterialEmissive3d",_e,"uMaterialEmissive",ye.color.toGLArray(r).slice(0,3))},rr.prototype.shininess=nr.prototype.a3DOnlyFunction,ir.prototype.shininess=function(e){Ae.useProgram(_e),C("uUsingMat3d",_e,"uUsingMat",!0),P("uShininess3d",_e,"uShininess",e)},rr.prototype.specular=nr.prototype.a3DOnlyFunction,ir.prototype.specular=function(e,t,n){Ae.useProgram(_e),C("uUsingMat3d",_e,"uUsingMat",!0)
var r=ye.color(e,t,n)
P("uMaterialSpecular3d",_e,"uMaterialSpecular",ye.color.toGLArray(r).slice(0,3))},ye.screenX=function(e,t,n){var r=et.array()
if(16===r.length){var i=r[0]*e+r[1]*t+r[2]*n+r[3],s=r[4]*e+r[5]*t+r[6]*n+r[7],o=r[8]*e+r[9]*t+r[10]*n+r[11],a=r[12]*e+r[13]*t+r[14]*n+r[15],l=st.array(),h=l[0]*i+l[1]*s+l[2]*o+l[3]*a,u=l[12]*i+l[13]*s+l[14]*o+l[15]*a
return 0!==u&&(h/=u),ye.width*(1+h)/2}return et.multX(e,t)},ye.screenY=function(e,t,n){var r=et.array()
if(16===r.length){var i=r[0]*e+r[1]*t+r[2]*n+r[3],s=r[4]*e+r[5]*t+r[6]*n+r[7],o=r[8]*e+r[9]*t+r[10]*n+r[11],a=r[12]*e+r[13]*t+r[14]*n+r[15],l=st.array(),h=l[4]*i+l[5]*s+l[6]*o+l[7]*a,u=l[12]*i+l[13]*s+l[14]*o+l[15]*a
return 0!==u&&(h/=u),ye.height*(1+h)/2}return et.multY(e,t)},ye.screenZ=function(e,t,n){var r=et.array()
if(16!==r.length)return 0
var i=st.array(),s=r[0]*e+r[1]*t+r[2]*n+r[3],o=r[4]*e+r[5]*t+r[6]*n+r[7],a=r[8]*e+r[9]*t+r[10]*n+r[11],l=r[12]*e+r[13]*t+r[14]*n+r[15],h=i[8]*s+i[9]*o+i[10]*a+i[11]*l,u=i[12]*s+i[13]*o+i[14]*a+i[15]*l
return 0!==u&&(h/=u),(h+1)/2},nr.prototype.fill=function(){var e=ye.color.apply(this,arguments)
e===lt&&ot||(ot=!0,lt=e)},rr.prototype.fill=function(){nr.prototype.fill.apply(this,arguments),ht=!0},ir.prototype.fill=function(){nr.prototype.fill.apply(this,arguments),at=ye.color.toGLArray(lt)},ye.noFill=function(){ot=!1},nr.prototype.stroke=function(){var e=ye.color.apply(this,arguments)
e===ft&&ut||(ut=!0,ft=e)},rr.prototype.stroke=function(){nr.prototype.stroke.apply(this,arguments),pt=!0},ir.prototype.stroke=function(){nr.prototype.stroke.apply(this,arguments),ct=ye.color.toGLArray(ft)},ye.noStroke=function(){ut=!1},nr.prototype.strokeWeight=function(e){mt=e},rr.prototype.strokeWeight=function(e){nr.prototype.strokeWeight.apply(this,arguments),Ae.lineWidth=e},ir.prototype.strokeWeight=function(e){nr.prototype.strokeWeight.apply(this,arguments),Ae.useProgram(Re),P("pointSize2d",Re,"uPointSize",e),Ae.useProgram(Le),P("pointSizeUnlitShape",Le,"uPointSize",e),Ae.lineWidth(e)},ye.strokeCap=function(e){be.$ensureContext().lineCap=e},ye.strokeJoin=function(e){be.$ensureContext().lineJoin=e},rr.prototype.smooth=function(){dt=!0
var e=ge.style
e.setProperty("image-rendering","optimizeQuality","important"),e.setProperty("-ms-interpolation-mode","bicubic","important"),Ae.hasOwnProperty("mozImageSmoothingEnabled")&&(Ae.mozImageSmoothingEnabled=!0)},ir.prototype.smooth=function(){dt=!0},rr.prototype.noSmooth=function(){dt=!1
var e=ge.style
e.setProperty("image-rendering","optimizeSpeed","important"),e.setProperty("image-rendering","-moz-crisp-edges","important"),e.setProperty("image-rendering","-webkit-optimize-contrast","important"),e.setProperty("image-rendering","optimize-contrast","important"),e.setProperty("-ms-interpolation-mode","nearest-neighbor","important"),Ae.hasOwnProperty("mozImageSmoothingEnabled")&&(Ae.mozImageSmoothingEnabled=!1)},ir.prototype.noSmooth=function(){dt=!1},rr.prototype.point=function(e,t){ut&&(dt||(e=Math.round(e),t=Math.round(t)),Ae.fillStyle=ye.color.toString(ft),ht=!0,mt>1?(Ae.beginPath(),Ae.arc(e,t,mt/2,0,c.TWO_PI,!1),Ae.fill()):Ae.fillRect(e,t,1,1))},ir.prototype.point=function(e,t,n){var r=new lr
r.translate(e,t,n||0),r.transpose()
var i=new lr
i.scale(1,-1,1),i.apply(et.array()),i.transpose(),Ae.useProgram(Re),M("uModel2d",Re,"uModel",!1,r.array()),M("uView2d",Re,"uView",!1,i.array()),mt>0&&ut&&(P("uColor2d",Re,"uColor",ct),C("uIsDrawingText2d",Re,"uIsDrawingText",!1),C("uSmooth2d",Re,"uSmooth",dt),T("aVertex2d",Re,"aVertex",3,ze),_("aTextureCoord2d",Re,"aTextureCoord"),Ae.drawArrays(Ae.POINTS,0,1))},ye.beginShape=function(e){_t=e,Rt=[],Ln=[]},rr.prototype.vertex=function(e,t,n){var r=[]
Fn&&(Fn=!1),r.isVert=!0,r[0]=e,r[1]=t,r[2]=0,r[3]=0,r[4]=0,r[5]=lt,r[6]=ft,Ln.push(r),n&&(Ln[Ln.length-1].moveTo=n)},ir.prototype.vertex=function(e,n,r,i,s){var o=[]
Fn&&(Fn=!1),o.isVert=!0,s===t&&qt&&(s=i,i=r,r=0),i!==t&&s!==t&&(Zt===c.IMAGE&&(i/=Wt.width,s/=Wt.height),i=i>1?1:i,i=i<0?0:i,s=s>1?1:s,s=s<0?0:s),o[0]=e,o[1]=n,o[2]=r||0,o[3]=i||0,o[4]=s||0,o[5]=at[0],o[6]=at[1],o[7]=at[2],o[8]=at[3],o[9]=ct[0],o[10]=ct[1],o[11]=ct[2],o[12]=ct[3],o[13]=bt,o[14]=wt,o[15]=Et,Ln.push(o)}
var fr=function(e,t){var n=new lr
n.scale(1,-1,1),n.apply(et.array()),n.transpose(),Ae.useProgram(Le),M("uViewUS",Le,"uView",!1,n.array()),C("uSmoothUS",Le,"uSmooth",dt),T("aVertexUS",Le,"aVertex",3,ze),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),T("aColorUS",Le,"aColor",4,Ge),Ae.bufferData(Ae.ARRAY_BUFFER,new g(t),Ae.STREAM_DRAW),Ae.drawArrays(Ae.POINTS,0,e.length/3)},pr=function(e,t,n){var r
r="LINES"===t?Ae.LINES:"LINE_LOOP"===t?Ae.LINE_LOOP:Ae.LINE_STRIP
var i=new lr
i.scale(1,-1,1),i.apply(et.array()),i.transpose(),Ae.useProgram(Le),M("uViewUS",Le,"uView",!1,i.array()),T("aVertexUS",Le,"aVertex",3,Be),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),T("aColorUS",Le,"aColor",4,Ve),Ae.bufferData(Ae.ARRAY_BUFFER,new g(n),Ae.STREAM_DRAW),Ae.drawArrays(r,0,e.length/3)},mr=function(e,t,n,r){var i
i="TRIANGLES"===t?Ae.TRIANGLES:"TRIANGLE_FAN"===t?Ae.TRIANGLE_FAN:Ae.TRIANGLE_STRIP
var s=new lr
s.scale(1,-1,1),s.apply(et.array()),s.transpose(),Ae.useProgram(_e),M("model3d",_e,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),M("view3d",_e,"uView",!1,s.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),P("color3d",_e,"uColor",[-1,0,0,0]),T("vertex3d",_e,"aVertex",3,$e),Ae.bufferData(Ae.ARRAY_BUFFER,new g(e),Ae.STREAM_DRAW),qt&&null!==Ut&&Ht(n),T("aColor3d",_e,"aColor",4,Ge),Ae.bufferData(Ae.ARRAY_BUFFER,new g(n),Ae.STREAM_DRAW),_("aNormal3d",_e,"aNormal"),qt&&(C("uUsingTexture3d",_e,"uUsingTexture",qt),T("aTexture3d",_e,"aTexture",2,Ue),Ae.bufferData(Ae.ARRAY_BUFFER,new g(r),Ae.STREAM_DRAW)),Ae.drawArrays(i,0,e.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}
rr.prototype.endShape=function(e){if(0!==Ln.length){var n=e===c.CLOSE
n&&Ln.push(Ln[0])
var r,i=[],s=[],o=[],a=[]
Fn=!0
var l,h,u=Ln.length
for(l=0;l<u;l++)for(r=Ln[l],h=0;h<3;h++)i.push(r[h])
for(l=0;l<u;l++)for(r=Ln[l],h=5;h<9;h++)s.push(r[h])
for(l=0;l<u;l++)for(r=Ln[l],h=9;h<13;h++)o.push(r[h])
for(l=0;l<u;l++)r=Ln[l],a.push(r[3]),a.push(r[4])
if(!On||_t!==c.POLYGON&&_t!==t)if(!Nn||_t!==c.POLYGON&&_t!==t)if(_t===c.POINTS)for(l=0;l<u;l++)r=Ln[l],ut&&ye.stroke(r[6]),ye.point(r[0],r[1])
else if(_t===c.LINES)for(l=0;l+1<u;l+=2)r=Ln[l],ut&&ye.stroke(Ln[l+1][6]),ye.line(r[0],r[1],Ln[l+1][0],Ln[l+1][1])
else if(_t===c.TRIANGLES)for(l=0;l+2<u;l+=3)r=Ln[l],Ae.beginPath(),Ae.moveTo(r[0],r[1]),Ae.lineTo(Ln[l+1][0],Ln[l+1][1]),Ae.lineTo(Ln[l+2][0],Ln[l+2][1]),Ae.lineTo(r[0],r[1]),ot&&(ye.fill(Ln[l+2][5]),V()),ut&&(ye.stroke(Ln[l+2][6]),z()),Ae.closePath()
else if(_t===c.TRIANGLE_STRIP)for(l=0;l+1<u;l++)r=Ln[l],Ae.beginPath(),Ae.moveTo(Ln[l+1][0],Ln[l+1][1]),Ae.lineTo(r[0],r[1]),ut&&ye.stroke(Ln[l+1][6]),ot&&ye.fill(Ln[l+1][5]),l+2<u&&(Ae.lineTo(Ln[l+2][0],Ln[l+2][1]),ut&&ye.stroke(Ln[l+2][6]),ot&&ye.fill(Ln[l+2][5])),U()
else if(_t===c.TRIANGLE_FAN){if(u>2)for(Ae.beginPath(),Ae.moveTo(Ln[0][0],Ln[0][1]),Ae.lineTo(Ln[1][0],Ln[1][1]),Ae.lineTo(Ln[2][0],Ln[2][1]),ot&&(ye.fill(Ln[2][5]),V()),ut&&(ye.stroke(Ln[2][6]),z()),Ae.closePath(),l=3;l<u;l++)r=Ln[l],Ae.beginPath(),Ae.moveTo(Ln[0][0],Ln[0][1]),Ae.lineTo(Ln[l-1][0],Ln[l-1][1]),Ae.lineTo(r[0],r[1]),ot&&(ye.fill(r[5]),V()),ut&&(ye.stroke(r[6]),z()),Ae.closePath()}else if(_t===c.QUADS)for(l=0;l+3<u;l+=4){for(r=Ln[l],Ae.beginPath(),Ae.moveTo(r[0],r[1]),h=1;h<4;h++)Ae.lineTo(Ln[l+h][0],Ln[l+h][1])
Ae.lineTo(r[0],r[1]),ot&&(ye.fill(Ln[l+3][5]),V()),ut&&(ye.stroke(Ln[l+3][6]),z()),Ae.closePath()}else if(_t===c.QUAD_STRIP){if(u>3)for(l=0;l+1<u;l+=2)r=Ln[l],Ae.beginPath(),l+3<u?(Ae.moveTo(Ln[l+2][0],Ln[l+2][1]),Ae.lineTo(r[0],r[1]),Ae.lineTo(Ln[l+1][0],Ln[l+1][1]),Ae.lineTo(Ln[l+3][0],Ln[l+3][1]),ot&&ye.fill(Ln[l+3][5]),ut&&ye.stroke(Ln[l+3][6])):(Ae.moveTo(r[0],r[1]),Ae.lineTo(Ln[l+1][0],Ln[l+1][1])),U()}else{for(Ae.beginPath(),Ae.moveTo(Ln[0][0],Ln[0][1]),l=1;l<u;l++)r=Ln[l],r.isVert&&(r.moveTo?Ae.moveTo(r[0],r[1]):Ae.lineTo(r[0],r[1]))
U()}else{for(Ae.beginPath(),l=0;l<u;l++)r=Ln[l],Ln[l].isVert?Ln[l].moveTo?Ae.moveTo(r[0],r[1]):Ae.lineTo(r[0],r[1]):Ae.bezierCurveTo(Ln[l][0],Ln[l][1],Ln[l][2],Ln[l][3],Ln[l][4],Ln[l][5])
U()}else if(u>3){var f=[],p=1-Lt
for(Ae.beginPath(),Ae.moveTo(Ln[1][0],Ln[1][1]),l=1;l+2<u;l++)r=Ln[l],f[0]=[r[0],r[1]],f[1]=[r[0]+(p*Ln[l+1][0]-p*Ln[l-1][0])/6,r[1]+(p*Ln[l+1][1]-p*Ln[l-1][1])/6],f[2]=[Ln[l+1][0]+(p*Ln[l][0]-p*Ln[l+2][0])/6,Ln[l+1][1]+(p*Ln[l][1]-p*Ln[l+2][1])/6],f[3]=[Ln[l+1][0],Ln[l+1][1]],Ae.bezierCurveTo(f[1][0],f[1][1],f[2][0],f[2][1],f[3][0],f[3][1])
U()}On=!1,Nn=!1,In=[],Dn=0,n&&Ln.pop()}},ir.prototype.endShape=function(e){if(0!==Ln.length){var n,r=e===c.CLOSE,i=[],s=[],o=[],a=[],l=[]
Fn=!0
var h,u,f,p=Ln.length
for(h=0;h<p;h++)for(n=Ln[h],u=0;u<3;u++)s.push(n[u])
for(h=0;h<p;h++)for(n=Ln[h],u=5;u<9;u++)o.push(n[u])
for(h=0;h<p;h++)for(n=Ln[h],u=9;u<13;u++)a.push(n[u])
for(h=0;h<p;h++)n=Ln[h],l.push(n[3]),l.push(n[4])
if(r){for(s.push(Ln[0][0]),s.push(Ln[0][1]),s.push(Ln[0][2]),h=5;h<9;h++)o.push(Ln[0][h])
for(h=9;h<13;h++)a.push(Ln[0][h])
l.push(Ln[0][3]),l.push(Ln[0][4])}if(!On||_t!==c.POLYGON&&_t!==t)if(!Nn||_t!==c.POLYGON&&_t!==t){if(_t===c.POINTS){for(h=0;h<p;h++)for(n=Ln[h],u=0;u<3;u++)i.push(n[u])
fr(i,a)}else if(_t===c.LINES){for(h=0;h<p;h++)for(n=Ln[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<p;h++)for(n=Ln[h],u=5;u<9;u++)o.push(n[u])
pr(i,"LINES",a)}else if(_t===c.TRIANGLES){if(p>2)for(h=0;h+2<p;h+=3){for(s=[],l=[],i=[],o=[],a=[],u=0;u<3;u++)for(f=0;f<3;f++)i.push(Ln[h+u][f]),s.push(Ln[h+u][f])
for(u=0;u<3;u++)for(f=3;f<5;f++)l.push(Ln[h+u][f])
for(u=0;u<3;u++)for(f=5;f<9;f++)o.push(Ln[h+u][f]),a.push(Ln[h+u][f+4])
ut&&pr(i,"LINE_LOOP",a),(ot||qt)&&mr(s,"TRIANGLES",o,l)}}else if(_t===c.TRIANGLE_STRIP){if(p>2)for(h=0;h+2<p;h++){for(i=[],s=[],a=[],o=[],l=[],u=0;u<3;u++)for(f=0;f<3;f++)i.push(Ln[h+u][f]),s.push(Ln[h+u][f])
for(u=0;u<3;u++)for(f=3;f<5;f++)l.push(Ln[h+u][f])
for(u=0;u<3;u++)for(f=5;f<9;f++)a.push(Ln[h+u][f+4]),o.push(Ln[h+u][f]);(ot||qt)&&mr(s,"TRIANGLE_STRIP",o,l),ut&&pr(i,"LINE_LOOP",a)}}else if(_t===c.TRIANGLE_FAN){if(p>2){for(h=0;h<3;h++)for(n=Ln[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<3;h++)for(n=Ln[h],u=9;u<13;u++)a.push(n[u])
for(ut&&pr(i,"LINE_LOOP",a),h=2;h+1<p;h++){for(i=[],a=[],i.push(Ln[0][0]),i.push(Ln[0][1]),i.push(Ln[0][2]),a.push(Ln[0][9]),a.push(Ln[0][10]),a.push(Ln[0][11]),a.push(Ln[0][12]),u=0;u<2;u++)for(f=0;f<3;f++)i.push(Ln[h+u][f])
for(u=0;u<2;u++)for(f=9;f<13;f++)a.push(Ln[h+u][f])
ut&&pr(i,"LINE_STRIP",a)}(ot||qt)&&mr(s,"TRIANGLE_FAN",o,l)}}else if(_t===c.QUADS)for(h=0;h+3<p;h+=4){for(i=[],u=0;u<4;u++)for(n=Ln[h+u],f=0;f<3;f++)i.push(n[f])
if(ut&&pr(i,"LINE_LOOP",a),ot){for(s=[],o=[],l=[],u=0;u<3;u++)s.push(Ln[h][u])
for(u=5;u<9;u++)o.push(Ln[h][u])
for(u=0;u<3;u++)s.push(Ln[h+1][u])
for(u=5;u<9;u++)o.push(Ln[h+1][u])
for(u=0;u<3;u++)s.push(Ln[h+3][u])
for(u=5;u<9;u++)o.push(Ln[h+3][u])
for(u=0;u<3;u++)s.push(Ln[h+2][u])
for(u=5;u<9;u++)o.push(Ln[h+2][u])
qt&&(l.push(Ln[h+0][3]),l.push(Ln[h+0][4]),l.push(Ln[h+1][3]),l.push(Ln[h+1][4]),l.push(Ln[h+3][3]),l.push(Ln[h+3][4]),l.push(Ln[h+2][3]),l.push(Ln[h+2][4])),mr(s,"TRIANGLE_STRIP",o,l)}}else if(_t===c.QUAD_STRIP){var m=[]
if(p>3){for(h=0;h<2;h++)for(n=Ln[h],u=0;u<3;u++)i.push(n[u])
for(h=0;h<2;h++)for(n=Ln[h],u=9;u<13;u++)a.push(n[u])
for(pr(i,"LINE_STRIP",a),p>4&&p%2>0&&(m=s.splice(s.length-3),Ln.pop()),h=0;h+3<p;h+=2){for(i=[],a=[],u=0;u<3;u++)i.push(Ln[h+1][u])
for(u=0;u<3;u++)i.push(Ln[h+3][u])
for(u=0;u<3;u++)i.push(Ln[h+2][u])
for(u=0;u<3;u++)i.push(Ln[h+0][u])
for(u=9;u<13;u++)a.push(Ln[h+1][u])
for(u=9;u<13;u++)a.push(Ln[h+3][u])
for(u=9;u<13;u++)a.push(Ln[h+2][u])
for(u=9;u<13;u++)a.push(Ln[h+0][u])
ut&&pr(i,"LINE_STRIP",a)}(ot||qt)&&mr(s,"TRIANGLE_LIST",o,l)}}else if(1===p){for(u=0;u<3;u++)i.push(Ln[0][u])
for(u=9;u<13;u++)a.push(Ln[0][u])
fr(i,a)}else{for(h=0;h<p;h++){for(n=Ln[h],u=0;u<3;u++)i.push(n[u])
for(u=5;u<9;u++)a.push(n[u])}ut&&r?pr(i,"LINE_LOOP",a):ut&&!r&&pr(i,"LINE_STRIP",a),(ot||qt)&&mr(s,"TRIANGLE_FAN",o,l)}qt=!1,Ae.useProgram(_e),C("usingTexture3d",_e,"uUsingTexture",qt)}else i=s,i.splice(i.length-3),a.splice(a.length-4),ut&&pr(i,null,a),ot&&mr(s,"TRIANGLES",o)
else i=s,ut&&pr(i,null,a),ot&&mr(s,null,o)
On=!1,Nn=!1,In=[],Dn=0}}
var gr=function(e,t){var n=1/e,r=n*n,i=r*n
t.set(0,0,0,1,i,r,n,0,6*i,2*r,0,0,6*i,0,0,0)},dr=function(){Pe||(Ee=new lr,Pe=new lr,Dt=!0)
var e=Lt
Ee.set((e-1)/2,(e+3)/2,(-3-e)/2,(1-e)/2,1-e,(-5-e)/2,e+2,(e-1)/2,(e-1)/2,0,(1-e)/2,0,0,1,0,0),gr(It,Pe),Me||(Se=new lr),Se.set(Ee),Se.preApply(Me),Pe.apply(Ee)}
rr.prototype.bezierVertex=function(){Nn=!0
var e=[]
if(Fn)throw"vertex() must be used at least once before calling bezierVertex()"
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
Ln.push(e),Ln[Ln.length-1].isVert=!1},ir.prototype.bezierVertex=function(){Nn=!0
if(Fn)throw"vertex() must be used at least once before calling bezierVertex()"
if(9===arguments.length){Ce===t&&(Ce=new lr)
var e=Ln.length-1
gr(Nt,Ce),Ce.apply(Te)
for(var n=Ce.array(),r=Ln[e][0],i=Ln[e][1],s=Ln[e][2],o=n[4]*r+n[5]*arguments[0]+n[6]*arguments[3]+n[7]*arguments[6],a=n[8]*r+n[9]*arguments[0]+n[10]*arguments[3]+n[11]*arguments[6],l=n[12]*r+n[13]*arguments[0]+n[14]*arguments[3]+n[15]*arguments[6],h=n[4]*i+n[5]*arguments[1]+n[6]*arguments[4]+n[7]*arguments[7],u=n[8]*i+n[9]*arguments[1]+n[10]*arguments[4]+n[11]*arguments[7],c=n[12]*i+n[13]*arguments[1]+n[14]*arguments[4]+n[15]*arguments[7],f=n[4]*s+n[5]*arguments[2]+n[6]*arguments[5]+n[7]*arguments[8],p=n[8]*s+n[9]*arguments[2]+n[10]*arguments[5]+n[11]*arguments[8],m=n[12]*s+n[13]*arguments[2]+n[14]*arguments[5]+n[15]*arguments[8],g=0;g<Nt;g++)r+=o,o+=a,a+=l,i+=h,h+=u,u+=c,s+=f,f+=p,p+=m,ye.vertex(r,i,s)
ye.vertex(arguments[6],arguments[7],arguments[8])}},ye.texture=function(e){var t=be.$ensureContext()
if(e.__texture)t.bindTexture(t.TEXTURE_2D,e.__texture)
else if("canvas"===e.localName)t.bindTexture(t.TEXTURE_2D,He),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.generateMipmap(t.TEXTURE_2D),Wt.width=e.width,Wt.height=e.height
else{var n,r=t.createTexture(),i=h.createElement("canvas"),s=i.getContext("2d")
if(e.width&e.width-1===0)i.width=e.width
else{for(n=1;n<e.width;)n*=2
i.width=n}if(e.height&e.height-1===0)i.height=e.height
else{for(n=1;n<e.height;)n*=2
i.height=n}s.drawImage(e.sourceImg,0,0,e.width,e.height,0,0,i.width,i.height),t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),e.__texture=r,Wt.width=e.width,Wt.height=e.height}qt=!0,t.useProgram(_e),C("usingTexture3d",_e,"uUsingTexture",qt)},ye.textureMode=function(e){Zt=e}
var vr=function(e,t,n,r,i,s,o,a,l,h,u,c){var f=r,p=i,m=s,g=Pe.array(),d=g[4]*e+g[5]*r+g[6]*o+g[7]*h,v=g[8]*e+g[9]*r+g[10]*o+g[11]*h,y=g[12]*e+g[13]*r+g[14]*o+g[15]*h,A=g[4]*t+g[5]*i+g[6]*a+g[7]*u,x=g[8]*t+g[9]*i+g[10]*a+g[11]*u,b=g[12]*t+g[13]*i+g[14]*a+g[15]*u,w=g[4]*n+g[5]*s+g[6]*l+g[7]*c,E=g[8]*n+g[9]*s+g[10]*l+g[11]*c,S=g[12]*n+g[13]*s+g[14]*l+g[15]*c
ye.vertex(f,p,m)
for(var P=0;P<It;P++)f+=d,d+=v,v+=y,p+=A,A+=x,x+=b,m+=w,w+=E,E+=S,ye.vertex(f,p,m)}
rr.prototype.curveVertex=function(e,t){On=!0,ye.vertex(e,t)},ir.prototype.curveVertex=function(e,t,n){On=!0,Dt||dr()
var r=[]
r[0]=e,r[1]=t,r[2]=n,In.push(r),Dn++,Dn>3&&vr(In[Dn-4][0],In[Dn-4][1],In[Dn-4][2],In[Dn-3][0],In[Dn-3][1],In[Dn-3][2],In[Dn-2][0],In[Dn-2][1],In[Dn-2][2],In[Dn-1][0],In[Dn-1][1],In[Dn-1][2])},rr.prototype.curve=function(e,t,n,r,i,s,o,a){ye.beginShape(),ye.curveVertex(e,t),ye.curveVertex(n,r),ye.curveVertex(i,s),ye.curveVertex(o,a),ye.endShape()},ir.prototype.curve=function(e,n,r,i,s,o,a,l,h,u,c,f){return f!==t?(ye.beginShape(),ye.curveVertex(e,n,r),ye.curveVertex(i,s,o),ye.curveVertex(a,l,h),ye.curveVertex(u,c,f),void ye.endShape()):(ye.beginShape(),ye.curveVertex(e,n),ye.curveVertex(r,i),ye.curveVertex(s,o),ye.curveVertex(a,l),void ye.endShape())},ye.curveTightness=function(e){Lt=e},ye.curveDetail=function(e){It=e,dr()},ye.rectMode=function(e){At=e},ye.imageMode=function(e){switch(e){case c.CORNER:Jn=Qn
break
case c.CORNERS:Jn=er
break
case c.CENTER:Jn=tr
break
default:throw"Invalid imageMode"}},ye.ellipseMode=function(e){xt=e},ye.arc=function(e,t,n,r,i,s,o){if(!(n<=0||s<i)){for(xt===c.CORNERS?(n-=e,r-=t):xt===c.RADIUS?(e-=n,t-=r,n=2*n,r=2*r):xt===c.CENTER&&(e-=n/2,t-=r/2);i<0;)i+=c.TWO_PI,s+=c.TWO_PI
s-i>c.TWO_PI&&(s=i+c.TWO_PI)
var a=n/2,l=r/2,h=e+a,u=t+l,f=1/(a+l),p=function(e,t,n,r,i){return function(s,f,p,m,g){for(p=0,m=n,g=i+r,s.beginShape(),f&&s.vertex(e-.5,t-.5);m<g;p++,m=p*r+n)s.vertex(e+Math.cos(m)*a|0,t+Math.sin(m)*l|0)
o===c.OPEN&&ot?s.vertex(h+Math.cos(n)*a,u+Math.sin(n)*l):o===c.CHORD?s.vertex(h+Math.cos(n)*a,u+Math.sin(n)*l):o===c.PIE&&(s.line(h+Math.cos(n)*a,u+Math.sin(n)*l,h,u),s.line(h,u,h+Math.cos(i)*a,u+Math.sin(i)*l)),s.endShape(f?c.CLOSE:void 0)}}(h+.5,u+.5,i,f,s)
if(ot){var m=ut
ut=!1,p(ye,!0),ut=m}if(ut){var g=ot
ot=!1,p(ye),ot=g}}},rr.prototype.line=function(e,n,r,i){if(ut){if(dt||(e=Math.round(e),r=Math.round(r),n=Math.round(n),i=Math.round(i)),e===r&&n===i)return void ye.point(e,n)
for(var s=t,o=t,a=!0,l=et.array(),h=[1,0,0,0,1,0],u=0;u<6&&a;u++)a=l[u]===h[u]
a&&(e===r?(n>i&&(s=n,n=i,i=s),i++,mt%2===1&&Ae.translate(.5,0)):n===i&&(e>r&&(s=e,e=r,r=s),r++,mt%2===1&&Ae.translate(0,.5)),1===mt&&(o=Ae.lineCap,Ae.lineCap="butt")),Ae.beginPath(),Ae.moveTo(e||0,n||0),Ae.lineTo(r||0,i||0),z(),a&&(e===r&&mt%2===1?Ae.translate(-.5,0):n===i&&mt%2===1&&Ae.translate(0,-.5),1===mt&&(Ae.lineCap=o))}},ir.prototype.line=function(e,n,r,i,s,o){if(s!==t&&o!==t||(o=0,s=i,i=r,r=0),e===i&&n===s&&r===o)return void ye.point(e,n,r)
var a=[e,n,r,i,s,o],l=new lr
l.scale(1,-1,1),l.apply(et.array()),l.transpose(),mt>0&&ut&&(Ae.useProgram(Re),M("uModel2d",Re,"uModel",!1,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),M("uView2d",Re,"uView",!1,l.array()),P("uColor2d",Re,"uColor",ct),C("uIsDrawingText",Re,"uIsDrawingText",!1),T("aVertex2d",Re,"aVertex",3,Be),_("aTextureCoord2d",Re,"aTextureCoord"),Ae.bufferData(Ae.ARRAY_BUFFER,new g(a),Ae.STREAM_DRAW),Ae.drawArrays(Ae.LINES,0,2))},rr.prototype.bezier=function(){if(8!==arguments.length)throw"You must use 8 parameters for bezier() in 2D mode"
ye.beginShape(),ye.vertex(arguments[0],arguments[1]),ye.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]),ye.endShape()},ir.prototype.bezier=function(){if(12!==arguments.length)throw"You must use 12 parameters for bezier() in 3D mode"
ye.beginShape(),ye.vertex(arguments[0],arguments[1],arguments[2]),ye.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]),ye.endShape()},ye.bezierDetail=function(e){Nt=e},ye.bezierPoint=function(e,t,n,r,i){return(1-i)*(1-i)*(1-i)*e+3*(1-i)*(1-i)*i*t+3*(1-i)*i*i*n+i*i*i*r},ye.bezierTangent=function(e,t,n,r,i){return 3*i*i*(-e+3*t-3*n+r)+6*i*(e-2*t+n)+3*(-e+t)},ye.curvePoint=function(e,t,n,r,i){return.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(-e+3*t-3*n+r)*i*i*i)},ye.curveTangent=function(e,t,n,r,i){return.5*(-e+n+2*(2*e-5*t+4*n-r)*i+3*(-e+3*t-3*n+r)*i*i)},ye.triangle=function(e,t,n,r,i,s){ye.beginShape(c.TRIANGLES),ye.vertex(e,t,0),ye.vertex(n,r,0),ye.vertex(i,s,0),ye.endShape()},ye.quad=function(e,t,n,r,i,s,o,a){ye.beginShape(c.QUADS),ye.vertex(e,t,0),ye.vertex(n,r,0),ye.vertex(i,s,0),ye.vertex(o,a,0),ye.endShape()}
var yr=function(e,n,r,i,s,o,a,l){l===t&&(o=s,a=s,l=s)
var h=r/2,u=i/2;(s>h||s>u)&&(s=Math.min(h,u)),(o>h||o>u)&&(o=Math.min(h,u)),(a>h||a>u)&&(a=Math.min(h,u)),(l>h||l>u)&&(l=Math.min(h,u)),ot&&!ut||Ae.translate(.5,.5),Ae.beginPath(),Ae.moveTo(e+s,n),Ae.lineTo(e+r-o,n),Ae.quadraticCurveTo(e+r,n,e+r,n+o),Ae.lineTo(e+r,n+i-a),Ae.quadraticCurveTo(e+r,n+i,e+r-a,n+i),Ae.lineTo(e+l,n+i),Ae.quadraticCurveTo(e,n+i,e,n+i-l),Ae.lineTo(e,n+s),Ae.quadraticCurveTo(e,n,e+s,n),ot&&!ut||Ae.translate(-.5,-.5),V(),z()}
rr.prototype.rect=function(e,n,r,i,s,o,a,l){if(r==""+r||i==""+i){if(At===c.CORNERS?(r-=e,i-=n):At===c.RADIUS?(r*=2,i*=2,e-=r/2,n-=i/2):At===c.CENTER&&(e-=r/2,n-=i/2),dt||(e=Math.round(e),n=Math.round(n),r=Math.round(r),i=Math.round(i)),s!==t)return void yr(e,n,r,i,s,o,a,l)
ut&&mt%2===1&&Ae.translate(.5,.5),Ae.beginPath(),Ae.rect(e,n,r,i),V(),z(),ut&&mt%2===1&&Ae.translate(-.5,-.5)}},ir.prototype.rect=function(e,n,r,i,s,o,a,l){if(s!==t)throw"rect() with rounded corners is not supported in 3D mode"
At===c.CORNERS?(r-=e,i-=n):At===c.RADIUS?(r*=2,i*=2,e-=r/2,n-=i/2):At===c.CENTER&&(e-=r/2,n-=i/2)
var h=new lr
h.translate(e,n,0),h.scale(r,i,1),h.transpose()
var u=new lr
if(u.scale(1,-1,1),u.apply(et.array()),u.transpose(),mt>0&&ut&&(Ae.useProgram(Re),M("uModel2d",Re,"uModel",!1,h.array()),M("uView2d",Re,"uView",!1,u.array()),P("uColor2d",Re,"uColor",ct),C("uIsDrawingText2d",Re,"uIsDrawingText",!1),T("aVertex2d",Re,"aVertex",3,Ne),_("aTextureCoord2d",Re,"aTextureCoord"),Ae.drawArrays(Ae.LINE_LOOP,0,zn.length/3)),ot){if(Ae.useProgram(_e),M("uModel3d",_e,"uModel",!1,h.array()),M("uView3d",_e,"uView",!1,u.array()),Ae.enable(Ae.POLYGON_OFFSET_FILL),Ae.polygonOffset(1,1),P("color3d",_e,"uColor",at),mn>0){var f=new lr
f.set(u)
var p=new lr
p.set(h),f.mult(p)
var m=new lr
m.set(f),m.invert(),m.transpose(),M("uNormalTransform3d",_e,"uNormalTransform",!1,m.array()),T("aNormal3d",_e,"aNormal",3,Fe)}else _("normal3d",_e,"aNormal")
T("vertex3d",_e,"aVertex",3,Ne),Ae.drawArrays(Ae.TRIANGLE_FAN,0,zn.length/3),Ae.disable(Ae.POLYGON_OFFSET_FILL)}},rr.prototype.ellipse=function(e,t,n,r){if(e=e||0,t=t||0,!(n<=0&&r<=0))if(xt===c.RADIUS?(n*=2,r*=2):xt===c.CORNERS?(n-=e,r-=t,e+=n/2,t+=r/2):xt===c.CORNER&&(e+=n/2,t+=r/2),n===r)Ae.beginPath(),Ae.arc(e,t,n/2,0,c.TWO_PI,!1),V(),z()
else{var i=n/2,s=r/2,o=.5522847498307933,a=o*i,l=o*s
ye.beginShape(),ye.vertex(e+i,t),ye.bezierVertex(e+i,t-l,e+a,t-s,e,t-s),ye.bezierVertex(e-a,t-s,e-i,t-l,e-i,t),ye.bezierVertex(e-i,t+l,e-a,t+s,e,t+s),ye.bezierVertex(e+a,t+s,e+i,t+l,e+i,t),ye.endShape()}},ir.prototype.ellipse=function(e,t,n,r){if(e=e||0,t=t||0,!(n<=0&&r<=0)){xt===c.RADIUS?(n*=2,r*=2):xt===c.CORNERS?(n-=e,r-=t,e+=n/2,t+=r/2):xt===c.CORNER&&(e+=n/2,t+=r/2)
var i=n/2,s=r/2,o=.5522847498307933,a=o*i,l=o*s
if(ye.beginShape(),ye.vertex(e+i,t),ye.bezierVertex(e+i,t-l,0,e+a,t-s,0,e,t-s,0),ye.bezierVertex(e-a,t-s,0,e-i,t-l,0,e-i,t,0),ye.bezierVertex(e-i,t+l,0,e-a,t+s,0,e,t+s,0),ye.bezierVertex(e+a,t+s,0,e+i,t+l,0,e+i,t,0),ye.endShape(),ot){var h,u,f=0,p=0
for(h=0;h<Ln.length;h++)f+=Ln[h][0],p+=Ln[h][1]
f/=Ln.length,p/=Ln.length
var m=[],g=[],d=[]
for(m[0]=f,m[1]=p,m[2]=0,m[3]=0,m[4]=0,m[5]=at[0],m[6]=at[1],m[7]=at[2],m[8]=at[3],m[9]=ct[0],m[10]=ct[1],m[11]=ct[2],m[12]=ct[3],m[13]=bt,m[14]=wt,m[15]=Et,Ln.unshift(m),h=0;h<Ln.length;h++){for(u=0;u<3;u++)g.push(Ln[h][u])
for(u=5;u<9;u++)d.push(Ln[h][u])}mr(g,"TRIANGLE_FAN",d)}}},ye.normal=function(e,t,n){if(3!==arguments.length||"number"!=typeof e||"number"!=typeof t||"number"!=typeof n)throw"normal() requires three numeric arguments."
bt=e,wt=t,Et=n,0!==_t&&(St===c.NORMAL_MODE_AUTO?St=c.NORMAL_MODE_SHAPE:St===c.NORMAL_MODE_SHAPE&&(St=c.NORMAL_MODE_VERTEX))},ye.save=function(e,n){return n!==t?l.open(n.toDataURL(),"_blank"):l.open(ye.externals.canvas.toDataURL(),"_blank")}
var Ar=0
ye.saveFrame=function(e){e===t&&(e="screen-####.png")
var n=e.replace(/#+/,function(e){for(var t=""+Ar++;t.length<e.length;)t="0"+t
return t})
ye.save(n)}
var xr=h.createElement("canvas").getContext("2d"),br=[t,t,t],wr=function(e,t,n){if(this.__isDirty=!1,e instanceof m)this.fromHTMLImageData(e)
else if(t||n){this.width=e||1,this.height=t||1
var r=this.sourceImg=h.createElement("canvas")
r.width=this.width,r.height=this.height
this.imageData=r.getContext("2d").createImageData(this.width,this.height)
if(this.format=n===c.ARGB||n===c.ALPHA?n:c.RGB,this.format===c.RGB)for(var i=3,s=this.imageData.data,o=s.length;i<o;i+=4)s[i]=255
this.__isDirty=!0,this.updatePixels()}else this.width=0,this.height=0,this.imageData=xr.createImageData(1,1),this.format=c.ARGB
this.pixels=X(this)}
wr.prototype={__isPImage:!0,updatePixels:function(){var e=this.sourceImg
e&&e instanceof p&&this.__isDirty&&e.getContext("2d").putImageData(this.imageData,0,0),this.__isDirty=!1},fromHTMLImageData:function(e){var t=H(e)
try{var n=t.context.getImageData(0,0,e.width,e.height)
this.fromImageData(n)}catch(t){e.width&&e.height&&(this.isRemote=!0,this.width=e.width,this.height=e.height)}this.sourceImg=e},get:function(e,t,n,r){return arguments.length?2===arguments.length?ye.get(e,t,this):4===arguments.length?ye.get(e,t,n,r,this):void 0:ye.get(this)},set:function(e,t,n){ye.set(e,t,n,this),this.__isDirty=!0},blend:function(e,t,n,r,i,s,o,a,l,h){9===arguments.length?ye.blend(this,e,t,n,r,i,s,o,a,l,this):10===arguments.length&&ye.blend(e,t,n,r,i,s,o,a,l,h,this),delete this.sourceImg},copy:function(e,t,n,r,i,s,o,a,l){8===arguments.length?ye.blend(this,e,t,n,r,i,s,o,a,c.REPLACE,this):9===arguments.length&&ye.blend(e,t,n,r,i,s,o,a,l,c.REPLACE,this),delete this.sourceImg},filter:function(e,t){2===arguments.length?ye.filter(e,t,this):1===arguments.length&&ye.filter(e,null,this),delete this.sourceImg},save:function(e){ye.save(e,this)},resize:function(e,t){if(this.isRemote)throw"Image is loaded remotely. Cannot resize."
if(0!==this.width||0!==this.height){0===e&&0!==t?e=Math.floor(this.width/this.height*t):0===t&&0!==e&&(t=Math.floor(this.height/this.width*e))
var n=H(this.imageData).canvas,r=H(n,e,t).context.getImageData(0,0,e,t)
this.fromImageData(r)}},mask:function(e){var t,n,r=this.toImageData()
if(e instanceof wr||e.__isPImage){if(e.width!==this.width||e.height!==this.height)throw"mask must have the same dimensions as PImage."
for(e=e.toImageData(),t=2,n=this.width*this.height*4;t<n;t+=4)r.data[t+1]=e.data[t]}else if(e instanceof Array){if(this.width*this.height!==e.length)throw"mask array must be the same length as PImage pixels array."
for(t=0,n=e.length;t<n;++t)r.data[4*t+3]=e[t]}this.fromImageData(r)},loadPixels:u,toImageData:function(){if(this.isRemote)return this.sourceImg
if(!this.__isDirty)return this.imageData
var e=H(this.sourceImg)
return e.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote)throw"Image is loaded remotely. Cannot create dataURI."
var e=H(this.imageData)
return e.canvas.toDataURL()},fromImageData:function(e){var t=e.width,n=e.height,r=h.createElement("canvas"),i=r.getContext("2d")
this.width=r.width=t,this.height=r.height=n,i.putImageData(e,0,0),this.format=c.ARGB,this.imageData=e,this.sourceImg=r}},ye.PImage=wr,ye.createImage=function(e,t,n){return new wr(e,t,n)},ye.loadImage=function(e,t,n){var r
if(xe.imageCache.images[e])return r=new wr(xe.imageCache.images[e]),r.loaded=!0,r
r=new wr
var i=h.createElement("img")
return r.sourceImg=i,i.onload=function(e,t,n){var r=e,i=t,s=n
return function(){i.fromHTMLImageData(r),i.loaded=!0,s&&s()}}(i,r,n),i.src=e,r},ye.requestImage=ye.loadImage,ye.get=function(e,t,n,r,i){return void 0!==i?W(e,t,n,r,i):void 0!==r?j(e,t,n,r):void 0!==n?K(e,t,n):void 0!==t?Y(e,t):void 0!==e?W(0,0,e.width,e.height,e):j(0,0,ye.width,ye.height)},ye.createGraphics=function(e,t,n){var r=new E
return r.size(e,t,n),r.background(0,0),r},ye.set=function(e,t,n,r){3===arguments.length?"number"==typeof n?J(e,t,n):(n instanceof wr||n.__isPImage)&&ye.image(n,e,t):4===arguments.length&&ee(e,t,n,r)},ye.imageData={},ye.pixels={getLength:function(){return ye.imageData.data.length?ye.imageData.data.length/4:0},getPixel:function(e){var t=4*e,n=ye.imageData.data
return n[t+3]<<24&4278190080|n[t+0]<<16&16711680|n[t+1]<<8&65280|255&n[t+2]},setPixel:function(e,t){var n=4*e,r=ye.imageData.data
r[n+0]=(16711680&t)>>>16,r[n+1]=(65280&t)>>>8,r[n+2]=255&t,r[n+3]=(4278190080&t)>>>24},toArray:function(){for(var e=[],t=ye.imageData.width*ye.imageData.height,n=ye.imageData.data,r=0,i=0;r<t;r++,i+=4)e.push(n[i+3]<<24&4278190080|n[i+0]<<16&16711680|n[i+1]<<8&65280|255&n[i+2])
return e},set:function(e){for(var t=0,n=e.length;t<n;t++)this.setPixel(t,e[t])}},ye.loadPixels=function(){ye.imageData=be.$ensureContext().getImageData(0,0,ye.width,ye.height)},ye.updatePixels=function(){ye.imageData&&be.$ensureContext().putImageData(ye.imageData,0,0)},ye.hint=function(e){var t=be.$ensureContext()
e===c.DISABLE_DEPTH_TEST?(t.disable(t.DEPTH_TEST),t.depthMask(!1),t.clear(t.DEPTH_BUFFER_BIT)):e===c.ENABLE_DEPTH_TEST?(t.enable(t.DEPTH_TEST),t.depthMask(!0)):e===c.ENABLE_OPENGL_2X_SMOOTH||e===c.ENABLE_OPENGL_4X_SMOOTH?dt=!0:e===c.DISABLE_OPENGL_2X_SMOOTH&&(dt=!1)}
var Er=function(e,t,n,r){var i
if(e instanceof wr||e.__isPImage){if(i=e,!i.loaded)throw"Error using image in background(): PImage not loaded."
if(i.width!==ye.width||i.height!==ye.height)throw"Background image must be the same dimensions as the canvas."}else i=ye.color(e,t,n,r)
Ot=i}
rr.prototype.background=function(e,n,r,i){e!==t&&Er(e,n,r,i),Ot instanceof wr||Ot.__isPImage?(O(),Ae.setTransform(1,0,0,1,0,0),ye.image(Ot,0,0),N()):(O(),Ae.setTransform(1,0,0,1,0,0),ye.alpha(Ot)!==Ft&&Ae.clearRect(0,0,ye.width,ye.height),Ae.fillStyle=ye.color.toString(Ot),Ae.fillRect(0,0,ye.width,ye.height),ht=!0,N())},ir.prototype.background=function(e,t,n,r){arguments.length>0&&Er(e,t,n,r)
var i=ye.color.toGLArray(Ot)
Ae.clearColor(i[0],i[1],i[2],i[3]),Ae.clear(Ae.COLOR_BUFFER_BIT|Ae.DEPTH_BUFFER_BIT)},rr.prototype.image=function(e,t,n,r,i){if(t=Math.round(t),n=Math.round(n),e.width>0){var s=(r||e.width,i||e.height,Jn(t||0,n||0,r||e.width,i||e.height,arguments.length<4)),o=!!e.sourceImg&&null===Ut
if(o){var a=e.sourceImg
e.__isDirty&&e.updatePixels(),Ae.drawImage(a,0,0,a.width,a.height,s.x,s.y,s.w,s.h)}else{var l=e.toImageData()
null!==Ut&&(Ut(l),e.__isDirty=!0),Ae.drawImage(H(l).canvas,0,0,e.width,e.height,s.x,s.y,s.w,s.h)}}},ir.prototype.image=function(e,t,n,r,i){e.width>0&&(t=Math.round(t),n=Math.round(n),r=r||e.width,i=i||e.height,ye.beginShape(ye.QUADS),ye.texture(e),ye.vertex(t,n,0,0,0),ye.vertex(t,n+i,0,0,i),ye.vertex(t+r,n+i,0,r,i),ye.vertex(t+r,n,0,r,0),ye.endShape())},ye.tint=function(e,t,n,r){var i=ye.color(e,t,n,r),s=ye.red(i)/kt,o=ye.green(i)/Bt,a=ye.blue(i)/$t,l=ye.alpha(i)/Ft
Ut=function(e){for(var t=e.data,n=4*e.width*e.height,r=0;r<n;)t[r++]*=s,t[r++]*=o,t[r++]*=a,t[r++]*=l},Ht=function(e){for(var t=0;t<e.length;)e[t++]=s,e[t++]=o,e[t++]=a,e[t++]=l}},ye.noTint=function(){Ut=null,Ht=null},ye.copy=function(e,n,r,i,s,o,a,l,h){h===t&&(h=l,l=a,a=o,o=s,s=i,i=r,r=n,n=e,e=ye),ye.blend(e,n,r,i,s,o,a,l,h,c.REPLACE)},ye.blend=function(e,n,r,i,s,o,a,l,h,u,c){if(e.isRemote)throw"Image is loaded remotely. Cannot blend image."
u===t&&(u=h,h=l,l=a,a=o,o=s,s=i,i=r,r=n,n=e,e=ye)
var f=n+i,p=r+s,m=o+l,g=a+h,d=c||ye
c!==t&&u!==t||ye.loadPixels(),e.loadPixels(),e===ye&&ye.intersect(n,r,f,p,o,a,m,g)?ye.blit_resize(ye.get(n,r,f-n,p-r),0,0,f-n-1,p-r-1,d.imageData.data,d.width,d.height,o,a,m,g,u):ye.blit_resize(e,n,r,f,p,d.imageData.data,d.width,d.height,o,a,m,g,u),c===t&&ye.updatePixels()}
var Sr=function(e){var t,n=ye.floor(3.5*e)
if(n=n<1?1:n<248?n:248,ye.shared.blurRadius!==n){ye.shared.blurRadius=n,ye.shared.blurKernelSize=1+(ye.shared.blurRadius<<1),ye.shared.blurKernel=new g(ye.shared.blurKernelSize)
var r=ye.shared.blurKernel,i=ye.shared.blurKernelSize
ye.shared.blurRadius
for(t=0;t<i;t++)r[t]=0
var s=(n-1)*(n-1)
for(t=1;t<n;t++)r[n+t]=r[n-t]=s
r[n]=n*n}},Pr=function(e,t){var n,r,i,s,o,a,l,h,u,c,f,p,m,d,v,y=t.pixels.getLength(),A=new g(y),x=new g(y),b=new g(y),w=new g(y),E=0
Sr(e)
var S=t.height,P=t.width,C=ye.shared.blurKernelSize,M=ye.shared.blurRadius,T=ye.shared.blurKernel,_=t.imageData.data
for(m=0;m<S;m++){for(p=0;p<P;p++){if(s=i=r=o=n=0,l=p-M,l<0)f=-l,l=0
else{if(l>=P)break
f=0}for(d=f;d<C&&!(l>=P);d++)v=4*(l+E),a=T[d],o+=a*_[v+3],r+=a*_[v],i+=a*_[v+1],s+=a*_[v+2],n+=a,l++
h=E+p,w[h]=o/n,A[h]=r/n,x[h]=i/n,b[h]=s/n}E+=P}for(E=0,u=-M,c=u*P,m=0;m<S;m++){for(p=0;p<P;p++){if(s=i=r=o=n=0,u<0)f=h=-u,l=p
else{if(u>=S)break
f=0,h=u,l=p+c}for(d=f;d<C&&!(h>=S);d++)a=T[d],o+=a*w[l],r+=a*A[l],i+=a*x[l],s+=a*b[l],n+=a,h++,l+=P
v=4*(p+E),_[v]=r/n,_[v+1]=i/n,_[v+2]=s/n,_[v+3]=o/n}E+=P,c+=P,u++}},Cr=function(e,t){var n,r,i,s,o,a,l,h,u,c,f,p,m,g,v,y,A,x=0,b=t.pixels.getLength(),w=new d(b)
if(e)for(;x<b;)for(n=x,r=x+t.width;x<r;)i=s=t.pixels.getPixel(x),l=x-1,a=x+1,h=x-t.width,u=x+t.width,l<n&&(l=x),a>=r&&(a=x),h<0&&(h=0),u>=b&&(u=x),p=t.pixels.getPixel(h),f=t.pixels.getPixel(l),m=t.pixels.getPixel(u),c=t.pixels.getPixel(a),o=77*(i>>16&255)+151*(i>>8&255)+28*(255&i),v=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),y=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),A=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),v<o&&(s=f,o=v),g<o&&(s=c,o=g),y<o&&(s=p,o=y),A<o&&(s=m,o=A),w[x++]=s
else for(;x<b;)for(n=x,r=x+t.width;x<r;)i=s=t.pixels.getPixel(x),l=x-1,a=x+1,h=x-t.width,u=x+t.width,l<n&&(l=x),a>=r&&(a=x),h<0&&(h=0),u>=b&&(u=x),p=t.pixels.getPixel(h),f=t.pixels.getPixel(l),m=t.pixels.getPixel(u),c=t.pixels.getPixel(a),o=77*(i>>16&255)+151*(i>>8&255)+28*(255&i),v=77*(f>>16&255)+151*(f>>8&255)+28*(255&f),g=77*(c>>16&255)+151*(c>>8&255)+28*(255&c),y=77*(p>>16&255)+151*(p>>8&255)+28*(255&p),A=77*(m>>16&255)+151*(m>>8&255)+28*(255&m),v>o&&(s=f,o=v),g>o&&(s=c,o=g),y>o&&(s=p,o=y),A>o&&(s=m,o=A),w[x++]=s
t.pixels.set(w)}
ye.filter=function(e,n,r){var i,s,o,a
if(3===arguments.length?(r.loadPixels(),i=r):(ye.loadPixels(),i=ye),n===t&&(n=null),i.isRemote)throw"Image is loaded remotely. Cannot filter image."
var l=i.pixels.getLength()
switch(e){case c.BLUR:var h=n||1
Pr(h,i)
break
case c.GRAY:if(i.format===c.ALPHA){for(a=0;a<l;a++)s=255-i.pixels.getPixel(a),i.pixels.setPixel(a,4278190080|s<<16|s<<8|s)
i.format=c.RGB}else for(a=0;a<l;a++)s=i.pixels.getPixel(a),o=77*(s>>16&255)+151*(s>>8&255)+28*(255&s)>>8,i.pixels.setPixel(a,s&c.ALPHA_MASK|o<<16|o<<8|o)
break
case c.INVERT:for(a=0;a<l;a++)i.pixels.setPixel(a,16777215^i.pixels.getPixel(a))
break
case c.POSTERIZE:if(null===n)throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"
var u=ye.floor(n)
if(u<2||u>255)throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"
var f=u-1
for(a=0;a<l;a++){var p=i.pixels.getPixel(a)>>16&255,m=i.pixels.getPixel(a)>>8&255,g=255&i.pixels.getPixel(a)
p=255*(p*u>>8)/f,m=255*(m*u>>8)/f,g=255*(g*u>>8)/f,i.pixels.setPixel(a,4278190080&i.pixels.getPixel(a)|p<<16|m<<8|g)}break
case c.OPAQUE:for(a=0;a<l;a++)i.pixels.setPixel(a,4278190080|i.pixels.getPixel(a))
i.format=c.RGB
break
case c.THRESHOLD:if(null===n&&(n=.5),n<0||n>1)throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"
var d=ye.floor(255*n)
for(a=0;a<l;a++){var v=ye.max((i.pixels.getPixel(a)&c.RED_MASK)>>16,ye.max((i.pixels.getPixel(a)&c.GREEN_MASK)>>8,i.pixels.getPixel(a)&c.BLUE_MASK))
i.pixels.setPixel(a,i.pixels.getPixel(a)&c.ALPHA_MASK|(v<d?0:16777215))}break
case c.ERODE:Cr(!0,i)
break
case c.DILATE:Cr(!1,i)}i.updatePixels()},ye.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null},ye.intersect=function(e,t,n,r,i,s,o,a){var l=n-e+1,h=r-t+1,u=o-i+1,c=a-s+1
if(i<e)u+=i-e,u>l&&(u=l)
else{var f=l+e-i
u>f&&(u=f)}if(s<t)c+=s-t,c>h&&(c=h)
else{var p=h+t-s
c>p&&(c=p)}return!(u<=0||c<=0)}
var Mr={}
if(Mr[c.BLEND]=ye.modes.blend,Mr[c.ADD]=ye.modes.add,Mr[c.SUBTRACT]=ye.modes.subtract,Mr[c.LIGHTEST]=ye.modes.lightest,Mr[c.DARKEST]=ye.modes.darkest,Mr[c.REPLACE]=ye.modes.replace,Mr[c.DIFFERENCE]=ye.modes.difference,Mr[c.EXCLUSION]=ye.modes.exclusion,Mr[c.MULTIPLY]=ye.modes.multiply,Mr[c.SCREEN]=ye.modes.screen,Mr[c.OVERLAY]=ye.modes.overlay,Mr[c.HARD_LIGHT]=ye.modes.hard_light,Mr[c.SOFT_LIGHT]=ye.modes.soft_light,Mr[c.DODGE]=ye.modes.dodge,Mr[c.BURN]=ye.modes.burn,ye.blit_resize=function(e,t,n,r,i,s,o,a,l,h,u,f,p){var m,g
t<0&&(t=0),n<0&&(n=0),r>=e.width&&(r=e.width-1),i>=e.height&&(i=e.height-1)
var d=r-t,v=i-n,y=u-l,A=f-h
if(!(y<=0||A<=0||d<=0||v<=0||l>=o||h>=a||t>=e.width||n>=e.height)){var x=Math.floor(d/y*c.PRECISIONF),b=Math.floor(v/A*c.PRECISIONF),w=ye.shared
w.srcXOffset=Math.floor(l<0?-l*x:t*c.PRECISIONF),w.srcYOffset=Math.floor(h<0?-h*b:n*c.PRECISIONF),l<0&&(y+=l,l=0),h<0&&(A+=h,h=0),y=Math.min(y,o-l),A=Math.min(A,a-h)
var E,S=h*o+l
w.srcBuffer=e.imageData.data,w.iw=e.width,w.iw1=e.width-1,w.ih1=e.height-1
var P,C,M,T,_,R,L=(ye.filter_bilinear,ye.filter_new_scanline,Mr[p]),I=c.ALPHA_MASK,D=c.RED_MASK,O=c.GREEN_MASK,N=c.BLUE_MASK,F=c.PREC_MAXVAL,k=c.PRECISIONB,B=c.PREC_RED_SHIFT,$=c.PREC_ALPHA_SHIFT,G=w.srcBuffer,V=Math.min
for(g=0;g<A;g++){for(w.sX=w.srcXOffset,w.fracV=w.srcYOffset&F,w.ifV=F-w.fracV,w.v1=(w.srcYOffset>>k)*w.iw,w.v2=V((w.srcYOffset>>k)+1,w.ih1)*w.iw,m=0;m<y;m++)C=4*(S+m),E=s[C+3]<<24&I|s[C]<<16&D|s[C+1]<<8&O|s[C+2]&N,w.fracU=w.sX&F,w.ifU=F-w.fracU,w.ul=w.ifU*w.ifV>>k,w.ll=w.ifU*w.fracV>>k,w.ur=w.fracU*w.ifV>>k,w.lr=w.fracU*w.fracV>>k,w.u1=w.sX>>k,w.u2=V(w.u1+1,w.iw1),M=4*(w.v1+w.u1),T=4*(w.v1+w.u2),_=4*(w.v2+w.u1),R=4*(w.v2+w.u2),w.cUL=G[M+3]<<24&I|G[M]<<16&D|G[M+1]<<8&O|G[M+2]&N,w.cUR=G[T+3]<<24&I|G[T]<<16&D|G[T+1]<<8&O|G[T+2]&N,w.cLL=G[_+3]<<24&I|G[_]<<16&D|G[_+1]<<8&O|G[_+2]&N,w.cLR=G[R+3]<<24&I|G[R]<<16&D|G[R+1]<<8&O|G[R+2]&N,w.r=w.ul*((w.cUL&D)>>16)+w.ll*((w.cLL&D)>>16)+w.ur*((w.cUR&D)>>16)+w.lr*((w.cLR&D)>>16)<<B&D,w.g=w.ul*(w.cUL&O)+w.ll*(w.cLL&O)+w.ur*(w.cUR&O)+w.lr*(w.cLR&O)>>>k&O,w.b=w.ul*(w.cUL&N)+w.ll*(w.cLL&N)+w.ur*(w.cUR&N)+w.lr*(w.cLR&N)>>>k,w.a=w.ul*((w.cUL&I)>>>24)+w.ll*((w.cLL&I)>>>24)+w.ur*((w.cUR&I)>>>24)+w.lr*((w.cLR&I)>>>24)<<$&I,P=L(E,w.a|w.r|w.g|w.b),s[C]=(P&D)>>>16,s[C+1]=(P&O)>>>8,s[C+2]=P&N,s[C+3]=(P&I)>>>24,w.sX+=x
S+=o,w.srcYOffset+=b}}},ye.loadFont=function(e,n){if(e===t)throw"font name required in loadFont."
if(e.indexOf(".svg")===-1)return n===t&&(n=an.size),PFont.get(e,n)
var r=ye.loadGlyphs(e)
return{name:e,css:"12px sans-serif",glyph:!0,units_per_em:r.units_per_em,horiz_adv_x:1/r.units_per_em*r.horiz_adv_x,ascent:r.ascent,descent:r.descent,width:function(t){for(var n=0,r=t.length,i=0;i<r;i++)try{n+=parseFloat(ye.glyphLook(ye.glyphTable[e],t[i]).horiz_adv_x)}catch(e){E.debug(e)}return n/ye.glyphTable[e].units_per_em}}},ye.createFont=function(e,t){return ye.loadFont(e,t)},ye.textFont=function(e,n){n!==t&&(e.glyph||(e=PFont.get(e.name,n)),nn=n),an=e,tn=an.name,rn=an.ascent,sn=an.descent,on=an.leading
var r=be.$ensureContext()
r.font=an.css},ye.textSize=function(e){an=PFont.get(tn,e),nn=e,rn=an.ascent,sn=an.descent,on=an.leading
var t=be.$ensureContext()
t.font=an.css},ye.textAscent=function(){return rn},ye.textDescent=function(){return sn},ye.textLeading=function(e){on=e},ye.textAlign=function(e,t){Qt=e,Jt=t||c.BASELINE},rr.prototype.textWidth=function(e){var t,n=te(e).split(/\r?\n/g),r=0,i=n.length
for(Ae.font=an.css,t=0;t<i;++t)r=Math.max(r,an.measureTextWidth(n[t]))
return 0|r},ir.prototype.textWidth=function(e){var n,r=te(e).split(/\r?\n/g),i=0,s=r.length
we===t&&(we=h.createElement("canvas"))
var o=we.getContext("2d")
for(o.font=an.css,n=0;n<s;++n)i=Math.max(i,o.measureText(r[n]).width)
return 0|i},ye.glyphLook=function(e,t){try{switch(t){case"1":return e.one
case"2":return e.two
case"3":return e.three
case"4":return e.four
case"5":return e.five
case"6":return e.six
case"7":return e.seven
case"8":return e.eight
case"9":return e.nine
case"0":return e.zero
case" ":return e.space
case"$":return e.dollar
case"!":return e.exclam
case'"':return e.quotedbl
case"#":return e.numbersign
case"%":return e.percent
case"&":return e.ampersand
case"'":return e.quotesingle
case"(":return e.parenleft
case")":return e.parenright
case"*":return e.asterisk
case"+":return e.plus
case",":return e.comma
case"-":return e.hyphen
case".":return e.period
case"/":return e.slash
case"_":return e.underscore
case":":return e.colon
case";":return e.semicolon
case"<":return e.less
case"=":return e.equal
case">":return e.greater
case"?":return e.question
case"@":return e.at
case"[":return e.bracketleft
case"\\":return e.backslash
case"]":return e.bracketright
case"^":return e.asciicircum
case"`":return e.grave
case"{":return e.braceleft
case"|":return e.bar
case"}":return e.braceright
case"~":return e.asciitilde
default:return e[t]}}catch(e){E.debug(e)}},rr.prototype.text$line=function(e,t,n,r,i){var s=0,o=0
if(an.glyph){var a=ye.glyphTable[tn]
O(),Ae.translate(t,n+nn),i!==c.RIGHT&&i!==c.CENTER||(s=a.width(e),o=i===c.RIGHT?-s:-s/2)
var l=a.units_per_em,h=1/l*nn
Ae.scale(h,h)
for(var u=0,f=e.length;u<f;u++)try{ye.glyphLook(a,e[u]).draw()}catch(e){E.debug(e)}N()}else e&&"fillText"in Ae&&(ht&&(Ae.fillStyle=ye.color.toString(lt),ht=!1),i!==c.RIGHT&&i!==c.CENTER||(s=an.measureTextWidth(e),o=i===c.RIGHT?-s:-s/2),Ae.fillText(e,t+o,n))},ir.prototype.text$line=function(e,n,r,i,s){we===t&&(we=h.createElement("canvas"))
var o=Ae
Ae=we.getContext("2d"),Ae.font=an.css
var a=an.measureTextWidth(e)
we.width=a,we.height=nn,Ae=we.getContext("2d"),Ae.font=an.css,Ae.textBaseline="top",rr.prototype.text$line(e,0,0,0,c.LEFT)
var l=we.width/we.height
Ae=o,Ae.bindTexture(Ae.TEXTURE_2D,Xe),Ae.texImage2D(Ae.TEXTURE_2D,0,Ae.RGBA,Ae.RGBA,Ae.UNSIGNED_BYTE,we),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_MAG_FILTER,Ae.LINEAR),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_MIN_FILTER,Ae.LINEAR),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_WRAP_T,Ae.CLAMP_TO_EDGE),Ae.texParameteri(Ae.TEXTURE_2D,Ae.TEXTURE_WRAP_S,Ae.CLAMP_TO_EDGE)
var u=0
s===c.RIGHT?u=-a:s===c.CENTER&&(u=-a/2)
var f=new lr,p=.5*nn
f.translate(n+u-p/2,r-p,i),f.scale(-l*p,-p,p),f.translate(-1,-1,-1),f.transpose()
var m=new lr
m.scale(1,-1,1),m.apply(et.array()),m.transpose(),Ae.useProgram(Re),T("aVertex2d",Re,"aVertex",3,Ye),T("aTextureCoord2d",Re,"aTextureCoord",2,Ke),C("uSampler2d",Re,"uSampler",[0]),C("uIsDrawingText2d",Re,"uIsDrawingText",!0),M("uModel2d",Re,"uModel",!1,f.array()),M("uView2d",Re,"uView",!1,m.array()),P("uColor2d",Re,"uColor",at),Ae.bindBuffer(Ae.ELEMENT_ARRAY_BUFFER,je),Ae.drawElements(Ae.TRIANGLES,6,Ae.UNSIGNED_SHORT,0)},ye.text=function(){en!==c.SHAPE&&(3===arguments.length?ne(te(arguments[0]),arguments[1],arguments[2],0):4===arguments.length?ne(te(arguments[0]),arguments[1],arguments[2],arguments[3]):5===arguments.length?re(te(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0):6===arguments.length&&re(te(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))},ye.textMode=function(e){en=e},ye.loadGlyphs=function(e){var n,r,i,s,o,a,u,c,f,p,m,g,d="[0-9\\-]+",v=function(e,t){var n,r=0,i=[],s=new RegExp(e,"g")
for(n=i[r]=s.exec(t);n;)r++,n=i[r]=s.exec(t)
return i},y=function(e){var t=v("[A-Za-z][0-9\\- ]+|Z",e),l=function(){return O(),be.$ensureContext()},h=function(){V(),z(),N()}
g="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();",n=0,r=0,i=0,s=0,o=0,a=0,e=0,c=0,f="",p=t.length-1
for(var u=0;u<p;u++){var y=t[u][0],A=v(d,y)
switch(y[0]){case"M":n=parseFloat(A[0][0]),r=parseFloat(A[1][0]),g+="curContext.moveTo("+n+","+-r+");"
break
case"L":n=parseFloat(A[0][0]),r=parseFloat(A[1][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"H":n=parseFloat(A[0][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"V":r=parseFloat(A[0][0]),g+="curContext.lineTo("+n+","+-r+");"
break
case"T":o=parseFloat(A[0][0]),a=parseFloat(A[1][0]),"Q"===f||"T"===f?(e=Math.sqrt(Math.pow(n-i,2)+Math.pow(s-r,2)),c=Math.PI+Math.atan2(i-n,s-r),i=n+Math.sin(c)*e,s=r+Math.cos(c)*e):(i=n,s=r),g+="curContext.quadraticCurveTo("+i+","+-s+","+o+","+-a+");",n=o,r=a
break
case"Q":i=parseFloat(A[0][0]),s=parseFloat(A[1][0]),o=parseFloat(A[2][0]),a=parseFloat(A[3][0]),g+="curContext.quadraticCurveTo("+i+","+-s+","+o+","+-a+");",n=o,r=a
break
case"Z":g+="curContext.closePath();"}f=y[0]}return g+="afterPathDraw();",g+="curContext.translate("+m+",0);",g+="}}",new Function("beforePathDraw","afterPathDraw",g)(l,h)},A=function(n){var r=n.getElementsByTagName("font")
ye.glyphTable[e].horiz_adv_x=r[0].getAttribute("horiz-adv-x")
var i=n.getElementsByTagName("font-face")[0]
ye.glyphTable[e].units_per_em=parseFloat(i.getAttribute("units-per-em")),ye.glyphTable[e].ascent=parseFloat(i.getAttribute("ascent")),ye.glyphTable[e].descent=parseFloat(i.getAttribute("descent"))
for(var s=n.getElementsByTagName("glyph"),o=s.length,a=0;a<o;a++){var l=s[a].getAttribute("unicode"),h=s[a].getAttribute("glyph-name")
m=s[a].getAttribute("horiz-adv-x"),null===m&&(m=ye.glyphTable[e].horiz_adv_x),u=s[a].getAttribute("d"),u!==t&&(g=y(u),ye.glyphTable[e][h]={name:h,unicode:l,horiz_adv_x:m,draw:g.draw})}},x=function(){var t
try{t=h.implementation.createDocument("","",null)}catch(e){return void E.debug(e.message)}try{t.async=!1,t.load(e),A(t.getElementsByTagName("svg")[0])}catch(t){E.debug(t)
try{var n=new l.XMLHttpRequest
n.open("GET",e,!1),n.send(null),A(n.responseXML.documentElement)}catch(e){E.debug(t)}}}
return ye.glyphTable[e]={},x(e),ye.glyphTable[e]},ye.param=function(e){var t="data-processing-"+e
if(ge.hasAttribute(t))return ge.getAttribute(t)
for(var n=0,r=ge.childNodes.length;n<r;++n){var i=ge.childNodes.item(n)
if(1===i.nodeType&&"param"===i.tagName.toLowerCase()&&i.getAttribute("name")===e)return i.getAttribute("value")}return xe.params.hasOwnProperty(e)?xe.params[e]:null},sr.prototype.translate=se("translate"),sr.prototype.transform=se("transform"),sr.prototype.scale=se("scale"),sr.prototype.pushMatrix=se("pushMatrix"),sr.prototype.popMatrix=se("popMatrix"),sr.prototype.resetMatrix=se("resetMatrix"),sr.prototype.applyMatrix=se("applyMatrix"),sr.prototype.rotate=se("rotate"),sr.prototype.rotateZ=se("rotateZ"),sr.prototype.shearX=se("shearX"),sr.prototype.shearY=se("shearY"),sr.prototype.redraw=se("redraw"),sr.prototype.toImageData=se("toImageData"),sr.prototype.ambientLight=se("ambientLight"),sr.prototype.directionalLight=se("directionalLight"),sr.prototype.lightFalloff=se("lightFalloff"),sr.prototype.lightSpecular=se("lightSpecular"),sr.prototype.pointLight=se("pointLight"),sr.prototype.noLights=se("noLights"),sr.prototype.spotLight=se("spotLight"),sr.prototype.beginCamera=se("beginCamera"),sr.prototype.endCamera=se("endCamera"),sr.prototype.frustum=se("frustum"),sr.prototype.box=se("box"),sr.prototype.sphere=se("sphere"),sr.prototype.ambient=se("ambient"),sr.prototype.emissive=se("emissive"),sr.prototype.shininess=se("shininess"),sr.prototype.specular=se("specular"),sr.prototype.fill=se("fill"),sr.prototype.stroke=se("stroke"),sr.prototype.strokeWeight=se("strokeWeight"),sr.prototype.smooth=se("smooth"),sr.prototype.noSmooth=se("noSmooth"),sr.prototype.point=se("point"),sr.prototype.vertex=se("vertex"),sr.prototype.endShape=se("endShape"),sr.prototype.bezierVertex=se("bezierVertex"),sr.prototype.curveVertex=se("curveVertex"),sr.prototype.curve=se("curve"),sr.prototype.line=se("line"),sr.prototype.bezier=se("bezier"),sr.prototype.rect=se("rect"),sr.prototype.ellipse=se("ellipse"),sr.prototype.background=se("background"),sr.prototype.image=se("image"),sr.prototype.textWidth=se("textWidth"),sr.prototype.text$line=se("text$line"),sr.prototype.$ensureContext=se("$ensureContext"),sr.prototype.$newPMatrix=se("$newPMatrix"),sr.prototype.size=function(e,t,n){ie(n===c.WEBGL?"3D":"2D"),ye.size(e,t,n)},sr.prototype.$init=u,rr.prototype.$init=function(){ye.size(ye.width,ye.height),Ae.lineCap="round",ye.noSmooth(),ye.disableContextMenu()},ir.prototype.$init=function(){ye.use3DContext=!0,ye.disableContextMenu()},nr.prototype.$ensureContext=function(){return Ae},ge.getAttribute("tabindex")||ge.setAttribute("tabindex",0),de)xe=new E.Sketch,ie(),ye.size=function(e,t,n){ie(n&&n===c.WEBGL?"3D":"2D"),ye.size(e,t,n)}
else{xe=n instanceof E.Sketch?n:"function"==typeof n?new E.Sketch(n):n?E.compile(n):new E.Sketch(function(){}),ye.externals.sketch=xe,ie(),ge.onfocus=function(){ye.focused=!0},ge.onblur=function(){ye.focused=!1,xe.options.globalKeyEvents||ue()},xe.options.pauseOnBlur&&(A(l,"focus",function(){vt&&ye.loop()}),A(l,"blur",function(){vt&&gt&&(ye.noLoop(),vt=!0),ue()}))
var Tr=xe.options.globalKeyEvents?l:ge
A(Tr,"keydown",fe),A(Tr,"keypress",pe),A(Tr,"keyup",me)
for(var _r in E.lib)E.lib.hasOwnProperty(_r)&&(E.lib[_r].hasOwnProperty("attach")?E.lib[_r].attach(ye):E.lib[_r]instanceof Function&&E.lib[_r].call(this))
var Rr=100,Lr=function(e){if(xe.imageCache.pending||PFont.preloading.pending(Rr))l.setTimeout(function(){Lr(e)},Rr)
else{if(l.opera){var t,n,i=xe.imageCache.operaCache
for(t in i)i.hasOwnProperty(t)&&(n=i[t],null!==n&&h.body.removeChild(n),delete i[t])}xe.attach(e,r),xe.onLoad(e),e.setup&&(e.setup(),e.resetMatrix(),xe.onSetup()),Z(),e.draw&&(vt?e.loop():e.redraw())}}
b(this),Lr(ye)}}
return E.debug=function(){return"console"in l?function(e){l.console.log("Processing.js: "+e)}:u}(),E.prototype=r,E.instances=A,E.getInstanceById=function(e){return A[x[e]]},function(e){function t(e){return function(){throw"Processing.js does not support "+e+"."}}for(var n,r,i="open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()".split(" "),s=i.length;s--;)n=i[s],r=n.replace("()",""),e[r]=t(n)}(r),E}},{}],28:[function(e,t,n){var r={virtEquals:e("./Helpers/virtEquals"),virtHashCode:e("./Helpers/virtHashCode"),ObjectIterator:e("./Helpers/ObjectIterator"),PConstants:e("./Helpers/PConstants"),ArrayList:e("./Objects/ArrayList"),HashMap:e("./Objects/HashMap"),PVector:e("./Objects/PVector"),PFont:e("./Objects/PFont"),Char:e("./Objects/Char"),XMLAttribute:e("./Objects/XMLAttribute"),XMLElement:e("./Objects/XMLElement"),PMatrix2D:e("./Objects/PMatrix2D"),PMatrix3D:e("./Objects/PMatrix3D"),PShape:e("./Objects/PShape"),colors:e("./Objects/webcolors"),PShapeSVG:e("./Objects/PShapeSVG"),CommonFunctions:e("./P5Functions/commonFunctions"),defaultScope:e("./Helpers/defaultScope"),Processing:e("./Processing"),setupParser:e("./Parser/Parser"),finalize:e("./Helpers/finalizeProcessing")}
r.extend={withMath:e("./P5Functions/Math.js"),withProxyFunctions:e("./P5Functions/JavaProxyFunctions")(r.virtHashCode,r.virtEquals),withTouch:e("./P5Functions/touchmouse"),withCommonFunctions:r.CommonFunctions.withCommonFunctions},t.exports=function(t,n){var i=function(){},s=r.virtEquals,o=r.virtHashCode,a=r.PConstants,l=r.CommonFunctions,h=r.ObjectIterator,u=r.Char,c=r.XMLAttribute(),f=r.ArrayList({virtHashCode:o,virtEquals:s}),p=r.HashMap({virtHashCode:o,virtEquals:s}),m=r.PVector({PConstants:a}),g=r.PFont({Browser:t,noop:i}),d=r.XMLElement({Browser:t,XMLAttribute:c}),v=r.PMatrix2D({p:l}),y=r.PMatrix3D({p:l}),A=r.PShape({PConstants:a,PMatrix2D:v,PMatrix3D:y}),x=r.PShapeSVG({CommonFunctions:l,PConstants:a,PShape:A,XMLElement:d,colors:r.colors}),b=r.defaultScope({ArrayList:f,HashMap:p,PVector:m,PFont:g,PShapeSVG:x,ObjectIterator:h,PConstants:a,Char:u,XMLElement:d,XML:d}),w=r.Processing({defaultScope:b,Browser:t,extend:r.extend,noop:i})
return w=r.setupParser(w,{Browser:t,aFunctions:n,defaultScope:b}),w=r.finalize(w,{version:e("../package.json").version,isDomPresent:t.isDomPresent,window:t.window,document:t.document,noop:i})}},{"../package.json":2,"./Helpers/ObjectIterator":3,"./Helpers/PConstants":4,"./Helpers/defaultScope":6,"./Helpers/finalizeProcessing":7,"./Helpers/virtEquals":8,"./Helpers/virtHashCode":9,"./Objects/ArrayList":10,"./Objects/Char":11,"./Objects/HashMap":12,"./Objects/PFont":13,"./Objects/PMatrix2D":14,"./Objects/PMatrix3D":15,"./Objects/PShape":16,"./Objects/PShapeSVG":17,"./Objects/PVector":18,"./Objects/XMLAttribute":19,"./Objects/XMLElement":20,"./Objects/webcolors":21,"./P5Functions/JavaProxyFunctions":22,"./P5Functions/Math.js":23,"./P5Functions/commonFunctions":24,"./P5Functions/touchmouse":25,"./Parser/Parser":26,"./Processing":27}]},{},[1])

;(function(){
var g, aa = this;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == n(a);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
var fa = String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ha(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;function ia(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
function ka(a, b) {
  for (var c in a) {
    if (b.call(void 0, a[c], c, a)) {
      return !0;
    }
  }
  return !1;
}
;function la(a, b) {
  this.V = [];
  this.Za = b;
  for (var c = !0, d = a.length - 1;0 <= d;d--) {
    var e = a[d] | 0;
    c && e == b || (this.V[d] = e, c = !1);
  }
}
var na = {};
function oa(a) {
  if (-128 <= a && 128 > a) {
    var b = na[a];
    if (b) {
      return b;
    }
  }
  b = new la([a | 0], 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (na[a] = b);
  return b;
}
function pa(a) {
  if (isNaN(a) || !isFinite(a)) {
    return qa;
  }
  if (0 > a) {
    return pa(-a).fa();
  }
  for (var b = [], c = 1, d = 0;a >= c;d++) {
    b[d] = a / c | 0, c *= ra;
  }
  return new la(b, 0);
}
var ra = 4294967296, qa = oa(0), ua = oa(1), va = oa(16777216);
g = la.prototype;
g.wc = function() {
  return 0 < this.V.length ? this.V[0] : this.Za;
};
g.qb = function() {
  if (this.na()) {
    return -this.fa().qb();
  }
  for (var a = 0, b = 1, c = 0;c < this.V.length;c++) {
    var d = wa(this, c), a = a + (0 <= d ? d : ra + d) * b, b = b * ra;
  }
  return a;
};
g.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.Oa()) {
    return "0";
  }
  if (this.na()) {
    return "-" + this.fa().toString(a);
  }
  for (var b = pa(Math.pow(a, 6)), c = this, d = "";;) {
    var e = ya(c, b), f = (c.Lb(e.multiply(b)).wc() >>> 0).toString(a), c = e;
    if (c.Oa()) {
      return f + d;
    }
    for (;6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
function wa(a, b) {
  return 0 > b ? 0 : b < a.V.length ? a.V[b] : a.Za;
}
g.Oa = function() {
  if (0 != this.Za) {
    return !1;
  }
  for (var a = 0;a < this.V.length;a++) {
    if (0 != this.V[a]) {
      return !1;
    }
  }
  return !0;
};
g.na = function() {
  return -1 == this.Za;
};
g.pc = function(a) {
  return 0 < this.compare(a);
};
g.qc = function(a) {
  return 0 <= this.compare(a);
};
g.Tb = function() {
  return 0 > this.compare(va);
};
g.Ub = function(a) {
  return 0 >= this.compare(a);
};
g.compare = function(a) {
  a = this.Lb(a);
  return a.na() ? -1 : a.Oa() ? 0 : 1;
};
g.fa = function() {
  return this.sc().add(ua);
};
g.add = function(a) {
  for (var b = Math.max(this.V.length, a.V.length), c = [], d = 0, e = 0;e <= b;e++) {
    var f = d + (wa(this, e) & 65535) + (wa(a, e) & 65535), h = (f >>> 16) + (wa(this, e) >>> 16) + (wa(a, e) >>> 16), d = h >>> 16, f = f & 65535, h = h & 65535;
    c[e] = h << 16 | f;
  }
  return new la(c, c[c.length - 1] & -2147483648 ? -1 : 0);
};
g.Lb = function(a) {
  return this.add(a.fa());
};
g.multiply = function(a) {
  if (this.Oa() || a.Oa()) {
    return qa;
  }
  if (this.na()) {
    return a.na() ? this.fa().multiply(a.fa()) : this.fa().multiply(a).fa();
  }
  if (a.na()) {
    return this.multiply(a.fa()).fa();
  }
  if (this.Tb() && a.Tb()) {
    return pa(this.qb() * a.qb());
  }
  for (var b = this.V.length + a.V.length, c = [], d = 0;d < 2 * b;d++) {
    c[d] = 0;
  }
  for (d = 0;d < this.V.length;d++) {
    for (var e = 0;e < a.V.length;e++) {
      var f = wa(this, d) >>> 16, h = wa(this, d) & 65535, k = wa(a, e) >>> 16, l = wa(a, e) & 65535;
      c[2 * d + 2 * e] += h * l;
      za(c, 2 * d + 2 * e);
      c[2 * d + 2 * e + 1] += f * l;
      za(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 1] += h * k;
      za(c, 2 * d + 2 * e + 1);
      c[2 * d + 2 * e + 2] += f * k;
      za(c, 2 * d + 2 * e + 2);
    }
  }
  for (d = 0;d < b;d++) {
    c[d] = c[2 * d + 1] << 16 | c[2 * d];
  }
  for (d = b;d < 2 * b;d++) {
    c[d] = 0;
  }
  return new la(c, 0);
};
function za(a, b) {
  for (;(a[b] & 65535) != a[b];) {
    a[b + 1] += a[b] >>> 16, a[b] &= 65535;
  }
}
function ya(a, b) {
  if (b.Oa()) {
    throw Error("division by zero");
  }
  if (a.Oa()) {
    return qa;
  }
  if (a.na()) {
    return b.na() ? ya(a.fa(), b.fa()) : ya(a.fa(), b).fa();
  }
  if (b.na()) {
    return ya(a, b.fa()).fa();
  }
  if (30 < a.V.length) {
    if (a.na() || b.na()) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var c = ua, d = b;d.Ub(a);) {
      c = c.shiftLeft(1), d = d.shiftLeft(1);
    }
    for (var e = c.fb(1), f = d.fb(1), h, d = d.fb(2), c = c.fb(2);!d.Oa();) {
      h = f.add(d), h.Ub(a) && (e = e.add(c), f = h), d = d.fb(1), c = c.fb(1);
    }
    return e;
  }
  c = qa;
  for (d = a;d.qc(b);) {
    e = Math.max(1, Math.floor(d.qb() / b.qb()));
    f = Math.ceil(Math.log(e) / Math.LN2);
    f = 48 >= f ? 1 : Math.pow(2, f - 48);
    h = pa(e);
    for (var k = h.multiply(b);k.na() || k.pc(d);) {
      e -= f, h = pa(e), k = h.multiply(b);
    }
    h.Oa() && (h = ua);
    c = c.add(h);
    d = d.Lb(k);
  }
  return c;
}
g.sc = function() {
  for (var a = this.V.length, b = [], c = 0;c < a;c++) {
    b[c] = ~this.V[c];
  }
  return new la(b, ~this.Za);
};
g.shiftLeft = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.V.length + b + (0 < a ? 1 : 0), d = [], e = 0;e < c;e++) {
    d[e] = 0 < a ? wa(this, e - b) << a | wa(this, e - b - 1) >>> 32 - a : wa(this, e - b);
  }
  return new la(d, this.Za);
};
g.fb = function(a) {
  var b = a >> 5;
  a %= 32;
  for (var c = this.V.length - b, d = [], e = 0;e < c;e++) {
    d[e] = 0 < a ? wa(this, e + b) >>> a | wa(this, e + b + 1) << 32 - a : wa(this, e + b);
  }
  return new la(d, this.Za);
};
function Aa(a, b) {
  null != a && this.append.apply(this, arguments);
}
g = Aa.prototype;
g.Ra = "";
g.set = function(a) {
  this.Ra = "" + a;
};
g.append = function(a, b, c) {
  this.Ra += String(a);
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ra += arguments[d];
    }
  }
  return this;
};
g.clear = function() {
  this.Ra = "";
};
g.getLength = function() {
  return this.Ra.length;
};
g.toString = function() {
  return this.Ra;
};
var Ba = Array.prototype.indexOf ? function(a, b, c) {
  return Array.prototype.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
function Da(a, b) {
  a.sort(b || Ea);
}
function Fa(a, b) {
  for (var c = Array(a.length), d = 0;d < a.length;d++) {
    c[d] = {index:d, value:a[d]};
  }
  var e = b || Ea;
  Da(c, function(a, b) {
    return e(a.value, b.value) || a.index - b.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = c[d].value;
  }
}
function Ea(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function Ga(a) {
  Ga[" "](a);
  return a;
}
Ga[" "] = function() {
};
var Ia;
if ("undefined" === typeof p) {
  var p = {};
}
if ("undefined" === typeof Ja) {
  var Ja = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  };
}
if ("undefined" === typeof Ka) {
  var Ka = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  };
}
var La = null;
if ("undefined" === typeof Ma) {
  var Ma = null;
}
function Oa() {
  return new Pa(null, 5, [Qa, !0, Ra, !0, Ta, !1, Ua, !1, Va, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function Wa(a) {
  return null == a;
}
function Xa(a) {
  return a instanceof Array;
}
function Ya(a) {
  return null == a ? !0 : !1 === a ? !0 : !1;
}
function u(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function w(a, b) {
  var c = null == b ? null : b.constructor, c = t(t(c) ? c.Sb : c) ? c.xb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Za(a) {
  var b = a.xb;
  return t(b) ? b : "" + z.a(a);
}
var ab = "undefined" !== typeof Symbol && "function" === n(Symbol) ? Symbol.iterator : "@@iterator";
function bb(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function cb() {
}
function db() {
}
var eb = function eb(b) {
  if (null != b && null != b.S) {
    return b.S(b);
  }
  var c = eb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = eb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("ICounted.-count", b);
}, fb = function fb(b, c) {
  if (null != b && null != b.T) {
    return b.T(b, c);
  }
  var d = fb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = fb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("ICollection.-conj", b);
};
function gb() {
}
var A = function A(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return A.b(arguments[0], arguments[1]);
    case 3:
      return A.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
A.b = function(a, b) {
  if (null != a && null != a.K) {
    return a.K(a, b);
  }
  var c = A[n(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = A._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw w("IIndexed.-nth", a);
};
A.f = function(a, b, c) {
  if (null != a && null != a.ea) {
    return a.ea(a, b, c);
  }
  var d = A[n(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = A._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw w("IIndexed.-nth", a);
};
A.A = 3;
var hb = function hb(b) {
  if (null != b && null != b.$) {
    return b.$(b);
  }
  var c = hb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = hb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("ISeq.-first", b);
}, ib = function ib(b) {
  if (null != b && null != b.ia) {
    return b.ia(b);
  }
  var c = ib[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ib._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("ISeq.-rest", b);
};
function kb() {
}
function lb() {
}
var mb = function mb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return mb.b(arguments[0], arguments[1]);
    case 3:
      return mb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
mb.b = function(a, b) {
  if (null != a && null != a.M) {
    return a.M(a, b);
  }
  var c = mb[n(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = mb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw w("ILookup.-lookup", a);
};
mb.f = function(a, b, c) {
  if (null != a && null != a.G) {
    return a.G(a, b, c);
  }
  var d = mb[n(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = mb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw w("ILookup.-lookup", a);
};
mb.A = 3;
var nb = function nb(b, c) {
  if (null != b && null != b.Cb) {
    return b.Cb(b, c);
  }
  var d = nb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = nb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IAssociative.-contains-key?", b);
}, ob = function ob(b, c, d) {
  if (null != b && null != b.ya) {
    return b.ya(b, c, d);
  }
  var e = ob[n(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = ob._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw w("IAssociative.-assoc", b);
};
function pb() {
}
var qb = function qb(b, c) {
  if (null != b && null != b.Eb) {
    return b.Eb(b, c);
  }
  var d = qb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = qb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IMap.-dissoc", b);
};
function sb() {
}
var tb = function tb(b) {
  if (null != b && null != b.Fb) {
    return b.Fb();
  }
  var c = tb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = tb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IMapEntry.-key", b);
}, ub = function ub(b) {
  if (null != b && null != b.Gb) {
    return b.Gb();
  }
  var c = ub[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = ub._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IMapEntry.-val", b);
};
function vb() {
}
var wb = function wb(b, c) {
  if (null != b && null != b.Pb) {
    return b.Pb(0, c);
  }
  var d = wb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = wb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("ISet.-disjoin", b);
};
function xb() {
}
var yb = function yb(b, c, d) {
  if (null != b && null != b.jb) {
    return b.jb(b, c, d);
  }
  var e = yb[n(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = yb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw w("IVector.-assoc-n", b);
}, zb = function zb(b) {
  if (null != b && null != b.ac) {
    return b.state;
  }
  var c = zb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = zb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IDeref.-deref", b);
};
function Bb() {
}
var Cb = function Cb(b) {
  if (null != b && null != b.N) {
    return b.N(b);
  }
  var c = Cb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Cb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IMeta.-meta", b);
}, Db = function Db(b, c) {
  if (null != b && null != b.R) {
    return b.R(b, c);
  }
  var d = Db[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Db._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IWithMeta.-with-meta", b);
};
function Eb() {
}
var Fb = function Fb(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Fb.b(arguments[0], arguments[1]);
    case 3:
      return Fb.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
Fb.b = function(a, b) {
  if (null != a && null != a.Y) {
    return a.Y(a, b);
  }
  var c = Fb[n(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = Fb._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw w("IReduce.-reduce", a);
};
Fb.f = function(a, b, c) {
  if (null != a && null != a.Z) {
    return a.Z(a, b, c);
  }
  var d = Fb[n(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = Fb._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw w("IReduce.-reduce", a);
};
Fb.A = 3;
var Gb = function Gb(b, c) {
  if (null != b && null != b.u) {
    return b.u(b, c);
  }
  var d = Gb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Gb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IEquiv.-equiv", b);
}, Hb = function Hb(b) {
  if (null != b && null != b.L) {
    return b.L(b);
  }
  var c = Hb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Hb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IHash.-hash", b);
};
function Ib() {
}
var Jb = function Jb(b) {
  if (null != b && null != b.O) {
    return b.O(b);
  }
  var c = Jb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Jb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("ISeqable.-seq", b);
};
function Kb() {
}
function Lb() {
}
function Ob() {
}
var Pb = function Pb(b) {
  if (null != b && null != b.wb) {
    return b.wb(b);
  }
  var c = Pb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Pb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IReversible.-rseq", b);
}, C = function C(b, c) {
  if (null != b && null != b.Rb) {
    return b.Rb(0, c);
  }
  var d = C[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = C._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IWriter.-write", b);
}, Qb = function Qb(b, c, d) {
  if (null != b && null != b.Qb) {
    return b.Qb(0, c, d);
  }
  var e = Qb[n(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Qb._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw w("IWatchable.-notify-watches", b);
}, Rb = function Rb(b) {
  if (null != b && null != b.bb) {
    return b.bb(b);
  }
  var c = Rb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Rb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IEditableCollection.-as-transient", b);
}, Sb = function Sb(b, c) {
  if (null != b && null != b.Wa) {
    return b.Wa(b, c);
  }
  var d = Sb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Sb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("ITransientCollection.-conj!", b);
}, Tb = function Tb(b) {
  if (null != b && null != b.ib) {
    return b.ib(b);
  }
  var c = Tb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Tb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("ITransientCollection.-persistent!", b);
}, Ub = function Ub(b, c, d) {
  if (null != b && null != b.Va) {
    return b.Va(b, c, d);
  }
  var e = Ub[n(null == b ? null : b)];
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  e = Ub._;
  if (null != e) {
    return e.f ? e.f(b, c, d) : e.call(null, b, c, d);
  }
  throw w("ITransientAssociative.-assoc!", b);
};
function Vb() {
}
var Wb = function Wb(b, c) {
  if (null != b && null != b.ab) {
    return b.ab(b, c);
  }
  var d = Wb[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = Wb._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IComparable.-compare", b);
}, Xb = function Xb(b) {
  if (null != b && null != b.Mb) {
    return b.Mb();
  }
  var c = Xb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Xb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IChunk.-drop-first", b);
}, Yb = function Yb(b) {
  if (null != b && null != b.Db) {
    return b.Db(b);
  }
  var c = Yb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Yb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IChunkedSeq.-chunked-first", b);
}, Zb = function Zb(b) {
  if (null != b && null != b.tb) {
    return b.tb(b);
  }
  var c = Zb[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = Zb._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IChunkedSeq.-chunked-rest", b);
}, $b = function $b(b, c) {
  if (null != b && null != b.ic) {
    return b.ic(b, c);
  }
  var d = $b[n(null == b ? null : b)];
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  d = $b._;
  if (null != d) {
    return d.b ? d.b(b, c) : d.call(null, b, c);
  }
  throw w("IReset.-reset!", b);
}, ac = function ac(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return ac.b(arguments[0], arguments[1]);
    case 3:
      return ac.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ac.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ac.I(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
ac.b = function(a, b) {
  if (null != a && null != a.kc) {
    return a.kc(a, b);
  }
  var c = ac[n(null == a ? null : a)];
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  c = ac._;
  if (null != c) {
    return c.b ? c.b(a, b) : c.call(null, a, b);
  }
  throw w("ISwap.-swap!", a);
};
ac.f = function(a, b, c) {
  if (null != a && null != a.lc) {
    return a.lc(a, b, c);
  }
  var d = ac[n(null == a ? null : a)];
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  d = ac._;
  if (null != d) {
    return d.f ? d.f(a, b, c) : d.call(null, a, b, c);
  }
  throw w("ISwap.-swap!", a);
};
ac.D = function(a, b, c, d) {
  if (null != a && null != a.mc) {
    return a.mc(a, b, c, d);
  }
  var e = ac[n(null == a ? null : a)];
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  e = ac._;
  if (null != e) {
    return e.D ? e.D(a, b, c, d) : e.call(null, a, b, c, d);
  }
  throw w("ISwap.-swap!", a);
};
ac.I = function(a, b, c, d, e) {
  if (null != a && null != a.nc) {
    return a.nc(a, b, c, d, e);
  }
  var f = ac[n(null == a ? null : a)];
  if (null != f) {
    return f.I ? f.I(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  f = ac._;
  if (null != f) {
    return f.I ? f.I(a, b, c, d, e) : f.call(null, a, b, c, d, e);
  }
  throw w("ISwap.-swap!", a);
};
ac.A = 5;
var bc = function bc(b) {
  if (null != b && null != b.oa) {
    return b.oa(b);
  }
  var c = bc[n(null == b ? null : b)];
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  c = bc._;
  if (null != c) {
    return c.a ? c.a(b) : c.call(null, b);
  }
  throw w("IIterable.-iterator", b);
};
function cc(a) {
  this.uc = a;
  this.i = 1073741824;
  this.F = 0;
}
cc.prototype.Rb = function(a, b) {
  return this.uc.append(b);
};
function dc(a) {
  var b = new Aa;
  a.P(null, new cc(b), Oa());
  return "" + z.a(b);
}
var ec = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function gc(a) {
  a = ec(a | 0, -862048943);
  return ec(a << 15 | a >>> -15, 461845907);
}
function hc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return ec(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function ic(a, b) {
  var c = (a | 0) ^ b, c = ec(c ^ c >>> 16, -2048144789), c = ec(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function jc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = hc(c, gc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ gc(a.charCodeAt(a.length - 1)) : b;
  return ic(b, ec(2, a.length));
}
var kc = {}, lc = 0;
function mc(a) {
  255 < lc && (kc = {}, lc = 0);
  if (null == a) {
    return 0;
  }
  var b = kc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ec(31, d) + a.charCodeAt(c), c = e;
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    kc[a] = b;
    lc += 1;
  }
  return a = b;
}
function nc(a) {
  if (null != a && (a.i & 4194304 || p === a.Ac)) {
    return a.L(null);
  }
  if ("number" === typeof a) {
    if (t(isFinite(a))) {
      return Math.floor(a) % 2147483647;
    }
    switch(a) {
      case Infinity:
        return 2146435072;
      case -Infinity:
        return -1048576;
      default:
        return 2146959360;
    }
  } else {
    return !0 === a ? a = 1231 : !1 === a ? a = 1237 : "string" === typeof a ? (a = mc(a), 0 !== a && (a = gc(a), a = hc(0, a), a = ic(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : Hb(a), a;
  }
}
function oc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function pc(a, b) {
  if (a.wa === b.wa) {
    return 0;
  }
  var c = Ya(a.ca);
  if (t(c ? b.ca : c)) {
    return -1;
  }
  if (t(a.ca)) {
    if (Ya(b.ca)) {
      return 1;
    }
    c = Ea(a.ca, b.ca);
    return 0 === c ? Ea(a.name, b.name) : c;
  }
  return Ea(a.name, b.name);
}
function qc(a, b, c, d, e) {
  this.ca = a;
  this.name = b;
  this.wa = c;
  this.$a = d;
  this.da = e;
  this.i = 2154168321;
  this.F = 4096;
}
g = qc.prototype;
g.toString = function() {
  return this.wa;
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return b instanceof qc ? this.wa === b.wa : !1;
};
g.call = function() {
  function a(a, b, c) {
    return F.f ? F.f(b, this, c) : F.call(null, b, this, c);
  }
  function b(a, b) {
    return F.b ? F.b(b, this) : F.call(null, b, this);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return F.b ? F.b(a, this) : F.call(null, a, this);
};
g.b = function(a, b) {
  return F.f ? F.f(a, this, b) : F.call(null, a, this, b);
};
g.N = function() {
  return this.da;
};
g.R = function(a, b) {
  return new qc(this.ca, this.name, this.wa, this.$a, b);
};
g.L = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = oc(jc(this.name), mc(this.ca));
};
g.P = function(a, b) {
  return C(b, this.wa);
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.i & 8388608 || p === a.jc)) {
    return a.O(null);
  }
  if (Xa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0, null);
  }
  if (u(Ib, a)) {
    return Jb(a);
  }
  throw Error([z.a(a), z.a(" is not ISeqable")].join(""));
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (null != a && (a.i & 64 || p === a.hb)) {
    return a.$(null);
  }
  a = G(a);
  return null == a ? null : hb(a);
}
function rc(a) {
  return null != a ? null != a && (a.i & 64 || p === a.hb) ? a.ia(null) : (a = G(a)) ? ib(a) : K : K;
}
function L(a) {
  return null == a ? null : null != a && (a.i & 128 || p === a.vb) ? a.ha(null) : G(rc(a));
}
var M = function M(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return M.a(arguments[0]);
    case 2:
      return M.b(arguments[0], arguments[1]);
    default:
      return M.o(arguments[0], arguments[1], new I(c.slice(2), 0, null));
  }
};
M.a = function() {
  return !0;
};
M.b = function(a, b) {
  return null == a ? null == b : a === b || Gb(a, b);
};
M.o = function(a, b, c) {
  for (;;) {
    if (M.b(a, b)) {
      if (L(c)) {
        a = b, b = J(c), c = L(c);
      } else {
        return M.b(b, J(c));
      }
    } else {
      return !1;
    }
  }
};
M.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return M.o(b, a, c);
};
M.A = 2;
function sc(a) {
  this.B = a;
}
sc.prototype.next = function() {
  if (null != this.B) {
    var a = J(this.B);
    this.B = L(this.B);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function uc(a) {
  return new sc(G(a));
}
function vc(a, b) {
  var c = gc(a), c = hc(0, c);
  return ic(c, b);
}
function wc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = ec(31, c) + nc(J(a)) | 0, a = L(a);
    } else {
      return vc(c, b);
    }
  }
}
var xc = vc(1, 0);
function yc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + nc(J(a)) | 0, a = L(a);
    } else {
      return vc(c, b);
    }
  }
}
var zc = vc(0, 0);
db["null"] = !0;
eb["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.gb = p;
Date.prototype.ab = function(a, b) {
  if (b instanceof Date) {
    return Ea(this.valueOf(), b.valueOf());
  }
  throw Error([z.a("Cannot compare "), z.a(this), z.a(" to "), z.a(b)].join(""));
};
Gb.number = function(a, b) {
  return a === b;
};
cb["function"] = !0;
Bb["function"] = !0;
Cb["function"] = function() {
  return null;
};
Hb._ = function(a) {
  return a[da] || (a[da] = ++ea);
};
function Ac(a) {
  return zb(a);
}
function Bc(a, b) {
  var c = eb(a);
  if (0 === c) {
    return b.v ? b.v() : b.call(null);
  }
  for (var d = A.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = A.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1;
    } else {
      return d;
    }
  }
}
function Cc(a, b, c) {
  var d = eb(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = A.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Dc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.v ? b.v() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1;
    } else {
      return d;
    }
  }
}
function Ec(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Fc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.b ? b.b(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function Gc(a) {
  return null != a ? a.i & 2 || p === a.$b ? !0 : a.i ? !1 : u(db, a) : u(db, a);
}
function Hc(a) {
  return null != a ? a.i & 16 || p === a.Ob ? !0 : a.i ? !1 : u(gb, a) : u(gb, a);
}
function N(a, b, c) {
  var d = O.a ? O.a(a) : O.call(null, a);
  if (c >= d) {
    return -1;
  }
  !(0 < c) && 0 > c && (c += d, c = 0 > c ? 0 : c);
  for (;;) {
    if (c < d) {
      if (M.b(Ic ? Ic(a, c) : Jc.call(null, a, c), b)) {
        return c;
      }
      c += 1;
    } else {
      return -1;
    }
  }
}
function P(a, b, c) {
  var d = O.a ? O.a(a) : O.call(null, a);
  if (0 === d) {
    return -1;
  }
  0 < c ? (--d, c = d < c ? d : c) : c = 0 > c ? d + c : c;
  for (;;) {
    if (0 <= c) {
      if (M.b(Ic ? Ic(a, c) : Jc.call(null, a, c), b)) {
        return c;
      }
      --c;
    } else {
      return -1;
    }
  }
}
function Kc(a, b) {
  this.c = a;
  this.j = b;
}
Kc.prototype.ja = function() {
  return this.j < this.c.length;
};
Kc.prototype.next = function() {
  var a = this.c[this.j];
  this.j += 1;
  return a;
};
function I(a, b, c) {
  this.c = a;
  this.j = b;
  this.m = c;
  this.i = 166592766;
  this.F = 8192;
}
g = I.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O.a ? O.a(this) : O.call(null, this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.K = function(a, b) {
  var c = b + this.j;
  if (0 <= c && c < this.c.length) {
    return this.c[c];
  }
  throw Error("Index out of bounds");
};
g.ea = function(a, b, c) {
  a = b + this.j;
  return 0 <= a && a < this.c.length ? this.c[a] : c;
};
g.oa = function() {
  return new Kc(this.c, this.j);
};
g.N = function() {
  return this.m;
};
g.ha = function() {
  return this.j + 1 < this.c.length ? new I(this.c, this.j + 1, null) : null;
};
g.S = function() {
  var a = this.c.length - this.j;
  return 0 > a ? 0 : a;
};
g.wb = function() {
  var a = this.S(null);
  return 0 < a ? new Lc(this, a - 1, null) : null;
};
g.L = function() {
  return wc(this);
};
g.u = function(a, b) {
  return Mc.b ? Mc.b(this, b) : Mc.call(null, this, b);
};
g.X = function() {
  return K;
};
g.Y = function(a, b) {
  return Fc(this.c, b, this.c[this.j], this.j + 1);
};
g.Z = function(a, b, c) {
  return Fc(this.c, b, c, this.j);
};
g.$ = function() {
  return this.c[this.j];
};
g.ia = function() {
  return this.j + 1 < this.c.length ? new I(this.c, this.j + 1, null) : K;
};
g.O = function() {
  return this.j < this.c.length ? this : null;
};
g.R = function(a, b) {
  return new I(this.c, this.j, b);
};
g.T = function(a, b) {
  return Q.b ? Q.b(b, this) : Q.call(null, b, this);
};
I.prototype[ab] = function() {
  return uc(this);
};
function Nc(a, b) {
  return b < a.length ? new I(a, b, null) : null;
}
function Oc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return Nc(arguments[0], 0);
    case 2:
      return Nc(arguments[0], arguments[1]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function Lc(a, b, c) {
  this.sb = a;
  this.j = b;
  this.m = c;
  this.i = 32374990;
  this.F = 8192;
}
g = Lc.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O.a ? O.a(this) : O.call(null, this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  return 0 < this.j ? new Lc(this.sb, this.j - 1, null) : null;
};
g.S = function() {
  return this.j + 1;
};
g.L = function() {
  return wc(this);
};
g.u = function(a, b) {
  return Mc.b ? Mc.b(this, b) : Mc.call(null, this, b);
};
g.X = function() {
  var a = this.m;
  return Pc.b ? Pc.b(K, a) : Pc.call(null, K, a);
};
g.Y = function(a, b) {
  return Qc ? Qc(b, this) : Rc.call(null, b, this);
};
g.Z = function(a, b, c) {
  return Sc ? Sc(b, c, this) : Rc.call(null, b, c, this);
};
g.$ = function() {
  return A.b(this.sb, this.j);
};
g.ia = function() {
  return 0 < this.j ? new Lc(this.sb, this.j - 1, null) : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Lc(this.sb, this.j, b);
};
g.T = function(a, b) {
  return Q.b ? Q.b(b, this) : Q.call(null, b, this);
};
Lc.prototype[ab] = function() {
  return uc(this);
};
Gb._ = function(a, b) {
  return a === b;
};
var Tc = function Tc(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Tc.v();
    case 1:
      return Tc.a(arguments[0]);
    case 2:
      return Tc.b(arguments[0], arguments[1]);
    default:
      return Tc.o(arguments[0], arguments[1], new I(c.slice(2), 0, null));
  }
};
Tc.v = function() {
  return Uc;
};
Tc.a = function(a) {
  return a;
};
Tc.b = function(a, b) {
  return null != a ? fb(a, b) : fb(K, b);
};
Tc.o = function(a, b, c) {
  for (;;) {
    if (t(c)) {
      a = Tc.b(a, b), b = J(c), c = L(c);
    } else {
      return Tc.b(a, b);
    }
  }
};
Tc.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Tc.o(b, a, c);
};
Tc.A = 2;
function O(a) {
  if (null != a) {
    if (null != a && (a.i & 2 || p === a.$b)) {
      a = a.S(null);
    } else {
      if (Xa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (null != a && (a.i & 8388608 || p === a.jc)) {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (Gc(a)) {
                  a = b + eb(a);
                  break a;
                }
                a = L(a);
                b += 1;
              }
            }
          } else {
            a = eb(a);
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Vc(a, b, c) {
  for (;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    if (Hc(a)) {
      return A.f(a, b, c);
    }
    if (G(a)) {
      a = L(a), --b;
    } else {
      return c;
    }
  }
}
function Jc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Ic(arguments[0], arguments[1]);
    case 3:
      return S(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function Ic(a, b) {
  if ("number" !== typeof b) {
    throw Error("Index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (null != a && (a.i & 16 || p === a.Ob)) {
    return a.K(null, b);
  }
  if (Xa(a)) {
    if (0 <= b && b < a.length) {
      return a[b];
    }
    throw Error("Index out of bounds");
  }
  if ("string" === typeof a) {
    if (0 <= b && b < a.length) {
      return a.charAt(b);
    }
    throw Error("Index out of bounds");
  }
  if (null != a && (a.i & 64 || p === a.hb)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (G(c)) {
            c = J(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Hc(c)) {
          c = A.b(c, d);
          break a;
        }
        if (G(c)) {
          c = L(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  if (u(gb, a)) {
    return A.b(a, b);
  }
  throw Error([z.a("nth not supported on this type "), z.a(Za(null == a ? null : a.constructor))].join(""));
}
function S(a, b, c) {
  if ("number" !== typeof b) {
    throw Error("Index argument to nth must be a number.");
  }
  if (null == a) {
    return c;
  }
  if (null != a && (a.i & 16 || p === a.Ob)) {
    return a.ea(null, b, c);
  }
  if (Xa(a)) {
    return 0 <= b && b < a.length ? a[b] : c;
  }
  if ("string" === typeof a) {
    return 0 <= b && b < a.length ? a.charAt(b) : c;
  }
  if (null != a && (a.i & 64 || p === a.hb)) {
    return Vc(a, b, c);
  }
  if (u(gb, a)) {
    return A.b(a, b);
  }
  throw Error([z.a("nth not supported on this type "), z.a(Za(null == a ? null : a.constructor))].join(""));
}
var F = function F(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return F.b(arguments[0], arguments[1]);
    case 3:
      return F.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
F.b = function(a, b) {
  return null == a ? null : null != a && (a.i & 256 || p === a.cc) ? a.M(null, b) : Xa(a) ? null != b && b < a.length ? a[b | 0] : null : "string" === typeof a ? null != b && b < a.length ? a.charAt(b | 0) : null : u(lb, a) ? mb.b(a, b) : null;
};
F.f = function(a, b, c) {
  return null != a ? null != a && (a.i & 256 || p === a.cc) ? a.G(null, b, c) : Xa(a) ? null != b && 0 <= b && b < a.length ? a[b | 0] : c : "string" === typeof a ? null != b && 0 <= b && b < a.length ? a.charAt(b | 0) : c : u(lb, a) ? mb.f(a, b, c) : c : c;
};
F.A = 3;
var T = function T(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return T.f(arguments[0], arguments[1], arguments[2]);
    default:
      return T.o(arguments[0], arguments[1], arguments[2], new I(c.slice(3), 0, null));
  }
};
T.f = function(a, b, c) {
  return null != a ? ob(a, b, c) : Wc([b], [c]);
};
T.o = function(a, b, c, d) {
  for (;;) {
    if (a = T.f(a, b, c), t(d)) {
      b = J(d), c = J(L(d)), d = L(L(d));
    } else {
      return a;
    }
  }
};
T.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), d = L(d);
  return T.o(b, a, c, d);
};
T.A = 3;
var Xc = function Xc(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Xc.a(arguments[0]);
    case 2:
      return Xc.b(arguments[0], arguments[1]);
    default:
      return Xc.o(arguments[0], arguments[1], new I(c.slice(2), 0, null));
  }
};
Xc.a = function(a) {
  return a;
};
Xc.b = function(a, b) {
  return null == a ? null : qb(a, b);
};
Xc.o = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Xc.b(a, b);
    if (t(c)) {
      b = J(c), c = L(c);
    } else {
      return a;
    }
  }
};
Xc.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Xc.o(b, a, c);
};
Xc.A = 2;
function Zc(a) {
  var b = ca(a);
  return b ? b : null != a ? p === a.Zb ? !0 : a.Gc ? !1 : u(cb, a) : u(cb, a);
}
function $c(a, b) {
  this.g = a;
  this.m = b;
  this.i = 393217;
  this.F = 0;
}
g = $c.prototype;
g.N = function() {
  return this.m;
};
g.R = function(a, b) {
  return new $c(this.g, b);
};
g.Zb = p;
g.call = function() {
  function a(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y, ta) {
    a = this;
    return ad.ub ? ad.ub(a.g, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y, ta) : ad.call(null, a.g, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y, ta);
  }
  function b(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y) {
    a = this;
    return a.g.Ja ? a.g.Ja(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D, Y);
  }
  function c(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D) {
    a = this;
    return a.g.Ia ? a.g.Ia(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, D);
  }
  function d(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) {
    a = this;
    return a.g.Ha ? a.g.Ha(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R);
  }
  function e(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) {
    a = this;
    return a.g.Ga ? a.g.Ga(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H);
  }
  function f(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) {
    a = this;
    return a.g.Fa ? a.g.Fa(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E);
  }
  function h(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B) {
    a = this;
    return a.g.Ea ? a.g.Ea(b, c, d, e, f, h, k, l, m, q, r, v, x, y, B) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B);
  }
  function k(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y) {
    a = this;
    return a.g.Da ? a.g.Da(b, c, d, e, f, h, k, l, m, q, r, v, x, y) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x, y);
  }
  function l(a, b, c, d, e, f, h, k, l, m, q, r, v, x) {
    a = this;
    return a.g.Ca ? a.g.Ca(b, c, d, e, f, h, k, l, m, q, r, v, x) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v, x);
  }
  function m(a, b, c, d, e, f, h, k, l, m, q, r, v) {
    a = this;
    return a.g.Ba ? a.g.Ba(b, c, d, e, f, h, k, l, m, q, r, v) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r, v);
  }
  function q(a, b, c, d, e, f, h, k, l, m, q, r) {
    a = this;
    return a.g.Aa ? a.g.Aa(b, c, d, e, f, h, k, l, m, q, r) : a.g.call(null, b, c, d, e, f, h, k, l, m, q, r);
  }
  function r(a, b, c, d, e, f, h, k, l, m, q) {
    a = this;
    return a.g.za ? a.g.za(b, c, d, e, f, h, k, l, m, q) : a.g.call(null, b, c, d, e, f, h, k, l, m, q);
  }
  function v(a, b, c, d, e, f, h, k, l, m) {
    a = this;
    return a.g.Ma ? a.g.Ma(b, c, d, e, f, h, k, l, m) : a.g.call(null, b, c, d, e, f, h, k, l, m);
  }
  function x(a, b, c, d, e, f, h, k, l) {
    a = this;
    return a.g.La ? a.g.La(b, c, d, e, f, h, k, l) : a.g.call(null, b, c, d, e, f, h, k, l);
  }
  function y(a, b, c, d, e, f, h, k) {
    a = this;
    return a.g.Ka ? a.g.Ka(b, c, d, e, f, h, k) : a.g.call(null, b, c, d, e, f, h, k);
  }
  function B(a, b, c, d, e, f, h) {
    a = this;
    return a.g.ma ? a.g.ma(b, c, d, e, f, h) : a.g.call(null, b, c, d, e, f, h);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.g.I ? a.g.I(b, c, d, e, f) : a.g.call(null, b, c, d, e, f);
  }
  function H(a, b, c, d, e) {
    a = this;
    return a.g.D ? a.g.D(b, c, d, e) : a.g.call(null, b, c, d, e);
  }
  function R(a, b, c, d) {
    a = this;
    return a.g.f ? a.g.f(b, c, d) : a.g.call(null, b, c, d);
  }
  function Y(a, b, c) {
    a = this;
    return a.g.b ? a.g.b(b, c) : a.g.call(null, b, c);
  }
  function ta(a, b) {
    a = this;
    return a.g.a ? a.g.a(b) : a.g.call(null, b);
  }
  function Nb(a) {
    a = this;
    return a.g.v ? a.g.v() : a.g.call(null);
  }
  var D = null, D = function(D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc, Od, Ce, Yf, Ch) {
    switch(arguments.length) {
      case 1:
        return Nb.call(this, D);
      case 2:
        return ta.call(this, D, ga);
      case 3:
        return Y.call(this, D, ga, ja);
      case 4:
        return R.call(this, D, ga, ja, ma);
      case 5:
        return H.call(this, D, ga, ja, ma, sa);
      case 6:
        return E.call(this, D, ga, ja, ma, sa, xa);
      case 7:
        return B.call(this, D, ga, ja, ma, sa, xa, Ca);
      case 8:
        return y.call(this, D, ga, ja, ma, sa, xa, Ca, Ha);
      case 9:
        return x.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na);
      case 10:
        return v.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa);
      case 11:
        return r.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a);
      case 12:
        return q.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb);
      case 13:
        return m.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb);
      case 14:
        return l.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab);
      case 15:
        return k.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb);
      case 16:
        return h.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc);
      case 17:
        return f.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc);
      case 18:
        return e.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc);
      case 19:
        return d.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc, Od);
      case 20:
        return c.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc, Od, Ce);
      case 21:
        return b.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc, Od, Ce, Yf);
      case 22:
        return a.call(this, D, ga, ja, ma, sa, xa, Ca, Ha, Na, Sa, $a, jb, rb, Ab, Mb, fc, tc, Yc, Od, Ce, Yf, Ch);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = Nb;
  D.b = ta;
  D.f = Y;
  D.D = R;
  D.I = H;
  D.ma = E;
  D.Ka = B;
  D.La = y;
  D.Ma = x;
  D.za = v;
  D.Aa = r;
  D.Ba = q;
  D.Ca = m;
  D.Da = l;
  D.Ea = k;
  D.Fa = h;
  D.Ga = f;
  D.Ha = e;
  D.Ia = d;
  D.Ja = c;
  D.bc = b;
  D.ub = a;
  return D;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.v = function() {
  return this.g.v ? this.g.v() : this.g.call(null);
};
g.a = function(a) {
  return this.g.a ? this.g.a(a) : this.g.call(null, a);
};
g.b = function(a, b) {
  return this.g.b ? this.g.b(a, b) : this.g.call(null, a, b);
};
g.f = function(a, b, c) {
  return this.g.f ? this.g.f(a, b, c) : this.g.call(null, a, b, c);
};
g.D = function(a, b, c, d) {
  return this.g.D ? this.g.D(a, b, c, d) : this.g.call(null, a, b, c, d);
};
g.I = function(a, b, c, d, e) {
  return this.g.I ? this.g.I(a, b, c, d, e) : this.g.call(null, a, b, c, d, e);
};
g.ma = function(a, b, c, d, e, f) {
  return this.g.ma ? this.g.ma(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f);
};
g.Ka = function(a, b, c, d, e, f, h) {
  return this.g.Ka ? this.g.Ka(a, b, c, d, e, f, h) : this.g.call(null, a, b, c, d, e, f, h);
};
g.La = function(a, b, c, d, e, f, h, k) {
  return this.g.La ? this.g.La(a, b, c, d, e, f, h, k) : this.g.call(null, a, b, c, d, e, f, h, k);
};
g.Ma = function(a, b, c, d, e, f, h, k, l) {
  return this.g.Ma ? this.g.Ma(a, b, c, d, e, f, h, k, l) : this.g.call(null, a, b, c, d, e, f, h, k, l);
};
g.za = function(a, b, c, d, e, f, h, k, l, m) {
  return this.g.za ? this.g.za(a, b, c, d, e, f, h, k, l, m) : this.g.call(null, a, b, c, d, e, f, h, k, l, m);
};
g.Aa = function(a, b, c, d, e, f, h, k, l, m, q) {
  return this.g.Aa ? this.g.Aa(a, b, c, d, e, f, h, k, l, m, q) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q);
};
g.Ba = function(a, b, c, d, e, f, h, k, l, m, q, r) {
  return this.g.Ba ? this.g.Ba(a, b, c, d, e, f, h, k, l, m, q, r) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r);
};
g.Ca = function(a, b, c, d, e, f, h, k, l, m, q, r, v) {
  return this.g.Ca ? this.g.Ca(a, b, c, d, e, f, h, k, l, m, q, r, v) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v);
};
g.Da = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x) {
  return this.g.Da ? this.g.Da(a, b, c, d, e, f, h, k, l, m, q, r, v, x) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x);
};
g.Ea = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y) {
  return this.g.Ea ? this.g.Ea(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y);
};
g.Fa = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B) {
  return this.g.Fa ? this.g.Fa(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B);
};
g.Ga = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) {
  return this.g.Ga ? this.g.Ga(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E);
};
g.Ha = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) {
  return this.g.Ha ? this.g.Ha(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H);
};
g.Ia = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) {
  return this.g.Ia ? this.g.Ia(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R);
};
g.Ja = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y) {
  return this.g.Ja ? this.g.Ja(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y) : this.g.call(null, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y);
};
g.bc = function(a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta) {
  return ad.ub ? ad.ub(this.g, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta) : ad.call(null, this.g, a, b, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta);
};
function Pc(a, b) {
  return ca(a) ? new $c(a, b) : null == a ? null : Db(a, b);
}
function bd(a) {
  var b = null != a;
  return (b ? null != a ? a.i & 131072 || p === a.fc || (a.i ? 0 : u(Bb, a)) : u(Bb, a) : b) ? Cb(a) : null;
}
function cd(a) {
  return null == a ? !1 : null != a ? a.i & 4096 || p === a.Ec ? !0 : a.i ? !1 : u(vb, a) : u(vb, a);
}
function dd(a) {
  return null != a ? a.i & 16777216 || p === a.Dc ? !0 : a.i ? !1 : u(Kb, a) : u(Kb, a);
}
function ed(a) {
  return null == a ? !1 : null != a ? a.i & 1024 || p === a.dc ? !0 : a.i ? !1 : u(pb, a) : u(pb, a);
}
function fd(a) {
  return null != a ? a.i & 16384 || p === a.Fc ? !0 : a.i ? !1 : u(xb, a) : u(xb, a);
}
function gd(a) {
  return null != a ? a.F & 512 || p === a.yc ? !0 : !1 : !1;
}
function hd(a) {
  var b = [];
  ia(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function id(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var jd = {};
function kd(a) {
  return null == a ? !1 : !1 === a ? !1 : !0;
}
function ld(a, b) {
  return F.f(a, b, jd) === jd ? !1 : !0;
}
function md(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return -1;
  }
  if (null == b) {
    return 1;
  }
  if ("number" === typeof a) {
    if ("number" === typeof b) {
      return Ea(a, b);
    }
    throw Error([z.a("Cannot compare "), z.a(a), z.a(" to "), z.a(b)].join(""));
  }
  if (null != a ? a.F & 2048 || p === a.gb || (a.F ? 0 : u(Vb, a)) : u(Vb, a)) {
    return Wb(a, b);
  }
  if ("string" !== typeof a && !Xa(a) && !0 !== a && !1 !== a || (null == a ? null : a.constructor) !== (null == b ? null : b.constructor)) {
    throw Error([z.a("Cannot compare "), z.a(a), z.a(" to "), z.a(b)].join(""));
  }
  return Ea(a, b);
}
function nd(a, b) {
  var c = O(a), d = O(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = md(Ic(a, d), Ic(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function od() {
  return M.b(md, md) ? md : function(a, b) {
    var c = md.b ? md.b(a, b) : md.call(null, a, b);
    return "number" === typeof c ? c : t(c) ? -1 : t(md.b ? md.b(b, a) : md.call(null, b, a)) ? 1 : 0;
  };
}
function pd(a) {
  if (G(a)) {
    a = qd.a ? qd.a(a) : qd.call(null, a);
    var b = od();
    Fa(a, b);
    return G(a);
  }
  return K;
}
function Rc(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Qc(arguments[0], arguments[1]);
    case 3:
      return Sc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function Qc(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = L(c);
    return rd ? rd(a, d, c) : sd.call(null, a, d, c);
  }
  return a.v ? a.v() : a.call(null);
}
function Sc(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = L(c);
    } else {
      return b;
    }
  }
}
function sd(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return td(arguments[0], arguments[1]);
    case 3:
      return rd(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function td(a, b) {
  return null != b && (b.i & 524288 || p === b.hc) ? b.Y(null, a) : Xa(b) ? Dc(b, a) : "string" === typeof b ? Dc(b, a) : u(Eb, b) ? Fb.b(b, a) : Qc(a, b);
}
function rd(a, b, c) {
  return null != c && (c.i & 524288 || p === c.hc) ? c.Z(null, a, b) : Xa(c) ? Ec(c, a, b) : "string" === typeof c ? Ec(c, a, b) : u(Eb, c) ? Fb.f(c, a, b) : Sc(a, b, c);
}
function ud(a) {
  return a;
}
function vd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function wd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var z = function z(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return z.v();
    case 1:
      return z.a(arguments[0]);
    default:
      return z.o(arguments[0], new I(c.slice(1), 0, null));
  }
};
z.v = function() {
  return "";
};
z.a = function(a) {
  return null == a ? "" : "" + a;
};
z.o = function(a, b) {
  for (var c = new Aa("" + z.a(a)), d = b;;) {
    if (t(d)) {
      c = c.append("" + z.a(J(d))), d = L(d);
    } else {
      return c.toString();
    }
  }
};
z.w = function(a) {
  var b = J(a);
  a = L(a);
  return z.o(b, a);
};
z.A = 1;
function Mc(a, b) {
  var c;
  if (dd(b)) {
    if (Gc(a) && Gc(b) && O(a) !== O(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && M.b(J(c), J(d))) {
            c = L(c), d = L(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return kd(c);
}
function xd(a, b, c, d, e) {
  this.m = a;
  this.first = b;
  this.Pa = c;
  this.count = d;
  this.s = e;
  this.i = 65937646;
  this.F = 8192;
}
g = xd.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, this.count);
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  return 1 === this.count ? null : this.Pa;
};
g.S = function() {
  return this.count;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Db(K, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return this.first;
};
g.ia = function() {
  return 1 === this.count ? K : this.Pa;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new xd(b, this.first, this.Pa, this.count, this.s);
};
g.T = function(a, b) {
  return new xd(this.m, b, this, this.count + 1, null);
};
xd.prototype[ab] = function() {
  return uc(this);
};
function yd(a) {
  this.m = a;
  this.i = 65937614;
  this.F = 8192;
}
g = yd.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  return null;
};
g.S = function() {
  return 0;
};
g.L = function() {
  return xc;
};
g.u = function(a, b) {
  return (null != b ? b.i & 33554432 || p === b.Bc || (b.i ? 0 : u(Lb, b)) : u(Lb, b)) || dd(b) ? null == G(b) : !1;
};
g.X = function() {
  return this;
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return null;
};
g.ia = function() {
  return K;
};
g.O = function() {
  return null;
};
g.R = function(a, b) {
  return new yd(b);
};
g.T = function(a, b) {
  return new xd(this.m, b, null, 1, null);
};
var K = new yd(null);
yd.prototype[ab] = function() {
  return uc(this);
};
function zd(a) {
  return (null != a ? a.i & 134217728 || p === a.Cc || (a.i ? 0 : u(Ob, a)) : u(Ob, a)) ? Pb(a) : rd(Tc, K, a);
}
function Ad(a, b, c, d) {
  this.m = a;
  this.first = b;
  this.Pa = c;
  this.s = d;
  this.i = 65929452;
  this.F = 8192;
}
g = Ad.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  return null == this.Pa ? null : G(this.Pa);
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return this.first;
};
g.ia = function() {
  return null == this.Pa ? K : this.Pa;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Ad(b, this.first, this.Pa, this.s);
};
g.T = function(a, b) {
  return new Ad(null, b, this, null);
};
Ad.prototype[ab] = function() {
  return uc(this);
};
function Q(a, b) {
  var c = null == b;
  return (c ? c : null != b && (b.i & 64 || p === b.hb)) ? new Ad(null, a, b, null) : new Ad(null, a, G(b), null);
}
function Bd(a, b) {
  if (a.ua === b.ua) {
    return 0;
  }
  var c = Ya(a.ca);
  if (t(c ? b.ca : c)) {
    return -1;
  }
  if (t(a.ca)) {
    if (Ya(b.ca)) {
      return 1;
    }
    c = Ea(a.ca, b.ca);
    return 0 === c ? Ea(a.name, b.name) : c;
  }
  return Ea(a.name, b.name);
}
function U(a, b, c, d) {
  this.ca = a;
  this.name = b;
  this.ua = c;
  this.$a = d;
  this.i = 2153775105;
  this.F = 4096;
}
g = U.prototype;
g.toString = function() {
  return [z.a(":"), z.a(this.ua)].join("");
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return b instanceof U ? this.ua === b.ua : !1;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return F.b(c, this);
      case 3:
        return F.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return F.b(c, this);
  };
  a.f = function(a, c, d) {
    return F.f(c, this, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return F.b(a, this);
};
g.b = function(a, b) {
  return F.f(a, this, b);
};
g.L = function() {
  var a = this.$a;
  return null != a ? a : this.$a = a = oc(jc(this.name), mc(this.ca)) + 2654435769 | 0;
};
g.P = function(a, b) {
  return C(b, [z.a(":"), z.a(this.ua)].join(""));
};
var Cd = function Cd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return Cd.a(arguments[0]);
    case 2:
      return Cd.b(arguments[0], arguments[1]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
Cd.a = function(a) {
  if (a instanceof U) {
    return a;
  }
  if (a instanceof qc) {
    var b;
    if (null != a && (a.F & 4096 || p === a.gc)) {
      b = a.ca;
    } else {
      throw Error([z.a("Doesn't support namespace: "), z.a(a)].join(""));
    }
    return new U(b, Dd.a ? Dd.a(a) : Dd.call(null, a), a.wa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
};
Cd.b = function(a, b) {
  var c = a instanceof U ? Dd.a ? Dd.a(a) : Dd.call(null, a) : a instanceof qc ? Dd.a ? Dd.a(a) : Dd.call(null, a) : a, d = b instanceof U ? Dd.a ? Dd.a(b) : Dd.call(null, b) : b instanceof qc ? Dd.a ? Dd.a(b) : Dd.call(null, b) : b;
  return new U(c, d, [z.a(t(c) ? [z.a(c), z.a("/")].join("") : null), z.a(d)].join(""), null);
};
Cd.A = 2;
function Ed(a, b, c, d) {
  this.m = a;
  this.eb = b;
  this.B = c;
  this.s = d;
  this.i = 32374988;
  this.F = 1;
}
g = Ed.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
function Fd(a) {
  null != a.eb && (a.B = a.eb.v ? a.eb.v() : a.eb.call(null), a.eb = null);
  return a.B;
}
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  this.O(null);
  return null == this.B ? null : L(this.B);
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  this.O(null);
  return null == this.B ? null : J(this.B);
};
g.ia = function() {
  this.O(null);
  return null != this.B ? rc(this.B) : K;
};
g.O = function() {
  Fd(this);
  if (null == this.B) {
    return null;
  }
  for (var a = this.B;;) {
    if (a instanceof Ed) {
      a = Fd(a);
    } else {
      return this.B = a, G(this.B);
    }
  }
};
g.R = function(a, b) {
  return new Ed(b, this.eb, this.B, this.s);
};
g.T = function(a, b) {
  return Q(b, this);
};
Ed.prototype[ab] = function() {
  return uc(this);
};
function Gd(a, b) {
  this.Ab = a;
  this.end = b;
  this.i = 2;
  this.F = 0;
}
Gd.prototype.add = function(a) {
  this.Ab[this.end] = a;
  return this.end += 1;
};
Gd.prototype.la = function() {
  var a = new Hd(this.Ab, 0, this.end);
  this.Ab = null;
  return a;
};
Gd.prototype.S = function() {
  return this.end;
};
function Hd(a, b, c) {
  this.c = a;
  this.U = b;
  this.end = c;
  this.i = 524306;
  this.F = 0;
}
g = Hd.prototype;
g.S = function() {
  return this.end - this.U;
};
g.K = function(a, b) {
  return this.c[this.U + b];
};
g.ea = function(a, b, c) {
  return 0 <= b && b < this.end - this.U ? this.c[this.U + b] : c;
};
g.Mb = function() {
  if (this.U === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Hd(this.c, this.U + 1, this.end);
};
g.Y = function(a, b) {
  return Fc(this.c, b, this.c[this.U], this.U + 1);
};
g.Z = function(a, b, c) {
  return Fc(this.c, b, c, this.U);
};
function Id(a, b, c, d) {
  this.la = a;
  this.va = b;
  this.m = c;
  this.s = d;
  this.i = 31850732;
  this.F = 1536;
}
g = Id.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  if (1 < eb(this.la)) {
    return new Id(Xb(this.la), this.va, this.m, null);
  }
  var a = Jb(this.va);
  return null == a ? null : a;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.m);
};
g.$ = function() {
  return A.b(this.la, 0);
};
g.ia = function() {
  return 1 < eb(this.la) ? new Id(Xb(this.la), this.va, this.m, null) : null == this.va ? K : this.va;
};
g.O = function() {
  return this;
};
g.Db = function() {
  return this.la;
};
g.tb = function() {
  return null == this.va ? K : this.va;
};
g.R = function(a, b) {
  return new Id(this.la, this.va, b, this.s);
};
g.T = function(a, b) {
  return Q(b, this);
};
g.Nb = function() {
  return null == this.va ? null : this.va;
};
Id.prototype[ab] = function() {
  return uc(this);
};
function Jd(a, b) {
  return 0 === eb(a) ? b : new Id(a, b, null, null);
}
function Kd(a, b) {
  a.add(b);
}
function qd(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function Ld(a, b) {
  if (Gc(b)) {
    return O(b);
  }
  for (var c = 0, d = G(b);;) {
    if (null != d && c < a) {
      c += 1, d = L(d);
    } else {
      return c;
    }
  }
}
var Md = function Md(b) {
  var c;
  if (null == b) {
    c = null;
  } else {
    if (null == L(b)) {
      c = G(J(b));
    } else {
      c = Q;
      var d = J(b);
      b = L(b);
      b = Md.a ? Md.a(b) : Md.call(null, b);
      c = c(d, b);
    }
  }
  return c;
}, Nd = function Nd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Nd.v();
    case 1:
      return Nd.a(arguments[0]);
    case 2:
      return Nd.b(arguments[0], arguments[1]);
    default:
      return Nd.o(arguments[0], arguments[1], new I(c.slice(2), 0, null));
  }
};
Nd.v = function() {
  return new Ed(null, function() {
    return null;
  }, null, null);
};
Nd.a = function(a) {
  return new Ed(null, function() {
    return a;
  }, null, null);
};
Nd.b = function(a, b) {
  return new Ed(null, function() {
    var c = G(a);
    return c ? gd(c) ? Jd(Yb(c), Nd.b(Zb(c), b)) : Q(J(c), Nd.b(rc(c), b)) : b;
  }, null, null);
};
Nd.o = function(a, b, c) {
  return function e(a, b) {
    return new Ed(null, function() {
      var c = G(a);
      return c ? gd(c) ? Jd(Yb(c), e(Zb(c), b)) : Q(J(c), e(rc(c), b)) : t(b) ? e(J(b), L(b)) : null;
    }, null, null);
  }(Nd.b(a, b), c);
};
Nd.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Nd.o(b, a, c);
};
Nd.A = 2;
var Pd = function Pd(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return Pd.v();
    case 1:
      return Pd.a(arguments[0]);
    case 2:
      return Pd.b(arguments[0], arguments[1]);
    default:
      return Pd.o(arguments[0], arguments[1], new I(c.slice(2), 0, null));
  }
};
Pd.v = function() {
  return Rb(Uc);
};
Pd.a = function(a) {
  return a;
};
Pd.b = function(a, b) {
  return Sb(a, b);
};
Pd.o = function(a, b, c) {
  for (;;) {
    if (a = Sb(a, b), t(c)) {
      b = J(c), c = L(c);
    } else {
      return a;
    }
  }
};
Pd.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  c = L(c);
  return Pd.o(b, a, c);
};
Pd.A = 2;
function Qd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.v ? a.v() : a.call(null);
  }
  c = hb(d);
  var e = ib(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = hb(e), f = ib(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = hb(f), h = ib(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = hb(h), k = ib(h);
  if (4 === b) {
    return a.D ? a.D(c, d, e, f) : a.D ? a.D(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = hb(k), l = ib(k);
  if (5 === b) {
    return a.I ? a.I(c, d, e, f, h) : a.I ? a.I(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = hb(l), m = ib(l);
  if (6 === b) {
    return a.ma ? a.ma(c, d, e, f, h, k) : a.ma ? a.ma(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = hb(m), q = ib(m);
  if (7 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l) : a.Ka ? a.Ka(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var m = hb(q), r = ib(q);
  if (8 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, m) : a.La ? a.La(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
  }
  var q = hb(r), v = ib(r);
  if (9 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l, m, q) : a.Ma ? a.Ma(c, d, e, f, h, k, l, m, q) : a.call(null, c, d, e, f, h, k, l, m, q);
  }
  var r = hb(v), x = ib(v);
  if (10 === b) {
    return a.za ? a.za(c, d, e, f, h, k, l, m, q, r) : a.za ? a.za(c, d, e, f, h, k, l, m, q, r) : a.call(null, c, d, e, f, h, k, l, m, q, r);
  }
  var v = hb(x), y = ib(x);
  if (11 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, q, r, v) : a.Aa ? a.Aa(c, d, e, f, h, k, l, m, q, r, v) : a.call(null, c, d, e, f, h, k, l, m, q, r, v);
  }
  var x = hb(y), B = ib(y);
  if (12 === b) {
    return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, q, r, v, x) : a.Ba ? a.Ba(c, d, e, f, h, k, l, m, q, r, v, x) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x);
  }
  var y = hb(B), E = ib(B);
  if (13 === b) {
    return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, q, r, v, x, y) : a.Ca ? a.Ca(c, d, e, f, h, k, l, m, q, r, v, x, y) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y);
  }
  var B = hb(E), H = ib(E);
  if (14 === b) {
    return a.Da ? a.Da(c, d, e, f, h, k, l, m, q, r, v, x, y, B) : a.Da ? a.Da(c, d, e, f, h, k, l, m, q, r, v, x, y, B) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B);
  }
  var E = hb(H), R = ib(H);
  if (15 === b) {
    return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) : a.Ea ? a.Ea(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E);
  }
  var H = hb(R), Y = ib(R);
  if (16 === b) {
    return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) : a.Fa ? a.Fa(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H);
  }
  var R = hb(Y), ta = ib(Y);
  if (17 === b) {
    return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) : a.Ga ? a.Ga(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R);
  }
  var Y = hb(ta), Nb = ib(ta);
  if (18 === b) {
    return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y) : a.Ha ? a.Ha(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y);
  }
  ta = hb(Nb);
  Nb = ib(Nb);
  if (19 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta) : a.Ia ? a.Ia(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta);
  }
  var D = hb(Nb);
  ib(Nb);
  if (20 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta, D) : a.Ja ? a.Ja(c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta, D) : a.call(null, c, d, e, f, h, k, l, m, q, r, v, x, y, B, E, H, R, Y, ta, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function ad(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return Rd(arguments[0], arguments[1]);
    case 3:
      return Sd(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Td(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ud(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Vd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(b.slice(5), 0, null));
  }
}
function Rd(a, b) {
  var c = a.A;
  if (a.w) {
    var d = Ld(c + 1, b);
    return d <= c ? Qd(a, d, b) : a.w(b);
  }
  return a.apply(a, qd(b));
}
function Sd(a, b, c) {
  b = Q(b, c);
  c = a.A;
  if (a.w) {
    var d = Ld(c + 1, b);
    return d <= c ? Qd(a, d, b) : a.w(b);
  }
  return a.apply(a, qd(b));
}
function Td(a, b, c, d) {
  b = Q(b, Q(c, d));
  c = a.A;
  return a.w ? (d = Ld(c + 1, b), d <= c ? Qd(a, d, b) : a.w(b)) : a.apply(a, qd(b));
}
function Ud(a, b, c, d, e) {
  b = Q(b, Q(c, Q(d, e)));
  c = a.A;
  return a.w ? (d = Ld(c + 1, b), d <= c ? Qd(a, d, b) : a.w(b)) : a.apply(a, qd(b));
}
function Vd(a, b, c, d, e, f) {
  b = Q(b, Q(c, Q(d, Q(e, Md(f)))));
  c = a.A;
  return a.w ? (d = Ld(c + 1, b), d <= c ? Qd(a, d, b) : a.w(b)) : a.apply(a, qd(b));
}
function Wd() {
  "undefined" === typeof Ia && (Ia = function(a) {
    this.rc = a;
    this.i = 393216;
    this.F = 0;
  }, Ia.prototype.R = function(a, b) {
    return new Ia(b);
  }, Ia.prototype.N = function() {
    return this.rc;
  }, Ia.prototype.ja = function() {
    return !1;
  }, Ia.prototype.next = function() {
    return Error("No such element");
  }, Ia.prototype.remove = function() {
    return Error("Unsupported operation");
  }, Ia.Hc = function() {
    return new V(null, 1, 5, W, [Xd], null);
  }, Ia.Sb = !0, Ia.xb = "cljs.core/t_cljs$core10849", Ia.oc = function(a) {
    return C(a, "cljs.core/t_cljs$core10849");
  });
  return new Ia(Yd);
}
function Zd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return !0;
    }
    var c;
    c = J(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (t(c)) {
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function $d(a, b) {
  for (;;) {
    if (G(b)) {
      var c;
      c = J(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (t(c)) {
        return c;
      }
      c = a;
      var d = L(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function ae(a) {
  return function() {
    function b(b, c) {
      return Ya(a.b ? a.b(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return Ya(a.a ? a.a(b) : a.call(null, b));
    }
    function d() {
      return Ya(a.v ? a.v() : a.call(null));
    }
    var e = null, f = function() {
      function b(a, b, d) {
        var e = null;
        if (2 < arguments.length) {
          for (var e = 0, f = Array(arguments.length - 2);e < f.length;) {
            f[e] = arguments[e + 2], ++e;
          }
          e = new I(f, 0);
        }
        return c.call(this, a, b, e);
      }
      function c(b, c, d) {
        return Ya(Td(a, b, c, d));
      }
      b.A = 2;
      b.w = function(a) {
        var b = J(a);
        a = L(a);
        var d = J(a);
        a = rc(a);
        return c(b, d, a);
      };
      b.o = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var h = null;
          if (2 < arguments.length) {
            for (var h = 0, k = Array(arguments.length - 2);h < k.length;) {
              k[h] = arguments[h + 2], ++h;
            }
            h = new I(k, 0);
          }
          return f.o(a, e, h);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.A = 2;
    e.w = f.w;
    e.v = d;
    e.a = c;
    e.b = b;
    e.o = f.o;
    return e;
  }();
}
var be = function be(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 0:
      return be.v();
    case 1:
      return be.a(arguments[0]);
    case 2:
      return be.b(arguments[0], arguments[1]);
    case 3:
      return be.f(arguments[0], arguments[1], arguments[2]);
    default:
      return be.o(arguments[0], arguments[1], arguments[2], new I(c.slice(3), 0, null));
  }
};
be.v = function() {
  return ud;
};
be.a = function(a) {
  return a;
};
be.b = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.f ? b.f(c, d, e) : b.call(null, c, d, e);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.b ? b.b(c, d) : b.call(null, c, d);
      return a.a ? a.a(e) : a.call(null, e);
    }
    function e(c) {
      c = b.a ? b.a(c) : b.call(null, c);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function f() {
      var c = b.v ? b.v() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, c, e) {
        var f = null;
        if (3 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 3);f < h.length;) {
            h[f] = arguments[f + 3], ++f;
          }
          f = new I(h, 0);
        }
        return d.call(this, a, b, c, f);
      }
      function d(c, d, e, f) {
        c = Ud(b, c, d, e, f);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.A = 3;
      c.w = function(a) {
        var b = J(a);
        a = L(a);
        var c = J(a);
        a = L(a);
        var e = J(a);
        a = rc(a);
        return d(b, c, e, a);
      };
      c.o = d;
      return c;
    }(), h = function(a, b, h, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var l = null;
          if (3 < arguments.length) {
            for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
              m[l] = arguments[l + 3], ++l;
            }
            l = new I(m, 0);
          }
          return k.o(a, b, h, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.A = 3;
    h.w = k.w;
    h.v = f;
    h.a = e;
    h.b = d;
    h.f = c;
    h.o = k.o;
    return h;
  }();
};
be.f = function(a, b, c) {
  return function() {
    function d(d, e, f) {
      d = c.f ? c.f(d, e, f) : c.call(null, d, e, f);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.b ? c.b(d, e) : c.call(null, d, e);
      f = b.a ? b.a(f) : b.call(null, f);
      return a.a ? a.a(f) : a.call(null, f);
    }
    function f(d) {
      d = c.a ? c.a(d) : c.call(null, d);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.v ? c.v() : c.call(null);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, d) {
        var f = null;
        if (3 < arguments.length) {
          for (var f = 0, h = Array(arguments.length - 3);f < h.length;) {
            h[f] = arguments[f + 3], ++f;
          }
          f = new I(h, 0);
        }
        return e.call(this, a, b, c, f);
      }
      function e(d, e, f, h) {
        d = Ud(c, d, e, f, h);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      d.A = 3;
      d.w = function(a) {
        var b = J(a);
        a = L(a);
        var c = J(a);
        a = L(a);
        var d = J(a);
        a = rc(a);
        return e(b, c, d, a);
      };
      d.o = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var m = null;
          if (3 < arguments.length) {
            for (var m = 0, q = Array(arguments.length - 3);m < q.length;) {
              q[m] = arguments[m + 3], ++m;
            }
            m = new I(q, 0);
          }
          return l.o(a, b, c, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.A = 3;
    k.w = l.w;
    k.v = h;
    k.a = f;
    k.b = e;
    k.f = d;
    k.o = l.o;
    return k;
  }();
};
be.o = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var b = null;
        if (0 < arguments.length) {
          for (var b = 0, d = Array(arguments.length - 0);b < d.length;) {
            d[b] = arguments[b + 0], ++b;
          }
          b = new I(d, 0);
        }
        return c.call(this, b);
      }
      function c(b) {
        b = Rd(J(a), b);
        for (var c = L(a);;) {
          if (c) {
            b = J(c).call(null, b), c = L(c);
          } else {
            return b;
          }
        }
      }
      b.A = 0;
      b.w = function(a) {
        a = G(a);
        return c(a);
      };
      b.o = c;
      return b;
    }();
  }(zd(Q(a, Q(b, Q(c, d)))));
};
be.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), d = L(d);
  return be.o(b, a, c, d);
};
be.A = 3;
function ce(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.xc = c;
  this.Yb = d;
  this.F = 16386;
  this.i = 6455296;
}
g = ce.prototype;
g.equiv = function(a) {
  return this.u(null, a);
};
g.u = function(a, b) {
  return this === b;
};
g.ac = function() {
  return this.state;
};
g.N = function() {
  return this.m;
};
g.Qb = function(a, b, c) {
  a = G(this.Yb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.K(null, f), k = S(h, 0, null), h = S(h, 1, null);
      h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = G(a)) {
        gd(a) ? (d = Yb(a), a = Zb(a), k = d, e = O(d), d = k) : (d = J(a), k = S(d, 0, null), h = S(d, 1, null), h.D ? h.D(k, this, b, c) : h.call(null, k, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.L = function() {
  return this[da] || (this[da] = ++ea);
};
function de(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return ee(arguments[0]);
    default:
      return c = arguments[0], b = new I(b.slice(1), 0, null), d = null != b && (b.i & 64 || p === b.hb) ? Rd(fe, b) : b, b = F.b(d, Ta), d = F.b(d, ge), new ce(c, b, d, null);
  }
}
function ee(a) {
  return new ce(a, null, null, null);
}
function he(a, b) {
  if (a instanceof ce) {
    var c = a.xc;
    if (null != c && !t(c.a ? c.a(b) : c.call(null, b))) {
      throw Error("Validator rejected reference state");
    }
    c = a.state;
    a.state = b;
    null != a.Yb && Qb(a, c, b);
    return b;
  }
  return $b(a, b);
}
var ie = function ie(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return ie.b(arguments[0], arguments[1]);
    case 3:
      return ie.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ie.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ie.o(arguments[0], arguments[1], arguments[2], arguments[3], new I(c.slice(4), 0, null));
  }
};
ie.b = function(a, b) {
  var c;
  a instanceof ce ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = he(a, c)) : c = ac.b(a, b);
  return c;
};
ie.f = function(a, b, c) {
  if (a instanceof ce) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = he(a, b);
  } else {
    a = ac.f(a, b, c);
  }
  return a;
};
ie.D = function(a, b, c, d) {
  if (a instanceof ce) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = he(a, b);
  } else {
    a = ac.D(a, b, c, d);
  }
  return a;
};
ie.o = function(a, b, c, d, e) {
  return a instanceof ce ? he(a, Ud(b, a.state, c, d, e)) : ac.I(a, b, c, d, e);
};
ie.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), e = L(e);
  return ie.o(b, a, c, d, e);
};
ie.A = 4;
var je = function je(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return je.a(arguments[0]);
    case 2:
      return je.b(arguments[0], arguments[1]);
    case 3:
      return je.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return je.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return je.o(arguments[0], arguments[1], arguments[2], arguments[3], new I(c.slice(4), 0, null));
  }
};
je.a = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.a ? a.a(d) : a.call(null, d);
        return b.b ? b.b(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      function e() {
        return b.v ? b.v() : b.call(null);
      }
      var f = null, h = function() {
        function c(a, b, c) {
          var e = null;
          if (2 < arguments.length) {
            for (var e = 0, f = Array(arguments.length - 2);e < f.length;) {
              f[e] = arguments[e + 2], ++e;
            }
            e = new I(f, 0);
          }
          return d.call(this, a, b, e);
        }
        function d(c, d, e) {
          d = Sd(a, d, e);
          return b.b ? b.b(c, d) : b.call(null, c, d);
        }
        c.A = 2;
        c.w = function(a) {
          var b = J(a);
          a = L(a);
          var c = J(a);
          a = rc(a);
          return d(b, c, a);
        };
        c.o = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var k = null;
            if (2 < arguments.length) {
              for (var k = 0, l = Array(arguments.length - 2);k < l.length;) {
                l[k] = arguments[k + 2], ++k;
              }
              k = new I(l, 0);
            }
            return h.o(a, b, k);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.A = 2;
      f.w = h.w;
      f.v = e;
      f.a = d;
      f.b = c;
      f.o = h.o;
      return f;
    }();
  };
};
je.b = function(a, b) {
  return new Ed(null, function() {
    var c = G(b);
    if (c) {
      if (gd(c)) {
        for (var d = Yb(c), e = O(d), f = new Gd(Array(e), 0), h = 0;;) {
          if (h < e) {
            Kd(f, function() {
              var b = A.b(d, h);
              return a.a ? a.a(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Jd(f.la(), je.b(a, Zb(c)));
      }
      return Q(function() {
        var b = J(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), je.b(a, rc(c)));
    }
    return null;
  }, null, null);
};
je.f = function(a, b, c) {
  return new Ed(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = Q, h;
      h = J(d);
      var k = J(e);
      h = a.b ? a.b(h, k) : a.call(null, h, k);
      d = f(h, je.f(a, rc(d), rc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
je.D = function(a, b, c, d) {
  return new Ed(null, function() {
    var e = G(b), f = G(c), h = G(d);
    if (e && f && h) {
      var k = Q, l;
      l = J(e);
      var m = J(f), q = J(h);
      l = a.f ? a.f(l, m, q) : a.call(null, l, m, q);
      e = k(l, je.D(a, rc(e), rc(f), rc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
je.o = function(a, b, c, d, e) {
  var f = function k(a) {
    return new Ed(null, function() {
      var b = je.b(G, a);
      return Zd(ud, b) ? Q(je.b(J, b), k(je.b(rc, b))) : null;
    }, null, null);
  };
  return je.b(function() {
    return function(b) {
      return Rd(a, b);
    };
  }(f), f(Tc.o(e, d, Oc([c, b], 0))));
};
je.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), e = L(e);
  return je.o(b, a, c, d, e);
};
je.A = 4;
function ke(a, b) {
  if ("number" !== typeof a) {
    throw Error("Assert failed: (number? n)");
  }
  return new Ed(null, function() {
    if (0 < a) {
      var c = G(b);
      return c ? Q(J(c), ke(a - 1, rc(c))) : null;
    }
    return null;
  }, null, null);
}
function le(a) {
  return new Ed(null, function() {
    return Q(a.v ? a.v() : a.call(null), le(a));
  }, null, null);
}
function me(a, b) {
  return new Ed(null, function() {
    var c = G(b);
    if (c) {
      if (gd(c)) {
        for (var d = Yb(c), e = O(d), f = new Gd(Array(e), 0), h = 0;;) {
          if (h < e) {
            var k;
            k = A.b(d, h);
            k = a.a ? a.a(k) : a.call(null, k);
            t(k) && Kd(f, A.b(d, h));
            h += 1;
          } else {
            break;
          }
        }
        return Jd(f.la(), me(a, Zb(c)));
      }
      d = J(c);
      c = rc(c);
      return t(a.a ? a.a(d) : a.call(null, d)) ? Q(d, me(a, c)) : me(a, c);
    }
    return null;
  }, null, null);
}
function ne(a, b) {
  return me(ae(a), b);
}
function oe(a, b) {
  return null != a ? null != a && (a.F & 4 || p === a.zc) ? Pc(Tb(rd(Sb, Rb(a), b)), bd(a)) : rd(fb, a, b) : rd(Tc, K, b);
}
var pe = function pe(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 3:
      return pe.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return pe.D(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return pe.I(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return pe.ma(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return pe.o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new I(c.slice(6), 0, null));
  }
};
pe.f = function(a, b, c) {
  b = G(b);
  var d = J(b);
  return (b = L(b)) ? T.f(a, d, pe.f(F.b(a, d), b, c)) : T.f(a, d, function() {
    var b = F.b(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
pe.D = function(a, b, c, d) {
  b = G(b);
  var e = J(b);
  return (b = L(b)) ? T.f(a, e, pe.D(F.b(a, e), b, c, d)) : T.f(a, e, function() {
    var b = F.b(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
pe.I = function(a, b, c, d, e) {
  b = G(b);
  var f = J(b);
  return (b = L(b)) ? T.f(a, f, pe.I(F.b(a, f), b, c, d, e)) : T.f(a, f, function() {
    var b = F.b(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
pe.ma = function(a, b, c, d, e, f) {
  b = G(b);
  var h = J(b);
  return (b = L(b)) ? T.f(a, h, pe.ma(F.b(a, h), b, c, d, e, f)) : T.f(a, h, function() {
    var b = F.b(a, h);
    return c.D ? c.D(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
pe.o = function(a, b, c, d, e, f, h) {
  var k = G(b);
  b = J(k);
  return (k = L(k)) ? T.f(a, b, Vd(pe, F.b(a, b), k, c, d, Oc([e, f, h], 0))) : T.f(a, b, Vd(c, F.b(a, b), d, e, f, Oc([h], 0)));
};
pe.w = function(a) {
  var b = J(a), c = L(a);
  a = J(c);
  var d = L(c), c = J(d), e = L(d), d = J(e), f = L(e), e = J(f), h = L(f), f = J(h), h = L(h);
  return pe.o(b, a, c, d, e, f, h);
};
pe.A = 6;
function qe(a, b, c) {
  return T.f(a, b, function() {
    var d = F.b(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
}
function re(a, b) {
  this.H = a;
  this.c = b;
}
function se(a) {
  return new re(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function te(a, b, c) {
  a.c[b] = c;
}
function ue(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ve(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = se(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var we = function we(b, c, d, e) {
  var f = new re(d.H, bb(d.c)), h = b.h - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], null != d ? (c -= 5, b = we.D ? we.D(b, c, d, e) : we.call(null, b, c, d, e)) : b = ve(null, c - 5, e), f.c[h] = b);
  return f;
};
function xe(a, b) {
  throw Error([z.a("No item "), z.a(a), z.a(" in vector of length "), z.a(b)].join(""));
}
function ye(a, b) {
  if (b >= ue(a)) {
    return a.aa;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e;
    } else {
      return c.c;
    }
  }
}
function ze(a, b) {
  return 0 <= b && b < a.h ? ye(a, b) : xe(b, a.h);
}
var Ae = function Ae(b, c, d, e, f) {
  var h = new re(d.H, bb(d.c));
  if (0 === c) {
    h.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    c -= 5;
    d = d.c[k];
    b = Ae.I ? Ae.I(b, c, d, e, f) : Ae.call(null, b, c, d, e, f);
    te(h, k, b);
  }
  return h;
};
function Be(a, b, c, d, e, f) {
  this.j = a;
  this.rb = b;
  this.c = c;
  this.ta = d;
  this.start = e;
  this.end = f;
}
Be.prototype.ja = function() {
  return this.j < this.end;
};
Be.prototype.next = function() {
  32 === this.j - this.rb && (this.c = ye(this.ta, this.j), this.rb += 32);
  var a = this.c[this.j & 31];
  this.j += 1;
  return a;
};
function De(a, b, c) {
  return new Be(b, b - b % 32, b < O(a) ? ye(a, b) : null, a, b, c);
}
function V(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.aa = e;
  this.s = f;
  this.i = 167668511;
  this.F = 8196;
}
g = V.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? this.ea(null, b, c) : c;
};
g.K = function(a, b) {
  return ze(this, b)[b & 31];
};
g.ea = function(a, b, c) {
  return 0 <= b && b < this.h ? ye(this, b)[b & 31] : c;
};
g.jb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return ue(this) <= b ? (a = bb(this.aa), a[b & 31] = c, new V(this.m, this.h, this.shift, this.root, a, null)) : new V(this.m, this.h, this.shift, Ae(this, this.shift, this.root, b, c), this.aa, null);
  }
  if (b === this.h) {
    return this.T(null, c);
  }
  throw Error([z.a("Index "), z.a(b), z.a(" out of bounds  [0,"), z.a(this.h), z.a("]")].join(""));
};
g.oa = function() {
  return De(this, 0, this.h);
};
g.N = function() {
  return this.m;
};
g.S = function() {
  return this.h;
};
g.Fb = function() {
  return this.K(null, 0);
};
g.Gb = function() {
  return this.K(null, 1);
};
g.wb = function() {
  return 0 < this.h ? new Lc(this, this.h - 1, null) : null;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  if (b instanceof V) {
    if (this.h === O(b)) {
      for (var c = this.oa(null), d = bc(b);;) {
        if (c.ja()) {
          var e = c.next(), f = d.next();
          if (!M.b(e, f)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Mc(this, b);
  }
};
g.bb = function() {
  return new Ee(this.h, this.shift, Fe.a ? Fe.a(this.root) : Fe.call(null, this.root), Ge.a ? Ge.a(this.aa) : Ge.call(null, this.aa));
};
g.X = function() {
  return Pc(Uc, this.m);
};
g.Y = function(a, b) {
  return Bc(this, b);
};
g.Z = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.h) {
      var e = ye(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var h = e[f], d = b.b ? b.b(d, h) : b.call(null, d, h), f = f + 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
g.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return this.jb(null, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.O = function() {
  if (0 === this.h) {
    return null;
  }
  if (32 >= this.h) {
    return new I(this.aa, 0, null);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return He ? He(this, a, 0, 0) : Ie.call(null, this, a, 0, 0);
};
g.R = function(a, b) {
  return new V(b, this.h, this.shift, this.root, this.aa, this.s);
};
g.T = function(a, b) {
  if (32 > this.h - ue(this)) {
    for (var c = this.aa.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.aa[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.m, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = se(null), te(d, 0, this.root), te(d, 1, ve(null, this.shift, new re(null, this.aa)))) : d = we(this, this.shift, this.root, new re(null, this.aa));
  return new V(this.m, this.h + 1, c, d, [b], null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.K(null, c);
  };
  a.f = function(a, c, d) {
    return this.ea(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.K(null, a);
};
g.b = function(a, b) {
  return this.ea(null, a, b);
};
var W = new re(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Uc = new V(null, 0, 5, W, [], xc);
V.prototype[ab] = function() {
  return uc(this);
};
function Je(a) {
  if (Xa(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new V(null, b, 5, W, a, null);
      } else {
        for (var c = 32, d = (new V(null, 32, 5, W, a.slice(0, 32), null)).bb(null);;) {
          if (c < b) {
            var e = c + 1, d = Pd.b(d, a[c]), c = e;
          } else {
            a = Tb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = Tb(rd(Sb, Rb(Uc), a));
  }
  return a;
}
function Ke(a, b, c, d, e, f) {
  this.ka = a;
  this.node = b;
  this.j = c;
  this.U = d;
  this.m = e;
  this.s = f;
  this.i = 32375020;
  this.F = 1536;
}
g = Ke.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.ha = function() {
  if (this.U + 1 < this.node.length) {
    var a;
    a = this.ka;
    var b = this.node, c = this.j, d = this.U + 1;
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return this.Nb(null);
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(Uc, this.m);
};
g.Y = function(a, b) {
  var c;
  c = this.ka;
  var d = this.j + this.U, e = O(this.ka);
  c = Le ? Le(c, d, e) : Me.call(null, c, d, e);
  return Bc(c, b);
};
g.Z = function(a, b, c) {
  a = this.ka;
  var d = this.j + this.U, e = O(this.ka);
  a = Le ? Le(a, d, e) : Me.call(null, a, d, e);
  return Cc(a, b, c);
};
g.$ = function() {
  return this.node[this.U];
};
g.ia = function() {
  if (this.U + 1 < this.node.length) {
    var a;
    a = this.ka;
    var b = this.node, c = this.j, d = this.U + 1;
    a = He ? He(a, b, c, d) : Ie.call(null, a, b, c, d);
    return null == a ? K : a;
  }
  return this.tb(null);
};
g.O = function() {
  return this;
};
g.Db = function() {
  var a = this.node;
  return new Hd(a, this.U, a.length);
};
g.tb = function() {
  var a = this.j + this.node.length;
  if (a < eb(this.ka)) {
    var b = this.ka, c = ye(this.ka, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return K;
};
g.R = function(a, b) {
  return Ne ? Ne(this.ka, this.node, this.j, this.U, b) : Ie.call(null, this.ka, this.node, this.j, this.U, b);
};
g.T = function(a, b) {
  return Q(b, this);
};
g.Nb = function() {
  var a = this.j + this.node.length;
  if (a < eb(this.ka)) {
    var b = this.ka, c = ye(this.ka, a);
    return He ? He(b, c, a, 0) : Ie.call(null, b, c, a, 0);
  }
  return null;
};
Ke.prototype[ab] = function() {
  return uc(this);
};
function Ie(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 3:
      return b = arguments[0], c = arguments[1], d = arguments[2], new Ke(b, ze(b, c), c, d, null, null);
    case 4:
      return He(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ne(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function He(a, b, c, d) {
  return new Ke(a, b, c, d, null, null);
}
function Ne(a, b, c, d, e) {
  return new Ke(a, b, c, d, e, null);
}
function Oe(a, b, c, d, e) {
  this.m = a;
  this.ta = b;
  this.start = c;
  this.end = d;
  this.s = e;
  this.i = 167666463;
  this.F = 8192;
}
g = Oe.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? this.ea(null, b, c) : c;
};
g.K = function(a, b) {
  return 0 > b || this.end <= this.start + b ? xe(b, this.end - this.start) : A.b(this.ta, this.start + b);
};
g.ea = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.f(this.ta, this.start + b, c);
};
g.jb = function(a, b, c) {
  a = this.start + b;
  if (0 > b || this.end + 1 <= a) {
    throw Error([z.a("Index "), z.a(b), z.a(" out of bounds [0,"), z.a(this.S(null)), z.a("]")].join(""));
  }
  b = this.m;
  c = T.f(this.ta, a, c);
  var d = this.start, e = this.end;
  a += 1;
  a = e > a ? e : a;
  return Pe.I ? Pe.I(b, c, d, a, null) : Pe.call(null, b, c, d, a, null);
};
g.oa = function() {
  return De(this.ta, this.start, this.end);
};
g.N = function() {
  return this.m;
};
g.S = function() {
  return this.end - this.start;
};
g.wb = function() {
  return this.start !== this.end ? new Lc(this, this.end - this.start - 1, null) : null;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(Uc, this.m);
};
g.Y = function(a, b) {
  return Bc(this, b);
};
g.Z = function(a, b, c) {
  return Cc(this, b, c);
};
g.ya = function(a, b, c) {
  if ("number" === typeof b) {
    return this.jb(null, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.O = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Q(A.b(a.ta, e), new Ed(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.R = function(a, b) {
  return Pe.I ? Pe.I(b, this.ta, this.start, this.end, this.s) : Pe.call(null, b, this.ta, this.start, this.end, this.s);
};
g.T = function(a, b) {
  var c = this.m, d = yb(this.ta, this.end, b), e = this.start, f = this.end + 1;
  return Pe.I ? Pe.I(c, d, e, f, null) : Pe.call(null, c, d, e, f, null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.K(null, c);
  };
  a.f = function(a, c, d) {
    return this.ea(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.K(null, a);
};
g.b = function(a, b) {
  return this.ea(null, a, b);
};
Oe.prototype[ab] = function() {
  return uc(this);
};
function Pe(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Oe) {
      c = b.start + c, d = b.start + d, b = b.ta;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Oe(a, b, c, d, e);
    }
  }
}
function Me(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 2:
      return b = arguments[0], Le(b, arguments[1], O(b));
    case 3:
      return Le(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function Le(a, b, c) {
  return Pe(null, a, b, c, null);
}
function Qe(a, b) {
  return a === b.H ? b : new re(a, bb(b.c));
}
function Fe(a) {
  return new re({}, bb(a.c));
}
function Ge(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  id(a, 0, b, 0, a.length);
  return b;
}
var Re = function Re(b, c, d, e) {
  d = Qe(b.root.H, d);
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[f];
    null != h ? (c -= 5, b = Re.D ? Re.D(b, c, h, e) : Re.call(null, b, c, h, e)) : b = ve(b.root.H, c - 5, e);
  }
  te(d, f, b);
  return d;
};
function Ee(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.aa = d;
  this.F = 88;
  this.i = 275;
}
g = Ee.prototype;
g.Wa = function(a, b) {
  if (this.root.H) {
    if (32 > this.h - ue(this)) {
      this.aa[this.h & 31] = b;
    } else {
      var c = new re(this.root.H, this.aa), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.aa = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ve(this.root.H, this.shift, c);
        this.root = new re(this.root.H, d);
        this.shift = e;
      } else {
        this.root = Re(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.ib = function() {
  if (this.root.H) {
    this.root.H = null;
    var a = this.h - ue(this), b = Array(a);
    id(this.aa, 0, b, 0, a);
    return new V(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
g.Va = function(a, b, c) {
  if ("number" === typeof b) {
    return Se(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
function Se(a, b, c) {
  if (a.root.H) {
    if (0 <= b && b < a.h) {
      if (ue(a) <= b) {
        a.aa[b & 31] = c;
      } else {
        var d = function() {
          return function f(d, k) {
            var h = Qe(a.root.H, k);
            if (0 === d) {
              h.c[b & 31] = c;
            } else {
              var m = b >>> d & 31;
              te(h, m, f(d - 5, h.c[m]));
            }
            return h;
          };
        }(a).call(null, a.shift, a.root);
        a.root = d;
      }
      return a;
    }
    if (b === a.h) {
      return a.Wa(null, c);
    }
    throw Error([z.a("Index "), z.a(b), z.a(" out of bounds for TransientVector of length"), z.a(a.h)].join(""));
  }
  throw Error("assoc! after persistent!");
}
g.S = function() {
  if (this.root.H) {
    return this.h;
  }
  throw Error("count after persistent!");
};
g.K = function(a, b) {
  if (this.root.H) {
    return ze(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.ea = function(a, b, c) {
  return 0 <= b && b < this.h ? this.K(null, b) : c;
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return "number" === typeof b ? this.ea(null, b, c) : c;
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.G(null, a, b);
};
function Te() {
  this.i = 2097152;
  this.F = 0;
}
Te.prototype.equiv = function(a) {
  return this.u(null, a);
};
Te.prototype.u = function() {
  return !1;
};
var Ue = new Te;
function Ve(a, b) {
  return kd(ed(b) ? O(a) === O(b) ? Zd(function(a) {
    return M.b(F.f(b, J(a), Ue), J(L(a)));
  }, a) : null : null);
}
function We(a) {
  this.B = a;
}
We.prototype.next = function() {
  if (null != this.B) {
    var a = J(this.B), b = S(a, 0, null), a = S(a, 1, null);
    this.B = L(this.B);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function Xe(a) {
  this.B = a;
}
Xe.prototype.next = function() {
  if (null != this.B) {
    var a = J(this.B);
    this.B = L(this.B);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function Ye(a, b) {
  var c;
  if (b instanceof U) {
    a: {
      c = a.length;
      for (var d = b.ua, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        if (a[e] instanceof U && d === a[e].ua) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof qc) {
        a: {
          for (c = a.length, d = b.wa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            if (a[e] instanceof qc && d === a[e].wa) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (M.b(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Ze(a, b, c) {
  this.c = a;
  this.j = b;
  this.da = c;
  this.i = 32374990;
  this.F = 0;
}
g = Ze.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.da;
};
g.ha = function() {
  return this.j < this.c.length - 2 ? new Ze(this.c, this.j + 2, this.da) : null;
};
g.S = function() {
  return (this.c.length - this.j) / 2;
};
g.L = function() {
  return wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.da);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return new V(null, 2, 5, W, [this.c[this.j], this.c[this.j + 1]], null);
};
g.ia = function() {
  return this.j < this.c.length - 2 ? new Ze(this.c, this.j + 2, this.da) : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Ze(this.c, this.j, b);
};
g.T = function(a, b) {
  return Q(b, this);
};
Ze.prototype[ab] = function() {
  return uc(this);
};
function $e(a, b, c) {
  this.c = a;
  this.j = b;
  this.h = c;
}
$e.prototype.ja = function() {
  return this.j < this.h;
};
$e.prototype.next = function() {
  var a = new V(null, 2, 5, W, [this.c[this.j], this.c[this.j + 1]], null);
  this.j += 2;
  return a;
};
function Pa(a, b, c, d) {
  this.m = a;
  this.h = b;
  this.c = c;
  this.s = d;
  this.i = 16647951;
  this.F = 8196;
}
g = Pa.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return uc(af.a ? af.a(this) : af.call(null, this));
};
g.entries = function() {
  return new We(G(G(this)));
};
g.values = function() {
  return uc(bf.a ? bf.a(this) : bf.call(null, this));
};
g.has = function(a) {
  return ld(this, a);
};
g.get = function(a, b) {
  return this.G(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e), h = S(f, 0, null), f = S(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        gd(b) ? (c = Yb(b), b = Zb(b), h = c, d = O(c), c = h) : (c = J(b), h = S(c, 0, null), f = S(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  a = Ye(this.c, b);
  return -1 === a ? c : this.c[a + 1];
};
g.oa = function() {
  return new $e(this.c, 0, 2 * this.h);
};
g.N = function() {
  return this.m;
};
g.S = function() {
  return this.h;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = yc(this);
};
g.u = function(a, b) {
  if (null != b && (b.i & 1024 || p === b.dc)) {
    var c = this.c.length;
    if (this.h === b.S(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.c[d], jd);
          if (e !== jd) {
            if (M.b(this.c[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Ve(this, b);
  }
};
g.bb = function() {
  return new cf({}, this.c.length, bb(this.c));
};
g.X = function() {
  return Db(Yd, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.Eb = function(a, b) {
  if (0 <= Ye(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return this.X(null);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new Pa(this.m, this.h - 1, d, null);
      }
      M.b(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
g.ya = function(a, b, c) {
  a = Ye(this.c, b);
  if (-1 === a) {
    if (this.h < df) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Pa(this.m, this.h + 1, e, null);
    }
    return Db(ob(oe(ef, this), b, c), this.m);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = bb(this.c);
  b[a + 1] = c;
  return new Pa(this.m, this.h, b, null);
};
g.Cb = function(a, b) {
  return -1 !== Ye(this.c, b);
};
g.O = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ze(a, 0, null) : null;
};
g.R = function(a, b) {
  return new Pa(b, this.h, this.c, this.s);
};
g.T = function(a, b) {
  if (fd(b)) {
    return this.ya(null, A.b(b, 0), A.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (fd(e)) {
      c = c.ya(null, A.b(e, 0), A.b(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.G(null, a, b);
};
var Yd = new Pa(null, 0, [], zc), df = 8;
Pa.prototype[ab] = function() {
  return uc(this);
};
function cf(a, b, c) {
  this.cb = a;
  this.Ya = b;
  this.c = c;
  this.i = 258;
  this.F = 56;
}
g = cf.prototype;
g.S = function() {
  if (t(this.cb)) {
    return vd(this.Ya);
  }
  throw Error("count after persistent!");
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  if (t(this.cb)) {
    return a = Ye(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.Wa = function(a, b) {
  if (t(this.cb)) {
    if (null != b ? b.i & 2048 || p === b.ec || (b.i ? 0 : u(sb, b)) : u(sb, b)) {
      return this.Va(null, ff.a ? ff.a(b) : ff.call(null, b), gf.a ? gf.a(b) : gf.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (t(e)) {
        c = L(c), d = d.Va(null, ff.a ? ff.a(e) : ff.call(null, e), gf.a ? gf.a(e) : gf.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.ib = function() {
  if (t(this.cb)) {
    return this.cb = !1, new Pa(null, vd(this.Ya), this.c, null);
  }
  throw Error("persistent! called twice");
};
g.Va = function(a, b, c) {
  if (t(this.cb)) {
    a = Ye(this.c, b);
    if (-1 === a) {
      if (this.Ya + 2 <= 2 * df) {
        return this.Ya += 2, this.c.push(b), this.c.push(c), this;
      }
      a = hf.b ? hf.b(this.Ya, this.c) : hf.call(null, this.Ya, this.c);
      return Ub(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function hf(a, b) {
  for (var c = Rb(ef), d = 0;;) {
    if (d < a) {
      c = Ub(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function jf() {
  this.xa = !1;
}
function kf(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ua === b.ua ? !0 : M.b(a, b);
}
function lf(a, b, c) {
  a = bb(a);
  a[b] = c;
  return a;
}
function mf(a, b) {
  var c = Array(a.length - 2);
  id(a, 0, c, 0, 2 * b);
  id(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function nf(a, b, c, d) {
  a = a.Xa(b);
  a.c[c] = d;
  return a;
}
function of(a, b, c, d) {
  this.c = a;
  this.j = b;
  this.nb = c;
  this.sa = d;
}
of.prototype.advance = function() {
  for (var a = this.c.length;;) {
    if (this.j < a) {
      var b = this.c[this.j], c = this.c[this.j + 1];
      null != b ? b = this.nb = new V(null, 2, 5, W, [b, c], null) : null != c ? (b = bc(c), b = b.ja() ? this.sa = b : !1) : b = !1;
      this.j += 2;
      if (b) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
of.prototype.ja = function() {
  var a = null != this.nb;
  return a ? a : (a = null != this.sa) ? a : this.advance();
};
of.prototype.next = function() {
  if (null != this.nb) {
    var a = this.nb;
    this.nb = null;
    return a;
  }
  if (null != this.sa) {
    return a = this.sa.next(), this.sa.ja() || (this.sa = null), a;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
of.prototype.remove = function() {
  return Error("Unsupported operation");
};
function pf(a, b, c) {
  this.H = a;
  this.J = b;
  this.c = c;
}
g = pf.prototype;
g.Xa = function(a) {
  if (a === this.H) {
    return this;
  }
  var b = wd(this.J), c = Array(0 > b ? 4 : 2 * (b + 1));
  id(this.c, 0, c, 0, 2 * b);
  return new pf(a, this.J, c);
};
g.lb = function() {
  return qf ? qf(this.c) : rf.call(null, this.c);
};
g.Ta = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.J & e)) {
    return d;
  }
  var f = wd(this.J & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ta(a + 5, b, c, d) : kf(c, e) ? f : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = wd(this.J & h - 1);
  if (0 === (this.J & h)) {
    var l = wd(this.J);
    if (2 * l < this.c.length) {
      a = this.Xa(a);
      b = a.c;
      f.xa = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.J |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = sf.qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.J >>> d & 1) && (k[d] = null != this.c[e] ? sf.qa(a, b + 5, nc(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new tf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    id(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    id(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.xa = !0;
    a = this.Xa(a);
    a.c = b;
    a.J |= h;
    return a;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  if (null == l) {
    return l = h.qa(a, b + 5, c, d, e, f), l === h ? this : nf(this, a, 2 * k + 1, l);
  }
  if (kf(d, l)) {
    return e === h ? this : nf(this, a, 2 * k + 1, e);
  }
  f.xa = !0;
  f = b + 5;
  d = uf ? uf(a, f, l, h, c, d, e) : vf.call(null, a, f, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Xa(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
g.pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = wd(this.J & f - 1);
  if (0 === (this.J & f)) {
    var k = wd(this.J);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = sf.pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.J >>> c & 1) && (h[c] = null != this.c[d] ? sf.pa(a + 5, nc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new tf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    id(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    id(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.xa = !0;
    return new pf(null, this.J | f, a);
  }
  var l = this.c[2 * h], f = this.c[2 * h + 1];
  if (null == l) {
    return k = f.pa(a + 5, b, c, d, e), k === f ? this : new pf(null, this.J, lf(this.c, 2 * h + 1, k));
  }
  if (kf(c, l)) {
    return d === f ? this : new pf(null, this.J, lf(this.c, 2 * h + 1, d));
  }
  e.xa = !0;
  e = this.J;
  k = this.c;
  a += 5;
  a = wf ? wf(a, l, f, b, c, d) : vf.call(null, a, l, f, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = bb(k);
  d[c] = null;
  d[h] = a;
  return new pf(null, e, d);
};
g.mb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.J & d)) {
    return this;
  }
  var e = wd(this.J & d - 1), f = this.c[2 * e], h = this.c[2 * e + 1];
  return null == f ? (a = h.mb(a + 5, b, c), a === h ? this : null != a ? new pf(null, this.J, lf(this.c, 2 * e + 1, a)) : this.J === d ? null : new pf(null, this.J ^ d, mf(this.c, e))) : kf(c, f) ? new pf(null, this.J ^ d, mf(this.c, e)) : this;
};
g.oa = function() {
  return new of(this.c, 0, null, null);
};
var sf = new pf(null, 0, []);
function xf(a, b, c) {
  this.c = a;
  this.j = b;
  this.sa = c;
}
xf.prototype.ja = function() {
  for (var a = this.c.length;;) {
    if (null != this.sa && this.sa.ja()) {
      return !0;
    }
    if (this.j < a) {
      var b = this.c[this.j];
      this.j += 1;
      null != b && (this.sa = bc(b));
    } else {
      return !1;
    }
  }
};
xf.prototype.next = function() {
  if (this.ja()) {
    return this.sa.next();
  }
  throw Error("No such element");
};
xf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function tf(a, b, c) {
  this.H = a;
  this.h = b;
  this.c = c;
}
g = tf.prototype;
g.Xa = function(a) {
  return a === this.H ? this : new tf(a, this.h, bb(this.c));
};
g.lb = function() {
  return yf ? yf(this.c) : zf.call(null, this.c);
};
g.Ta = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ta(a + 5, b, c, d) : d;
};
g.qa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = nf(this, a, h, sf.qa(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = k.qa(a, b + 5, c, d, e, f);
  return b === k ? this : nf(this, a, h, b);
};
g.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if (null == h) {
    return new tf(null, this.h + 1, lf(this.c, f, sf.pa(a + 5, b, c, d, e)));
  }
  a = h.pa(a + 5, b, c, d, e);
  return a === h ? this : new tf(null, this.h, lf(this.c, f, a));
};
g.mb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.mb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.h) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.h - 1));
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new pf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new tf(null, this.h - 1, lf(this.c, d, a));
        }
      } else {
        d = new tf(null, this.h, lf(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
g.oa = function() {
  return new xf(this.c, 0, null);
};
function Af(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (kf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Bf(a, b, c, d) {
  this.H = a;
  this.Na = b;
  this.h = c;
  this.c = d;
}
g = Bf.prototype;
g.Xa = function(a) {
  if (a === this.H) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  id(this.c, 0, b, 0, 2 * this.h);
  return new Bf(a, this.Na, this.h, b);
};
g.lb = function() {
  return qf ? qf(this.c) : rf.call(null, this.c);
};
g.Ta = function(a, b, c, d) {
  a = Af(this.c, this.h, c);
  return 0 > a ? d : kf(c, this.c[a]) ? this.c[a + 1] : d;
};
g.qa = function(a, b, c, d, e, f) {
  if (c === this.Na) {
    b = Af(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return b = 2 * this.h, c = 2 * this.h + 1, a = this.Xa(a), a.c[b] = d, a.c[c] = e, f.xa = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      id(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.xa = !0;
      d = this.h + 1;
      a === this.H ? (this.c = b, this.h = d, a = this) : a = new Bf(this.H, this.Na, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : nf(this, a, b + 1, e);
  }
  return (new pf(a, 1 << (this.Na >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
g.pa = function(a, b, c, d, e) {
  return b === this.Na ? (a = Af(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), id(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.xa = !0, new Bf(null, this.Na, this.h + 1, b)) : M.b(this.c[a + 1], d) ? this : new Bf(null, this.Na, this.h, lf(this.c, a + 1, d))) : (new pf(null, 1 << (this.Na >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
g.mb = function(a, b, c) {
  a = Af(this.c, this.h, c);
  return -1 === a ? this : 1 === this.h ? null : new Bf(null, this.Na, this.h - 1, mf(this.c, vd(a)));
};
g.oa = function() {
  return new of(this.c, 0, null, null);
};
function vf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 6:
      return wf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return uf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function wf(a, b, c, d, e, f) {
  var h = nc(b);
  if (h === d) {
    return new Bf(null, h, 2, [b, c, e, f]);
  }
  var k = new jf;
  return sf.pa(a, h, b, c, k).pa(a, d, e, f, k);
}
function uf(a, b, c, d, e, f, h) {
  var k = nc(c);
  if (k === e) {
    return new Bf(null, k, 2, [c, d, f, h]);
  }
  var l = new jf;
  return sf.qa(a, b, k, c, d, l).qa(a, b, e, f, h, l);
}
function Cf(a, b, c, d, e) {
  this.m = a;
  this.Ua = b;
  this.j = c;
  this.B = d;
  this.s = e;
  this.i = 32374860;
  this.F = 0;
}
g = Cf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return null == this.B ? new V(null, 2, 5, W, [this.Ua[this.j], this.Ua[this.j + 1]], null) : J(this.B);
};
g.ia = function() {
  var a = this, b = null == a.B ? function() {
    var b = a.Ua, d = a.j + 2;
    return Df ? Df(b, d, null) : rf.call(null, b, d, null);
  }() : function() {
    var b = a.Ua, d = a.j, e = L(a.B);
    return Df ? Df(b, d, e) : rf.call(null, b, d, e);
  }();
  return null != b ? b : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Cf(b, this.Ua, this.j, this.B, this.s);
};
g.T = function(a, b) {
  return Q(b, this);
};
Cf.prototype[ab] = function() {
  return uc(this);
};
function rf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return qf(arguments[0]);
    case 3:
      return Df(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function qf(a) {
  return Df(a, 0, null);
}
function Df(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Cf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (t(d) && (d = d.lb(), t(d))) {
          return new Cf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Cf(null, a, b, c, null);
  }
}
function Ef(a, b, c, d, e) {
  this.m = a;
  this.Ua = b;
  this.j = c;
  this.B = d;
  this.s = e;
  this.i = 32374860;
  this.F = 0;
}
g = Ef.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.m;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.m);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return J(this.B);
};
g.ia = function() {
  var a;
  a = this.Ua;
  var b = this.j, c = L(this.B);
  a = Ff ? Ff(null, a, b, c) : zf.call(null, null, a, b, c);
  return null != a ? a : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Ef(b, this.Ua, this.j, this.B, this.s);
};
g.T = function(a, b) {
  return Q(b, this);
};
Ef.prototype[ab] = function() {
  return uc(this);
};
function zf(a) {
  for (var b = [], c = arguments.length, d = 0;;) {
    if (d < c) {
      b.push(arguments[d]), d += 1;
    } else {
      break;
    }
  }
  switch(b.length) {
    case 1:
      return yf(arguments[0]);
    case 4:
      return Ff(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(b.length)].join(""));
  }
}
function yf(a) {
  return Ff(null, a, 0, null);
}
function Ff(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (t(e) && (e = e.lb(), t(e))) {
          return new Ef(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Ef(a, b, c, d, null);
  }
}
function Gf(a, b, c) {
  this.ga = a;
  this.Wb = b;
  this.Kb = c;
}
Gf.prototype.ja = function() {
  return !this.Kb || this.Wb.ja();
};
Gf.prototype.next = function() {
  if (this.Kb) {
    return this.Wb.next();
  }
  this.Kb = !0;
  return new V(null, 2, 5, W, [null, this.ga], null);
};
Gf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Hf(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.ba = d;
  this.ga = e;
  this.s = f;
  this.i = 16123663;
  this.F = 8196;
}
g = Hf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return uc(af.a ? af.a(this) : af.call(null, this));
};
g.entries = function() {
  return new We(G(G(this)));
};
g.values = function() {
  return uc(bf.a ? bf.a(this) : bf.call(null, this));
};
g.has = function(a) {
  return ld(this, a);
};
g.get = function(a, b) {
  return this.G(null, a, b);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e), h = S(f, 0, null), f = S(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        gd(b) ? (c = Yb(b), b = Zb(b), h = c, d = O(c), c = h) : (c = J(b), h = S(c, 0, null), f = S(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return null == b ? this.ba ? this.ga : c : null == this.root ? c : this.root.Ta(0, nc(b), b, c);
};
g.oa = function() {
  var a = this.root ? bc(this.root) : Wd();
  return this.ba ? new Gf(this.ga, a, !1) : a;
};
g.N = function() {
  return this.m;
};
g.S = function() {
  return this.h;
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = yc(this);
};
g.u = function(a, b) {
  return Ve(this, b);
};
g.bb = function() {
  return new If({}, this.root, this.h, this.ba, this.ga);
};
g.X = function() {
  return Db(ef, this.m);
};
g.Eb = function(a, b) {
  if (null == b) {
    return this.ba ? new Hf(this.m, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.mb(0, nc(b), b);
  return c === this.root ? this : new Hf(this.m, this.h - 1, c, this.ba, this.ga, null);
};
g.ya = function(a, b, c) {
  if (null == b) {
    return this.ba && c === this.ga ? this : new Hf(this.m, this.ba ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new jf;
  b = (null == this.root ? sf : this.root).pa(0, nc(b), b, c, a);
  return b === this.root ? this : new Hf(this.m, a.xa ? this.h + 1 : this.h, b, this.ba, this.ga, null);
};
g.Cb = function(a, b) {
  return null == b ? this.ba : null == this.root ? !1 : this.root.Ta(0, nc(b), b, jd) !== jd;
};
g.O = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.lb() : null;
    return this.ba ? Q(new V(null, 2, 5, W, [null, this.ga], null), a) : a;
  }
  return null;
};
g.R = function(a, b) {
  return new Hf(b, this.h, this.root, this.ba, this.ga, this.s);
};
g.T = function(a, b) {
  if (fd(b)) {
    return this.ya(null, A.b(b, 0), A.b(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (fd(e)) {
      c = c.ya(null, A.b(e, 0), A.b(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.G(null, a, b);
};
var ef = new Hf(null, 0, null, !1, null, zc);
function Wc(a, b) {
  for (var c = a.length, d = 0, e = Rb(ef);;) {
    if (d < c) {
      var f = d + 1, e = e.Va(null, a[d], b[d]), d = f;
    } else {
      return Tb(e);
    }
  }
}
Hf.prototype[ab] = function() {
  return uc(this);
};
function If(a, b, c, d, e) {
  this.H = a;
  this.root = b;
  this.count = c;
  this.ba = d;
  this.ga = e;
  this.i = 258;
  this.F = 56;
}
function Jf(a, b, c) {
  if (a.H) {
    if (null == b) {
      a.ga !== c && (a.ga = c), a.ba || (a.count += 1, a.ba = !0);
    } else {
      var d = new jf;
      b = (null == a.root ? sf : a.root).qa(a.H, 0, nc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.xa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
g = If.prototype;
g.S = function() {
  if (this.H) {
    return this.count;
  }
  throw Error("count after persistent!");
};
g.M = function(a, b) {
  return null == b ? this.ba ? this.ga : null : null == this.root ? null : this.root.Ta(0, nc(b), b);
};
g.G = function(a, b, c) {
  return null == b ? this.ba ? this.ga : c : null == this.root ? c : this.root.Ta(0, nc(b), b, c);
};
g.Wa = function(a, b) {
  var c;
  a: {
    if (this.H) {
      if (null != b ? b.i & 2048 || p === b.ec || (b.i ? 0 : u(sb, b)) : u(sb, b)) {
        c = Jf(this, ff.a ? ff.a(b) : ff.call(null, b), gf.a ? gf.a(b) : gf.call(null, b));
      } else {
        c = G(b);
        for (var d = this;;) {
          var e = J(c);
          if (t(e)) {
            c = L(c), d = Jf(d, ff.a ? ff.a(e) : ff.call(null, e), gf.a ? gf.a(e) : gf.call(null, e));
          } else {
            c = d;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return c;
};
g.ib = function() {
  var a;
  if (this.H) {
    this.H = null, a = new Hf(null, this.count, this.root, this.ba, this.ga, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.Va = function(a, b, c) {
  return Jf(this, b, c);
};
var fe = function fe(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return fe.o(0 < c.length ? new I(c.slice(0), 0, null) : null);
};
fe.o = function(a) {
  for (var b = G(a), c = Rb(ef);;) {
    if (b) {
      a = L(L(b));
      var d = J(b), b = J(L(b)), c = Ub(c, d, b), b = a;
    } else {
      return Tb(c);
    }
  }
};
fe.A = 0;
fe.w = function(a) {
  return fe.o(G(a));
};
function Kf(a, b) {
  this.C = a;
  this.da = b;
  this.i = 32374988;
  this.F = 0;
}
g = Kf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.da;
};
g.ha = function() {
  var a = (null != this.C ? this.C.i & 128 || p === this.C.vb || (this.C.i ? 0 : u(kb, this.C)) : u(kb, this.C)) ? this.C.ha(null) : L(this.C);
  return null == a ? null : new Kf(a, this.da);
};
g.L = function() {
  return wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.da);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return this.C.$(null).Fb();
};
g.ia = function() {
  var a = (null != this.C ? this.C.i & 128 || p === this.C.vb || (this.C.i ? 0 : u(kb, this.C)) : u(kb, this.C)) ? this.C.ha(null) : L(this.C);
  return null != a ? new Kf(a, this.da) : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Kf(this.C, b);
};
g.T = function(a, b) {
  return Q(b, this);
};
Kf.prototype[ab] = function() {
  return uc(this);
};
function af(a) {
  return (a = G(a)) ? new Kf(a, null) : null;
}
function ff(a) {
  return tb(a);
}
function Lf(a, b) {
  this.C = a;
  this.da = b;
  this.i = 32374988;
  this.F = 0;
}
g = Lf.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.indexOf = function() {
  var a = null, a = function(a, c) {
    switch(arguments.length) {
      case 1:
        return N(this, a, 0);
      case 2:
        return N(this, a, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a) {
    return N(this, a, 0);
  };
  a.b = function(a, c) {
    return N(this, a, c);
  };
  return a;
}();
g.lastIndexOf = function() {
  function a(a) {
    return P(this, a, O(this));
  }
  var b = null, b = function(b, d) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      case 2:
        return P(this, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.a = a;
  b.b = function(a, b) {
    return P(this, a, b);
  };
  return b;
}();
g.N = function() {
  return this.da;
};
g.ha = function() {
  var a = (null != this.C ? this.C.i & 128 || p === this.C.vb || (this.C.i ? 0 : u(kb, this.C)) : u(kb, this.C)) ? this.C.ha(null) : L(this.C);
  return null == a ? null : new Lf(a, this.da);
};
g.L = function() {
  return wc(this);
};
g.u = function(a, b) {
  return Mc(this, b);
};
g.X = function() {
  return Pc(K, this.da);
};
g.Y = function(a, b) {
  return Qc(b, this);
};
g.Z = function(a, b, c) {
  return Sc(b, c, this);
};
g.$ = function() {
  return this.C.$(null).Gb();
};
g.ia = function() {
  var a = (null != this.C ? this.C.i & 128 || p === this.C.vb || (this.C.i ? 0 : u(kb, this.C)) : u(kb, this.C)) ? this.C.ha(null) : L(this.C);
  return null != a ? new Lf(a, this.da) : K;
};
g.O = function() {
  return this;
};
g.R = function(a, b) {
  return new Lf(this.C, b);
};
g.T = function(a, b) {
  return Q(b, this);
};
Lf.prototype[ab] = function() {
  return uc(this);
};
function bf(a) {
  return (a = G(a)) ? new Lf(a, null) : null;
}
function gf(a) {
  return ub(a);
}
function Mf(a) {
  return t($d(ud, a)) ? td(function(a, c) {
    return Tc.b(t(a) ? a : Yd, c);
  }, a) : null;
}
function Nf(a) {
  this.Ib = a;
}
Nf.prototype.ja = function() {
  return this.Ib.ja();
};
Nf.prototype.next = function() {
  if (this.Ib.ja()) {
    return this.Ib.next().aa[0];
  }
  throw Error("No such element");
};
Nf.prototype.remove = function() {
  return Error("Unsupported operation");
};
function Of(a, b, c) {
  this.m = a;
  this.Sa = b;
  this.s = c;
  this.i = 15077647;
  this.F = 8196;
}
g = Of.prototype;
g.toString = function() {
  return dc(this);
};
g.equiv = function(a) {
  return this.u(null, a);
};
g.keys = function() {
  return uc(G(this));
};
g.entries = function() {
  return new Xe(G(G(this)));
};
g.values = function() {
  return uc(G(this));
};
g.has = function(a) {
  return ld(this, a);
};
g.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e), h = S(f, 0, null), f = S(f, 1, null);
      a.b ? a.b(f, h) : a.call(null, f, h);
      e += 1;
    } else {
      if (b = G(b)) {
        gd(b) ? (c = Yb(b), b = Zb(b), h = c, d = O(c), c = h) : (c = J(b), h = S(c, 0, null), f = S(c, 1, null), a.b ? a.b(f, h) : a.call(null, f, h), b = L(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return nb(this.Sa, b) ? b : c;
};
g.oa = function() {
  return new Nf(bc(this.Sa));
};
g.N = function() {
  return this.m;
};
g.S = function() {
  return eb(this.Sa);
};
g.L = function() {
  var a = this.s;
  return null != a ? a : this.s = a = yc(this);
};
g.u = function(a, b) {
  return cd(b) && O(this) === O(b) && Zd(function(a) {
    return function(b) {
      return ld(a, b);
    };
  }(this), b);
};
g.bb = function() {
  return new Pf(Rb(this.Sa));
};
g.X = function() {
  return Pc(Qf, this.m);
};
g.Pb = function(a, b) {
  return new Of(this.m, qb(this.Sa, b), null);
};
g.O = function() {
  return af(this.Sa);
};
g.R = function(a, b) {
  return new Of(b, this.Sa, this.s);
};
g.T = function(a, b) {
  return new Of(this.m, T.f(this.Sa, b, null), null);
};
g.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.M(null, c);
  };
  a.f = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return this.M(null, a);
};
g.b = function(a, b) {
  return this.G(null, a, b);
};
var Qf = new Of(null, Yd, zc);
function Rf(a) {
  for (var b = a.length, c = Rb(Qf), d = 0;;) {
    if (d < b) {
      Sb(c, a[d]), d += 1;
    } else {
      break;
    }
  }
  return Tb(c);
}
Of.prototype[ab] = function() {
  return uc(this);
};
function Pf(a) {
  this.Qa = a;
  this.F = 136;
  this.i = 259;
}
g = Pf.prototype;
g.Wa = function(a, b) {
  this.Qa = Ub(this.Qa, b, null);
  return this;
};
g.ib = function() {
  return new Of(null, Tb(this.Qa), null);
};
g.S = function() {
  return O(this.Qa);
};
g.M = function(a, b) {
  return this.G(null, b, null);
};
g.G = function(a, b, c) {
  return mb.f(this.Qa, b, jd) === jd ? c : b;
};
g.call = function() {
  function a(a, b, c) {
    return mb.f(this.Qa, b, jd) === jd ? c : b;
  }
  function b(a, b) {
    return mb.f(this.Qa, b, jd) === jd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, 0, e);
      case 3:
        return a.call(this, 0, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.f = a;
  return c;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(bb(b)));
};
g.a = function(a) {
  return mb.f(this.Qa, a, jd) === jd ? null : a;
};
g.b = function(a, b) {
  return mb.f(this.Qa, a, jd) === jd ? b : a;
};
function Sf(a) {
  a = G(a);
  if (null == a) {
    return Qf;
  }
  if (a instanceof I && 0 === a.j) {
    return Rf(a.c);
  }
  for (var b = Rb(Qf);;) {
    if (null != a) {
      var c = L(a), b = b.Wa(null, a.$(null));
      a = c;
    } else {
      return Tb(b);
    }
  }
}
function Dd(a) {
  if (null != a && (a.F & 4096 || p === a.gc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([z.a("Doesn't support name: "), z.a(a)].join(""));
}
function Tf(a, b, c, d, e, f, h) {
  var k = La;
  La = null == La ? null : La - 1;
  try {
    if (null != La && 0 > La) {
      return C(a, "#");
    }
    C(a, c);
    if (0 === Va.a(f)) {
      G(h) && C(a, function() {
        var a = Uf.a(f);
        return t(a) ? a : "...";
      }());
    } else {
      if (G(h)) {
        var l = J(h);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = L(h), q = Va.a(f) - 1;;) {
        if (!m || null != q && 0 === q) {
          G(m) && 0 === q && (C(a, d), C(a, function() {
            var a = Uf.a(f);
            return t(a) ? a : "...";
          }()));
          break;
        } else {
          C(a, d);
          var r = J(m);
          c = a;
          h = f;
          b.f ? b.f(r, c, h) : b.call(null, r, c, h);
          var v = L(m);
          c = q - 1;
          m = v;
          q = c;
        }
      }
    }
    return C(a, e);
  } finally {
    La = k;
  }
}
function Vf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.K(null, f);
      C(a, h);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, gd(d) ? (c = Yb(d), e = Zb(d), d = c, h = O(c), c = e, e = h) : (h = J(d), C(a, h), c = L(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Wf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Xf(a) {
  return [z.a('"'), z.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Wf[a];
  })), z.a('"')].join("");
}
function Zf(a, b) {
  var c = kd(F.b(a, Ta));
  return c ? (c = null != b ? b.i & 131072 || p === b.fc ? !0 : !1 : !1) ? null != bd(b) : c : c;
}
function $f(a, b, c) {
  if (null == a) {
    return C(b, "nil");
  }
  if (Zf(c, a)) {
    C(b, "^");
    var d = bd(a);
    X.f ? X.f(d, b, c) : X.call(null, d, b, c);
    C(b, " ");
  }
  if (a.Sb) {
    return a.oc(b);
  }
  if (null != a && (a.i & 2147483648 || p === a.W)) {
    return a.P(null, b, c);
  }
  if (!0 === a || !1 === a || "number" === typeof a) {
    return C(b, "" + z.a(a));
  }
  if (null != a && a.constructor === Object) {
    return C(b, "#js "), d = je.b(function(b) {
      return new V(null, 2, 5, W, [Cd.a(b), a[b]], null);
    }, hd(a)), ag.D ? ag.D(d, X, b, c) : ag.call(null, d, X, b, c);
  }
  if (Xa(a)) {
    return Tf(b, X, "#js [", " ", "]", c, a);
  }
  if (ba(a)) {
    return t(Ra.a(c)) ? C(b, Xf(a)) : C(b, a);
  }
  if (ca(a)) {
    var e = a.name;
    c = t(function() {
      var a = null == e;
      return a ? a : /^[\s\xa0]*$/.test(e);
    }()) ? "Function" : e;
    return Vf(b, Oc(["#object[", c, ' "', "" + z.a(a), '"]'], 0));
  }
  if (a instanceof Date) {
    return c = function(a, b) {
      for (var c = "" + z.a(a);;) {
        if (O(c) < b) {
          c = [z.a("0"), z.a(c)].join("");
        } else {
          return c;
        }
      }
    }, Vf(b, Oc(['#inst "', "" + z.a(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if (a instanceof RegExp) {
    return Vf(b, Oc(['#"', a.source, '"'], 0));
  }
  if (t(a.constructor.xb)) {
    return Vf(b, Oc(["#object[", a.constructor.xb.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  e = a.constructor.name;
  c = t(function() {
    var a = null == e;
    return a ? a : /^[\s\xa0]*$/.test(e);
  }()) ? "Object" : e;
  return Vf(b, Oc(["#object[", c, " ", "" + z.a(a), "]"], 0));
}
function X(a, b, c) {
  var d = bg.a(c);
  return t(d) ? (c = T.f(c, cg, $f), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : $f(a, b, c);
}
function dg(a, b) {
  var c = new Aa;
  a: {
    var d = new cc(c);
    X(J(a), d, b);
    for (var e = G(L(a)), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.K(null, k);
        C(d, " ");
        X(l, d, b);
        k += 1;
      } else {
        if (e = G(e)) {
          f = e, gd(f) ? (e = Yb(f), h = Zb(f), f = e, l = O(e), e = h, h = l) : (l = J(f), C(d, " "), X(l, d, b), e = L(f), f = null, h = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
function eg(a) {
  var b = T.f(Oa(), Ra, !1);
  a = null == a || Ya(G(a)) ? "" : "" + z.a(dg(a, b));
  Ja.a ? Ja.a(a) : Ja.call(null);
  a = Oa();
  Ja.a ? Ja.a("\n") : Ja.call(null);
  F.b(a, Qa);
}
function fg(a, b, c, d, e) {
  return Tf(d, function(a, b, d) {
    var e = tb(a);
    c.f ? c.f(e, b, d) : c.call(null, e, b, d);
    C(b, " ");
    a = ub(a);
    return c.f ? c.f(a, b, d) : c.call(null, a, b, d);
  }, [z.a(a), z.a("{")].join(""), ", ", "}", e, G(b));
}
function ag(a, b, c, d) {
  var e = S(null, 0, null), f = S(null, 1, null);
  return t(e) ? fg([z.a("#:"), z.a(e)].join(""), f, b, c, d) : fg(null, a, b, c, d);
}
I.prototype.W = p;
I.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Ed.prototype.W = p;
Ed.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Cf.prototype.W = p;
Cf.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Ze.prototype.W = p;
Ze.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Ke.prototype.W = p;
Ke.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Ad.prototype.W = p;
Ad.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Lc.prototype.W = p;
Lc.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Hf.prototype.W = p;
Hf.prototype.P = function(a, b, c) {
  return ag(this, X, b, c);
};
Ef.prototype.W = p;
Ef.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
Oe.prototype.W = p;
Oe.prototype.P = function(a, b, c) {
  return Tf(b, X, "[", " ", "]", c, this);
};
Of.prototype.W = p;
Of.prototype.P = function(a, b, c) {
  return Tf(b, X, "#{", " ", "}", c, this);
};
Id.prototype.W = p;
Id.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
ce.prototype.W = p;
ce.prototype.P = function(a, b, c) {
  C(b, "#object [cljs.core.Atom ");
  X(new Pa(null, 1, [gg, this.state], null), b, c);
  return C(b, "]");
};
Lf.prototype.W = p;
Lf.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
V.prototype.W = p;
V.prototype.P = function(a, b, c) {
  return Tf(b, X, "[", " ", "]", c, this);
};
yd.prototype.W = p;
yd.prototype.P = function(a, b) {
  return C(b, "()");
};
Pa.prototype.W = p;
Pa.prototype.P = function(a, b, c) {
  return ag(this, X, b, c);
};
Kf.prototype.W = p;
Kf.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
xd.prototype.W = p;
xd.prototype.P = function(a, b, c) {
  return Tf(b, X, "(", " ", ")", c, this);
};
qc.prototype.gb = p;
qc.prototype.ab = function(a, b) {
  if (b instanceof qc) {
    return pc(this, b);
  }
  throw Error([z.a("Cannot compare "), z.a(this), z.a(" to "), z.a(b)].join(""));
};
U.prototype.gb = p;
U.prototype.ab = function(a, b) {
  if (b instanceof U) {
    return Bd(this, b);
  }
  throw Error([z.a("Cannot compare "), z.a(this), z.a(" to "), z.a(b)].join(""));
};
Oe.prototype.gb = p;
Oe.prototype.ab = function(a, b) {
  if (fd(b)) {
    return nd(this, b);
  }
  throw Error([z.a("Cannot compare "), z.a(this), z.a(" to "), z.a(b)].join(""));
};
V.prototype.gb = p;
V.prototype.ab = function(a, b) {
  if (fd(b)) {
    return nd(this, b);
  }
  throw Error([z.a("Cannot compare "), z.a(this), z.a(" to "), z.a(b)].join(""));
};
function hg(a) {
  return Ic(a, Math.floor(Math.random() * O(a)));
}
;var ig = new U(null, "y", "y", -1757859776), jg = new U(null, "key-code", "key-code", -1732114304), kg = new U(null, "shift", "shift", 997140064), lg = new U(null, "features", "features", -1146962336), mg = new U(null, "disable-stroke-perspective", "disable-stroke-perspective", 479198433), ng = new U(null, "hsb", "hsb", -753472031), og = new U(null, "down", "down", 1565245570), pg = new U(null, "disable-depth-mask", "disable-depth-mask", 3298562), qg = new U(null, "p-y", "p-y", -530704830), rg = 
new U(null, "burn", "burn", -458179293), sg = new U(null, "key-typed", "key-typed", -876037597), tg = new U(null, "mouse-clicked", "mouse-clicked", -199339421), ug = new U(null, "mouse-released", "mouse-released", -664480061), vg = new U(null, "fn", "fn", -1175266204), wg = new U(null, "f8", "f8", -2141475484), Ta = new U(null, "meta", "meta", 1499536964), xg = new U(null, "dx", "dx", -381796732), yg = new U(null, "screen", "screen", 1990059748), zg = new U(null, "enable-depth-test", "enable-depth-test", 
1519326084), Ag = new U(null, "mouse-exited", "mouse-exited", -483205244), Bg = new U(null, "enable-depth-sort", "enable-depth-sort", -383089627), Cg = new U(null, "f1", "f1", 1714532389), Dg = new U(null, "color", "color", 1011675173), Ua = new U(null, "dup", "dup", 556298533), Eg = new U(null, "java2d", "java2d", 166099237), Fg = new U(null, "disable-texture-mipmaps", "disable-texture-mipmaps", 1697917541), Gg = new U(null, "key", "key", -1516042587), Hg = new U(null, "darkest", "darkest", 68197253), 
Ig = new U(null, "f10", "f10", 627525541), Jg = new U(null, "dodge", "dodge", -1556666427), Kg = new U(null, "on-close", "on-close", -761178394), Lg = new U(null, "disable-stroke-pure", "disable-stroke-pure", 735493926), Mg = new U(null, "replace", "replace", -786587770), Ng = new U(null, "alt", "alt", -3214426), Og = new U(null, "button", "button", 1456579943), Pg = new U(null, "mouse-wheel", "mouse-wheel", 1811662439), ge = new U(null, "validator", "validator", -1966190681), Qg = new U(null, "disable-depth-test", 
"disable-depth-test", 284606407), Rg = new U(null, "keyPressed", "keyPressed", 1791025256), Sg = new U(null, "decor", "decor", -1730969431), Tg = new U(null, "enable-stroke-perspective", "enable-stroke-perspective", -259923319), Ug = new U(null, "opengl", "opengl", -614998103), Vg = new U(null, "time", "time", 1385887882), Wg = new U(null, "mouse-moved", "mouse-moved", -1918152310), Xd = new qc(null, "meta10850", "meta10850", 2076561194, null), Xg = new U(null, "safe-draw-fn", "safe-draw-fn", 1454900202), 
Yg = new U(null, "rgb", "rgb", 1432123467), Zg = new U(null, "circles", "circles", -1947060917), $g = new U(null, "dy", "dy", 1719547243), ah = new U(null, "mouseOut", "mouseOut", -386669045), bh = new U(null, "f5", "f5", 1587057387), ch = new U(null, "settings", "settings", 1556144875), dh = new U(null, "command", "command", -894540724), eh = new U(null, "mouseScrolled", "mouseScrolled", 31878252), gg = new U(null, "val", "val", 128701612), fh = new U(null, "update", "update", 1045576396), cg = 
new U(null, "fallback-impl", "fallback-impl", -1501286995), Qa = new U(null, "flush-on-newline", "flush-on-newline", -151457939), gh = new U(null, "mouseDragged", "mouseDragged", 129975181), hh = new U(null, "up", "up", -269712113), ih = new U(null, "renderer", "renderer", 336841071), jh = new U(null, "size", "size", 1098693007), kh = new U(null, "center", "center", -748944368), lh = new U(null, "setup", "setup", 1987730512), mh = new U(null, "mouse-pressed", "mouse-pressed", 736955536), nh = new U(null, 
"middleware", "middleware", 1462115504), oh = new U(null, "disable-optimized-stroke", "disable-optimized-stroke", 74038544), ph = new U(null, "focus-gained", "focus-gained", -857086384), Ra = new U(null, "readably", "readably", 1129599760), qh = new U(null, "global-key-events", "global-key-events", 335064944), Uf = new U(null, "more-marker", "more-marker", -14717935), rh = new U(null, "f11", "f11", -1417398799), sh = new U(null, "host", "host", -1558485167), th = new U(null, "overlay", "overlay", 
-139131598), uh = new U(null, "mouse-entered", "mouse-entered", 811350322), vh = new U(null, "enable-opengl-errors", "enable-opengl-errors", 89998962), wh = new U(null, "enable-stroke-pure", "enable-stroke-pure", 881345587), xh = new U(null, "no-safe-draw", "no-safe-draw", -1157778157), yh = new U(null, "focus-lost", "focus-lost", -554849613), zh = new U(null, "f3", "f3", 1954829043), Ah = new U(null, "enable-depth-mask", "enable-depth-mask", 872785875), Bh = new U(null, "status", "status", -1997798413), 
Dh = new U(null, "key-pressed", "key-pressed", -757100364), Eh = new U(null, "key-released", "key-released", 215919828), Va = new U(null, "print-length", "print-length", 1931866356), Fh = new U(null, "f2", "f2", 396168596), Gh = new U(null, "keyReleased", "keyReleased", 541714964), Hh = new U(null, "control", "control", 1892578036), Ih = new U(null, "difference", "difference", 1916101396), Jh = new U(null, "mouseClicked", "mouseClicked", 1764302965), Kh = new U(null, "enable-optimized-stroke", "enable-optimized-stroke", 
1537575253), Lh = new U(null, "p-x", "p-x", -1721211211), Mh = new U(null, "p2d", "p2d", -2106175755), Nh = new U(null, "mouseReleased", "mouseReleased", 1116234838), Oh = new U(null, "mousePressed", "mousePressed", 1776186454), Ph = new U(null, "mouseMoved", "mouseMoved", -1936954058), Qh = new U(null, "f12", "f12", 853352790), Rh = new U(null, "mouseOver", "mouseOver", -1334461930), Sh = new U(null, "exclusion", "exclusion", 531897910), Th = new U(null, "disable-opengl-errors", "disable-opengl-errors", 
506822839), Uh = new U(null, "unknown-key", "unknown-key", 255305911), Vh = new U(null, "right", "right", -452581833), Wh = new U(null, "host-id", "host-id", 742376279), Xh = new U(null, "hard-light", "hard-light", -37591145), Yh = new U(null, "keyTyped", "keyTyped", 1437329399), Zh = new U(null, "no-start", "no-start", 1381488856), $h = new U(null, "multiply", "multiply", -1036907048), ai = new U(null, "lightest", "lightest", -2043115912), bi = new U(null, "f7", "f7", 356150168), ci = new U(null, 
"x", "x", 2099068185), di = new U(null, "blend", "blend", 249565561), ei = new U(null, "disable-depth-sort", "disable-depth-sort", -1568352839), fi = new U(null, "raw-key", "raw-key", -162482279), gi = new U(null, "target", "target", 253001721), hi = new U(null, "f9", "f9", 704633338), ii = new U(null, "draw", "draw", 1358331674), ji = new U(null, "add", "add", 235287739), ki = new U(null, "soft-light", "soft-light", 513207899), bg = new U(null, "alt-impl", "alt-impl", 670969595), li = new U(null, 
"subtract", "subtract", 2136988635), mi = new U(null, "f6", "f6", 2103080604), ni = new U(null, "f4", "f4", 990968764), oi = new U(null, "p3d", "p3d", -850380194), pi = new U(null, "mouse-dragged", "mouse-dragged", -1220073441), qi = new U(null, "left", "left", -399115937), ri = new U(null, "enable-texture-mipmaps", "enable-texture-mipmaps", 1241892671);
var si;
a: {
  var ti = aa.navigator;
  if (ti) {
    var ui = ti.userAgent;
    if (ui) {
      si = ui;
      break a;
    }
  }
  si = "";
}
function vi(a) {
  return -1 != si.indexOf(a);
}
;var wi = vi("Opera"), xi = vi("Trident") || vi("MSIE"), yi = vi("Edge"), zi = vi("Gecko") && !(-1 != si.toLowerCase().indexOf("webkit") && !vi("Edge")) && !(vi("Trident") || vi("MSIE")) && !vi("Edge"), Ai = -1 != si.toLowerCase().indexOf("webkit") && !vi("Edge");
Ai && vi("Mobile");
vi("Macintosh");
vi("Windows");
vi("Linux") || vi("CrOS");
var Bi = aa.navigator || null;
Bi && (Bi.appVersion || "").indexOf("X11");
vi("Android");
!vi("iPhone") || vi("iPod") || vi("iPad");
vi("iPad");
vi("iPod");
function Ci() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Di;
a: {
  var Ei = "", Fi = function() {
    var a = si;
    if (zi) {
      return /rv\:([^\);]+)(\)|;)/.exec(a);
    }
    if (yi) {
      return /Edge\/([\d\.]+)/.exec(a);
    }
    if (xi) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    }
    if (Ai) {
      return /WebKit\/(\S+)/.exec(a);
    }
    if (wi) {
      return /(?:Version)[ \/]?(\S+)/.exec(a);
    }
  }();
  Fi && (Ei = Fi ? Fi[1] : "");
  if (xi) {
    var Gi = Ci();
    if (null != Gi && Gi > parseFloat(Ei)) {
      Di = String(Gi);
      break a;
    }
  }
  Di = Ei;
}
var Hi = {};
function Ii(a) {
  var b;
  if (!(b = Hi[a])) {
    b = 0;
    for (var c = fa(String(Di)).split("."), d = fa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if (0 == q[0].length && 0 == r[0].length) {
          break;
        }
        b = ha(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ha(0 == q[2].length, 0 == r[2].length) || ha(q[2], r[2]);
      } while (0 == b);
    }
    b = Hi[a] = 0 <= b;
  }
  return b;
}
var Ji;
var Ki = aa.document;
Ji = Ki && xi ? Ci() || ("CSS1Compat" == Ki.compatMode ? parseInt(Di, 10) : 5) : void 0;
!zi && !xi || xi && 9 <= Number(Ji) || zi && Ii("1.9.1");
xi && Ii("9");
var Li = new Pa(null, 3, [Sg, new V(null, 2, 5, W, ["2.0", "Try :features [:present] for similar effect"], null), gi, new V(null, 2, 5, W, ["2.0", "Use :features [:keep-on-top] instead."], null), Xg, new V(null, 2, 5, W, ["2.0", "Use :features [:no-safe-fns] instead."], null)], null);
function Mi(a) {
  a = Sf(a);
  t(a.a ? a.a(xh) : a.call(null, xh)) && eg(Oc(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.", "Use :feature [:no-safe-fns] now."], 0));
  return null == a ? null : wb(a, xh);
}
function Ni(a) {
  var b = pe.f(a, new V(null, 1, 5, W, [lg], null), Mi);
  return oe(Yd, ne(Wa, function() {
    return function(a) {
      return function e(b) {
        return new Ed(null, function() {
          return function() {
            for (;;) {
              var a = G(b);
              if (a) {
                if (gd(a)) {
                  var c = Yb(a), f = O(c), m = new Gd(Array(f), 0);
                  return function() {
                    for (var a = 0;;) {
                      if (a < f) {
                        var b = A.b(c, a), e = S(b, 0, null), h = S(b, 1, null), b = m;
                        var k = Li.a ? Li.a(e) : Li.call(null, e);
                        t(k) ? (h = S(k, 0, null), k = S(k, 1, null), eg(Oc([e, "option was removed in Quil", h, ".", k], 0)), e = null) : e = new V(null, 2, 5, W, [e, h], null);
                        Kd(b, e);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Jd(m.la(), e(Zb(a))) : Jd(m.la(), null);
                }
                var q = J(a), r = S(q, 0, null), v = S(q, 1, null);
                return Q(function() {
                  var a = Li.a ? Li.a(r) : Li.call(null, r);
                  if (t(a)) {
                    var b = S(a, 0, null), a = S(a, 1, null);
                    eg(Oc([r, "option was removed in Quil", b, ".", a], 0));
                    return null;
                  }
                  return new V(null, 2, 5, W, [r, v], null);
                }(), e(rc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()));
}
;var Oi = !xi || 9 <= Number(Ji), Pi = xi && !Ii("9");
!Ai || Ii("528");
zi && Ii("1.9b") || xi && Ii("8") || wi && Ii("9.5") || Ai && Ii("528");
zi && !Ii("8") || xi && Ii("9");
function Qi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Jb = !1;
}
Qi.prototype.stopPropagation = function() {
  this.Jb = !0;
};
Qi.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Ri(a, b) {
  Qi.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.kb = this.state = null;
  if (a) {
    var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
      if (zi) {
        var f;
        a: {
          try {
            Ga(e.nodeName);
            f = !0;
            break a;
          } catch (h) {
          }
          f = !1;
        }
        f || (e = null);
      }
    } else {
      "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    }
    this.relatedTarget = e;
    null === d ? (this.offsetX = Ai || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Ai || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 
    0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.kb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Qi.prototype;
  Ri.Xb = Qi.prototype;
  Ri.prototype = new a;
  Ri.prototype.constructor = Ri;
  Ri.rb = function(a, c, d) {
    for (var b = Array(arguments.length - 2), f = 2;f < arguments.length;f++) {
      b[f - 2] = arguments[f];
    }
    return Qi.prototype[c].apply(a, b);
  };
})();
Ri.prototype.stopPropagation = function() {
  Ri.Xb.stopPropagation.call(this);
  this.kb.stopPropagation ? this.kb.stopPropagation() : this.kb.cancelBubble = !0;
};
Ri.prototype.preventDefault = function() {
  Ri.Xb.preventDefault.call(this);
  var a = this.kb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Pi) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Si = "closure_listenable_" + (1E6 * Math.random() | 0), Ti = 0;
function Ui(a, b, c, d, e) {
  this.listener = a;
  this.yb = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.Hb = e;
  this.key = ++Ti;
  this.pb = this.Bb = !1;
}
function Vi(a) {
  a.pb = !0;
  a.listener = null;
  a.yb = null;
  a.src = null;
  a.Hb = null;
}
;function Wi(a) {
  this.src = a;
  this.ra = {};
  this.zb = 0;
}
Wi.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ra[f];
  a || (a = this.ra[f] = [], this.zb++);
  var h = Xi(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.Bb = !1)) : (b = new Ui(b, this.src, f, !!d, e), b.Bb = c, a.push(b));
  return b;
};
Wi.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.ra)) {
    return !1;
  }
  var e = this.ra[a];
  b = Xi(e, b, c, d);
  return -1 < b ? (Vi(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.ra[a], this.zb--), !0) : !1;
};
Wi.prototype.hasListener = function(a, b) {
  var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
  return ka(this.ra, function(a) {
    for (var f = 0;f < a.length;++f) {
      if (!(c && a[f].type != d || e && a[f].capture != b)) {
        return !0;
      }
    }
    return !1;
  });
};
function Xi(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.pb && f.listener == b && f.capture == !!c && f.Hb == d) {
      return e;
    }
  }
  return -1;
}
;var Yi = "closure_lm_" + (1E6 * Math.random() | 0), Zi = {}, $i = 0;
function aj() {
  var a = bj, b = Oi ? function(c) {
    return a.call(b.src, b.listener, c);
  } : function(c) {
    c = a.call(b.src, b.listener, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function cj(a, b, c, d, e) {
  if ("array" == n(b)) {
    for (var f = 0;f < b.length;f++) {
      cj(a, b[f], c, d, e);
    }
  } else {
    if (c = dj(c), a && a[Si]) {
      a.Ic(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = ej(a);
      h || (a[Yi] = h = new Wi(a));
      c = h.add(b, c, !0, d, e);
      if (!c.yb) {
        d = aj();
        c.yb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) {
          a.addEventListener(b.toString(), d, f);
        } else {
          if (a.attachEvent) {
            a.attachEvent(fj(b.toString()), d);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
        $i++;
      }
    }
  }
}
function fj(a) {
  return a in Zi ? Zi[a] : Zi[a] = "on" + a;
}
function gj(a, b, c, d) {
  var e = !0;
  if (a = ej(a)) {
    if (b = a.ra[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.capture == c && !f.pb && (f = hj(f, d), e = e && !1 !== f);
      }
    }
  }
  return e;
}
function hj(a, b) {
  var c = a.listener, d = a.Hb || a.src;
  if (a.Bb && "number" != typeof a && a && !a.pb) {
    var e = a.src;
    if (e && e[Si]) {
      e.Jc(a);
    } else {
      var f = a.type, h = a.yb;
      e.removeEventListener ? e.removeEventListener(f, h, a.capture) : e.detachEvent && e.detachEvent(fj(f), h);
      $i--;
      if (f = ej(e)) {
        var h = a.type, k;
        if (k = h in f.ra) {
          k = f.ra[h];
          var l = Ba(k, a), m;
          (m = 0 <= l) && Array.prototype.splice.call(k, l, 1);
          k = m;
        }
        k && (Vi(a), 0 == f.ra[h].length && (delete f.ra[h], f.zb--));
        0 == f.zb && (f.src = null, e[Yi] = null);
      } else {
        Vi(a);
      }
    }
  }
  return c.call(d, b);
}
function bj(a, b) {
  if (a.pb) {
    return !0;
  }
  if (!Oi) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Ri(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (l) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, h = e.length - 1;!c.Jb && 0 <= h;h--) {
        c.currentTarget = e[h];
        var k = gj(e[h], f, !0, c), d = d && k;
      }
      for (h = 0;!c.Jb && h < e.length;h++) {
        c.currentTarget = e[h], k = gj(e[h], f, !1, c), d = d && k;
      }
    }
    return d;
  }
  return hj(a, new Ri(b, this));
}
function ej(a) {
  a = a[Yi];
  return a instanceof Wi ? a : null;
}
var ij = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function dj(a) {
  if (ca(a)) {
    return a;
  }
  a[ij] || (a[ij] = function(b) {
    return a.handleEvent(b);
  });
  return a[ij];
}
;function jj(a, b) {
  if (t(F.b(b, a))) {
    return F.b(b, a);
  }
  if (t($d(Rf([a]), bf(b)))) {
    return a;
  }
  throw Error([z.a("Expecting a keyword, got: "), z.a(a), z.a(". Expected one of: "), z.a(Je(pd(af(b))))].join(""));
}
;var Z = null, kj = new Pa(null, 4, [Eg, Processing.prototype.PConstants.JAVA2D, Mh, Processing.prototype.PConstants.P2D, oi, Processing.prototype.PConstants.P3D, Ug, Processing.prototype.PConstants.OPENGL], null), lj = function lj(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return lj.b(arguments[0], arguments[1]);
    case 3:
      return lj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
lj.b = function(a, b) {
  return Z.size(a | 0, b | 0);
};
lj.f = function(a, b, c) {
  return Z.size(a | 0, b | 0, jj(c, kj));
};
lj.A = 3;
function mj(a, b) {
  for (var c = G(Wc([Rg, ah, eh, gh, lh, Gh, Jh, Nh, Oh, Ph, Rh, Yh, ii], [Dh, Ag, Pg, pi, lh, Eh, tg, ug, mh, Wg, uh, sg, ii])), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.K(null, f), k = S(h, 0, null), l = S(h, 1, null), m = b.a ? b.a(l) : b.call(null, l);
      if (t(m)) {
        var q = m;
        a[Dd(k)] = function(b, c, d, e, f) {
          return function() {
            var b = Z;
            Z = a;
            try {
              return f.v ? f.v() : f.call(null);
            } finally {
              Z = b;
            }
          };
        }(c, d, e, f, q, m, h, k, l);
      }
      f += 1;
    } else {
      if (m = G(c)) {
        h = m;
        if (gd(h)) {
          c = Yb(h), f = Zb(h), d = c, e = O(c), c = f;
        } else {
          var q = J(h), k = S(q, 0, null), l = S(q, 1, null), r = b.a ? b.a(l) : b.call(null, l);
          if (t(r)) {
            var v = r;
            a[Dd(k)] = function(b, c, d, e, f) {
              return function() {
                var b = Z;
                Z = a;
                try {
                  return f.v ? f.v() : f.call(null);
                } finally {
                  Z = b;
                }
              };
            }(c, d, e, f, v, r, q, k, l, h, m);
          }
          c = L(h);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
}
function nj(a) {
  var b = Mf(Oc([new Pa(null, 1, [jh, new V(null, 2, 5, W, [500, 300], null)], null), function(b) {
    return b.a ? b.a(a) : b.call(null, a);
  }.call(null, Rd(be, Q(Ni, nh.b(a, Uc))))], 0)), c = function() {
    var a = jh.a(b);
    return t(a) ? a : new V(null, 2, 5, W, [200, 200], null);
  }(), d = ih.a(b), e = Sf(lg.a(b)), f = function(a, b, c) {
    return function() {
      Rd(lj, Nd.b(b, t(c) ? new V(null, 1, 5, W, [c], null) : Uc));
      t(ch.a(a)) && ch.a(a).call(null);
      return t(lh.a(a)) ? lh.a(a).call(null) : null;
    };
  }(b, c, d, e), h = t(Pg.a(b)) ? function(a) {
    return function() {
      return Pg.a(a).call(null, -1 * Z.mouseScroll);
    };
  }(b, c, d, e, f) : null, k = T.o(b, lh, f, Oc([Pg, h], 0)), c = new Processing.Sketch(function(a, b, c, d, e, f, h) {
    return function(a) {
      mj(a, h);
      a.ob = ee ? ee(null) : de.call(null, null);
      return a.vc = ee ? ee(60) : de.call(null, 60);
    };
  }(b, c, d, e, f, h, k));
  ld(e, qh) && (c.options.globalKeyEvents = !0);
  return c;
}
function oj(a) {
  a = a.tc;
  t(a) && a.exit();
}
var pj = function pj(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  return pj.o(0 < c.length ? new I(c.slice(0), 0, null) : null);
};
pj.o = function(a) {
  var b = Rd(fe, a);
  a = function() {
    var a = sh.a(b), c = document;
    return ba(a) ? c.getElementById(a) : a;
  }();
  var c = function() {
    var a = ih.a(b);
    return t(a) ? a : Mh;
  }();
  return t(a) ? (t(a.Vb) ? M.b(c, a.Vb) || console.warn("WARNING: Using different context on one canvas!") : a.Vb = c, oj(a), a.tc = new Processing(a, nj(b))) : console.error("ERROR: Cannot create sketch. :host is not specified.");
};
pj.A = 0;
pj.w = function(a) {
  return pj.o(G(a));
};
var qj = ee ? ee(K) : de.call(null, K);
function rj(a) {
  var b = document.createElement("canvas");
  b.setAttribute("id", a);
  document.body.appendChild(b);
}
function sj() {
  for (var a = 1 >= document.body.childNodes.length, b = G(Ac.a ? Ac.a(qj) : Ac.call(null, qj)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.K(null, e);
      t(a) && rj(Wh.a(f));
      vg.a(f).call(null);
      e += 1;
    } else {
      if (b = G(b)) {
        c = b, gd(c) ? (b = Yb(c), e = Zb(c), c = b, d = O(b), b = e) : (b = J(c), t(a) && rj(Wh.a(b)), vg.a(b).call(null), b = L(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
  return he.b ? he.b(qj, Uc) : he.call(null, qj, Uc);
}
cj(window, "load", sj);
function tj() {
  return t(null) ? null : Z;
}
Wc([rg, yg, Hg, Jg, Mg, th, Ih, Sh, Xh, $h, ai, di, ji, ki, li], [Processing.prototype.PConstants.BURN, Processing.prototype.PConstants.SCREEN, Processing.prototype.PConstants.DARKEST, Processing.prototype.PConstants.DODGE, Processing.prototype.PConstants.REPLACE, Processing.prototype.PConstants.OVERLAY, Processing.prototype.PConstants.DIFFERENCE, Processing.prototype.PConstants.EXCLUSION, Processing.prototype.PConstants.HARD_LIGHT, Processing.prototype.PConstants.MULTIPLY, Processing.prototype.PConstants.LIGHTEST, 
Processing.prototype.PConstants.BLEND, Processing.prototype.PConstants.ADD, Processing.prototype.PConstants.SOFT_LIGHT, Processing.prototype.PConstants.SUBTRACT]);
var uj = new Pa(null, 2, [Yg, Processing.prototype.PConstants.RGB, ng, Processing.prototype.PConstants.HSB], null);
Wc([mg, pg, zg, Bg, Fg, Lg, Qg, Tg, oh, vh, wh, Ah, Kh, Th, ei, ri], [Processing.prototype.PConstants.DISABLE_STROKE_PERSPECTIVE, Processing.prototype.PConstants.DISABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_DEPTH_SORT, Processing.prototype.PConstants.DISABLE_TEXTURE_MIPMAPS, Processing.prototype.PConstants.DISABLE_STROKE_PURE, Processing.prototype.PConstants.DISABLE_DEPTH_TEST, Processing.prototype.PConstants.ENABLE_STROKE_PERSPECTIVE, 
Processing.prototype.PConstants.DISABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.ENABLE_OPENGL_ERRORS, Processing.prototype.PConstants.ENABLE_STROKE_PURE, Processing.prototype.PConstants.ENABLE_DEPTH_MASK, Processing.prototype.PConstants.ENABLE_OPTIMIZED_STROKE, Processing.prototype.PConstants.DISABLE_OPENGL_ERRORS, Processing.prototype.PConstants.DISABLE_DEPTH_SORT, Processing.prototype.PConstants.ENABLE_TEXTURE_MIPMAPS]);
var vj = Wc([121, 39, 157, 119, 116, 113, 40, 117, 118, 122, 17, 115, 112, 123, 16, 120, 38, 18, 114, 37], [Ig, Vh, dh, wg, bh, Fh, og, mi, bi, rh, Hh, ni, Cg, Qh, kg, hi, hh, Ng, zh, qi]);
function wj(a) {
  tj().fill(a, 255, 255);
  tj()["no-fill-quil"] = !1;
}
function xj() {
  var a = Z.mouseButton;
  return t(M.b ? M.b(37, a) : M.call(null, 37, a)) ? qi : t(M.b ? M.b(39, a) : M.call(null, 39, a)) ? Vh : t(M.b ? M.b(3, a) : M.call(null, 3, a)) ? kh : null;
}
var yj = function yj(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 1:
      return yj.a(arguments[0]);
    case 2:
      return yj.b(arguments[0], arguments[1]);
    case 3:
      return yj.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
yj.a = function(a) {
  return Rd(yj, a);
};
yj.b = function(a, b) {
  return tj().translate(a, b);
};
yj.f = function(a, b, c) {
  return tj().translate(a, b, c);
};
yj.A = 3;
z.a("state map is missing :navigation-3d key. ");
z.a("Did you accidentally removed it from the state in ");
z.a(":update or any other handler?");
Cd.a(" ");
z.a("state map is missing :navigation-2d key. ");
z.a("Did you accidentally removed it from the state in ");
z.a(":update or any other handler?");
function zj(a) {
  var b = lh.b(a, function() {
    return null;
  });
  return T.f(a, lh, function(a) {
    return function() {
      var b = Z.ob, c = a.v ? a.v() : a.call(null);
      return he.b ? he.b(b, c) : he.call(null, b, c);
    };
  }(b));
}
function Aj(a) {
  var b = ii.b(a, function() {
    return null;
  }), c = fh.b(a, ud), b = function(a, b) {
    return function() {
      var c = ie.b(Z.ob, M.b(Z.frameCount, 1) ? ud : b);
      return a.a ? a.a(c) : a.call(null, c);
    };
  }(b, c);
  return T.f(Xc.b(a, fh), ii, b);
}
function Bj() {
  return new Pa(null, 2, [ci, Z.mouseX, ig, Z.mouseY], null);
}
function Cj() {
  return new Pa(null, 3, [ci, Z.mouseX, ig, Z.mouseY, Og, xj()], null);
}
function Dj() {
  var a;
  a = Z.key;
  var b = Z.keyCode;
  a = t(M.b(65535, String(a).charCodeAt())) ? F.f(vj, b, Uh) : Cd.a(String(a));
  return new Pa(null, 3, [Gg, a, jg, Z.keyCode, fi, Z.key], null);
}
var Ej = function Ej(b) {
  for (var c = [], d = arguments.length, e = 0;;) {
    if (e < d) {
      c.push(arguments[e]), e += 1;
    } else {
      break;
    }
  }
  switch(c.length) {
    case 2:
      return Ej.b(arguments[0], arguments[1]);
    case 3:
      return Ej.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([z.a("Invalid arity: "), z.a(c.length)].join(""));
  }
};
Ej.b = function(a, b) {
  return Ej.f(a, b, null);
};
Ej.f = function(a, b, c) {
  var d = a.a ? a.a(b) : a.call(null, b);
  return t(d) ? T.f(a, b, t(c) ? function(a) {
    return function() {
      return ie.f(Z.ob, a, c.v ? c.v() : c.call(null));
    };
  }(d, d) : function(a) {
    return function() {
      return ie.b(Z.ob, a);
    };
  }(d, d)) : a;
};
Ej.A = 3;
function Fj(a, b) {
  return rd(function(a, b) {
    return b instanceof U ? Ej.b(a, b) : Sd(Ej, a, b);
  }, a, b);
}
function Gj(a) {
  var b = Pg.a(a);
  return t(b) ? T.f(a, Pg, function(a) {
    return function(b) {
      return ie.f(Z.ob, a, b);
    };
  }(b, b)) : a;
}
function Hj(a) {
  return Gj(Fj(Aj(zj(a)), Oc([ph, yh, new V(null, 2, 5, W, [uh, Bj], null), new V(null, 2, 5, W, [Ag, Bj], null), new V(null, 2, 5, W, [mh, Cj], null), new V(null, 2, 5, W, [ug, Bj], null), new V(null, 2, 5, W, [tg, Cj], null), new V(null, 2, 5, W, [Wg, function() {
    return new Pa(null, 4, [ci, Z.mouseX, ig, Z.mouseY, Lh, Z.pmouseX, qg, Z.pmouseY], null);
  }], null), new V(null, 2, 5, W, [pi, function() {
    return new Pa(null, 5, [ci, Z.mouseX, ig, Z.mouseY, Lh, Z.pmouseX, qg, Z.pmouseY, Og, xj()], null);
  }], null), new V(null, 2, 5, W, [Dh, Dj], null), Eh, new V(null, 2, 5, W, [sg, Dj], null), Kg], 0)));
}
;function Ij(a) {
  return Hj(a);
}
;function Jj() {
  return new Pa(null, 6, [Dg, Math.floor(256 * Math.random()), jh, Math.floor(51 * Math.random()) + 50, xg, hg(new V(null, 2, 5, W, [1, -1], null)) * hg(new V(null, 3, 5, W, [2, 3, 4], null)), $g, hg(new V(null, 2, 5, W, [1, -1], null)) * hg(new V(null, 3, 5, W, [2, 3, 4], null)), ci, Z.width / 2, ig, Z.height / 2], null);
}
function Kj() {
  var a = Z.vc;
  he.b ? he.b(a, 30) : he.call(null, a, 30);
  Z.frameRate(30);
  a = jj(ng, uj);
  tj().colorMode(a | 0);
  a = ke(5, le(Jj));
  a = Je(a);
  return new Pa(null, 3, [Bh, "normal", Vg, 1E3, Zg, a], null);
}
function Lj(a) {
  return qe(a, Vg, function(a) {
    return a - 5;
  });
}
function Mj(a) {
  return qe(qe(a, ci, function(b) {
    return b + xg.a(a);
  }), ig, function(b) {
    return b + $g.a(a);
  });
}
function Nj(a) {
  var b = jh.a(a) / 2;
  return 0 + b >= ci.a(a) || Z.width - b <= ci.a(a) ? qe(a, xg, function() {
    return function(a) {
      return -a;
    };
  }(b)) : a;
}
function Oj(a) {
  var b = jh.a(a) / 2;
  return 0 + b >= ig.a(a) || Z.height - b <= ig.a(a) ? qe(a, $g, function() {
    return function(a) {
      return -a;
    };
  }(b)) : a;
}
function Pj(a) {
  return Oj(Nj(Mj(a)));
}
function Qj(a) {
  return qe(a, Zg, function(a) {
    return Je(je.b(Pj, a));
  });
}
function Rj(a) {
  if (M.b("normal", Bh.a(a))) {
    a = Qj(Lj(a));
    var b = Zg.a(a);
    a = null == b || Ya(G(b)) ? T.f(a, Bh, "win") : 0 >= Vg.a(a) ? T.f(a, Bh, "lose") : a;
  }
  return a;
}
function Sj(a, b) {
  function c(a) {
    var c = ci.a(a) - ci.a(b), d = ig.a(a) - ig.a(b), h = function() {
      return function(a) {
        return a * a;
      };
    }(c, d), c = h(c) + h(d);
    a = jh.a(a) / 2;
    return h(a) >= c;
  }
  return qe(a, Zg, function(a) {
    return Je(ne(c, a));
  });
}
function Tj(a) {
  tj().background(240);
  wj(255);
  var b = [z.a("Time remaining:"), z.a(Vg.a(a))].join("");
  t(!0 === tj()["no-fill-quil"]) || tj().text(b, 0, 0, 200, 200);
  if (M.b("normal", Bh.a(a))) {
    for (var c = G(Zg.a(a)), b = null, d = 0, e = 0;;) {
      if (e < d) {
        a = b.K(null, e);
        wj(Dg.a(a));
        var f = ci.a(a), h = ig.a(a), k = jh.a(a);
        a = jh.a(a);
        tj().ellipse(f, h, k, a);
        e += 1;
      } else {
        if (a = G(c)) {
          c = a, gd(c) ? (b = Yb(c), c = Zb(c), a = b, d = O(b), b = a) : (a = J(c), wj(Dg.a(a)), b = ci.a(a), d = ig.a(a), e = jh.a(a), a = jh.a(a), tj().ellipse(b, d, e, a), c = L(c), b = null, d = 0), e = 0;
        } else {
          return null;
        }
      }
    }
  } else {
    b = new V(null, 2, 5, W, [Z.width / 2, Z.height / 2], null);
    tj().pushMatrix();
    try {
      return yj.a(b), c = [z.a("You "), z.a(Bh.a(a))].join(""), t(!0 === tj()["no-fill-quil"]) ? null : tj().text(c, -50, -50, 50, 50);
    } finally {
      tj().popMatrix();
    }
  }
}
function Uj() {
  return pj.o(Oc([sh, "circleclick", tg, Zc(Sj) ? function() {
    function a(a) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, e = Array(arguments.length - 0);c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new I(e, 0);
      }
      return b.call(this, c);
    }
    function b(a) {
      return Rd(Sj, a);
    }
    a.A = 0;
    a.w = function(a) {
      a = G(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Sj, fh, Zc(Rj) ? function() {
    function a(a) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, e = Array(arguments.length - 0);c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new I(e, 0);
      }
      return b.call(this, c);
    }
    function b(a) {
      return Rd(Rj, a);
    }
    a.A = 0;
    a.w = function(a) {
      a = G(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Rj, jh, new V(null, 2, 5, W, [500, 500], null), lh, Zc(Kj) ? function() {
    function a(a) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, e = Array(arguments.length - 0);c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new I(e, 0);
      }
      return b.call(this, c);
    }
    function b(a) {
      return Rd(Kj, a);
    }
    a.A = 0;
    a.w = function(a) {
      a = G(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Kj, nh, new V(null, 1, 5, W, [Ij], null), ii, Zc(Tj) ? function() {
    function a(a) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, e = Array(arguments.length - 0);c < e.length;) {
          e[c] = arguments[c + 0], ++c;
        }
        c = new I(e, 0);
      }
      return b.call(this, c);
    }
    function b(a) {
      return Rd(Tj, a);
    }
    a.A = 0;
    a.w = function(a) {
      a = G(a);
      return b(a);
    };
    a.o = b;
    return a;
  }() : Tj], 0));
}
var Vj = ["circleclick", "core", "circleclick"], Wj = aa;
Vj[0] in Wj || !Wj.execScript || Wj.execScript("var " + Vj[0]);
for (var Xj;Vj.length && (Xj = Vj.shift());) {
  Vj.length || void 0 === Uj ? Wj = Wj[Xj] ? Wj[Xj] : Wj[Xj] = {} : Wj[Xj] = Uj;
}
t($d(function(a) {
  return M.b(Zh, a);
}, null)) || (ie.f(qj, Tc, new Pa(null, 2, [vg, Uj, Wh, "circleclick"], null)), M.b(document.readyState, "complete") && sj());

})();
