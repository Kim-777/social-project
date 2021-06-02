(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/pages/login.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Login = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: "",
    password: ""
  });
  const {
    email,
    password
  } = user;
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      email,
      password
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.loginUser)(user, setErrorMsg, setFormLoading);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Email",
    placeholder: "\uC774\uBA54\uC77C",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "\uBE44\uBC00\uBC88\uD638",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? 'text' : 'password',
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "\uB85C\uADF8\uC778\uD558\uAE30",
    type: "submit",
    color: "instagram",
    disabled: submitDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Common_WelcomeMessage_js-utils_authUser_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJzdWJtaXREaXNhYmxlZCIsInNldFN1Ym1pdERpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsb2dpblVzZXIiLCJjaXJjdWxh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QUVJLGVBQVcsRUFBQywwQkFGaEI7QUFHSSxRQUFJLEVBQUMsVUFIVDtBQUlJLFNBQUssRUFBRVQsUUFKWDtBQUtJLFlBQVEsRUFBRVMsWUFMZDtBQU1JLFNBQUssTUFOVDtBQU9JLFFBQUksRUFBRTtBQUNGRSxVQUFJLEVBQUUsS0FESjtBQUVGYyxjQUFRLEVBQUUsSUFGUjtBQUdGQyxVQUFJLEVBQUUsSUFISjtBQUlGQyxhQUFPLEVBQUMsTUFBSXpCLGVBQWUsQ0FBQyxDQUFDRCxZQUFGO0FBSnpCLEtBUFY7QUFhSSxnQkFBWSxFQUFDLE1BYmpCO0FBY0ksUUFBSSxFQUFFQSxZQUFZLEdBQUUsTUFBRixHQUFXLFVBZGpDO0FBZUksWUFBUSxNQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkSixFQStCSSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkosRUFnQ0ksTUFBQyxxREFBRDtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksV0FBTyxFQUFDLGdDQUZaO0FBR0ksUUFBSSxFQUFDLFFBSFQ7QUFJSSxTQUFLLEVBQUMsV0FKVjtBQUtJLFlBQVEsRUFBRU0sY0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENKLENBWEosQ0FGSixFQXNESSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0REosQ0FESjtBQTBESCxDQTNGRDs7QUE2RkEsK0RBQWVaLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNwR0EsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UnO1xuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFVzZXInXG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlcjtcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoe2VtYWlsLCBwYXNzd29yZH0pLmV2ZXJ5KGl0ZW0gPT4gQm9vbGVhbihpdGVtKSk7XG4gICAgICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYXdhaXQgbG9naW5Vc2VyKHVzZXIsIHNldEVycm9yTXNnLCBzZXRGb3JtTG9hZGluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XG4gICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XG4gICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwi66Gc6re47J247ZWY6riwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluc3RhZ3JhbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkfSBcbiAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDxGb290ZXJNZXNzYWdlIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=