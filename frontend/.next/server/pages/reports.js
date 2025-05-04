"use strict";
(() => {
var exports = {};
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 1429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ fetchStrapiData)
/* harmony export */ });
const BASE_URL = "http://127.0.0.1:1337/api";
const API_TOKEN = process.env.STRAPI_API_TOKEN;
async function fetchStrapiData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      // Explicitly set method (optional, GET is default)
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        // Include JWT token
        "Content-Type": "application/json" // Optional, Strapi usually handles this

      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    return [];
  }
}

/***/ }),

/***/ 1762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_clientSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4788);
/* harmony import */ var _element_blog_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4025);
/* harmony import */ var _element_counter2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9740);
/* harmony import */ var _element_pageaboutsus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6694);
/* harmony import */ var _layout_header_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8423);
/* harmony import */ var _layout_footer_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9070);
/* harmony import */ var _element_testimonial_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7380);
/* harmony import */ var _element_our_features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(199);
/* harmony import */ var _element_our_features_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8940);
/* harmony import */ var _element_aboutUs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6021);
/* harmony import */ var _element_aboutUs_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6082);
/* harmony import */ var _element_cbos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4251);
/* harmony import */ var _element_all_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3937);
/* harmony import */ var _element_all_services_3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3400);
/* harmony import */ var _lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1429);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_element_blog_2__WEBPACK_IMPORTED_MODULE_4__]);
_element_blog_2__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











 // import OurFeatures2 from "../element/our-features-2"











function Reports({
  reports
}) {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // const [reports, setReports] = useState(null);
  //    useEffect(()=>{
  //      const fetchReport  = async () => {
  //     const response = await fetch("http://localhost:1337/api/reports?populate=*");
  //     const data = await response.json();
  //     setReports(data.data)
  //      }
  //      fetchReport();
  //   },[])

  console.log("reports", reports);

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || "report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_layout_header_3__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
        className: "dlab-bnr-inr style-2 overlay-gradient-dark",
        style: {
          backgroundImage: "url(images/cover.jpg)"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
            className: "dlab-bnr-inr-entry",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("h1", {
              children: "Reports"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("nav", {
              "aria-label": "breadcrumb",
              className: "breadcrumb-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("ul", {
                className: "breadcrumb",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("li", {
                  className: "breadcrumb-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    href: "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("a", {
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("li", {
                  className: "breadcrumb-item active",
                  "aria-current": "page",
                  children: "Reports"
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("section", {
        className: "content-inner-2 wow m-5 fadeIn",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("table", {
            class: "table table-bordered",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                  scope: "col",
                  className: "text-center",
                  children: "Document Name"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                  scope: "col",
                  className: "text-center",
                  children: "Year of Publication"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("th", {
                  scope: "col",
                  className: "text-center",
                  children: "Download"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("tbody", {
              children: reports === null || reports === void 0 ? void 0 : reports.map(report => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                  className: "text-center",
                  children: report === null || report === void 0 ? void 0 : report.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                  className: "text-center",
                  children: report === null || report === void 0 ? void 0 : report.period
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("td", {
                  className: "d-flex align-items-center justify-content-center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("a", {
                    href: report.reportFile.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-decoration-none",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx("button", {
                      type: "button",
                      class: "btn btn-dark",
                      children: "Download"
                    })
                  })
                })]
              }))
            })]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx(_layout_footer_2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})]
  });
}

async function getServerSideProps() {
  const reports = await (0,_lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_17__/* .fetchStrapiData */ .p)("reports?populate=*");
  return {
    props: {
      reports
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reports);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 3702:
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 6882:
/***/ ((module) => {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,4365,8423,8139,9941,4025,9740,3339,1889], () => (__webpack_exec__(1762)));
module.exports = __webpack_exports__;

})();