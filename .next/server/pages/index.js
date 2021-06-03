(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ariwarabbang/workspace/social-project/pages/index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Index({
  posts
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, posts && posts.length > 0 && posts.map(post => __jsx("h1", {
    key: post.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 62
    }
  }, post.title)));
}

Index.getInitialProps = async ctx => {
  try {
    console.log('getInitialProps');
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://jsonplaceholder.typicode.com/posts'); // console.log(res.data);

    const {
      name
    } = ctx.query;
    console.log(name);
    return {
      posts: res.data
    };
  } catch (error) {
    console.log('getInitialProps error');
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSW5kZXgiLCJwb3N0cyIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInJlcyIsImF4aW9zIiwibmFtZSIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZXJyb3JMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUEwQjtBQUN0QixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUEsS0FBSyxJQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUF4QixJQUE2QkQsS0FBSyxDQUFDRSxHQUFOLENBQVVDLElBQUksSUFBSTtBQUFJLE9BQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJELElBQUksQ0FBQ0UsS0FBeEIsQ0FBbEIsQ0FEbkMsQ0FESjtBQUtIOztBQUdETixLQUFLLENBQUNPLGVBQU4sR0FBd0IsTUFBTUMsR0FBTixJQUFhO0FBQ2pDLE1BQUk7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSw0Q0FBVixDQUFsQixDQUZBLENBR0E7O0FBRUEsVUFBTTtBQUFFQztBQUFGLFFBQVdMLEdBQUcsQ0FBQ00sS0FBckI7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVo7QUFFQSxXQUFPO0FBQUVaLFdBQUssRUFBRVUsR0FBRyxDQUFDSTtBQUFiLEtBQVA7QUFFSCxHQVZELENBVUUsT0FBT0MsS0FBUCxFQUFjO0FBQ1pQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0EsV0FBTztBQUFDTyxrQkFBWSxFQUFFO0FBQWYsS0FBUDtBQUNIO0FBRUosQ0FoQkQ7O0FBa0JBLCtEQUFlakIsS0FBZixFOzs7Ozs7Ozs7OztBQzlCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBJbmRleCh7IHBvc3RzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBwb3N0cyAmJiBwb3N0cy5sZW5ndGggPiAwICYmIHBvc3RzLm1hcChwb3N0ID0+IDxoMSBrZXk9e3Bvc3QuaWR9Pntwb3N0LnRpdGxlfTwvaDE+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldEluaXRpYWxQcm9wcycpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG5cbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBjdHgucXVlcnk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB7IHBvc3RzOiByZXMuZGF0YSB9O1xuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0SW5pdGlhbFByb3BzIGVycm9yJylcbiAgICAgICAgcmV0dXJuIHtlcnJvckxvYWRpbmc6IHRydWV9O1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==