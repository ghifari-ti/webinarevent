"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.app_management-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/app_management.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/app_management.js ***!
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



var EuiIconAppManagement = function EuiIconAppManagement(_ref) {
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
    className: "euiIcon__fillSecondary",
    d: "M16 21a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M20 32h-8v-4.06a1 1 0 00-1.61-.67l-2.88 2.87-5.65-5.65 2.87-2.87a.92.92 0 00.2-1 .93.93 0 00-.86-.6H0V12h4.06a.92.92 0 00.85-.58.94.94 0 00-.19-1L1.86 7.51l5.65-5.65 2.87 2.87A1 1 0 0012 4.06V0h8v4.06a1 1 0 001.61.67l2.87-2.87 5.66 5.66-2.87 2.87a.92.92 0 00-.2 1 .93.93 0 00.86.6H32v8h-4.06a.92.92 0 00-.85.58.94.94 0 00.19 1l2.87 2.87-5.66 5.66-2.87-2.87a1 1 0 00-1.61.67L20 32zm-6-2h4v-2.06a3 3 0 015-2.08l1.46 1.46 2.83-2.83L25.86 23a3 3 0 012.08-5H30v-4h-2.06a3 3 0 01-2.08-5l1.46-1.46-2.83-2.85L23 6.14a3 3 0 01-5-2.08V2h-4v2.06a3 3 0 01-5 2.08L7.51 4.69 4.69 7.51 6.14 9a3 3 0 01-2.08 5H2v4h2.06a3 3 0 012.08 5l-1.45 1.49 2.83 2.83L9 25.86a3 3 0 015 2.08V30z"
  }));
};

var icon = EuiIconAppManagement;

/***/ })

}]);