"use strict";
exports.id = 8139;
exports.ids = [8139];
exports.modules = {

/***/ 8139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ UpdateContext),
/* harmony export */   "K": () => (/* binding */ UpdateContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";





const UpdateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(); // Corrected context name

const UpdateContextProvider = ({
  children
}) => {
  const {
    0: blogData,
    1: setBlogData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchData = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://admin.aasthaparivaar.org"}/api/blogs?populate=*`, {
          headers: {
            Authorization: `Bearer ${"2821537d1919554325c5bad057bdc040a81d2a8dd48037916cb21b4f2e592c91ee20731fb9e036115dbfaf5b8e3d0f2a2fc672cd5bb377738bddd426bbcb087130d2d803bfda5c7a584c8201a9a501367b01367808e4b62927c4c8eb67ddfeb01b29edc96bf5e076ae4fe0cf8655e5fea754338b64ba170020f2c0ee1fd310ee"}`
          }
        });
        setBlogData(response.data.data); // Strapi v4+ format
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Removed setBlogData from deps (stable setter)

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(UpdateContext.Provider, {
    value: {
      blogData,
      setBlogData
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;