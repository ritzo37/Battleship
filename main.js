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
.heading-div {
  font-size: 30px;
  padding: 10px;
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

.message-div {
  width: fit-content;
  height: fit-content;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialong-heading {
  padding: 20px;
  font-size: 32px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n}\n.heading-div {\n  font-size: 30px;\n  padding: 10px;\n}\n.containers {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n.start-btn {\n  width: 50px;\n}\n* {\n  /* margin: 0px; */\n  /* padding: 0px; */\n  box-sizing: border-box;\n}\ndialog::backdrop {\n  backdrop-filter: blur(3px);\n}\n\n.message-div {\n  width: fit-content;\n  height: fit-content;\n  font-size: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.dialong-heading {\n  padding: 20px;\n  font-size: 32px;\n}\n"],"sourceRoot":""}]);
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
            playerBoard[i][j].shipReference.setStartingCords(-1, -1);
            playerBoard[i][j].shipReference = null;
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
    getSunkShipCnt() {
      let cnt = 0;
      for (let i = 0; i < 4; i++) {
        if (playerShips[i].isSunk()) cnt++;
      }
      return cnt;
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



function computerIntelligence() {
  return {
    prevHitStatus: 0,
    onGoingHit: 0,
    startingCords: [-1, -1],
    startingCordsFound: 0,
    prevCordsHit: [-1, -1],
  };
}

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
    playComputerTurn(computerBrain) {
      if (computerBrain.onGoingHit) {
        if (computerBrain.startingCordsFound) {
          let [x, y] = computerBrain.startingCords;
          while (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.hitCordinateCheck(x, y + 1)) {
            y += 1;
            if (y == 10) {
              computerBrain.onGoingHit = 0;
              computerBrain.startingCordsFound = 0;
              return this.playComputerTurn(computerBrain);
            }
          }
          return [x, y + 1];
        } else {
          if (!computerBrain.prevHitStatus) {
            computerBrain.startingCordsFound = 1;
            let [prevX, prevY] = computerBrain.prevCordsHit;
            computerBrain.startingCords = [prevX, prevY + 1];
            return this.playComputerTurn(computerBrain);
          }
          let [prevX, prevY] = computerBrain.prevCordsHit;
          if (prevY == 0) {
            computerBrain.startingCordsFound = 1;
            computerBrain.startingCords = [prevX, prevY];
            return this.playComputerTurn(computerBrain);
          }
          while (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.hitCordinateCheck(prevX, prevY - 1)) {
            prevY -= 1;
            if (prevY == 0) {
              computerBrain.startingCordsFound = 1;
              computerBrain.startingCords = [prevX, prevY + 1];
              return this.playComputerTurn(computerBrain);
            }
          }
          return [prevX, prevY - 1];
        }
      } else {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.hitCordinateCheck(x, y)) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        return [x, y];
      }
    },
    checkGameOver(player) {
      return player.getSunkShipCnt() == 4;
    },
  };
}

function dialogManger(controller, placer) {
  const dialogBox = document.querySelector(".shipPlacerDialog");
  const dialogHeading = document.createElement("div");
  dialogHeading.textContent = "Please Drag and Drop the ships to place them !";
  dialogHeading.classList.add("dialog-heading");
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
  dialogBox.appendChild(dialogHeading);
  dialogBox.appendChild(container);
  const closeButton = document.createElement("button");
  const dialogMessageDiv = document.createElement("div");
  dialogMessageDiv.classList.add("dialog-message-div");
  closeButton.textContent = "Close";
  const gameStart = document.createElement("button");
  gameStart.textContent = "Start";
  dialogBox.appendChild(closeButton);
  closeButton.addEventListener("click", () => {
    dialogBox.close();
  });
  dialogBox.appendChild(gameStart);
  dialogBox.appendChild(dialogMessageDiv);
  gameStart.addEventListener("click", () => {
    let shipsMarked = [];
    for (let i = 0; i < 4; i++) {
      shipsMarked[i] = 0;
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (grid[i][j] != -1) {
          shipsMarked[grid[i][j]] = 1;
        }
      }
    }
    let shipsPlaced = 0;
    shipsMarked.forEach((item) => {
      if (item) shipsPlaced++;
    });

    if (shipsPlaced != 4) {
      const dialogMessageDiv = document.querySelector(".dialog-message-div");
      dialogMessageDiv.textContent =
        "Please place all of your ships and then click on start !";
      return;
    }

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
    }
  });

  restartBtn.addEventListener("click", () => {
    if (controller.getGameStatus()) {
      controller.changeGameStatus();
    }
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
  const computerBrain = computerIntelligence();

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
          messageDiv.textContent = "You just sank one of the computer's ship!";
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
        _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.clearBoard();
        _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.clearBoard();
        return;
      }
      controller.changeActivePLayer();
      setTimeout(() => {
        try {
          let [cordX, cordY] = controller.playComputerTurn(computerBrain);
          computerBrain.prevCordsHit = [cordX, cordY];
          const messageDiv = document.querySelector(".message-div");
          _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.markCordinate(cordX, cordY);
          if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.isShipCell(cordX, cordY)) {
            if (_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.sunkShipCheck(cordX, cordY)) {
              computerBrain.onGoingHit = 0;
              computerBrain.prevHitStatus = 0;
              computerBrain.prevCordsHit = [-1, -1];
              computerBrain.startingCordsFound = 0;
              messageDiv.textContent = "Computer just sank one of your ship !";
            } else {
              computerBrain.onGoingHit = 1;
              computerBrain.prevHitStatus = 1;
              computerBrain.prevCordsHit = [cordX, cordY];
              messageDiv.textContent = "Computer just hit your ship !";
            }
          } else {
            computerBrain.prevHitStatus = 0;
            messageDiv.textContent = "Computer missed the shot !";
          }
          const cell = document.querySelector(
            `.player-container [data-x="${cordX}"][data-y="${cordY}"]`
          );
          cell.textContent = "X";
          if (controller.checkGameOver(_factories_js__WEBPACK_IMPORTED_MODULE_0__.player1)) {
            messageDiv.textContent = "Computer just won the game!";
            _factories_js__WEBPACK_IMPORTED_MODULE_0__.player1.clearBoard();
            _factories_js__WEBPACK_IMPORTED_MODULE_0__.player2.clearBoard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1I7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE1BQU0sYUFBYSxNQUFNO0FBQ2pFO0FBQ0E7QUFDQSxtQ0FBbUMsa0RBQU87QUFDMUM7QUFDQTtBQUNBLFFBQVEsa0RBQU87QUFDZixRQUFRLGtEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQU87QUFDakIsY0FBYyxrREFBTztBQUNyQixnQkFBZ0Isa0RBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU0sYUFBYSxNQUFNO0FBQ25FO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQU87QUFDOUM7QUFDQSxZQUFZLGtEQUFPO0FBQ25CLFlBQVksa0RBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkaW5nLWRpdiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250YWluZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cbi5zdGFydC1idG4ge1xuICB3aWR0aDogNTBweDtcbn1cbioge1xuICAvKiBtYXJnaW46IDBweDsgKi9cbiAgLyogcGFkZGluZzogMHB4OyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4ubWVzc2FnZS1kaXYge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWFsb25nLWhlYWRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDMycHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRpbmctZGl2IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb250YWluZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuLnN0YXJ0LWJ0biB7XFxuICB3aWR0aDogNTBweDtcXG59XFxuKiB7XFxuICAvKiBtYXJnaW46IDBweDsgKi9cXG4gIC8qIHBhZGRpbmc6IDBweDsgKi9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5tZXNzYWdlLWRpdiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpYWxvbmctaGVhZGluZyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdENudCA9IDA7XG4gIGxldCB4Q29yZCA9IC0xLFxuICAgIHlDb3JkID0gLTE7XG4gIHJldHVybiB7XG4gICAgc2hpcExlbmd0aDogbGVuZ3RoLFxuICAgIGlzU3VuaygpIHtcbiAgICAgIGxldCBjdXJySGl0Q250ID0gdGhpcy5nZXRIaXRDbnQoKTtcbiAgICAgIHJldHVybiBjdXJySGl0Q250ID09IHRoaXMuc2hpcExlbmd0aDtcbiAgICB9LFxuICAgIGhpdCgpIHtcbiAgICAgIGhpdENudCArPSAxO1xuICAgIH0sXG4gICAgZ2V0SGl0Q250KCkge1xuICAgICAgcmV0dXJuIGhpdENudDtcbiAgICB9LFxuICAgIHJlc2V0U2hpcFN0YXRzKCkge1xuICAgICAgaGl0Q250ID0gMDtcbiAgICB9LFxuICAgIGdldFN0YXJ0aW5nQ29yZHMoKSB7XG4gICAgICByZXR1cm4gW3hDb3JkLCB5Q29yZF07XG4gICAgfSxcbiAgICBzZXRTdGFydGluZ0NvcmRzKHgsIHkpIHtcbiAgICAgIHhDb3JkID0geDtcbiAgICAgIHlDb3JkID0geTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjZWxsKCkge1xuICByZXR1cm4ge1xuICAgIGlzU2hpcENlbGw6IGZhbHNlLFxuICAgIHNoaXBSZWZlcmVuY2U6IG51bGwsXG4gICAgaGl0U3RhdHVzOiAwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgY3VyclJvdyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IGN1cnJDZWxsID0gY2VsbCgpO1xuICAgICAgY3VyclJvdy5wdXNoKGN1cnJDZWxsKTtcbiAgICB9XG4gICAgYm9hcmQucHVzaChjdXJyUm93KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBwbGF5ZXJTaGlwKSB7XG4gICAgICB5ID0gcGFyc2VJbnQoeSk7XG4gICAgICB4ID0gcGFyc2VJbnQoeCk7XG4gICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbGV0IGFscmVhZHlQbGFjZWRTaGlwQ2hlY2sgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVtpXS5pc1NoaXBDZWxsKSB7XG4gICAgICAgICAgYWxyZWFkeVBsYWNlZFNoaXBDaGVjayA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhbHJlYWR5UGxhY2VkU2hpcENoZWNrKSByZXR1cm4gMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJvYXJkW3hdW2ldLmlzU2hpcENlbGwgPSB0cnVlO1xuICAgICAgICAgIGJvYXJkW3hdW2ldLnNoaXBSZWZlcmVuY2UgPSBwbGF5ZXJTaGlwO1xuICAgICAgICAgIGJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2Uuc2V0U3RhcnRpbmdDb3Jkcyh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGxldCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuICBsZXQgcGxheWVyQm9hcmQgPSBib2FyZC5nZXRCb2FyZCgpO1xuICBsZXQgcGxheWVyU2hpcHMgPSBbXTtcbiAgbGV0IHNoaXBzUGxhY2VkQ250ID0gMDtcbiAgbGV0IGxlbmd0aCA9IFs1LCA0LCAzLCAyXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBsZXQgY3VyclNoaXAgPSBzaGlwKGxlbmd0aFtpXSk7XG4gICAgcGxheWVyU2hpcHMucHVzaChjdXJyU2hpcCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtYXJrQ29yZGluYXRlKHgsIHkpIHtcbiAgICAgIHBsYXllckJvYXJkW3hdW3ldLmhpdFN0YXR1cyA9IDE7XG4gICAgICBpZiAocGxheWVyQm9hcmRbeF1beV0uaXNTaGlwQ2VsbCkge1xuICAgICAgICB0aGlzLmhpdFNoaXAoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1NoaXBDZWxsKHgsIHkpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJCb2FyZFt4XVt5XS5pc1NoaXBDZWxsO1xuICAgIH0sXG4gICAgaGl0U2hpcCh4LCB5KSB7XG4gICAgICBwbGF5ZXJCb2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlLmhpdCgpO1xuICAgIH0sXG4gICAgc3Vua1NoaXBDaGVjayh4LCB5KSB7XG4gICAgICBpZiAocGxheWVyQm9hcmRbeF1beV0uc2hpcFJlZmVyZW5jZS5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEJvYXJkKCkge1xuICAgICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICAgIH0sXG4gICAgcGxhY2VTaGlwKHgsIHksIGluZHgpIHtcbiAgICAgIGlmIChib2FyZC5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoW2luZHhdLCBwbGF5ZXJTaGlwc1tpbmR4XSkpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFNoaXBzUGxhY2VkKCkge1xuICAgICAgcmV0dXJuIHNoaXBzUGxhY2VkQ250O1xuICAgIH0sXG4gICAgaGl0Q29yZGluYXRlQ2hlY2soeCwgeSkge1xuICAgICAgaWYgKHBsYXllckJvYXJkW3hdW3ldLmhpdFN0YXR1cykge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xlYXJCb2FyZCgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBwbGF5ZXJCb2FyZFtpXVtqXS5oaXRTdGF0dXMgPSAwO1xuICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZFtpXVtqXS5pc1NoaXBDZWxsKSB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZFtpXVtqXS5pc1NoaXBDZWxsID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZFtpXVtqXS5zaGlwUmVmZXJlbmNlLnJlc2V0U2hpcFN0YXRzKCk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZFtpXVtqXS5zaGlwUmVmZXJlbmNlLnNldFN0YXJ0aW5nQ29yZHMoLTEsIC0xKTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkW2ldW2pdLnNoaXBSZWZlcmVuY2UgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2hpcHNQbGFjZWRDbnQgPSAwO1xuICAgIH0sXG4gICAgZ2V0U2hpcENvcmRzKHgsIHkpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJCb2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlLmdldFN0YXJ0aW5nQ29yZHMoeCwgeSk7XG4gICAgfSxcbiAgICBnZXRTaGlwTGVuZ3RoKHgsIHkpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJCb2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlLnNoaXBMZW5ndGg7XG4gICAgfSxcbiAgICBnZXRTdW5rU2hpcENudCgpIHtcbiAgICAgIGxldCBjbnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgaWYgKHBsYXllclNoaXBzW2ldLmlzU3VuaygpKSBjbnQrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbnQ7XG4gICAgfSxcbiAgfTtcbn1cblxubGV0IHBsYXllcjEgPSBQbGF5ZXIoKTtcbmxldCBwbGF5ZXIyID0gUGxheWVyKCk7XG5cbmV4cG9ydCB7IHBsYXllcjEsIHBsYXllcjIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHBsYXllcjEsIHBsYXllcjIgfSBmcm9tIFwiLi9mYWN0b3JpZXMuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5mdW5jdGlvbiBjb21wdXRlckludGVsbGlnZW5jZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmV2SGl0U3RhdHVzOiAwLFxuICAgIG9uR29pbmdIaXQ6IDAsXG4gICAgc3RhcnRpbmdDb3JkczogWy0xLCAtMV0sXG4gICAgc3RhcnRpbmdDb3Jkc0ZvdW5kOiAwLFxuICAgIHByZXZDb3Jkc0hpdDogWy0xLCAtMV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyaWRNYW5hZ2VyKCkge1xuICByZXR1cm4ge1xuICAgIGdlbmVyYXRlUGxheWVyR3JpZCgpIHtcbiAgICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNvbnRhaW5lclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICBsZXQgY3VyckNvcmR4ID0gaTtcbiAgICAgICAgICBsZXQgY3VyckNvcmR5ID0gajtcbiAgICAgICAgICBsZXQgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGlubmVyRGl2LmRhdGFzZXQueCA9IGN1cnJDb3JkeDtcbiAgICAgICAgICBpbm5lckRpdi5kYXRhc2V0LnkgPSBjdXJyQ29yZHk7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgICAgICBpbm5lckRpdi5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgICAgICBpbm5lckRpdi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xuICAgICAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICAgICAgfVxuICAgICAgICBvdXRlckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZUNvbXB1dGVyR3JpZCgpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1jb250YWluZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbGV0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgbGV0IGN1cnJDb3JkeCA9IGk7XG4gICAgICAgICAgbGV0IGN1cnJDb3JkeSA9IGo7XG4gICAgICAgICAgbGV0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBpbm5lckRpdi5kYXRhc2V0LnggPSBjdXJyQ29yZHg7XG4gICAgICAgICAgaW5uZXJEaXYuZGF0YXNldC55ID0gY3VyckNvcmR5O1xuICAgICAgICAgIGlubmVyRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICAgICAgaW5uZXJEaXYuc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICAgICAgICBvdXRlckRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbGVhckJvdGhHcmlkcygpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgICAgICBjb25zdCBjZWxsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnBsYXllci1jb250YWluZXIgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGNlbGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29tcHV0ZXItY29udGFpbmVyIFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgY2VsbDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjZWxsMi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBncmlkUGxhY2VyKCkge1xuICBsZXQgbGVuZ3RoID0gWzUsIDQsIDMsIDJdO1xuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcE9uUGxheWVyQm9hcmQoZ3JpZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICkge1xuICAgICAgICAgIGlmIChncmlkW2ldW2pdICE9IC0xKSB7XG4gICAgICAgICAgICBwbGF5ZXIxLnBsYWNlU2hpcChpLCBqLCBncmlkW2ldW2pdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbG4gPSBqOyBjb2xuIDwgaiArIGxlbmd0aFtncmlkW2ldW2pdXTsgY29sbisrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAucGxheWVyLWNvbnRhaW5lciBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2NvbG59XCJdYFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqICs9IGxlbmd0aFtncmlkW2ldW2pdXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0sXG5cbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHdoaWxlICghcGxheWVyMi5wbGFjZVNoaXAoeCwgeSwgaSkpIHtcbiAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcigpIHtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcjE7XG4gIGxldCBnYW1lU3RhdHVzID0gZmFsc2U7XG4gIHJldHVybiB7XG4gICAgZ2V0QWN0aXZlUGxheWVyKCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgICB9LFxuICAgIGNoYW5nZUFjdGl2ZVBMYXllcigpIHtcbiAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT0gcGxheWVyMSkge1xuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXIyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEdhbWVTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gZ2FtZVN0YXR1cztcbiAgICB9LFxuICAgIGNoYW5nZUdhbWVTdGF0dXMoKSB7XG4gICAgICBnYW1lU3RhdHVzID0gIWdhbWVTdGF0dXM7XG4gICAgfSxcbiAgICBwbGF5Q29tcHV0ZXJUdXJuKGNvbXB1dGVyQnJhaW4pIHtcbiAgICAgIGlmIChjb21wdXRlckJyYWluLm9uR29pbmdIaXQpIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3Jkc0ZvdW5kKSB7XG4gICAgICAgICAgbGV0IFt4LCB5XSA9IGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3JkcztcbiAgICAgICAgICB3aGlsZSAocGxheWVyMS5oaXRDb3JkaW5hdGVDaGVjayh4LCB5ICsgMSkpIHtcbiAgICAgICAgICAgIHkgKz0gMTtcbiAgICAgICAgICAgIGlmICh5ID09IDEwKSB7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4ub25Hb2luZ0hpdCA9IDA7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3Jkc0ZvdW5kID0gMDtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUNvbXB1dGVyVHVybihjb21wdXRlckJyYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFt4LCB5ICsgMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFjb21wdXRlckJyYWluLnByZXZIaXRTdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3Jkc0ZvdW5kID0gMTtcbiAgICAgICAgICAgIGxldCBbcHJldlgsIHByZXZZXSA9IGNvbXB1dGVyQnJhaW4ucHJldkNvcmRzSGl0O1xuICAgICAgICAgICAgY29tcHV0ZXJCcmFpbi5zdGFydGluZ0NvcmRzID0gW3ByZXZYLCBwcmV2WSArIDFdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUNvbXB1dGVyVHVybihjb21wdXRlckJyYWluKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IFtwcmV2WCwgcHJldlldID0gY29tcHV0ZXJCcmFpbi5wcmV2Q29yZHNIaXQ7XG4gICAgICAgICAgaWYgKHByZXZZID09IDApIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3Jkc0ZvdW5kID0gMTtcbiAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3JkcyA9IFtwcmV2WCwgcHJldlldO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUNvbXB1dGVyVHVybihjb21wdXRlckJyYWluKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKHBsYXllcjEuaGl0Q29yZGluYXRlQ2hlY2socHJldlgsIHByZXZZIC0gMSkpIHtcbiAgICAgICAgICAgIHByZXZZIC09IDE7XG4gICAgICAgICAgICBpZiAocHJldlkgPT0gMCkge1xuICAgICAgICAgICAgICBjb21wdXRlckJyYWluLnN0YXJ0aW5nQ29yZHNGb3VuZCA9IDE7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4uc3RhcnRpbmdDb3JkcyA9IFtwcmV2WCwgcHJldlkgKyAxXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheUNvbXB1dGVyVHVybihjb21wdXRlckJyYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtwcmV2WCwgcHJldlkgLSAxXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB3aGlsZSAocGxheWVyMS5oaXRDb3JkaW5hdGVDaGVjayh4LCB5KSkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tHYW1lT3ZlcihwbGF5ZXIpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuZ2V0U3Vua1NoaXBDbnQoKSA9PSA0O1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpYWxvZ01hbmdlcihjb250cm9sbGVyLCBwbGFjZXIpIHtcbiAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VyRGlhbG9nXCIpO1xuICBjb25zdCBkaWFsb2dIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlhbG9nSGVhZGluZy50ZXh0Q29udGVudCA9IFwiUGxlYXNlIERyYWcgYW5kIERyb3AgdGhlIHNoaXBzIHRvIHBsYWNlIHRoZW0gIVwiO1xuICBkaWFsb2dIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2ctaGVhZGluZ1wiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxhY2VyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNoaXBzR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgbGV0IHBsYWNlZFNoaXBzU2V0ID0gbmV3IFNldCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgY3VyclJvdyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY3VyclJvdy5wdXNoKC0xKTtcbiAgICB9XG4gICAgZ3JpZC5wdXNoKGN1cnJSb3cpO1xuICB9XG5cbiAgc2hpcHNHcmlkLmlkID0gXCJzaGlwc0dyaWRcIjtcbiAgc2hpcHNHcmlkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgc2hpcHNHcmlkLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICBzaGlwc0dyaWQuc3R5bGUuZ2FwID0gXCIyMHB4XCI7XG4gIHNoaXBzR3JpZC5zdHlsZS5oZWlnaHQgPSBcIjU1MHB4XCI7XG4gIHNoaXBzR3JpZC5zdHlsZS53aWR0aCA9IFwiMjYwcHhcIjtcbiAgc2hpcHNHcmlkLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGJsYWNrXCI7XG4gIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgbGV0IHN0YXJ0U2hpcExlbmd0aCA9IDU7XG4gIGxldCBzdGFydFRvcCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgY3VyclNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJTaGlwLmlkID0gYHNoaXAtJHtpfWA7XG4gICAgY3VyclNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBjdXJyU2hpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBjdXJyU2hpcC5zdHlsZS50b3AgPSBgJHtzdGFydFRvcH1weGA7XG4gICAgY3VyclNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKGN1cnJTaGlwLCAwLCAwKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIGUudGFyZ2V0LmlkKTtcbiAgICB9KTtcbiAgICBzdGFydFRvcCArPSAxMDA7XG4gICAgY3VyclNoaXAuZGF0YXNldC53aWR0aCA9IGAke3N0YXJ0U2hpcExlbmd0aH1gO1xuICAgIGN1cnJTaGlwLmRhdGFzZXQuaW5keCA9IGk7XG4gICAgbGV0IGN1cnJXaWR0aCA9IHN0YXJ0U2hpcExlbmd0aCAqIDUwO1xuICAgIGN1cnJTaGlwLnN0eWxlLndpZHRoID0gYCR7Y3VycldpZHRofXB4YDtcbiAgICBjdXJyU2hpcC5zdHlsZS5ib3JkZXJXaWR0aCA9IFwiMnB4XCI7XG4gICAgY3VyclNoaXAuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgY3VyclNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBjdXJyU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBibGFja1wiO1xuICAgIHN0YXJ0U2hpcExlbmd0aC0tO1xuICAgIHNoaXBzR3JpZC5hcHBlbmRDaGlsZChjdXJyU2hpcCk7XG4gIH1cbiAgcGxhY2VyR3JpZC5pZCA9IFwicGxhY2VyR3JpZFwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgb3V0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IGN1cnJDb3JkeCA9IGk7XG4gICAgICBsZXQgY3VyckNvcmR5ID0gajtcbiAgICAgIGxldCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbm5lckRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgICBpbm5lckRpdi5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjb3JkWCA9IHBhcnNlSW50KGlubmVyRGl2Lm9mZnNldExlZnQpO1xuICAgICAgICBsZXQgY29yZFkgPSBwYXJzZUludChpbm5lckRpdi5vZmZzZXRUb3ApO1xuICAgICAgICBjb25zdCBkaXZEcmFnZ2VkaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICAgICAgaWYgKCFkaXZEcmFnZ2VkaWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgZGl2U2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkaXZEcmFnZ2VkaWR9YCk7XG4gICAgICAgIGNvbnN0IGluZHggPSBwYXJzZUludChkaXZTZWxlY3RlZC5kYXRhc2V0LmluZHgpO1xuICAgICAgICBjb25zdCBjdXJyV2lkdGggPSBwYXJzZUludChkaXZTZWxlY3RlZC5kYXRhc2V0LndpZHRoKTtcbiAgICAgICAgaWYgKGogKyBjdXJyV2lkdGggLSAxID49IDEwKSByZXR1cm47XG4gICAgICAgIGxldCBhbHJlYWR5UGxhY2VkU2hpcENoZWNrID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGN1cnJDb2xuID0gajsgY3VyckNvbG4gPCBqICsgY3VycldpZHRoOyBjdXJyQ29sbisrKSB7XG4gICAgICAgICAgaWYgKGdyaWRbaV1bY3VyckNvbG5dICE9IC0xKSBhbHJlYWR5UGxhY2VkU2hpcENoZWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxyZWFkeVBsYWNlZFNoaXBDaGVjaykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2VkU2hpcHNTZXQuaGFzKGluZHgpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGdyaWRbaV1bal0gPT0gaW5keCkge1xuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGFjZWRTaGlwc1NldC5hZGQoaW5keCk7XG4gICAgICAgIGZvciAobGV0IGN1cnJDb2xuID0gajsgY3VyckNvbG4gPCBqICsgY3VycldpZHRoOyBjdXJyQ29sbisrKSB7XG4gICAgICAgICAgZ3JpZFtpXVtjdXJyQ29sbl0gPSBpbmR4O1xuICAgICAgICB9XG4gICAgICAgIGRpdlNlbGVjdGVkLnN0eWxlLmxlZnQgPSBgJHtjb3JkWH1weGA7XG4gICAgICAgIGRpdlNlbGVjdGVkLnN0eWxlLnRvcCA9IGAke2NvcmRZfXB4YDtcbiAgICAgIH0pO1xuICAgICAgaW5uZXJEaXYuZGF0YXNldC54ID0gY3VyckNvcmR4O1xuICAgICAgaW5uZXJEaXYuZGF0YXNldC55ID0gY3VyckNvcmR5O1xuICAgICAgaW5uZXJEaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICAgIGlubmVyRGl2LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgaW5uZXJEaXYuc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICB9XG4gICAgb3V0ZXJEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHBsYWNlckdyaWQuYXBwZW5kQ2hpbGQob3V0ZXJEaXYpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZXJHcmlkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBzR3JpZCk7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGNvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjUwcHhcIjtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGRpYWxvZ0hlYWRpbmcpO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkaWFsb2dNZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlhbG9nTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nLW1lc3NhZ2UtZGl2XCIpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZ2FtZVN0YXJ0LnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICBkaWFsb2dCb3guYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xuICB9KTtcbiAgZGlhbG9nQm94LmFwcGVuZENoaWxkKGdhbWVTdGFydCk7XG4gIGRpYWxvZ0JveC5hcHBlbmRDaGlsZChkaWFsb2dNZXNzYWdlRGl2KTtcbiAgZ2FtZVN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHNoaXBzTWFya2VkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIHNoaXBzTWFya2VkW2ldID0gMDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKGdyaWRbaV1bal0gIT0gLTEpIHtcbiAgICAgICAgICBzaGlwc01hcmtlZFtncmlkW2ldW2pdXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNoaXBzUGxhY2VkID0gMDtcbiAgICBzaGlwc01hcmtlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbSkgc2hpcHNQbGFjZWQrKztcbiAgICB9KTtcblxuICAgIGlmIChzaGlwc1BsYWNlZCAhPSA0KSB7XG4gICAgICBjb25zdCBkaWFsb2dNZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWFsb2ctbWVzc2FnZS1kaXZcIik7XG4gICAgICBkaWFsb2dNZXNzYWdlRGl2LnRleHRDb250ZW50ID1cbiAgICAgICAgXCJQbGVhc2UgcGxhY2UgYWxsIG9mIHlvdXIgc2hpcHMgYW5kIHRoZW4gY2xpY2sgb24gc3RhcnQgIVwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsYWNlci5wbGFjZVNoaXBPblBsYXllckJvYXJkKGdyaWQpO1xuICAgIHBsYWNlci5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMSB0dXJuICFcIjtcbiAgICBjb250cm9sbGVyLmNoYW5nZUdhbWVTdGF0dXMoKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgbGV0IGNvbnRyb2xsZXIgPSBnYW1lQ29udHJvbGxlcigpO1xuICBsZXQgbWFuYWdlciA9IGdyaWRNYW5hZ2VyKCk7XG4gIGxldCBwbGFjZXIgPSBncmlkUGxhY2VyKCk7XG4gIGRpYWxvZ01hbmdlcihjb250cm9sbGVyLCBwbGFjZXIpO1xuXG4gIG1hbmFnZXIuZ2VuZXJhdGVQbGF5ZXJHcmlkKCk7XG4gIG1hbmFnZXIuZ2VuZXJhdGVDb21wdXRlckdyaWQoKTtcblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0LWJ0blwiKTtcbiAgcmVzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFjb250cm9sbGVyLmdldEdhbWVTdGF0dXMoKSkge1xuICAgICAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2VyRGlhbG9nXCIpO1xuICAgICAgZGlhbG9nQm94LnNob3dNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChjb250cm9sbGVyLmdldEdhbWVTdGF0dXMoKSkge1xuICAgICAgY29udHJvbGxlci5jaGFuZ2VHYW1lU3RhdHVzKCk7XG4gICAgfVxuICAgIGlmIChjb250cm9sbGVyLmdldEFjdGl2ZVBsYXllcigpID09IHBsYXllcjIpIHtcbiAgICAgIGNvbnRyb2xsZXIuY2hhbmdlR2FtZVN0YXR1cygpO1xuICAgIH1cbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcmVzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgbWFuYWdlci5jbGVhckJvdGhHcmlkcygpO1xuICAgIHBsYXllcjEuY2xlYXJCb2FyZCgpO1xuICAgIHBsYXllcjIuY2xlYXJCb2FyZCgpO1xuICAgIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2UtZGl2XCIpO1xuICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9KTtcblxuICBjb25zdCBjb21wdXRlckRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItY29udGFpbmVyXCIpO1xuICBjb25zdCBjb21wdXRlckJyYWluID0gY29tcHV0ZXJJbnRlbGxpZ2VuY2UoKTtcblxuICBjb21wdXRlckRpdkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbnRyb2xsZXIuZ2V0R2FtZVN0YXR1cygpICYmIGNvbnRyb2xsZXIuZ2V0QWN0aXZlUGxheWVyKCkgPT0gcGxheWVyMSkge1xuICAgICAgbGV0IHhDb3JkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgIGxldCB5Q29yZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICBpZiAoIXhDb3JkIHx8ICF5Q29yZCkgcmV0dXJuO1xuICAgICAgaWYgKHBsYXllcjIuaGl0Q29yZGluYXRlQ2hlY2soeENvcmQsIHlDb3JkKSkgcmV0dXJuO1xuICAgICAgcGxheWVyMi5tYXJrQ29yZGluYXRlKHhDb3JkLCB5Q29yZCk7XG4gICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICAgIGlmIChwbGF5ZXIyLmlzU2hpcENlbGwoeENvcmQsIHlDb3JkKSkge1xuICAgICAgICBpZiAocGxheWVyMi5zdW5rU2hpcENoZWNrKHhDb3JkLCB5Q29yZCkpIHtcbiAgICAgICAgICBsZXQgW3NoaXBYQ29yZCwgc2hpcFlDb3JkXSA9IHBsYXllcjIuZ2V0U2hpcENvcmRzKHhDb3JkLCB5Q29yZCk7XG4gICAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBpID0gc2hpcFlDb3JkO1xuICAgICAgICAgICAgaSA8IHNoaXBZQ29yZCArIHBsYXllcjIuZ2V0U2hpcExlbmd0aCh4Q29yZCwgeUNvcmQpO1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jb21wdXRlci1jb250YWluZXIgW2RhdGEteD1cIiR7c2hpcFhDb3JkfVwiXVtkYXRhLXk9XCIke2l9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJZb3UganVzdCBzYW5rIG9uZSBvZiB0aGUgY29tcHV0ZXIncyBzaGlwIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSBqdXN0IGhpdCBvbmUgb2YgdGhlIGNvbXB1dGVyJ3Mgc2hpcHQhXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSBtaXNzIHRoZSBjb21wdXRlcidzIHNoaXAgIVwiO1xuICAgICAgfVxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY29tcHV0ZXItY29udGFpbmVyIFtkYXRhLXg9XCIke3hDb3JkfVwiXVtkYXRhLXk9XCIke3lDb3JkfVwiXWBcbiAgICAgICk7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICBpZiAoY29udHJvbGxlci5jaGVja0dhbWVPdmVyKHBsYXllcjIpKSB7XG4gICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIllvdSB3b24gdGhlIGdhbWUhXCI7XG4gICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlR2FtZVN0YXR1cygpO1xuICAgICAgICBwbGF5ZXIxLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgcGxheWVyMi5jbGVhckJvYXJkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2xsZXIuY2hhbmdlQWN0aXZlUExheWVyKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgW2NvcmRYLCBjb3JkWV0gPSBjb250cm9sbGVyLnBsYXlDb21wdXRlclR1cm4oY29tcHV0ZXJCcmFpbik7XG4gICAgICAgICAgY29tcHV0ZXJCcmFpbi5wcmV2Q29yZHNIaXQgPSBbY29yZFgsIGNvcmRZXTtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgICAgICAgICBwbGF5ZXIxLm1hcmtDb3JkaW5hdGUoY29yZFgsIGNvcmRZKTtcbiAgICAgICAgICBpZiAocGxheWVyMS5pc1NoaXBDZWxsKGNvcmRYLCBjb3JkWSkpIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIxLnN1bmtTaGlwQ2hlY2soY29yZFgsIGNvcmRZKSkge1xuICAgICAgICAgICAgICBjb21wdXRlckJyYWluLm9uR29pbmdIaXQgPSAwO1xuICAgICAgICAgICAgICBjb21wdXRlckJyYWluLnByZXZIaXRTdGF0dXMgPSAwO1xuICAgICAgICAgICAgICBjb21wdXRlckJyYWluLnByZXZDb3Jkc0hpdCA9IFstMSwgLTFdO1xuICAgICAgICAgICAgICBjb21wdXRlckJyYWluLnN0YXJ0aW5nQ29yZHNGb3VuZCA9IDA7XG4gICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIGp1c3Qgc2FuayBvbmUgb2YgeW91ciBzaGlwICFcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4ub25Hb2luZ0hpdCA9IDE7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4ucHJldkhpdFN0YXR1cyA9IDE7XG4gICAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4ucHJldkNvcmRzSGl0ID0gW2NvcmRYLCBjb3JkWV07XG4gICAgICAgICAgICAgIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIGp1c3QgaGl0IHlvdXIgc2hpcCAhXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQnJhaW4ucHJldkhpdFN0YXR1cyA9IDA7XG4gICAgICAgICAgICBtZXNzYWdlRGl2LnRleHRDb250ZW50ID0gXCJDb21wdXRlciBtaXNzZWQgdGhlIHNob3QgIVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAucGxheWVyLWNvbnRhaW5lciBbZGF0YS14PVwiJHtjb3JkWH1cIl1bZGF0YS15PVwiJHtjb3JkWX1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgICAgaWYgKGNvbnRyb2xsZXIuY2hlY2tHYW1lT3ZlcihwbGF5ZXIxKSkge1xuICAgICAgICAgICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIganVzdCB3b24gdGhlIGdhbWUhXCI7XG4gICAgICAgICAgICBwbGF5ZXIxLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgICAgIHBsYXllcjIuY2xlYXJCb2FyZCgpO1xuICAgICAgICAgICAgY29udHJvbGxlci5jaGFuZ2VHYW1lU3RhdHVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlQWN0aXZlUExheWVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBjb21wdXRlciB0dXJuOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcbn1cblxuc2NyZWVuQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9