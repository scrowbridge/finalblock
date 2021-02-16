(window["webpackJsonp_sc_block"] = window["webpackJsonp_sc_block"] || []).push([["style-index"],{

/***/ "./src/testimonial/style.scss":
/*!************************************!*\
  !*** ./src/testimonial/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp_sc_block"] = window["webpackJsonp_sc_block"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonial */ "./src/testimonial/index.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile */ "./src/profile/build/index.js");
// include all block index.js files
// repeat for each block



/***/ }),

/***/ "./src/profile/build/index.js":
/*!************************************!*\
  !*** ./src/profile/build/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

(window["webpackJsonp_sc_block"] = window["webpackJsonp_sc_block"] || []).push([["style-index"], {
  /***/
  "./src/testimonial/style.scss":
  /*!************************************!*\
    !*** ./src/testimonial/style.scss ***!
    \************************************/

  /*! no static exports found */

  /***/
  function srcTestimonialStyleScss(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

    /***/
  }
}]);
/******/

(function (modules) {
  // webpackBootstrap

  /******/
  // install a JSONP callback for chunk loading

  /******/
  function webpackJsonpCallback(data) {
    /******/
    var chunkIds = data[0];
    /******/

    var moreModules = data[1];
    /******/

    var executeModules = data[2];
    /******/

    /******/
    // add "moreModules" to the modules object,

    /******/
    // then flag all "chunkIds" as loaded and fire callback

    /******/

    var moduleId,
        chunkId,
        i = 0,
        resolves = [];
    /******/

    for (; i < chunkIds.length; i++) {
      /******/
      chunkId = chunkIds[i];
      /******/

      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        /******/
        resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/


      installedChunks[chunkId] = 0;
      /******/
    }
    /******/


    for (moduleId in moreModules) {
      /******/
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/
        modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/

    }
    /******/


    if (parentJsonpFunction) parentJsonpFunction(data);
    /******/

    /******/

    while (resolves.length) {
      /******/
      resolves.shift()();
      /******/
    }
    /******/

    /******/
    // add entry modules from loaded chunk to deferred list

    /******/


    deferredModules.push.apply(deferredModules, executeModules || []);
    /******/

    /******/
    // run deferred modules when all chunks ready

    /******/

    return checkDeferredModules();
    /******/
  }

  ;
  /******/

  function checkDeferredModules() {
    /******/
    var result;
    /******/

    for (var i = 0; i < deferredModules.length; i++) {
      /******/
      var deferredModule = deferredModules[i];
      /******/

      var fulfilled = true;
      /******/

      for (var j = 1; j < deferredModule.length; j++) {
        /******/
        var depId = deferredModule[j];
        /******/

        if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/


      if (fulfilled) {
        /******/
        deferredModules.splice(i--, 1);
        /******/

        result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/
      }
      /******/

    }
    /******/

    /******/


    return result;
    /******/
  }
  /******/

  /******/
  // The module cache

  /******/


  var installedModules = {};
  /******/

  /******/
  // object to store loaded and loading chunks

  /******/
  // undefined = chunk not loaded, null = chunk preloaded/prefetched

  /******/
  // Promise = chunk loading, 0 = chunk loaded

  /******/

  var installedChunks = {
    /******/
    "index": 0
    /******/

  };
  /******/

  /******/

  var deferredModules = [];
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  var jsonpArray = window["webpackJsonp_sc_block"] = window["webpackJsonp_sc_block"] || [];
  /******/

  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/

  jsonpArray.push = webpackJsonpCallback;
  /******/

  jsonpArray = jsonpArray.slice();
  /******/

  for (var i = 0; i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i]);
  }
  /******/


  var parentJsonpFunction = oldJsonpFunction;
  /******/

  /******/

  /******/
  // add entry module to deferred list

  /******/

  deferredModules.push(["./src/index.js", "style-index"]);
  /******/
  // run deferred modules when ready

  /******/

  return checkDeferredModules();
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/

  /*! no exports provided */

  /***/
  function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _testimonial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./testimonial */
    "./src/testimonial/index.js"); // include all block index.js files
    // repeat for each block

    /***/

  },

  /***/
  "./src/testimonial/edit.js":
  /*!*********************************!*\
    !*** ./src/testimonial/edit.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcTestimonialEditJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return edit;
    });
    /* harmony import */


    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @wordpress/element */
    "@wordpress/element");
    /* harmony import */


    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @wordpress/i18n */
    "@wordpress/i18n");
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @wordpress/block-editor */
    "@wordpress/block-editor");
    /* harmony import */


    var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @wordpress/components */
    "@wordpress/components");
    /* harmony import */


    var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editor.scss */
    "./src/testimonial/editor.scss");
    /* harmony import */


    var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);
    /**
     * Retrieves the translation of text.
     *
     * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
     */

    /**
     * React hook that is used to mark the block wrapper element.
     * It provides all the necessary props like the class name.
     *
     * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
     */
    //import { useBlockProps } from '@wordpress/block-editor';
    //import { RichText } from '@wordpress/block-editor';

    /**
     * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
     * Those files can contain any CSS code that gets applied to the editor.
     *
     * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
     */

    /**
     * The edit function describes the structure of your block in the context of the
     * editor. This represents what the editor will render when the block is used.
     *
     * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
     *
     * @return {WPElement} Element to render.
     */
    // setting attributes here


    function edit(_ref) {
      var attributes = _ref.attributes,
          setAttributes = _ref.setAttributes; //export default function edit(props) {
      //let attributes = props.attributes;
      //let {attributes, setAttributes} = props;

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select some rating:'),
        value: attributes.stars // e.g: value = [ 'a', 'c' ]
        ,
        onChange: function onChange(stars) {
          setAttributes({
            stars: stars
          });
        },
        options: [{
          value: '1',
          label: '*'
        }, {
          value: '2',
          label: '**'
        }, {
          value: '3',
          label: '***'
        }, {
          value: '4',
          label: '****'
        }, {
          value: '5',
          label: '*****'
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
        tagName: "div" // The tag here is the element output and editable in the admin
        ,
        value: attributes.quote // Any existing content, either from the database or an attribute default
        ,
        allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
        ,
        onChange: function onChange(quote) {
          return setAttributes({
            quote: quote
          });
        } // Store updated content as a block attribute
        ,
        placeholder: "Lorem ipsum...." // Display this text before any content has been added by the user

      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "quote-profile"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "photo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
        allowedTypes: ['image'],
        onSelect: function onSelect(img) {
          return setAttributes({
            imgUrl: img.sizes.thumbnail.url
          });
        },
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
            src: attributes.imgUrl,
            onClick: open
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
        className: "author",
        value: attributes.author,
        onChange: function onChange(author) {
          return setAttributes({
            author: author
          });
        },
        placeholder: "Meatball Perez"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
        className: "location",
        value: attributes.location,
        onChange: function onChange(location) {
          return setAttributes({
            location: location
          });
        },
        placeholder: "City, State"
      }))));
    }
    /***/

  },

  /***/
  "./src/testimonial/editor.scss":
  /*!*************************************!*\
    !*** ./src/testimonial/editor.scss ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function srcTestimonialEditorScss(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

    /***/
  },

  /***/
  "./src/testimonial/index.js":
  /*!**********************************!*\
    !*** ./src/testimonial/index.js ***!
    \**********************************/

  /*! no exports provided */

  /***/
  function srcTestimonialIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @wordpress/blocks */
    "@wordpress/blocks");
    /* harmony import */


    var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @wordpress/i18n */
    "@wordpress/i18n");
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./style.scss */
    "./src/testimonial/style.scss");
    /* harmony import */


    var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit */
    "./src/testimonial/edit.js");
    /* harmony import */


    var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./save */
    "./src/testimonial/save.js");
    /**
     * Registers a new block provided a unique name and an object defining its behavior.
     *
     * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
     */

    /**
     * Retrieves the translation of text.
     *
     * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
     */

    /**
     * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
     * All files containing `style` keyword are bundled together. The code used
     * gets applied both to the front of your site and to the editor.
     *
     * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
     */

    /**
     * Internal dependencies
     */

    /**
     * Every block starts by registering a new block type definition.
     *
     * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
     */


    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('sc-block/testimonial', {
      /**
       * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
       */
      apiVersion: 2,

      /**
       * This is the display title for your block, which can be translated with `i18n` functions.
       * The block inserter will show this name.
       */
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Testimonial', 'sc-block'),

      /**
       * This is a short description for your block, can be translated with `i18n` functions.
       * It will be shown in the Block Tab in the Settings Sidebar.
       */
      description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A collection of editors blocks', 'sc-block'),

      /**
       * Blocks are grouped into categories to help users browse and discover them.
       * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
       */
      category: 'widgets',

      /**
       * An icon property should be specified to make it easier to identify a block.
       * These can be any of WordPress’ Dashicons, or a custom svg element.
       */
      icon: 'admin-users',

      /**
       * Optional block extended support features.
       */
      supports: {
        // Removes support for an HTML mode.
        html: false
      },
      keywords: ['block', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('testimonial'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('review'), 'sc'],
      // these are the data "fields" we want to store with out block
      //adding the attributes
      attributes: {
        quote: {
          type: 'string',
          source: 'html',
          selector: '.quote'
        },
        stars: {
          type: 'number',
          default: 5
        },
        imgUrl: {
          type: 'string',
          default: 'https://placehold.it/75'
        },
        author: {
          type: 'string',
          source: 'text',
          selector: '.author'
        },
        location: {
          type: 'string',
          source: 'text',
          selector: '.location'
        }
      },

      /**
       * @see ./edit.js
       */
      edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

      /**
       * @see ./save.js
       */
      save: _save__WEBPACK_IMPORTED_MODULE_4__["default"] // same as
      // save: save

    });
    /***/
  },

  /***/
  "./src/testimonial/save.js":
  /*!*********************************!*\
    !*** ./src/testimonial/save.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcTestimonialSaveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return save;
    });
    /* harmony import */


    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @wordpress/element */
    "@wordpress/element");
    /* harmony import */


    var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @wordpress/i18n */
    "@wordpress/i18n");
    /* harmony import */


    var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @wordpress/block-editor */
    "@wordpress/block-editor");
    /* harmony import */


    var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * Retrieves the translation of text.
     *
     * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
     */

    /**
     * React hook that is used to mark the block wrapper element.
     * It provides all the necessary props like the class name.
     *
     * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
     */

    /**
     * The save function defines the way in which the different attributes should
     * be combined into the final markup, which is then serialized by the block
     * editor into `post_content`.
     *
     * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
     *
     * @return {WPElement} Element to render.
     */


    function save(_ref) {
      var attributes = _ref.attributes;
      var starIcons = Array(5).fill('&#9733;', 0, attributes.stars).join('');
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "stars"
      }, starIcons), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
        tagname: "div",
        className: "quote",
        value: attributes.quote
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "quote-profile"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "photo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: attributes.imgUrl,
        alt: 'Photo of _____'
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "text"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: "author"
      }, attributes.author), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: "location"
      }, attributes.location))));
    }
    /***/

  },

  /***/
  "@wordpress/block-editor":
  /*!*************************************!*\
    !*** external ["wp","blockEditor"] ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function wordpressBlockEditor(module, exports) {
    (function () {
      module.exports = window["wp"]["blockEditor"];
    })();
    /***/

  },

  /***/
  "@wordpress/blocks":
  /*!********************************!*\
    !*** external ["wp","blocks"] ***!
    \********************************/

  /*! no static exports found */

  /***/
  function wordpressBlocks(module, exports) {
    (function () {
      module.exports = window["wp"]["blocks"];
    })();
    /***/

  },

  /***/
  "@wordpress/components":
  /*!************************************!*\
    !*** external ["wp","components"] ***!
    \************************************/

  /*! no static exports found */

  /***/
  function wordpressComponents(module, exports) {
    (function () {
      module.exports = window["wp"]["components"];
    })();
    /***/

  },

  /***/
  "@wordpress/element":
  /*!*********************************!*\
    !*** external ["wp","element"] ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function wordpressElement(module, exports) {
    (function () {
      module.exports = window["wp"]["element"];
    })();
    /***/

  },

  /***/
  "@wordpress/i18n":
  /*!******************************!*\
    !*** external ["wp","i18n"] ***!
    \******************************/

  /*! no static exports found */

  /***/
  function wordpressI18n(module, exports) {
    (function () {
      module.exports = window["wp"]["i18n"];
    })();
    /***/

  }
  /******/

});

/***/ }),

/***/ "./src/testimonial/edit.js":
/*!*********************************!*\
  !*** ./src/testimonial/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/testimonial/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
//import { useBlockProps } from '@wordpress/block-editor';
//import { RichText } from '@wordpress/block-editor';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
// setting attributes here

function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  //export default function edit(props) {
  //let attributes = props.attributes;
  //let {attributes, setAttributes} = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: attributes.theme
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Basic",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Theme'),
    value: attributes.theme,
    onChange: function onChange(theme) {
      setAttributes({
        theme: theme
      });
    },
    options: [{
      value: 'light',
      label: 'Light Theme'
    }, {
      value: 'dark',
      label: 'Dark Theme'
    }]
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select a rating:'),
    value: attributes.stars // e.g: value = [ 'a', 'c' ]
    ,
    onChange: function onChange(stars) {
      setAttributes({
        stars: stars
      });
    },
    options: [{
      value: '1',
      label: '*'
    }, {
      value: '2',
      label: '**'
    }, {
      value: '3',
      label: '***'
    }, {
      value: '4',
      label: '****'
    }, {
      value: '5',
      label: '*****'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.quote // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: function onChange(quote) {
      return setAttributes({
        quote: quote
      });
    } // Store updated content as a block attribute
    ,
    placeholder: "Lorem ipsum...." // Display this text before any content has been added by the user

  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "quote-profile"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "photo"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    allowedTypes: ['image'],
    onSelect: function onSelect(img) {
      return setAttributes({
        imgUrl: img.sizes.thumbnail.url
      });
    },
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: attributes.imgUrl,
        onClick: open
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
    className: "author",
    value: attributes.author,
    onChange: function onChange(author) {
      return setAttributes({
        author: author
      });
    },
    placeholder: "Meatball Perez"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PlainText"], {
    className: "location",
    value: attributes.location,
    onChange: function onChange(location) {
      return setAttributes({
        location: location
      });
    },
    placeholder: "City, State"
  }))));
}

/***/ }),

/***/ "./src/testimonial/editor.scss":
/*!*************************************!*\
  !*** ./src/testimonial/editor.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/testimonial/index.js":
/*!**********************************!*\
  !*** ./src/testimonial/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/testimonial/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/testimonial/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/testimonial/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('sc-block/testimonial', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,

  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Testimonial', 'sc-block'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A collection of editors blocks', 'sc-block'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'admin-users',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },
  keywords: ['block', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('testimonial'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('review'), 'sc'],
  // these are the data "fields" we want to store with out block
  //adding the attributes
  attributes: {
    quote: {
      type: 'string',
      source: 'html',
      selector: '.quote'
    },
    stars: {
      type: 'number',
      default: 5
    },
    imgUrl: {
      type: 'string',
      default: 'https://placehold.it/75'
    },
    author: {
      type: 'string',
      source: 'text',
      selector: '.author'
    },
    location: {
      type: 'string',
      source: 'text',
      selector: '.location'
    },
    theme: {
      type: 'string'
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"] // same as
  // save: save

});

/***/ }),

/***/ "./src/testimonial/save.js":
/*!*********************************!*\
  !*** ./src/testimonial/save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  var attributes = _ref.attributes;
  var starIcons = Array(5).fill('&#9733;', 0, attributes.stars).join('');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
    className: attributes.theme
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "stars"
  }, starIcons), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagname: "div",
    className: "quote",
    value: attributes.quote
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "quote-profile"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "photo"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: attributes.imgUrl,
    alt: 'Photo of _____'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "author"
  }, attributes.author), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "location"
  }, attributes.location))));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map