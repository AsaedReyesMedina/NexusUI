"use strict";
(globalThis["chunk_NexusUI"] = globalThis["chunk_NexusUI"] || []).push([["__federation_expose_default_export"], {
"./src/index.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1749791549691
        var cssReload = (__webpack_require__("./node_modules/.pnpm/@rspack+core@1.3.15_@swc+helpers@0.5.17/node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./src/index.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react?4c99");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/index.css");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/.pnpm/@rspack+plugin-react-refresh@1.4.3_react-refresh@0.17.0/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const Provider = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-container",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "https://module-federation.io/svg.svg",
                    alt: "logo",
                    className: "logo-image"
                }, void 0, false, {
                    fileName: "/Users/asaedreyesmedina/Documents/proyects/NexusUI/src/index.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/asaedreyesmedina/Documents/proyects/NexusUI/src/index.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "title",
                children: "Hello Module Federation 2.0"
            }, void 0, false, {
                fileName: "/Users/asaedreyesmedina/Documents/proyects/NexusUI/src/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/asaedreyesmedina/Documents/proyects/NexusUI/src/index.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, undefined);
};
_c = Provider;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);
var _c;
$RefreshReg$(_c, "Provider");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

}]);
//# sourceMappingURL=__federation_expose_default_export.js.map