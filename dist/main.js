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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

var margin = {
  top: 50,
  left: 50,
  right: 50,
  bottom: 50
},
    height = 600 - margin.top - margin.bottom,
    width = 1100 - margin.left - margin.right;
var svg = d3.select("#map").append('svg').attr('height', height + margin.top + margin.bottom).attr('width', width + margin.left, margin.right).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
var projection = d3.geoNaturalEarth1();
var pathGenerator = d3.geoPath().projection(projection);
var g = svg.append('g');
g.append('path').attr('class', 'sphere').attr('d', pathGenerator({
  type: 'Sphere'
}));
svg.call(d3.zoom().on('zoom', function () {
  g.attr('transform', d3.event.transform);
})); // Promise.all([
// json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
// tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv')
// ]).then(([tsvData, topoJSONdata]) => {

Promise.all([d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"), d3.csv("src/assets/data/jan2020Test.csv")]).then(function (_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      topoJSONdata = _ref2[0],
      productionData = _ref2[1];

  var outputByCountry = productionData.reduce(function (acc, d) {
    acc[d.country] = d;
    return acc;
  }, {});
  console.log(+outputByCountry["Algeria"].output);
  var countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);
  countries.features.forEach(function (d) {
    // debugger
    // console.log(d.properties.name)
    if (outputByCountry[d.properties.name]) {
      debugger; // Object.assign({}, d["output"], +outputByCountry[d.properties.name].output)

      Object.assign(d, {
        output: +outputByCountry[d.properties.name].output
      });
      debugger;
    }
  }); // console.log(countries.features)

  g.selectAll("path").data(countries.features).enter().append("path").attr("class", "country").attr("d", pathGenerator).append("title").text(function (d) {
    return d.properties.name;
  });
}); // d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then((data) => {
//     // console.log(data)
//   }
// );
//   const countryName = tsvData.reduce((accumulator, d) => {
//     accumulator[d.iso_n3] = d.name;
//     return accumulator;
//   }, {});
//accumulator method is like the forEach method, but cleaner
// d3.tsv("https://unpkg.com/browse/world-atlas@1.1.4/world/110m.tsv")
//     .then(data => console.log(data))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFyZ2luIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJwcm9qZWN0aW9uIiwiZ2VvTmF0dXJhbEVhcnRoMSIsInBhdGhHZW5lcmF0b3IiLCJnZW9QYXRoIiwiZyIsInR5cGUiLCJjYWxsIiwiem9vbSIsIm9uIiwiZXZlbnQiLCJ0cmFuc2Zvcm0iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsImNzdiIsInRoZW4iLCJ0b3BvSlNPTmRhdGEiLCJwcm9kdWN0aW9uRGF0YSIsIm91dHB1dEJ5Q291bnRyeSIsInJlZHVjZSIsImFjYyIsImQiLCJjb3VudHJ5IiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsImNvdW50cmllcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmZWF0dXJlcyIsImZvckVhY2giLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsInRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Qzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOztBQUVBLGtD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Q0FBaUJaLFlBQWpCLEVBQStCQSxZQUFZLENBQUNhLE9BQWIsQ0FBcUJILFNBQXBELENBQWxCO0FBRUFBLFdBQVMsQ0FBQ0ksUUFBVixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQVYsQ0FBQyxFQUFJO0FBQzVCO0FBQ0E7QUFDQSxRQUFJSCxlQUFlLENBQUNHLENBQUMsQ0FBQ1csVUFBRixDQUFhQyxJQUFkLENBQW5CLEVBQXdDO0FBQ3BDLGVBRG9DLENBRXBDOztBQUNBQyxZQUFNLENBQUNDLE1BQVAsQ0FBY2QsQ0FBZCxFQUFpQjtBQUFDSSxjQUFNLEVBQUUsQ0FBQ1AsZUFBZSxDQUFDRyxDQUFDLENBQUNXLFVBQUYsQ0FBYUMsSUFBZCxDQUFmLENBQW1DUjtBQUE3QyxPQUFqQjtBQUNBO0FBQ0g7QUFDSixHQVRELEVBWHdDLENBc0J4Qzs7QUFFQXJCLEdBQUMsQ0FDRWdDLFNBREgsQ0FDYSxNQURiLEVBRUdDLElBRkgsQ0FFUVgsU0FBUyxDQUFDSSxRQUZsQixFQUdHUSxLQUhILEdBSUd4QyxNQUpILENBSVUsTUFKVixFQUtHQyxJQUxILENBS1EsT0FMUixFQUtpQixTQUxqQixFQU1HQSxJQU5ILENBTVEsR0FOUixFQU1hRyxhQU5iLEVBT0dKLE1BUEgsQ0FPVSxPQVBWLEVBUUd5QyxJQVJILENBUVEsVUFBQ2xCLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNXLFVBQUYsQ0FBYUMsSUFBcEI7QUFBQSxHQVJSO0FBVUgsQ0FyQ0QsRSxDQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcbmxldCBtYXJnaW4gPSB7IHRvcDogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAgfSxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICB3aWR0aCA9IDExMDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNtYXBcIilcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0LCBtYXJnaW4ucmlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG1hcmdpbi5sZWZ0ICsgJywnICsgbWFyZ2luLnRvcCArICcpJyk7XG5cbmNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9OYXR1cmFsRWFydGgxKCk7XG5jb25zdCBwYXRoR2VuZXJhdG9yID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcblxuZy5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdjbGFzcycsICdzcGhlcmUnKVxuICAgIC5hdHRyKCdkJywgcGF0aEdlbmVyYXRvcih7dHlwZTogJ1NwaGVyZSd9KSlcblxuXG5zdmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufSkpO1xuXG4vLyBQcm9taXNlLmFsbChbXG4gICAgLy8ganNvbignaHR0cHM6Ly91bnBrZy5jb20vd29ybGQtYXRsYXNAMS4xLjQvd29ybGQvNTBtLmpzb24nKSxcbiAgICAvLyB0c3YoJ2h0dHBzOi8vdW5wa2cuY29tL3dvcmxkLWF0bGFzQDEuMS40L3dvcmxkLzUwbS50c3YnKVxuLy8gXSkudGhlbigoW3RzdkRhdGEsIHRvcG9KU09OZGF0YV0pID0+IHtcblxuUHJvbWlzZS5hbGwoW1xuICBkMy5qc29uKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy01MG0uanNvblwiKSxcbiAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhL2phbjIwMjBUZXN0LmNzdlwiKSxcbl0pLnRoZW4oKFt0b3BvSlNPTmRhdGEsIHByb2R1Y3Rpb25EYXRhXSkgPT4ge1xuXG4gICAgY29uc3Qgb3V0cHV0QnlDb3VudHJ5ID0gcHJvZHVjdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgYWNjW2QuY291bnRyeV0gPSBkO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnNvbGUubG9nKCtvdXRwdXRCeUNvdW50cnlbXCJBbGdlcmlhXCJdLm91dHB1dClcblxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUodG9wb0pTT05kYXRhLCB0b3BvSlNPTmRhdGEub2JqZWN0cy5jb3VudHJpZXMpO1xuXG4gICAgY291bnRyaWVzLmZlYXR1cmVzLmZvckVhY2goZCA9PiB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGQucHJvcGVydGllcy5uYW1lKVxuICAgICAgICBpZiAob3V0cHV0QnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXSkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIC8vIE9iamVjdC5hc3NpZ24oe30sIGRbXCJvdXRwdXRcIl0sICtvdXRwdXRCeUNvdW50cnlbZC5wcm9wZXJ0aWVzLm5hbWVdLm91dHB1dClcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZCwge291dHB1dDogK291dHB1dEJ5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0ub3V0cHV0fSk7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJpZXMuZmVhdHVyZXMpXG5cbiAgICBnXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgICAgIC50ZXh0KChkKSA9PiBkLnByb3BlcnRpZXMubmFtZSk7XG5cbn0pO1xuICBcbi8vIGQzLmpzb24oXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3dvcmxkLWF0bGFzQDIvY291bnRyaWVzLTUwbS5qc29uXCIpLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuLy8gICB9XG4vLyApO1xuXG4vLyAgIGNvbnN0IGNvdW50cnlOYW1lID0gdHN2RGF0YS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBkKSA9PiB7XG4vLyAgICAgYWNjdW11bGF0b3JbZC5pc29fbjNdID0gZC5uYW1lO1xuLy8gICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbi8vICAgfSwge30pO1xuLy9hY2N1bXVsYXRvciBtZXRob2QgaXMgbGlrZSB0aGUgZm9yRWFjaCBtZXRob2QsIGJ1dCBjbGVhbmVyXG5cbi8vIGQzLnRzdihcImh0dHBzOi8vdW5wa2cuY29tL2Jyb3dzZS93b3JsZC1hdGxhc0AxLjEuNC93b3JsZC8xMTBtLnRzdlwiKVxuLy8gICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpIl0sInNvdXJjZVJvb3QiOiIifQ==