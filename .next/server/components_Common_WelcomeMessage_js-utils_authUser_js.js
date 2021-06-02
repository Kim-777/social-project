exports.id = "components_Common_WelcomeMessage_js-utils_authUser_js";
exports.ids = ["components_Common_WelcomeMessage_js-utils_authUser_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Common/WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === '/signup';
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    color: "teal",
    header: signupRoute ? "회원가입😁" : "환영합니다😎",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "회원가입 하러 가기" : "이메일로 로그인하기",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }), "\uC774\uBBF8 \uAC00\uC785\uB41C \uC544\uC774\uB514\uAC00 \uC788\uB098\uC694? ", " ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "\uB85C\uADF8\uC778 \uD558\uB7EC \uAC00\uAE30")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4\uBC84\uB9AC\uC168\uB098\uC694?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), "\uCC98\uC74C\uC624\uC168\uB098\uC694? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, "\uD68C\uC6D0\uAC00\uC785"), "\uD558\uB7EC\uAC00\uAE30", " ")));
};

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
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; }
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

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9pZ25vcmVkfC9ob21lL2FyaXdhcmFiYmFuZy93b3Jrc3BhY2Uvc29jaWFsLXByb2plY3Qvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiLCJyZWdpc3RlclVzZXIiLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsInNldFRva2VuIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsInRva2VuIiwiY29va2llIiwiUm91dGVyIiwicmVzcG9uc2UiLCJjb25zb2xlIiwicmVxdWVzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBRS9CLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixTQUF4QztBQUVBLFNBQ0ksTUFBQyxzREFBRDtBQUNJLFlBQVEsTUFEWjtBQUVJLFNBQUssRUFBQyxNQUZWO0FB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Q0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFHSCxHQVBELENBT0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1osVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0g7O0FBRURQLFlBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxDQWZNOztBQWtCUCxNQUFNSSxRQUFRLEdBQUdNLEtBQUssSUFBSTtBQUN0QkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW9CRCxLQUFwQjtBQUNBRSx5REFBQSxDQUFZLEdBQVo7QUFDSCxDQUhELEM7Ozs7Ozs7Ozs7OztBQ3hDQSxNQUFNVCxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNSyxXQUFXLEdBQUlGLEtBQUQsSUFBVztBQUM3QixNQUFJQyxRQUFKOztBQUVBLE1BQUlELEtBQUssQ0FBQ08sUUFBVixFQUFvQjtBQUNsQjtBQUVBTixZQUFRLEdBQUdELEtBQUssQ0FBQ08sUUFBTixDQUFlUixJQUExQjtBQUVBUyxXQUFPLENBQUNSLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNTLE9BQVYsRUFBbUI7QUFDeEI7QUFDQVIsWUFBUSxHQUFHRCxLQUFLLENBQUNTLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ1IsS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FMTSxNQUtBO0FBQ0w7QUFDQUEsWUFBUSxHQUFHRCxLQUFLLENBQUNVLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ1IsS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSwrREFBZUMsV0FBZixFOzs7Ozs7Ozs7O0FDdkJBLGUiLCJmaWxlIjoiY29tcG9uZW50c19Db21tb25fV2VsY29tZU1lc3NhZ2VfanMtdXRpbHNfYXV0aFVzZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBJY29uLCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXJNZXNzYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvc2lnbnVwJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZXNzYWdlIFxuICAgICAgICAgICAgYXR0YWNoZWRcbiAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXG4gICAgICAgICAgICBoZWFkZXI9e3NpZ251cFJvdXRlID8gXCLtmozsm5DqsIDsnoXwn5iBXCIgOiBcIu2ZmOyYge2VqeuLiOuLpPCfmI5cIn1cbiAgICAgICAgICAgIGljb249e3NpZ251cFJvdXRlID8gXCJzZXR0aW5nc1wiIDogXCJwcml2YWN5XCJ9XG4gICAgICAgICAgICBjb250ZW50PXtzaWdudXBSb3V0ZSA/IFwi7ZqM7JuQ6rCA7J6FIO2VmOufrCDqsIDquLBcIiA6IFwi7J2066mU7J2866GcIOuhnOq3uOyduO2VmOq4sFwifVxuICAgICAgICAvPlxuXG4gICAgKVxuXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtzaWdudXBSb3V0ZSA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDsnbTrr7gg6rCA7J6F65CcIOyVhOydtOuUlOqwgCDsnojrgpjsmpQ/IHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbgg7ZWY65+sIOqwgOq4sFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGluZm8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg67mE67CA67KI7Zi466W8IOyeiuyWtOuyhOumrOyFqOuCmOyalD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIOyymOydjOyYpOyFqOuCmOyalD8gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIO2VmOufrOqwgOq4sFxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4vYmFzZVVybCc7XG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnLi9jYXRjaEVycm9ycyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwge3VzZXIsIHByb2ZpbGVQaWNVcmx9KTtcblxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YSlcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XG4gICAgICAgIHNldEVycm9yKGVycm9yTXNnKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAodXNlciwgc2V0RXJyb3IsIHNldExvYWRpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHt1c2VyfSk7XG5cbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEpXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xuICAgICAgICBzZXRFcnJvcihlcnJvck1zZyk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG59O1xuXG5cbmNvbnN0IHNldFRva2VuID0gdG9rZW4gPT4ge1xuICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbn0iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IpID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9