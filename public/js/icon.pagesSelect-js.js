"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.pagesSelect-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/pagesSelect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/pagesSelect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconPagesSelect = function EuiIconPagesSelect(_ref) {
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
    d: "M3 1a1 1 0 011-1h8a1 1 0 01.707.293l2 2A1 1 0 0115 3v5a4.995 4.995 0 00-1-.584V4h-2a1 1 0 01-1-1V1H4v12h3.1c.07.348.177.682.316 1H4a1 1 0 01-1-1V1zm5 14H2V2a1 1 0 00-1 1v12a1 1 0 001 1h7a5.029 5.029 0 01-1-1zm8-3a4 4 0 11-8 0 4 4 0 018 0zm-1.646-1.354a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708 0l-1-1a.5.5 0 01.708-.708l.646.647 2.146-2.147a.5.5 0 01.708 0z"
  }));
};

var icon = EuiIconPagesSelect;

/***/ })

}]);