"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.vis_bar_vertical_stacked-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/vis_bar_vertical_stacked.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/vis_bar_vertical_stacked.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconVisBarVerticalStacked = function EuiIconVisBarVerticalStacked(_ref) {
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
    d: "M14.5 15a.5.5 0 110 1H.5a.5.5 0 110-1h14zm-9-13a.5.5 0 01.5.5L5.999 7H9V4.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v9a.5.5 0 11-1 0V7h-3v6.5a.5.5 0 01-.41.492L9.5 14a.5.5 0 01-.5-.5V10H6v3.5a.5.5 0 01-.992.09L5 13.5V6H2v7.5a.5.5 0 11-1 0v-11a.5.5 0 01.5-.5h4z"
  }));
};

var icon = EuiIconVisBarVerticalStacked;

/***/ })

}]);