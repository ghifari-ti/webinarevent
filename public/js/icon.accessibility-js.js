"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.accessibility-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/accessibility.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/accessibility.js ***!
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



var EuiIconAccessibility = function EuiIconAccessibility(_ref) {
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
    d: "M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 100 14A7 7 0 008 1zm3.974 4.342a.5.5 0 01-.233.596l-.083.036L9 6.86v2.559l.974 2.923a.5.5 0 01-.233.596l-.083.036a.5.5 0 01-.596-.233l-.036-.083-1-3L8 9.5l-.026.158-1 3a.5.5 0 01-.97-.228l.022-.088L7 9.416V6.86l-2.658-.886a.5.5 0 01.228-.97l.088.022L7.583 6h.833l2.926-.974a.5.5 0 01.632.316zM8 3a1 1 0 110 2 1 1 0 010-2z"
  }));
};

var icon = EuiIconAccessibility;

/***/ })

}]);