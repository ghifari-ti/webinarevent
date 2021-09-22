"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.logo_docker-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/logo_docker.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/logo_docker.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconLogoDocker = function EuiIconLogoDocker(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18.099 15.108h3.304v-2.973H18.1v2.973zm-3.905 0h3.304v-2.973h-3.304v2.973zm-3.905 0h3.304v-2.973H10.29v2.973zm-3.905 0H9.69v-2.973H6.384v2.973zm-3.904 0h3.304v-2.973H2.48v2.973zm3.904-3.568H9.69V8.568H6.384v2.972zm3.905 0h3.304V8.568H10.29v2.972zm3.905 0h3.304V8.568h-3.304v2.972zm0-3.567h3.304V5h-3.304v2.973zm17.139 5.402c-.722-.478-2.38-.653-3.656-.415-.164-1.19-.834-2.221-2.052-3.153l-.7-.463-.468.694c-.598.893-.897 2.13-.8 3.317.045.418.183 1.164.617 1.82-.433.231-1.29.549-2.42.528H.124l-.043.247c-.204 1.193-.2 4.914 2.24 7.774C4.178 25.898 6.96 27 10.59 27c7.87 0 13.693-3.586 16.42-10.104 1.073.02 3.381.006 4.567-2.237.031-.051.102-.186.31-.61l.113-.234-.667-.44z",
    fill: "#136EA3",
    fillRule: "evenodd"
  }));
};

var icon = EuiIconLogoDocker;

/***/ })

}]);