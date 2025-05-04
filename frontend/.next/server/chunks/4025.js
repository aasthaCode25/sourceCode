"use strict";
exports.id = 4025;
exports.ids = [4025];
exports.modules = {

/***/ 5821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_updatedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3702);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_updatedata__WEBPACK_IMPORTED_MODULE_2__]);
_context_updatedata__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function BlogSlider2() {
  const {
    blogData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_updatedata__WEBPACK_IMPORTED_MODULE_2__/* .UpdateContext */ .o);
  const fallbackImage = "/images/children.jpg";
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    // 2 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 600,
      // Below 600px (mobile)
      settings: {
        slidesToShow: 1,
        // 1 slide on mobile
        slidesToScroll: 1
      }
    }]
  };

  if (!blogData || blogData.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      style: {
        color: "#6c757d"
      },
      children: "Loading blog posts..."
    });
  }

  function limitWordsMarkdown(markdownText, wordLimit) {
    if (!markdownText) return "";
    const words = markdownText.split(/\s+/);
    if (words.length <= wordLimit) return markdownText;
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  const wordLimit = 30;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: "container",
    style: {
      overflow: "hidden"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
      style: {
        maxWidth: "100%",
        // Ensure slider stays within container
        overflow: "hidden",
        // Prevent slider overflow
        padding: "0 10px" // Controlled spacing

      },
      children: blogData === null || blogData === void 0 ? void 0 : blogData.map(({
        titile,
        section1,
        publishDate,
        intro,
        documentId,
        image1
      }) => {
        var _image1$formats, _image1$formats$small, _image1$formats2, _image1$formats2$thum;

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          style: {
            padding: "0 10px",
            // Spacing between items
            maxWidth: "100%" // Ensure item fits slide

          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            href: `/ourstories/${documentId}`,
            style: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              style: {
                marginBottom: "10px",
                backgroundColor: "#f8f9fa",
                overflow: "hidden",
                // Prevent overflow
                maxWidth: "100%" // Constrain to slide width

              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  borderRadius: "8px",
                  overflow: "hidden"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                  src: (image1 === null || image1 === void 0 ? void 0 : (_image1$formats = image1.formats) === null || _image1$formats === void 0 ? void 0 : (_image1$formats$small = _image1$formats.small) === null || _image1$formats$small === void 0 ? void 0 : _image1$formats$small.url) || (image1 === null || image1 === void 0 ? void 0 : (_image1$formats2 = image1.formats) === null || _image1$formats2 === void 0 ? void 0 : (_image1$formats2$thum = _image1$formats2.thumbnail) === null || _image1$formats2$thum === void 0 ? void 0 : _image1$formats2$thum.url) || fallbackImage,
                  alt: "",
                  style: {
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  padding: "8px",
                  backgroundColor: "#f8f9fa",
                  borderBottomLeftRadius: "20px",
                  borderBottomRightRadius: "20px"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  style: {
                    marginBottom: "10px"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
                    style: {
                      listStyle: "none",
                      padding: 0,
                      margin: 0
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                      style: {
                        display: "inline"
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("strong", {
                          children: "Posted: "
                        }), publishDate]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
                  style: {
                    fontSize: "clamp(16px, 4vw, 24px)",
                    // Responsive title
                    marginBottom: "10px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#000"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    href: `/ourstories/${documentId}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      style: {
                        textDecoration: "none",
                        color: "inherit"
                      },
                      children: titile
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  style: {
                    fontSize: "clamp(14px, 3vw, 16px)",
                    // Responsive text
                    marginBottom: "20px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    color: "#333",
                    padding: "0 5px" // Prevent text from hitting edges

                  },
                  children: limitWordsMarkdown(intro, wordLimit)
                })]
              })]
            })
          })
        }, documentId);
      })
    }))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSlider2);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_blogSlider_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5821);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_blogSlider_2__WEBPACK_IMPORTED_MODULE_0__]);
_component_blogSlider_2__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Blog2() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg16.png)",
        "backgroundSize": "cover",
        "backgroundPosition": "top center",
        "backgroundRepeat": "no-repeat"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
            className: "sub-title text-primary bgl-primary m-b15",
            children: "OUR BLOG"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
            className: "title",
            children: "Latest News & Blog"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_component_blogSlider_2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {})]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog2);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;