"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.reporter-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/reporter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/reporter.js ***!
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



var EuiIconReporter = function EuiIconReporter(_ref) {
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
    d: "M7.684.895L6.074.358a1 1 0 00-1.296.753L4.2 4H2.5a.5.5 0 000 1h1.626a4.007 4.007 0 00.11 2.359l-2.072-.345A1 1 0 001 8v1c.364 0 .706.097 1 .268V8l1 .167 1.859.31 2.163.36.478.08v6L2 14v-1.268A1.99 1.99 0 011 13v1a1 1 0 00.836.986l6 1c.108.018.22.018.328 0l6-1A1 1 0 0015 14v-1a1.99 1.99 0 01-1-.268V14l-5.5.917v-6l.478-.08 2.163-.36L13 8.166 14 8v1.268A1.99 1.99 0 0115 9V8a1 1 0 00-1.164-.986l-2.073.345A3.991 3.991 0 0011.874 5H13.5a.5.5 0 000-1h-1.7l-.578-2.89A1 1 0 009.925.359L8.316.895a1 1 0 01-.632 0zm2.88 6.664A3.013 3.013 0 0010.83 5H5.17a3.013 3.013 0 00.266 2.559L8 7.986l2.564-.427zM10.8 4H9.2L9 3l1.5-.5.3 1.5zM1 12a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2z"
  }));
};

var icon = EuiIconReporter;

/***/ })

}]);