"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
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

/***/ 2388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3732);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_header_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8423);
/* harmony import */ var _layout_footer_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9070);
/* harmony import */ var _lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1429);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);














function Gallery({
  pics
}) {
  const options = {
    buttons: {
      backgroundColor: '#1C7293',
      iconColor: '#e8eddf',
      iconPadding: '7px'
    },
    caption: {
      captionColor: '#e8eddf',
      captionFontSize: '22px'
    },
    thumbnails: {
      thumbnailsOpacity: 1
    },
    settings: {
      overlayColor: 'rgba(6, 90, 130, 0.9)',
      showThumbnails: false,
      // Hide thumbnails by default
      transitionSpeed: 500,
      hideControlsAfter: false
    },
    progressBar: {
      height: '3px',
      fillColor: '#e8eddf',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_layout_header_3__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "dlab-bnr-inr style-2 overlay-gradient-dark",
        style: {
          backgroundImage: "url(images/cover.jpg)"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "dlab-bnr-inr-entry",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
              children: "Gallery"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("nav", {
              "aria-label": "breadcrumb",
              className: "breadcrumb-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
                className: "breadcrumb",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                  className: "breadcrumb-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                  className: "breadcrumb-item active",
                  "aria-current": "page",
                  children: "Gallery"
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("section", {
        className: "content-inner-2 wow m-5 fadeIn",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((simple_react_lightbox__WEBPACK_IMPORTED_MODULE_4___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_4__.SRLWrapper, {
              options: options,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "clearfix",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
                  id: "masonry",
                  className: "row",
                  "data-column-width": "3",
                  children: pics === null || pics === void 0 ? void 0 : pics.map((pic, index) => {
                    var _pic$image, _pic$image$formats, _pic$image$formats$la, _pic$image2, _pic$image2$formats, _pic$image2$formats$s;

                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                      className: "card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp",
                      "data-wow-duration": "2s",
                      "data-wow-delay": "0.1s",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                        className: "dlab-box style-2 m-b30",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                          className: "dlab-media",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                            href: pic === null || pic === void 0 ? void 0 : (_pic$image = pic.image) === null || _pic$image === void 0 ? void 0 : (_pic$image$formats = _pic$image.formats) === null || _pic$image$formats === void 0 ? void 0 : (_pic$image$formats$la = _pic$image$formats.large) === null || _pic$image$formats$la === void 0 ? void 0 : _pic$image$formats$la.url,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                              src: pic === null || pic === void 0 ? void 0 : (_pic$image2 = pic.image) === null || _pic$image2 === void 0 ? void 0 : (_pic$image2$formats = _pic$image2.formats) === null || _pic$image2$formats === void 0 ? void 0 : (_pic$image2$formats$s = _pic$image2$formats.small) === null || _pic$image2$formats$s === void 0 ? void 0 : _pic$image2$formats$s.url,
                              layout: "responsive",
                              width: 320,
                              height: 320,
                              alt: "galleryImage"
                            })
                          })
                        })
                      })
                    }, index);
                  })
                })
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_layout_footer_2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
  });
}

async function getServerSideProps() {
  const pics = await (0,_lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_7__/* .fetchStrapiData */ .p)("galleries?populate=*");
  return {
    props: {
      pics
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3732:
/***/ ((module) => {

module.exports = require("simple-react-lightbox");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,5675,4365,8423], () => (__webpack_exec__(2388)));
module.exports = __webpack_exports__;

})();