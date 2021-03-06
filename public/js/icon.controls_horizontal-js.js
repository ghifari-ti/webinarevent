"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.controls_horizontal-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/controls_horizontal.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/controls_horizontal.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconControlsHorizontal = function EuiIconControlsHorizontal(_ref) {
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
    fillRule: "evenodd",
    d: "M8.05 10a2.5 2.5 0 014.9 0h1.55a.5.5 0 110 1h-1.55a2.5 2.5 0 01-4.9 0H1.5a.5.5 0 110-1h6.55zm-.1-4a2.5 2.5 0 01-4.9 0H1.5a.5.5 0 010-1h1.55a2.5 2.5 0 014.9 0h6.55a.5.5 0 110 1H7.95zM4 5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm8 5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
  }));
};

var icon = EuiIconControlsHorizontal;

/***/ })

}]);