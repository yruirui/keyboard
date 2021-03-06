// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Ypau":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "e9312995559a911a6f9b63a6bd78eeec";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"30Yv7":[function(require,module,exports) {
const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)
class keyboard{
    constructor($input){
        this.$input=$input
        this.text=''
        this.init()
        this.bind()

    }

    setPage(name){
        this.$keyboard.querySelectorAll('.page').forEach($page=>$page.style.display='none')
        this.$keyboard.querySelector('.page-'+name).style.display='block'
    }

    bind() {
        let self = this
        this.$input.onclick = function(e) {
          this.classList.add('focus')
          self.$keyboard.classList.add('show')
          e.stopPropagation()
        }
    document.addEventListener('click',function(e){
        self.$keyboard.classList.remove('show')
        self.$input.classList.remove('focus')
    })
    this.$keyboard.onclick=function(e){
            e.stopPropagation()
        }
    this.$keyboard.querySelectorAll('.row > span').forEach($key=>{
    $key.onclick=function(e){
        let type=$key.dataset.type
        switch(type){
            case 'char':
                self.text+=this.innerText
                self.$input.innerText=self.text
                break;
            case 'uppercase':
                self.setPage('uppercase');
                break;
            case 'lowercase':
                self.setPage('lowercase');
                break;
            case 'number':
                self.setPage('number');
                break;
            case 'symbol':
                self.setPage('symbol');
                break;
            case 'backspace':
                self.text=self.text.substr(0,self.text.length-1)
                self.$input.innerText=self.text
                break;
            case 'space':
                self.text+=' '
                self.$input.innerText=self.text
                break;
            case 'return':
                self.text+='\n'
                self.$input.innerText=self.text
                break;
        }
    }
})   
    }

    init(){
        let $keyboard=document.createElement('div')
        $keyboard.classList.add('keyboard')
        $keyboard.innerHTML=`
        <div class="page page-lowercase">
            <div class="row">
                <span class='col-2 active' data-type="char">q</span>
                <span class='col-2' data-type="char">w</span>
                <span class='col-2' data-type="char">e</span>
                <span class='col-2' data-type="char">r</span>
                <span class='col-2' data-type="char">t</span>
                <span class='col-2' data-type="char">y</span>
                <span class='col-2' data-type="char">u</span>
                <span class='col-2' data-type="char">i</span>
                <span class='col-2' data-type="char">o</span>
                <span class='col-2' data-type="char">p</span>
            </div>
            <div class="row">
                <span class='col-2 offset-1'>a</span>
                <span class='col-2' data-type="char">s</span>
                <span class='col-2' data-type="char">d</span>
                <span class='col-2' data-type="char">f</span>
                <span class='col-2' data-type="char">g</span>
                <span class='col-2' data-type="char">h</span>
                <span class='col-2' data-type="char">j</span>
                <span class='col-2' data-type="char">k</span>
                <span class='col-2' data-type="char">l</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="uppercase"><i class="iconfont icon-caps-lock"></i></span>
                <span class='col-2' data-type="char">z</span>
                <span class='col-2' data-type="char">x</span>
                <span class='col-2' data-type="char">c</span>
                <span class='col-2' data-type="char">v</span>
                <span class='col-2' data-type="char">b</span>
                <span class='col-2' data-type="char">n</span>
                <span class='col-2' data-type="char">m</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">123</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        
        <div class="page page-uppercase">
            <div class="row">
                <span class='col-2' data-type="char">Q</span>
                <span class='col-2' data-type="char">W</span>
                <span class='col-2' data-type="char">E</span>
                <span class='col-2' data-type="char">R</span>
                <span class='col-2' data-type="char">T</span>
                <span class='col-2' data-type="char">Y</span>
                <span class='col-2' data-type="char">U</span>
                <span class='col-2' data-type="char">I</span>
                <span class='col-2' data-type="char">O</span>
                <span class='col-2' data-type="char">P</span>
            </div>
            <div class="row">
                <span class='col-2 offset-1' data-type="char">A</span>
                <span class='col-2' data-type="char">S</span>
                <span class='col-2' data-type="char">D</span>
                <span class='col-2' data-type="char">F</span>
                <span class='col-2' data-type="char">G</span>
                <span class='col-2' data-type="char">H</span>
                <span class='col-2' data-type="char">J</span>
                <span class='col-2' data-type="char">K</span>
                <span class='col-2' data-type="char">L</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="lowercase"><i class="iconfont icon-caps-lock"></i></span>
                <span class='col-2' data-type="char">Z</span>
                <span class='col-2' data-type="char">X</span>
                <span class='col-2' data-type="char">C</span>
                <span class='col-2' data-type="char">V</span>
                <span class='col-2' data-type="char">B</span>
                <span class='col-2' data-type="char">N</span>
                <span class='col-2' data-type="char">M</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">123</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        <div class="page page-number">
            <div class="row">
                <span class='col-2' data-type="char">1</span>
                <span class='col-2' data-type="char">2</span>
                <span class='col-2' data-type="char">3</span>
                <span class='col-2' data-type="char">4</span>
                <span class='col-2' data-type="char">5</span>
                <span class='col-2' data-type="char">6</span>
                <span class='col-2' data-type="char">7</span>
                <span class='col-2' data-type="char">8</span>
                <span class='col-2' data-type="char">9</span>
                <span class='col-2' data-type="char">0</span>
            </div>
            <div class="row">
                
                <span class='col-2 offset-1' data-type="char">-</span>
                <span class='col-2' data-type="char">/</span>
                <span class='col-2' data-type="char">:</span>
                <span class='col-2' data-type="char">;</span>
                <span class='col-2' data-type="char">(</span>
                <span class='col-2' data-type="char">)</span>
                <span class='col-2' data-type="char">$</span>
                <span class='col-2' data-type="char">&</span>
                <span class='col-2 '>@</span>
            </div>
            <div class="row">
                <span class='col-3' data-type="symbol">#+=</span>
                <span class='col-2' data-type="char">.</span>
                <span class='col-2' data-type="char">,</span>
                <span class='col-2' data-type="char">?</span>
                <span class='col-2' data-type="char">!</span>
                <span class='col-2' data-type="char">'</span>
                <span class='col-2' data-type="char">"</span>
                <span class='col-2' data-type="char">\`</span>
                <span class='col-3' data-type="backspace"><i class="iconfont icon-backspace"></i></span>
            </div>
            <div class="row">
                <span class='col-4' data-type="number">ABC</span>
                <span class='col-12' data-type="space">space</span>
                <span class='col-4' data-type="return">return</span>
            </div>
        </div>
        <div class="page page-symbol">
            <div class="row">
                <span data-type="char" class="col-2">[</span>
                <span data-type="char" class="col-2">]</span>
                <span data-type="char" class="col-2">{</span>
                <span data-type="char" class="col-2">}</span>
                <span data-type="char" class="col-2">#</span>
                <span data-type="char" class="col-2">%</span>
                <span data-type="char" class="col-2">^</span>
                <span data-type="char" class="col-2">*</span>
                <span data-type="char" class="col-2">+</span>
                <span data-type="char" class="col-2">=</span>
              </div>
              <div class="row">
                <span data-type="char" class="col-2 offset-1">_</span>
                <span data-type="char" class="col-2">\</span>
                <span data-type="char" class="col-2">|</span>
                <span data-type="char" class="col-2">~</span>
                <span data-type="char" class="col-2"><</span>
                  <span data-type="char" class="col-2">></span>
                  <span data-type="char" class="col-2">??</span>
                  <span data-type="char" class="col-2">???</span>
                  <span data-type="char" class="col-2">???</span>
                  </div>
                <div class="row">
                  <span data-type="number" class="col-3">123</span>
                  <span data-type="char" class="col-2">.</span>
                  <span data-type="char" class="col-2">,</span>
                  <span data-type="char" class="col-2">?</span>
                  <span data-type="char" class="col-2">!</span>
                  <span data-type="char" class="col-2">'</span>
                  <span data-type="char" class="col-2">"</span>
                  <span data-type="char" class="col-2">\`</span>
                  <span data-type="backspace" class="col-3"><i class="iconfont icon-backspace"></i></span>
                </div>
                <div class="row">
                  <span data-type="lowercase" class="col-4">ABC</span>
                  <span data-type="space" class="col-12">space</span>
                  <span data-type="return" class="col-4">return</span>
                </div>
        </div>
    `
    document.body.appendChild($keyboard)
    this.$keyboard=$keyboard
    

    }
}
$$('.input').forEach($input=>new keyboard($input))

/*
const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)
$('.input').onclick = function(e){
    if(!this.classList.contains('focus')){
        this.classList.add('focus')
        $('.keyboard').classList.add('show')
        e.stopPropagation()
    }
}
document.onclick=function(e){
    $('.keyboard').classList.remove('show')
    $('.input').classList.remove('focus')
}
$('.keyboard').onclick=function(e){
    e.stopPropagation()
}
let text=''
$$('.keyboard .row > span').forEach($key=>{
    $key.onmousedown=function(){
        this.classList.add('active')
    }
    $key.onmouseup=function(){
        this.classList.remove('active')
    }
})
$$('.keyboard .row > span').forEach($key=>{
    $key.onclick=function(e){
        let type=$key.dataset.type
        switch(type){
            case 'char':
                text+=$key.innerText
                $('.input').innerText=text
                break;
            case 'uppercase':
                setPage('uppercase');
                break;
            case 'lowercase':
                setPage('lowercase');
                break;
            case 'number':
                setPage('number');
                break;
            case 'symbol':
                setPage('symbol');
                break;
            case 'backspace':
                text=text.substr(0,text.length-1)
                $('.input').innerText=text
                break;
            case 'space':
                text+=' '
                $('.input').innerText=text
                break;
            case 'return':
                text+='\n'
                $('.input').innerText=text
                break;
        }
    }
})
function setPage(name){
    $$('.keyboard .page').forEach($page=>$page.style.display='none')
    $('.keyboard .page-'+name).style.display='block'
}
*/
},{}]},["1Ypau","30Yv7"], "30Yv7", "parcelRequire427e")

//# sourceMappingURL=index.bd78eeec.js.map
