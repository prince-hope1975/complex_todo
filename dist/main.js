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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --clr: black;\n  --primary-clr: white;\n  --border-clr: black;\n  --border-radius: 4px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  gap: 0 1em;\n}\nbody ul {\n  list-style-type: none;\n}\nbody ul h1 {\n  margin: 1rem;\n  text-decoration: underline;\n}\n@media (max-width: 575px) {\n  body .body {\n    margin-top: 3rem;\n  }\n}\n@media (min-width: 575px) {\n  body .body {\n    margin-left: 20rem;\n  }\n}\nbody .bodyy {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n}\n@media (min-width: 575px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n  body .body {\n    grid-row: span 1;\n    grid-column: span 3;\n    padding-bottom: 2rem;\n  }\n}\n\nnav {\n  padding-left: 1rem;\n  background: rgba(152, 6, 152, 0.5);\n  color: var(--primary-clr);\n  grid-row: span 1;\n  grid-column: span 2;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  nav {\n    width: 20rem;\n    margin-bottom: 2rem;\n    min-height: 100vh;\n    position: fixed;\n  }\n}\n\n@keyframes outro {\n  0% {\n    transform: translate(0);\n  }\n  50% {\n    transform: translateX(50%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\ninput,\nselect,\noption {\n  outline: none;\n  padding: 0.2em 0.7em;\n}\n\n.addBtn {\n  background: var(--primary-clr);\n  color: var(--clr);\n  border: 2px solid var(--clr);\n  position: absolute;\n  top: 110%;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  transition: color 200ms ease, background 200ms ease;\n}\n.addBtn:hover {\n  --primary-clr: hsl(120, 77%, 66%);\n  --clr: white;\n  --border-clr: white;\n  outline: var(--primary-clr) 1px solid;\n}\n@media (max-width: 575px) {\n  .addBtn {\n    width: 5rem;\n    left: 50%;\n    margin-left: -2.5rem;\n  }\n}\n@media (min-width: 575px) {\n  .addBtn {\n    left: 50%;\n    width: 4rem;\n  }\n}\n@media (min-width: 693px) {\n  .addBtn {\n    margin-left: -2rem;\n  }\n}\n\n.mainContainer {\n  position: relative;\n  padding: 1rem;\n  z-index: 1;\n  padding: 1rem;\n  line-height: 3em;\n  margin: auto;\n  margin: 1rem;\n  box-shadow: 1px 1px 1px #333;\n  transition: transform 200ms ease;\n  max-width: 500px;\n  width: clamp(300px, 90%, 500px);\n}\n.mainContainer .deleteBtn {\n  border-radius: 50%;\n  transition: background 500ms ease;\n  transition: color 500ms ease;\n}\n.mainContainer .deleteBtn:hover {\n  background: #d35e5e;\n  color: #d3d2d2;\n}\n.mainContainer div select {\n  position: absolute;\n  right: 10px;\n  top: 80%;\n}\n.mainContainer div button {\n  padding: 0.3rem 1rem;\n  text-transform: uppercase;\n}\n\n.mainContainer:hover {\n  transform: translate(-0.1rem, -0.1rem);\n  box-shadow: 1px 1px 1px #333;\n}\n\nli :hover {\n  cursor: pointer;\n}\n\n.low {\n  background: rgba(0, 0, 255, 0.4);\n}\n\n.high {\n  background: rgba(231, 185, 100, 0.5);\n}\n\n.urgent {\n  background: rgba(198, 16, 16, 0.5);\n}\n\n.deleteBtn {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border: none;\n  background: #ffa9a9;\n  width: 2rem;\n  height: 2rem;\n  display: grid;\n  place-content: center;\n  font-size: 2rem;\n  z-index: 3;\n}\n\n.modal {\n  position: fixed;\n  max-width: 100%;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  max-height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 8%;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  .modal {\n    width: 100%;\n  }\n}\n\n.form {\n  position: relative;\n  width: clamp(50px, 70vw, 400px);\n  max-width: 90%;\n  background: #fffdfd;\n  margin: auto;\n  margin-bottom: 1000px;\n  height: clamp(60vh, 100vh);\n  display: flex;\n  gap: 1em;\n  flex-direction: column;\n  padding: 1rem;\n}\n.form div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.projects {\n  position: relative;\n  transition: all 300ms ease;\n  padding-bottom: 1rem;\n}\n.projects li {\n  font-size: 1.3rem;\n  margin: 0.1rem;\n  text-transform: capitalize;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.projects li:hover {\n  cursor: pointer;\n}\n.projects .prompt {\n  display: grid;\n  overflow: hidden;\n  transition: all 300ms ease;\n  z-index: 3;\n  background: var(--primary-clr);\n  max-width: 50%;\n  margin: auto;\n  border-radius: 5px;\n  box-shadow: 3px 2px 3px #333;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  position: relative;\n  max-height: 1000px;\n}\n@media (min-width: 575px) {\n  .projects .prompt {\n    width: 90%;\n    max-width: 250px;\n  }\n}\n.projects .prompt .wrap {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 90%;\n}\n.projects .prompt input[type=text] {\n  letter-spacing: 3px;\n  margin-top: 1rem;\n  max-width: 80%;\n  display: block;\n  height: 2rem;\n  background: rgba(128, 128, 128, 0.1);\n}\n.projects .prompt input[type=button],\n.projects .prompt input[type=submit] {\n  border-radius: 4px;\n}\n.projects .prompt input[type=submit] {\n  background: rgba(0, 204, 0, 0.5);\n}\n.projects .prompt input[type=button] {\n  background: rgba(204, 41, 0, 0.5);\n}\n.projects .projectsBtn {\n  position: absolute;\n  bottom: -25px;\n  width: 50px;\n  left: 50%;\n  margin-left: -25px;\n  color: var(--clr);\n  background: var(--primary-clr);\n  border: 2px solid var(--clr);\n}\n.projects .projectsBtn:hover {\n  --primary-clr:rgba(152, 6, 152, 0.5);\n  --clr: white;\n  outline: var(--primary-clr) 1px solid;\n}\n\n.logo {\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\nselect {\n  border: 1px solid #ccc;\n  height: 2rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\noption {\n  background: inherit;\n  height: 2rem;\n}\n\n.visible {\n  transform-origin: top;\n  transform: scale(1, 0);\n  max-height: 0;\n  height: 0px;\n  min-height: 0;\n  color: transparent;\n  margin-bottom: 0;\n  transition: padding 1000ms ease-in-out, max-height 1000ms ease-in-out, transform 1000ms ease, margin-bottom 1000ms ease;\n}\n.visible .prompt * {\n  opacity: 0;\n  transition: opacity 400ms ease-in-out;\n}\n.visible .form {\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/style/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
  const textInput = (0,_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("text");
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
    promptUser.classList.add("prompt", "visible")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssV0FBVyxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFB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YWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvbW9kdWxlcy9zaG9ydHMuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNscjogYmxhY2s7XFxuICAtLXByaW1hcnktY2xyOiB3aGl0ZTtcXG4gIC0tYm9yZGVyLWNscjogYmxhY2s7XFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMCAxZW07XFxufVxcbmJvZHkgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5ib2R5IHVsIGgxIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcXG4gIGJvZHkgLmJvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIGJvZHkgLmJvZHkge1xcbiAgICBtYXJnaW4tbGVmdDogMjByZW07XFxuICB9XFxufVxcbmJvZHkgLmJvZHl5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICBib2R5IC5ib2R5IHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxufVxcblxcbm5hdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1MiwgNiwgMTUyLCAwLjUpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGdyaWQtcm93OiBzcGFuIDE7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG91dHJvIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XFxuICB9XFxufVxcbmlucHV0LFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuN2VtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHIpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTEwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UsIGJhY2tncm91bmQgMjAwbXMgZWFzZTtcXG59XFxuLmFkZEJ0bjpob3ZlciB7XFxuICAtLXByaW1hcnktY2xyOiBoc2woMTIwLCA3NyUsIDY2JSk7XFxuICAtLWNscjogd2hpdGU7XFxuICAtLWJvcmRlci1jbHI6IHdoaXRlO1xcbiAgb3V0bGluZTogdmFyKC0tcHJpbWFyeS1jbHIpIDFweCBzb2xpZDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICAuYWRkQnRuIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yLjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xcbiAgLmFkZEJ0biB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2OTNweCkge1xcbiAgLmFkZEJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcXG4gIH1cXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMzMzM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwJSwgNTAwcHgpO1xcbn1cXG4ubWFpbkNvbnRhaW5lciAuZGVsZXRlQnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2U7XFxufVxcbi5tYWluQ29udGFpbmVyIC5kZWxldGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2QzNWU1ZTtcXG4gIGNvbG9yOiAjZDNkMmQyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciBkaXYgc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA4MCU7XFxufVxcbi5tYWluQ29udGFpbmVyIGRpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC4xcmVtLCAtMC4xcmVtKTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMzMzM7XFxufVxcblxcbmxpIDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb3cge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAyNTUsIDAuNCk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCAxODUsIDEwMCwgMC41KTtcXG59XFxuXFxuLnVyZ2VudCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5OCwgMTYsIDE2LCAwLjUpO1xcbn1cXG5cXG4uZGVsZXRlQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmE5YTk7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiA4JTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2xhbXAoNTBweCwgNzB2dywgNDAwcHgpO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZGZkO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwMHB4O1xcbiAgaGVpZ2h0OiBjbGFtcCg2MHZoLCAxMDB2aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5wcm9qZWN0cyBsaSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMC4xcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4ucHJvamVjdHMgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdHMgLnByb21wdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDJweCAzcHggIzMzMztcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5wcm9qZWN0cyAucHJvbXB0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuLnByb2plY3RzIC5wcm9tcHQgLndyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG4ucHJvamVjdHMgLnByb21wdCBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcXG59XFxuLnByb2plY3RzIC5wcm9tcHQgaW5wdXRbdHlwZT1idXR0b25dLFxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwNCwgMCwgMC41KTtcXG59XFxuLnByb2plY3RzIC5wcm9tcHQgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjA0LCA0MSwgMCwgMC41KTtcXG59XFxuLnByb2plY3RzIC5wcm9qZWN0c0J0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yNXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTI1cHg7XFxuICBjb2xvcjogdmFyKC0tY2xyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNscik7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdHNCdG46aG92ZXIge1xcbiAgLS1wcmltYXJ5LWNscjpyZ2JhKDE1MiwgNiwgMTUyLCAwLjUpO1xcbiAgLS1jbHI6IHdoaXRlO1xcbiAgb3V0bGluZTogdmFyKC0tcHJpbWFyeS1jbHIpIDFweCBzb2xpZDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBoZWlnaHQ6IDJyZW07XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBoZWlnaHQ6IDBweDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAxMDAwbXMgZWFzZS1pbi1vdXQsIG1heC1oZWlnaHQgMTAwMG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UsIG1hcmdpbi1ib3R0b20gMTAwMG1zIGVhc2U7XFxufVxcbi52aXNpYmxlIC5wcm9tcHQgKiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlLWluLW91dDtcXG59XFxuLnZpc2libGUgLmZvcm0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNFLDhDQUFBO0FDQ0o7O0FERUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ0VGO0FBQ0E7RURDRSxxQkFBQTtBQ0NGO0FBQ0E7RURESSxZQUFBO0VBQ0UsMEJBQUE7QUNHTjtBQUNBO0VERUk7SUFERixnQkFBQTtFQ0VBO0FBQ0Y7QUFDQTtFREFJO0lBSkYsa0JBQUE7RUNPQTtBQUNGO0FBQ0E7RURBRSxrQkFBQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtBQ0VKO0FBQ0E7RURDRTtJQTVCRiwwQkFBQTtFQzhCRTtFQUNBO0lEQUUsZ0JBQUE7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VDRUo7QUFDRjs7QUFFQTtFREFBLGtCQUFBO0VBQ0Usa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0FDQ0Y7QUFDQTtFRENFO0lBVEYsWUFBQTtJQVVJLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VDRUY7QUFDRjs7QUFFQTtFRERBO0lBQ0UsdUJBQUE7RUNHQTtFQUNBO0lEREEsMEJBQUE7RUNHQTtF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LFlBQUE7RUNHRixxQ0FBcUM7QURGbkM7O0FDS0o7RURGSSxlQUFBO0VDSUYseUJBQXlCO0FBQzNCOztBQUVBO0VER0Usc0JBQUE7RUNEQSxZQUFZO0VBQ1osd0JBQXdCO0VERTFCLHFCQUFBO0VBQ0UsZ0JBQUE7QUNBRjs7QUFFQTtFREVFLG1CQUFBO0VDQUEsWUFBWTtBQUNkOztBQUVBO0VEQ0UscUJBQUE7RUNDQSxzQkFBc0I7RUFDdEIsYUFBYTtFREFmLFdBQUE7RUFTRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVIQUFBO0FDTkY7QUFDQTtFRFNFLFVBQUE7RUFDQSxxQ0FBQTtBQ1BGO0FEVEU7RUFDRSxVQUFBO0VBQ0EscUNBQUE7QUNXSjs7QUFFQSxvQ0RWSVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJvZHl5ID0gZ2V0Q2xhc3NOb2RlKFwiYm9keXlcIik7XG5jb25zdCBtYWluID0gZ2V0Q2xhc3NOb2RlKFwiYm9keVwiKTtcbmxldCBhcnJheSA9IFtdO1xubGV0IGNhdGVnb3J5PSBcImluYm94XCI7XG5leHBvcnQgY29uc3QgY2hhbmdlQ2F0ZWdvcnk9KGlucHV0KT0+e1xuY2F0ZWdvcnkgPSBpbnB1dFxufVxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge1xuICAvLyAgIHdyYXAsXG4gIGdldENsYXNzTm9kZSxcbiAgbmV3Tm9kZSxcbiAgZXZlbnRzLFxuICB0b2dnbGVDbGFzcyxcbiAgY3JlYXRlU2VsZWN0LFxuICBkZWxldGVCdG4sXG4gIEJ0bixcbiAgd3JhcCxcbn0gZnJvbSBcIi4vbW9kdWxlcy9zaG9ydHNcIjtcbmltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIjtcbmNvbnN0IFRvZG9PYmplY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xufTtcbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7fTtcblxuY29uc3QgVG9kb0l0ZW0gPSAoaGVhZGluZyA9IFwiXCIsIGNvbnRlbnQgPSBcIlwiLCBvcHRpb24gPSBcImxvd1wiKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ld05vZGUoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBuZXdOb2RlKFwiZGl2XCIpO1xuICBjb25zdCBEaXYgPSBuZXdOb2RlKFwiZGl2XCIpO1xuICBjb25zdCBidXR0b24gPSBkZWxldGVCdG4oKTtcbiAgY29uc3QgaDMgPSBuZXdOb2RlKFwiaDNcIik7XG4gIGNvbnN0IHAgPSBuZXdOb2RlKFwicFwiKTtcbiAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlU2VsZWN0KCk7XG4gIGNvbnN0IGVkaXRCdG4gPSBuZXdOb2RlKFwiYnV0dG9uXCIpO1xuICBjb25zdCBGb3JtID0gZm9ybShcIkVkaXQgVGFza1wiLGhlYWRpbmcsIGNvbnRlbnQsIG9wdGlvbik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgZXZlbnRzKGVkaXRCdG4sICgpID0+IHtcbiAgICB0b2dnbGVDbGFzcyhGb3JtLm1vZGFsLCBcInZpc2libGVcIik7XG4gIH0pO1xuICBldmVudHMoRm9ybS5mb3JtLChlKT0+e1xuZS5wcmV2ZW50RGVmYXVsdCgpXG5jb25zb2xlLmxvZyhGb3JtLmdldEZvcm1WYWx1ZXMoKSlcbmNvbnN0IFt0aXRsZSwgY29udGVudCwgcHJpb3JpdHldID0gRm9ybS5nZXRGb3JtVmFsdWVzKClcbmRlZmF1bHRDb25maWcodGl0bGUsIGNvbnRlbnQsIHByaW9yaXR5KVxuY29uc29sZS5sb2coRm9ybS5mb3JtKTtcbiBGb3JtLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9LFwic3VibWl0XCIpXG4gIGV2ZW50cyhcbiAgICBzZWxlY3QsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgcGFyZW50LmNsYXNzTmFtZSA9IGBtYWluQ29udGFpbmVyICR7dmFsfWA7XG4gICAgfSxcbiAgICBcImNoYW5nZVwiXG4gICk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBhcnIgPSBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbmRleCAhPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICApO1xuICAgIH0pO1xuICAgIGFycmF5ID0gYXJyO1xuICAgIGFkZFRvTGlzdCgpO1xuICB9KTtcblxuICBjb25zdCBkZWZhdWx0Q29uZmlnID0gKChoZWFkaW5nLCBjb250ZW50LCBvcHRpb24pID0+IHtcbiAgICBoMy50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgc2VsZWN0LnZhbHVlID0gb3B0aW9uO1xuICB9KVxuICBkZWZhdWx0Q29uZmlnKGhlYWRpbmcsIGNvbnRlbnQsIG9wdGlvbik7XG4gIGNvbnN0IGVkaXRIZWFkaW5nID0gKHZhbCkgPT4ge1xuICAgIGgzLnRleHRDb250ZW50ID0gdmFsO1xuICB9O1xuICBjb25zdCBlZGl0Q29udGVudCA9ICh2YWwpID0+IHtcbiAgICBwLnRleHRDb250ZW50ID0gdmFsO1xuICB9O1xuXG4gIC8vIFRPRE8gdXBkYXRlIGNvbXBvbmVudFxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKEZvcm0ubW9kYWwpO1xuXG4gICAgRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIsIG9wdGlvbik7XG4gICAgcmV0dXJuIERpdjtcbiAgfSkoKTtcbiAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYXJkLFxuICAgIGVkaXRDb250ZW50LFxuICAgIGVkaXRIZWFkaW5nLFxuICAgIGNoYW5nZVByaW9yaXR5LFxuICB9O1xufTtcblxuY29uc3QgRm9ybSA9IGZvcm0oKTtcbmNvbnN0IGFkZEl0ZW1zID0gKCgpID0+IHtcbiAgY29uc3QgYWRkQnRuID0gQnRuKClcbiAgZXZlbnRzKGFkZEJ0biwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlQ2xhc3MoRm9ybS5tb2RhbCwgXCJ2aXNpYmxlXCIpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgcmV0dXJuIHthZGRCdG59XG59KSgpO1xuXG5ldmVudHMoXG4gIEZvcm0uZm9ybSxcbiAgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgW3RpdGxlLCBjb250ZW50LCBvcHRpb25zXSA9IEZvcm0uZ2V0Rm9ybVZhbHVlcygpO1xuICAgIGlmICh0aXRsZSAmJiBjb250ZW50ICYmIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBUb2RvSXRlbSh0aXRsZSwgY29udGVudCwgb3B0aW9ucyk7XG4gICAgICBhZGRUb0xpc3QobmV3UHJvamVjdCxjYXRlZ29yeSk7XG4gICAgfVxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgRm9ybS5jbGVhcklucHV0KClcbiAgfSxcbiAgXCJzdWJtaXRcIlxuKTtcbmNvbnN0IHJlZHVjZXIgPSAodmFsKSA9PiB7XG4gIHN3aXRjaCAodmFsKSB7XG4gICAgY2FzZSBcIlRPREFZXCI6XG4gIH1cbn07XG5jb25zdCBuZXdQcm9qZWN0ID0gVG9kb0l0ZW0oXG4gIFwiSGVsbG8gV29ybGRcIixcbiAgXCJJJ20gZ29pbmcgdG8gY2hlYW5nZSB0aGUgd29ybGQgc29tZSBkYXlcIlxuKTtcbm5ld1Byb2plY3QuY2F0ZWdvcnk9Y2F0ZWdvcnlcbmJvZHl5LmFwcGVuZENoaWxkKG5ld1Byb2plY3QuY2FyZCk7XG5cbmNvbnN0IG9sZFByb2plY3QgPSBUb2RvSXRlbShcIkhlbGxvIFdvcmxkXCIsIFwiSSBnb2luZyB0byBjaGVhbmdlXCIsIFwiaGlnaFwiKTtcblxuYm9keXkuYXBwZW5kQ2hpbGQob2xkUHJvamVjdC5jYXJkKTtcblxuLy8gY29uc29sZS5sb2coYXJyYXkpO1xuYXJyYXkgPSBbLi4uYXJyYXksIG9sZFByb2plY3QsIG5ld1Byb2plY3RdO1xuXG5jb25zdCBhZGRUb0xpc3QgPSAoKGFyciwgY2F0ZWdvcnk9XCJpbmJveFwiKSA9PiB7XG4gaWYgKGFycil7IFxuICAgYXJyLmNhdGVnb3J5PWNhdGVnb3J5XG4gIGFycmF5PVsuLi5hcnJheSwgYXJyXX1cbiAgbGV0IE9iaiA9IGFycmF5LmZpbHRlcigoaXRlbSk9Pml0ZW0uY2F0ZWdvcnk9PT1jYXRlZ29yeSlcbiAgYm9keXkuaW5uZXJIVE1MPVwiIFwiXG4gIE9iai5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uY2F0ZWdvcnkgPWNhdGVnb3J5XG4gICAgYm9keXkuYXBwZW5kQ2hpbGQoaXRlbS5jYXJkKTtcbiAgICBpdGVtLmNhcmQuaWQgPSBpbmRleDtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkSXRlbXMuYWRkQnRuKVxufSk7XG5jb25zdCBmaWx0ZXJMaXN0ID0oYXJyKT0+e1xuICBib2R5eS5pbm5lckhUTUwgPSBcIiBcIjtcbiAgYXJyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgYm9keXkuYXBwZW5kQ2hpbGQoaXRlbS5jYXJkKTtcbiAgICBpdGVtLmNhcmQuaWQgPSBpbmRleDtcbiAgICBjb25zb2xlLmxvZyhpdGVtLmNhcmQuaWQpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkSXRlbXMuYWRkQnRuKTtcbn1cblxuXG5Qcm9qZWN0KClcbmV4cG9ydCB7YXJyYXksYWRkVG9MaXN0LCBmaWx0ZXJMaXN0fVxuIiwiaW1wb3J0IHtcbiAgd3JhcCxcbiAgZ2V0Q2xhc3NOb2RlLFxuICBuZXdOb2RlLFxuICBldmVudHMsXG4gIHRvZ2dsZUNsYXNzLFxuICBhZGRDbGFzcyxcbiAgY3JlYXRlU2VsZWN0LFxuICBkZWxldGVCdG4sXG4gIGxhYmVsV3JhcCxcbiAgYWxsQXR0cmlidXRlXG59IGZyb20gXCIuL3Nob3J0c1wiO1xuXG5leHBvcnQgY29uc3QgZm9ybSA9ICgoaGVhZGVyLGhlYWRpbmcgPSBcIlwiLCBjb250ZW50ID0gXCJcIiwgcHJpb3JpdHkgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IHNldFZhbHVlcz0oKT0+e1xuICAgIFxuICB9XG4gIGNvbnN0IGJvZHl5ID0gZ2V0Q2xhc3NOb2RlKFwiYm9keVwiKTtcbiAgLy8gbW9kYWxcbiAgY29uc3QgbW9kYWwgPSBuZXdOb2RlKFwiZGl2XCIpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cbiAgLy8gRm9ybVxuICBjb25zdCBmb3JtID0gbmV3Tm9kZShcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gIGNvbnN0IGgzID0gbmV3Tm9kZShcImgzXCIpO1xuICBjb25zdCB0aXRsZSA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGV4dElucHV0ID0gbmV3Tm9kZShcInRleHRcIik7XG4gIGNvbnN0IGJ0blNhdmUgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGNvbnN0IGJ0bkNhbmNlbCA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgYnRuU2F2ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidG5DYW5jZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuU2F2ZS52YWx1ZSA9IFwiQWRkXCI7XG4gIGJ0bkNhbmNlbC52YWx1ZSA9IFwiY2FuY2VsXCI7XG4gIGNvbnN0IG9wdGlvbiA9IGNyZWF0ZVNlbGVjdCgpO1xuICBhZGRDbGFzcyhidG5TYXZlLCBcInNhdmVcIik7XG4gIGFkZENsYXNzKGJ0bkNhbmNlbCwgXCJyZW1vdmVcIik7XG4gIGgzLnRleHRDb250ZW50ID0gaGVhZGVyfHxcIkFkZCB0byB0b2RvXCI7XG4gIHRpdGxlLnZhbHVlID0gaGVhZGluZztcbiAgdGV4dElucHV0LnZhbHVlID0gY29udGVudDtcbiAgb3B0aW9uLnZhbHVlPSBwcmlvcml0eVxuICBjb25zdCB0aXRsZVdyYXAgPSBsYWJlbFdyYXAodGl0bGUsIFwiVGFzayB0aXRsZVwiKTtcbiAgY29uc3QgdGV4dElucHV0V3JhcCA9IGxhYmVsV3JhcCh0ZXh0SW5wdXQsIFwiVGFzayBJbnB1dFwiKTtcbiAgY29uc3Qgb3B0aW9uV3JhcCA9IGxhYmVsV3JhcChvcHRpb24sXCJTZXQgUHJpb3JpdHlcIilcbiAgY29uc3QgZGVsID0gZGVsZXRlQnRuKCk7XG4gIC8vICEgUmVtZW1iZXIgdG8gY2hhbmdlIHRoaXNcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgfSlcbiAgbGV0IGZvcm1WYWx1ZXMgPSBbXVxuICBldmVudHMoZm9ybSwgKCk9PntcbiAgIGZvcm1WYWx1ZXMgPSBbdGl0bGUudmFsdWUsdGV4dElucHV0LnZhbHVlLG9wdGlvbi52YWx1ZV1cbiAgfSxcInN1Ym1pdFwiKVxuICBjb25zdCBnZXRGb3JtVmFsdWVzPSgpPT4oZm9ybVZhbHVlcylcbmNvbnN0IGNsZWFySW5wdXQ9ICgpPT57XG4gIHRpdGxlLnZhbHVlPVwiXCJcbiAgdGV4dElucHV0LnZhbHVlPVwiXCJcbiAgb3B0aW9uLnZhbHVlPVwiXCJcbn1cbiAgLy8hIFRoZSBcIndyYXBcIiBmdW5jdGlvbiBpcyB1c2VkIHRvIGFwcGVuZCBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSB0byB0aGUgbWFpbiBlbGVtZW50XG4gIHdyYXAoZm9ybSwgW2gzLCB0aXRsZVdyYXAsIHRleHRJbnB1dFdyYXAsIG9wdGlvbldyYXAsIGJ0blNhdmUsIGJ0bkNhbmNlbCwgZGVsXSk7XG4gIHdyYXAobW9kYWwsIFtmb3JtXSk7XG4gIHdyYXAoYm9keXksIFttb2RhbF0pO1xuICBcbiAgcmV0dXJuIHsgbW9kYWwsIGdldEZvcm1WYWx1ZXMsIGZvcm0sIGNsZWFySW5wdXQgfTtcbn0pOyIsImV4cG9ydCBjb25zdCBnZXRDbGFzc05vZGUgPSAoY2xhc3NJdGVtKSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc0l0ZW19YCk7XG4gIHJldHVybiBpdGVtO1xufTtcbmV4cG9ydCBjb25zdCBkZWxldGVCdG4gPSgpPT57XG5jb25zdCBidXR0b24gPW5ld05vZGUoXCJidXR0b25cIik7XG5cbiAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpO1xuICByZXR1cm4gYnV0dG9uXG59XG5leHBvcnQgY29uc3Qgd3JhcCA9IChlbGVtZW50LCBhcnJheSkgPT4ge1xuICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGxhYmVsV3JhcCA9KGVsZW1lbnQsdGl0bGUpPT57XG4gIGNvbnN0IGRpdiA9IG5ld05vZGUoXCJkaXZcIilcbiAgY29uc3QgbGFiZWwgPSBuZXdOb2RlKFwibGFiZWxcIilcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZVxuICB3cmFwKGRpdixbbGFiZWwsZWxlbWVudF0pXG4gIHJldHVybiBkaXZcbn1cbmV4cG9ydCBjb25zdCBuZXdOb2RlID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7aXRlbX1gKTtcbn07XG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCA9IGNsYXNzTmFtZTtcbn07XG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xufTtcbmV4cG9ydCBjb25zdCBldmVudHMgPSAoZWxlbWVudCwgZnVuY3QsIGV2ZW50TGlzdGVuZXIgPSBcImNsaWNrXCIpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIsIGZ1bmN0KTtcbn07XG5leHBvcnQgY29uc3QgYWxsQXR0cmlidXRlID0oYXR0cmlidXRlLCBhcnJheSxzZXQ9dHJ1ZSk9PntcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSk9PntcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsc2V0KVxuICB9KVxufVxuZXhwb3J0IGNvbnN0IEJ0bj0oKSA9PntcbiAgY29uc3QgYWRkQnRuID0gbmV3Tm9kZShcImJ1dHRvblwiKTtcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRCdG5cIik7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBcIiZwbHVzO1wiO1xuICByZXR1cm4gYWRkQnRuXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWxlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IG5ld05vZGUoXCJzZWxlY3RcIik7XG4gIC8vIHNlbGVjdC5pZCA9IFwiaG1tXCI7XG4gIGNvbnN0IGFyciA9IFtcImxvd1wiLCBcImhpZ2hcIiwgXCJ1cmdlbnRcIl07XG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gbmV3Tm9kZShcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBpdGVtO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcbiIsImltcG9ydCB7IEJ0biwgZ2V0Q2xhc3NOb2RlLCBuZXdOb2RlICwgd3JhcH0gZnJvbSBcIi4vbW9kdWxlcy9zaG9ydHNcIjtcbmltcG9ydCB7IGFycmF5LCBhZGRUb0xpc3QsIGZpbHRlckxpc3QgLCBjaGFuZ2VDYXRlZ29yeX0gZnJvbSBcIi4vaW5kZXhcIjtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdldENsYXNzTm9kZShcInByb2plY3RzXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gbmV3Tm9kZShcImlucHV0XCIpO1xuXG5cblxuY29uc3QgYWRkYnRuID0gKCgpID0+IHtcbiAgY29uc3QgYnRuID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYnRuLnZhbHVlID0gXCIgQWRkXCI7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKFByb2plY3QoaW5wdXQudmFsdWUpKVxuICAgIGlucHV0LnZhbHVlPVwiXCJcbiAgfSk7XG4gIHJldHVybiBidG5cbn0pXG5jb25zdCBjYW5lbEJ0biA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnZhbHVlID0gXCIgQ2FuY2VsXCI7XG4gICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgcHJvamN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgIH0pO1xuICByZXR1cm4gYnRuO1xufTtcblxuXG5jb25zdCBwcm9qY3RGb3JtID0gKCgpID0+IHtcbmNvbnN0IGJ0bldyYXBwZXIgPSBuZXdOb2RlKFwiZGl2XCIpXG5jb25zdCBhZGQ9IGFkZGJ0bigpXG5jb25zdCBjYW5jZWw9IGNhbmVsQnRuKClcbi8vIGNvbnN0IGNhbmNsZUJ0bldyYXBwZXIgPSBuZXdOb2RlKFwiZGl2XCIpXG53cmFwKGJ0bldyYXBwZXIsW2FkZCwgY2FuY2VsXSlcbmJ0bldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBcIilcbiAgICBjb25zdCBwcm9tcHRVc2VyID0gbmV3Tm9kZShcImZvcm1cIilcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIHdyYXAocHJvbXB0VXNlciwgWywgaW5wdXQsIGJ0bldyYXBwZXJdKVxuICAgIHByb21wdFVzZXIuY2xhc3NMaXN0LmFkZChcInByb21wdFwiLCBcInZpc2libGVcIilcbiAgICByZXR1cm4gcHJvbXB0VXNlclxufSkoKVxuXG5jb25zdCBQcm9qQWRkQnRuID0gKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gQnRuKCk7XG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkQnRuXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0J0blwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBwcm9qY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpXG4gIH0pXG4gIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uXG59O1xuIFxuZXhwb3J0IGNvbnN0IFByb2plY3QgPSAodGV4dCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gUHJvakFkZEJ0bigpO1xuICBjb25zdCBsaSA9IG5ld05vZGUoXCJsaVwiKTtcbiAgbGkudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pjdEZvcm0pO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgY2hhbmdlQ2F0ZWdvcnkodGV4dClcbiAgICAvLyBjb25zdCBuZXdBcnIgPSBbYXJyYXlbMV1dXG4gICAgY29uc29sZS5sb2coYXJyYXkpXG5hZGRUb0xpc3QobnVsbCwgdGV4dClcbiAgfSlcbiAgcmV0dXJuIGxpXG59O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=