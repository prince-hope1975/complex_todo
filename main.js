/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ':root {\n  --clr: black;\n  --primary-clr: white;\n  --border-clr: black;\n  --border-radius: 4px;\n  font-family: "Courier New", Courier, monospace;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  gap: 0 1em;\n  background-image: url(https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60);\n}\nbody ul {\n  list-style-type: none;\n}\nbody ul h1 {\n  margin: 1rem;\n  text-decoration: underline;\n}\n@media (max-width: 575px) {\n  body .body {\n    margin-top: 3rem;\n  }\n}\n@media (min-width: 575px) {\n  body .body {\n    margin-left: 20rem;\n  }\n}\nbody .bodyy {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n}\n@media (min-width: 575px) {\n  body {\n    grid-template-columns: 1fr;\n  }\n  body .body {\n    grid-row: span 1;\n    grid-column: span 3;\n    padding-bottom: 2rem;\n  }\n}\n\nnav {\n  padding-left: 1rem;\n  background: rgba(152, 6, 152, 0.8);\n  color: var(--primary-clr);\n  grid-row: span 1;\n  grid-column: span 2;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  nav {\n    width: 20rem;\n    margin-bottom: 2rem;\n    min-height: 100vh;\n    position: fixed;\n  }\n}\n\n@keyframes outro {\n  0% {\n    transform: translate(0);\n  }\n  50% {\n    transform: translateX(50%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\ninput,\nselect,\noption {\n  outline: none;\n  padding: 0.2em 0.7em;\n}\n\n.addBtn {\n  background: var(--primary-clr);\n  color: var(--clr);\n  border: 2px solid var(--clr);\n  position: absolute;\n  top: 110%;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  transition: color 200ms ease, background 200ms ease;\n}\n.addBtn:hover {\n  --primary-clr: hsl(120, 77%, 66%);\n  --clr: white;\n  --border-clr: white;\n  outline: var(--primary-clr) 1px solid;\n}\n@media (max-width: 575px) {\n  .addBtn {\n    width: 5rem;\n    left: 50%;\n    margin-left: -2.5rem;\n  }\n}\n@media (min-width: 575px) {\n  .addBtn {\n    left: 50%;\n    width: 4rem;\n  }\n}\n@media (min-width: 693px) {\n  .addBtn {\n    margin-left: -2rem;\n  }\n}\n\n.mainContainer {\n  position: relative;\n  padding: 1rem;\n  z-index: 1;\n  padding: 1rem;\n  line-height: 3em;\n  margin: auto;\n  margin: 1rem;\n  box-shadow: 1px 1px 1px #333;\n  transition: transform 200ms ease;\n  max-width: 500px;\n  width: clamp(300px, 90%, 500px);\n}\n.mainContainer .deleteBtn {\n  border-radius: 50%;\n  transition: background 500ms ease;\n  transition: color 500ms ease;\n}\n.mainContainer .deleteBtn:hover {\n  background: #d35e5e;\n  color: #d3d2d2;\n}\n.mainContainer div select {\n  position: absolute;\n  right: 10px;\n  top: 80%;\n}\n.mainContainer div button {\n  padding: 0.3rem 1rem;\n  text-transform: uppercase;\n}\n\n.mainContainer:hover {\n  transform: translate(-0.1rem, -0.1rem);\n  box-shadow: 1px 1px 1px #333;\n}\n\nli :hover {\n  cursor: pointer;\n}\n\n.low {\n  background: rgba(0, 0, 255, 0.9);\n  color: white;\n}\n\n.high {\n  background: rgba(231, 185, 100, 0.9);\n}\n\n.urgent {\n  background: #c61010;\n  color: white;\n}\n\n.deleteBtn {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  border: none;\n  background: #ffa9a9;\n  width: 2rem;\n  height: 2rem;\n  display: grid;\n  place-content: center;\n  font-size: 2rem;\n  z-index: 3;\n}\n\n.modal {\n  position: fixed;\n  max-width: 100%;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  max-height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 8%;\n  width: 100%;\n}\n@media (min-width: 575px) {\n  .modal {\n    width: 100%;\n  }\n}\n\n.form {\n  position: relative;\n  width: clamp(50px, 70vw, 400px);\n  max-width: 90%;\n  background: #fffdfd;\n  margin: auto;\n  margin-bottom: 1000px;\n  height: clamp(60vh, 100vh);\n  display: flex;\n  gap: 1em;\n  flex-direction: column;\n  padding: 1rem;\n}\n.form div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3em;\n}\n\n.projects {\n  position: relative;\n  transition: all 300ms ease;\n  padding-bottom: 1rem;\n}\n.projects li {\n  font-size: 1.3rem;\n  margin: 0.1rem;\n  text-transform: capitalize;\n  font-family: "Courier New", Courier, monospace;\n}\n.projects li:hover {\n  cursor: pointer;\n}\n.projects .prompt {\n  display: grid;\n  overflow: hidden;\n  transition: all 300ms ease;\n  z-index: 3;\n  background: var(--primary-clr);\n  max-width: 50%;\n  margin: auto;\n  border-radius: 5px;\n  box-shadow: 3px 2px 3px #333;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  position: relative;\n  max-height: 1000px;\n}\n@media (min-width: 575px) {\n  .projects .prompt {\n    width: 90%;\n    max-width: 250px;\n  }\n}\n.projects .prompt .wrap {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 90%;\n}\n.projects .prompt textarea {\n  letter-spacing: 3px;\n  margin-top: 1rem;\n  max-width: 80%;\n  display: block;\n  height: 4rem;\n  line-height: 1rem;\n  background: rgba(128, 128, 128, 0.1);\n}\n.projects .prompt input[type=button],\n.projects .prompt input[type=submit] {\n  border-radius: 4px;\n}\n.projects .prompt input[type=submit] {\n  background: rgba(0, 204, 0, 0.5);\n}\n.projects .prompt input[type=button] {\n  background: rgba(204, 41, 0, 0.5);\n}\n.projects .projectsBtn {\n  position: absolute;\n  bottom: -25px;\n  width: 50px;\n  left: 50%;\n  margin-left: -25px;\n  color: var(--clr);\n  background: var(--primary-clr);\n  border: 2px solid var(--clr);\n}\n.projects .projectsBtn:hover {\n  --primary-clr:rgba(152, 6, 152, 0.5);\n  --clr: white;\n  outline: var(--primary-clr) 1px solid;\n}\n\n.logo {\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\nselect {\n  border: 1px solid #ccc;\n  height: 2rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\noption {\n  background: inherit;\n  height: 2rem;\n}\n\n.visible {\n  transform-origin: top;\n  transform: scale(1, 0);\n  max-height: 0;\n  height: 0px;\n  min-height: 0;\n  color: transparent;\n  margin-bottom: 0;\n  transition: padding 1000ms ease-in-out, max-height 1000ms ease-in-out, transform 1000ms ease, margin-bottom 1000ms ease;\n}\n.visible .prompt * {\n  opacity: 0;\n  transition: opacity 400ms ease-in-out;\n}\n.visible .form {\n  opacity: 0;\n  transition: opacity 300ms ease-in-out;\n}\n\n/*# sourceMappingURL=style.css.map */\n',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/scss/style.scss",
              "webpack://./src/style/style.css",
            ],
            names: [],
            mappings:
              "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",
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
      /*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
      /***/ (module) => {
        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          var _i =
            arr == null
              ? null
              : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
                arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        module.exports = function cssWithMappingToString(item) {
          var _item = _slicedToArray(item, 4),
            content = _item[1],
            cssMapping = _item[3];

          if (!cssMapping) {
            return content;
          }

          if (typeof btoa === "function") {
            // eslint-disable-next-line no-undef
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style/style.css":
      /*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              sourceMap: item[3],
            };

            if (index !== -1) {
              stylesInDom[index].references++;
              stylesInDom[index].updater(obj);
            } else {
              stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap
              ) {
                return;
              }

              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var style = document.createElement("style");
          options.setAttributes(style, options.attributes);
          options.insert(style);
          return style;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(style) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            style.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ changeCategory: () =>
            /* binding */ changeCategory,
          /* harmony export */ array: () => /* binding */ array,
          /* harmony export */ addToList: () => /* binding */ addToList,
          /* harmony export */ filterList: () => /* binding */ filterList,
          /* harmony export */
        });
        /* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./projects */ "./src/projects.js");
        /* harmony import */ var _modules_shorts__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./modules/shorts */ "./src/modules/shorts.js"
          );
        /* harmony import */ var _modules_components__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./modules/components */ "./src/modules/components.js"
          );
        /* harmony import */ var _src_style_style_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../src/style/style.css */ "./src/style/style.css"
          );
        const bodyy = (0,
        _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("bodyy");
        const main = (0,
        _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("body");
        let array = [];
        let category = "inbox";
        const changeCategory = (input) => {
          category = input;
        };
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
          const container = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
          const contentContainer = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
          const Div = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "div"
          );
          const button = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.deleteBtn)();
          const h3 = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "h3"
          );
          const p = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "p"
          );
          const select = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.createSelect)();
          const editBtn = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("button");
          const Form = (0,
          _modules_components__WEBPACK_IMPORTED_MODULE_2__.form)(
            "Edit Task",
            heading,
            content,
            option
          );
          editBtn.textContent = "edit";
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
            editBtn,
            () => {
              (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(
                Form.modal,
                "visible"
              );
            }
          );
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
            Form.form,
            (e) => {
              e.preventDefault();
              console.log(Form.getFormValues());
              const [title, content, priority] = Form.getFormValues();
              defaultConfig(title, content, priority);
              console.log(Form.form);
              Form.modal.classList.toggle("visible");
            },
            "submit"
          );
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
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
                index !=
                Number(e.target.parentElement.parentElement.parentElement.id)
              );
            });
            array = arr;
            addToList();
          });

          const defaultConfig = (heading, content, option) => {
            h3.textContent = heading;
            p.textContent = content;
            select.value = option;
          };
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

        const Form = (0,
        _modules_components__WEBPACK_IMPORTED_MODULE_2__.form)();
        const addItems = (() => {
          const addBtn = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.Btn)();
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
            addBtn,
            (e) => {
              e.preventDefault();
              (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(
                Form.modal,
                "visible"
              );
            }
          );
          bodyy.appendChild(addBtn);
          return { addBtn };
        })();

        (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
          Form.form,
          (e) => {
            e.preventDefault();
            const [title, content, options] = Form.getFormValues();
            if (title && content && options) {
              const newProject = TodoItem(title, content, options);
              addToList(newProject, category);
            }
            e.target.parentElement.classList.toggle("visible");
            Form.clearInput();
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
        newProject.category = category;
        bodyy.appendChild(newProject.card);

        const oldProject = TodoItem(
          "Hello World",
          "I going to cheange",
          "high"
        );

        bodyy.appendChild(oldProject.card);

        // console.log(array);
        array = [...array, oldProject, newProject];

        const addToList = (arr, category = "inbox") => {
          if (arr) {
            arr.category = category;
            array = [...array, arr];
          }
          let Obj = array.filter((item) => item.category === category);
          bodyy.innerHTML = " ";
          Obj.forEach((item, index) => {
            item.category = category;
            bodyy.appendChild(item.card);
            item.card.id = index;
            console.log(arr);
          });
          bodyy.appendChild(addItems.addBtn);
        };
        const filterList = (arr) => {
          bodyy.innerHTML = " ";
          arr.forEach((item, index) => {
            bodyy.appendChild(item.card);
            item.card.id = index;
            console.log(item.card.id);
          });
          bodyy.appendChild(addItems.addBtn);
        };

        (0, _projects__WEBPACK_IMPORTED_MODULE_1__.Project)();

        /***/
      },

    /***/ "./src/modules/components.js":
      /*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ form: () => /* binding */ form,
          /* harmony export */
        });
        /* harmony import */ var _shorts__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shorts */ "./src/modules/shorts.js");

        const form = (header, heading = "", content = "", priority = "") => {
          const setValues = () => {};
          const bodyy = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)(
            "body"
          );
          // modal
          const modal = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "div"
          );

          modal.classList.add("modal");
          modal.classList.add("visible");

          // Form
          const form = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "form"
          );
          form.classList.add("form");
          const h3 = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("h3");
          const title = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "input"
          );
          const textInput = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "textarea"
          );
          const btnSave = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "input"
          );
          const btnCancel = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "input"
          );
          btnSave.setAttribute("type", "submit");
          btnCancel.setAttribute("type", "button");
          btnSave.value = "Add";
          btnCancel.value = "cancel";
          const option = (0,
          _shorts__WEBPACK_IMPORTED_MODULE_0__.createSelect)();
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.addClass)(btnSave, "save");
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.addClass)(
            btnCancel,
            "remove"
          );
          h3.textContent = header || "Add to todo";
          title.value = heading;
          textInput.textContent = content;
          option.value = priority;
          const titleWrap = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(
            title,
            "Task title"
          );
          const textInputWrap = (0,
          _shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(
            textInput,
            "Task Input"
          );
          const optionWrap = (0,
          _shorts__WEBPACK_IMPORTED_MODULE_0__.labelWrap)(
            option,
            "Set Priority"
          );
          const del = (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.deleteBtn)();
          // ! Remember to change this
          del.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.target);
            e.target.parentElement.parentElement.classList.toggle("visible");
          });
          let formValues = [];
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.events)(
            form,
            () => {
              formValues = [title.value, textInput.value, option.value];
            },
            "submit"
          );
          const getFormValues = () => formValues;
          const clearInput = () => {
            title.value = "";
            textInput.value = "";
            option.value = "";
          };
          //! The "wrap" function is used to append all the elements in the array to the main element
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(form, [
            h3,
            titleWrap,
            textInputWrap,
            optionWrap,
            btnSave,
            btnCancel,
            del,
          ]);
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(modal, [form]);
          (0, _shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(bodyy, [modal]);

          return { modal, getFormValues, form, clearInput };
        };

        /***/
      },

    /***/ "./src/modules/shorts.js":
      /*!*******************************!*\
  !*** ./src/modules/shorts.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getClassNode: () => /* binding */ getClassNode,
          /* harmony export */ deleteBtn: () => /* binding */ deleteBtn,
          /* harmony export */ wrap: () => /* binding */ wrap,
          /* harmony export */ labelWrap: () => /* binding */ labelWrap,
          /* harmony export */ newNode: () => /* binding */ newNode,
          /* harmony export */ addClass: () => /* binding */ addClass,
          /* harmony export */ toggleClass: () => /* binding */ toggleClass,
          /* harmony export */ events: () => /* binding */ events,
          /* harmony export */ allAttribute: () => /* binding */ allAttribute,
          /* harmony export */ Btn: () => /* binding */ Btn,
          /* harmony export */ createSelect: () => /* binding */ createSelect,
          /* harmony export */
        });
        const getClassNode = (classItem) => {
          const item = document.querySelector(`.${classItem}`);
          return item;
        };
        const deleteBtn = () => {
          const button = newNode("button");

          button.innerHTML = "&times;";
          button.classList.add("deleteBtn");
          return button;
        };
        const wrap = (element, array) => {
          array.forEach((item) => {
            element.appendChild(item);
          });
        };
        const labelWrap = (element, title) => {
          const div = newNode("div");
          const label = newNode("label");
          label.textContent = title;
          wrap(div, [label, element]);
          return div;
        };
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
        const allAttribute = (attribute, array, set = true) => {
          array.forEach((item) => {
            item.setAttribute(attribute, set);
          });
        };
        const Btn = () => {
          const addBtn = newNode("button");
          addBtn.classList.add("addBtn");
          addBtn.innerHTML = "&plus;";
          return addBtn;
        };

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

        /***/
      },

    /***/ "./src/projects.js":
      /*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Project: () => /* binding */ Project,
          /* harmony export */
        });
        /* harmony import */ var _modules_shorts__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./modules/shorts */ "./src/modules/shorts.js"
          );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./index */ "./src/index.js");

        const projectContainer = (0,
        _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.getClassNode)("projects");
        const input = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
          "input"
        );

        const addbtn = () => {
          const btn = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "input"
          );
          btn.setAttribute("type", "submit");
          btn.value = " Add";
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            projctForm.classList.toggle("visible");
            projectContainer.appendChild(Project(input.value));
            input.value = "";
          });
          return btn;
        };
        const canelBtn = () => {
          const btn = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "input"
          );
          btn.setAttribute("type", "button");
          btn.value = " Cancel";
          btn.addEventListener("click", () => {
            projctForm.classList.toggle("visible");
          });
          return btn;
        };

        const projctForm = (() => {
          const btnWrapper = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("div");
          const add = addbtn();
          const cancel = canelBtn();
          // const cancleBtnWrapper = newNode("div")
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(btnWrapper, [
            add,
            cancel,
          ]);
          btnWrapper.classList.add("wrap");
          const promptUser = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)("form");
          input.setAttribute("type", "text");
          (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.wrap)(promptUser, [
            ,
            input,
            btnWrapper,
          ]);
          promptUser.classList.add("prompt", "visible");
          return promptUser;
        })();

        const ProjAddBtn = () => {
          const addProjectButton = (0,
          _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.Btn)();

          addProjectButton.classList.remove("addBtn");
          addProjectButton.classList.add("projectsBtn");
          addProjectButton.addEventListener("click", () => {
            projctForm.classList.toggle("visible");
          });
          return addProjectButton;
        };

        const Project = (text) => {
          const addProjectButton = ProjAddBtn();
          const li = (0, _modules_shorts__WEBPACK_IMPORTED_MODULE_0__.newNode)(
            "li"
          );
          li.textContent = text;
          projectContainer.appendChild(addProjectButton);
          projectContainer.appendChild(projctForm);
          li.addEventListener("click", (e) => {
            (0, _index__WEBPACK_IMPORTED_MODULE_1__.changeCategory)(text);
            // const newArr = [array[1]]
            console.log(_index__WEBPACK_IMPORTED_MODULE_1__.array);
            (0, _index__WEBPACK_IMPORTED_MODULE_1__.addToList)(null, text);
          });
          return li;
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcs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cGFjazovL2NvbXBsZXgtdG9kby8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vLi9zcmMvbW9kdWxlcy9zaG9ydHMuanMiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29tcGxleC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb21wbGV4LXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvbXBsZXgtdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNscjogYmxhY2s7XFxuICAtLXByaW1hcnktY2xyOiB3aGl0ZTtcXG4gIC0tYm9yZGVyLWNscjogYmxhY2s7XFxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMCAxZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDQyOTcwNTA1NjgtOTEwZDI0YzQyNmQzP2l4aWQ9TW53eE1qQTNmREY4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHd4Zkh4OFpXNThNSHg4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjApO1xcbn1cXG5ib2R5IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuYm9keSB1bCBoMSB7XFxuICBtYXJnaW46IDFyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XFxuICBib2R5IC5ib2R5IHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICBib2R5IC5ib2R5IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcmVtO1xcbiAgfVxcbn1cXG5ib2R5IC5ib2R5eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzVweCkge1xcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgYm9keSAuYm9keSB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgfVxcbn1cXG5cXG5uYXYge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNTIsIDYsIDE1MiwgMC44KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBncmlkLXJvdzogc3BhbiAxO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIG5hdiB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBvdXRybyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xcbiAgfVxcbn1cXG5pbnB1dCxcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjJlbSAwLjdlbTtcXG59XFxuXFxuLmFkZEJ0biB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBjb2xvcjogdmFyKC0tY2xyKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNscik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLCBiYWNrZ3JvdW5kIDIwMG1zIGVhc2U7XFxufVxcbi5hZGRCdG46aG92ZXIge1xcbiAgLS1wcmltYXJ5LWNscjogaHNsKDEyMCwgNzclLCA2NiUpO1xcbiAgLS1jbHI6IHdoaXRlO1xcbiAgLS1ib3JkZXItY2xyOiB3aGl0ZTtcXG4gIG91dGxpbmU6IHZhcigtLXByaW1hcnktY2xyKSAxcHggc29saWQ7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xcbiAgLmFkZEJ0biB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMi41cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcXG4gIC5hZGRCdG4ge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjkzcHgpIHtcXG4gIC5hZGRCdG4ge1xcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XFxuICB9XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW46IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2U7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MCUsIDUwMHB4KTtcXG59XFxuLm1haW5Db250YWluZXIgLmRlbGV0ZUJ0biB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDUwMG1zIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlO1xcbn1cXG4ubWFpbkNvbnRhaW5lciAuZGVsZXRlQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkMzVlNWU7XFxuICBjb2xvcjogI2QzZDJkMjtcXG59XFxuLm1haW5Db250YWluZXIgZGl2IHNlbGVjdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogODAlO1xcbn1cXG4ubWFpbkNvbnRhaW5lciBkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1haW5Db250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMXJlbSwgLTAuMXJlbSk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjMzMzO1xcbn1cXG5cXG5saSA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMjU1LCAwLjkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgMTg1LCAxMDAsIDAuOSk7XFxufVxcblxcbi51cmdlbnQge1xcbiAgYmFja2dyb3VuZDogI2M2MTAxMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRlbGV0ZUJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZhOWE5O1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcGFkZGluZzogOCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IGNsYW1wKDUwcHgsIDcwdncsIDQwMHB4KTtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmRmZDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDEwMDBweDtcXG4gIGhlaWdodDogY2xhbXAoNjB2aCwgMTAwdmgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5mb3JtIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4ucHJvamVjdHMgbGkge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDAuMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLnByb2plY3RzIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnByb2plY3RzIC5wcm9tcHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDNweCAycHggM3B4ICMzMzM7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSB7XFxuICAucHJvamVjdHMgLnByb21wdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICB9XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IC53cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG59XFxuLnByb2plY3RzIC5wcm9tcHQgdGV4dGFyZWEge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9YnV0dG9uXSxcXG4ucHJvamVjdHMgLnByb21wdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ucHJvamVjdHMgLnByb21wdCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDQsIDAsIDAuNSk7XFxufVxcbi5wcm9qZWN0cyAucHJvbXB0IGlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwNCwgNDEsIDAsIDAuNSk7XFxufVxcbi5wcm9qZWN0cyAucHJvamVjdHNCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xcbiAgY29sb3I6IHZhcigtLWNscik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHIpO1xcbn1cXG4ucHJvamVjdHMgLnByb2plY3RzQnRuOmhvdmVyIHtcXG4gIC0tcHJpbWFyeS1jbHI6cmdiYSgxNTIsIDYsIDE1MiwgMC41KTtcXG4gIC0tY2xyOiB3aGl0ZTtcXG4gIG91dGxpbmU6IHZhcigtLXByaW1hcnktY2xyKSAxcHggc29saWQ7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbnNlbGVjdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxub3B0aW9uIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMTAwMG1zIGVhc2UtaW4tb3V0LCBtYXgtaGVpZ2h0IDEwMDBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDEwMDBtcyBlYXNlLCBtYXJnaW4tYm90dG9tIDEwMDBtcyBlYXNlO1xcbn1cXG4udmlzaWJsZSAucHJvbXB0ICoge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi52aXNpYmxlIC5mb3JtIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDRSw4Q0FBQTtBQ0NKOztBREVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSw4TEFBQTtBQ0VGO0FEQ0U7RUFLRSxxQkFBQTtBQ0hKO0FEREk7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUNHTjtBREVJO0VBREY7SUFFSSxnQkFBQTtFQ0NKO0FBQ0Y7QURBSTtFQUpGO0lBS0ksa0JBQUE7RUNHSjtBQUNGO0FEQUU7RUFDRSxrQkFB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QSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2dCTjtBREhJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsb0NBQUE7QUNJTjtBREZJOztFQUVFLGtCQUFBO0FDSU47QURGSTtFQUNFLGdDQUFBO0FDSU47QURGSTtFQUNFLGlDQUFBO0FDSU47QURERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUNHSjtBREZJO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0YscUNBQUE7QUNJSjs7QURJQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0RGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQVNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUhBQUE7QUNQRjtBRFRFO0VBQ0UsVUFBQTtFQUNBLHFDQUFBO0FDV0o7QURURTtFQUNFLFVBQUE7RUFDQSxxQ0FBQTtBQ1dKOztBQUVBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJvZHl5ID0gZ2V0Q2xhc3NOb2RlKFwiYm9keXlcIik7XG5jb25zdCBtYWluID0gZ2V0Q2xhc3NOb2RlKFwiYm9keVwiKTtcbmxldCBhcnJheSA9IFtdO1xubGV0IGNhdGVnb3J5PSBcImluYm94XCI7XG5leHBvcnQgY29uc3QgY2hhbmdlQ2F0ZWdvcnk9KGlucHV0KT0+e1xuY2F0ZWdvcnkgPSBpbnB1dFxufVxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQge1xuICAvLyAgIHdyYXAsXG4gIGdldENsYXNzTm9kZSxcbiAgbmV3Tm9kZSxcbiAgZXZlbnRzLFxuICB0b2dnbGVDbGFzcyxcbiAgY3JlYXRlU2VsZWN0LFxuICBkZWxldGVCdG4sXG4gIEJ0bixcbiAgd3JhcCxcbn0gZnJvbSBcIi4vbW9kdWxlcy9zaG9ydHNcIjtcbmltcG9ydCB7IGZvcm0gfSBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHNcIjtcbmltcG9ydCBcIi4uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIjtcbmNvbnN0IFRvZG9PYmplY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB0aGlzLmNoZWNrbGlzdCA9IGZhbHNlO1xufTtcbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7fTtcblxuY29uc3QgVG9kb0l0ZW0gPSAoaGVhZGluZyA9IFwiXCIsIGNvbnRlbnQgPSBcIlwiLCBvcHRpb24gPSBcImxvd1wiKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ld05vZGUoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBuZXdOb2RlKFwiZGl2XCIpO1xuICBjb25zdCBEaXYgPSBuZXdOb2RlKFwiZGl2XCIpO1xuICBjb25zdCBidXR0b24gPSBkZWxldGVCdG4oKTtcbiAgY29uc3QgaDMgPSBuZXdOb2RlKFwiaDNcIik7XG4gIGNvbnN0IHAgPSBuZXdOb2RlKFwicFwiKTtcbiAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlU2VsZWN0KCk7XG4gIGNvbnN0IGVkaXRCdG4gPSBuZXdOb2RlKFwiYnV0dG9uXCIpO1xuICBjb25zdCBGb3JtID0gZm9ybShcIkVkaXQgVGFza1wiLGhlYWRpbmcsIGNvbnRlbnQsIG9wdGlvbik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgZXZlbnRzKGVkaXRCdG4sICgpID0+IHtcbiAgICB0b2dnbGVDbGFzcyhGb3JtLm1vZGFsLCBcInZpc2libGVcIik7XG4gIH0pO1xuICBldmVudHMoRm9ybS5mb3JtLChlKT0+e1xuZS5wcmV2ZW50RGVmYXVsdCgpXG5jb25zb2xlLmxvZyhGb3JtLmdldEZvcm1WYWx1ZXMoKSlcbmNvbnN0IFt0aXRsZSwgY29udGVudCwgcHJpb3JpdHldID0gRm9ybS5nZXRGb3JtVmFsdWVzKClcbmRlZmF1bHRDb25maWcodGl0bGUsIGNvbnRlbnQsIHByaW9yaXR5KVxuY29uc29sZS5sb2coRm9ybS5mb3JtKTtcbiBGb3JtLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9LFwic3VibWl0XCIpXG4gIGV2ZW50cyhcbiAgICBzZWxlY3QsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgcGFyZW50LmNsYXNzTmFtZSA9IGBtYWluQ29udGFpbmVyICR7dmFsfWA7XG4gICAgfSxcbiAgICBcImNoYW5nZVwiXG4gICk7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBhcnIgPSBhcnJheS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbmRleCAhPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICApO1xuICAgIH0pO1xuICAgIGFycmF5ID0gYXJyO1xuICAgIGFkZFRvTGlzdCgpO1xuICB9KTtcblxuICBjb25zdCBkZWZhdWx0Q29uZmlnID0gKChoZWFkaW5nLCBjb250ZW50LCBvcHRpb24pID0+IHtcbiAgICBoMy50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgc2VsZWN0LnZhbHVlID0gb3B0aW9uO1xuICB9KVxuICBkZWZhdWx0Q29uZmlnKGhlYWRpbmcsIGNvbnRlbnQsIG9wdGlvbik7XG4gIGNvbnN0IGVkaXRIZWFkaW5nID0gKHZhbCkgPT4ge1xuICAgIGgzLnRleHRDb250ZW50ID0gdmFsO1xuICB9O1xuICBjb25zdCBlZGl0Q29udGVudCA9ICh2YWwpID0+IHtcbiAgICBwLnRleHRDb250ZW50ID0gdmFsO1xuICB9O1xuXG4gIC8vIFRPRE8gdXBkYXRlIGNvbXBvbmVudFxuICBjb25zdCBjYXJkID0gKCgpID0+IHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKEZvcm0ubW9kYWwpO1xuXG4gICAgRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIsIG9wdGlvbik7XG4gICAgcmV0dXJuIERpdjtcbiAgfSkoKTtcbiAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYXJkLFxuICAgIGVkaXRDb250ZW50LFxuICAgIGVkaXRIZWFkaW5nLFxuICAgIGNoYW5nZVByaW9yaXR5LFxuICB9O1xufTtcblxuY29uc3QgRm9ybSA9IGZvcm0oKTtcbmNvbnN0IGFkZEl0ZW1zID0gKCgpID0+IHtcbiAgY29uc3QgYWRkQnRuID0gQnRuKClcbiAgZXZlbnRzKGFkZEJ0biwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlQ2xhc3MoRm9ybS5tb2RhbCwgXCJ2aXNpYmxlXCIpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgcmV0dXJuIHthZGRCdG59XG59KSgpO1xuXG5ldmVudHMoXG4gIEZvcm0uZm9ybSxcbiAgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgW3RpdGxlLCBjb250ZW50LCBvcHRpb25zXSA9IEZvcm0uZ2V0Rm9ybVZhbHVlcygpO1xuICAgIGlmICh0aXRsZSAmJiBjb250ZW50ICYmIG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBUb2RvSXRlbSh0aXRsZSwgY29udGVudCwgb3B0aW9ucyk7XG4gICAgICBhZGRUb0xpc3QobmV3UHJvamVjdCxjYXRlZ29yeSk7XG4gICAgfVxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgRm9ybS5jbGVhcklucHV0KClcbiAgfSxcbiAgXCJzdWJtaXRcIlxuKTtcbmNvbnN0IHJlZHVjZXIgPSAodmFsKSA9PiB7XG4gIHN3aXRjaCAodmFsKSB7XG4gICAgY2FzZSBcIlRPREFZXCI6XG4gIH1cbn07XG5jb25zdCBuZXdQcm9qZWN0ID0gVG9kb0l0ZW0oXG4gIFwiSGVsbG8gV29ybGRcIixcbiAgXCJJJ20gZ29pbmcgdG8gY2hlYW5nZSB0aGUgd29ybGQgc29tZSBkYXlcIlxuKTtcbm5ld1Byb2plY3QuY2F0ZWdvcnk9Y2F0ZWdvcnlcbmJvZHl5LmFwcGVuZENoaWxkKG5ld1Byb2plY3QuY2FyZCk7XG5cbmNvbnN0IG9sZFByb2plY3QgPSBUb2RvSXRlbShcIkhlbGxvIFdvcmxkXCIsIFwiSSBnb2luZyB0byBjaGVhbmdlXCIsIFwiaGlnaFwiKTtcblxuYm9keXkuYXBwZW5kQ2hpbGQob2xkUHJvamVjdC5jYXJkKTtcblxuLy8gY29uc29sZS5sb2coYXJyYXkpO1xuYXJyYXkgPSBbLi4uYXJyYXksIG9sZFByb2plY3QsIG5ld1Byb2plY3RdO1xuXG5jb25zdCBhZGRUb0xpc3QgPSAoKGFyciwgY2F0ZWdvcnk9XCJpbmJveFwiKSA9PiB7XG4gaWYgKGFycil7IFxuICAgYXJyLmNhdGVnb3J5PWNhdGVnb3J5XG4gIGFycmF5PVsuLi5hcnJheSwgYXJyXX1cbiAgbGV0IE9iaiA9IGFycmF5LmZpbHRlcigoaXRlbSk9Pml0ZW0uY2F0ZWdvcnk9PT1jYXRlZ29yeSlcbiAgYm9keXkuaW5uZXJIVE1MPVwiIFwiXG4gIE9iai5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uY2F0ZWdvcnkgPWNhdGVnb3J5XG4gICAgYm9keXkuYXBwZW5kQ2hpbGQoaXRlbS5jYXJkKTtcbiAgICBpdGVtLmNhcmQuaWQgPSBpbmRleDtcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkSXRlbXMuYWRkQnRuKVxufSk7XG5jb25zdCBmaWx0ZXJMaXN0ID0oYXJyKT0+e1xuICBib2R5eS5pbm5lckhUTUwgPSBcIiBcIjtcbiAgYXJyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgYm9keXkuYXBwZW5kQ2hpbGQoaXRlbS5jYXJkKTtcbiAgICBpdGVtLmNhcmQuaWQgPSBpbmRleDtcbiAgICBjb25zb2xlLmxvZyhpdGVtLmNhcmQuaWQpO1xuICB9KTtcbiAgYm9keXkuYXBwZW5kQ2hpbGQoYWRkSXRlbXMuYWRkQnRuKTtcbn1cblxuXG5Qcm9qZWN0KClcbmV4cG9ydCB7YXJyYXksYWRkVG9MaXN0LCBmaWx0ZXJMaXN0fVxuIiwiaW1wb3J0IHtcbiAgd3JhcCxcbiAgZ2V0Q2xhc3NOb2RlLFxuICBuZXdOb2RlLFxuICBldmVudHMsXG4gIHRvZ2dsZUNsYXNzLFxuICBhZGRDbGFzcyxcbiAgY3JlYXRlU2VsZWN0LFxuICBkZWxldGVCdG4sXG4gIGxhYmVsV3JhcCxcbiAgYWxsQXR0cmlidXRlXG59IGZyb20gXCIuL3Nob3J0c1wiO1xuXG5leHBvcnQgY29uc3QgZm9ybSA9ICgoaGVhZGVyLGhlYWRpbmcgPSBcIlwiLCBjb250ZW50ID0gXCJcIiwgcHJpb3JpdHkgPSBcIlwiKSA9PiB7XG4gIGNvbnN0IHNldFZhbHVlcz0oKT0+e1xuICAgIFxuICB9XG4gIGNvbnN0IGJvZHl5ID0gZ2V0Q2xhc3NOb2RlKFwiYm9keVwiKTtcbiAgLy8gbW9kYWxcbiAgY29uc3QgbW9kYWwgPSBuZXdOb2RlKFwiZGl2XCIpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cbiAgLy8gRm9ybVxuICBjb25zdCBmb3JtID0gbmV3Tm9kZShcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gIGNvbnN0IGgzID0gbmV3Tm9kZShcImgzXCIpO1xuICBjb25zdCB0aXRsZSA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGV4dElucHV0ID0gbmV3Tm9kZShcInRleHRhcmVhXCIpO1xuICBjb25zdCBidG5TYXZlID0gbmV3Tm9kZShcImlucHV0XCIpO1xuICBjb25zdCBidG5DYW5jZWwgPSBuZXdOb2RlKFwiaW5wdXRcIik7XG4gIGJ0blNhdmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYnRuQ2FuY2VsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0blNhdmUudmFsdWUgPSBcIkFkZFwiO1xuICBidG5DYW5jZWwudmFsdWUgPSBcImNhbmNlbFwiO1xuICBjb25zdCBvcHRpb24gPSBjcmVhdGVTZWxlY3QoKTtcbiAgYWRkQ2xhc3MoYnRuU2F2ZSwgXCJzYXZlXCIpO1xuICBhZGRDbGFzcyhidG5DYW5jZWwsIFwicmVtb3ZlXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IGhlYWRlcnx8XCJBZGQgdG8gdG9kb1wiO1xuICB0aXRsZS52YWx1ZSA9IGhlYWRpbmc7XG4gIHRleHRJbnB1dC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIG9wdGlvbi52YWx1ZT0gcHJpb3JpdHlcbiAgY29uc3QgdGl0bGVXcmFwID0gbGFiZWxXcmFwKHRpdGxlLCBcIlRhc2sgdGl0bGVcIik7XG4gIGNvbnN0IHRleHRJbnB1dFdyYXAgPSBsYWJlbFdyYXAodGV4dElucHV0LCBcIlRhc2sgSW5wdXRcIik7XG4gIGNvbnN0IG9wdGlvbldyYXAgPSBsYWJlbFdyYXAob3B0aW9uLFwiU2V0IFByaW9yaXR5XCIpXG4gIGNvbnN0IGRlbCA9IGRlbGV0ZUJ0bigpO1xuICAvLyAhIFJlbWVtYmVyIHRvIGNoYW5nZSB0aGlzXG4gIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gIH0pXG4gIGxldCBmb3JtVmFsdWVzID0gW11cbiAgZXZlbnRzKGZvcm0sICgpPT57XG4gICBmb3JtVmFsdWVzID0gW3RpdGxlLnZhbHVlLHRleHRJbnB1dC52YWx1ZSxvcHRpb24udmFsdWVdXG4gIH0sXCJzdWJtaXRcIilcbiAgY29uc3QgZ2V0Rm9ybVZhbHVlcz0oKT0+KGZvcm1WYWx1ZXMpXG5jb25zdCBjbGVhcklucHV0PSAoKT0+e1xuICB0aXRsZS52YWx1ZT1cIlwiXG4gIHRleHRJbnB1dC52YWx1ZT1cIlwiXG4gIG9wdGlvbi52YWx1ZT1cIlwiXG59XG4gIC8vISBUaGUgXCJ3cmFwXCIgZnVuY3Rpb24gaXMgdXNlZCB0byBhcHBlbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgYXJyYXkgdG8gdGhlIG1haW4gZWxlbWVudFxuICB3cmFwKGZvcm0sIFtoMywgdGl0bGVXcmFwLCB0ZXh0SW5wdXRXcmFwLCBvcHRpb25XcmFwLCBidG5TYXZlLCBidG5DYW5jZWwsIGRlbF0pO1xuICB3cmFwKG1vZGFsLCBbZm9ybV0pO1xuICB3cmFwKGJvZHl5LCBbbW9kYWxdKTtcbiAgXG4gIHJldHVybiB7IG1vZGFsLCBnZXRGb3JtVmFsdWVzLCBmb3JtLCBjbGVhcklucHV0IH07XG59KTsiLCJleHBvcnQgY29uc3QgZ2V0Q2xhc3NOb2RlID0gKGNsYXNzSXRlbSkgPT4ge1xuICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NJdGVtfWApO1xuICByZXR1cm4gaXRlbTtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlQnRuID0oKT0+e1xuY29uc3QgYnV0dG9uID1uZXdOb2RlKFwiYnV0dG9uXCIpO1xuXG4gICBidXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUJ0blwiKTtcbiAgcmV0dXJuIGJ1dHRvblxufVxuZXhwb3J0IGNvbnN0IHdyYXAgPSAoZWxlbWVudCwgYXJyYXkpID0+IHtcbiAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBsYWJlbFdyYXAgPShlbGVtZW50LHRpdGxlKT0+e1xuICBjb25zdCBkaXYgPSBuZXdOb2RlKFwiZGl2XCIpXG4gIGNvbnN0IGxhYmVsID0gbmV3Tm9kZShcImxhYmVsXCIpXG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGl0bGVcbiAgd3JhcChkaXYsW2xhYmVsLGVsZW1lbnRdKVxuICByZXR1cm4gZGl2XG59XG5leHBvcnQgY29uc3QgbmV3Tm9kZSA9IChpdGVtKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2l0ZW19YCk7XG59O1xuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQgPSBjbGFzc05hbWU7XG59O1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUNsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbn07XG5leHBvcnQgY29uc3QgZXZlbnRzID0gKGVsZW1lbnQsIGZ1bmN0LCBldmVudExpc3RlbmVyID0gXCJjbGlja1wiKSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyLCBmdW5jdCk7XG59O1xuZXhwb3J0IGNvbnN0IGFsbEF0dHJpYnV0ZSA9KGF0dHJpYnV0ZSwgYXJyYXksc2V0PXRydWUpPT57XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pPT57XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLHNldClcbiAgfSlcbn1cbmV4cG9ydCBjb25zdCBCdG49KCkgPT57XG4gIGNvbnN0IGFkZEJ0biA9IG5ld05vZGUoXCJidXR0b25cIik7XG4gIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkQnRuXCIpO1xuICBhZGRCdG4uaW5uZXJIVE1MID0gXCImcGx1cztcIjtcbiAgcmV0dXJuIGFkZEJ0blxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0ID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBuZXdOb2RlKFwic2VsZWN0XCIpO1xuICAvLyBzZWxlY3QuaWQgPSBcImhtbVwiO1xuICBjb25zdCBhcnIgPSBbXCJsb3dcIiwgXCJoaWdoXCIsIFwidXJnZW50XCJdO1xuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IG5ld05vZGUoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gaXRlbTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdDtcbn07XG4iLCJpbXBvcnQgeyBCdG4sIGdldENsYXNzTm9kZSwgbmV3Tm9kZSAsIHdyYXB9IGZyb20gXCIuL21vZHVsZXMvc2hvcnRzXCI7XG5pbXBvcnQgeyBhcnJheSwgYWRkVG9MaXN0LCBmaWx0ZXJMaXN0ICwgY2hhbmdlQ2F0ZWdvcnl9IGZyb20gXCIuL2luZGV4XCI7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBnZXRDbGFzc05vZGUoXCJwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBpbnB1dCA9IG5ld05vZGUoXCJpbnB1dFwiKTtcblxuXG5cbmNvbnN0IGFkZGJ0biA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ0biA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGJ0bi52YWx1ZSA9IFwiIEFkZFwiO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2pjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChQcm9qZWN0KGlucHV0LnZhbHVlKSlcbiAgICBpbnB1dC52YWx1ZT1cIlwiXG4gIH0pO1xuICByZXR1cm4gYnRuXG59KVxuY29uc3QgY2FuZWxCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGJ0biA9IG5ld05vZGUoXCJpbnB1dFwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi52YWx1ZSA9IFwiIENhbmNlbFwiO1xuICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgIHByb2pjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICB9KTtcbiAgcmV0dXJuIGJ0bjtcbn07XG5cblxuY29uc3QgcHJvamN0Rm9ybSA9ICgoKSA9PiB7XG5jb25zdCBidG5XcmFwcGVyID0gbmV3Tm9kZShcImRpdlwiKVxuY29uc3QgYWRkPSBhZGRidG4oKVxuY29uc3QgY2FuY2VsPSBjYW5lbEJ0bigpXG4vLyBjb25zdCBjYW5jbGVCdG5XcmFwcGVyID0gbmV3Tm9kZShcImRpdlwiKVxud3JhcChidG5XcmFwcGVyLFthZGQsIGNhbmNlbF0pXG5idG5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwXCIpXG4gICAgY29uc3QgcHJvbXB0VXNlciA9IG5ld05vZGUoXCJmb3JtXCIpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICB3cmFwKHByb21wdFVzZXIsIFssIGlucHV0LCBidG5XcmFwcGVyXSlcbiAgICBwcm9tcHRVc2VyLmNsYXNzTGlzdC5hZGQoXCJwcm9tcHRcIiwgXCJ2aXNpYmxlXCIpXG4gICAgcmV0dXJuIHByb21wdFVzZXJcbn0pKClcblxuY29uc3QgUHJvakFkZEJ0biA9ICgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IEJ0bigpO1xuXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFkZEJ0blwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNCdG5cIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgcHJvamN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKVxuICB9KVxuICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvblxufTtcbiBcbmV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKHRleHQpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IFByb2pBZGRCdG4oKTtcbiAgY29uc3QgbGkgPSBuZXdOb2RlKFwibGlcIik7XG4gIGxpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qY3RGb3JtKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgIGNoYW5nZUNhdGVnb3J5KHRleHQpXG4gICAgLy8gY29uc3QgbmV3QXJyID0gW2FycmF5WzFdXVxuICAgIGNvbnNvbGUubG9nKGFycmF5KVxuYWRkVG9MaXN0KG51bGwsIHRleHQpXG4gIH0pXG4gIHJldHVybiBsaVxufTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
