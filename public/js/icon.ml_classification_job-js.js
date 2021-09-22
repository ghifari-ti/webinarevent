"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.ml_classification_job-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/ml_classification_job.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/ml_classification_job.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconMlClassificationJob = function EuiIconMlClassificationJob(_ref) {
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
    d: "M7 16v5h2.038a13.179 13.179 0 000 2H7v5H5v-5H0v-2h5v-5h2zM7 0v5h5v2H7v5H5V7H0V5h5V0h2zm16 0v5h5v2h-5v2.038a13.179 13.179 0 00-2 0V7h-5V5h5V0h2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "euiIcon__fillSecondary",
    d: "M22 10c3.073 0 5.877 1.155 8 3.056v3.252A9.82 9.82 0 1016.307 30h-3.251A11.955 11.955 0 0110 22c0-6.627 5.373-12 12-12zm1 8v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
  }));
};

var icon = EuiIconMlClassificationJob;

/***/ })

}]);