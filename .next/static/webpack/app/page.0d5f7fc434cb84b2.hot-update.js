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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrapper */ \"(app-pages-browser)/./src/app/components/InputWrapper.js\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConverterForm.module.css */ \"(app-pages-browser)/./src/app/components/ConverterForm.module.css\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CryptoCurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CryptoCurrencySelectBox.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ \"(app-pages-browser)/./src/app/components/InputField.js\");\n/* harmony import */ var _currencySelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencySelectBox */ \"(app-pages-browser)/./src/app/components/currencySelectBox.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/app/components/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ConverterForm = ()=>{\n    _s();\n    const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [cryptoCurrncies, setCryptoCurrncies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [targetCurrencyList, setTargetCurrencyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCryptoCurrencies();\n    }, []);\n    const fetchCryptoCurrencies = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoCurrencies\");\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setCryptoCurrncies(result);\n            setTargetCurrencyList(result[0].supportedCurrencies);\n            setSelectedCryptoCurrncy(result[0].symbol);\n            const postData = {\n                cryptoSymbol: result[0].symbol,\n                fiatCurrency: result[0].supportedCurrencies[0],\n                amount: amount\n            };\n            fetchConvertedAmountValue(postData);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading please wait...\"\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n            lineNumber: 43,\n            columnNumber: 16\n        }, undefined);\n    }\n    const handleCryptoCurrencyChange = (value)=>{\n        const supportedCurrenciesList = cryptoCurrncies.filter((item)=>item.symbol === value);\n        setSelectedCryptoCurrncy(value);\n        setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);\n    };\n    const handleAmountChange = (value)=>{\n        const postData = {\n            cryptoSymbol: selectedCryptoCurrncy,\n            fiatCurrency: targetCurrencyList[0],\n            amount: amount\n        };\n        if (/^\\d+$/.test(value) || value === \"\") {\n            setAmount(Number(value));\n        }\n        fetchConvertedAmountValue(postData);\n    };\n    const fetchConvertedAmountValue = async (postData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoConverterAmount\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(postData)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setConvertedAmount(result);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: amount,\n                            onChange: handleAmountChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 90,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: cryptoCurrncies,\n                            onSelect: handleCryptoCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 89,\n                    columnNumber: 19\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: convertedAmount,\n                            disabled: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 97,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currencySelectBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: targetCurrencyList\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 98,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 96,\n                    columnNumber: 19\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ConverterForm, \"QYxo4z/KJLavhoVfjAThxw6U46o=\");\n_c = ConverterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConverterForm);\nvar _c;\n$RefreshReg$(_c, \"ConverterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNLO0FBQ2lCO0FBQzFCO0FBQ2M7QUFDdEI7QUFFOUIsTUFBTVEsZ0JBQWdCOztJQUNsQixNQUFNLENBQUNDLHVCQUF1QkMseUJBQXlCLEdBQUdWLCtDQUFRQTtJQUNsRSxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDekQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2Usb0JBQW9CQyxzQkFBc0IsR0FBR2hCLCtDQUFRQTtJQUM1RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNxQixpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFFO1FBQ1BzQjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1BLHdCQUF3QjtRQUM1QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO1lBQ3hEO1lBQ0EsTUFBTUMsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDbEIsbUJBQW1CaUI7WUFDbkJiLHNCQUFzQmEsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CO1lBQ25EckIseUJBQXlCbUIsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csTUFBTTtZQUN6QyxNQUFNQyxXQUFXO2dCQUFHQyxjQUFjTCxNQUFNLENBQUMsRUFBRSxDQUFDRyxNQUFNO2dCQUFDRyxjQUFjTixNQUFNLENBQUMsRUFBRSxDQUFDRSxtQkFBbUIsQ0FBQyxFQUFFO2dCQUFFbEIsUUFBUUE7WUFBUTtZQUNuSHVCLDBCQUEwQkg7UUFDNUIsRUFBRSxPQUFPZCxPQUFPO1lBQ2RDLFNBQVNELE1BQU1rQixPQUFPO1FBQ3hCLFNBQVU7WUFDUm5CLFdBQVc7UUFDYjtJQUNGO0lBRUEsSUFBR0QsU0FBUztRQUNSLHFCQUFPLDhEQUFDcUI7c0JBQUU7Ozs7OztJQUNkO0lBRUEsTUFBTUMsNkJBQTZCLENBQUNDO1FBQ2hDLE1BQU1DLDBCQUEwQjlCLGdCQUFnQitCLE1BQU0sQ0FBRUMsQ0FBQUEsT0FBUUEsS0FBS1gsTUFBTSxLQUFLUTtRQUNoRjlCLHlCQUF5QjhCO1FBQ3pCeEIsc0JBQXNCeUIsdUJBQXVCLENBQUMsRUFBRSxDQUFDVixtQkFBbUI7SUFDeEU7SUFFQSxNQUFNYSxxQkFBcUIsQ0FBQ0o7UUFDeEIsTUFBTVAsV0FBVztZQUFHQyxjQUFjekI7WUFBc0IwQixjQUFjcEIsa0JBQWtCLENBQUMsRUFBRTtZQUFFRixRQUFRQTtRQUFRO1FBQzdHLElBQUksUUFBUWdDLElBQUksQ0FBQ0wsVUFBVUEsVUFBVSxJQUFJO1lBQ3JDMUIsVUFBVWdDLE9BQU9OO1FBQ3JCO1FBRUFKLDBCQUEwQkg7SUFDOUI7SUFFQSxNQUFNRyw0QkFBNEIsT0FBTUg7UUFDcEMsSUFBSTtZQUNBLE1BQU1ULFdBQVcsTUFBTUMsTUFBTSxzREFBc0Q7Z0JBQ2pGc0IsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNsQjtZQUN2QjtZQUVBLElBQUksQ0FBQ1QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO1lBQ3hEO1lBRUEsTUFBTUMsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDUixtQkFBbUJPO1FBQ3JCLEVBQUUsT0FBT1YsT0FBTztZQUNkQyxTQUFTRCxNQUFNa0IsT0FBTztRQUN4QixTQUFVO1lBQ1JuQixXQUFXO1FBQ2I7SUFFTjtJQUdBLHFCQUNJLDhEQUFDa0M7OzBCQUNHLDhEQUFDbEQscURBQVlBOzBCQUNQLDRFQUFDbUQ7b0JBQUlDLFdBQVduRCxpRkFBd0I7O3NDQUNsQyw4REFBQ0UsbURBQVVBOzRCQUFDbUMsT0FBTzNCOzRCQUFRMEMsVUFBVVg7Ozs7OztzQ0FDckMsOERBQUN4QyxnRUFBdUJBOzRCQUFDb0QsTUFBTTdDOzRCQUFpQjhDLFVBQVVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRFLDhEQUFDckMscURBQVlBOzBCQUNQLDRFQUFDbUQ7b0JBQUlDLFdBQVduRCxpRkFBd0I7O3NDQUNsQyw4REFBQ0UsbURBQVVBOzRCQUFDbUMsT0FBT25COzRCQUFpQnFDLFFBQVE7Ozs7OztzQ0FDNUMsOERBQUNwRCwwREFBaUJBOzRCQUFDa0QsTUFBTXpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQS9GTVA7S0FBQUE7QUFpR04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NvbnZlcnRlckZvcm0uanM/MjdhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRXcmFwcGVyIGZyb20gJy4vSW5wdXRXcmFwcGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db252ZXJ0ZXJGb3JtLm1vZHVsZS5jc3MnXG5pbXBvcnQgQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3ggZnJvbSAnLi9DcnlwdG9DdXJyZW5jeVNlbGVjdEJveCc7XG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IEN1cnJlbmN5U2VsZWN0Qm94IGZyb20gJy4vY3VycmVuY3lTZWxlY3RCb3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmNvbnN0IENvbnZlcnRlckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkQ3J5cHRvQ3Vycm5jeSwgc2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2NyeXB0b0N1cnJuY2llcywgc2V0Q3J5cHRvQ3Vycm5jaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW3RhcmdldEN1cnJlbmN5TGlzdCwgc2V0VGFyZ2V0Q3VycmVuY3lMaXN0XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2NvbnZlcnRlZEFtb3VudCwgc2V0Q29udmVydGVkQW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIGZldGNoQ3J5cHRvQ3VycmVuY2llcygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGZldGNoQ3J5cHRvQ3VycmVuY2llcyA9IGFzeW5jKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9nZXRDcnlwdG9DdXJyZW5jaWVzJyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRDcnlwdG9DdXJybmNpZXMocmVzdWx0KTtcbiAgICAgICAgc2V0VGFyZ2V0Q3VycmVuY3lMaXN0KHJlc3VsdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5KHJlc3VsdFswXS5zeW1ib2wpO1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHsgIGNyeXB0b1N5bWJvbDogcmVzdWx0WzBdLnN5bWJvbCxmaWF0Q3VycmVuY3k6IHJlc3VsdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzWzBdLCBhbW91bnQ6IGFtb3VudCAgfVxuICAgICAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPHA+bG9hZGluZyBwbGVhc2Ugd2FpdC4uLjwvcD5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdCA9IGNyeXB0b0N1cnJuY2llcy5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5zeW1ib2wgPT09IHZhbHVlICk7XG4gICAgICAgIHNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSh2YWx1ZSk7XG4gICAgICAgIHNldFRhcmdldEN1cnJlbmN5TGlzdChzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IHsgIGNyeXB0b1N5bWJvbDogc2VsZWN0ZWRDcnlwdG9DdXJybmN5LGZpYXRDdXJyZW5jeTogdGFyZ2V0Q3VycmVuY3lMaXN0WzBdLCBhbW91bnQ6IGFtb3VudCAgfVxuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBzZXRBbW91bnQoTnVtYmVyKHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlID0gYXN5bmMocG9zdERhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZ2V0Q3J5cHRvQ29udmVydGVyQW1vdW50Jywge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRDb252ZXJ0ZWRBbW91bnQocmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZmllbGRDb250YWluZXInXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17YW1vdW50fSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENyeXB0b0N1cnJlbmN5U2VsZWN0Qm94IGRhdGE9e2NyeXB0b0N1cnJuY2llc30gb25TZWxlY3Q9e2hhbmRsZUNyeXB0b0N1cnJlbmN5Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cblxuICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ZpZWxkQ29udGFpbmVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e2NvbnZlcnRlZEFtb3VudH0gZGlzYWJsZWQgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVuY3lTZWxlY3RCb3ggZGF0YT17dGFyZ2V0Q3VycmVuY3lMaXN0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cblxuICAgICAgICAgICAgey8qIDxCdXR0b24+Q29udmVydCBDdXJyZW5jeTwvQnV0dG9uPiAqL31cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVydGVyRm9ybTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnB1dFdyYXBwZXIiLCJzdHlsZXMiLCJDcnlwdG9DdXJyZW5jeVNlbGVjdEJveCIsIklucHV0RmllbGQiLCJDdXJyZW5jeVNlbGVjdEJveCIsIkJ1dHRvbiIsIkNvbnZlcnRlckZvcm0iLCJzZWxlY3RlZENyeXB0b0N1cnJuY3kiLCJzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3kiLCJjcnlwdG9DdXJybmNpZXMiLCJzZXRDcnlwdG9DdXJybmNpZXMiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJ0YXJnZXRDdXJyZW5jeUxpc3QiLCJzZXRUYXJnZXRDdXJyZW5jeUxpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjb252ZXJ0ZWRBbW91bnQiLCJzZXRDb252ZXJ0ZWRBbW91bnQiLCJmZXRjaENyeXB0b0N1cnJlbmNpZXMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsInJlc3VsdCIsImpzb24iLCJzdXBwb3J0ZWRDdXJyZW5jaWVzIiwic3ltYm9sIiwicG9zdERhdGEiLCJjcnlwdG9TeW1ib2wiLCJmaWF0Q3VycmVuY3kiLCJmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlIiwibWVzc2FnZSIsInAiLCJoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZSIsInZhbHVlIiwic3VwcG9ydGVkQ3VycmVuY2llc0xpc3QiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwidGVzdCIsIk51bWJlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImRhdGEiLCJvblNlbGVjdCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ConverterForm.js\n"));

/***/ })

});