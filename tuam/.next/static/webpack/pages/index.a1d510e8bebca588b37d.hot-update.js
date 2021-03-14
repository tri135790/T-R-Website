webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/i18n.js":
/*!***********************!*\
  !*** ./pages/i18n.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// // don't want to use this?
// // have a look at the Quick start guide 
// // for passing in lng and translations on init
// const Languages = ['en', 'vn'];
// i18n
//   // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
//   // learn more: https://github.com/i18next/i18next-http-backend
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     backend: {
//       crossDomain: true,
//     },
//     fallbackLng: 'en',
//     lng: 'vn',
//     debug: true,
//     whitelist: Languages,
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     }
//   });
// export default i18n;
var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/esm/index.js");

module.exports = new NextI18Next({
  otherLanguages: ['vn']
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsbUVBQUQsQ0FBM0I7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixJQUFJSCxXQUFKLENBQWdCO0FBQUVJLGdCQUFjLEVBQUUsQ0FBQyxJQUFEO0FBQWxCLENBQWhCLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExZDUxMGU4YmViY2E1ODhiMzdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgaTE4biBmcm9tICdpMThuZXh0JztcclxuLy8gaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5cclxuLy8gaW1wb3J0IEJhY2tlbmQgZnJvbSAnaTE4bmV4dC1odHRwLWJhY2tlbmQnO1xyXG5cclxuLy8gaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InO1xyXG4vLyAvLyBkb24ndCB3YW50IHRvIHVzZSB0aGlzP1xyXG4vLyAvLyBoYXZlIGEgbG9vayBhdCB0aGUgUXVpY2sgc3RhcnQgZ3VpZGUgXHJcbi8vIC8vIGZvciBwYXNzaW5nIGluIGxuZyBhbmQgdHJhbnNsYXRpb25zIG9uIGluaXRcclxuXHJcbi8vIGNvbnN0IExhbmd1YWdlcyA9IFsnZW4nLCAndm4nXTtcclxuXHJcblxyXG4vLyBpMThuXHJcbi8vICAgLy8gbG9hZCB0cmFuc2xhdGlvbiB1c2luZyBodHRwIC0+IHNlZSAvcHVibGljL2xvY2FsZXMgKGkuZS4gaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvcmVhY3QtaTE4bmV4dC90cmVlL21hc3Rlci9leGFtcGxlL3JlYWN0L3B1YmxpYy9sb2NhbGVzKVxyXG4vLyAgIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtaHR0cC1iYWNrZW5kXHJcbi8vICAgLnVzZShCYWNrZW5kKVxyXG4vLyAgIC8vIGRldGVjdCB1c2VyIGxhbmd1YWdlXHJcbi8vICAgLy8gbGVhcm4gbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL2kxOG5leHQvaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlRGV0ZWN0b3JcclxuLy8gICAudXNlKExhbmd1YWdlRGV0ZWN0b3IpXHJcbi8vICAgLy8gcGFzcyB0aGUgaTE4biBpbnN0YW5jZSB0byByZWFjdC1pMThuZXh0LlxyXG4vLyAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuLy8gICAvLyBpbml0IGkxOG5leHRcclxuLy8gICAvLyBmb3IgYWxsIG9wdGlvbnMgcmVhZDogaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbi8vICAgLmluaXQoe1xyXG4vLyAgICAgYmFja2VuZDoge1xyXG4vLyAgICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBmYWxsYmFja0xuZzogJ2VuJyxcclxuLy8gICAgIGxuZzogJ3ZuJyxcclxuLy8gICAgIGRlYnVnOiB0cnVlLFxyXG4vLyAgICAgd2hpdGVsaXN0OiBMYW5ndWFnZXMsXHJcblxyXG4vLyAgICAgaW50ZXJwb2xhdGlvbjoge1xyXG4vLyAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsIC8vIG5vdCBuZWVkZWQgZm9yIHJlYWN0IGFzIGl0IGVzY2FwZXMgYnkgZGVmYXVsdFxyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGkxOG47XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7IG90aGVyTGFuZ3VhZ2VzOiBbJ3ZuJ10gfSkiXSwic291cmNlUm9vdCI6IiJ9