"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.app_app_search-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/app_app_search.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/app_app_search.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconAppAppSearch = function EuiIconAppAppSearch(_ref) {
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
    fillRule: "evenodd",
    d: "M15.5 11.915L27 5.279 19.5.938a7.002 7.002 0 00-7 0l-8 4.62A7 7 0 001 11.62v9.237a7 7 0 003.5 6.061l7.5 4.33V17.98a7 7 0 013.5-6.063zM10 27.785v-9.808a9 9 0 014.5-7.793l8.503-4.91L18.5 2.672a5.003 5.003 0 00-5 0l-8 4.619A5 5 0 003 11.62v9.238a5 5 0 002.5 4.33l4.5 2.598z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    className: "euiIcon__fillSecondary",
    d: "M18.409 13.55a7.089 7.089 0 011.035 1.711A6.93 6.93 0 0120 17.98v13.27l7.5-4.33a7 7 0 003.5-6.061v-9.239a6.992 6.992 0 00-1.587-4.421L18.409 13.55zm2.777.705A8.933 8.933 0 0122 17.979v9.807l4.5-2.598a5 5 0 002.5-4.33V11.62c0-.588-.106-1.161-.303-1.7l-7.511 4.335z"
  }));
};

var icon = EuiIconAppAppSearch;

/***/ })

}]);