"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/InputField.js":
/*!******************************************!*\
  !*** ./src/app/components/InputField.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst InputField = (param)=>{\n    let { value, disabled, onChange } = param;\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInputValue(value);\n    }, [\n        value\n    ]);\n    const handleInputChange = (event)=>{\n        // Remove leading zeros\n        const { value } = event.target;\n        const sanitizedValue = value.replace(/^0+/, \"\");\n        setInputValue(sanitizedValue);\n        onChange(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"number\",\n            className: \"bg-gray-800 border p-2 rounded-md text-white focus:outline-none focus:shadow-outline\",\n            placeholder: \"Loading...\",\n            value: inputValue,\n            onChange: handleInputChange,\n            readOnly: disabled\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/InputField.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/InputField.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InputField, \"cXrgNAawO+W2dPvLl8g9ONMVQWA=\");\n_c = InputField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputField);\nvar _c;\n$RefreshReg$(_c, \"InputField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbnB1dEZpZWxkLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVtRDtBQUVuRCxNQUFNRyxhQUFhO1FBQUMsRUFBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTs7SUFDOUMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDRztJQUU3Q0YsZ0RBQVNBLENBQUU7UUFDVE0sY0FBY0o7SUFDaEIsR0FBRztRQUFDQTtLQUFNO0lBRVYsTUFBTUssb0JBQW9CLENBQUNDO1FBQ3hCLHVCQUF1QjtRQUN2QixNQUFNLEVBQUVOLEtBQUssRUFBRSxHQUFHTSxNQUFNQyxNQUFNO1FBQzlCLE1BQU1DLGlCQUFpQlIsTUFBTVMsT0FBTyxDQUFDLE9BQU87UUFDN0NMLGNBQWNJO1FBQ2ROLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQ1AsS0FBSztJQUM3QjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUNDQyxNQUFLO1lBQ0xGLFdBQVU7WUFDVkcsYUFBWTtZQUNaZCxPQUFPRztZQUNQRCxVQUFVRztZQUNWVSxVQUFVZDs7Ozs7Ozs7Ozs7QUFJbEI7R0EzQk1GO0tBQUFBO0FBNkJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbnB1dEZpZWxkLmpzPzQyZGYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbnB1dEZpZWxkID0gKHt2YWx1ZSwgZGlzYWJsZWQsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIHNldElucHV0VmFsdWUodmFsdWUpXG4gIH0sIFt2YWx1ZV0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgLy8gUmVtb3ZlIGxlYWRpbmcgemVyb3NcbiAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICBjb25zdCBzYW5pdGl6ZWRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgICBzZXRJbnB1dFZhbHVlKHNhbml0aXplZFZhbHVlKTtcbiAgICBvbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXIgcC0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkxvYWRpbmcuLi5cIlxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICByZWFkT25seT17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRGaWVsZCIsInZhbHVlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInNhbml0aXplZFZhbHVlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/InputField.js\n"));

/***/ })

});