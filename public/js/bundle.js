/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const InstrumentFamilies = __webpack_require__(/*! ./models/instrument_families.js */ \"./src/models/instrument_families.js\");\nconst InstrumentFamiliesInfoView = __webpack_require__(/*! ./views/inst_fam_info_view.js */ \"./src/views/inst_fam_info_view.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const instrumentDropdown = document.querySelector('select#instrument-families');\n\n  const instrumentSelectView = new SelectView(instrumentDropdown);\n  instrumentSelectView.bindEvents();\n\n  const instrumentInfoContainer = document.querySelector('#family-display');\n  const instrumentFamiliesInfoView = new InstrumentFamiliesInfoView(instrumentInfoContainer);\n  instrumentFamiliesInfoView.bindEvents();\n\n  const instrumentDataSource = new InstrumentFamilies();\n  instrumentDataSource.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/instrument_families.js":
/*!*******************************************!*\
  !*** ./src/models/instrument_families.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentFamilies = function() {\n  this.instrumentFamilies = [\n    {\n      name: 'Brass',\n      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\\'s lips',\n      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']\n    },\n    {\n      name: 'Strings',\n      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',\n      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']\n    },\n    {\n      name: 'Wind',\n      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',\n      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']\n    },\n    {\n      name: 'Percussion',\n      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',\n      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']\n    },\n    {\n      name: 'Keyboard',\n      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',\n      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']\n    }\n  ];\n};\n\nInstrumentFamilies.prototype.bindEvents = function() {\n  this.sendOutData();\n  this.respondToChange();\n}\n\nInstrumentFamilies.prototype.sendOutData = function() {\n  PubSub.publish('InstrumentFamilies:all-data-ready', this.instrumentFamilies);\n}\n\nInstrumentFamilies.prototype.respondToChange = function() {\n  PubSub.subscribe('SelectView:user-choice-changed', (evt) => {\n    const userChoiceIndex = evt.detail;\n    PubSub.publish('InstrumentFamilies:details-ready', this.instrumentFamilies[userChoiceIndex]);\n  });\n}\n\nmodule.exports = InstrumentFamilies;\n\n\n//# sourceURL=webpack:///./src/models/instrument_families.js?");

/***/ }),

/***/ "./src/views/inst_fam_info_view.js":
/*!*****************************************!*\
  !*** ./src/views/inst_fam_info_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentFamiliesInfoView = function(container) {\n  this.container = container;\n}\n\nInstrumentFamiliesInfoView.prototype.bindEvents = function() {\n  this.receiveInstrumentFamilyDataAndRender();\n}\n\nInstrumentFamiliesInfoView.prototype.receiveInstrumentFamilyDataAndRender = function() {\n  PubSub.subscribe('InstrumentFamilies:details-ready', (evt) => {\n  const instrumentFamilyInfo = evt.detail;\n  this.render(instrumentFamilyInfo);\n  });\n}\n\nInstrumentFamiliesInfoView.prototype.render = function(info) {\n  this.container.innerHTML = \"\";\n  const familyName = document.createElement('h2');\n  familyName.textContent = info.name;\n  const familyDescription = document.createElement('p');\n  familyDescription.textContent = info.description;\n  const sampleInstrumentsIntro = document.createElement('p');\n  sampleInstrumentsIntro.textContent = \"Examples of instruments belonging to this family:\";\n  const sampleInstrumentsList = document.createElement('ul');\n\n  for (instrument of info.instruments) {\n    const listItem = document.createElement('li');\n    listItem.textContent = instrument;\n    sampleInstrumentsList.appendChild(listItem);\n  }\n\n\n\n  this.container.appendChild(familyName);\n  this.container.appendChild(familyDescription);\n  this.container.appendChild(sampleInstrumentsIntro);\n  this.container.appendChild(sampleInstrumentsList);\n}\n\nmodule.exports = InstrumentFamiliesInfoView;\n\n\n//# sourceURL=webpack:///./src/views/inst_fam_info_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\n\nconst SelectView = function(element) {\n  this.element = element;\n\n}\n\nSelectView.prototype.bindEvents = function() {\n  this.receiveData();\n  this.setUpListenerForUserChange();\n}\n\nSelectView.prototype.receiveData = function() {\n  PubSub.subscribe('InstrumentFamilies:all-data-ready', (evt) => {\n    const instrumentFamilyData = evt.detail;\n    this.populateDropdown(instrumentFamilyData);\n  });\n}\n\nSelectView.prototype.populateDropdown = function(instrumentData) {\n  instrumentData.forEach((instrumentFamily, index) => {\n    const newOption = document.createElement('option');\n    newOption.textContent = instrumentFamily.name;\n    newOption.value = index;\n    this.element.appendChild(newOption);\n  });\n};\n\nSelectView.prototype.setUpListenerForUserChange = function() {\n  this.element.addEventListener('change', (evt) => {\n  const userChoiceIndex = evt.target.value;\n  PubSub.publish('SelectView:user-choice-changed', userChoiceIndex);\n  });\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });