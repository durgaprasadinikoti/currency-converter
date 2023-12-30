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

/***/ "(app-pages-browser)/./src/app/components/ConverterForm.js":
/*!*********************************************!*\
  !*** ./src/app/components/ConverterForm.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrapper */ \"(app-pages-browser)/./src/app/components/InputWrapper.js\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConverterForm.module.css */ \"(app-pages-browser)/./src/app/components/ConverterForm.module.css\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CryptoCurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CryptoCurrencySelectBox.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ \"(app-pages-browser)/./src/app/components/InputField.js\");\n/* harmony import */ var _currencySelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencySelectBox */ \"(app-pages-browser)/./src/app/components/currencySelectBox.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/app/components/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ConverterForm = ()=>{\n    _s();\n    const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [cryptoCurrncies, setCryptoCurrncies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [targetCurrencyList, setTargetCurrencyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCryptoCurrencies();\n    }, []);\n    const fetchCryptoCurrencies = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoCurrencies\");\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setCryptoCurrncies(result);\n            setTargetCurrencyList(result[0].supportedCurrencies);\n            const postData = {\n                cryptoSymbol: result[0].symbol,\n                fiatCurrency: result[0].supportedCurrencies[0],\n                amount: amount\n            };\n            fetchConvertedAmountValue(postData);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading please wait...\"\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n            lineNumber: 42,\n            columnNumber: 16\n        }, undefined);\n    }\n    const handleCryptoCurrencyChange = (value)=>{\n        const supportedCurrenciesList = cryptoCurrncies.filter((item)=>item.symbol === value);\n        setSelectedCryptoCurrncy(value);\n        setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);\n    };\n    const handleAmountChange = (value)=>{\n        setAmount(Number(value));\n    };\n    const fetchConvertedAmountValue = async (postData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoConverterAmount\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(postData)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setConvertedAmount(result);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: amount,\n                            onChange: handleAmountChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 84,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: cryptoCurrncies,\n                            onSelect: handleCryptoCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 85,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 83,\n                    columnNumber: 19\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: convertedAmount,\n                            disabled: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currencySelectBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: targetCurrencyList\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 90,\n                    columnNumber: 19\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ConverterForm, \"QYxo4z/KJLavhoVfjAThxw6U46o=\");\n_c = ConverterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConverterForm);\nvar _c;\n$RefreshReg$(_c, \"ConverterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNLO0FBQ2lCO0FBQzFCO0FBQ2M7QUFDdEI7QUFFOUIsTUFBTVEsZ0JBQWdCOztJQUNsQixNQUFNLENBQUNDLHVCQUF1QkMseUJBQXlCLEdBQUdWLCtDQUFRQTtJQUNsRSxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDekQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2Usb0JBQW9CQyxzQkFBc0IsR0FBR2hCLCtDQUFRQTtJQUM1RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNxQixpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFFO1FBQ1BzQjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1BLHdCQUF3QjtRQUM1QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO1lBQ3hEO1lBQ0EsTUFBTUMsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDbEIsbUJBQW1CaUI7WUFDbkJiLHNCQUFzQmEsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CO1lBQ25ELE1BQU1DLFdBQVc7Z0JBQUdDLGNBQWNKLE1BQU0sQ0FBQyxFQUFFLENBQUNLLE1BQU07Z0JBQUNDLGNBQWNOLE1BQU0sQ0FBQyxFQUFFLENBQUNFLG1CQUFtQixDQUFDLEVBQUU7Z0JBQUVsQixRQUFRQTtZQUFRO1lBQ25IdUIsMEJBQTBCSjtRQUM1QixFQUFFLE9BQU9iLE9BQU87WUFDZEMsU0FBU0QsTUFBTWtCLE9BQU87UUFDeEIsU0FBVTtZQUNSbkIsV0FBVztRQUNiO0lBQ0Y7SUFFQSxJQUFHRCxTQUFTO1FBQ1IscUJBQU8sOERBQUNxQjtzQkFBRTs7Ozs7O0lBQ2Q7SUFFQSxNQUFNQyw2QkFBNkIsQ0FBQ0M7UUFDaEMsTUFBTUMsMEJBQTBCOUIsZ0JBQWdCK0IsTUFBTSxDQUFFQyxDQUFBQSxPQUFRQSxLQUFLVCxNQUFNLEtBQUtNO1FBQ2hGOUIseUJBQXlCOEI7UUFDekJ4QixzQkFBc0J5Qix1QkFBdUIsQ0FBQyxFQUFFLENBQUNWLG1CQUFtQjtJQUN4RTtJQUVBLE1BQU1hLHFCQUFxQixDQUFDSjtRQUN4QjFCLFVBQVUrQixPQUFPTDtJQUNyQjtJQUVBLE1BQU1KLDRCQUE0QixPQUFNSjtRQUNwQyxJQUFJO1lBQ0EsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLHNEQUFzRDtnQkFDakZxQixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDUixTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJILFNBQVNJLE1BQU07WUFDeEQ7WUFFQSxNQUFNQyxTQUFTLE1BQU1MLFNBQVNNLElBQUk7WUFDbENSLG1CQUFtQk87UUFDckIsRUFBRSxPQUFPVixPQUFPO1lBQ2RDLFNBQVNELE1BQU1rQixPQUFPO1FBQ3hCLFNBQVU7WUFDUm5CLFdBQVc7UUFDYjtJQUVOO0lBR0EscUJBQ0ksOERBQUNpQzs7MEJBQ0csOERBQUNqRCxxREFBWUE7MEJBQ1AsNEVBQUNrRDtvQkFBSUMsV0FBV2xELGlGQUF3Qjs7c0NBQ2xDLDhEQUFDRSxtREFBVUE7NEJBQUNtQyxPQUFPM0I7NEJBQVF5QyxVQUFVVjs7Ozs7O3NDQUNyQyw4REFBQ3hDLGdFQUF1QkE7NEJBQUNtRCxNQUFNNUM7NEJBQWlCNkMsVUFBVWpCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEUsOERBQUNyQyxxREFBWUE7MEJBQ1AsNEVBQUNrRDtvQkFBSUMsV0FBV2xELGlGQUF3Qjs7c0NBQ2xDLDhEQUFDRSxtREFBVUE7NEJBQUNtQyxPQUFPbkI7NEJBQWlCb0MsUUFBUTs7Ozs7O3NDQUM1Qyw4REFBQ25ELDBEQUFpQkE7NEJBQUNpRCxNQUFNeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pEO0dBekZNUDtLQUFBQTtBQTJGTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29udmVydGVyRm9ybS5qcz8yN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dFdyYXBwZXIgZnJvbSAnLi9JbnB1dFdyYXBwZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnZlcnRlckZvcm0ubW9kdWxlLmNzcydcbmltcG9ydCBDcnlwdG9DdXJyZW5jeVNlbGVjdEJveCBmcm9tICcuL0NyeXB0b0N1cnJlbmN5U2VsZWN0Qm94JztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4vSW5wdXRGaWVsZCc7XG5pbXBvcnQgQ3VycmVuY3lTZWxlY3RCb3ggZnJvbSAnLi9jdXJyZW5jeVNlbGVjdEJveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuY29uc3QgQ29udmVydGVyRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VsZWN0ZWRDcnlwdG9DdXJybmN5LCBzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbY3J5cHRvQ3Vycm5jaWVzLCBzZXRDcnlwdG9DdXJybmNpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbdGFyZ2V0Q3VycmVuY3lMaXN0LCBzZXRUYXJnZXRDdXJyZW5jeUxpc3RdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY29udmVydGVkQW1vdW50LCBzZXRDb252ZXJ0ZWRBbW91bnRdID0gdXNlU3RhdGUoMSk7XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgZmV0Y2hDcnlwdG9DdXJyZW5jaWVzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmV0Y2hDcnlwdG9DdXJyZW5jaWVzID0gYXN5bmMoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2dldENyeXB0b0N1cnJlbmNpZXMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENyeXB0b0N1cnJuY2llcyhyZXN1bHQpO1xuICAgICAgICBzZXRUYXJnZXRDdXJyZW5jeUxpc3QocmVzdWx0WzBdLnN1cHBvcnRlZEN1cnJlbmNpZXMpO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHsgIGNyeXB0b1N5bWJvbDogcmVzdWx0WzBdLnN5bWJvbCxmaWF0Q3VycmVuY3k6IHJlc3VsdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzWzBdLCBhbW91bnQ6IGFtb3VudCAgfVxuICAgICAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPHA+bG9hZGluZyBwbGVhc2Ugd2FpdC4uLjwvcD5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdCA9IGNyeXB0b0N1cnJuY2llcy5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5zeW1ib2wgPT09IHZhbHVlICk7XG4gICAgICAgIHNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSh2YWx1ZSk7XG4gICAgICAgIHNldFRhcmdldEN1cnJlbmN5TGlzdChzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZSA9IGFzeW5jKHBvc3REYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2dldENyeXB0b0NvbnZlcnRlckFtb3VudCcsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0Q29udmVydGVkQW1vdW50KHJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ZpZWxkQ29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcnlwdG9DdXJyZW5jeVNlbGVjdEJveCBkYXRhPXtjcnlwdG9DdXJybmNpZXN9IG9uU2VsZWN0PXtoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG5cbiAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydmaWVsZENvbnRhaW5lciddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtjb252ZXJ0ZWRBbW91bnR9IGRpc2FibGVkICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbmN5U2VsZWN0Qm94IGRhdGE9e3RhcmdldEN1cnJlbmN5TGlzdH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG5cbiAgICAgICAgICAgIHsvKiA8QnV0dG9uPkNvbnZlcnQgQ3VycmVuY3k8L0J1dHRvbj4gKi99XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRlckZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRXcmFwcGVyIiwic3R5bGVzIiwiQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3giLCJJbnB1dEZpZWxkIiwiQ3VycmVuY3lTZWxlY3RCb3giLCJCdXR0b24iLCJDb252ZXJ0ZXJGb3JtIiwic2VsZWN0ZWRDcnlwdG9DdXJybmN5Iiwic2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5IiwiY3J5cHRvQ3Vycm5jaWVzIiwic2V0Q3J5cHRvQ3Vycm5jaWVzIiwiYW1vdW50Iiwic2V0QW1vdW50IiwidGFyZ2V0Q3VycmVuY3lMaXN0Iiwic2V0VGFyZ2V0Q3VycmVuY3lMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY29udmVydGVkQW1vdW50Iiwic2V0Q29udmVydGVkQW1vdW50IiwiZmV0Y2hDcnlwdG9DdXJyZW5jaWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJyZXN1bHQiLCJqc29uIiwic3VwcG9ydGVkQ3VycmVuY2llcyIsInBvc3REYXRhIiwiY3J5cHRvU3ltYm9sIiwic3ltYm9sIiwiZmlhdEN1cnJlbmN5IiwiZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZSIsIm1lc3NhZ2UiLCJwIiwiaGFuZGxlQ3J5cHRvQ3VycmVuY3lDaGFuZ2UiLCJ2YWx1ZSIsInN1cHBvcnRlZEN1cnJlbmNpZXNMaXN0IiwiZmlsdGVyIiwiaXRlbSIsImhhbmRsZUFtb3VudENoYW5nZSIsIk51bWJlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImRhdGEiLCJvblNlbGVjdCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ConverterForm.js\n"));

/***/ })

});