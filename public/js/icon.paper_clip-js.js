"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["icon.paper_clip-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/paper_clip.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/paper_clip.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconPaperClip = function EuiIconPaperClip(_ref) {
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
    d: "M9.84 2.019L3.046 8.57c-.987.952-1.133 2.517-.199 3.516.951 1.021 2.58 1.106 3.64.19.034-.03.068-.061.1-.092l5.655-5.452a.484.484 0 000-.703.53.53 0 00-.729 0L5.92 11.421c-.572.551-1.505.657-2.131.163a1.455 1.455 0 01-.118-2.211l6.899-6.651a2.646 2.646 0 013.644 0 2.422 2.422 0 010 3.513L7.3 12.901c-1.333 1.285-3.497 1.493-4.95.336-1.54-1.22-1.764-3.411-.5-4.897a3.33 3.33 0 01.238-.252l5.78-5.572a.484.484 0 000-.703.53.53 0 00-.73 0l-5.78 5.572a4.36 4.36 0 000 6.324c2.188 2.109 5.202 1.31 6.66-.095l6.925-6.676a3.39 3.39 0 000-4.92C13.534.66 11.25.66 9.841 2.019z"
  }));
};

var icon = EuiIconPaperClip;

/***/ })

}]);