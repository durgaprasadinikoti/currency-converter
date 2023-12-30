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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrapper */ \"(app-pages-browser)/./src/app/components/InputWrapper.js\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ConverterForm.module.css */ \"(app-pages-browser)/./src/app/components/ConverterForm.module.css\");\n/* harmony import */ var _ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CryptoCurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CryptoCurrencySelectBox.js\");\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ \"(app-pages-browser)/./src/app/components/InputField.js\");\n/* harmony import */ var _CurrencySelectBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CurrencySelectBox */ \"(app-pages-browser)/./src/app/components/CurrencySelectBox.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./src/app/components/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ConverterForm = ()=>{\n    _s();\n    const vercelToken = \"prj_6w4DCMGn5lreKD7ewDb78WwAA4vY\";\n    const [selectedCryptoCurrncy, setSelectedCryptoCurrncy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [cryptoCurrncies, setCryptoCurrncies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [targetCurrencyList, setTargetCurrencyList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [convertedAmount, setConvertedAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCryptoCurrencies();\n    }, []);\n    const fetchCryptoCurrencies = async ()=>{\n        try {\n            const response = await fetch(\"https://currency-converter-backend-eight.vercel.app/api/getCryptoCurrencies\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \" + vercelToken\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setCryptoCurrncies(result);\n            setTargetCurrencyList(result[0].supportedCurrencies);\n            setSelectedCryptoCurrncy(result[0].symbol);\n            const postData = {\n                cryptoSymbol: result[0].symbol,\n                fiatCurrency: result[0].supportedCurrencies[0],\n                amount: amount\n            };\n            fetchConvertedAmountValue(postData);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading please wait...\"\n        }, void 0, false, {\n            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n            lineNumber: 57,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleCryptoCurrencyChange = (value)=>{\n        const supportedCurrenciesList = cryptoCurrncies.filter((item)=>item.symbol === value);\n        setSelectedCryptoCurrncy(value);\n        setTargetCurrencyList(supportedCurrenciesList[0].supportedCurrencies);\n        const postData = {\n            cryptoSymbol: value,\n            fiatCurrency: supportedCurrenciesList[0].supportedCurrencies[0],\n            amount: Number(amount)\n        };\n        fetchConvertedAmountValue(postData);\n    };\n    const handleCurrencyChange = (value)=>{\n        const postData = {\n            cryptoSymbol: selectedCryptoCurrncy,\n            fiatCurrency: value,\n            amount: Number(amount)\n        };\n        fetchConvertedAmountValue(postData);\n    };\n    const handleAmountChange = (value)=>{\n        if (/^\\d+$/.test(value) || value === \"\") {\n            const sanitizedValue = value.replace(/^0+/, \"\");\n            setAmount(Number(sanitizedValue));\n            const postData = {\n                cryptoSymbol: selectedCryptoCurrncy,\n                fiatCurrency: targetCurrencyList[0],\n                amount: Number(sanitizedValue)\n            };\n            fetchConvertedAmountValue(postData);\n        }\n    };\n    const fetchConvertedAmountValue = async (postData)=>{\n        try {\n            const response = await fetch(\"https://currency-converter-backend-5bdif1032.vercel.app/api/getCryptoConverterAmount\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \" + vercelToken\n                },\n                body: JSON.stringify(postData)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const result = await response.json();\n            setConvertedAmount(result);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: amount,\n                            onChange: handleAmountChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CryptoCurrencySelectBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            data: cryptoCurrncies,\n                            onSelect: handleCryptoCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ConverterForm_module_css__WEBPACK_IMPORTED_MODULE_7___default().fieldContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: convertedAmount,\n                            disabled: true\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CurrencySelectBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            data: targetCurrencyList,\n                            onSelect: handleCurrencyChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rangakomarthi/sites/DP/currency-converter/src/app/components/ConverterForm.js\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConverterForm, \"QYxo4z/KJLavhoVfjAThxw6U46o=\");\n_c = ConverterForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConverterForm);\nvar _c;\n$RefreshReg$(_c, \"ConverterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db252ZXJ0ZXJGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDRjtBQUNNO0FBQ2dCO0FBQzFCO0FBQ2M7QUFDdEI7QUFFOUIsTUFBTVEsZ0JBQWdCOztJQUNwQixNQUFNQyxjQUFjO0lBQ3BCLE1BQU0sQ0FBQ0MsdUJBQXVCQyx5QkFBeUIsR0FBR1gsK0NBQVFBO0lBQ2xFLE1BQU0sQ0FBQ1ksaUJBQWlCQyxtQkFBbUIsR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUN6RCxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDZ0Isb0JBQW9CQyxzQkFBc0IsR0FBR2pCLCtDQUFRQTtJQUM1RCxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNzQixpQkFBaUJDLG1CQUFtQixHQUFHdkIsK0NBQVFBLENBQUM7SUFFdkRDLGdEQUFTQSxDQUFDO1FBQ1J1QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLHdCQUF3QjtRQUM1QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiwrRUFDQTtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7b0JBQ2hCQyxlQUFlLFlBQVlwQjtnQkFDN0I7WUFDRjtZQUVGLElBQUksQ0FBQ2dCLFNBQVNLLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQk4sU0FBU08sTUFBTTtZQUN4RDtZQUNBLE1BQU1DLFNBQVMsTUFBTVIsU0FBU1MsSUFBSTtZQUNsQ3JCLG1CQUFtQm9CO1lBQ25CaEIsc0JBQXNCZ0IsTUFBTSxDQUFDLEVBQUUsQ0FBQ0UsbUJBQW1CO1lBQ25EeEIseUJBQXlCc0IsTUFBTSxD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bXBvbmVudHMvQ29udmVydGVyRm9ybS5qcz8yN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0V3JhcHBlciBmcm9tIFwiLi9JbnB1dFdyYXBwZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udmVydGVyRm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3ggZnJvbSBcIi4vQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3hcIjtcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuL0lucHV0RmllbGRcIjtcbmltcG9ydCBDdXJyZW5jeVNlbGVjdEJveCBmcm9tIFwiLi9DdXJyZW5jeVNlbGVjdEJveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ29udmVydGVyRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdmVyY2VsVG9rZW4gPSBcInByal82dzREQ01HbjVscmVLRDdld0RiNzhXd0FBNHZZXCI7XG4gIGNvbnN0IFtzZWxlY3RlZENyeXB0b0N1cnJuY3ksIHNldFNlbGVjdGVkQ3J5cHRvQ3Vycm5jeV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY3J5cHRvQ3Vycm5jaWVzLCBzZXRDcnlwdG9DdXJybmNpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFt0YXJnZXRDdXJyZW5jeUxpc3QsIHNldFRhcmdldEN1cnJlbmN5TGlzdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb252ZXJ0ZWRBbW91bnQsIHNldENvbnZlcnRlZEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ3J5cHRvQ3VycmVuY2llcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hDcnlwdG9DdXJyZW5jaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vY3VycmVuY3ktY29udmVydGVyLWJhY2tlbmQtZWlnaHQudmVyY2VsLmFwcC9hcGkvZ2V0Q3J5cHRvQ3VycmVuY2llc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB2ZXJjZWxUb2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRDcnlwdG9DdXJybmNpZXMocmVzdWx0KTtcbiAgICAgIHNldFRhcmdldEN1cnJlbmN5TGlzdChyZXN1bHRbMF0uc3VwcG9ydGVkQ3VycmVuY2llcyk7XG4gICAgICBzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3kocmVzdWx0WzBdLnN5bWJvbCk7XG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgICAgY3J5cHRvU3ltYm9sOiByZXN1bHRbMF0uc3ltYm9sLFxuICAgICAgICBmaWF0Q3VycmVuY3k6IHJlc3VsdFswXS5zdXBwb3J0ZWRDdXJyZW5jaWVzWzBdLFxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgIH07XG4gICAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5sb2FkaW5nIHBsZWFzZSB3YWl0Li4uPC9wPjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNyeXB0b0N1cnJlbmN5Q2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9ydGVkQ3VycmVuY2llc0xpc3QgPSBjcnlwdG9DdXJybmNpZXMuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+IGl0ZW0uc3ltYm9sID09PSB2YWx1ZVxuICAgICk7XG4gICAgc2V0U2VsZWN0ZWRDcnlwdG9DdXJybmN5KHZhbHVlKTtcbiAgICBzZXRUYXJnZXRDdXJyZW5jeUxpc3Qoc3VwcG9ydGVkQ3VycmVuY2llc0xpc3RbMF0uc3VwcG9ydGVkQ3VycmVuY2llcyk7XG5cbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgIGNyeXB0b1N5bWJvbDogdmFsdWUsXG4gICAgICBmaWF0Q3VycmVuY3k6IHN1cHBvcnRlZEN1cnJlbmNpZXNMaXN0WzBdLnN1cHBvcnRlZEN1cnJlbmNpZXNbMF0sXG4gICAgICBhbW91bnQ6IE51bWJlcihhbW91bnQpLFxuICAgIH07XG4gICAgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZShwb3N0RGF0YSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3VycmVuY3lDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgIGNyeXB0b1N5bWJvbDogc2VsZWN0ZWRDcnlwdG9DdXJybmN5LFxuICAgICAgZmlhdEN1cnJlbmN5OiB2YWx1ZSxcbiAgICAgIGFtb3VudDogTnVtYmVyKGFtb3VudCksXG4gICAgfTtcbiAgICBmZXRjaENvbnZlcnRlZEFtb3VudFZhbHVlKHBvc3REYXRhKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjArLywgXCJcIik7XG4gICAgICBzZXRBbW91bnQoTnVtYmVyKHNhbml0aXplZFZhbHVlKSk7XG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHtcbiAgICAgICAgY3J5cHRvU3ltYm9sOiBzZWxlY3RlZENyeXB0b0N1cnJuY3ksXG4gICAgICAgIGZpYXRDdXJyZW5jeTogdGFyZ2V0Q3VycmVuY3lMaXN0WzBdLFxuICAgICAgICBhbW91bnQ6IE51bWJlcihzYW5pdGl6ZWRWYWx1ZSksXG4gICAgICB9O1xuICAgICAgZmV0Y2hDb252ZXJ0ZWRBbW91bnRWYWx1ZShwb3N0RGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoQ29udmVydGVkQW1vdW50VmFsdWUgPSBhc3luYyAocG9zdERhdGEpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2N1cnJlbmN5LWNvbnZlcnRlci1iYWNrZW5kLTViZGlmMTAzMi52ZXJjZWwuYXBwL2FwaS9nZXRDcnlwdG9Db252ZXJ0ZXJBbW91bnRcIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHZlcmNlbFRva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q29udmVydGVkQW1vdW50KHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWVsZENvbnRhaW5lclwiXX0+XG4gICAgICAgICAgPElucHV0RmllbGQgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gLz5cbiAgICAgICAgICA8Q3J5cHRvQ3VycmVuY3lTZWxlY3RCb3hcbiAgICAgICAgICAgIGRhdGE9e2NyeXB0b0N1cnJuY2llc31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVDcnlwdG9DdXJyZW5jeUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW5wdXRXcmFwcGVyPlxuXG4gICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmllbGRDb250YWluZXJcIl19PlxuICAgICAgICAgIDxJbnB1dEZpZWxkIHZhbHVlPXtjb252ZXJ0ZWRBbW91bnR9IGRpc2FibGVkIC8+XG4gICAgICAgICAgPEN1cnJlbmN5U2VsZWN0Qm94XG4gICAgICAgICAgICBkYXRhPXt0YXJnZXRDdXJyZW5jeUxpc3R9XG4gICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlQ3VycmVuY3lDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0lucHV0V3JhcHBlcj5cblxuICAgICAgey8qIDxCdXR0b24+Q29udmVydCBDdXJyZW5jeTwvQnV0dG9uPiAqL31cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJ0ZXJGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRXcmFwcGVyIiwic3R5bGVzIiwiQ3J5cHRvQ3VycmVuY3lTZWxlY3RCb3giLCJJbnB1dEZpZWxkIiwiQ3VycmVuY3lTZWxlY3RCb3giLCJCdXR0b24iLCJDb252ZXJ0ZXJGb3JtIiwidmVyY2VsVG9rZW4iLCJzZWxlY3RlZENyeXB0b0N1cnJuY3kiLCJzZXRTZWxlY3RlZENyeXB0b0N1cnJuY3kiLCJjcnlwdG9DdXJybmNpZXMiLCJzZXRDcnlwdG9DdXJybmNpZXMiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJ0YXJnZXRDdXJyZW5jeUxpc3QiLCJzZXRUYXJnZXRDdXJyZW5jeUxpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjb252ZXJ0ZWRBbW91bnQiLCJzZXRDb252ZXJ0ZWRBbW91bnQiLCJmZXRjaENyeXB0b0N1cnJlbmNpZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwicmVzdWx0IiwianNvbiIsInN1cHBvcnRlZEN1cnJlbmNpZXMiLCJzeW1ib2wiLCJwb3N0RGF0YSIsImNyeXB0b1N5bWJvbCIsImZpYXRDdXJyZW5jeSIsImZldGNoQ29udmVydGVkQW1vdW50VmFsdWUiLCJtZXNzYWdlIiwicCIsImhhbmRsZUNyeXB0b0N1cnJlbmN5Q2hhbmdlIiwidmFsdWUiLCJzdXBwb3J0ZWRDdXJyZW5jaWVzTGlzdCIsImZpbHRlciIsIml0ZW0iLCJOdW1iZXIiLCJoYW5kbGVDdXJyZW5jeUNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsInRlc3QiLCJzYW5pdGl6ZWRWYWx1ZSIsInJlcGxhY2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImRhdGEiLCJvblNlbGVjdCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ConverterForm.js\n"));

/***/ })

});