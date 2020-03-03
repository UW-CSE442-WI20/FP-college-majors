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
})({"U1Zv":[function(require,module,exports) {
/* jquery.scrollex v0.2.1 | (c) @ajlkn | github.com/ajlkn/jquery.scrollex | MIT licensed */
!function (t) {
  function e(t, e, n) {
    return "string" == typeof t && ("%" == t.slice(-1) ? t = parseInt(t.substring(0, t.length - 1)) / 100 * e : "vh" == t.slice(-2) ? t = parseInt(t.substring(0, t.length - 2)) / 100 * n : "px" == t.slice(-2) && (t = parseInt(t.substring(0, t.length - 2)))), t;
  }

  var n = t(window),
      i = 1,
      o = {};
  n.on("scroll", function () {
    var e = n.scrollTop();
    t.map(o, function (t) {
      window.clearTimeout(t.timeoutId), t.timeoutId = window.setTimeout(function () {
        t.handler(e);
      }, t.options.delay);
    });
  }).on("load", function () {
    n.trigger("scroll");
  }), jQuery.fn.scrollex = function (l) {
    var s = t(this);
    if (0 == this.length) return s;

    if (this.length > 1) {
      for (var r = 0; r < this.length; r++) {
        t(this[r]).scrollex(l);
      }

      return s;
    }

    if (s.data("_scrollexId")) return s;
    var a, u, h, c, p;

    switch (a = i++, u = jQuery.extend({
      top: 0,
      bottom: 0,
      delay: 0,
      mode: "default",
      enter: null,
      leave: null,
      initialize: null,
      terminate: null,
      scroll: null
    }, l), u.mode) {
      case "top":
        h = function h(t, e, n, i, o) {
          return t >= i && o >= t;
        };

        break;

      case "bottom":
        h = function h(t, e, n, i, o) {
          return n >= i && o >= n;
        };

        break;

      case "middle":
        h = function h(t, e, n, i, o) {
          return e >= i && o >= e;
        };

        break;

      case "top-only":
        h = function h(t, e, n, i, o) {
          return i >= t && n >= i;
        };

        break;

      case "bottom-only":
        h = function h(t, e, n, i, o) {
          return n >= o && o >= t;
        };

        break;

      default:
      case "default":
        h = function h(t, e, n, i, o) {
          return n >= i && o >= t;
        };

    }

    return c = function c(t) {
      var i,
          o,
          l,
          s,
          r,
          a,
          u = this.state,
          h = !1,
          c = this.$element.offset();
      i = n.height(), o = t + i / 2, l = t + i, s = this.$element.outerHeight(), r = c.top + e(this.options.top, s, i), a = c.top + s - e(this.options.bottom, s, i), h = this.test(t, o, l, r, a), h != u && (this.state = h, h ? this.options.enter && this.options.enter.apply(this.element) : this.options.leave && this.options.leave.apply(this.element)), this.options.scroll && this.options.scroll.apply(this.element, [(o - r) / (a - r)]);
    }, p = {
      id: a,
      options: u,
      test: h,
      handler: c,
      state: null,
      element: this,
      $element: s,
      timeoutId: null
    }, o[a] = p, s.data("_scrollexId", p.id), p.options.initialize && p.options.initialize.apply(this), s;
  }, jQuery.fn.unscrollex = function () {
    var e = t(this);
    if (0 == this.length) return e;

    if (this.length > 1) {
      for (var n = 0; n < this.length; n++) {
        t(this[n]).unscrollex();
      }

      return e;
    }

    var i, l;
    return (i = e.data("_scrollexId")) ? (l = o[i], window.clearTimeout(l.timeoutId), delete o[i], e.removeData("_scrollexId"), l.options.terminate && l.options.terminate.apply(this), e) : e;
  };
}(jQuery);
},{}]},{},["U1Zv"], null)
//# sourceMappingURL=https://uw-cse442-wi20.github.io/FP-college-majors/jquery.scrollex.min.aba65e8a.js.map