"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.menuDown-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/menuDown.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/menuDown.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconMenuDown = function EuiIconMenuDown(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6 7.5c0 .276-.216.5-.495.5h-2.01a.503.503 0 01-.487-.412L3 7.5c0-.276.216-.5.495-.5h2.01c.243 0 .445.183.487.412L6 7.5zM3.51 4a.513.513 0 01-.502-.412L3 3.5c0-.276.228-.5.51-.5h8.98c.25 0 .459.183.502.412L13 3.5c0 .276-.228.5-.51.5H8.493v7.792l2.06-2.06a.5.5 0 11.707.707L9.14 12.56A1.496 1.496 0 018.026 13L7.993 13a.501.501 0 01-.118-.014 1.493 1.493 0 01-.857-.426l-2.122-2.12a.5.5 0 01.708-.708l1.889 1.89V4H3.51zM13 7.5c0 .276-.216.5-.495.5h-2.01a.503.503 0 01-.487-.412L10 7.5c0-.276.216-.5.495-.5h2.01c.243 0 .445.183.487.412L13 7.5z"
  }));
};

var icon = EuiIconMenuDown;

/***/ })

}]);