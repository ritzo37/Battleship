/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.containers {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.start-btn {
  width: 50px;
}
* {
  /* margin: 0px; */
  /* padding: 0px; */
  box-sizing: border-box;
}
dialog::backdrop {
  backdrop-filter: blur(3px);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,0BAA0B;AAC5B","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n}\n.containers {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n.start-btn {\n  width: 50px;\n}\n* {\n  /* margin: 0px; */\n  /* padding: 0px; */\n  box-sizing: border-box;\n}\ndialog::backdrop {\n  backdrop-filter: blur(3px);\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   player2: () => (/* binding */ player2)
/* harmony export */ });
function ship(length) {
  let hitCnt = 0;
  let xCord = -1,
    yCord = -1;
  return {
    shipLength: length,
    isSunk() {
      let currHitCnt = this.getHitCnt();
      return currHitCnt == this.shipLength;
    },
    hit() {
      hitCnt += 1;
    },
    getHitCnt() {
      return hitCnt;
    },
    resetShipStats() {
      hitCnt = 0;
    },
    getStartingCords() {
      return [xCord, yCord];
    },
    setStartingCords(x, y) {
      xCord = x;
      yCord = y;
    },
  };
}

function cell() {
  return {
    isShipCell: false,
    shipReference: null,
    hitStatus: 0,
  };
}

function gameBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let currRow = [];
    for (let j = 0; j < 10; j++) {
      let currCell = cell();
      currRow.push(currCell);
    }
    board.push(currRow);
  }

  return {
    getBoard() {
      return board;
    },
    placeShip(x, y, length, playerShip) {
      y = parseInt(y);
      x = parseInt(x);
      if (y + length > 10) {
        return 0;
      }
      let alreadyPlacedShipCheck = false;
      for (let i = y; i < y + length; i++) {
        if (board[x][i].isShipCell) {
          alreadyPlacedShipCheck = true;
          break;
        }
      }
      if (alreadyPlacedShipCheck) return 0;
      else {
        for (let i = y; i < y + length; i++) {
          board[x][i].isShipCell = true;
          board[x][i].shipReference = playerShip;
          board[x][y].shipReference.setStartingCords(x, y);
        }
        return 1;
      }
    },
  };
}

function Player() {
  let board = gameBoard();
  let playerBoard = board.getBoard();
  let playerShips = [];
  let shipsPlacedCnt = 0;
  let length = [5, 4, 3, 2];
  for (let i = 0; i < 4; i++) {
    let currShip = ship(length[i]);
    playerShips.push(currShip);
  }
  return {
    markCordinate(x, y) {
      playerBoard[x][y].hitStatus = 1;
      if (playerBoard[x][y].isShipCell) {
        this.hitShip(x, y);
      }
    },
    isShipCell(x, y) {
      return playerBoard[x][y].isShipCell;
    },
    hitShip(x, y) {
      playerBoard[x][y].shipReference.hit();
    },
    sunkShipCheck(x, y) {
      if (playerBoard[x][y].shipReference.isSunk()) {
        return true;
      } else {
        return false;
      }
    },
    getBoard() {
      return playerBoard;
    },
    placeShip(x, y, indx) {
      if (board.placeShip(x, y, length[indx], playerShips[indx])) {
        return 1;
      } else {
        return 0;
      }
    },
    getShipsPlaced() {
      return shipsPlacedCnt;
    },
    hitCordinateCheck(x, y) {
      if (playerBoard[x][y].hitStatus) {
        return 1;
      } else {
        return 0;
      }
    },
    clearBoard() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          playerBoard[i][j].hitStatus = 0;
          if (playerBoard[i][j].isShipCell) {
            playerBoard[i][j].isShipCell = false;
            playerBoard[i][j].shipReference.resetShipStats();
            playerBoard[i][j].shipReference = null;
            playerBoard[i][j].shipReference.setStartingCords(-1, -1);
          }
        }
      }
      shipsPlacedCnt = 0;
    },
    getShipCords(x, y) {
      return playerBoard[x][y].shipReference.getStartingCords(x, y);
    },
    getShipLength(x, y) {
      return playerBoard[x][y].shipReference.shipLength;
    },
  };
}

let player1 = Player();
let player2 = Player();




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



function gridManager() {
  return {
    generatePlayerGrid() {
      const playerContainer = document.querySelector(".player-container");
      for (let i = 0; i < 10; i++) {
        let outerDiv = document.createElement("div");
        for (let j = 0; j < 10; j++) {
          let currCordx = i;
          let currCordy = j;
          let innerDiv = document.createElement("div");
          innerDiv.dataset.x = currCordx;
          innerDiv.dataset.y = currCordy;
          innerDiv.style.border = "2px solid black";
          innerDiv.style.height = "50px";
          innerDiv.style.width = "50px";
          outerDiv.appendChild(innerDiv);
        }
        outerDiv.style.display = "flex";
        playerContainer.appendChild(outerDiv);
      }
    },
    generateComputerGrid() {
      const computerContainer = document.querySelector(".computer-container");
      for (let i = 0; i < 10; i++) {
        let outerDiv = document.createElement("div");
        for (let j = 0; j < 10; j++) {
          let currCordx = i;
          let currCordy = j;
          let innerDiv = document.createElement("div");
          innerDiv.dataset.x = currCordx;
          innerDiv.dataset.y = currCordy;
          innerDiv.style.border = "2px solid black";
          innerDiv.style.height = "50px";
          innerDiv.style.width = "50px";
          outerDiv.appendChild(innerDiv);
        }
        outerDiv.style.display = "flex";
        computerContainer.appendChild(outerDiv);
      }
    },
    clearBothGrids() {
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          const cell1 = document.querySelector(
            `.player-container [data-x="${x}"][data-y="${y}"]`
          );
          const cell2 = document.querySelector(
            `.computer-container [data-x="${x}"][data-y="${y}"]`
          );
          cell1.style.backgroundColor = "white";
          cell2.style.backgroundColor = "white";
          cell1.textContent = "";
          cell2.textContent = "";
        }
      }
    },
  };
}

function gridPlacer() {
  let length = [5, 4, 3, 2];
  return {
    placeShipOnPlayerBoard(grid) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; ) {
          if (grid[i][j] != -1) {
            _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.placeShip(i, j, grid[i][j]);
            for (let coln = j; coln < j + length[grid[i][j]]; coln++) {
              const cell = document.querySelector(
                `.player-container [data-x="${i}"][data-y="${coln}"]`
              );
              cell.style.backgroundColor = "red";
            }
            j += length[grid[i][j]];
          } else {
            j++;
          }
        }
      }
      return;
    },

    placeComputerShips() {
      for (let i = 0; i < 4; i++) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (!_factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.placeShip(x, y, i)) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        for (let coln = y; coln < y + length[i]; coln++) {
          const cell = document.querySelector(
            `.computer-container [data-x="${x}"][data-y="${coln}"]`
          );
          cell.style.backgroundColor = "red";
        }
      }
    },
  };
}

function gameController() {
  let activePlayer = _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1;
  let gameStatus = false;
  return {
    getActivePlayer() {
      return activePlayer;
    },
    changeActivePLayer() {
      if (activePlayer == _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1) {
        activePlayer = _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2;
      } else {
        activePlayer = _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1;
      }
    },
    getGameStatus() {
      return gameStatus;
    },
    changeGameStatus() {
      gameStatus = !gameStatus;
    },
    playComputerTurn() {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.hitCordinateCheck(x, y)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
      return [x, y];
    },
    checkGameOver(player) {
      const playerBoard = player.getBoard();
      let shunkShipCnt = 0;
      let markedShips = new Set();
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (playerBoard[i][j].isShipCell) {
            if (!markedShips.has(playerBoard[i][j].shipReference)) {
              const currShip = playerBoard[i][j].shipReference;
              if (currShip.isSunk()) shunkShipCnt += 1;
              markedShips.add(currShip);
            }
          }
        }
      }
      return shunkShipCnt == 4;
    },
  };
}

function dialogManger(controller, placer) {
  const dialogBox = document.querySelector(".shipPlacerDialog");
  const container = document.createElement("div");
  const placerGrid = document.createElement("div");
  const shipsGrid = document.createElement("div");
  const grid = [];
  let placedShipsSet = new Set();
  for (let i = 0; i < 10; i++) {
    let currRow = [];
    for (let j = 0; j < 10; j++) {
      currRow.push(-1);
    }
    grid.push(currRow);
  }

  shipsGrid.id = "shipsGrid";
  shipsGrid.style.display = "flex";
  shipsGrid.style.flexDirection = "column";
  shipsGrid.style.gap = "20px";
  shipsGrid.style.height = "550px";
  shipsGrid.style.width = "260px";
  shipsGrid.style.border = "2px solid black";
  container.style.position = "relative";
  let startShipLength = 5;
  let startTop = 0;
  for (let i = 0; i < 4; i++) {
    const currShip = document.createElement("div");
    currShip.id = `ship-${i}`;
    currShip.draggable = true;
    currShip.style.position = "absolute";
    currShip.style.top = `${startTop}px`;
    currShip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setDragImage(currShip, 0, 0);
      e.dataTransfer.setData("text/plain", e.target.id);
    });
    startTop += 100;
    currShip.dataset.width = `${startShipLength}`;
    currShip.dataset.indx = i;
    let currWidth = startShipLength * 50;
    currShip.style.width = `${currWidth}px`;
    currShip.style.borderWidth = "2px";
    currShip.style.height = "50px";
    currShip.style.backgroundColor = "red";
    currShip.style.border = "2px solid black";
    startShipLength--;
    shipsGrid.appendChild(currShip);
  }
  placerGrid.id = "placerGrid";
  for (let i = 0; i < 10; i++) {
    let outerDiv = document.createElement("div");
    for (let j = 0; j < 10; j++) {
      let currCordx = i;
      let currCordy = j;
      let innerDiv = document.createElement("div");
      innerDiv.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      innerDiv.addEventListener("drop", (e) => {
        e.preventDefault();
        let cordX = parseInt(innerDiv.offsetLeft);
        let cordY = parseInt(innerDiv.offsetTop);
        const divDraggedid = e.dataTransfer.getData("text");
        if (!divDraggedid) return;
        const divSelected = document.querySelector(`#${divDraggedid}`);
        const indx = parseInt(divSelected.dataset.indx);
        const currWidth = parseInt(divSelected.dataset.width);
        if (j + currWidth - 1 >= 10) return;
        let alreadyPlacedShipCheck = false;
        for (let currColn = j; currColn < j + currWidth; currColn++) {
          if (grid[i][currColn] != -1) alreadyPlacedShipCheck = true;
        }
        if (alreadyPlacedShipCheck) {
          return;
        }
        if (placedShipsSet.has(indx)) {
          for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
              if (grid[i][j] == indx) {
                grid[i][j] = -1;
              }
            }
          }
        }
        placedShipsSet.add(indx);
        for (let currColn = j; currColn < j + currWidth; currColn++) {
          grid[i][currColn] = indx;
        }
        divSelected.style.left = `${cordX}px`;
        divSelected.style.top = `${cordY}px`;
      });
      innerDiv.dataset.x = currCordx;
      innerDiv.dataset.y = currCordy;
      innerDiv.style.border = "2px solid black";
      innerDiv.style.height = "50px";
      innerDiv.style.width = "50px";
      outerDiv.appendChild(innerDiv);
    }
    outerDiv.style.display = "flex";
    placerGrid.appendChild(outerDiv);
  }
  container.appendChild(placerGrid);
  container.appendChild(shipsGrid);
  container.style.display = "flex";
  container.style.gap = "50px";
  dialogBox.appendChild(container);
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  const gameStart = document.createElement("button");
  gameStart.textContent = "Start";
  dialogBox.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    dialogBox.close();
  });
  dialogBox.appendChild(gameStart);
  gameStart.addEventListener("click", () => {
    placer.placeShipOnPlayerBoard(grid);
    placer.placeComputerShips();
    const messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "Player 1 turn !";
    controller.changeGameStatus();
    const startBtn = document.querySelector(".start-btn");
    const restartBtn = document.querySelector(".restart-btn");
    startBtn.disabled = true;
    restartBtn.disabled = false;
    dialogBox.close();
  });
}
function screenController() {
  let controller = gameController();
  let manager = gridManager();
  let placer = gridPlacer();
  dialogManger(controller, placer);

  manager.generatePlayerGrid();
  manager.generateComputerGrid();

  const startBtn = document.querySelector(".start-btn");
  const restartBtn = document.querySelector(".restart-btn");
  restartBtn.disabled = true;
  startBtn.addEventListener("click", () => {
    if (!controller.getGameStatus()) {
      const dialogBox = document.querySelector(".shipPlacerDialog");
      dialogBox.showModal();
      // // placer.placeShipOnPlayerBoard();
      // // placer.placeComputerShips();
      // controller.changeGameStatus();
      // const messageDiv = document.querySelector(".message-div");
      // messageDiv.textContent = "Player 1 turn !";
    }
  });

  restartBtn.addEventListener("click", () => {
    controller.changeGameStatus();
    if (controller.getActivePlayer() == _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2) {
      controller.changeGameStatus();
    }
    const startBtn = document.querySelector(".start-btn");
    startBtn.disabled = false;
    restartBtn.disabled = true;
    manager.clearBothGrids();
    _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.clearBoard();
    _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.clearBoard();
    const messageDiv = document.querySelector(".message-div");
    messageDiv.textContent = "";
  });

  const computerDivContainer = document.querySelector(".computer-container");

  computerDivContainer.addEventListener("click", (event) => {
    if (controller.getGameStatus() && controller.getActivePlayer() == _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1) {
      let xCord = event.target.dataset.x;
      let yCord = event.target.dataset.y;
      if (!xCord || !yCord) return;
      if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.hitCordinateCheck(xCord, yCord)) return;
      _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.markCordinate(xCord, yCord);
      const messageDiv = document.querySelector(".message-div");
      if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.isShipCell(xCord, yCord)) {
        if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.sunkShipCheck(xCord, yCord)) {
          let [shipXCord, shipYCord] = _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.getShipCords(xCord, yCord);
          for (
            let i = shipYCord;
            i < shipYCord + _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.getShipLength(xCord, yCord);
            i++
          ) {
            const cell = document.querySelector(
              `.computer-container [data-x="${shipXCord}"][data-y="${i}"]`
            );
            cell.style.backgroundColor = "green";
          }
          messageDiv.textContent = "You just sunk one of the computer's ship!";
        } else {
          messageDiv.textContent = "You just hit one of the computer's shipt!";
        }
      } else {
        messageDiv.textContent = "You miss the computer's ship !";
      }
      const cell = document.querySelector(
        `.computer-container [data-x="${xCord}"][data-y="${yCord}"]`
      );
      cell.textContent = "X";
      if (controller.checkGameOver(_factories_js__WEBPACK_IMPORTED_MODULE_0__.player2)) {
        messageDiv.textContent = "You won the game!";
        controller.changeGameStatus();
        return;
      }
      controller.changeActivePLayer();
      setTimeout(() => {
        try {
          let [cordX, cordY] = controller.playComputerTurn();
          const messageDiv = document.querySelector(".message-div");
          _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.markCordinate(cordX, cordY);
          if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.isShipCell(cordX, cordY)) {
            messageDiv.textContent = "Computer just hit your ship !";
          } else {
            messageDiv.textContent = "Computer missed the shot !";
          }
          const cell = document.querySelector(
            `.player-container [data-x="${xCord}"][data-y="${yCord}"]`
          );
          cell.textContent = "X";
          if (controller.checkGameOver(_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1)) {
            messageDiv.textContent = "Computer just won the game!";
            controller.changeGameStatus();
          }
          controller.changeActivePLayer();
        } catch (error) {
          console.error("Error during computer turn:", error);
        }
      }, 1000);
    } else {
      return;
    }
  });
}

screenController();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1gsSUFBSSxrREFBTztBQUNYO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0Esc0VBQXNFLGtEQUFPO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQU87QUFDakIsTUFBTSxrREFBTztBQUNiO0FBQ0EsVUFBVSxrREFBTztBQUNqQixZQUFZLGtEQUFPO0FBQ25CLHVDQUF1QyxrREFBTztBQUM5QztBQUNBO0FBQ0EsNEJBQTRCLGtEQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxVQUFVLGFBQWEsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNLGFBQWEsTUFBTTtBQUNqRTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQU87QUFDakIsY0FBYyxrREFBTztBQUNyQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTSxhQUFhLE1BQU07QUFDbkU7QUFDQTtBQUNBLHVDQUF1QyxrREFBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG4uc3RhcnQtYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4qIHtcbiAgLyogbWFyZ2luOiAwcHg7ICovXG4gIC8qIHBhZGRpbmc6IDBweDsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250YWluZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuKiB7XFxuICAvKiBtYXJnaW46IDBweDsgKi9cXG4gIC8qIHBhZGRpbmc6IDBweDsgKi9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBzaGlwKGxlbmd0aCkge1xuICBsZXQgaGl0Q250ID0gMDtcbiAgbGV0IHhDb3JkID0gLTEsXG4gICAgeUNvcmQgPSAtMTtcbiAgcmV0dXJuIHtcbiAgICBzaGlwTGVuZ3RoOiBsZW5ndGgsXG4gICAgaXNTdW5rKCkge1xuICAgICAgbGV0IGN1cnJIaXRDbnQgPSB0aGlzLmdldEhpdENudCgpO1xuICAgICAgcmV0dXJuIGN1cnJIaXRDbnQgPT0gdGhpcy5zaGlwTGVuZ3RoO1xuICAgIH0sXG4gICAgaGl0KCkge1xuICAgICAgaGl0Q250ICs9IDE7XG4gICAgfSxcbiAgICBnZXRIaXRDbnQoKSB7XG4gICAgICByZXR1cm4gaGl0Q250O1xuICAgIH0sXG4gICAgcmVzZXRTaGlwU3RhdHMoKSB7XG4gICAgICBoaXRDbnQgPSAwO1xuICAgIH0sXG4gICAgZ2V0U3RhcnRpbmdDb3JkcygpIHtcbiAgICAgIHJldHVybiBbeENvcmQsIHlDb3JkXTtcbiAgICB9LFxuICAgIHNldFN0YXJ0aW5nQ29yZHMoeCwgeSkge1xuICAgICAgeENvcmQgPSB4O1xuICAgICAgeUNvcmQgPSB5O1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNlbGwoKSB7XG4gIHJldHVybiB7XG4gICAgaXNTaGlwQ2VsbDogZmFsc2UsXG4gICAgc2hpcFJlZmVyZW5jZTogbnVsbCxcbiAgICBoaXRTdGF0dXM6IDAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCBjdXJyUm93ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgY3VyckNlbGwgPSBjZWxsKCk7XG4gICAgICBjdXJyUm93LnB1c2goY3VyckNlbGwpO1xuICAgIH1cbiAgICBib2FyZC5wdXNoKGN1cnJSb3cpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9LFxuICAgIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIHBsYXllclNoaXApIHtcbiAgICAgIHkgPSBwYXJzZUludCh5KTtcbiAgICAgIHggPSBwYXJzZUludCh4KTtcbiAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBsZXQgYWxyZWFkeVBsYWNlZFNoaXBDaGVjayA9IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW2ldLmlzU2hpcENlbGwpIHtcbiAgICAgICAgICBhbHJlYWR5UGxhY2VkU2hpcENoZWNrID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFscmVhZHlQbGFjZWRTaGlwQ2hlY2spIHJldHVybiAwO1xuICAgICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYm9hcmRbeF1baV0uaXNTaGlwQ2VsbCA9IHRydWU7XG4gICAgICAgICAgYm9hcmRbeF1baV0uc2hpcFJlZmVyZW5jZSA9IHBsYXllclNoaXA7XG4gICAgICAgICAgYm9hcmRbeF1beV0uc2hpcFJlZmVyZW5jZS5zZXRTdGFydGluZ0NvcmRzKHgsIHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgbGV0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGJvYXJkLmdldEJvYXJkKCk7XG4gIGxldCBwbGF5ZXJTaGlwcyA9IFtdO1xuICBsZXQgc2hpcHNQbGFjZWRDbnQgPSAwO1xuICBsZXQgbGVuZ3RoID0gWzUsIDQsIDMsIDJdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGxldCBjdXJyU2hpcCA9IHNoaXAobGVuZ3RoW2ldKTtcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKGN1cnJTaGlwKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1hcmtDb3JkaW5hdGUoeCwgeSkge1xuICAgICAgcGxheWVyQm9hcmRbeF1beV0uaGl0U3RhdHVzID0gMTtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZFt4XVt5XS5pc1NoaXBDZWxsKSB7XG4gICAgICAgIHRoaXMuaGl0U2hpcCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzU2hpcENlbGwoeCwgeSkge1xuICAgICAgcmV0dXJuIHBsYXllckJvYXJkW3hdW3ldLmlzU2hpcENlbGw7XG4gICAgfSxcbiAgICBoaXRTaGlwKHgsIHkpIHtcbiAgICAgIHBsYXllckJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2UuaGl0KCk7XG4gICAgfSxcbiAgICBzdW5rU2hpcENoZWNrKHgsIHkpIHtcbiAgICAgIGlmIChwbGF5ZXJCb2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyQm9hcmQ7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoeCwgeSwgaW5keCkge1xuICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGhbaW5keF0sIHBsYXllclNoaXBzW2luZHhdKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U2hpcHNQbGFjZWQoKSB7XG4gICAgICByZXR1cm4gc2hpcHNQbGFjZWRDbnQ7XG4gICAgfSxcbiAgICBoaXRDb3JkaW5hdGVDaGVjayh4LCB5KSB7XG4gICAgICBpZiAocGxheWVyQm9hcmRbeF1beV0uaGl0U3RhdHVzKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgIHBsYXllckJvYXJkW2ldW2pdLmhpdFN0YXR1cyA9IDA7XG4gICAgICAgICAgaWYgKHBsYXllckJvYXJkW2ldW2pdLmlzU2hpcENlbGwpIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkW2ldW2pdLmlzU2hpcENlbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkW2ldW2pdLnNoaXBSZWZlcmVuY2UucmVzZXRTaGlwU3RhdHMoKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkW2ldW2pdLnNoaXBSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgICAgICAgcGxheWVyQm9hcmRbaV1bal0uc2hpcFJlZmVyZW5jZS5zZXRTdGFydGluZ0NvcmRzKC0xLCAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaGlwc1BsYWNlZENudCA9IDA7XG4gICAgfSxcbiAgICBnZXRTaGlwQ29yZHMoeCwgeSkge1xuICAgICAgcmV0dXJuIHBsYXllckJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2UuZ2V0U3RhcnRpbmdDb3Jkcyh4LCB5KTtcbiAgICB9LFxuICAgIGdldFNoaXBMZW5ndGgoeCwgeSkge1xuICAgICAgcmV0dXJuIHBsYXllckJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2Uuc2hpcExlbmd0aDtcbiAgICB9LFxuICB9O1xufVxuXG5sZXQgcGxheWVyMSA9IFBsYXllcigpO1xubGV0IHBsYXllcjIgPSBQbGF5ZXIoKTtcblxuZXhwb3J0IHsgcGxheWVyMSwgcGxheWVyMiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcGxheWVyMSwgcGxheWVyMiB9IGZyb20gXCIuL2ZhY3Rvcmllcy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmZ1bmN0aW9uIGdyaWRNYW5hZ2VyKCkge1xuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlUGxheWVyR3JpZCgpIHtcbiAgICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNvbnRhaW5lclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBsZXQgY3VyckNvcmR4ID0gaTtcbiAgICAgICAgICBsZXQgY3VyckNvcmR5ID0gajtcbiAgICAgICAgICBsZXQgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGlubmVyRGl2LmRhdGFzZXQueCA9IGN1cnJDb3JkeDtcbiAgICAgICAgICBpbm5lckRpdi5kYXRhc2V0LnkgPSBjdXJyQ29yZHk7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgICBpbm5lckRpdi5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgICAgICBpbm5lckRpdi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xuICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICAgICAgfVxuICAgICAgICBvdXRlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZUNvbXB1dGVyR3JpZCgpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1jb250YWluZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbGV0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgbGV0IGN1cnJDb3JkeCA9IGk7XG4gICAgICAgICAgbGV0IGN1cnJDb3JkeSA9IGo7XG4gICAgICAgICAgbGV0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBpbm5lckRpdi5kYXRhc2V0LnggPSBjdXJyQ29yZHg7XG4gICAgICAgICAgaW5uZXJEaXYuZGF0YXNldC55ID0gY3VyckNvcmR5O1xuICAgICAgICAgIGlubmVyRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckJvdGhHcmlkcygpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgICAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnBsYXllci1jb250YWluZXIgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGNlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29tcHV0ZXItY29udGFpbmVyIFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgY2VsbDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjZWxsMi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBncmlkUGxhY2VyKCkge1xuICBsZXQgbGVuZ3RoID0gWzUsIDQsIDMsIDJdO1xuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcE9uUGxheWVyQm9hcmQoZ3JpZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICkge1xuICAgICAgICAgIGlmIChncmlkW2ldW2pdICE9IC0xKSB7XG4gICAgICAgICAgICBwbGF5ZXIxLnBsYWNlU2hpcChpLCBqLCBncmlkW2ldW2pdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbG4gPSBqOyBjb2xuIDwgaiArIGxlbmd0aFtncmlkW2ldW2pdXTsgY29sbisrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAucGxheWVyLWNvbnRhaW5lciBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2NvbG59XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqICs9IGxlbmd0aFtncmlkW2ldW2pdXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0sXG5cbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHdoaWxlICghcGxheWVyMi5wbGFjZVNoaXAoeCwgeSwgaSkpIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgY29sbiA9IHk7IGNvbG4gPCB5ICsgbGVuZ3RoW2ldOyBjb2xuKyspIHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29tcHV0ZXItY29udGFpbmVyIFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7Y29sbn1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcigpIHtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcjE7XG4gIGxldCBnYW1lU3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgZ2V0QWN0aXZlUGxheWVyKCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgICB9LFxuICAgIGNoYW5nZUFjdGl2ZVBMYXllcigpIHtcbiAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT0gcGxheWVyMSkge1xuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXIyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEdhbWVTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gZ2FtZVN0YXR1cztcbiAgICB9LFxuICAgIGNoYW5nZUdhbWVTdGF0dXMoKSB7XG4gICAgICBnYW1lU3RhdHVzID0gIWdhbWVTdGF0dXM7XG4gICAgfSxcbiAgICBwbGF5Q29tcHV0ZXJUdXJuKCkge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHdoaWxlIChwbGF5ZXIxLmhpdENvcmRpbmF0ZUNoZWNrKHgsIHkpKSB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH0sXG4gICAgY2hlY2tHYW1lT3ZlcihwbGF5ZXIpIHtcbiAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdldEJvYXJkKCk7XG4gICAgICBsZXQgc2h1bmtTaGlwQ250ID0gMDtcbiAgICAgIGxldCBtYXJrZWRTaGlwcyA9IG5ldyBTZXQoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBpZiAocGxheWVyQm9hcmRbaV1bal0uaXNTaGlwQ2VsbCkge1xuICAgICAgICAgICAgaWYgKCFtYXJrZWRTaGlwcy5oYXMocGxheWVyQm9hcmRbaV1bal0uc2hpcFJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VyclNoaXAgPSBwbGF5ZXJCb2FyZFtpXVtqXS5zaGlwUmVmZXJlbmNlO1xuICAgICAgICAgICAgICBpZiAoY3VyclNoaXAuaXNTdW5rKCkpIHNodW5rU2hpcENudCArPSAxO1xuICAgICAgICAgICAgICBtYXJrZWRTaGlwcy5hZGQoY3VyclNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNodW5rU2hpcENudCA9PSA0O1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpYWxvZ01hbmdlcihjb250cm9sbGVyLCBwbGFjZXIpIHtcbiAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VyRGlhbG9nXCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwbGFjZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2hpcHNHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZ3JpZCA9IFtdO1xuICBsZXQgcGxhY2VkU2hpcHNTZXQgPSBuZXcgU2V0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCBjdXJyUm93ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjdXJyUm93LnB1c2goLTEpO1xuICAgIH1cbiAgICBncmlkLnB1c2goY3VyclJvdyk7XG4gIH1cblxuICBzaGlwc0dyaWQuaWQgPSBcInNoaXBzR3JpZFwiO1xuICBzaGlwc0dyaWQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBzaGlwc0dyaWQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gIHNoaXBzR3JpZC5zdHlsZS5nYXAgPSBcIjIwcHhcIjtcbiAgc2hpcHNHcmlkLnN0eWxlLmhlaWdodCA9IFwiNTUwcHhcIjtcbiAgc2hpcHNHcmlkLnN0eWxlLndpZHRoID0gXCIyNjBweFwiO1xuICBzaGlwc0dyaWQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICBsZXQgc3RhcnRTaGlwTGVuZ3RoID0gNTtcbiAgbGV0IHN0YXJ0VG9wID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBjdXJyU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3VyclNoaXAuaWQgPSBgc2hpcC0ke2l9YDtcbiAgICBjdXJyU2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIGN1cnJTaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGN1cnJTaGlwLnN0eWxlLnRvcCA9IGAke3N0YXJ0VG9wfXB4YDtcbiAgICBjdXJyU2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoY3VyclNoaXAsIDAsIDApO1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgZS50YXJnZXQuaWQpO1xuICAgIH0pO1xuICAgIHN0YXJ0VG9wICs9IDEwMDtcbiAgICBjdXJyU2hpcC5kYXRhc2V0LndpZHRoID0gYCR7c3RhcnRTaGlwTGVuZ3RofWA7XG4gICAgY3VyclNoaXAuZGF0YXNldC5pbmR4ID0gaTtcbiAgICBsZXQgY3VycldpZHRoID0gc3RhcnRTaGlwTGVuZ3RoICogNTA7XG4gICAgY3VyclNoaXAuc3R5bGUud2lkdGggPSBgJHtjdXJyV2lkdGh9cHhgO1xuICAgIGN1cnJTaGlwLnN0eWxlLmJvcmRlcldpZHRoID0gXCIycHhcIjtcbiAgICBjdXJyU2hpcC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICBjdXJyU2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIGN1cnJTaGlwLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgc3RhcnRTaGlwTGVuZ3RoLS07XG4gICAgc2hpcHNHcmlkLmFwcGVuZENoaWxkKGN1cnJTaGlwKTtcbiAgfVxuICBwbGFjZXJHcmlkLmlkID0gXCJwbGFjZXJHcmlkXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgY3VyckNvcmR4ID0gaTtcbiAgICAgIGxldCBjdXJyQ29yZHkgPSBqO1xuICAgICAgbGV0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICAgIGlubmVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGNvcmRYID0gcGFyc2VJbnQoaW5uZXJEaXYub2Zmc2V0TGVmdCk7XG4gICAgICAgIGxldCBjb3JkWSA9IHBhcnNlSW50KGlubmVyRGl2Lm9mZnNldFRvcCk7XG4gICAgICAgIGNvbnN0IGRpdkRyYWdnZWRpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICAgICAgICBpZiAoIWRpdkRyYWdnZWRpZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBkaXZTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RpdkRyYWdnZWRpZH1gKTtcbiAgICAgICAgY29uc3QgaW5keCA9IHBhcnNlSW50KGRpdlNlbGVjdGVkLmRhdGFzZXQuaW5keCk7XG4gICAgICAgIGNvbnN0IGN1cnJXaWR0aCA9IHBhcnNlSW50KGRpdlNlbGVjdGVkLmRhdGFzZXQud2lkdGgpO1xuICAgICAgICBpZiAoaiArIGN1cnJXaWR0aCAtIDEgPj0gMTApIHJldHVybjtcbiAgICAgICAgbGV0IGFscmVhZHlQbGFjZWRTaGlwQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgY3VyckNvbG4gPSBqOyBjdXJyQ29sbiA8IGogKyBjdXJyV2lkdGg7IGN1cnJDb2xuKyspIHtcbiAgICAgICAgICBpZiAoZ3JpZFtpXVtjdXJyQ29sbl0gIT0gLTEpIGFscmVhZHlQbGFjZWRTaGlwQ2hlY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbHJlYWR5UGxhY2VkU2hpcENoZWNrKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWRTaGlwc1NldC5oYXMoaW5keCkpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICBpZiAoZ3JpZFtpXVtqXSA9PSBpbmR4KSB7XG4gICAgICAgICAgICAgICAgZ3JpZFtpXVtqXSA9IC0xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYWNlZFNoaXBzU2V0LmFkZChpbmR4KTtcbiAgICAgICAgZm9yIChsZXQgY3VyckNvbG4gPSBqOyBjdXJyQ29sbiA8IGogKyBjdXJyV2lkdGg7IGN1cnJDb2xuKyspIHtcbiAgICAgICAgICBncmlkW2ldW2N1cnJDb2xuXSA9IGluZHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2U2VsZWN0ZWQuc3R5bGUubGVmdCA9IGAke2NvcmRYfXB4YDtcbiAgICAgICAgZGl2U2VsZWN0ZWQuc3R5bGUudG9wID0gYCR7Y29yZFl9cHhgO1xuICAgICAgfSk7XG4gICAgICBpbm5lckRpdi5kYXRhc2V0LnggPSBjdXJyQ29yZHg7XG4gICAgICBpbm5lckRpdi5kYXRhc2V0LnkgPSBjdXJyQ29yZHk7XG4gICAgICBpbm5lckRpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgICAgaW5uZXJEaXYuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICBpbm5lckRpdi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgIH1cbiAgICBvdXRlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcGxhY2VyR3JpZC5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlckdyaWQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcHNHcmlkKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgY29udGFpbmVyLnN0eWxlLmdhcCA9IFwiNTBweFwiO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZ2FtZVN0YXJ0LnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xuICB9KTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGdhbWVTdGFydCk7XG4gIGdhbWVTdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYWNlci5wbGFjZVNoaXBPblBsYXllckJvYXJkKGdyaWQpO1xuICAgIHBsYWNlci5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMSB0dXJuICFcIjtcbiAgICBjb250cm9sbGVyLmNoYW5nZUdhbWVTdGF0dXMoKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgbGV0IGNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcigpO1xuICBsZXQgbWFuYWdlciA9IGdyaWRNYW5hZ2VyKCk7XG4gIGxldCBwbGFjZXIgPSBncmlkUGxhY2VyKCk7XG4gIGRpYWxvZ01hbmdlcihjb250cm9sbGVyLCBwbGFjZXIpO1xuXG4gIG1hbmFnZXIuZ2VuZXJhdGVQbGF5ZXJHcmlkKCk7XG4gIG1hbmFnZXIuZ2VuZXJhdGVDb21wdXRlckdyaWQoKTtcblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0LWJ0blwiKTtcbiAgcmVzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFjb250cm9sbGVyLmdldEdhbWVTdGF0dXMoKSkge1xuICAgICAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VyRGlhbG9nXCIpO1xuICAgICAgZGlhbG9nQm94LnNob3dNb2RhbCgpO1xuICAgICAgLy8gLy8gcGxhY2VyLnBsYWNlU2hpcE9uUGxheWVyQm9hcmQoKTtcbiAgICAgIC8vIC8vIHBsYWNlci5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgIC8vIGNvbnRyb2xsZXIuY2hhbmdlR2FtZVN0YXR1cygpO1xuICAgICAgLy8gY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1kaXZcIik7XG4gICAgICAvLyBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMSB0dXJuICFcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb250cm9sbGVyLmNoYW5nZUdhbWVTdGF0dXMoKTtcbiAgICBpZiAoY29udHJvbGxlci5nZXRBY3RpdmVQbGF5ZXIoKSA9PSBwbGF5ZXIyKSB7XG4gICAgICBjb250cm9sbGVyLmNoYW5nZUdhbWVTdGF0dXMoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKTtcbiAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJlc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG1hbmFnZXIuY2xlYXJCb3RoR3JpZHMoKTtcbiAgICBwbGF5ZXIxLmNsZWFyQm9hcmQoKTtcbiAgICBwbGF5ZXIyLmNsZWFyQm9hcmQoKTtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG5cbiAgY29uc3QgY29tcHV0ZXJEaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWNvbnRhaW5lclwiKTtcblxuICBjb21wdXRlckRpdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbnRyb2xsZXIuZ2V0R2FtZVN0YXR1cygpICYmIGNvbnRyb2xsZXIuZ2V0QWN0aXZlUGxheWVyKCkgPT0gcGxheWVyMSkge1xuICAgICAgbGV0IHhDb3JkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgIGxldCB5Q29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICBpZiAoIXhDb3JkIHx8ICF5Q29yZCkgcmV0dXJuO1xuICAgICAgaWYgKHBsYXllcjIuaGl0Q29yZGluYXRlQ2hlY2soeENvcmQsIHlDb3JkKSkgcmV0dXJuO1xuICAgICAgcGxheWVyMi5tYXJrQ29yZGluYXRlKHhDb3JkLCB5Q29yZCk7XG4gICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICAgIGlmIChwbGF5ZXIyLmlzU2hpcENlbGwoeENvcmQsIHlDb3JkKSkge1xuICAgICAgICBpZiAocGxheWVyMi5zdW5rU2hpcENoZWNrKHhDb3JkLCB5Q29yZCkpIHtcbiAgICAgICAgICBsZXQgW3NoaXBYQ29yZCwgc2hpcFlDb3JkXSA9IHBsYXllcjIuZ2V0U2hpcENvcmRzKHhDb3JkLCB5Q29yZCk7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gc2hpcFlDb3JkO1xuICAgICAgICAgICAgaSA8IHNoaXBZQ29yZCArIHBsYXllcjIuZ2V0U2hpcExlbmd0aCh4Q29yZCwgeUNvcmQpO1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jb21wdXRlci1jb250YWluZXIgW2RhdGEteD1cIiR7c2hpcFhDb3JkfVwiXVtkYXRhLXk9XCIke2l9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJZb3UganVzdCBzdW5rIG9uZSBvZiB0aGUgY29tcHV0ZXIncyBzaGlwIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSBqdXN0IGhpdCBvbmUgb2YgdGhlIGNvbXB1dGVyJ3Mgc2hpcHQhXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSBtaXNzIHRoZSBjb21wdXRlcidzIHNoaXAgIVwiO1xuICAgICAgfVxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY29tcHV0ZXItY29udGFpbmVyIFtkYXRhLXg9XCIke3hDb3JkfVwiXVtkYXRhLXk9XCIke3lDb3JkfVwiXWBcbiAgICAgICk7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBpZiAoY29udHJvbGxlci5jaGVja0dhbWVPdmVyKHBsYXllcjIpKSB7XG4gICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSB3b24gdGhlIGdhbWUhXCI7XG4gICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlR2FtZVN0YXR1cygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb250cm9sbGVyLmNoYW5nZUFjdGl2ZVBMYXllcigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IFtjb3JkWCwgY29yZFldID0gY29udHJvbGxlci5wbGF5Q29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1kaXZcIik7XG4gICAgICAgICAgcGxheWVyMS5tYXJrQ29yZGluYXRlKGNvcmRYLCBjb3JkWSk7XG4gICAgICAgICAgaWYgKHBsYXllcjEuaXNTaGlwQ2VsbChjb3JkWCwgY29yZFkpKSB7XG4gICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJDb21wdXRlciBqdXN0IGhpdCB5b3VyIHNoaXAgIVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJDb21wdXRlciBtaXNzZWQgdGhlIHNob3QgIVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAucGxheWVyLWNvbnRhaW5lciBbZGF0YS14PVwiJHt4Q29yZH1cIl1bZGF0YS15PVwiJHt5Q29yZH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgICAgaWYgKGNvbnRyb2xsZXIuY2hlY2tHYW1lT3ZlcihwbGF5ZXIxKSkge1xuICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIganVzdCB3b24gdGhlIGdhbWUhXCI7XG4gICAgICAgICAgICBjb250cm9sbGVyLmNoYW5nZUdhbWVTdGF0dXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udHJvbGxlci5jaGFuZ2VBY3RpdmVQTGF5ZXIoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGNvbXB1dGVyIHR1cm46XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xufVxuXG5zY3JlZW5Db250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=