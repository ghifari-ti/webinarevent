"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.vis_tag_cloud-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/vis_tag_cloud.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/vis_tag_cloud.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconVisTagCloud = function EuiIconVisTagCloud(_ref) {
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
    d: "M1.5 9.047a.5.5 0 100 1h13a.5.5 0 000-1h-13zm0-1h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3zM10 13a.5.5 0 110 1H4a.5.5 0 110-1h6zM8.001 2.015a.5.5 0 11-.002 1l-5-.015a.5.5 0 11.003-1l5 .015zM14 5a.5.5 0 110 1H6a.5.5 0 010-1h8z"
  }));
};

var icon = EuiIconVisTagCloud;

/***/ })

}]);