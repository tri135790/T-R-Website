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
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/fp */ "./node_modules/date-fns/fp/index.js");
/* harmony import */ var date_fns_fp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_fp__WEBPACK_IMPORTED_MODULE_4__);





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
  backend: options,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZXMiLCJpMThuIiwidXNlIiwiQmFja2VuZCIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImJhY2tlbmQiLCJvcHRpb25zIiwiZmFsbGJhY2tMbmciLCJsbmciLCJkZWJ1ZyIsIndoaXRlbGlzdCIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFsQjtBQUdBQywrQ0FBSSxDQUNGO0FBQ0E7QUFGRSxDQUdEQyxHQUhILENBR09DLDREQUhQLEVBSUU7QUFDQTtBQUxGLENBTUdELEdBTkgsQ0FNT0Usd0VBTlAsRUFPRTtBQVBGLENBUUdGLEdBUkgsQ0FRT0csOERBUlAsRUFTRTtBQUNBO0FBVkYsQ0FXR0MsSUFYSCxDQVdRO0FBQ0pDLFNBQU8sRUFBRUMsT0FETDtBQUVKQyxhQUFXLEVBQUUsSUFGVDtBQUdKQyxLQUFHLEVBQUUsSUFIRDtBQUlKQyxPQUFLLEVBQUUsSUFKSDtBQUtKQyxXQUFTLEVBQUVaLFNBTFA7QUFPSmEsZUFBYSxFQUFFO0FBQ2JDLGVBQVcsRUFBRSxLQURBLENBQ087O0FBRFA7QUFQWCxDQVhSO0FBd0JlYiw4R0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NTk5ZWFjYzcyN2M4MmNiZGQyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmltcG9ydCBCYWNrZW5kIGZyb20gJ2kxOG5leHQtaHR0cC1iYWNrZW5kJztcclxuaW1wb3J0IEh0dHBBcGkgZnJvbSAnaTE4bmV4dC1odHRwLWJhY2tlbmQnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tICdpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3Rvcic7XHJcbmltcG9ydCB7IHBhcnNlV2l0aE9wdGlvbnMgfSBmcm9tICdkYXRlLWZucy9mcCc7XHJcbi8vIGRvbid0IHdhbnQgdG8gdXNlIHRoaXM/XHJcbi8vIGhhdmUgYSBsb29rIGF0IHRoZSBRdWljayBzdGFydCBndWlkZSBcclxuLy8gZm9yIHBhc3NpbmcgaW4gbG5nIGFuZCB0cmFuc2xhdGlvbnMgb24gaW5pdFxyXG5cclxuY29uc3QgTGFuZ3VhZ2VzID0gWydlbicsICd2biddO1xyXG5cclxuXHJcbmkxOG5cclxuICAvLyBsb2FkIHRyYW5zbGF0aW9uIHVzaW5nIGh0dHAgLT4gc2VlIC9wdWJsaWMvbG9jYWxlcyAoaS5lLiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9yZWFjdC1pMThuZXh0L3RyZWUvbWFzdGVyL2V4YW1wbGUvcmVhY3QvcHVibGljL2xvY2FsZXMpXHJcbiAgLy8gbGVhcm4gbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC1odHRwLWJhY2tlbmRcclxuICAudXNlKEJhY2tlbmQpXHJcbiAgLy8gZGV0ZWN0IHVzZXIgbGFuZ3VhZ2VcclxuICAvLyBsZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VEZXRlY3RvclxyXG4gIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcclxuICAvLyBwYXNzIHRoZSBpMThuIGluc3RhbmNlIHRvIHJlYWN0LWkxOG5leHQuXHJcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gIC8vIGluaXQgaTE4bmV4dFxyXG4gIC8vIGZvciBhbGwgb3B0aW9ucyByZWFkOiBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9jb25maWd1cmF0aW9uLW9wdGlvbnNcclxuICAuaW5pdCh7XHJcbiAgICBiYWNrZW5kOiBvcHRpb25zLFxyXG4gICAgZmFsbGJhY2tMbmc6ICdlbicsXHJcbiAgICBsbmc6ICd2bicsXHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIHdoaXRlbGlzdDogTGFuZ3VhZ2VzLFxyXG5cclxuICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyBub3QgbmVlZGVkIGZvciByZWFjdCBhcyBpdCBlc2NhcGVzIGJ5IGRlZmF1bHRcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpMThuOyJdLCJzb3VyY2VSb290IjoiIn0=