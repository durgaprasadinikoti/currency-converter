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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrapper */ \"(app-pages-browser)/./src/app/components/InputWrapper.js\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConverterForm.module.css */ \"(app-pages-browser)/./src/app/components/ConverterForm.module.css\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CryptoCurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CryptoCurrencySelectBox.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ \"(app-pages-browser)/./src/app/components/InputField.js\");\n/* harmony import */ var _currencySelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencySelectBox */ \"(app-pages-browser)/./src/app/components/currencySelectBox.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/app/components/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ConverterForm = ()=>{\n    _s();\n    const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [cryptoCurrncies, setCryptoCurrncies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [targetCurrencyList, setTargetCurrencyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCryptoCurrencies();\n    }, []);\n    const fetchCryptoCurrencies = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoCurrencies\");\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setCryptoCurrncies(result);\n            setTargetCurrencyList(result[0].supportedCurrencies);\n            setSelectedCryptoCurrncy(result[0].symbol);\n            const postData = {\n                cryptoSymbol: result[0].symbol,\n                fiatCurrency: result[0].supportedCurrencies[0],\n                amount: amount\n            };\n            fetchConvertedAmountValue(postData);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading please wait...\"\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleCryptoCurrencyChange = (value)=>{\n        const supportedCurrenciesList = cryptoCurrncies.filter((item)=>item.symbol === value);\n        setSelectedCryptoCurrncy(value);\n        setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);\n        const postData = {\n            cryptoSymbol: value,\n            fiatCurrency: supportedCurrenciesList[0].supportedCurrencies[0],\n            amount: Number(sanitizedValue)\n        };\n        fetchConvertedAmountValue(postData);\n    };\n    const handleAmountChange = (value)=>{\n        if (/^\\d+$/.test(value) || value === \"\") {\n            const sanitizedValue1 = value.replace(/^0+/, \"\");\n            setAmount(Number(sanitizedValue1));\n            const postData = {\n                cryptoSymbol: selectedCryptoCurrncy,\n                fiatCurrency: targetCurrencyList[0],\n                amount: Number(sanitizedValue1)\n            };\n            fetchConvertedAmountValue(postData);\n        }\n    };\n    const fetchConvertedAmountValue = async (postData)=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/api/getCryptoConverterAmount\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(postData)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setConvertedAmount(result);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: amount,\n                            onChange: handleAmountChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: cryptoCurrncies,\n                            onSelect: handleCryptoCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: convertedAmount,\n                            disabled: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_currencySelectBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: targetCurrencyList\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConverterForm, \"QYxo4z/KJLavhoVfjAThxw6U46o=\");\n_c = ConverterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConverterForm);\nvar _c;\n$RefreshReg$(_c, \"ConverterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNNO0FBQ2dCO0FBQzFCO0FBQ2M7QUFDdEI7QUFFOUIsTUFBTVEsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLHVCQUF1QkMseUJBQXlCLEdBQUdWLCtDQUFRQTtJQUNsRSxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDekQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2Usb0JBQW9CQyxzQkFBc0IsR0FBR2hCLCtDQUFRQTtJQUM1RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNxQixpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ1JzQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLHdCQUF3QjtRQUM1QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtZQUVGLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCSCxTQUFTSSxNQUFNO1lBQ3hEO1lBQ0EsTUFBTUMsU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1lBQ2xDbEIsbUJBQW1CaUI7WUFDbkJiLHNCQUFzQmEsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CO1lBQ25EckIseUJBQXlCbUIsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csTUFBTTtZQUN6QyxNQUFNQyxXQUFXO2dCQUNmQyxjQUFjTCxNQUFNLENBQUMsRUFBRSxDQUFDRyxNQUFNO2dCQUM5QkcsY0FBY04sTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CLENBQUMsRUFBRTtnQkFDOUNsQixRQUFRQTtZQUNWO1lBQ0F1QiwwQkFBMEJIO1FBQzVCLEVBQUUsT0FBT2QsT0FBTztZQUNkQyxTQUFTRCxNQUFNa0IsT0FBTztRQUN4QixTQUFVO1lBQ1JuQixXQUFXO1FBQ2I7SUFDRjtJQUVBLElBQUlELFNBQVM7UUFDWCxxQkFBTyw4REFBQ3FCO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLE1BQU1DLDZCQUE2QixDQUFDQztRQUNsQyxNQUFNQywwQkFBMEI5QixnQkFBZ0IrQixNQUFNLENBQ3BELENBQUNDLE9BQVNBLEtBQUtYLE1BQU0sS0FBS1E7UUFFNUI5Qix5QkFBeUI4QjtRQUN6QnhCLHNCQUFzQnlCLHVCQUF1QixDQUFDLEVBQUUsQ0FBQ1YsbUJBQW1CO1FBRXBFLE1BQU1FLFdBQVc7WUFDYkMsY0FBY007WUFDZEwsY0FBY00sdUJBQXVCLENBQUMsRUFBRSxDQUFDVixtQkFBbUIsQ0FBQyxFQUFFO1lBQy9EbEIsUUFBUStCLE9BQU9DO1FBQ2pCO1FBQ0FULDBCQUEwQkg7SUFDOUI7SUFFQSxNQUFNYSxxQkFBcUIsQ0FBQ047UUFDMUIsSUFBSSxRQUFRTyxJQUFJLENBQUNQLFVBQVVBLFVBQVUsSUFBSTtZQUN2QyxNQUFNSyxrQkFBaUJMLE1BQU1RLE9BQU8sQ0FBQyxPQUFPO1lBQzVDbEMsVUFBVThCLE9BQU9DO1lBQ2pCLE1BQU1aLFdBQVc7Z0JBQ2ZDLGNBQWN6QjtnQkFDZDBCLGNBQWNwQixrQkFBa0IsQ0FBQyxFQUFFO2dCQUNuQ0YsUUFBUStCLE9BQU9DO1lBQ2pCO1lBQ0FULDBCQUEwQkg7UUFDNUI7SUFDRjtJQUVBLE1BQU1HLDRCQUE0QixPQUFPSDtRQUN2QyxJQUFJO1lBQ0YsTUFBTVQsV0FBVyxNQUFNQyxNQUNyQixzREFDQTtnQkFDRXdCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDcEI7WUFDdkI7WUFHRixJQUFJLENBQUNULFNBQVNFLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkgsU0FBU0ksTUFBTTtZQUN4RDtZQUVBLE1BQU1DLFNBQVMsTUFBTUwsU0FBU00sSUFBSTtZQUNsQ1IsbUJBQW1CTztRQUNyQixFQUFFLE9BQU9WLE9BQU87WUFDZEMsU0FBU0QsTUFBTWtCLE9BQU87UUFDeEIsU0FBVTtZQUNSbkIsV0FBVztRQUNiO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ29DOzswQkFDQyw4REFBQ3BELHFEQUFZQTswQkFDWCw0RUFBQ3FEO29CQUFJQyxXQUFXckQsaUZBQXdCOztzQ0FDdEMsOERBQUNFLG1EQUFVQTs0QkFBQ21DLE9BQU8zQjs0QkFBUTRDLFVBQVVYOzs7Ozs7c0NBQ3JDLDhEQUFDMUMsZ0VBQXVCQTs0QkFDdEJzRCxNQUFNL0M7NEJBQ05nRCxVQUFVcEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ3JDLHFEQUFZQTswQkFDWCw0RUFBQ3FEO29CQUFJQyxXQUFXckQsaUZBQXdCOztzQ0FDdEMsOERBQUNFLG1EQUFVQTs0QkFBQ21DLE9BQU9uQjs0QkFBaUJ1QyxRQUFROzs7Ozs7c0NBQzVDLDhEQUFDdEQsMERBQWlCQTs0QkFBQ29ELE1BQU0zQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7R0F0SE1QO0tBQUFBO0FBd0hOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzPzI3YWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRXcmFwcGVyIGZyb20gXCIuL0lucHV0V3JhcHBlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db252ZXJ0ZXJGb3JtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDcnlwdG9DdXJyZW5jeVNlbGVjdEJveCBmcm9tIFwiLi9DcnlwdG9DdXJyZW5jeVNlbGVjdEJveFwiO1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSBcIi4vSW5wdXRGaWVsZFwiO1xuaW1wb3J0IEN1cnJlbmN5U2VsZWN0Qm94IGZyb20gXCIuL2N1cnJlbmN5U2VsZWN0Qm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5jb25zdCBDb252ZXJ0ZXJGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDcnlwdG9DdXJybmN5LCBzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3ldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NyeXB0b0N1cnJuY2llcywgc2V0Q3J5cHRvQ3Vycm5jaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdGFyZ2V0Q3VycmVuY3lMaXN0LCBzZXRUYXJnZXRDdXJyZW5jeUxpc3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udmVydGVkQW1vdW50LCBzZXRDb252ZXJ0ZWRBbW91bnRdID0gdXNlU3RhdGUoMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENyeXB0b0N1cnJlbmNpZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoQ3J5cHRvQ3VycmVuY2llcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2dldENyeXB0b0N1cnJlbmNpZXNcIlxuICAgICAgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q3J5cHRvQ3Vycm5jaWVzKHJlc3VsdCk7XG4gICAgICBzZXRUYXJnZXRDdXJyZW5jeUxpc3QocmVzdWx0WzBdLnN1cHBvcnRlZEN1cnJlbmNpZXMpO1xuICAgICAgc2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5KHJlc3VsdFswXS5zeW1ib2wpO1xuICAgICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICAgIGNyeXB0b1N5bWJvbDogcmVzdWx0WzBdLnN5bWJvbCxcbiAgICAgICAgZmlhdEN1cnJlbmN5OiByZXN1bHRbMF0uc3VwcG9ydGVkQ3VycmVuY2llc1swXSxcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICB9O1xuICAgICAgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZShwb3N0RGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+bG9hZGluZyBwbGVhc2Ugd2FpdC4uLjwvcD47XG4gIH1cblxuICBjb25zdCBoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHN1cHBvcnRlZEN1cnJlbmNpZXNMaXN0ID0gY3J5cHRvQ3Vycm5jaWVzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLnN5bWJvbCA9PT0gdmFsdWVcbiAgICApO1xuICAgIHNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSh2YWx1ZSk7XG4gICAgc2V0VGFyZ2V0Q3VycmVuY3lMaXN0KHN1cHBvcnRlZEN1cnJlbmNpZXNMaXN0WzBdLnN1cHBvcnRlZEN1cnJlbmNpZXMpO1xuXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XG4gICAgICAgIGNyeXB0b1N5bWJvbDogdmFsdWUsXG4gICAgICAgIGZpYXRDdXJyZW5jeTogc3VwcG9ydGVkQ3VycmVuY2llc0xpc3RbMF0uc3VwcG9ydGVkQ3VycmVuY2llc1swXSxcbiAgICAgICAgYW1vdW50OiBOdW1iZXIoc2FuaXRpemVkVmFsdWUpLFxuICAgICAgfTtcbiAgICAgIGZldGNoQ29udmVydGVkQW1vdW50VmFsdWUocG9zdERhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgY29uc3Qgc2FuaXRpemVkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eMCsvLCBcIlwiKTtcbiAgICAgIHNldEFtb3VudChOdW1iZXIoc2FuaXRpemVkVmFsdWUpKTtcbiAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xuICAgICAgICBjcnlwdG9TeW1ib2w6IHNlbGVjdGVkQ3J5cHRvQ3Vycm5jeSxcbiAgICAgICAgZmlhdEN1cnJlbmN5OiB0YXJnZXRDdXJyZW5jeUxpc3RbMF0sXG4gICAgICAgIGFtb3VudDogTnVtYmVyKHNhbml0aXplZFZhbHVlKSxcbiAgICAgIH07XG4gICAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZSA9IGFzeW5jIChwb3N0RGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZ2V0Q3J5cHRvQ29udmVydGVyQW1vdW50XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q29udmVydGVkQW1vdW50KHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWVsZENvbnRhaW5lclwiXX0+XG4gICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gLz5cbiAgICAgICAgICA8Q3J5cHRvQ3VycmVuY3lTZWxlY3RCb3hcbiAgICAgICAgICAgIGRhdGE9e2NyeXB0b0N1cnJuY2llc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW5wdXRXcmFwcGVyPlxuXG4gICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmllbGRDb250YWluZXJcIl19PlxuICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtjb252ZXJ0ZWRBbW91bnR9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPEN1cnJlbmN5U2VsZWN0Qm94IGRhdGE9e3RhcmdldEN1cnJlbmN5TGlzdH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0lucHV0V3JhcHBlcj5cblxuICAgICAgey8qIDxCdXR0b24+Q29udmVydCBDdXJyZW5jeTwvQnV0dG9uPiAqL31cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0ZXJGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRXcmFwcGVyIiwic3R5bGVzIiwiQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3giLCJJbnB1dEZpZWxkIiwiQ3VycmVuY3lTZWxlY3RCb3giLCJCdXR0b24iLCJDb252ZXJ0ZXJGb3JtIiwic2VsZWN0ZWRDcnlwdG9DdXJybmN5Iiwic2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5IiwiY3J5cHRvQ3Vycm5jaWVzIiwic2V0Q3J5cHRvQ3Vycm5jaWVzIiwiYW1vdW50Iiwic2V0QW1vdW50IiwidGFyZ2V0Q3VycmVuY3lMaXN0Iiwic2V0VGFyZ2V0Q3VycmVuY3lMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY29udmVydGVkQW1vdW50Iiwic2V0Q29udmVydGVkQW1vdW50IiwiZmV0Y2hDcnlwdG9DdXJyZW5jaWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJyZXN1bHQiLCJqc29uIiwic3VwcG9ydGVkQ3VycmVuY2llcyIsInN5bWJvbCIsInBvc3REYXRhIiwiY3J5cHRvU3ltYm9sIiwiZmlhdEN1cnJlbmN5IiwiZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZSIsIm1lc3NhZ2UiLCJwIiwiaGFuZGxlQ3J5cHRvQ3VycmVuY3lDaGFuZ2UiLCJ2YWx1ZSIsInN1cHBvcnRlZEN1cnJlbmNpZXNMaXN0IiwiZmlsdGVyIiwiaXRlbSIsIk51bWJlciIsInNhbml0aXplZFZhbHVlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwidGVzdCIsInJlcGxhY2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJkYXRhIiwib25TZWxlY3QiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ConverterForm.js\n"));

/***/ })

});