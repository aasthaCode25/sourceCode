"use strict";
(() => {
var exports = {};
exports.id = 7110;
exports.ids = [7110];
exports.modules = {

/***/ 7055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _data_blogdata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2054);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_updatedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_updatedata__WEBPACK_IMPORTED_MODULE_3__]);
_context_updatedata__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




 // import Image from "../public/children.jpg"





function Blog3({
  blogs,
  totalPages,
  currentPage,
  onPageChange
}) {
  const {
    blogData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_updatedata__WEBPACK_IMPORTED_MODULE_3__/* .UpdateContext */ .o);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
      className: "content-inner",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
            className: "title",
            children: "Our Blog & News"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "dlab-separator style-2 bg-primary"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "row",
          children: blogs === null || blogs === void 0 ? void 0 : blogs.map(blog => {
            var _blog$image, _blog$image$formats, _blog$image$formats$t, _blog$intro;

            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "col-xl-6 wow fadeInUp",
              "data-wow-duration": "2s",
              "data-wow-delay": "0.2s",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "dlab-blog blog-half m-b30",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "dlab-media",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    href: `/ourstories/${blog.documentId}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                        src: blog === null || blog === void 0 ? void 0 : (_blog$image = blog.image1) === null || _blog$image === void 0 ? void 0 : (_blog$image$formats = _blog$image.formats) === null || _blog$image$formats === void 0 ? void 0 : (_blog$image$formats$t = _blog$image$formats.thumbnail) === null || _blog$image$formats$t === void 0 ? void 0 : _blog$image$formats$t.url,
                        alt: blog.title || "Blog post",
                        style: {
                          height: "200px"
                        }
                      })
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "dlab-info",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h5", {
                    className: "dlab-title",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                      href: `/ourstories/${blog.documentId}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                        children: blog === null || blog === void 0 ? void 0 : blog.titile
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                      href: `/ourstories/${blog.documentId}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                        children: (blog === null || blog === void 0 ? void 0 : (_blog$intro = blog.intro) === null || _blog$intro === void 0 ? void 0 : _blog$intro.length) > 70 ? `${blog.intro.slice(0, 100)}...` : blog === null || blog === void 0 ? void 0 : blog.intro
                      })
                    }), " "]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "dlab-meta",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                        className: "post-date",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                          className: "flaticon-clock m-r10"
                        }), blog === null || blog === void 0 ? void 0 : blog.publishDate]
                      })
                    })
                  })]
                })]
              })
            }, blog.documentId);
          })
        }), totalPages > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "container mt-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "row justify-content-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-12 col-md-auto d-flex flex-wrap justify-content-center gap-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: "btn btn-primary",
                disabled: currentPage === 1,
                onClick: () => onPageChange(currentPage - 1),
                children: "Previous"
              }), Array.from({
                length: totalPages
              }, (_, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: `btn  m-1 ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`,
                onClick: () => onPageChange(index + 1),
                children: index + 1
              }, index + 1)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                className: "btn btn-primary",
                disabled: currentPage === totalPages,
                onClick: () => onPageChange(currentPage + 1),
                children: "Next"
              })]
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog3);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/blogSlider.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function blogSlider_BlogSlider() {
  const {
    0: asd,
    1: setAsd
  } = useState();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  };

  const renderArrows = () => {
    return /*#__PURE__*/_jsxs("div", {
      className: "owl-nav",
      children: [/*#__PURE__*/_jsx("div", {
        className: "owl-prev",
        onClick: () => asd.slickPrev(),
        children: /*#__PURE__*/_jsx("i", {
          className: "fa fa-arrow-left"
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "owl-next",
        onClick: () => asd.slickNext(),
        children: /*#__PURE__*/_jsx("i", {
          className: "fa fa-arrow-right"
        })
      })]
    });
  };

  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary",
      style: {
        "position": "relative"
      },
      children: [/*#__PURE__*/_jsxs(Slider, _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: [/*#__PURE__*/_jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/_jsxs("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/_jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/_jsx(Link, {
                href: "blog-details-1",
                children: /*#__PURE__*/_jsxs("a", {
                  children: ["                                   ", /*#__PURE__*/_jsx("img", {
                    src: "images/blog/blog-grid-1/pic1.jpg",
                    alt: ""
                  })]
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/_jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Praesent ut lobortis purus hasellus libero orci, accumsan."
                  })
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/_jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/_jsxs("ul", {
                  children: [/*#__PURE__*/_jsxs("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/_jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/_jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/_jsxs("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/_jsxs("ul", {
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://www.facebook.com/"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/_jsxs("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/_jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/_jsx(Link, {
                href: "blog-details-1",
                children: /*#__PURE__*/_jsx("a", {
                  children: /*#__PURE__*/_jsx("img", {
                    src: "images/blog/blog-grid-1/pic2.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/_jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Donec feugiat mollis nisi in dignissim. Morbi lectus."
                  })
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/_jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/_jsxs("ul", {
                  children: [/*#__PURE__*/_jsxs("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/_jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/_jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/_jsxs("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/_jsxs("ul", {
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://www.facebook.com/"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/_jsxs("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/_jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/_jsx(Link, {
                href: "blog-details-1",
                children: /*#__PURE__*/_jsx("a", {
                  children: /*#__PURE__*/_jsx("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/_jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  })
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/_jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/_jsxs("ul", {
                  children: [/*#__PURE__*/_jsxs("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/_jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/_jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/_jsxs("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/_jsxs("ul", {
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://www.facebook.com/"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/_jsxs("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/_jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/_jsx(Link, {
                href: "blog-details-1",
                children: /*#__PURE__*/_jsx("a", {
                  children: /*#__PURE__*/_jsx("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  })
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/_jsx("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "blog-details-1",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  })
                })
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }), /*#__PURE__*/_jsx("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/_jsxs("ul", {
                  children: [/*#__PURE__*/_jsxs("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-clock m-r10"
                    }), "7 March, 2020"]
                  }), /*#__PURE__*/_jsx("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/_jsxs("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/_jsx("i", {
                        className: "flaticon-speech-bubble"
                      }), /*#__PURE__*/_jsx("span", {
                        children: "15"
                      })]
                    })
                  }), /*#__PURE__*/_jsxs("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/_jsx("i", {
                      className: "flaticon-share"
                    }), /*#__PURE__*/_jsxs("ul", {
                      children: [/*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-facebook",
                          href: "https://www.facebook.com/"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        })
                      }), /*#__PURE__*/_jsx("li", {
                        children: /*#__PURE__*/_jsx("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })]
          })
        })]
      })), renderArrows()]
    })
  });
}

/* harmony default export */ const blogSlider = ((/* unused pure expression or super */ null && (blogSlider_BlogSlider)));
;// CONCATENATED MODULE: ./element/blog.js





function Blog() {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/_jsx("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Blog"
          }), /*#__PURE__*/_jsx("h2", {
            className: "title",
            children: "Latest Blog & News"
          })]
        }), /*#__PURE__*/_jsx(BlogSlider, {})]
      })
    })
  });
}

/* harmony default export */ const blog = ((/* unused pure expression or super */ null && (Blog)));

/***/ }),

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

/***/ 962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_footer_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9070);
/* harmony import */ var _layout_header_3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8423);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _element_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6538);
/* harmony import */ var _element_blog_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4025);
/* harmony import */ var _element_blog_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7055);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_updatedata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8139);
/* harmony import */ var _lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1429);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_element_blog_2__WEBPACK_IMPORTED_MODULE_4__, _element_blog_3__WEBPACK_IMPORTED_MODULE_5__, _context_updatedata__WEBPACK_IMPORTED_MODULE_7__]);
([_element_blog_2__WEBPACK_IMPORTED_MODULE_4__, _element_blog_3__WEBPACK_IMPORTED_MODULE_5__, _context_updatedata__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function OurStories({
  blogs
}) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1); // Track the current page

  const {
    0: blogsPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(4);
  const {
    blogData,
    setBlogData
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_context_updatedata__WEBPACK_IMPORTED_MODULE_7__/* .UpdateContext */ .o);
  setBlogData(blogs);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = (blogData === null || blogData === void 0 ? void 0 : blogData.slice(indexOfFirstBlog, indexOfLastBlog)) || []; // Calculate total pages

  const totalPages = Math.ceil(((blogData === null || blogData === void 0 ? void 0 : blogData.length) || 0) / blogsPerPage); // Handle page change

  const handlePageChange = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_layout_header_3__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "page-content bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "dlab-bnr-inr style-2 overlay-gradient-dark",
        style: {
          "backgroundImage": "url(images/cover.jpg)"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "dlab-bnr-inr-entry",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("h1", {
              children: "Our Stories"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("nav", {
              "aria-label": "breadcrumb",
              className: "breadcrumb-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
                className: "breadcrumb",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                  className: "breadcrumb-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/",
                    children: "Home"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  href: "/ourstories",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                    className: "breadcrumb-item active ",
                    style: {
                      cursor: "pointer"
                    },
                    "aria-current": "page",
                    children: "Our Story"
                  })
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_element_blog_3__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        blogs: currentBlogs,
        totalPages: totalPages,
        currentPage: currentPage,
        onPageChange: handlePageChange
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_layout_footer_2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {})]
  });
}

async function getServerSideProps() {
  const blogs = await (0,_lib_fetchStrapiData__WEBPACK_IMPORTED_MODULE_8__/* .fetchStrapiData */ .p)("blogs?populate=*");
  return {
    props: {
      blogs
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurStories);
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

/***/ 3702:
/***/ ((module) => {

module.exports = require("react-markdown");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2054:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9400,1664,4365,8423,8139,4025], () => (__webpack_exec__(962)));
module.exports = __webpack_exports__;

})();