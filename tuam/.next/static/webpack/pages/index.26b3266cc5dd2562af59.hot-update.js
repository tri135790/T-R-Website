webpackHotUpdate_N_E("pages/index",{

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
  debug: true,
  whitelist: Languages,
  // defaultNS: 'en',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZXMiLCJpMThuIiwidXNlIiwiQmFja2VuZCIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImJhY2tlbmQiLCJjcm9zc0RvbWFpbiIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJ3aGl0ZWxpc3QiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0NBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQWxCO0FBR0FDLCtDQUFJLENBQ0Y7QUFDQTtBQUZFLENBR0RDLEdBSEgsQ0FHT0MsNERBSFAsRUFJRTtBQUNBO0FBTEYsQ0FNR0QsR0FOSCxDQU1PRSx3RUFOUCxFQU9FO0FBUEYsQ0FRR0YsR0FSSCxDQVFPRyw4REFSUCxFQVNFO0FBQ0E7QUFWRixDQVdHQyxJQVhILENBV1E7QUFDSkMsU0FBTyxFQUFFO0FBQ1BDLGVBQVcsRUFBRTtBQUROLEdBREw7QUFJSkMsYUFBVyxFQUFFLElBSlQ7QUFLSkMsT0FBSyxFQUFFLElBTEg7QUFNSkMsV0FBUyxFQUFFWCxTQU5QO0FBT0o7QUFFQVksZUFBYSxFQUFFO0FBQ2JDLGVBQVcsRUFBRSxLQURBLENBQ087O0FBRFA7QUFUWCxDQVhSO0FBMEJlWiw4R0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNmIzMjY2Y2M1ZGQyNTYyYWY1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmltcG9ydCBCYWNrZW5kIGZyb20gJ2kxOG5leHQtaHR0cC1iYWNrZW5kJztcclxuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xyXG4vLyBkb24ndCB3YW50IHRvIHVzZSB0aGlzP1xyXG4vLyBoYXZlIGEgbG9vayBhdCB0aGUgUXVpY2sgc3RhcnQgZ3VpZGUgXHJcbi8vIGZvciBwYXNzaW5nIGluIGxuZyBhbmQgdHJhbnNsYXRpb25zIG9uIGluaXRcclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9IFsnZW4nLCAndm4nXTtcclxuXHJcblxyXG5pMThuXHJcbiAgLy8gbG9hZCB0cmFuc2xhdGlvbiB1c2luZyBodHRwIC0+IHNlZSAvcHVibGljL2xvY2FsZXMgKGkuZS4gaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvcmVhY3QtaTE4bmV4dC90cmVlL21hc3Rlci9leGFtcGxlL3JlYWN0L3B1YmxpYy9sb2NhbGVzKVxyXG4gIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtaHR0cC1iYWNrZW5kXHJcbiAgLnVzZShCYWNrZW5kKVxyXG4gIC8vIGRldGVjdCB1c2VyIGxhbmd1YWdlXHJcbiAgLy8gbGVhcm4gbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlRGV0ZWN0b3JcclxuICAudXNlKExhbmd1YWdlRGV0ZWN0b3IpXHJcbiAgLy8gcGFzcyB0aGUgaTE4biBpbnN0YW5jZSB0byByZWFjdC1pMThuZXh0LlxyXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAvLyBpbml0IGkxOG5leHRcclxuICAvLyBmb3IgYWxsIG9wdGlvbnMgcmVhZDogaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAgLmluaXQoe1xyXG4gICAgYmFja2VuZDoge1xyXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGxiYWNrTG5nOiAnZW4nLFxyXG4gICAgZGVidWc6IHRydWUsXHJcbiAgICB3aGl0ZWxpc3Q6IExhbmd1YWdlcyxcclxuICAgIC8vIGRlZmF1bHROUzogJ2VuJyxcclxuXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSwgLy8gbm90IG5lZWRlZCBmb3IgcmVhY3QgYXMgaXQgZXNjYXBlcyBieSBkZWZhdWx0XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjsiXSwic291cmNlUm9vdCI6IiJ9