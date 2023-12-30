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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrapper */ \"(app-pages-browser)/./src/app/components/InputWrapper.js\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConverterForm.module.css */ \"(app-pages-browser)/./src/app/components/ConverterForm.module.css\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CryptoCurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CryptoCurrencySelectBox.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ \"(app-pages-browser)/./src/app/components/InputField.js\");\n/* harmony import */ var _currencySelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencySelectBox */ \"(app-pages-browser)/./src/app/components/currencySelectBox.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/app/components/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ConverterForm = ()=>{\n    _s();\n    const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [cryptoCurrncies, setCryptoCurrncies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [targetCurrencyList, setTargetCurrencyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCryptoCurrencies();\n    }, []);\n    const fetchCryptoCurrencies = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoCurrencies\");\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setCryptoCurrncies(result);\n            setTargetCurrencyList(result[0].supportedCurrencies);\n            setSelectedCryptoCurrncy(result[0].symbol);\n            const postData = {\n                cryptoSymbol: result[0].symbol,\n                fiatCurrency: result[0].supportedCurrencies[0],\n                amount: amount\n            };\n            fetchConvertedAmountValue(postData);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading please wait...\"\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleCryptoCurrencyChange = (value)=>{\n        const supportedCurrenciesList = cryptoCurrncies.filter((item)=>item.symbol === value);\n        setSelectedCryptoCurrncy(value);\n        setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);\n    };\n    const handleAmountChange = (value)=>{\n        if (/^\\d+$/.test(value) || value === \"\") {\n            const sanitizedValue = value.replace(/^0+/, \"\");\n            setAmount(Number(sanitizedValue));\n            const postData = {\n                cryptoSymbol: selectedCryptoCurrncy,\n                fiatCurrency: targetCurrencyList[0],\n                amount: Number(sanitizedValue)\n            };\n            fetchConvertedAmountValue(postData);\n        }\n    };\n    const fetchConvertedAmountValue = async (postData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoConverterAmount\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(postData)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setConvertedAmount(result);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: amount,\n                            onChange: handleAmountChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: cryptoCurrncies,\n                            onSelect: handleCryptoCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: convertedAmount,\n                            disabled: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currencySelectBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: targetCurrencyList\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConverterForm, \"QYxo4z/KJLavhoVfjAThxw6U46o=\");\n_c = ConverterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConverterForm);\nvar _c;\n$RefreshReg$(_c, \"ConverterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNNO0FBQ2dCO0FBQzFCO0FBQ2M7QUFDdEI7QUFFOUIsTUFBTVEsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLHVCQUF1QkMseUJBQXlCLEdBQUdWLCtDQUFRQTtJQUNsRSxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDekQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2Usb0JBQW9CQyxzQkFBc0IsR0FBR2hCLCtDQUFRQTtJQUM1RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNxQixpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ1JzQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLHdCQUF3QjtRQUM1QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtZQUVGLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO1lBQ3hEO1lBQ0EsTUFBTUMsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDbEIsbUJBQW1CaUI7WUFDbkJiLHNCQUFzQmEsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CO1lBQ25EckIseUJBQXlCbUIsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csTUFBTTtZQUN6QyxNQUFNQyxXQUFXO2dCQUNmQyxjQUFjTCxNQUFNLENBQUMsRUFBRSxDQUFDRyxNQUFNO2dCQUM5QkcsY0FBY04sTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CLENBQUMsRUFBRTtnQkFDOUNsQixRQUFRQTtZQUNWO1lBQ0F1QiwwQkFBMEJIO1FBQzVCLEVBQUUsT0FBT2QsT0FBTztZQUNkQyxTQUFTRCxNQUFNa0IsT0FBTztRQUN4QixTQUFVO1lBQ1JuQixXQUFXO1FBQ2I7SUFDRjtJQUVBLElBQUlELFNBQVM7UUFDWCxxQkFBTyw4REFBQ3FCO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLE1BQU1DLDZCQUE2QixDQUFDQztRQUNsQyxNQUFNQywwQkFBMEI5QixnQkFBZ0IrQixNQUFNLENBQ3BELENBQUNDLE9BQVNBLEtBQUtYLE1BQU0sS0FBS1E7UUFFNUI5Qix5QkFBeUI4QjtRQUN6QnhCLHNCQUFzQnlCLHVCQUF1QixDQUFDLEVBQUUsQ0FBQ1YsbUJBQW1CO0lBRXRFO0lBRUEsTUFBTWEscUJBQXFCLENBQUNKO1FBQzFCLElBQUksUUFBUUssSUFBSSxDQUFDTCxVQUFVQSxVQUFVLElBQUk7WUFDdkMsTUFBTU0saUJBQWlCTixNQUFNTyxPQUFPLENBQUMsT0FBTztZQUM1Q2pDLFVBQVVrQyxPQUFPRjtZQUNqQixNQUFNYixXQUFXO2dCQUNmQyxjQUFjekI7Z0JBQ2QwQixjQUFjcEIsa0JBQWtCLENBQUMsRUFBRTtnQkFDbkNGLFFBQVFtQyxPQUFPRjtZQUNqQjtZQUNBViwwQkFBMEJIO1FBQzVCO0lBQ0Y7SUFFQSxNQUFNRyw0QkFBNEIsT0FBT0g7UUFDdkMsSUFBSTtZQUNGLE1BQU1ULFdBQVcsTUFBTUMsTUFDckIsc0RBQ0E7Z0JBQ0V3QixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3BCO1lBQ3ZCO1lBR0YsSUFBSSxDQUFDVCxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJILFNBQVNJLE1BQU07WUFDeEQ7WUFFQSxNQUFNQyxTQUFTLE1BQU1MLFNBQVNNLElBQUk7WUFDbENSLG1CQUFtQk87UUFDckIsRUFBRSxPQUFPVixPQUFPO1lBQ2RDLFNBQVNELE1BQU1rQixPQUFPO1FBQ3hCLFNBQVU7WUFDUm5CLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNvQzs7MEJBQ0MsOERBQUNwRCxxREFBWUE7MEJBQ1gsNEVBQUNxRDtvQkFBSUMsV0FBV3JELGlGQUF3Qjs7c0NBQ3RDLDhEQUFDRSxtREFBVUE7NEJBQUNtQyxPQUFPM0I7NEJBQVE0QyxVQUFVYjs7Ozs7O3NDQUNyQyw4REFBQ3hDLGdFQUF1QkE7NEJBQ3RCc0QsTUFBTS9DOzRCQUNOZ0QsVUFBVXBCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLaEIsOERBQUNyQyxxREFBWUE7MEJBQ1gsNEVBQUNxRDtvQkFBSUMsV0FBV3JELGlGQUF3Qjs7c0NBQ3RDLDhEQUFDRSxtREFBVUE7NEJBQUNtQyxPQUFPbkI7NEJBQWlCdUMsUUFBUTs7Ozs7O3NDQUM1Qyw4REFBQ3RELDBEQUFpQkE7NEJBQUNvRCxNQUFNM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25DO0dBaEhNUDtLQUFBQTtBQWtITiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29udmVydGVyRm9ybS5qcz8yN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0V3JhcHBlciBmcm9tIFwiLi9JbnB1dFdyYXBwZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udmVydGVyRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3ggZnJvbSBcIi4vQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3hcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuL0lucHV0RmllbGRcIjtcbmltcG9ydCBDdXJyZW5jeVNlbGVjdEJveCBmcm9tIFwiLi9jdXJyZW5jeVNlbGVjdEJveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ29udmVydGVyRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ3J5cHRvQ3Vycm5jeSwgc2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjcnlwdG9DdXJybmNpZXMsIHNldENyeXB0b0N1cnJuY2llc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3RhcmdldEN1cnJlbmN5TGlzdCwgc2V0VGFyZ2V0Q3VycmVuY3lMaXN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnZlcnRlZEFtb3VudCwgc2V0Q29udmVydGVkQW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDcnlwdG9DdXJyZW5jaWVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaENyeXB0b0N1cnJlbmNpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9nZXRDcnlwdG9DdXJyZW5jaWVzXCJcbiAgICAgICk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldENyeXB0b0N1cnJuY2llcyhyZXN1bHQpO1xuICAgICAgc2V0VGFyZ2V0Q3VycmVuY3lMaXN0KHJlc3VsdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzKTtcbiAgICAgIHNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeShyZXN1bHRbMF0uc3ltYm9sKTtcbiAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xuICAgICAgICBjcnlwdG9TeW1ib2w6IHJlc3VsdFswXS5zeW1ib2wsXG4gICAgICAgIGZpYXRDdXJyZW5jeTogcmVzdWx0WzBdLnN1cHBvcnRlZEN1cnJlbmNpZXNbMF0sXG4gICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgfTtcbiAgICAgIGZldGNoQ29udmVydGVkQW1vdW50VmFsdWUocG9zdERhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPmxvYWRpbmcgcGxlYXNlIHdhaXQuLi48L3A+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ3J5cHRvQ3VycmVuY3lDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdCA9IGNyeXB0b0N1cnJuY2llcy5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5zeW1ib2wgPT09IHZhbHVlXG4gICAgKTtcbiAgICBzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3kodmFsdWUpO1xuICAgIHNldFRhcmdldEN1cnJlbmN5TGlzdChzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzKTtcbiAgICBcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjArLywgXCJcIik7XG4gICAgICBzZXRBbW91bnQoTnVtYmVyKHNhbml0aXplZFZhbHVlKSk7XG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgICAgY3J5cHRvU3ltYm9sOiBzZWxlY3RlZENyeXB0b0N1cnJuY3ksXG4gICAgICAgIGZpYXRDdXJyZW5jeTogdGFyZ2V0Q3VycmVuY3lMaXN0WzBdLFxuICAgICAgICBhbW91bnQ6IE51bWJlcihzYW5pdGl6ZWRWYWx1ZSksXG4gICAgICB9O1xuICAgICAgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZShwb3N0RGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoQ29udmVydGVkQW1vdW50VmFsdWUgPSBhc3luYyAocG9zdERhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2dldENyeXB0b0NvbnZlcnRlckFtb3VudFwiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldENvbnZlcnRlZEFtb3VudChyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0+XG4gICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmllbGRDb250YWluZXJcIl19PlxuICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXthbW91bnR9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IC8+XG4gICAgICAgICAgPENyeXB0b0N1cnJlbmN5U2VsZWN0Qm94XG4gICAgICAgICAgICBkYXRhPXtjcnlwdG9DdXJybmNpZXN9XG4gICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlQ3J5cHRvQ3VycmVuY3lDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0lucHV0V3JhcHBlcj5cblxuICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZpZWxkQ29udGFpbmVyXCJdfT5cbiAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17Y29udmVydGVkQW1vdW50fSBkaXNhYmxlZCAvPlxuICAgICAgICAgIDxDdXJyZW5jeVNlbGVjdEJveCBkYXRhPXt0YXJnZXRDdXJyZW5jeUxpc3R9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JbnB1dFdyYXBwZXI+XG5cbiAgICAgIHsvKiA8QnV0dG9uPkNvbnZlcnQgQ3VycmVuY3k8L0J1dHRvbj4gKi99XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udmVydGVyRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIklucHV0V3JhcHBlciIsInN0eWxlcyIsIkNyeXB0b0N1cnJlbmN5U2VsZWN0Qm94IiwiSW5wdXRGaWVsZCIsIkN1cnJlbmN5U2VsZWN0Qm94IiwiQnV0dG9uIiwiQ29udmVydGVyRm9ybSIsInNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSIsInNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSIsImNyeXB0b0N1cnJuY2llcyIsInNldENyeXB0b0N1cnJuY2llcyIsImFtb3VudCIsInNldEFtb3VudCIsInRhcmdldEN1cnJlbmN5TGlzdCIsInNldFRhcmdldEN1cnJlbmN5TGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImNvbnZlcnRlZEFtb3VudCIsInNldENvbnZlcnRlZEFtb3VudCIsImZldGNoQ3J5cHRvQ3VycmVuY2llcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzdWx0IiwianNvbiIsInN1cHBvcnRlZEN1cnJlbmNpZXMiLCJzeW1ib2wiLCJwb3N0RGF0YSIsImNyeXB0b1N5bWJvbCIsImZpYXRDdXJyZW5jeSIsImZldGNoQ29udmVydGVkQW1vdW50VmFsdWUiLCJtZXNzYWdlIiwicCIsImhhbmRsZUNyeXB0b0N1cnJlbmN5Q2hhbmdlIiwidmFsdWUiLCJzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdCIsImZpbHRlciIsIml0ZW0iLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJ0ZXN0Iiwic2FuaXRpemVkVmFsdWUiLCJyZXBsYWNlIiwiTnVtYmVyIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwiZGF0YSIsIm9uU2VsZWN0IiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ConverterForm.js\n"));

/***/ })

});