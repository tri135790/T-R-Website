webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/i18next-http-backend/esm/getFetch.cjs":
/*!************************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/getFetch.cjs ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var fetchApi
if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch
  }
}

if ( true && (typeof window === 'undefined' || typeof window.document === 'undefined')) {
  var f = fetchApi || __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js")
  if (f.default) f = f.default
  exports.default = f
  module.exports = exports.default
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/i18next-http-backend/esm/utils.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./node_modules/i18next-http-backend/esm/request.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || '');
    },
    request: _request_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Backend);

    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }

  _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, this.options || {}, getDefaults());
      this.allOptions = allOptions;

      if (this.services && this.options.reloadInterval) {
        setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: languages.join('+'),
        ns: namespaces.join('+')
      });
      this.loadUrl(url, callback, languages, namespaces);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      this.loadUrl(url, callback, language, namespace);
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this2 = this;

      this.options.request(this.options, url, undefined, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message && err.message.indexOf('Failed to fetch') > -1) return callback('failed loading ' + url + ': ' + err.message, true);
        if (err) return callback(err, false);
        var ret, parseErr;

        try {
          if (typeof res.data === 'string') {
            ret = _this2.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }

        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this3 = this;

      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this3.options.addPath;

        if (typeof _this3.options.addPath === 'function') {
          addPath = _this3.options.addPath(lng, namespace);
        }

        var url = _this3.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });

        _this3.options.request(_this3.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);

          if (finished === languages.length) {
            if (callback) callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this4 = this;

      var _this$services = this.services,
          backendConnector = _this$services.backendConnector,
          languageUtils = _this$services.languageUtils,
          logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];

      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };

      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this4.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';
/* harmony default export */ __webpack_exports__["default"] = (Backend);

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/request.js":
/*!**********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/request.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/i18next-http-backend/esm/utils.js");
/* harmony import */ var _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFetch.cjs */ "./node_modules/i18next-http-backend/esm/getFetch.cjs");
/* harmony import */ var _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var fetchApi;

if (typeof fetch === 'function') {
  if (typeof global !== 'undefined' && global.fetch) {
    fetchApi = global.fetch;
  } else if (typeof window !== 'undefined' && window.fetch) {
    fetchApi = window.fetch;
  }
}

var XmlHttpRequestApi;

if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["hasXMLHttpRequest"]) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}

var ActiveXObjectApi;

if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}

if (!fetchApi && _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__ && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1___default.a || _getFetch_cjs__WEBPACK_IMPORTED_MODULE_1__;
if (typeof fetchApi !== 'function') fetchApi = undefined;

var addQueryString = function addQueryString(url, params) {
  if (params && _typeof(params) === 'object') {
    var queryString = '';

    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }

    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
};

var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  var headers = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["defaults"])({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (payload) headers['Content-Type'] = 'application/json';
  fetchApi(url, Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["defaults"])({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions)).then(function (response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  }).catch(callback);
};

var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && _typeof(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;

    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }

    x.open(payload ? 'POST' : 'GET', url, 1);

    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }

    x.withCredentials = !!options.withCredentials;

    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }

    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;

    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }

    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };

    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};

var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }

  callback = callback || function () {};

  if (fetchApi) {
    return requestWithFetch(options, url, payload, callback);
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["hasXMLHttpRequest"] || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (request);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/i18next-http-backend/esm/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/i18next-http-backend/esm/utils.js ***!
  \********************************************************/
/*! exports provided: defaults, hasXMLHttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasXMLHttpRequest", function() { return hasXMLHttpRequest; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === 'object';
}

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./pages/i18n.js":
/*!***********************!*\
  !*** ./pages/i18n.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-http-backend */ "./node_modules/i18next-http-backend/esm/index.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");



 // don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

var Languages = ['en', 'vn'];
i18next__WEBPACK_IMPORTED_MODULE_0__["default"] // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-http-backend
.use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_2__["default"]) // detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_3__["default"]) // pass the i18n instance to react-i18next.
.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  backend: {
    crossDomain: true
  },
  fallbackLng: 'en',
  lng: 'vn',
  debug: true,
  whitelist: Languages,
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2kxOG5leHQtaHR0cC1iYWNrZW5kL2VzbS9nZXRGZXRjaC5janMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pMThuZXh0LWh0dHAtYmFja2VuZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pMThuZXh0LWh0dHAtYmFja2VuZC9lc20vcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2kxOG5leHQtaHR0cC1iYWNrZW5kL2VzbS91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZXMiLCJpMThuIiwidXNlIiwiQmFja2VuZCIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImJhY2tlbmQiLCJjcm9zc0RvbWFpbiIsImZhbGxiYWNrTG5nIiwibG5nIiwiZGVidWciLCJ3aGl0ZWxpc3QiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEtBQThCO0FBQ2xDLHNCQUFzQixtQkFBTyxDQUFDLHdEQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFx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QVcsRUFBRTtBQUROLEdBREw7QUFJSkMsYUFBVyxFQUFFLElBSlQ7QUFLSkMsS0FBRyxFQUFFLElBTEQ7QUFNSkMsT0FBSyxFQUFFLElBTkg7QUFPSkMsV0FBUyxFQUFFWixTQVBQO0FBU0phLGVBQWEsRUFBRTtBQUNiQyxlQUFXLEVBQUUsS0FEQSxDQUNPOztBQURQO0FBVFgsQ0FYUjtBQTBCZWIsOEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMTMyYmJiYjY5MmFhN2ZiNjFmOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmZXRjaEFwaVxuaWYgKHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmZldGNoKSB7XG4gICAgZmV0Y2hBcGkgPSBnbG9iYWwuZmV0Y2hcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZmV0Y2gpIHtcbiAgICBmZXRjaEFwaSA9IHdpbmRvdy5mZXRjaFxuICB9XG59XG5cbmlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSkge1xuICB2YXIgZiA9IGZldGNoQXBpIHx8IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxuICBpZiAoZi5kZWZhdWx0KSBmID0gZi5kZWZhdWx0XG4gIGV4cG9ydHMuZGVmYXVsdCA9IGZcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHRcbn1cbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5cbnZhciBnZXREZWZhdWx0cyA9IGZ1bmN0aW9uIGdldERlZmF1bHRzKCkge1xuICByZXR1cm4ge1xuICAgIGxvYWRQYXRoOiAnL2xvY2FsZXMve3tsbmd9fS97e25zfX0uanNvbicsXG4gICAgYWRkUGF0aDogJy9sb2NhbGVzL2FkZC97e2xuZ319L3t7bnN9fScsXG4gICAgYWxsb3dNdWx0aUxvYWRpbmc6IGZhbHNlLFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShkYXRhKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9LFxuICAgIHN0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnksXG4gICAgcGFyc2VQYXlsb2FkOiBmdW5jdGlvbiBwYXJzZVBheWxvYWQobmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUpIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgZmFsbGJhY2tWYWx1ZSB8fCAnJyk7XG4gICAgfSxcbiAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgIHJlbG9hZEludGVydmFsOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogNjAgKiA2MCAqIDEwMDAsXG4gICAgY3VzdG9tSGVhZGVyczoge30sXG4gICAgcXVlcnlTdHJpbmdQYXJhbXM6IHt9LFxuICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgIG92ZXJyaWRlTWltZVR5cGU6IGZhbHNlLFxuICAgIHJlcXVlc3RPcHRpb25zOiB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIGNhY2hlOiAnZGVmYXVsdCdcbiAgICB9XG4gIH07XG59O1xuXG52YXIgQmFja2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQmFja2VuZChzZXJ2aWNlcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgYWxsT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFja2VuZCk7XG5cbiAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmFsbE9wdGlvbnMgPSBhbGxPcHRpb25zO1xuICAgIHRoaXMudHlwZSA9ICdiYWNrZW5kJztcbiAgICB0aGlzLmluaXQoc2VydmljZXMsIG9wdGlvbnMsIGFsbE9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEJhY2tlbmQsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChzZXJ2aWNlcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGFsbE9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgICAgdGhpcy5vcHRpb25zID0gZGVmYXVsdHMob3B0aW9ucywgdGhpcy5vcHRpb25zIHx8IHt9LCBnZXREZWZhdWx0cygpKTtcbiAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IGFsbE9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnNlcnZpY2VzICYmIHRoaXMub3B0aW9ucy5yZWxvYWRJbnRlcnZhbCkge1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnJlbG9hZCgpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmVsb2FkSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkTXVsdGlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZE11bHRpKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBsb2FkUGF0aCA9IHRoaXMub3B0aW9ucy5sb2FkUGF0aDtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubG9hZFBhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZFBhdGggPSB0aGlzLm9wdGlvbnMubG9hZFBhdGgobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHVybCA9IHRoaXMuc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKGxvYWRQYXRoLCB7XG4gICAgICAgIGxuZzogbGFuZ3VhZ2VzLmpvaW4oJysnKSxcbiAgICAgICAgbnM6IG5hbWVzcGFjZXMuam9pbignKycpXG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZFVybCh1cmwsIGNhbGxiYWNrLCBsYW5ndWFnZXMsIG5hbWVzcGFjZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQobGFuZ3VhZ2UsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBsb2FkUGF0aCA9IHRoaXMub3B0aW9ucy5sb2FkUGF0aDtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubG9hZFBhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZFBhdGggPSB0aGlzLm9wdGlvbnMubG9hZFBhdGgoW2xhbmd1YWdlXSwgW25hbWVzcGFjZV0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdXJsID0gdGhpcy5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobG9hZFBhdGgsIHtcbiAgICAgICAgbG5nOiBsYW5ndWFnZSxcbiAgICAgICAgbnM6IG5hbWVzcGFjZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRVcmwodXJsLCBjYWxsYmFjaywgbGFuZ3VhZ2UsIG5hbWVzcGFjZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRVcmxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFVybCh1cmwsIGNhbGxiYWNrLCBsYW5ndWFnZXMsIG5hbWVzcGFjZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLm9wdGlvbnMucmVxdWVzdCh0aGlzLm9wdGlvbnMsIHVybCwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKHJlcyAmJiAocmVzLnN0YXR1cyA+PSA1MDAgJiYgcmVzLnN0YXR1cyA8IDYwMCB8fCAhcmVzLnN0YXR1cykpIHJldHVybiBjYWxsYmFjaygnZmFpbGVkIGxvYWRpbmcgJyArIHVybCArICc7IHN0YXR1cyBjb2RlOiAnICsgcmVzLnN0YXR1cywgdHJ1ZSk7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA+PSA0MDAgJiYgcmVzLnN0YXR1cyA8IDUwMCkgcmV0dXJuIGNhbGxiYWNrKCdmYWlsZWQgbG9hZGluZyAnICsgdXJsICsgJzsgc3RhdHVzIGNvZGU6ICcgKyByZXMuc3RhdHVzLCBmYWxzZSk7XG4gICAgICAgIGlmICghcmVzICYmIGVyciAmJiBlcnIubWVzc2FnZSAmJiBlcnIubWVzc2FnZS5pbmRleE9mKCdGYWlsZWQgdG8gZmV0Y2gnKSA+IC0xKSByZXR1cm4gY2FsbGJhY2soJ2ZhaWxlZCBsb2FkaW5nICcgKyB1cmwgKyAnOiAnICsgZXJyLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyLCBmYWxzZSk7XG4gICAgICAgIHZhciByZXQsIHBhcnNlRXJyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldCA9IF90aGlzMi5vcHRpb25zLnBhcnNlKHJlcy5kYXRhLCBsYW5ndWFnZXMsIG5hbWVzcGFjZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSByZXMuZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBwYXJzZUVyciA9ICdmYWlsZWQgcGFyc2luZyAnICsgdXJsICsgJyB0byBqc29uJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZUVycikgcmV0dXJuIGNhbGxiYWNrKHBhcnNlRXJyLCBmYWxzZSk7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJldCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZShsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFkZFBhdGgpIHJldHVybjtcbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2VzID09PSAnc3RyaW5nJykgbGFuZ3VhZ2VzID0gW2xhbmd1YWdlc107XG4gICAgICB2YXIgcGF5bG9hZCA9IHRoaXMub3B0aW9ucy5wYXJzZVBheWxvYWQobmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUpO1xuICAgICAgdmFyIGZpbmlzaGVkID0gMDtcbiAgICAgIHZhciBkYXRhQXJyYXkgPSBbXTtcbiAgICAgIHZhciByZXNBcnJheSA9IFtdO1xuICAgICAgbGFuZ3VhZ2VzLmZvckVhY2goZnVuY3Rpb24gKGxuZykge1xuICAgICAgICB2YXIgYWRkUGF0aCA9IF90aGlzMy5vcHRpb25zLmFkZFBhdGg7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczMub3B0aW9ucy5hZGRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYWRkUGF0aCA9IF90aGlzMy5vcHRpb25zLmFkZFBhdGgobG5nLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IF90aGlzMy5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUoYWRkUGF0aCwge1xuICAgICAgICAgIGxuZzogbG5nLFxuICAgICAgICAgIG5zOiBuYW1lc3BhY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMzLm9wdGlvbnMucmVxdWVzdChfdGhpczMub3B0aW9ucywgdXJsLCBwYXlsb2FkLCBmdW5jdGlvbiAoZGF0YSwgcmVzKSB7XG4gICAgICAgICAgZmluaXNoZWQgKz0gMTtcbiAgICAgICAgICBkYXRhQXJyYXkucHVzaChkYXRhKTtcbiAgICAgICAgICByZXNBcnJheS5wdXNoKHJlcyk7XG5cbiAgICAgICAgICBpZiAoZmluaXNoZWQgPT09IGxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZGF0YUFycmF5LCByZXNBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzZXJ2aWNlcyA9IHRoaXMuc2VydmljZXMsXG4gICAgICAgICAgYmFja2VuZENvbm5lY3RvciA9IF90aGlzJHNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IsXG4gICAgICAgICAgbGFuZ3VhZ2VVdGlscyA9IF90aGlzJHNlcnZpY2VzLmxhbmd1YWdlVXRpbHMsXG4gICAgICAgICAgbG9nZ2VyID0gX3RoaXMkc2VydmljZXMubG9nZ2VyO1xuICAgICAgdmFyIGN1cnJlbnRMYW5ndWFnZSA9IGJhY2tlbmRDb25uZWN0b3IubGFuZ3VhZ2U7XG4gICAgICBpZiAoY3VycmVudExhbmd1YWdlICYmIGN1cnJlbnRMYW5ndWFnZS50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuO1xuICAgICAgdmFyIHRvTG9hZCA9IFtdO1xuXG4gICAgICB2YXIgYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKGxuZykge1xuICAgICAgICB2YXIgbG5ncyA9IGxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxuZyk7XG4gICAgICAgIGxuZ3MuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICAgIGlmICh0b0xvYWQuaW5kZXhPZihsKSA8IDApIHRvTG9hZC5wdXNoKGwpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGFwcGVuZChjdXJyZW50TGFuZ3VhZ2UpO1xuICAgICAgaWYgKHRoaXMuYWxsT3B0aW9ucy5wcmVsb2FkKSB0aGlzLmFsbE9wdGlvbnMucHJlbG9hZC5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmQobCk7XG4gICAgICB9KTtcbiAgICAgIHRvTG9hZC5mb3JFYWNoKGZ1bmN0aW9uIChsbmcpIHtcbiAgICAgICAgX3RoaXM0LmFsbE9wdGlvbnMubnMuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgICBiYWNrZW5kQ29ubmVjdG9yLnJlYWQobG5nLCBucywgJ3JlYWQnLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSBsb2dnZXIud2FybihcImxvYWRpbmcgbmFtZXNwYWNlIFwiLmNvbmNhdChucywgXCIgZm9yIGxhbmd1YWdlIFwiKS5jb25jYXQobG5nLCBcIiBmYWlsZWRcIiksIGVycik7XG4gICAgICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSBsb2dnZXIubG9nKFwibG9hZGVkIG5hbWVzcGFjZSBcIi5jb25jYXQobnMsIFwiIGZvciBsYW5ndWFnZSBcIikuY29uY2F0KGxuZyksIGRhdGEpO1xuICAgICAgICAgICAgYmFja2VuZENvbm5lY3Rvci5sb2FkZWQoXCJcIi5jb25jYXQobG5nLCBcInxcIikuY29uY2F0KG5zKSwgZXJyLCBkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmFja2VuZDtcbn0oKTtcblxuQmFja2VuZC50eXBlID0gJ2JhY2tlbmQnO1xuZXhwb3J0IGRlZmF1bHQgQmFja2VuZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCB7IGRlZmF1bHRzLCBoYXNYTUxIdHRwUmVxdWVzdCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgZmV0Y2hOb2RlIGZyb20gJy4vZ2V0RmV0Y2guY2pzJztcbnZhciBmZXRjaEFwaTtcblxuaWYgKHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmZldGNoKSB7XG4gICAgZmV0Y2hBcGkgPSBnbG9iYWwuZmV0Y2g7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmZldGNoKSB7XG4gICAgZmV0Y2hBcGkgPSB3aW5kb3cuZmV0Y2g7XG4gIH1cbn1cblxudmFyIFhtbEh0dHBSZXF1ZXN0QXBpO1xuXG5pZiAoaGFzWE1MSHR0cFJlcXVlc3QpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5YTUxIdHRwUmVxdWVzdCkge1xuICAgIFhtbEh0dHBSZXF1ZXN0QXBpID0gZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgIFhtbEh0dHBSZXF1ZXN0QXBpID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xuICB9XG59XG5cbnZhciBBY3RpdmVYT2JqZWN0QXBpO1xuXG5pZiAodHlwZW9mIEFjdGl2ZVhPYmplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5BY3RpdmVYT2JqZWN0KSB7XG4gICAgQWN0aXZlWE9iamVjdEFwaSA9IGdsb2JhbC5BY3RpdmVYT2JqZWN0O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgQWN0aXZlWE9iamVjdEFwaSA9IHdpbmRvdy5BY3RpdmVYT2JqZWN0O1xuICB9XG59XG5cbmlmICghZmV0Y2hBcGkgJiYgZmV0Y2hOb2RlICYmICFYbWxIdHRwUmVxdWVzdEFwaSAmJiAhQWN0aXZlWE9iamVjdEFwaSkgZmV0Y2hBcGkgPSBmZXRjaE5vZGUuZGVmYXVsdCB8fCBmZXRjaE5vZGU7XG5pZiAodHlwZW9mIGZldGNoQXBpICE9PSAnZnVuY3Rpb24nKSBmZXRjaEFwaSA9IHVuZGVmaW5lZDtcblxudmFyIGFkZFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24gYWRkUXVlcnlTdHJpbmcodXJsLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyAmJiBfdHlwZW9mKHBhcmFtcykgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gJyc7XG5cbiAgICBmb3IgKHZhciBwYXJhbU5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICBxdWVyeVN0cmluZyArPSAnJicgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1OYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcGFyYW1OYW1lXSk7XG4gICAgfVxuXG4gICAgaWYgKCFxdWVyeVN0cmluZykgcmV0dXJuIHVybDtcbiAgICB1cmwgPSB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPycpICsgcXVlcnlTdHJpbmcuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxudmFyIHJlcXVlc3RXaXRoRmV0Y2ggPSBmdW5jdGlvbiByZXF1ZXN0V2l0aEZldGNoKG9wdGlvbnMsIHVybCwgcGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgaWYgKG9wdGlvbnMucXVlcnlTdHJpbmdQYXJhbXMpIHtcbiAgICB1cmwgPSBhZGRRdWVyeVN0cmluZyh1cmwsIG9wdGlvbnMucXVlcnlTdHJpbmdQYXJhbXMpO1xuICB9XG5cbiAgdmFyIGhlYWRlcnMgPSBkZWZhdWx0cyh7fSwgdHlwZW9mIG9wdGlvbnMuY3VzdG9tSGVhZGVycyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMuY3VzdG9tSGVhZGVycygpIDogb3B0aW9ucy5jdXN0b21IZWFkZXJzKTtcbiAgaWYgKHBheWxvYWQpIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICBmZXRjaEFwaSh1cmwsIGRlZmF1bHRzKHtcbiAgICBtZXRob2Q6IHBheWxvYWQgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICBib2R5OiBwYXlsb2FkID8gb3B0aW9ucy5zdHJpbmdpZnkocGF5bG9hZCkgOiB1bmRlZmluZWQsXG4gICAgaGVhZGVyczogaGVhZGVyc1xuICB9LCB0eXBlb2Ygb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMocGF5bG9hZCkgOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm4gY2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzVGV4dCB8fCAnRXJyb3InLCB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c1xuICAgIH0pO1xuICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB7XG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gIH0pLmNhdGNoKGNhbGxiYWNrKTtcbn07XG5cbnZhciByZXF1ZXN0V2l0aFhtbEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdFdpdGhYbWxIdHRwUmVxdWVzdChvcHRpb25zLCB1cmwsIHBheWxvYWQsIGNhbGxiYWNrKSB7XG4gIGlmIChwYXlsb2FkICYmIF90eXBlb2YocGF5bG9hZCkgPT09ICdvYmplY3QnKSB7XG4gICAgcGF5bG9hZCA9IGFkZFF1ZXJ5U3RyaW5nKCcnLCBwYXlsb2FkKS5zbGljZSgxKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnF1ZXJ5U3RyaW5nUGFyYW1zKSB7XG4gICAgdXJsID0gYWRkUXVlcnlTdHJpbmcodXJsLCBvcHRpb25zLnF1ZXJ5U3RyaW5nUGFyYW1zKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHg7XG5cbiAgICBpZiAoWG1sSHR0cFJlcXVlc3RBcGkpIHtcbiAgICAgIHggPSBuZXcgWG1sSHR0cFJlcXVlc3RBcGkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IG5ldyBBY3RpdmVYT2JqZWN0QXBpKCdNU1hNTDIuWE1MSFRUUC4zLjAnKTtcbiAgICB9XG5cbiAgICB4Lm9wZW4ocGF5bG9hZCA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpO1xuXG4gICAgaWYgKCFvcHRpb25zLmNyb3NzRG9tYWluKSB7XG4gICAgICB4LnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICB9XG5cbiAgICB4LndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgICBpZiAocGF5bG9hZCkge1xuICAgICAgeC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHgub3ZlcnJpZGVNaW1lVHlwZSkge1xuICAgICAgeC5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgfVxuXG4gICAgdmFyIGggPSBvcHRpb25zLmN1c3RvbUhlYWRlcnM7XG4gICAgaCA9IHR5cGVvZiBoID09PSAnZnVuY3Rpb24nID8gaCgpIDogaDtcblxuICAgIGlmIChoKSB7XG4gICAgICBmb3IgKHZhciBpIGluIGgpIHtcbiAgICAgICAgeC5zZXRSZXF1ZXN0SGVhZGVyKGksIGhbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHgub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgeC5yZWFkeVN0YXRlID4gMyAmJiBjYWxsYmFjayh4LnN0YXR1cyA+PSA0MDAgPyB4LnN0YXR1c1RleHQgOiBudWxsLCB7XG4gICAgICAgIHN0YXR1czogeC5zdGF0dXMsXG4gICAgICAgIGRhdGE6IHgucmVzcG9uc2VUZXh0XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgeC5zZW5kKHBheWxvYWQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhlKTtcbiAgfVxufTtcblxudmFyIHJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMsIHVybCwgcGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBwYXlsb2FkO1xuICAgIHBheWxvYWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gIGlmIChmZXRjaEFwaSkge1xuICAgIHJldHVybiByZXF1ZXN0V2l0aEZldGNoKG9wdGlvbnMsIHVybCwgcGF5bG9hZCwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGhhc1hNTEh0dHBSZXF1ZXN0IHx8IHR5cGVvZiBBY3RpdmVYT2JqZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RXaXRoWG1sSHR0cFJlcXVlc3Qob3B0aW9ucywgdXJsLCBwYXlsb2FkLCBjYWxsYmFjayk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgYXJyID0gW107XG52YXIgZWFjaCA9IGFyci5mb3JFYWNoO1xudmFyIHNsaWNlID0gYXJyLnNsaWNlO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzKG9iaikge1xuICBlYWNoLmNhbGwoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdW5kZWZpbmVkKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNYTUxIdHRwUmVxdWVzdCgpIHtcbiAgcmV0dXJuIHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoWE1MSHR0cFJlcXVlc3QpKSA9PT0gJ29iamVjdCc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5pZiAoZ2xvYmFsLmZldGNoKSB7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG59XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgQmFja2VuZCBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCc7XHJcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJztcclxuLy8gZG9uJ3Qgd2FudCB0byB1c2UgdGhpcz9cclxuLy8gaGF2ZSBhIGxvb2sgYXQgdGhlIFF1aWNrIHN0YXJ0IGd1aWRlIFxyXG4vLyBmb3IgcGFzc2luZyBpbiBsbmcgYW5kIHRyYW5zbGF0aW9ucyBvbiBpbml0XHJcblxyXG5jb25zdCBMYW5ndWFnZXMgPSBbJ2VuJywgJ3ZuJ107XHJcblxyXG5cclxuaTE4blxyXG4gIC8vIGxvYWQgdHJhbnNsYXRpb24gdXNpbmcgaHR0cCAtPiBzZWUgL3B1YmxpYy9sb2NhbGVzIChpLmUuIGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L3JlYWN0LWkxOG5leHQvdHJlZS9tYXN0ZXIvZXhhbXBsZS9yZWFjdC9wdWJsaWMvbG9jYWxlcylcclxuICAvLyBsZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWh0dHAtYmFja2VuZFxyXG4gIC51c2UoQmFja2VuZClcclxuICAvLyBkZXRlY3QgdXNlciBsYW5ndWFnZVxyXG4gIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yXHJcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4gIC8vIHBhc3MgdGhlIGkxOG4gaW5zdGFuY2UgdG8gcmVhY3QtaTE4bmV4dC5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLy8gaW5pdCBpMThuZXh0XHJcbiAgLy8gZm9yIGFsbCBvcHRpb25zIHJlYWQ6IGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4gIC5pbml0KHtcclxuICAgIGJhY2tlbmQ6IHtcclxuICAgICAgY3Jvc3NEb21haW46IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsYmFja0xuZzogJ2VuJyxcclxuICAgIGxuZzogJ3ZuJyxcclxuICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgd2hpdGVsaXN0OiBMYW5ndWFnZXMsXHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIG5vdCBuZWVkZWQgZm9yIHJlYWN0IGFzIGl0IGVzY2FwZXMgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47Il0sInNvdXJjZVJvb3QiOiIifQ==