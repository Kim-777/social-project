(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInput.js":
/*!******************************************!*\
  !*** ./components/Common/CommonInput.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Common/CommonInput.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "\uC18C\uC15C \uCD94\uAC00\uD558\uAE30",
    color: "linkedin",
    icon: "at",
    type: "button",
    onClick: () => {
      setShowSocialLinks(!showSocialLinks);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "\uC18C\uC15C \uBBF8\uB514\uC5B4\uB97C \uB9C1\uD06C \uAC78\uAE30",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/components/Common/ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      console.log("????");
      e.preventDefault();
      setHighlighted(true);
      console.log(e.dataTransfer.files);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : null,
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    }
  }), "\uC774\uBBF8\uC9C0\uB97C \uC62C\uB9AC\uAC70\uB098 \uD074\uB9AD\uD574\uC11C \uC5C5\uB85C\uB4DC\uD558\uC138\uC694"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInput */ "./components/Common/CommonInput.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/pages/signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const regexUserName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
let cancel;

const Signup = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg('Error Uploading Image');
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));

    if (isUser) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null); // console.log('checkUsername');
      // console.log(`res`, res);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        })); // console.log('checkUsername success');
      }
    } catch (error) {
      setErrorMsg('Username Not Available'); // console.log('checkUsername false');

      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === 'media') {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 143,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Name",
    placeholder: "\uC774\uB984",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 171,
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
      lineNumber: 184,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    label: "Username",
    placeholder: "\uC720\uC800\uB124\uC784(\uD55C\uAE00, \uC601\uC5B4, \uC22B\uC790\uB9CC \uC785\uB825)",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 21
    }
  }), __jsx(_components_Common_CommonInput__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "\uAC00\uC785\uD558\uAE30",
    type: "submit",
    color: "instagram",
    disabled: submitDisabled || !usernameAvailable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'together-today');
    form.append('cloud_name', 'dg8hflaut');
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/dg8hflaut/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Common_WelcomeMessage_js-utils_authUser_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dC5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siLCJyZWdleFVzZXJOYW1lIiwiY2FuY2VsIiwiU2lnbnVwIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJvZmlsZVBpY1VybCIsInVwbG9hZFBpYyIsInJlZ2lzdGVyVXNlciIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJjaGVja1VzZXJuYW1lIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInJlcyIsImJhc2VVcmwiLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsInByZXYiLCJlcnJvciIsInZhbHVlIiwidGFyZ2V0IiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwcm9jZXNzIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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TkEsK0RBQWVsQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDcFBBOztBQUVBLE1BQU13QixTQUFTLEdBQUcsTUFBT0osS0FBUCxJQUFpQjtBQUUvQixNQUFJO0FBQ0EsVUFBTTZCLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQi9CLEtBQXBCO0FBQ0E2QixRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLGdCQUE3QjtBQUNBRixRQUFJLENBQUNFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLFdBQTFCO0FBRUEsVUFBTWYsR0FBRyxHQUFHLE1BQU1ELGlEQUFBLENBQVdpQix3REFBWCxFQUF1Q0gsSUFBdkMsQ0FBbEI7QUFFQSxXQUFPYixHQUFHLENBQUNJLElBQUosQ0FBU2EsR0FBaEI7QUFFSCxHQVZELENBVUUsT0FBT1gsS0FBUCxFQUFjO0FBQ1o7QUFDSDtBQUVKLENBaEJEOztBQWtCQSwrREFBZWxCLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgVGV4dEFyZWEsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmZ1bmN0aW9uIENvbW1vbklucHV0cyhcbiAgICB7IHVzZXI6e2JpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlcn0sIFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBzaG93U29jaWFsTGlua3MsXG4gICAgc2V0U2hvd1NvY2lhbExpbmtzLFxuICAgIH1cbikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybS5GaWVsZFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XG4gICAgICAgICAgICAgICAgbmFtZT1cImJpb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Jpb31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmlvXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgY29udGVudD1cIuyGjOyFnCDstpTqsIDtlZjquLBcIiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtlZGluXCIgXG4gICAgICAgICAgICAgICAgaWNvbj1cImF0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKVxuICAgICAgICAgICAgICAgIH19ICAgIFxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiA8PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJmYWNlYm9vayBmXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPiAgXG4gICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXG4gICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IFxuICAgICAgICAgICAgICAgICAgICBpY29uPVwieW91dHViZVwiXG4gICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIiBcbiAgICAgICAgICAgICAgICAgICAgaW5mbyBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwi7IaM7IWcIOuvuOuUlOyWtOulvCDrp4Htgawg6rG46riwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHtcbiAgICBoaWdobGlnaHRlZCxcbiAgICBzZXRIaWdobGlnaHRlZCxcbiAgICBpbnB1dFJlZixcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgbWVkaWFQcmV2aWV3LFxuICAgIHNldE1lZGlhUHJldmlldyxcbiAgICBzZXRNZWRpYSxcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPz8/P1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGFUcmFuc2Zlci5maWxlcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGRyb3BwZWRGaWxlWzBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3ID09PSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOydtOuvuOyngOulvCDsmKzrpqzqsbDrgpgg7YG066at7ZW07IScIOyXheuhnOuTnO2VmOyEuOyalFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlRHJvcERpdjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgRm9ybSxcbiAgICBCdXR0b24sXG4gICAgTWVzc2FnZSxcbiAgICBTZWdtZW50LFxuICAgIFRleHRBcmVhLFxuICAgIERpdmlkZXIsXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dCc7XG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ltYWdlRHJvcERpdic7XG5pbXBvcnQge1xuICAgIEhlYWRlck1lc3NhZ2UsXG4gICAgRm9vdGVyTWVzc2FnZSxcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoVXNlcic7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcblxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eW+OEsS3jhY586rCALe2eo3xhLXp8QS1afDAtOXxdKyQvO1xubGV0IGNhbmNlbDtcblxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBiaW86IFwiXCIsXG4gICAgICAgIGZhY2Vib29rOiBcIlwiLFxuICAgICAgICB5b3V0dWJlOiBcIlwiLFxuICAgICAgICB0d2l0dGVyOiBcIlwiLFxuICAgICAgICBpbnN0YWdyYW06IFwiXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xuXG4gICAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSwgc2V0VXNlcm5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldEZvcm1Mb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIGxldCBwcm9maWxlUGljVXJsO1xuICAgICAgICBpZihtZWRpYSE9PW51bGwpIHtcbiAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1lZGlhIT09bnVsbCAmJiAhcHJvZmlsZVBpY1VybCkge1xuICAgICAgICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKCdFcnJvciBVcGxvYWRpbmcgSW1hZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHJlZ2lzdGVyVXNlcih1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvck1zZywgc2V0Rm9ybUxvYWRpbmcpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpb30pLmV2ZXJ5KGl0ZW0gPT4gQm9vbGVhbihpdGVtKSk7XG4gICAgICAgIGlmKGlzVXNlcikge1xuICAgICAgICAgICAgc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbdXNlcl0pO1xuXG4gICAgY29uc3QgY2hlY2tVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICBzZXRVc2VybmFtZUxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xuXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NpZ251cC8ke3VzZXJuYW1lfWAsIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKGVycm9yTXNnIT09bnVsbCkgc2V0RXJyb3JNc2cobnVsbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tVc2VybmFtZScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHJlc2AsIHJlcyk7XG4gICAgICAgICAgICBpZihyZXMuZGF0YSA9PT0gXCJBdmFpbGFibGVcIikge1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldFVzZXIocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja1VzZXJuYW1lIHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yTXNnKCdVc2VybmFtZSBOb3QgQXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tVc2VybmFtZSBmYWxzZScpO1xuICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1c2VybmFtZSA9PT1cIlwiID8gc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpIDogY2hlY2tVc2VybmFtZSgpXG4gICAgfSwgW3VzZXJuYW1lXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcblxuICAgICAgICBpZihuYW1lID09PSAnbWVkaWEnKSB7XG4gICAgICAgICAgICBzZXRNZWRpYShmaWxlc1swXSk7XG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyTWVzc2FnZSAvPlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtmb3JtTG9hZGluZ31cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfVxuICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZURyb3BEaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6KCk9PnNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnKDsoIDrhKTsnoQo7ZWc6riALCDsmIHslrQsIOyIq+yekOunjCDsnoXroKUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt1c2VybmFtZUF2YWlsYWJsZT9cImNoZWNrXCI6XCJjbG9zZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb21tb25JbnB1dHMgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIuqwgOyehe2VmOq4sFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbnN0YWdyYW1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgKG1lZGlhKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm0uYXBwZW5kKCdmaWxlJywgbWVkaWEpO1xuICAgICAgICBmb3JtLmFwcGVuZCgndXBsb2FkX3ByZXNldCcsICd0b2dldGhlci10b2RheScpO1xuICAgICAgICBmb3JtLmFwcGVuZCgnY2xvdWRfbmFtZScsICdkZzhoZmxhdXQnKTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBmb3JtKVxuXG4gICAgICAgIHJldHVybiByZXMuZGF0YS51cmw7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGxvYWRQaWM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=