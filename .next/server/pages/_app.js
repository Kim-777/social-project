(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Layout/HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, "\uC624\uB298\uBAA8\uC5EC!")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Layout/Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), user ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    style: {
      marginLeft: '1rem',
      marginRight: '1rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Ref, {
    innerRef: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_6__.default, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Visibility, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, children)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_Search__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  })))))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    style: {
      paddingTop: "1rem"
    },
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, children)));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Layout/Navbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), "\uB85C\uADF8\uC778")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "\uAC00\uC785\uD558\uAE30"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Layout/Search.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






let cancel;

function SearchComponent() {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    if (value.length === 0) return;
    if (value.trim().length === 0) return;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get('token');
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);
        return setLoading(false);
      }

      setResults(res.data);
    } catch (error) {
      console.log(`Error Searching`);
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${data.result.username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Layout/SideMenu.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function SideMenu({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      paddingTop: '1rem'
    },
    size: "big",
    verticalAlign: "middle",
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "home",
    size: "large",
    color: isActive('/') && 'teal',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/messages'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: isActive('/messages') && 'teal' || unreadMessage && 'orange',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive('/notifications'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large",
    color: isActive('/notifications') && 'teal' || unreadNotification && 'orange',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: router.query.username === username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && 'teal',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.logoutUser)(email),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "log out",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Logout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/pages/_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // class MyApp extends App {
//     static async getInitialProps({Component, ctx}) {
//         // console.log(appContext);
//         const { token } = parseCookies(ctx);
//         let pageProps = {};
//         const protectedRoutes = 
//             ctx.pathname === "/" ||
//             ctx.pathname === "/[username]" ||
//             ctx.pathname === "/notifications" ||
//             ctx.pathname === "/post/[postId]" ||
//             ctx.pathname === "/messages" ||
//             ctx.pathname === "/search";
//         if(!token) {
//             protectedRoutes && redirectUser(ctx, "/login");
//         } else {
//             if(Component.getInitialProps) {
//                 pageProps = await Component.getInitialProps(ctx);
//             }
//             try {
//                 const res = await axios.get(`${baseUrl}/api/auth`, {
//                     headers: { Authorization: token} 
//                 })
//                 const {user, userFollowStats} = res.data;
//                 if(user) {
//                     !protectedRoutes && redirectUser(ctx, "/");
//                 }
//                 pageProps.user = user;
//                 pageProps.userFollowStats = userFollowStats;
//             } catch (error) {
//                 destroyCookie(ctx, 'token');
//                 redirectUser(ctx, "/login");
//             }
//         }
//         return { pageProps };
//     }
//     render() {
//         const { Component, pageProps } = this.props;
//         return (
//             <Layout {...pageProps}>
//                 <Component {...pageProps} />
//             </Layout>
//         );
//     }
// }

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })));
}

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  // console.log(appContext);
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
  let pageProps = {};
  const protectedRoutes = ctx.pathname === "/" || ctx.pathname === "/[username]" || ctx.pathname === "/notifications" || ctx.pathname === "/post/[postId]" || ctx.pathname === "/messages" || ctx.pathname === "/search";

  if (!token) {
    protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowStats
      } = res.data;

      if (user) {
        !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/");
      }

      pageProps.user = user;
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(ctx, 'token');
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
    }
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('userEmail', email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css-node_modu-b86d49"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvaWdub3JlZHwvaG9tZS9hcml3YXJhYmJhbmcvd29ya3NwYWNlL3NvY2lhbC1wcm9qZWN0L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwiUm91dGVyIiwibnByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwidHJpbSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiUmVzdWx0UmVuZGVyZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiU2lkZU1lbnUiLCJ1bnJlYWROb3RpZmljYXRpb24iLCJlbWFpbCIsInVucmVhZE1lc3NhZ2UiLCJxdWVyeSIsImxvZ291dFVzZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsInByb3RlY3RlZFJvdXRlcyIsInJlZGlyZWN0VXNlciIsInVzZXJGb2xsb3dTdGF0cyIsImRlc3Ryb3lDb29raWUiLCJyZWdpc3RlclVzZXIiLCJzZXRFcnJvciIsInNldFRva2VuIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsImxvY2F0aW9uIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxjQUF0QjtBQUFxQyxPQUFLLEVBQUMsT0FBM0M7QUFBbUQsTUFBSSxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUlFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLDJCQUE1QjtB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OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgSGVhZFRhZ3MgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgc2l6ZXM9XCIxNioxNlwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAxMDA7MzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbGlzdE1lc3NhZ2VzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMuY3NzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbnByb2dyZXNzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8dGl0bGU+7Jik64qY66qo7JesITwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBcclxuICBDb250YWluZXIsXHJcbiAgVmlzaWJpbGl0eSxcclxuICBHcmlkLFxyXG4gIFN0aWNreSxcclxuICBSZWYsXHJcbiAgRGl2aWRlcixcclxuICBTZWdtZW50LFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbnByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSAnLi9TaWRlTWVudSc7XHJcbmltcG9ydCBTZWFyY2hDb21wb25lbnQgZnJvbSAnLi9TZWFyY2gnO1xyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgdXNlciB9KSB7XHJcblxyXG4gIGNvbnN0IGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKTtcclxuXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IG5wcm9ncmVzcy5zdGFydCgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBucHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRUYWdzIC8+XHJcbiAgICAgIHt1c2VyPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMXJlbScsIG1hcmdpblJpZ2h0OiAnMXJlbSd9fT5cclxuICAgICAgICAgICAgPFJlZiBpbm5lclJlZj17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHkgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHk+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L1N0aWNreT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L1JlZj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+IFxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fSB0ZXh0PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01lbnUsIENvbnRhaW5lciwgSWNvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBmbHVpZCBib3JkZXJsZXNzPlxyXG4gICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9sb2dpblwiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgIOqwgOyehe2VmOq4sFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdCwgSW1hZ2UsIFNlYXJjaCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnO1xuXG5sZXQgY2FuY2VsO1xuXG5mdW5jdGlvbiBTZWFyY2hDb21wb25lbnQoKSB7XG5cbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIGUgPT4ge1xuXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBcbiAgICAgICAgaWYodmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZih2YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBzZXRUZXh0KHZhbHVlKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FuY2VsICYmIGNhbmNlbCgpXG4gICAgICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpO1xuXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXG4gICAgICAgICAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihjYW5jZWxlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYocmVzLmRhdGEubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIFNlYXJjaGluZ2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZih0ZXh0Lmxlbmd0aD09PTAgJiYgbG9hZGluZykgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW3RleHRdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VhcmNoIFxuICAgICAgICAgICAgb25CbHVyPXsoKT0+IHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XG4gICAgICAgICAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9XG4gICAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XG4gICAgICAgICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmNvbnN0IFJlc3VsdFJlbmRlcmVyID0gKHtfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWV9KSA9PiB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0IGtleT17X2lkfT5cbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgIDwvTGlzdD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0LCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoVXNlcic7XG5cbmZ1bmN0aW9uIFNpZGVNZW51KHsgdXNlcjoge3VucmVhZE5vdGlmaWNhdGlvbiwgZW1haWwsIHVucmVhZE1lc3NhZ2UsIHVzZXJuYW1lfX0pIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaXNBY3RpdmUgPSByb3V0ZSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzFyZW0nfX1cbiAgICAgICAgICAgICAgICBzaXplPVwiYmlnXCJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnLycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJob21lXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKCcvJykgJiYgJ3RlYWwnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkhvbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvbWVzc2FnZXMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt1bnJlYWRNZXNzYWdlPyBcImhhbmQgcG9pbnQgcmlnaHRcIjogXCJtYWlsIG91dGxpbmVcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyhpc0FjdGl2ZSgnL21lc3NhZ2VzJykgJiYgJ3RlYWwnKSB8fCAodW5yZWFkTWVzc2FnZSAmJiAnb3JhbmdlJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24/IFwiaGFuZCBwb2ludCByaWdodFwiOiBcImJlbGwgb3V0bGluZVwifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17KGlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpICYmICd0ZWFsJykgfHwgKHVucmVhZE5vdGlmaWNhdGlvbiAmJiAnb3JhbmdlJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJOb3RpZmljYXRpb25zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7dXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgJ3RlYWwnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gb25DbGljaz17KCkgPT4gbG9nb3V0VXNlcihlbWFpbCl9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xuIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnO1xuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFVzZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xuXG5cbi8vIGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcblxuLy8gICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe0NvbXBvbmVudCwgY3R4fSkge1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBDb250ZXh0KTtcbi8vICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4vLyAgICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuLy8gICAgICAgICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBcbi8vICAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvXCIgfHxcbi8vICAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvW3VzZXJuYW1lXVwiIHx8XG4vLyAgICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL25vdGlmaWNhdGlvbnNcIiB8fFxuLy8gICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9wb3N0L1twb3N0SWRdXCIgfHxcbi8vICAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvbWVzc2FnZXNcIiB8fFxuLy8gICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9zZWFyY2hcIjtcblxuXG4vLyAgICAgICAgIGlmKCF0b2tlbikge1xuLy8gICAgICAgICAgICAgcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuLy8gICAgICAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW59IFxuLy8gICAgICAgICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgICAgICAgICBjb25zdCB7dXNlciwgdXNlckZvbGxvd1N0YXRzfSA9IHJlcy5kYXRhO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYodXNlcikge1xuLy8gICAgICAgICAgICAgICAgICAgICAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL1wiKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBwYWdlUHJvcHMudXNlciA9IHVzZXI7XG4vLyAgICAgICAgICAgICAgICAgcGFnZVByb3BzLnVzZXJGb2xsb3dTdGF0cyA9IHVzZXJGb2xsb3dTdGF0cztcbi8vICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsICd0b2tlbicpO1xuLy8gICAgICAgICAgICAgICAgIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cblxuLy8gICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbi8vICAgICB9XG5cbi8vICAgICByZW5kZXIoKSB7XG4vLyAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbi8vICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XG4vLyAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCB7Li4ucGFnZVByb3BzfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHh9KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFwcENvbnRleHQpO1xuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9cIiB8fFxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9bdXNlcm5hbWVdXCIgfHxcbiAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvbm90aWZpY2F0aW9uc1wiIHx8XG4gICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL3Bvc3QvW3Bvc3RJZF1cIiB8fFxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9tZXNzYWdlc1wiIHx8XG4gICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL3NlYXJjaFwiO1xuXG5cbiAgICAgICAgaWYoIXRva2VuKSB7XG4gICAgICAgICAgICBwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCwgXCIvbG9naW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbn0gXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHt1c2VyLCB1c2VyRm9sbG93U3RhdHN9ID0gcmVzLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBpZih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICFwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhZ2VQcm9wcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMudXNlckZvbGxvd1N0YXRzID0gdXNlckZvbGxvd1N0YXRzO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkZXN0cm95Q29va2llKGN0eCwgJ3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuL2Jhc2VVcmwnO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAsIHt1c2VyLCBwcm9maWxlUGljVXJsfSk7XG5cbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEpXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcihlcnJvck1zZyk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKHVzZXIsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7dXNlcn0pO1xuXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhKVxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIGxvY2F0aW9uKSA9PiB7XG4gICAgaWYoY3R4LnJlcSkge1xuICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtMb2NhdGlvbjogbG9jYXRpb259KTtcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gICAgfVxufVxuXG5cbmNvbnN0IHNldFRva2VuID0gdG9rZW4gPT4ge1xuICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBlbWFpbCA9PiB7XG4gICAgY29va2llLnNldCgndXNlckVtYWlsJywgZW1haWwpO1xuICAgIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcbiAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICBSb3V0ZXIucmVsb2FkKCk7XG59IiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gKGVycm9yKSA9PiB7XHJcbiAgbGV0IGVycm9yTXNnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9