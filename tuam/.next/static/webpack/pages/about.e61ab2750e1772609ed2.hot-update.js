webpackHotUpdate_N_E("pages/about",{

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
    loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}',
    crossDomain: true
  },
  fallbackLng: {
    'en-US': ['en'],
    'vn-VN': ['vn'],
    "default": ['vn']
  },
  debug: true,
  ns: ['translation'],
  defaultNS: 'translation',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZXMiLCJpMThuIiwidXNlIiwiQmFja2VuZCIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImJhY2tlbmQiLCJsb2FkUGF0aCIsImNyb3NzRG9tYWluIiwiZmFsbGJhY2tMbmciLCJkZWJ1ZyIsIm5zIiwiZGVmYXVsdE5TIiwid2hpdGVsaXN0IiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFsQjtBQUdBQywrQ0FBSSxDQUNGO0FBQ0E7QUFGRSxDQUdEQyxHQUhILENBR09DLDREQUhQLEVBSUU7QUFDQTtBQUxGLENBTUdELEdBTkgsQ0FNT0Usd0VBTlAsRUFPRTtBQVBGLENBUUdGLEdBUkgsQ0FRT0csOERBUlAsRUFTRTtBQUNBO0FBVkYsQ0FXR0MsSUFYSCxDQVdRO0FBQ0pDLFNBQU8sRUFBRTtBQUFDQyxZQUFRLEVBQUUsK0NBQVg7QUFDUEMsZUFBVyxFQUFFO0FBRE4sR0FETDtBQUlKQyxhQUFXLEVBQUU7QUFDWCxhQUFTLENBQUMsSUFBRCxDQURFO0FBRVgsYUFBUyxDQUFDLElBQUQsQ0FGRTtBQUdYLGVBQVMsQ0FBQyxJQUFEO0FBSEUsR0FKVDtBQVNKQyxPQUFLLEVBQUUsSUFUSDtBQVVKQyxJQUFFLEVBQUUsQ0FBQyxhQUFELENBVkE7QUFXSkMsV0FBUyxFQUFFLGFBWFA7QUFZSkMsV0FBUyxFQUFFZCxTQVpQO0FBY0plLGVBQWEsRUFBRTtBQUNiQyxlQUFXLEVBQUUsS0FEQSxDQUNPOztBQURQO0FBZFgsQ0FYUjtBQStCZWYsOEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZTYxYWIyNzUwZTE3NzI2MDllZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnO1xyXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgQmFja2VuZCBmcm9tICdpMThuZXh0LWh0dHAtYmFja2VuZCc7XHJcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJztcclxuLy8gZG9uJ3Qgd2FudCB0byB1c2UgdGhpcz9cclxuLy8gaGF2ZSBhIGxvb2sgYXQgdGhlIFF1aWNrIHN0YXJ0IGd1aWRlIFxyXG4vLyBmb3IgcGFzc2luZyBpbiBsbmcgYW5kIHRyYW5zbGF0aW9ucyBvbiBpbml0XHJcblxyXG5jb25zdCBMYW5ndWFnZXMgPSBbJ2VuJywgJ3ZuJ107XHJcblxyXG5cclxuaTE4blxyXG4gIC8vIGxvYWQgdHJhbnNsYXRpb24gdXNpbmcgaHR0cCAtPiBzZWUgL3B1YmxpYy9sb2NhbGVzIChpLmUuIGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L3JlYWN0LWkxOG5leHQvdHJlZS9tYXN0ZXIvZXhhbXBsZS9yZWFjdC9wdWJsaWMvbG9jYWxlcylcclxuICAvLyBsZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWh0dHAtYmFja2VuZFxyXG4gIC51c2UoQmFja2VuZClcclxuICAvLyBkZXRlY3QgdXNlciBsYW5ndWFnZVxyXG4gIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yXHJcbiAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4gIC8vIHBhc3MgdGhlIGkxOG4gaW5zdGFuY2UgdG8gcmVhY3QtaTE4bmV4dC5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLy8gaW5pdCBpMThuZXh0XHJcbiAgLy8gZm9yIGFsbCBvcHRpb25zIHJlYWQ6IGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4gIC5pbml0KHtcclxuICAgIGJhY2tlbmQ6IHtsb2FkUGF0aDogJy9sb2NhbGVzL3Jlc291cmNlcy5qc29uP2xuZz17e2xuZ319Jm5zPXt7bnN9fScsXHJcbiAgICAgIGNyb3NzRG9tYWluOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbGJhY2tMbmc6IHtcclxuICAgICAgJ2VuLVVTJzogWydlbiddLFxyXG4gICAgICAndm4tVk4nOiBbJ3ZuJ10sXHJcbiAgICAgIGRlZmF1bHQ6IFsndm4nXSxcclxuICAgIH0sXHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIG5zOiBbJ3RyYW5zbGF0aW9uJ10sXHJcbiAgICBkZWZhdWx0TlM6ICd0cmFuc2xhdGlvbicsXHJcbiAgICB3aGl0ZWxpc3Q6IExhbmd1YWdlcyxcclxuXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8gbm90IG5lZWRlZCBmb3IgcmVhY3QgYXMgaXQgZXNjYXBlcyBieSBkZWZhdWx0XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjsiXSwic291cmNlUm9vdCI6IiJ9