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
// const NextI18Next = require('next-i18next')
// module.exports = new NextI18Next({ otherLanguages: ['vn'] })
// const NextI18Next = require('next-i18next').default.
// module.exports = new NextI18Next(
//     { defaultLanguage: 'en',
//     otherLanguages: ['vn'] })
var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/esm/index.js")["default"];

var languages = ['vn'];
var NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['vn']
});
NextI18NextInstance.i18n.languages = languages;
module.exports = {
  "default": NextI18NextInstance,
  withTranslation: NextI18NextInstance.withTranslation
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaTE4bi5qcyJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJsYW5ndWFnZXMiLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJpMThuIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxtRUFBRCxDQUFQLFdBQXBCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxDQUFFLElBQUYsQ0FBbEI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxJQUFJSCxXQUFKLENBQWdCO0FBQzNDSSxpQkFBZSxFQUFFLElBRDBCO0FBRTNDQyxnQkFBYyxFQUFFLENBQUUsSUFBRjtBQUYyQixDQUFoQixDQUE1QjtBQUtBRixtQkFBbUIsQ0FBQ0csSUFBcEIsQ0FBeUJKLFNBQXpCLEdBQXFDQSxTQUFyQztBQUVBSyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEIsYUFBU0wsbUJBRE87QUFFaEJNLGlCQUFlLEVBQUVOLG1CQUFtQixDQUFDTTtBQUZyQixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYmQzZmRlMTk2ODYwN2I2ZWM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbi8vIGltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbi8vIGltcG9ydCBCYWNrZW5kIGZyb20gJ2kxOG5leHQtaHR0cC1iYWNrZW5kJztcclxuXHJcbi8vIGltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJztcclxuLy8gLy8gZG9uJ3Qgd2FudCB0byB1c2UgdGhpcz9cclxuLy8gLy8gaGF2ZSBhIGxvb2sgYXQgdGhlIFF1aWNrIHN0YXJ0IGd1aWRlIFxyXG4vLyAvLyBmb3IgcGFzc2luZyBpbiBsbmcgYW5kIHRyYW5zbGF0aW9ucyBvbiBpbml0XHJcblxyXG4vLyBjb25zdCBMYW5ndWFnZXMgPSBbJ2VuJywgJ3ZuJ107XHJcblxyXG5cclxuLy8gaTE4blxyXG4vLyAgIC8vIGxvYWQgdHJhbnNsYXRpb24gdXNpbmcgaHR0cCAtPiBzZWUgL3B1YmxpYy9sb2NhbGVzIChpLmUuIGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L3JlYWN0LWkxOG5leHQvdHJlZS9tYXN0ZXIvZXhhbXBsZS9yZWFjdC9wdWJsaWMvbG9jYWxlcylcclxuLy8gICAvLyBsZWFybiBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LWh0dHAtYmFja2VuZFxyXG4vLyAgIC51c2UoQmFja2VuZClcclxuLy8gICAvLyBkZXRlY3QgdXNlciBsYW5ndWFnZVxyXG4vLyAgIC8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pMThuZXh0L2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZURldGVjdG9yXHJcbi8vICAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxyXG4vLyAgIC8vIHBhc3MgdGhlIGkxOG4gaW5zdGFuY2UgdG8gcmVhY3QtaTE4bmV4dC5cclxuLy8gICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbi8vICAgLy8gaW5pdCBpMThuZXh0XHJcbi8vICAgLy8gZm9yIGFsbCBvcHRpb25zIHJlYWQ6IGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xyXG4vLyAgIC5pbml0KHtcclxuLy8gICAgIGJhY2tlbmQ6IHtcclxuLy8gICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgZmFsbGJhY2tMbmc6ICdlbicsXHJcbi8vICAgICBsbmc6ICd2bicsXHJcbi8vICAgICBkZWJ1ZzogdHJ1ZSxcclxuLy8gICAgIHdoaXRlbGlzdDogTGFuZ3VhZ2VzLFxyXG5cclxuLy8gICAgIGludGVycG9sYXRpb246IHtcclxuLy8gICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLCAvLyBub3QgbmVlZGVkIGZvciByZWFjdCBhcyBpdCBlc2NhcGVzIGJ5IGRlZmF1bHRcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBpMThuO1xyXG5cclxuLy8gY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoeyBvdGhlckxhbmd1YWdlczogWyd2biddIH0pXHJcblxyXG4vLyBjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQuXHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dChcclxuLy8gICAgIHsgZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG4vLyAgICAgb3RoZXJMYW5ndWFnZXM6IFsndm4nXSB9KVxyXG5cclxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcblxyXG5jb25zdCBsYW5ndWFnZXMgPSBbICd2biddO1xyXG5cclxuY29uc3QgTmV4dEkxOE5leHRJbnN0YW5jZSA9IG5ldyBOZXh0STE4TmV4dCh7XHJcblx0ZGVmYXVsdExhbmd1YWdlOiAnZW4nLFxyXG5cdG90aGVyTGFuZ3VhZ2VzOiBbICd2biddLFxyXG59KVxyXG5cclxuTmV4dEkxOE5leHRJbnN0YW5jZS5pMThuLmxhbmd1YWdlcyA9IGxhbmd1YWdlc1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0ZGVmYXVsdDogTmV4dEkxOE5leHRJbnN0YW5jZSxcclxuXHR3aXRoVHJhbnNsYXRpb246IE5leHRJMThOZXh0SW5zdGFuY2Uud2l0aFRyYW5zbGF0aW9uLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==