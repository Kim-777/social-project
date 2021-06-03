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
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__);
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
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_semantic-ui-css_semantic_min_css-node_modules_n-d06b18"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvaWdub3JlZHwvaG9tZS9hcml3YXJhYmJhbmcvd29ya3NwYWNlL3NvY2lhbC1wcm9qZWN0L25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwiUm91dGVyIiwibnByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwidHJpbSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiUmVzdWx0UmVuZGVyZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiU2lkZU1lbnUiLCJ1bnJlYWROb3RpZmljYXRpb24iLCJlbWFpbCIsInVucmVhZE1lc3NhZ2UiLCJxdWVyeSIsImxvZ291dFVzZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsInByb3RlY3RlZFJvdXRlcyIsInJlZGlyZWN0VXNlciIsInVzZXJGb2xsb3dTdGF0cyIsImRlc3Ryb3lDb29raWUiLCJyZWdpc3RlclVzZXIiLCJzZXRFcnJvciIsInNldFRva2VuIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsImxvY2F0aW9uIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxjQUF0QjtBQUFxQyxPQUFLLEVBQUMsT0FBM0M7QUFBbUQsTUFBSSxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUlFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLDJCQUE1QjtB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dUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT7smKTripjrqqjsl6whPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRhZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUYWdzIGZyb20gXCIuL0hlYWRUYWdzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7IFxyXG4gIENvbnRhaW5lcixcclxuICBWaXNpYmlsaXR5LFxyXG4gIEdyaWQsXHJcbiAgU3RpY2t5LFxyXG4gIFJlZixcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnQsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tICcuL1NpZGVNZW51JztcclxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL1NlYXJjaCc7XHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB1c2VyIH0pIHtcclxuXHJcbiAgY29uc3QgY29udGV4dFJlZiA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gbnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IG5wcm9ncmVzcy5kb25lKCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IG5wcm9ncmVzcy5kb25lKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuICAgICAge3VzZXI/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxcmVtJywgbWFyZ2luUmlnaHQ6ICcxcmVtJ319PlxyXG4gICAgICAgICAgICA8UmVmIGlubmVyUmVmPXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD4gXHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19IHRleHQ+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TWVudSwgQ29udGFpbmVyLCBJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKFwiL2xvZ2luXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ24gaW5cIiAvPlxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9zaWdudXBcIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbnVwXCIgLz5cclxuICAgICAgICAgICAg6rCA7J6F7ZWY6riwXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9NZW51PlxyXG4gICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vLi4vdXRpbHMvYmFzZVVybCc7XG5cbmxldCBjYW5jZWw7XG5cbmZ1bmN0aW9uIFNlYXJjaENvbXBvbmVudCgpIHtcblxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XG5cbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIFxuICAgICAgICBpZih2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmKHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNldFRleHQodmFsdWUpO1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYW5jZWwgJiYgY2FuY2VsKClcbiAgICAgICAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihyZXMuZGF0YS5sZW5ndGggPT09IDApIHtcblxuICAgICAgICAgICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgU2VhcmNoaW5nYCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHRleHQubGVuZ3RoPT09MCAmJiBsb2FkaW5nKSBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCBbdGV4dF0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWFyY2ggXG4gICAgICAgICAgICBvbkJsdXI9eygpPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcbiAgICAgICAgICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFRleHQoXCJcIik7XG4gICAgICAgICAgICB9fSBcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cbiAgICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XG4gICAgICAgICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbWluQ2hhcmFjdGVycz17MX1cbiAgICAgICAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT4gUm91dGVyLnB1c2goYC8ke2RhdGEucmVzdWx0LnVzZXJuYW1lfWApfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoe19pZCwgcHJvZmlsZVBpY1VybCwgbmFtZX0pID0+IHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpc3Qga2V5PXtfaWR9PlxuICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgPC9MaXN0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpc3QsIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgbG9nb3V0VXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGhVc2VyJztcblxuZnVuY3Rpb24gU2lkZU1lbnUoeyB1c2VyOiB7dW5yZWFkTm90aWZpY2F0aW9uLCBlbWFpbCwgdW5yZWFkTWVzc2FnZSwgdXNlcm5hbWV9fSkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMXJlbSd9fVxuICAgICAgICAgICAgICAgIHNpemU9XCJiaWdcIlxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17aXNBY3RpdmUoJy8nKSAmJiAndGVhbCd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiSG9tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tZXNzYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoJy9tZXNzYWdlcycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3VucmVhZE1lc3NhZ2U/IFwiaGFuZCBwb2ludCByaWdodFwiOiBcIm1haWwgb3V0bGluZVwifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17KGlzQWN0aXZlKCcvbWVzc2FnZXMnKSAmJiAndGVhbCcpIHx8ICh1bnJlYWRNZXNzYWdlICYmICdvcmFuZ2UnKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk1lc3NhZ2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3VucmVhZE5vdGlmaWNhdGlvbj8gXCJoYW5kIHBvaW50IHJpZ2h0XCI6IFwiYmVsbCBvdXRsaW5lXCJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsoaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJykgJiYgJ3RlYWwnKSB8fCAodW5yZWFkTm90aWZpY2F0aW9uICYmICdvcmFuZ2UnKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk5vdGlmaWNhdGlvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiAndGVhbCd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiQWNjb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2cgb3V0XCIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTG9nb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XG4iLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XG5pbXBvcnQgeyByZWRpcmVjdFVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoVXNlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuXG4vLyBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cbi8vICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsIGN0eH0pIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coYXBwQ29udGV4dCk7XG4vLyAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xuLy8gICAgICAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbi8vICAgICAgICAgY29uc3QgcHJvdGVjdGVkUm91dGVzID0gXG4vLyAgICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL1wiIHx8XG4vLyAgICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL1t1c2VybmFtZV1cIiB8fFxuLy8gICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9ub3RpZmljYXRpb25zXCIgfHxcbi8vICAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvcG9zdC9bcG9zdElkXVwiIHx8XG4vLyAgICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL21lc3NhZ2VzXCIgfHxcbi8vICAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvc2VhcmNoXCI7XG5cblxuLy8gICAgICAgICBpZighdG9rZW4pIHtcbi8vICAgICAgICAgICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbi8vICAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwge1xuLy8gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VufSBcbi8vICAgICAgICAgICAgICAgICB9KVxuXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qge3VzZXIsIHVzZXJGb2xsb3dTdGF0c30gPSByZXMuZGF0YTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKHVzZXIpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgIXByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9cIik7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xuLy8gICAgICAgICAgICAgICAgIHBhZ2VQcm9wcy51c2VyRm9sbG93U3RhdHMgPSB1c2VyRm9sbG93U3RhdHM7XG4vLyAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgICAgICAgIGRlc3Ryb3lDb29raWUoY3R4LCAndG9rZW4nKTtcbi8vICAgICAgICAgICAgICAgICByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4vLyAgICAgfVxuXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4vLyAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICA8TGF5b3V0IHsuLi5wYWdlUHJvcHN9PlxuLy8gICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgICAgICAgICAgIDwvTGF5b3V0PlxuLy8gICAgICAgICApO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4fSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBDb250ZXh0KTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcblxuICAgICAgICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBcbiAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvXCIgfHxcbiAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvW3VzZXJuYW1lXVwiIHx8XG4gICAgICAgICAgICBjdHgucGF0aG5hbWUgPT09IFwiL25vdGlmaWNhdGlvbnNcIiB8fFxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9wb3N0L1twb3N0SWRdXCIgfHxcbiAgICAgICAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvbWVzc2FnZXNcIiB8fFxuICAgICAgICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9zZWFyY2hcIjtcblxuXG4gICAgICAgIGlmKCF0b2tlbikge1xuICAgICAgICAgICAgcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2F1dGhgLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW59IFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7dXNlciwgdXNlckZvbGxvd1N0YXRzfSA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgaWYodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWdlUHJvcHMudXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzLnVzZXJGb2xsb3dTdGF0cyA9IHVzZXJGb2xsb3dTdGF0cztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsICd0b2tlbicpO1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi9iYXNlVXJsJztcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICcuL2NhdGNoRXJyb3JzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLCB7dXNlciwgcHJvZmlsZVBpY1VybH0pO1xuXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhKVxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwge3VzZXJ9KTtcblxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YSlcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XG4gICAgICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xuICAgIGlmKGN0eC5yZXEpIHtcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7TG9jYXRpb246IGxvY2F0aW9ufSk7XG4gICAgICAgIGN0eC5yZXMuZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2gobG9jYXRpb24pO1xuICAgIH1cbn1cblxuXG5jb25zdCBzZXRUb2tlbiA9IHRva2VuID0+IHtcbiAgICBjb29raWUuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gZW1haWwgPT4ge1xuICAgIGNvb2tpZS5zZXQoJ3VzZXJFbWFpbCcsIGVtYWlsKTtcbiAgICBjb29raWUucmVtb3ZlKFwidG9rZW5cIik7XG4gICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgUm91dGVyLnJlbG9hZCgpO1xufSIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==