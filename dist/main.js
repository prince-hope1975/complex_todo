/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr: black;\n  --primary-clr: white;\n  --border-clr: black;\n  --border-radius: 4px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  gap: 0 1em;\n}\nbody ul {\n  list-style-type: none;\n}\nbody ul h1 {\n  margin: 1rem;\n  text-decoration: underline;\n}\n@media (max-width: 575px) {\n  body .body {\n    margin-top: 3rem;\n  }\n}\n@media (min-width: 575px) {\n  body .body {\n    margin-left: 20rem;\n  }\n}\nbody .bodyy {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n}\n@media (min-width: 575px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n  body .body {\n    grid-row: span 1;\n    grid-column: span 3;\n    padding-bottom: 2rem;\n  }\n}\n\nnav {\n  padding-left: 1rem;\n  background: rgba(152, 6, 152, 0.5);\n  color: var(--primary-clr);\n  grid-row: span 1;\n  grid-column: span 2;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  nav {\n    width: 20rem;\n    margin-bottom: 2rem;\n    min-height: 100vh;\n    position: fixed;\n  }\n}\n\n@keyframes outro {\n  0% {\n    transform: translate(0);\n  }\n  50% {\n    transform: translateX(50%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\ninput,\nselect,\noption {\n  outline: none;\n  padding: 0.2em 0.7em;\n}\n\n.addBtn {\n  outline: var(--border-clr) solid;\n  outline-offset: -4px;\n  background: var(--primary-clr);\n  color: var(--clr);\n  border-radius: var(--border-radius);\n  position: absolute;\n  top: 110%;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  transition: color 200ms ease, background 200ms ease;\n}\n.addBtn:hover {\n  --primary-clr: hsl(120, 77%, 66%);\n  --clr: white;\n  --border-clr: white;\n}\n@media (max-width: 575px) {\n  .addBtn {\n    width: 5rem;\n    left: 50%;\n    margin-left: 2.5rem;\n  }\n}\n@media (min-width: 575px) {\n  .addBtn {\n    left: 50%;\n    margin: 0;\n    margin-left: -2rem;\n    width: 4rem;\n  }\n}\n\n.mainContainer {\n  position: relative;\n  padding: 1rem;\n  z-index: 1;\n  padding: 1rem;\n  line-height: 3em;\n  margin: auto;\n  margin: 1rem;\n  box-shadow: 1px 1px 1px #333;\n  transition: transform 200ms ease;\n  max-width: 500px;\n  width: clamp(300px, 90%, 500px);\n}\n.mainContainer .deleteBtn {\n  border-radius: 50%;\n  transition: background 500ms ease;\n  transition: color 500ms ease;\n}\n.mainContainer .deleteBtn:hover {\n  background: #d35e5e;\n  color: #d3d2d2;\n}\n.mainContainer div select {\n  position: absolute;\n  right: 10px;\n  top: 80%;\n}\n.mainContainer div button {\n  padding: 0.3rem 1rem;\n  text-transform: uppercase;\n}\n\n.mainContainer:hover {\n  transform: translate(-0.1rem, -0.1rem);\n  box-shadow: 1px 1px 1px #333;\n}\n\nli :hover {\n  cursor: pointer;\n}\n\n.low {\n  background: rgba(0, 0, 255, 0.4);\n}\n\n.high {\n  background: rgba(231, 185, 100, 0.5);\n}\n\n.urgent {\n  background: rgba(198, 16, 16, 0.5);\n}\n\n.deleteBtn {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border: none;\n  background: #ffa9a9;\n  width: 2rem;\n  height: 2rem;\n  display: grid;\n  place-content: center;\n  font-size: 2rem;\n  z-index: 3;\n}\n\n.modal {\n  position: fixed;\n  max-width: 100%;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  max-height: 100%;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 8%;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  .modal {\n    width: 100%;\n  }\n}\n\n.form {\n  position: relative;\n  width: clamp(50px, 70vw, 400px);\n  max-width: 90%;\n  background: #fffdfd;\n  margin: auto;\n  height: clamp(60vh, 100vh);\n  display: flex;\n  gap: 1em;\n  flex-direction: column;\n  padding: 1rem;\n}\n.form div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.projects {\n  position: relative;\n  transition: all 300ms ease;\n  padding-bottom: 1rem;\n}\n.projects li {\n  font-size: 1.3rem;\n  margin: 0.1rem;\n  text-transform: capitalize;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.projects li:hover {\n  cursor: pointer;\n}\n.projects .prompt {\n  display: grid;\n  overflow: hidden;\n  transition: all 300ms ease;\n  z-index: 3;\n  background: var(--primary-clr);\n  max-width: 50%;\n  margin: auto;\n  border-radius: 5px;\n  box-shadow: 3px 2px 3px #333;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  position: relative;\n  max-height: 1000px;\n}\n@media (min-width: 575px) {\n  .projects .prompt {\n    width: 90%;\n    max-width: 250px;\n  }\n}\n.projects .prompt .wrap {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.projects .prompt input[type=text] {\n  letter-spacing: 3px;\n  margin-top: 1rem;\n  max-width: 90%;\n  display: block;\n  margin: auto;\n  background: rgba(128, 128, 128, 0.1);\n}\n.projects .prompt input[type=button],\n.projects .prompt input[type=submit] {\n  border-radius: 4px;\n}\n.projects .prompt input[type=submit] {\n  background: rgba(0, 204, 0, 0.5);\n}\n.projects .prompt input[type=button] {\n  background: rgba(204, 41, 0, 0.5);\n}\n.projects .projectsBtn {\n  position: absolute;\n  bottom: -25px;\n  width: 50px;\n  left: 50%;\n  margin-left: -25px;\n}\n\n.logo {\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\nselect {\n  border: 1px solid #ccc;\n  height: 2rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\noption {\n  background: inherit;\n  height: 2rem;\n}\n\n.visible {\n  transform-origin: top;\n  transform: scale(1, 0);\n  max-height: 0;\n  height: 0px;\n  min-height: 0;\n  color: transparent;\n  margin-bottom: 0;\n  transition: padding 1000ms ease-in-out, max-height 1000ms ease-in-out, transform 1000ms ease, margin-bottom 1000ms ease;\n}\n.visible .prompt * {\n  opacity: 0;\n  transition: opacity 400ms ease-in-out;\n}\n.visible .form {\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;EACE,8CAAA;ACCJ;;ADEA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;ACCF;;ADCA;EACE,aAAA;EACA,UAAA;ACEF;ADAE;EAKE,qBAAA;ACFJ;ADFI;EACE,YAAA;EACA,0BAAA;ACIN;ADCI;EADF;IAEI,gBAAA;ECEJ;AACF;ADDI;EAJF;IAKI,kBAAA;ECIJ;AACF;ADDE;EACE,kBAAA;EACA,aAAA;EACA,2DAAA;ACGJ;ADDE;EAzBF;IA0BI,0BAAA;ECIF;EDFE;IACE,gBAAA;IACA,mBAAA;IACA,oBAAA;ECIJ;AACF;;ADDA;EACE,kBAAA;EACA,kCAAA;EACA,yBAAA;EAEA,gBAAA;EACA,mBAAA;EACA,WAAA;ACGF;ADDE;EATF;IAUI,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,eAAA;ECIF;AACF;;ADFA;EACE;IACE,uBAAA;ECKF;EDHA;IACE,0BAAA;ECKF;EDHA;IACE,2BAAA;ECKF;AACF;ADHA;;;EAGE,aAAA;EACA,oBAAA;ACKF;;ADHA;EAME,gCAAA;EACA,oBAAA;EAEA,8BAAA;EACA,iBAAA;EACA,mCAAA;EACA,kBAAA;EACA,SAAA;EAEA,iBAAA;EACA,mBAAA;EACA,mDAAA;ACDF;ADfE;EACE,iCAAA;EACA,YAAA;EACA,mBAAA;ACiBJ;ADHE;EAlBF;IAmBI,WAAA;IACA,SAAA;IACA,mBAAA;ECMF;AACF;ADLE;EAvBF;IAwBI,SAAA;IACA,SAAA;IACA,kBAAA;IACA,WAAA;ECQF;AACF;;ADNA;EACE,kBAAA;EACA,aAAA;EACA,UAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;EACA,gCAAA;EACA,gBAAA;EACA,+BAAA;ACSF;ADPE;EACE,kBAAA;EACA,iCAAA;EACA,4BAAA;ACSJ;ADPE;EACE,mBAAA;EAEA,cAAA;ACQJ;ADJI;EACE,kBAAA;EACA,WAAA;EACA,QAAA;ACMN;ADHI;EACE,oBAAA;EACA,yBAAA;ACKN;;ADDA;EACE,sCAAA;EACA,4BAAA;ACIF;;ADDE;EACE,eAAA;ACIJ;;ADDA;EACE,gCAAA;ACIF;;ADFA;EACE,oCAAA;ACKF;;ADHA;EACE,kCAAA;ACMF;;ADJA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EACA,eAAA;EACA,UAAA;ACOF;;ADLA;EACE,eAAA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,WAAA;EACA,WAAA;ACQF;ADPE;EAXF;IAYI,WAAA;ECUF;AACF;;ADRA;EACE,kBAAA;EACA,+BAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,QAAA;EACA,sBAAA;EACA,aAAA;ACWF;ADVE;EACE,aAAA;EACA,sBAAA;EACA,UAAA;ACYJ;;ADRA;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;ACWF;ADTE;EACE,iBAAA;EACA,cAAA;EACA,0BAAA;EACA,8CAAA;ACWJ;ADRE;EACE,eAAA;ACUJ;ADRE;EACE,aAAA;EACA,gBAAA;EACA,0BAAA;EACA,UAAA;EACA,8BAAA;EAUA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,4BAAA;EAEA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;ACAJ;ADjBI;EANF;IAOI,UAAA;IACA,gBAAA;ECoBJ;AACF;ADnBI;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;ACqBN;ADVI;EACE,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,cAAA;EACA,YAAA;EACA,oCAAA;ACYN;ADVI;;EAEE,kBAAA;ACYN;ADVI;EACE,gCAAA;ACYN;ADVI;EACE,iCAAA;ACYN;ADTE;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;ACWJ;;ADPA;EACE,eAAA;EACA,yBAAA;ACUF;;ADRA;EACE,sBAAA;EACA,YAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;ACWF;;ADTA;EACE,mBAAA;EACA,YAAA;ACYF;;ADVA;EASE,qBAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,aAAA;EAEA,kBAAA;EACA,gBAAA;EACA,uHAAA;ACIF;ADpBE;EACE,UAAA;EACA,qCAAA;ACsBJ;ADpBE;EACE,UAAA;EACA,qCAAA;ACsBJ;;AAEA,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCategory": () => (/* binding */ changeCategory),
/* harmony export */   "array": () => (/* binding */ array),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "filterList": () => (/* binding */ filterList)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _modules_shorts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/shorts */ "./src/modules/shorts.js");
/* harmony import */ var _modules_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components */ "./src/modules/components.js");
/* harmony import */ var _src_style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/style/style.css */ "./src/style/style.css");
const bodyy = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("bodyy");
const main = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("body");
let array = [];
let category= "inbox";
const changeCategory=(input)=>{
category = input
}
;



const TodoObject = (title, description, dueDate, priority, notes) => {
  undefined.title = title;
  undefined.description = description;
  undefined.dueDate = dueDate;
  undefined.priority = priority;
  undefined.notes = notes;
  undefined.checklist = false;
};
const addTask = () => {};

const TodoItem = (heading = "", content = "", option = "low") => {
  const container = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
  const contentContainer = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
  const Div = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
  const button = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.deleteBtn)();
  const h3 = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("h3");
  const p = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("p");
  const select = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.createSelect)();
  const editBtn = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("button");
  const Form = (0,_modules_components__WEBPACK_IMPORTED_MODULE_2__.form)("Edit Task",heading, content, option);
  editBtn.textContent = "edit";
  (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(editBtn, () => {
    (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(Form.modal, "visible");
  });
  (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(Form.form,(e)=>{
e.preventDefault()
console.log(Form.getFormValues())
const [title, content, priority] = Form.getFormValues()
defaultConfig(title, content, priority)
console.log(Form.form);
 Form.modal.classList.toggle("visible");
  },"submit")
  ;(0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
    select,
    (e) => {
      const val = e.target.value;
      const parent = e.target.parentNode.parentNode;
      parent.className = `mainContainer ${val}`;
    },
    "change"
  );

  button.addEventListener("click", (e) => {
    let arr = array.filter((item, index) => {
      return (
        index != Number(e.target.parentElement.parentElement.parentElement.id)
      );
    });
    array = arr;
    addToList();
  });

  const defaultConfig = ((heading, content, option) => {
    h3.textContent = heading;
    p.textContent = content;
    select.value = option;
  })
  defaultConfig(heading, content, option);
  const editHeading = (val) => {
    h3.textContent = val;
  };
  const editContent = (val) => {
    p.textContent = val;
  };

  // TODO update component
  const card = (() => {
    container.appendChild(h3);
    contentContainer.appendChild(p);

    container.appendChild(contentContainer);
    container.appendChild(select);
    container.appendChild(editBtn);
    contentContainer.appendChild(button);
    Div.appendChild(container);
    main.appendChild(Form.modal);

    Div.classList.add("mainContainer", option);
    return Div;
  })();
  const changePriority = () => {
    // TODO
    null;
  };

  return {
    card,
    editContent,
    editHeading,
    changePriority,
  };
};

const Form = (0,_modules_components__WEBPACK_IMPORTED_MODULE_2__.form)();
const addItems = (() => {
  const addBtn = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.Btn)()
  ;(0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(addBtn, (e) => {
    e.preventDefault();
    (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(Form.modal, "visible");
  });
  bodyy.appendChild(addBtn);
  return {addBtn}
})();

(0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
  Form.form,
  (e) => {
    e.preventDefault();
    const [title, content, options] = Form.getFormValues();
    if (title && content && options) {
      const newProject = TodoItem(title, content, options);
      addToList(newProject,category);
    }
    e.target.parentElement.classList.toggle("visible");
    Form.clearInput()
  },
  "submit"
);
const reducer = (val) => {
  switch (val) {
    case "TODAY":
  }
};
const newProject = TodoItem(
  "Hello World",
  "I'm going to cheange the world some day"
);
newProject.category=category
bodyy.appendChild(newProject.card);

const oldProject = TodoItem("Hello World", "I going to cheange", "high");

bodyy.appendChild(oldProject.card);

// console.log(array);
array = [...array, oldProject, newProject];

const addToList = ((arr, category="inbox") => {
 if (arr){ 
   arr.category=category
  array=[...array, arr]}
  let Obj = array.filter((item)=>item.category===category)
  bodyy.innerHTML=" "
  Obj.forEach((item, index) => {
    item.category =category
    bodyy.appendChild(item.card);
    item.card.id = index;
    console.log(arr);
  });
  bodyy.appendChild(addItems.addBtn)
});
const filterList =(arr)=>{
  bodyy.innerHTML = " ";
  arr.forEach((item, index) => {
    bodyy.appendChild(item.card);
    item.card.id = index;
    console.log(item.card.id);
  });
  bodyy.appendChild(addItems.addBtn);
}


;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.Project)()



/***/ }),

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _shorts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shorts */ "./src/modules/shorts.js");


const form = ((header,heading = "", content = "", priority = "") => {
  const setValues=()=>{
    
  }
  const bodyy = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("body");
  // modal
  const modal = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");

  modal.classList.add("modal");
  modal.classList.add("visible");

  // Form
  const form = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("form");
  form.classList.add("form");
  const h3 = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("h3");
  const title = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  const textInput = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  const btnSave = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  const btnCancel = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  btnSave.setAttribute("type", "submit");
  btnCancel.setAttribute("type", "button");
  btnSave.value = "Add";
  btnCancel.value = "cancel";
  const option = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.createSelect)();
  (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.addClass)(btnSave, "save");
  (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.addClass)(btnCancel, "remove");
  h3.textContent = header||"Add to todo";
  title.value = heading;
  textInput.value = content;
  option.value= priority
  const titleWrap = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(title, "Task title");
  const textInputWrap = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(textInput, "Task Input");
  const optionWrap = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(option,"Set Priority")
  const del = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.deleteBtn)();
  // ! Remember to change this
  del.addEventListener("click",(e)=>{
    e.preventDefault();
        console.log(e.target)
        e.target.parentElement.parentElement.classList.toggle("visible");
  })
  let formValues = []
  ;(0,_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(form, ()=>{
   formValues = [title.value,textInput.value,option.value]
  },"submit")
  const getFormValues=()=>(formValues)
const clearInput= ()=>{
  title.value=""
  textInput.value=""
  option.value=""
}
  //! The "wrap" function is used to append all the elements in the array to the main element
  ;(0,_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(form, [h3, titleWrap, textInputWrap, optionWrap, btnSave, btnCancel, del]);
  (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(modal, [form]);
  (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(bodyy, [modal]);
  
  return { modal, getFormValues, form, clearInput };
});

/***/ }),

/***/ "./src/modules/shorts.js":
/*!*******************************!*\
  !*** ./src/modules/shorts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNode": () => (/* binding */ getClassNode),
/* harmony export */   "deleteBtn": () => (/* binding */ deleteBtn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "labelWrap": () => (/* binding */ labelWrap),
/* harmony export */   "newNode": () => (/* binding */ newNode),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "events": () => (/* binding */ events),
/* harmony export */   "allAttribute": () => (/* binding */ allAttribute),
/* harmony export */   "Btn": () => (/* binding */ Btn),
/* harmony export */   "createSelect": () => (/* binding */ createSelect)
/* harmony export */ });
const getClassNode = (classItem) => {
  const item = document.querySelector(`.${classItem}`);
  return item;
};
const deleteBtn =()=>{
const button =newNode("button");

   button.innerHTML = "&times;";
   button.classList.add("deleteBtn");
  return button
}
const wrap = (element, array) => {
  array.forEach((item) => {
    element.appendChild(item);
  });
};
const labelWrap =(element,title)=>{
  const div = newNode("div")
  const label = newNode("label")
  label.textContent = title
  wrap(div,[label,element])
  return div
}
const newNode = (item) => {
  return document.createElement(`${item}`);
};
const addClass = (element, className) => {
  element.classList.add = className;
};
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};
const events = (element, funct, eventListener = "click") => {
  element.addEventListener(eventListener, funct);
};
const allAttribute =(attribute, array,set=true)=>{
  array.forEach((item)=>{
    item.setAttribute(attribute,set)
  })
}
const Btn=() =>{
  const addBtn = newNode("button");
  addBtn.classList.add("addBtn");
  addBtn.innerHTML = "&plus;";
  return addBtn
}

const createSelect = () => {
  const select = newNode("select");
  // select.id = "hmm";
  const arr = ["low", "high", "urgent"];
  arr.forEach((item) => {
    const option = newNode("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
  return select;
};


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _modules_shorts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/shorts */ "./src/modules/shorts.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");


  const projectContainer = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("projects");
    const input = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");



const addbtn = (() => {
  const btn = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  btn.setAttribute("type", "submit");
  btn.value = " Add";
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    projctForm.classList.toggle("visible");
    projectContainer.appendChild(Project(input.value))
    input.value=""
  });
  return btn
})
const canelBtn = () => {
  const btn = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("input");
  btn.setAttribute("type", "button");
  btn.value = " Cancel";
   btn.addEventListener("click", () => {
     projctForm.classList.toggle("visible");
   });
  return btn;
};


const projctForm = (() => {
const btnWrapper = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div")
const add= addbtn()
const cancel= canelBtn()
// const cancleBtnWrapper = newNode("div")
;(0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(btnWrapper,[add, cancel])
btnWrapper.classList.add("wrap")
    const promptUser = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("form")
    input.setAttribute("type", "text")
    ;(0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(promptUser, [, input, btnWrapper])
    promptUser.classList.add("prompt")
    return promptUser
})()

const ProjAddBtn = () => {
  const addProjectButton = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.Btn)();

  addProjectButton.classList.remove("addBtn");
  addProjectButton.classList.add("projectsBtn");
  addProjectButton.addEventListener("click", ()=>{
    projctForm.classList.toggle("visible")
  })
  return addProjectButton
};
 
const Project = (text) => {
  const addProjectButton = ProjAddBtn();
  const li = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("li");
  li.textContent = text;
  projectContainer.appendChild(addProjectButton);
  projectContainer.appendChild(projctForm);
  li.addEventListener("click", (e)=>{
    (0,_index__WEBPACK_IMPORTED_MODULE_1__.changeCategory)(text)
    // const newArr = [array[1]]
    console.log(_index__WEBPACK_IMPORTED_MODULE_1__.array)
;(0,_index__WEBPACK_IMPORTED_MODULE_1__.addToList)(null, text)
  })
  return li
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLDZCQUE2QjtBQUM1OFE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7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QUM7QUFDRDtBQUNBLGNBQWMsd0RBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsd0RBQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0Esc0RBQUk7QUFDSjtBQUNBLHVCQUF1Qix3REFBTztBQUM5QjtBQUNBLElBQUksc0RBQUk7QUFDUjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDJCQUEyQixvREFBRzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsd0RBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFjO0FBQ2xCO0FBQ0EsZ0JBQWdCLHlDQUFLO0FBQ3JCLGtEQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9tb2R1bGVzL3Nob3J0cy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2xyOiBibGFjaztcXG4gIC0tcHJpbWFyeS1jbHI6IHdoaXRlO1xcbiAgLS1ib3JkZXItY2xyOiBibGFjaztcXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwIDFlbTtcXG59XFxuYm9keSB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbmJvZHkgdWwgaDEge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xcbiAgYm9keSAuYm9keSB7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xcbiAgYm9keSAuYm9keSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHJlbTtcXG4gIH1cXG59XFxuYm9keSAuYm9keXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIGJvZHkgLmJvZHkge1xcbiAgICBncmlkLXJvdzogc3BhbiAxO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG59XFxuXFxubmF2IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTUyLCA2LCAxNTIsIDAuNSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICBuYXYge1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgb3V0cm8ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcXG4gIH1cXG59XFxuaW5wdXQsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMC4yZW0gMC43ZW07XFxufVxcblxcbi5hZGRCdG4ge1xcbiAgb3V0bGluZTogdmFyKC0tYm9yZGVyLWNscikgc29saWQ7XFxuICBvdXRsaW5lLW9mZnNldDogLTRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLCBiYWNrZ3JvdW5kIDIwMG1zIGVhc2U7XFxufVxcbi5hZGRCdG46aG92ZXIge1xcbiAgLS1wcmltYXJ5LWNscjogaHNsKDEyMCwgNzclLCA2NiUpO1xcbiAgLS1jbHI6IHdoaXRlO1xcbiAgLS1ib3JkZXItY2xyOiB3aGl0ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICAuYWRkQnRuIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICAuYWRkQnRuIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICB9XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW46IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2U7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDUwMHB4KTtcXG59XFxuLm1haW5Db250YWluZXIgLmRlbGV0ZUJ0biB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDUwMG1zIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlO1xcbn1cXG4ubWFpbkNvbnRhaW5lciAuZGVsZXRlQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkMzVlNWU7XFxuICBjb2xvcjogI2QzZDJkMjtcXG59XFxuLm1haW5Db250YWluZXIgZGl2IHNlbGVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogODAlO1xcbn1cXG4ubWFpbkNvbnRhaW5lciBkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1haW5Db250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMXJlbSwgLTAuMXJlbSk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzO1xcbn1cXG5cXG5saSA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjQpO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgMTg1LCAxMDAsIDAuNSk7XFxufVxcblxcbi51cmdlbnQge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOTgsIDE2LCAxNiwgMC41KTtcXG59XFxuXFxuLmRlbGV0ZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZhOWE5O1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiA4JTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2xhbXAoNTBweCwgNzB2dywgNDAwcHgpO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZGZkO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjbGFtcCg2MHZoLCAxMDB2aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5wcm9qZWN0cyBsaSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMC4xcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ucHJvamVjdHMgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMgLnByb21wdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDJweCAzcHggIzMzMztcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5wcm9qZWN0cyAucHJvbXB0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuLnByb2plY3RzIC5wcm9tcHQgLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RzIC5wcm9tcHQgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9YnV0dG9uXSxcXG4ucHJvamVjdHMgLnByb21wdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucHJvamVjdHMgLnByb21wdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDQsIDAsIDAuNSk7XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgNDEsIDAsIDAuNSk7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdHNCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGhlaWdodDogMnJlbTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIGhlaWdodDogMHB4O1xcbiAgbWluLWhlaWdodDogMDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDEwMDBtcyBlYXNlLWluLW91dCwgbWF4LWhlaWdodCAxMDAwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxMDAwbXMgZWFzZSwgbWFyZ2luLWJvdHRvbSAxMDAwbXMgZWFzZTtcXG59XFxuLnZpc2libGUgLnByb21wdCAqIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udmlzaWJsZSAuZm9ybSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0UsOENBQUE7QUNDSjs7QURFQTtFQUNFLFVBQUE7RUFD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QUE7RUFVQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRGpCSTtFQU5GO0lBT0ksVUFBQTtJQUNBLGdCQUFBO0VDb0JKO0FBQ0Y7QURuQkk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ3FCTjtBRFZJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDWU47QURWSTs7RUFFRSxrQkFBQTtBQ1lOO0FEVkk7RUFDRSxnQ0FBQTtBQ1lOO0FEVkk7RUFDRSxpQ0FBQTtBQ1lOO0FEVEU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDV0o7O0FEUEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNVRjs7QURSQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1dGOztBRFRBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVkE7RUFTRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVIQUFBO0FDSUY7QURwQkU7RUFDRSxVQUFBO0VBQ0EscUNBQUE7QUNzQko7QURwQkU7RUFDRSxVQUFBO0VBQ0EscUNBQUE7QUNzQko7O0FBRUEsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYm9keXkgPSBnZXRDbGFzc05vZGUoXCJib2R5eVwiKTtcbmNvbnN0IG1haW4gPSBnZXRDbGFzc05vZGUoXCJib2R5XCIpO1xubGV0IGFycmF5ID0gW107XG5sZXQgY2F0ZWdvcnk9IFwiaW5ib3hcIjtcbmV4cG9ydCBjb25zdCBjaGFuZ2VDYXRlZ29yeT0oaW5wdXQpPT57XG5jYXRlZ29yeSA9IGlucHV0XG59XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7XG4gIC8vICAgd3JhcCxcbiAgZ2V0Q2xhc3NOb2RlLFxuICBuZXdOb2RlLFxuICBldmVudHMsXG4gIHRvZ2dsZUNsYXNzLFxuICBjcmVhdGVTZWxlY3QsXG4gIGRlbGV0ZUJ0bixcbiAgQnRuLFxuICB3cmFwLFxufSBmcm9tIFwiLi9tb2R1bGVzL3Nob3J0c1wiO1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50c1wiO1xuaW1wb3J0IFwiLi4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiO1xuY29uc3QgVG9kb09iamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIHRoaXMuY2hlY2tsaXN0ID0gZmFsc2U7XG59O1xuY29uc3QgYWRkVGFzayA9ICgpID0+IHt9O1xuXG5jb25zdCBUb2RvSXRlbSA9IChoZWFkaW5nID0gXCJcIiwgY29udGVudCA9IFwiXCIsIG9wdGlvbiA9IFwibG93XCIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gbmV3Tm9kZShcImRpdlwiKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IG5ld05vZGUoXCJkaXZcIik7XG4gIGNvbnN0IERpdiA9IG5ld05vZGUoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRlbGV0ZUJ0bigpO1xuICBjb25zdCBoMyA9IG5ld05vZGUoXCJoM1wiKTtcbiAgY29uc3QgcCA9IG5ld05vZGUoXCJwXCIpO1xuICBjb25zdCBzZWxlY3QgPSBjcmVhdGVTZWxlY3QoKTtcbiAgY29uc3QgZWRpdEJ0biA9IG5ld05vZGUoXCJidXR0b25cIik7XG4gIGNvbnN0IEZvcm0gPSBmb3JtKFwiRWRpdCBUYXNrXCIsaGVhZGluZywgY29udGVudCwgb3B0aW9uKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuICBldmVudHMoZWRpdEJ0biwgKCkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzKEZvcm0ubW9kYWwsIFwidmlzaWJsZVwiKTtcbiAgfSk7XG4gIGV2ZW50cyhGb3JtLmZvcm0sKGUpPT57XG5lLnByZXZlbnREZWZhdWx0KClcbmNvbnNvbGUubG9nKEZvcm0uZ2V0Rm9ybVZhbHVlcygpKVxuY29uc3QgW3RpdGxlLCBjb250ZW50LCBwcmlvcml0eV0gPSBGb3JtLmdldEZvcm1WYWx1ZXMoKVxuZGVmYXVsdENvbmZpZyh0aXRsZSwgY29udGVudCwgcHJpb3JpdHkpXG5jb25zb2xlLmxvZyhGb3JtLmZvcm0pO1xuIEZvcm0ubW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gIH0sXCJzdWJtaXRcIilcbiAgZXZlbnRzKFxuICAgIHNlbGVjdCxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBwYXJlbnQuY2xhc3NOYW1lID0gYG1haW5Db250YWluZXIgJHt2YWx9YDtcbiAgICB9LFxuICAgIFwiY2hhbmdlXCJcbiAgKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGFyciA9IGFycmF5LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluZGV4ICE9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgYXJyYXkgPSBhcnI7XG4gICAgYWRkVG9MaXN0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlZmF1bHRDb25maWcgPSAoKGhlYWRpbmcsIGNvbnRlbnQsIG9wdGlvbikgPT4ge1xuICAgIGgzLnRleHRDb250ZW50ID0gaGVhZGluZztcbiAgICBwLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBzZWxlY3QudmFsdWUgPSBvcHRpb247XG4gIH0pXG4gIGRlZmF1bHRDb25maWcoaGVhZGluZywgY29udGVudCwgb3B0aW9uKTtcbiAgY29uc3QgZWRpdEhlYWRpbmcgPSAodmFsKSA9PiB7XG4gICAgaDMudGV4dENvbnRlbnQgPSB2YWw7XG4gIH07XG4gIGNvbnN0IGVkaXRDb250ZW50ID0gKHZhbCkgPT4ge1xuICAgIHAudGV4dENvbnRlbnQgPSB2YWw7XG4gIH07XG5cbiAgLy8gVE9ETyB1cGRhdGUgY29tcG9uZW50XG4gIGNvbnN0IGNhcmQgPSAoKCkgPT4ge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIERpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoRm9ybS5tb2RhbCk7XG5cbiAgICBEaXYuY2xhc3NMaXN0LmFkZChcIm1haW5Db250YWluZXJcIiwgb3B0aW9uKTtcbiAgICByZXR1cm4gRGl2O1xuICB9KSgpO1xuICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9ICgpID0+IHtcbiAgICAvLyBUT0RPXG4gICAgbnVsbDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNhcmQsXG4gICAgZWRpdENvbnRlbnQsXG4gICAgZWRpdEhlYWRpbmcsXG4gICAgY2hhbmdlUHJpb3JpdHksXG4gIH07XG59O1xuXG5jb25zdCBGb3JtID0gZm9ybSgpO1xuY29uc3QgYWRkSXRlbXMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRCdG4gPSBCdG4oKVxuICBldmVudHMoYWRkQnRuLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVDbGFzcyhGb3JtLm1vZGFsLCBcInZpc2libGVcIik7XG4gIH0pO1xuICBib2R5eS5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICByZXR1cm4ge2FkZEJ0bn1cbn0pKCk7XG5cbmV2ZW50cyhcbiAgRm9ybS5mb3JtLFxuICAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBbdGl0bGUsIGNvbnRlbnQsIG9wdGlvbnNdID0gRm9ybS5nZXRGb3JtVmFsdWVzKCk7XG4gICAgaWYgKHRpdGxlICYmIGNvbnRlbnQgJiYgb3B0aW9ucykge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFRvZG9JdGVtKHRpdGxlLCBjb250ZW50LCBvcHRpb25zKTtcbiAgICAgIGFkZFRvTGlzdChuZXdQcm9qZWN0LGNhdGVnb3J5KTtcbiAgICB9XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICBGb3JtLmNsZWFySW5wdXQoKVxuICB9LFxuICBcInN1Ym1pdFwiXG4pO1xuY29uc3QgcmVkdWNlciA9ICh2YWwpID0+IHtcbiAgc3dpdGNoICh2YWwpIHtcbiAgICBjYXNlIFwiVE9EQVlcIjpcbiAgfVxufTtcbmNvbnN0IG5ld1Byb2plY3QgPSBUb2RvSXRlbShcbiAgXCJIZWxsbyBXb3JsZFwiLFxuICBcIkknbSBnb2luZyB0byBjaGVhbmdlIHRoZSB3b3JsZCBzb21lIGRheVwiXG4pO1xubmV3UHJvamVjdC5jYXRlZ29yeT1jYXRlZ29yeVxuYm9keXkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdC5jYXJkKTtcblxuY29uc3Qgb2xkUHJvamVjdCA9IFRvZG9JdGVtKFwiSGVsbG8gV29ybGRcIiwgXCJJIGdvaW5nIHRvIGNoZWFuZ2VcIiwgXCJoaWdoXCIpO1xuXG5ib2R5eS5hcHBlbmRDaGlsZChvbGRQcm9qZWN0LmNhcmQpO1xuXG4vLyBjb25zb2xlLmxvZyhhcnJheSk7XG5hcnJheSA9IFsuLi5hcnJheSwgb2xkUHJvamVjdCwgbmV3UHJvamVjdF07XG5cbmNvbnN0IGFkZFRvTGlzdCA9ICgoYXJyLCBjYXRlZ29yeT1cImluYm94XCIpID0+IHtcbiBpZiAoYXJyKXsgXG4gICBhcnIuY2F0ZWdvcnk9Y2F0ZWdvcnlcbiAgYXJyYXk9Wy4uLmFycmF5LCBhcnJdfVxuICBsZXQgT2JqID0gYXJyYXkuZmlsdGVyKChpdGVtKT0+aXRlbS5jYXRlZ29yeT09PWNhdGVnb3J5KVxuICBib2R5eS5pbm5lckhUTUw9XCIgXCJcbiAgT2JqLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5jYXRlZ29yeSA9Y2F0ZWdvcnlcbiAgICBib2R5eS5hcHBlbmRDaGlsZChpdGVtLmNhcmQpO1xuICAgIGl0ZW0uY2FyZC5pZCA9IGluZGV4O1xuICAgIGNvbnNvbGUubG9nKGFycik7XG4gIH0pO1xuICBib2R5eS5hcHBlbmRDaGlsZChhZGRJdGVtcy5hZGRCdG4pXG59KTtcbmNvbnN0IGZpbHRlckxpc3QgPShhcnIpPT57XG4gIGJvZHl5LmlubmVySFRNTCA9IFwiIFwiO1xuICBhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBib2R5eS5hcHBlbmRDaGlsZChpdGVtLmNhcmQpO1xuICAgIGl0ZW0uY2FyZC5pZCA9IGluZGV4O1xuICAgIGNvbnNvbGUubG9nKGl0ZW0uY2FyZC5pZCk7XG4gIH0pO1xuICBib2R5eS5hcHBlbmRDaGlsZChhZGRJdGVtcy5hZGRCdG4pO1xufVxuXG5cblByb2plY3QoKVxuZXhwb3J0IHthcnJheSxhZGRUb0xpc3QsIGZpbHRlckxpc3R9XG4iLCJpbXBvcnQge1xuICB3cmFwLFxuICBnZXRDbGFzc05vZGUsXG4gIG5ld05vZGUsXG4gIGV2ZW50cyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGFkZENsYXNzLFxuICBjcmVhdGVTZWxlY3QsXG4gIGRlbGV0ZUJ0bixcbiAgbGFiZWxXcmFwLFxuICBhbGxBdHRyaWJ1dGVcbn0gZnJvbSBcIi4vc2hvcnRzXCI7XG5cbmV4cG9ydCBjb25zdCBmb3JtID0gKChoZWFkZXIsaGVhZGluZyA9IFwiXCIsIGNvbnRlbnQgPSBcIlwiLCBwcmlvcml0eSA9IFwiXCIpID0+IHtcbiAgY29uc3Qgc2V0VmFsdWVzPSgpPT57XG4gICAgXG4gIH1cbiAgY29uc3QgYm9keXkgPSBnZXRDbGFzc05vZGUoXCJib2R5XCIpO1xuICAvLyBtb2RhbFxuICBjb25zdCBtb2RhbCA9IG5ld05vZGUoXCJkaXZcIik7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcblxuICAvLyBGb3JtXG4gIGNvbnN0IGZvcm0gPSBuZXdOb2RlKFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgY29uc3QgaDMgPSBuZXdOb2RlKFwiaDNcIik7XG4gIGNvbnN0IHRpdGxlID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBjb25zdCB0ZXh0SW5wdXQgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ0blNhdmUgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ0bkNhbmNlbCA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgYnRuU2F2ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidG5DYW5jZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuU2F2ZS52YWx1ZSA9IFwiQWRkXCI7XG4gIGJ0bkNhbmNlbC52YWx1ZSA9IFwiY2FuY2VsXCI7XG4gIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZVNlbGVjdCgpO1xuICBhZGRDbGFzcyhidG5TYXZlLCBcInNhdmVcIik7XG4gIGFkZENsYXNzKGJ0bkNhbmNlbCwgXCJyZW1vdmVcIik7XG4gIGgzLnRleHRDb250ZW50ID0gaGVhZGVyfHxcIkFkZCB0byB0b2RvXCI7XG4gIHRpdGxlLnZhbHVlID0gaGVhZGluZztcbiAgdGV4dElucHV0LnZhbHVlID0gY29udGVudDtcbiAgb3B0aW9uLnZhbHVlPSBwcmlvcml0eVxuICBjb25zdCB0aXRsZVdyYXAgPSBsYWJlbFdyYXAodGl0bGUsIFwiVGFzayB0aXRsZVwiKTtcbiAgY29uc3QgdGV4dElucHV0V3JhcCA9IGxhYmVsV3JhcCh0ZXh0SW5wdXQsIFwiVGFzayBJbnB1dFwiKTtcbiAgY29uc3Qgb3B0aW9uV3JhcCA9IGxhYmVsV3JhcChvcHRpb24sXCJTZXQgUHJpb3JpdHlcIilcbiAgY29uc3QgZGVsID0gZGVsZXRlQnRuKCk7XG4gIC8vICEgUmVtZW1iZXIgdG8gY2hhbmdlIHRoaXNcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgfSlcbiAgbGV0IGZvcm1WYWx1ZXMgPSBbXVxuICBldmVudHMoZm9ybSwgKCk9PntcbiAgIGZvcm1WYWx1ZXMgPSBbdGl0bGUudmFsdWUsdGV4dElucHV0LnZhbHVlLG9wdGlvbi52YWx1ZV1cbiAgfSxcInN1Ym1pdFwiKVxuICBjb25zdCBnZXRGb3JtVmFsdWVzPSgpPT4oZm9ybVZhbHVlcylcbmNvbnN0IGNsZWFySW5wdXQ9ICgpPT57XG4gIHRpdGxlLnZhbHVlPVwiXCJcbiAgdGV4dElucHV0LnZhbHVlPVwiXCJcbiAgb3B0aW9uLnZhbHVlPVwiXCJcbn1cbiAgLy8hIFRoZSBcIndyYXBcIiBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSB0byB0aGUgbWFpbiBlbGVtZW50XG4gIHdyYXAoZm9ybSwgW2gzLCB0aXRsZVdyYXAsIHRleHRJbnB1dFdyYXAsIG9wdGlvbldyYXAsIGJ0blNhdmUsIGJ0bkNhbmNlbCwgZGVsXSk7XG4gIHdyYXAobW9kYWwsIFtmb3JtXSk7XG4gIHdyYXAoYm9keXksIFttb2RhbF0pO1xuICBcbiAgcmV0dXJuIHsgbW9kYWwsIGdldEZvcm1WYWx1ZXMsIGZvcm0sIGNsZWFySW5wdXQgfTtcbn0pOyIsImV4cG9ydCBjb25zdCBnZXRDbGFzc05vZGUgPSAoY2xhc3NJdGVtKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0l0ZW19YCk7XG4gIHJldHVybiBpdGVtO1xufTtcbmV4cG9ydCBjb25zdCBkZWxldGVCdG4gPSgpPT57XG5jb25zdCBidXR0b24gPW5ld05vZGUoXCJidXR0b25cIik7XG5cbiAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpO1xuICByZXR1cm4gYnV0dG9uXG59XG5leHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCBhcnJheSkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGxhYmVsV3JhcCA9KGVsZW1lbnQsdGl0bGUpPT57XG4gIGNvbnN0IGRpdiA9IG5ld05vZGUoXCJkaXZcIilcbiAgY29uc3QgbGFiZWwgPSBuZXdOb2RlKFwibGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZVxuICB3cmFwKGRpdixbbGFiZWwsZWxlbWVudF0pXG4gIHJldHVybiBkaXZcbn1cbmV4cG9ydCBjb25zdCBuZXdOb2RlID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7aXRlbX1gKTtcbn07XG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCA9IGNsYXNzTmFtZTtcbn07XG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xufTtcbmV4cG9ydCBjb25zdCBldmVudHMgPSAoZWxlbWVudCwgZnVuY3QsIGV2ZW50TGlzdGVuZXIgPSBcImNsaWNrXCIpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIsIGZ1bmN0KTtcbn07XG5leHBvcnQgY29uc3QgYWxsQXR0cmlidXRlID0oYXR0cmlidXRlLCBhcnJheSxzZXQ9dHJ1ZSk9PntcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSk9PntcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsc2V0KVxuICB9KVxufVxuZXhwb3J0IGNvbnN0IEJ0bj0oKSA9PntcbiAgY29uc3QgYWRkQnRuID0gbmV3Tm9kZShcImJ1dHRvblwiKTtcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRCdG5cIik7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBcIiZwbHVzO1wiO1xuICByZXR1cm4gYWRkQnRuXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWxlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IG5ld05vZGUoXCJzZWxlY3RcIik7XG4gIC8vIHNlbGVjdC5pZCA9IFwiaG1tXCI7XG4gIGNvbnN0IGFyciA9IFtcImxvd1wiLCBcImhpZ2hcIiwgXCJ1cmdlbnRcIl07XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gbmV3Tm9kZShcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBpdGVtO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcbiIsImltcG9ydCB7IEJ0biwgZ2V0Q2xhc3NOb2RlLCBuZXdOb2RlICwgd3JhcH0gZnJvbSBcIi4vbW9kdWxlcy9zaG9ydHNcIjtcbmltcG9ydCB7IGFycmF5LCBhZGRUb0xpc3QsIGZpbHRlckxpc3QgLCBjaGFuZ2VDYXRlZ29yeX0gZnJvbSBcIi4vaW5kZXhcIjtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdldENsYXNzTm9kZShcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gbmV3Tm9kZShcImlucHV0XCIpO1xuXG5cblxuY29uc3QgYWRkYnRuID0gKCgpID0+IHtcbiAgY29uc3QgYnRuID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYnRuLnZhbHVlID0gXCIgQWRkXCI7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKFByb2plY3QoaW5wdXQudmFsdWUpKVxuICAgIGlucHV0LnZhbHVlPVwiXCJcbiAgfSk7XG4gIHJldHVybiBidG5cbn0pXG5jb25zdCBjYW5lbEJ0biA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnZhbHVlID0gXCIgQ2FuY2VsXCI7XG4gICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgcHJvamN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgIH0pO1xuICByZXR1cm4gYnRuO1xufTtcblxuXG5jb25zdCBwcm9qY3RGb3JtID0gKCgpID0+IHtcbmNvbnN0IGJ0bldyYXBwZXIgPSBuZXdOb2RlKFwiZGl2XCIpXG5jb25zdCBhZGQ9IGFkZGJ0bigpXG5jb25zdCBjYW5jZWw9IGNhbmVsQnRuKClcbi8vIGNvbnN0IGNhbmNsZUJ0bldyYXBwZXIgPSBuZXdOb2RlKFwiZGl2XCIpXG53cmFwKGJ0bldyYXBwZXIsW2FkZCwgY2FuY2VsXSlcbmJ0bldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBcIilcbiAgICBjb25zdCBwcm9tcHRVc2VyID0gbmV3Tm9kZShcImZvcm1cIilcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIHdyYXAocHJvbXB0VXNlciwgWywgaW5wdXQsIGJ0bldyYXBwZXJdKVxuICAgIHByb21wdFVzZXIuY2xhc3NMaXN0LmFkZChcInByb21wdFwiKVxuICAgIHJldHVybiBwcm9tcHRVc2VyXG59KSgpXG5cbmNvbnN0IFByb2pBZGRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBCdG4oKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRCdG5cIik7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RzQnRuXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIHByb2pjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIilcbiAgfSlcbiAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25cbn07XG4gXG5leHBvcnQgY29uc3QgUHJvamVjdCA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBQcm9qQWRkQnRuKCk7XG4gIGNvbnN0IGxpID0gbmV3Tm9kZShcImxpXCIpO1xuICBsaS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamN0Rm9ybSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBjaGFuZ2VDYXRlZ29yeSh0ZXh0KVxuICAgIC8vIGNvbnN0IG5ld0FyciA9IFthcnJheVsxXV1cbiAgICBjb25zb2xlLmxvZyhhcnJheSlcbmFkZFRvTGlzdChudWxsLCB0ZXh0KVxuICB9KVxuICByZXR1cm4gbGlcbn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==