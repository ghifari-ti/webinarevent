"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.app_fleet-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/app_fleet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/app_fleet.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconAppFleet = function EuiIconAppFleet(_ref) {
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
    d: "M2.996 18.636L0 20.434v6.132l6 3.6 5-3 5 3 5-3 5 3 6-3.6v-6.132l-5-3v-5l-5-3v-5l-6-3.6-6 3.6v2.832l2 .033V5.566l4-2.4 4 2.4v3.868l-1.996 1.197 1 1.733L21 11.166l4 2.4v3.868l-4 2.4-2.257-1.354-.971 1.75L20 21.565v3.868l-4 2.4-4-2.4v-1.7l-2-.033v1.733l-4 2.4-4-2.4v-3.868l1.996-1.197-1-1.733zM22 25.434v-3.868l4-2.4 4 2.4v3.868l-4 2.4-4-2.4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M11 22.166l-6-3.6v-6.132l6-3.6 6 3.6v6.132l-6 3.6zm4-4.732v-3.868l-4-2.4-4 2.4v3.868l4 2.4 4-2.4z"
  }));
};

var icon = EuiIconAppFleet;

/***/ })

}]);