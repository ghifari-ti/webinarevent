"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.eraser-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/eraser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/eraser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconEraser = function EuiIconEraser(_ref) {
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
    d: "M2.648 9.937l7.29-7.288a2.21 2.21 0 013.124 0l2.29 2.288a2.21 2.21 0 010 3.126L10.413 13H12.5a.5.5 0 010 1H4.501a2.21 2.21 0 01-1.563-.647l.707-.707c.227.226.535.354.856.354h4.005a1.21 1.21 0 00.848-.354l1.292-1.293-4-4-3.29 3.291a1.21 1.21 0 000 1.712l.29.29-.708.707-.29-.29a2.21 2.21 0 010-3.126zM8 6h6.89a1.208 1.208 0 00-.246-.356L14 5H9L8 6zm2-2h3l-.645-.644a1.21 1.21 0 00-1.71 0L10 4zm4.89 3H7.708l1 1H14l.644-.644A1.22 1.22 0 0014.891 7zM9.708 9l1.646 1.646L13 9H9.707z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14 11.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5-.5a.5.5 0 100-1 .5.5 0 000 1zm-1 2a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
  }));
};

var icon = EuiIconEraser;

/***/ })

}]);