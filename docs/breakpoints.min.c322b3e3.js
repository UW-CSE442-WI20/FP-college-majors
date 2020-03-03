// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"OMwT":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* breakpoints.js v1.0 | @ajlkn | MIT licensed */
var breakpoints = function () {
  "use strict";

  function e(e) {
    t.init(e);
  }

  var t = {
    list: null,
    media: {},
    events: [],
    init: function init(e) {
      t.list = e, window.addEventListener("resize", t.poll), window.addEventListener("orientationchange", t.poll), window.addEventListener("load", t.poll), window.addEventListener("fullscreenchange", t.poll);
    },
    active: function active(e) {
      var n, a, s, i, r, d, c;

      if (!(e in t.media)) {
        if (">=" == e.substr(0, 2) ? (a = "gte", n = e.substr(2)) : "<=" == e.substr(0, 2) ? (a = "lte", n = e.substr(2)) : ">" == e.substr(0, 1) ? (a = "gt", n = e.substr(1)) : "<" == e.substr(0, 1) ? (a = "lt", n = e.substr(1)) : "!" == e.substr(0, 1) ? (a = "not", n = e.substr(1)) : (a = "eq", n = e), n && n in t.list) if (i = t.list[n], Array.isArray(i)) {
          if (r = parseInt(i[0]), d = parseInt(i[1]), isNaN(r)) {
            if (isNaN(d)) return;
            c = i[1].substr(String(d).length);
          } else c = i[0].substr(String(r).length);

          if (isNaN(r)) switch (a) {
            case "gte":
              s = "screen";
              break;

            case "lte":
              s = "screen and (max-width: " + d + c + ")";
              break;

            case "gt":
              s = "screen and (min-width: " + (d + 1) + c + ")";
              break;

            case "lt":
              s = "screen and (max-width: -1px)";
              break;

            case "not":
              s = "screen and (min-width: " + (d + 1) + c + ")";
              break;

            default:
              s = "screen and (max-width: " + d + c + ")";
          } else if (isNaN(d)) switch (a) {
            case "gte":
              s = "screen and (min-width: " + r + c + ")";
              break;

            case "lte":
              s = "screen";
              break;

            case "gt":
              s = "screen and (max-width: -1px)";
              break;

            case "lt":
              s = "screen and (max-width: " + (r - 1) + c + ")";
              break;

            case "not":
              s = "screen and (max-width: " + (r - 1) + c + ")";
              break;

            default:
              s = "screen and (min-width: " + r + c + ")";
          } else switch (a) {
            case "gte":
              s = "screen and (min-width: " + r + c + ")";
              break;

            case "lte":
              s = "screen and (max-width: " + d + c + ")";
              break;

            case "gt":
              s = "screen and (min-width: " + (d + 1) + c + ")";
              break;

            case "lt":
              s = "screen and (max-width: " + (r - 1) + c + ")";
              break;

            case "not":
              s = "screen and (max-width: " + (r - 1) + c + "), screen and (min-width: " + (d + 1) + c + ")";
              break;

            default:
              s = "screen and (min-width: " + r + c + ") and (max-width: " + d + c + ")";
          }
        } else s = "(" == i.charAt(0) ? "screen and " + i : i;
        t.media[e] = !!s && s;
      }

      return t.media[e] !== !1 && window.matchMedia(t.media[e]).matches;
    },
    on: function on(e, n) {
      t.events.push({
        query: e,
        handler: n,
        state: !1
      }), t.active(e) && n();
    },
    poll: function poll() {
      var e, n;

      for (e = 0; e < t.events.length; e++) {
        n = t.events[e], t.active(n.query) ? n.state || (n.state = !0, n.handler()) : n.state && (n.state = !1);
      }
    }
  };
  return e._ = t, e.on = function (e, n) {
    t.on(e, n);
  }, e.active = function (e) {
    return t.active(e);
  }, e;
}();

!function (e, t) {
  "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.breakpoints = t();
}(this, function () {
  return breakpoints;
});
},{}]},{},["OMwT"], null)
//# sourceMappingURL=https://uw-cse442-wi20.github.io/FP-college-majors/breakpoints.min.c322b3e3.js.map