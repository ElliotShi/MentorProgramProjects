/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _imageLoader = __webpack_require__(1);

	var _imageLoader2 = _interopRequireDefault(_imageLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var images = {
	  "one": "http://orig14.deviantart.net/08db/f/2012/145/2/f/one_piece_marble_play_by_iviarker-d511vb0.jpg",
	  "two": "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/large/public/2015/04/28/one-piece-universal-studios.jpg",
	  "three": "https://s-media-cache-ak0.pinimg.com/736x/f4/9e/63/f49e63303cd0647ef286c4a0ef7ba0ec.jpg"
	};

	var imageLoader = new _imageLoader2.default();
	imageLoader.loader(images);

	imageLoader.on('loaded', function (data) {
	  var Li = document.createElement('li');
	  var content = document.createTextNode(data[0] + ' of total ' + data[1] + ' loading completed.');
	  Li.appendChild(content);
	  var Ul = document.getElementById('progress');
	  Ul.appendChild(Li);
	  if (data[0] == data[1]) {
	    alert("all completed without error");
	  }
	});

	imageLoader.on('failed', function (data) {
	  document.getElementById('failed').innerHTML = data + ' loading failed.';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _perImage = __webpack_require__(2);

	var _perImage2 = _interopRequireDefault(_perImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageLoader = function () {
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);

	    this._events = new Map(); //to store event listener
	    this._store = []; //to store loaded image
	  }

	  _createClass(ImageLoader, [{
	    key: 'on',
	    value: function on(event, action) {
	      this._events.set(event, []);
	      this._events.get(event).push(action);
	    }
	  }, {
	    key: 'emit',
	    value: function emit(event) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var listeners = this._events.get(event);
	      if (listeners && listeners.length) {
	        listeners.forEach(function (listener) {
	          listener(args);
	        });
	      }
	    }
	  }, {
	    key: 'loader',
	    value: function loader(images) {
	      var _this = this;

	      var imageArr = Object.getOwnPropertyNames(images);
	      var totalNo = imageArr.length;
	      var loaded = 0;
	      var failed = 0;
	      var perimage = new _perImage2.default();
	      imageArr.forEach(function (key) {
	        var url = images[key];
	        perimage.getImage(url).then(function (data) {
	          loaded++;
	          _this._store.push(data);
	          _this.emit('loaded', loaded, totalNo);
	        }, function () {
	          failed++;
	          _this.emit('fail', failed);
	        });
	      });
	    }
	  }]);

	  return ImageLoader;
	}();

	;

	exports.default = ImageLoader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var perImage = function () {
	  function perImage() {
	    _classCallCheck(this, perImage);
	  }

	  _createClass(perImage, [{
	    key: "getImage",
	    value: function getImage(src) {
	      return new Promise(function (resolve, reject) {
	        var img = new Image();
	        img.src = src;
	        img.onload = function () {
	          resolve(img);
	        };
	        img.onerror = function () {
	          reject();
	        };
	      });
	    }
	  }]);

	  return perImage;
	}();

	exports.default = perImage;

/***/ }
/******/ ]);