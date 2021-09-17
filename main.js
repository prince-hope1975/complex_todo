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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  gap: 0 1em;\n  grid-template-columns: 1fr;\n}\nbody ul {\n  list-style-type: none;\n}\nbody ul h1 {\n  margin: 1rem;\n  text-decoration: underline;\n}\n@media (max-width: 575px) {\n  body .body {\n    margin-top: 3rem;\n  }\n}\nbody .bodyy {\n  position: relative !important;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 575px) {\n  body {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  }\n  body .body {\n    grid-row: span 1;\n    grid-column: span 3;\n    padding-bottom: 2rem;\n  }\n}\n\nnav {\n  padding-left: 1rem;\n  grid-row: span 1;\n  grid-column: span 2;\n}\n@media (min-width: 575px) {\n  nav {\n    margin-bottom: 2rem;\n    min-height: 100vh;\n    border-right: 1px solid black;\n  }\n}\n\n@keyframes outro {\n  0% {\n    transform: translate(0);\n  }\n  50% {\n    transform: translateX(50%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\ninput,\nselect,\noption {\n  outline: none;\n  padding: 0.2em 0.7em;\n}\n\n.addBtn {\n  position: absolute;\n  top: 110%;\n  width: 100%;\n  max-width: 20rem;\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n\n.mainContainer {\n  position: relative;\n  padding: 1rem;\n  z-index: 1;\n  padding: 1rem;\n  line-height: 3em;\n  margin: auto;\n  margin: 1rem;\n  box-shadow: 1px 1px 1px #333;\n  transition: transform 200ms ease;\n  max-width: 500px;\n  width: clamp(250px,90%, 500px);\n}\n.mainContainer .deleteBtn {\n  border-radius: 50%;\n  transition: background 500ms ease;\n  transition: color 500ms ease;\n}\n.mainContainer .deleteBtn:hover {\n  background: #d35e5e;\n  color: #d3d2d2;\n}\n.mainContainer div select {\n  position: absolute;\n  right: 10px;\n  top: 80%;\n}\n.mainContainer div button {\n  padding: 0.3rem 1rem;\n  text-transform: uppercase;\n}\n\n.mainContainer:hover {\n  transform: translate(-0.1rem, -0.1rem);\n  box-shadow: 1px 1px 1px #333;\n}\n\nli :hover {\n  cursor: pointer;\n}\n\n.low {\n  background: rgba(0, 0, 255, 0.4);\n}\n\n.high {\n  background: rgba(231, 185, 100, 0.5);\n}\n\n.urgent {\n  background: rgba(198, 16, 16, 0.5);\n}\n\n.deleteBtn {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border: none;\n  background: #ffa9a9;\n  width: 2rem;\n  height: 2rem;\n  display: grid;\n  place-content: center;\n  font-size: 2rem;\n  z-index: 3;\n}\n\n.modal {\n  position: fixed;\n  max-width: 100%;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  height: 100%;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 8%;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  .modal {\n    width: 100%;\n  }\n}\n\n.form {\n  position: relative;\n  width: clamp(50px, 70vw, 400px);\n  max-width: 90%;\n  background: #fffdfd;\n  margin: auto;\n  height: clamp(60vh, 100vh);\n  display: flex;\n  gap: 1em;\n  flex-direction: column;\n  padding: 1rem;\n}\n.form div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.projects {\n  position: relative;\n  transition: all 300ms ease;\n}\n.projects li {\n  font-size: 1.3rem;\n  margin: 0.1rem;\n  background: #fcf7f7;\n}\n.projects li:hover {\n  cursor: pointer;\n}\n.projects form {\n  transition: all 300ms ease;\n  max-width: 50%;\n  margin: auto;\n  background: rgba(128, 128, 128, 0.3);\n  border-radius: 5px;\n  box-shadow: 3px 2px 3px #333;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  position: relative;\n  min-height: 6rem;\n}\n@media (min-width: 575px) {\n  .projects form {\n    width: 90%;\n    max-width: 250px;\n  }\n}\n.projects form input[type=text] {\n  letter-spacing: 3px;\n  margin-top: 1rem;\n  max-width: 90%;\n  display: block;\n  margin: auto;\n  background: rgba(128, 128, 128, 0.1);\n}\n.projects form input[type=button],\n.projects form input[type=submit] {\n  border-radius: 4px;\n  bottom: 1rem;\n}\n.projects form input[type=submit] {\n  background: rgba(0, 204, 0, 0.5);\n  position: absolute;\n  left: 1rem;\n}\n.projects form input[type=button] {\n  background: rgba(204, 41, 0, 0.5);\n  position: absolute;\n  right: 1rem;\n}\n.projects .projectsBtn {\n  position: absolute;\n  bottom: -25px;\n  width: 50px;\n  left: 50%;\n  margin-left: -25px;\n}\n\n.logo {\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\nselect {\n  border: 1px solid #ccc;\n  height: 2rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\noption {\n  background: inherit;\n  height: 2rem;\n}\n\n.visible {\n  animation: outro 500ms;\n  display: none;\n  transition: display 400ms ease;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/style/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

    const promptUser = (0,_modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("form")
    input.setAttribute("type", "text")
    promptUser.appendChild(input)
    promptUser.appendChild(addbtn());

    promptUser.appendChild(canelBtn())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixlQUFlLCtCQUErQixHQUFHLFdBQVcsMEJBQTBCLEdBQUcsY0FBYyxpQkFBaUIsK0JBQStCLEdBQUcsNkJBQTZCLGdCQUFnQix1QkFBdUIsS0FBSyxHQUFHLGVBQWUsa0NBQWtDLGtCQUFrQiwyQkFBMkIsR0FBRyw2QkFBNkIsVUFBVSxpREFBaUQsS0FBSyxnQkFBZ0IsdUJBQXVCLDBCQUEwQiwyQkFBMkIsS0FBSyxHQUFHLFNBQVMsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyw2QkFBNkIsU0FBUywwQkFBMEIsd0JBQXdCLG9DQUFvQyxLQUFLLEdBQUcsc0JBQXNCLFFBQVEsOEJBQThCLEtBQUssU0FBUyxpQ0FBaUMsS0FBSyxVQUFVLGtDQUFrQyxLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQix5QkFBeUIsR0FBRyxhQUFhLHVCQUF1QixjQUFjLGdCQUFnQixxQkFBcUIsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQix1QkFBdUIsa0JBQWtCLGVBQWUsa0JBQWtCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGlDQUFpQyxxQ0FBcUMscUJBQXFCLG1DQUFtQyxHQUFHLDZCQUE2Qix1QkFBdUIsc0NBQXNDLGlDQUFpQyxHQUFHLG1DQUFtQyx3QkFBd0IsbUJBQW1CLEdBQUcsNkJBQTZCLHVCQUF1QixnQkFBZ0IsYUFBYSxHQUFHLDZCQUE2Qix5QkFBeUIsOEJBQThCLEdBQUcsMEJBQTBCLDJDQUEyQyxpQ0FBaUMsR0FBRyxlQUFlLG9CQUFvQixHQUFHLFVBQVUscUNBQXFDLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxhQUFhLHVDQUF1QyxHQUFHLGdCQUFnQix1QkFBdUIsZUFBZSxhQUFhLGlCQUFpQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMEJBQTBCLG9CQUFvQixlQUFlLEdBQUcsWUFBWSxvQkFBb0Isb0JBQW9CLFdBQVcsYUFBYSxlQUFlLGlCQUFpQixpQkFBaUIsbUNBQW1DLGdCQUFnQixnQkFBZ0IsR0FBRyw2QkFBNkIsWUFBWSxrQkFBa0IsS0FBSyxHQUFHLFdBQVcsdUJBQXVCLG9DQUFvQyxtQkFBbUIsd0JBQXdCLGlCQUFpQiwrQkFBK0Isa0JBQWtCLGFBQWEsMkJBQTJCLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQixlQUFlLEdBQUcsZUFBZSx1QkFBdUIsK0JBQStCLEdBQUcsZ0JBQWdCLHNCQUFzQixtQkFBbUIsd0JBQXdCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLGtCQUFrQiwrQkFBK0IsbUJBQW1CLGlCQUFpQix5Q0FBeUMsdUJBQXVCLGlDQUFpQyxnQkFBZ0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsR0FBRyw2QkFBNkIsb0JBQW9CLGlCQUFpQix1QkFBdUIsS0FBSyxHQUFHLG1DQUFtQyx3QkFBd0IscUJBQXFCLG1CQUFtQixtQkFBbUIsaUJBQWlCLHlDQUF5QyxHQUFHLHlFQUF5RSx1QkFBdUIsaUJBQWlCLEdBQUcscUNBQXFDLHFDQUFxQyx1QkFBdUIsZUFBZSxHQUFHLHFDQUFxQyxzQ0FBc0MsdUJBQXVCLGdCQUFnQixHQUFHLDBCQUEwQix1QkFBdUIsa0JBQWtCLGdCQUFnQixjQUFjLHVCQUF1QixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QixHQUFHLFlBQVksMkJBQTJCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLHFCQUFxQixHQUFHLFlBQVksd0JBQXdCLGlCQUFpQixHQUFHLGNBQWMsMkJBQTJCLGtCQUFrQixtQ0FBbUMsR0FBRyxrREFBa0Qsd0hBQXdILFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxPQUFPLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxL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Y2VzIjpbIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL21vZHVsZXMvc2hvcnRzLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwIDFlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5ib2R5IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuYm9keSB1bCBoMSB7XFxuICBtYXJnaW46IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICBib2R5IC5ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG59XFxuYm9keSAuYm9keXkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgfVxcbiAgYm9keSAuYm9keSB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcbn1cXG5cXG5uYXYge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xcbiAgbmF2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG91dHJvIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XFxuICB9XFxufVxcbmlucHV0LFxcbnNlbGVjdCxcXG5vcHRpb24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuN2VtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDNlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICMzMzM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB3aWR0aDogY2xhbXAoMjUwcHgsOTAlLCA1MDBweCk7XFxufVxcbi5tYWluQ29udGFpbmVyIC5kZWxldGVCdG4ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA1MDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgNTAwbXMgZWFzZTtcXG59XFxuLm1haW5Db250YWluZXIgLmRlbGV0ZUJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZDM1ZTVlO1xcbiAgY29sb3I6ICNkM2QyZDI7XFxufVxcbi5tYWluQ29udGFpbmVyIGRpdiBzZWxlY3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDgwJTtcXG59XFxuLm1haW5Db250YWluZXIgZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tYWluQ29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjFyZW0sIC0wLjFyZW0pO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzMzMztcXG59XFxuXFxubGkgOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgMC40KTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDE4NSwgMTAwLCAwLjUpO1xcbn1cXG5cXG4udXJnZW50IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk4LCAxNiwgMTYsIDAuNSk7XFxufVxcblxcbi5kZWxldGVCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmYTlhOTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwYWRkaW5nOiA4JTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogY2xhbXAoNTBweCwgNzB2dywgNDAwcHgpO1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZGZkO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBjbGFtcCg2MHZoLCAxMDB2aCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmZvcm0gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbn1cXG4ucHJvamVjdHMgbGkge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDAuMXJlbTtcXG4gIGJhY2tncm91bmQ6ICNmY2Y3Zjc7XFxufVxcbi5wcm9qZWN0cyBsaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0cyBmb3JtIHtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAzcHggMnB4IDNweCAjMzMzO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA2cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5wcm9qZWN0cyBmb3JtIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuLnByb2plY3RzIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxufVxcbi5wcm9qZWN0cyBmb3JtIGlucHV0W3R5cGU9YnV0dG9uXSxcXG4ucHJvamVjdHMgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm90dG9tOiAxcmVtO1xcbn1cXG4ucHJvamVjdHMgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDQsIDAsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxcmVtO1xcbn1cXG4ucHJvamVjdHMgZm9ybSBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDQxLCAwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdHNCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGhlaWdodDogMnJlbTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBhbmltYXRpb246IG91dHJvIDUwMG1zO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGRpc3BsYXkgNDAwbXMgZWFzZTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDRUY7QURERTtFQU1JLHFCQUFBO0FDRk47QURITTtFQUNJLFlBQUE7RUFFQSwwQkFBQTtBQ0lWO0FERUk7RUFERjtJQUVJLGdCQUFBO0VDQ0o7QUFDRjtBREVFO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVFO0VBeEJGO0lBeUJJLDBDQUFBO0VDQ0Y7RURBRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ0VKO0FBQ0Y7O0FEQ0E7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ00sbUJBQUE7QUNFTjtBRENFO0VBTkY7SUFPSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsNkJBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0k7SUFDSSx1QkFBQTtFQ0dOO0VEREU7SUFDSSwwQkFBQTtFQ0dOO0VEREU7SUFDSSwyQkFBQTtFQ0dOO0FBQ0Y7QUREQTs7O0VBR0UsYUFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0tGO0FERkU7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7QUNJSjtBREZFO0VBQ0UsbUJBQUE7RUFFQSxjQUFBO0FDR0o7QURFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBTjtBREVJO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtBQ0FOOztBRElFO0VBQ0Usc0NBQUE7RUFDRiw0QkFBQTtBQ0RGOztBREtFO0VBQ0UsZUFBQTtBQ0ZKOztBREtBO0VBQ0UsZ0NBQUE7QUNGRjs7QURJQTtFQUNFLG9DQUFBO0FDREY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDRSxlQUFBO0VBQ0YsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUY7QURERTtFQVhGO0lBWUksV0FBQTtFQ0lGO0FBQ0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNLRjtBREpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREZBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ0tGO0FESEU7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0tOO0FESEU7RUFDSSxlQUFBO0FDS047QURIRTtFQUNFLDBCQUFBO0VBS0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRGJRO0VBRk47SUFHSSxVQUFBO0lBQ0EsZ0JBQUE7RUNnQko7QUFDRjtBRExJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDT047QURMSTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNPTjtBRExJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNPTjtBRExJO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNNTjtBREhFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNGLFNBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDRixhQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QUFFQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBib2R5eSA9IGdldENsYXNzTm9kZShcImJvZHl5XCIpO1xuY29uc3QgbWFpbiA9IGdldENsYXNzTm9kZShcImJvZHlcIik7XG5sZXQgYXJyYXkgPSBbXTtcbmxldCBjYXRlZ29yeT0gXCJpbmJveFwiO1xuZXhwb3J0IGNvbnN0IGNoYW5nZUNhdGVnb3J5PShpbnB1dCk9PntcbmNhdGVnb3J5ID0gaW5wdXRcbn1cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHtcbiAgLy8gICB3cmFwLFxuICBnZXRDbGFzc05vZGUsXG4gIG5ld05vZGUsXG4gIGV2ZW50cyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGNyZWF0ZVNlbGVjdCxcbiAgZGVsZXRlQnRuLFxuICBCdG4sXG4gIHdyYXAsXG59IGZyb20gXCIuL21vZHVsZXMvc2hvcnRzXCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCI7XG5jb25zdCBUb2RvT2JqZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMubm90ZXMgPSBub3RlcztcbiAgdGhpcy5jaGVja2xpc3QgPSBmYWxzZTtcbn07XG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge307XG5cbmNvbnN0IFRvZG9JdGVtID0gKGhlYWRpbmcgPSBcIlwiLCBjb250ZW50ID0gXCJcIiwgb3B0aW9uID0gXCJsb3dcIikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBuZXdOb2RlKFwiZGl2XCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gbmV3Tm9kZShcImRpdlwiKTtcbiAgY29uc3QgRGl2ID0gbmV3Tm9kZShcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZGVsZXRlQnRuKCk7XG4gIGNvbnN0IGgzID0gbmV3Tm9kZShcImgzXCIpO1xuICBjb25zdCBwID0gbmV3Tm9kZShcInBcIik7XG4gIGNvbnN0IHNlbGVjdCA9IGNyZWF0ZVNlbGVjdCgpO1xuICBjb25zdCBlZGl0QnRuID0gbmV3Tm9kZShcImJ1dHRvblwiKTtcbiAgY29uc3QgRm9ybSA9IGZvcm0oXCJFZGl0IFRhc2tcIixoZWFkaW5nLCBjb250ZW50LCBvcHRpb24pO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gIGV2ZW50cyhlZGl0QnRuLCAoKSA9PiB7XG4gICAgdG9nZ2xlQ2xhc3MoRm9ybS5tb2RhbCwgXCJ2aXNpYmxlXCIpO1xuICB9KTtcbiAgZXZlbnRzKEZvcm0uZm9ybSwoZSk9PntcbmUucHJldmVudERlZmF1bHQoKVxuY29uc29sZS5sb2coRm9ybS5nZXRGb3JtVmFsdWVzKCkpXG5jb25zdCBbdGl0bGUsIGNvbnRlbnQsIHByaW9yaXR5XSA9IEZvcm0uZ2V0Rm9ybVZhbHVlcygpXG5kZWZhdWx0Q29uZmlnKHRpdGxlLCBjb250ZW50LCBwcmlvcml0eSlcbmNvbnNvbGUubG9nKEZvcm0uZm9ybSk7XG4gRm9ybS5tb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgfSxcInN1Ym1pdFwiKVxuICBldmVudHMoXG4gICAgc2VsZWN0LFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIHBhcmVudC5jbGFzc05hbWUgPSBgbWFpbkNvbnRhaW5lciAke3ZhbH1gO1xuICAgIH0sXG4gICAgXCJjaGFuZ2VcIlxuICApO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgYXJyID0gYXJyYXkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaW5kZXggIT0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBhcnJheSA9IGFycjtcbiAgICBhZGRUb0xpc3QoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVmYXVsdENvbmZpZyA9ICgoaGVhZGluZywgY29udGVudCwgb3B0aW9uKSA9PiB7XG4gICAgaDMudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHNlbGVjdC52YWx1ZSA9IG9wdGlvbjtcbiAgfSlcbiAgZGVmYXVsdENvbmZpZyhoZWFkaW5nLCBjb250ZW50LCBvcHRpb24pO1xuICBjb25zdCBlZGl0SGVhZGluZyA9ICh2YWwpID0+IHtcbiAgICBoMy50ZXh0Q29udGVudCA9IHZhbDtcbiAgfTtcbiAgY29uc3QgZWRpdENvbnRlbnQgPSAodmFsKSA9PiB7XG4gICAgcC50ZXh0Q29udGVudCA9IHZhbDtcbiAgfTtcblxuICAvLyBUT0RPIHVwZGF0ZSBjb21wb25lbnRcbiAgY29uc3QgY2FyZCA9ICgoKSA9PiB7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgzKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChGb3JtLm1vZGFsKTtcblxuICAgIERpdi5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRhaW5lclwiLCBvcHRpb24pO1xuICAgIHJldHVybiBEaXY7XG4gIH0pKCk7XG4gIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKCkgPT4ge1xuICAgIC8vIFRPRE9cbiAgICBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FyZCxcbiAgICBlZGl0Q29udGVudCxcbiAgICBlZGl0SGVhZGluZyxcbiAgICBjaGFuZ2VQcmlvcml0eSxcbiAgfTtcbn07XG5cbmNvbnN0IEZvcm0gPSBmb3JtKCk7XG5jb25zdCBhZGRJdGVtcyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZEJ0biA9IEJ0bigpXG4gIGV2ZW50cyhhZGRCdG4sIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZUNsYXNzKEZvcm0ubW9kYWwsIFwidmlzaWJsZVwiKTtcbiAgfSk7XG4gIGJvZHl5LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gIHJldHVybiB7YWRkQnRufVxufSkoKTtcblxuZXZlbnRzKFxuICBGb3JtLmZvcm0sXG4gIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IFt0aXRsZSwgY29udGVudCwgb3B0aW9uc10gPSBGb3JtLmdldEZvcm1WYWx1ZXMoKTtcbiAgICBpZiAodGl0bGUgJiYgY29udGVudCAmJiBvcHRpb25zKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gVG9kb0l0ZW0odGl0bGUsIGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgICAgYWRkVG9MaXN0KG5ld1Byb2plY3QsY2F0ZWdvcnkpO1xuICAgIH1cbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIEZvcm0uY2xlYXJJbnB1dCgpXG4gIH0sXG4gIFwic3VibWl0XCJcbik7XG5jb25zdCByZWR1Y2VyID0gKHZhbCkgPT4ge1xuICBzd2l0Y2ggKHZhbCkge1xuICAgIGNhc2UgXCJUT0RBWVwiOlxuICB9XG59O1xuY29uc3QgbmV3UHJvamVjdCA9IFRvZG9JdGVtKFxuICBcIkhlbGxvIFdvcmxkXCIsXG4gIFwiSSdtIGdvaW5nIHRvIGNoZWFuZ2UgdGhlIHdvcmxkIHNvbWUgZGF5XCJcbik7XG5uZXdQcm9qZWN0LmNhdGVnb3J5PWNhdGVnb3J5XG5ib2R5eS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0LmNhcmQpO1xuXG5jb25zdCBvbGRQcm9qZWN0ID0gVG9kb0l0ZW0oXCJIZWxsbyBXb3JsZFwiLCBcIkkgZ29pbmcgdG8gY2hlYW5nZVwiLCBcImhpZ2hcIik7XG5cbmJvZHl5LmFwcGVuZENoaWxkKG9sZFByb2plY3QuY2FyZCk7XG5cbi8vIGNvbnNvbGUubG9nKGFycmF5KTtcbmFycmF5ID0gWy4uLmFycmF5LCBvbGRQcm9qZWN0LCBuZXdQcm9qZWN0XTtcblxuY29uc3QgYWRkVG9MaXN0ID0gKChhcnIsIGNhdGVnb3J5PVwiaW5ib3hcIikgPT4ge1xuIGlmIChhcnIpeyBcbiAgIGFyci5jYXRlZ29yeT1jYXRlZ29yeVxuICBhcnJheT1bLi4uYXJyYXksIGFycl19XG4gIGxldCBPYmogPSBhcnJheS5maWx0ZXIoKGl0ZW0pPT5pdGVtLmNhdGVnb3J5PT09Y2F0ZWdvcnkpXG4gIGJvZHl5LmlubmVySFRNTD1cIiBcIlxuICBPYmouZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpdGVtLmNhdGVnb3J5ID1jYXRlZ29yeVxuICAgIGJvZHl5LmFwcGVuZENoaWxkKGl0ZW0uY2FyZCk7XG4gICAgaXRlbS5jYXJkLmlkID0gaW5kZXg7XG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgfSk7XG4gIGJvZHl5LmFwcGVuZENoaWxkKGFkZEl0ZW1zLmFkZEJ0bilcbn0pO1xuY29uc3QgZmlsdGVyTGlzdCA9KGFycik9PntcbiAgYm9keXkuaW5uZXJIVE1MID0gXCIgXCI7XG4gIGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGJvZHl5LmFwcGVuZENoaWxkKGl0ZW0uY2FyZCk7XG4gICAgaXRlbS5jYXJkLmlkID0gaW5kZXg7XG4gICAgY29uc29sZS5sb2coaXRlbS5jYXJkLmlkKTtcbiAgfSk7XG4gIGJvZHl5LmFwcGVuZENoaWxkKGFkZEl0ZW1zLmFkZEJ0bik7XG59XG5cblxuUHJvamVjdCgpXG5leHBvcnQge2FycmF5LGFkZFRvTGlzdCwgZmlsdGVyTGlzdH1cbiIsImltcG9ydCB7XG4gIHdyYXAsXG4gIGdldENsYXNzTm9kZSxcbiAgbmV3Tm9kZSxcbiAgZXZlbnRzLFxuICB0b2dnbGVDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIGNyZWF0ZVNlbGVjdCxcbiAgZGVsZXRlQnRuLFxuICBsYWJlbFdyYXAsXG4gIGFsbEF0dHJpYnV0ZVxufSBmcm9tIFwiLi9zaG9ydHNcIjtcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKGhlYWRlcixoZWFkaW5nID0gXCJcIiwgY29udGVudCA9IFwiXCIsIHByaW9yaXR5ID0gXCJcIikgPT4ge1xuICBjb25zdCBzZXRWYWx1ZXM9KCk9PntcbiAgICBcbiAgfVxuICBjb25zdCBib2R5eSA9IGdldENsYXNzTm9kZShcImJvZHlcIik7XG4gIC8vIG1vZGFsXG4gIGNvbnN0IG1vZGFsID0gbmV3Tm9kZShcImRpdlwiKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuXG4gIC8vIEZvcm1cbiAgY29uc3QgZm9ybSA9IG5ld05vZGUoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuICBjb25zdCBoMyA9IG5ld05vZGUoXCJoM1wiKTtcbiAgY29uc3QgdGl0bGUgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGNvbnN0IHRleHRJbnB1dCA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuU2F2ZSA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuQ2FuY2VsID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBidG5TYXZlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ0bkNhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG5TYXZlLnZhbHVlID0gXCJBZGRcIjtcbiAgYnRuQ2FuY2VsLnZhbHVlID0gXCJjYW5jZWxcIjtcbiAgY29uc3Qgb3B0aW9uID0gY3JlYXRlU2VsZWN0KCk7XG4gIGFkZENsYXNzKGJ0blNhdmUsIFwic2F2ZVwiKTtcbiAgYWRkQ2xhc3MoYnRuQ2FuY2VsLCBcInJlbW92ZVwiKTtcbiAgaDMudGV4dENvbnRlbnQgPSBoZWFkZXJ8fFwiQWRkIHRvIHRvZG9cIjtcbiAgdGl0bGUudmFsdWUgPSBoZWFkaW5nO1xuICB0ZXh0SW5wdXQudmFsdWUgPSBjb250ZW50O1xuICBvcHRpb24udmFsdWU9IHByaW9yaXR5XG4gIGNvbnN0IHRpdGxlV3JhcCA9IGxhYmVsV3JhcCh0aXRsZSwgXCJUYXNrIHRpdGxlXCIpO1xuICBjb25zdCB0ZXh0SW5wdXRXcmFwID0gbGFiZWxXcmFwKHRleHRJbnB1dCwgXCJUYXNrIElucHV0XCIpO1xuICBjb25zdCBvcHRpb25XcmFwID0gbGFiZWxXcmFwKG9wdGlvbixcIlNldCBQcmlvcml0eVwiKVxuICBjb25zdCBkZWwgPSBkZWxldGVCdG4oKTtcbiAgLy8gISBSZW1lbWJlciB0byBjaGFuZ2UgdGhpc1xuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9KVxuICBsZXQgZm9ybVZhbHVlcyA9IFtdXG4gIGV2ZW50cyhmb3JtLCAoKT0+e1xuICAgZm9ybVZhbHVlcyA9IFt0aXRsZS52YWx1ZSx0ZXh0SW5wdXQudmFsdWUsb3B0aW9uLnZhbHVlXVxuICB9LFwic3VibWl0XCIpXG4gIGNvbnN0IGdldEZvcm1WYWx1ZXM9KCk9Pihmb3JtVmFsdWVzKVxuY29uc3QgY2xlYXJJbnB1dD0gKCk9PntcbiAgdGl0bGUudmFsdWU9XCJcIlxuICB0ZXh0SW5wdXQudmFsdWU9XCJcIlxuICBvcHRpb24udmFsdWU9XCJcIlxufVxuICAvLyEgVGhlIFwid3JhcFwiIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXBwZW5kIGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5IHRvIHRoZSBtYWluIGVsZW1lbnRcbiAgd3JhcChmb3JtLCBbaDMsIHRpdGxlV3JhcCwgdGV4dElucHV0V3JhcCwgb3B0aW9uV3JhcCwgYnRuU2F2ZSwgYnRuQ2FuY2VsLCBkZWxdKTtcbiAgd3JhcChtb2RhbCwgW2Zvcm1dKTtcbiAgd3JhcChib2R5eSwgW21vZGFsXSk7XG4gIFxuICByZXR1cm4geyBtb2RhbCwgZ2V0Rm9ybVZhbHVlcywgZm9ybSwgY2xlYXJJbnB1dCB9O1xufSk7IiwiZXhwb3J0IGNvbnN0IGdldENsYXNzTm9kZSA9IChjbGFzc0l0ZW0pID0+IHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzSXRlbX1gKTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUJ0biA9KCk9PntcbmNvbnN0IGJ1dHRvbiA9bmV3Tm9kZShcImJ1dHRvblwiKTtcblxuICAgYnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdG5cIik7XG4gIHJldHVybiBidXR0b25cbn1cbmV4cG9ydCBjb25zdCB3cmFwID0gKGVsZW1lbnQsIGFycmF5KSA9PiB7XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcbn07XG5leHBvcnQgY29uc3QgbGFiZWxXcmFwID0oZWxlbWVudCx0aXRsZSk9PntcbiAgY29uc3QgZGl2ID0gbmV3Tm9kZShcImRpdlwiKVxuICBjb25zdCBsYWJlbCA9IG5ld05vZGUoXCJsYWJlbFwiKVxuICBsYWJlbC50ZXh0Q29udGVudCA9IHRpdGxlXG4gIHdyYXAoZGl2LFtsYWJlbCxlbGVtZW50XSlcbiAgcmV0dXJuIGRpdlxufVxuZXhwb3J0IGNvbnN0IG5ld05vZGUgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtpdGVtfWApO1xufTtcbmV4cG9ydCBjb25zdCBhZGRDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkID0gY2xhc3NOYW1lO1xufTtcbmV4cG9ydCBjb25zdCB0b2dnbGVDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG59O1xuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IChlbGVtZW50LCBmdW5jdCwgZXZlbnRMaXN0ZW5lciA9IFwiY2xpY2tcIikgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lciwgZnVuY3QpO1xufTtcbmV4cG9ydCBjb25zdCBhbGxBdHRyaWJ1dGUgPShhdHRyaWJ1dGUsIGFycmF5LHNldD10cnVlKT0+e1xuICBhcnJheS5mb3JFYWNoKChpdGVtKT0+e1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSxzZXQpXG4gIH0pXG59XG5leHBvcnQgY29uc3QgQnRuPSgpID0+e1xuICBjb25zdCBhZGRCdG4gPSBuZXdOb2RlKFwiYnV0dG9uXCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZEJ0blwiKTtcbiAgYWRkQnRuLmlubmVySFRNTCA9IFwiJnBsdXM7XCI7XG4gIHJldHVybiBhZGRCdG5cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gbmV3Tm9kZShcInNlbGVjdFwiKTtcbiAgLy8gc2VsZWN0LmlkID0gXCJobW1cIjtcbiAgY29uc3QgYXJyID0gW1wibG93XCIsIFwiaGlnaFwiLCBcInVyZ2VudFwiXTtcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBuZXdOb2RlKFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW07XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3Q7XG59O1xuIiwiaW1wb3J0IHsgQnRuLCBnZXRDbGFzc05vZGUsIG5ld05vZGUgfSBmcm9tIFwiLi9tb2R1bGVzL3Nob3J0c1wiO1xuaW1wb3J0IHsgYXJyYXksIGFkZFRvTGlzdCwgZmlsdGVyTGlzdCAsIGNoYW5nZUNhdGVnb3J5fSBmcm9tIFwiLi9pbmRleFwiO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZ2V0Q2xhc3NOb2RlKFwicHJvamVjdHNcIik7XG4gICAgY29uc3QgaW5wdXQgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG5cblxuXG5jb25zdCBhZGRidG4gPSAoKCkgPT4ge1xuICBjb25zdCBidG4gPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidG4udmFsdWUgPSBcIiBBZGRcIjtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoUHJvamVjdChpbnB1dC52YWx1ZSkpXG4gICAgaW5wdXQudmFsdWU9XCJcIlxuICB9KTtcbiAgcmV0dXJuIGJ0blxufSlcbmNvbnN0IGNhbmVsQnRuID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4udmFsdWUgPSBcIiBDYW5jZWxcIjtcbiAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICBwcm9qY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICAgfSk7XG4gIHJldHVybiBidG47XG59O1xuXG5cbmNvbnN0IHByb2pjdEZvcm0gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgcHJvbXB0VXNlciA9IG5ld05vZGUoXCJmb3JtXCIpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICBwcm9tcHRVc2VyLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIHByb21wdFVzZXIuYXBwZW5kQ2hpbGQoYWRkYnRuKCkpO1xuXG4gICAgcHJvbXB0VXNlci5hcHBlbmRDaGlsZChjYW5lbEJ0bigpKVxuICAgIHJldHVybiBwcm9tcHRVc2VyXG59KSgpXG5cbmNvbnN0IFByb2pBZGRCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBCdG4oKTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRCdG5cIik7XG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RzQnRuXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgIHByb2pjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIilcbiAgfSlcbiAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25cbn07XG4gXG5leHBvcnQgY29uc3QgUHJvamVjdCA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBQcm9qQWRkQnRuKCk7XG4gIGNvbnN0IGxpID0gbmV3Tm9kZShcImxpXCIpO1xuICBsaS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamN0Rm9ybSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcbiAgICBjaGFuZ2VDYXRlZ29yeSh0ZXh0KVxuICAgIC8vIGNvbnN0IG5ld0FyciA9IFthcnJheVsxXV1cbiAgICBjb25zb2xlLmxvZyhhcnJheSlcbmFkZFRvTGlzdChudWxsLCB0ZXh0KVxuICB9KVxuICByZXR1cm4gbGlcbn07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==