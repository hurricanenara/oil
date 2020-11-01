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
/* harmony import */ var _loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadAndProcessData.js */ "./src/loadAndProcessData.js");

var margin = {
  top: 50,
  left: 50,
  right: 50,
  bottom: 50
},
    height = 600 - margin.top - margin.bottom,
    width = 950 - margin.left - margin.right;
var svg = d3.select("#map").append('svg').attr('height', height + margin.top + margin.bottom).attr('width', width + margin.left + margin.right).attr('class', 'countries').append('g').attr('transform', 'translate(' + -15 + ',' + margin.top + ')');
var projection = d3.geoNaturalEarth1();
var pathGenerator = d3.geoPath().projection(projection);
var g = svg.append('g');
g.append('path').attr('class', 'sphere').attr('d', pathGenerator({
  type: 'Sphere'
}));
g.call(d3.zoom().on('zoom', function () {
  g.attr('transform', d3.event.transform);
}));
d3.select("#zoom-in").on("click", function () {
  d3.zoom().on("zoom", function () {
    g.attr("transform", d3.event.transform);
  }).scaleBy(g.transition().duration(550), 1.3);
});
d3.select("#zoom-out").on("click", function () {
  d3.zoom().on("zoom", function () {
    g.attr("transform", d3.event.transform);
  }).scaleBy(g.transition().duration(550), 1 / 1.3);
});
var colorScale = d3.scaleThreshold(d3.schemeCategory10);
Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(2019).then(function (countries) {
  colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
  colorScale.domain().sort(function (b, a) {
    return a - b;
  });
  colorScale.range(d3.schemePurples[9]);
  var tooltip = d3.select('#map').append('div').attr('class', 'tooltip').style('opacity', 0);
  var original = g.selectAll("path").data(countries.features).enter().append("path").attr("class", "country").attr("d", pathGenerator).attr("fill", function (d) {
    if (typeof d.output === 'number') {
      return colorScale(d.output);
    } else {
      return "rgba(204, 204, 204, 1)";
    }
  }).on("mouseover", function (e, d) {
    tooltip.transition().duration(400).style("opacity", 0.7);
    tooltip.html("".concat(d.properties.name, ": ").concat(Math.round(d.output * 0.0001 + 'e+1'), " mb/d")).style('left', e.pageX + 'px').style('top', e.pageY + 'px');
  }).on("mouseout", function (e, d) {
    tooltip.transition().duration(500).style("opacity", 0);
  }).append("title");
});
var fetchDataByThisYear = 2019; //slider

var dataTime = d3.range(0, 15).map(function (d) {
  return new Date(2005 + d, 10, 3);
});
var selected = document.getElementById('selectDropdown');
var dataType = selected.options[selected.options.selectedIndex].text;
var slider = d3.sliderHorizontal().min(d3.min(dataTime)).max(d3.max(dataTime)).step(1000 * 60 * 60 * 24 * 365).width(400).tickFormat(d3.timeFormat("%Y")).tickValues(dataTime).default(new Date(2019, 10, 3)).on('onchange', function (val) {
  fetchDataByThisYear = new Date(val).getFullYear(); // nest timeline inside of production/consumption
  // does it really matter?

  var dropdown = d3.select('#selectDropdown'); //   .on('change', function (d) {

  dataType = selected.options[selected.options.selectedIndex].text;
  Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(fetchDataByThisYear, dataType).then(function (countries) {
    debugger;
    colorScale = d3.scaleThreshold(d3.schemeCategory10);
    colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
    colorScale.domain().sort(function (b, a) {
      return a - b;
    });
    colorScale.range(d3.schemePurples[9]);
    var tooltip = d3.select('#map').append('div').attr('class', 'tooltip').style('opacity', 0);
    var selection = g.selectAll("path").data(countries.features).attr("fill", function (d) {
      if (typeof d.output === 'number') {
        debugger;
        return colorScale(d.output);
      } else {
        return "rgba(204, 204, 204, 1)";
      }
    }).enter() // .append("path")
    .attr("class", "country").attr("d", pathGenerator).on("mouseover", function (d) {
      tooltip.transition().duration(400).style("opacity", 0.7);
      tooltip.html("".concat(d.properties.name, ": ").concat(Math.round(d.output * 0.001 + 'e+1'), " mb/d")).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY + 'px');
    }).on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
  });
});
d3.select('#slider').append('svg').attr('width', 500).attr('height', 100).append('g').attr('transform', 'translate(30, 30)').call(slider);
var dropdown = d3.select('#selectDropdown').on('change', function (d) {
  var selected = document.getElementById('selectDropdown');
  var initialDataType = selected.options[selected.options.selectedIndex].text;
  Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(2019, initialDataType).then(function (countries) {
    debugger;
    colorScale = d3.scaleThreshold(d3.schemeCategory10);
    colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
    colorScale.domain().sort(function (b, a) {
      return a - b;
    });
    colorScale.range(d3.schemePurples[9]);
    var tooltip = d3.select('#map').append('div').attr('class', 'tooltip').style('opacity', 0);
    var selection = g.selectAll("path").data(countries.features).attr("fill", function (d) {
      if (typeof d.output === 'number') {
        debugger;
        return colorScale(d.output);
      } else {
        return "rgba(204, 204, 204, 1)";
      }
    }).enter() // .append("path")
    .attr("class", "country").attr("d", pathGenerator).on("mouseover", function (d) {
      tooltip.transition().duration(400).style("opacity", 0.7);
      tooltip.html("".concat(d.properties.name, ": ").concat(Math.round(d.output * 0.001 + 'e+1'), " mb/d")).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY + 'px');
    }).on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
  });
});

/***/ }),

/***/ "./src/loadAndProcessData.js":
/*!***********************************!*\
  !*** ./src/loadAndProcessData.js ***!
  \***********************************/
/*! exports provided: loadAndProcessData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAndProcessData", function() { return loadAndProcessData; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

var loadAndProcessData = function loadAndProcessData(fetchDataByThisYear) {
  var dataType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Production";
  return Promise.all([d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"), d3.csv("src/assets/data/2005-2019PROD.csv"), d3.csv("src/assets/data/2005-2019CONS.csv") //  d3.csv("src/assets/data/jan2020Test.csv"),
  ]).then(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
        topoJSONdata = _ref2[0],
        productionData = _ref2[1],
        consumptionData = _ref2[2];

    var valuesByCountry;

    if (dataType === "Production") {
      valuesByCountry = productionData.reduce(function (acc, d) {
        var country = d.country;
        var year = fetchDataByThisYear;
        acc[country] = {
          country: country,
          output: +d[year]
        };
        return acc;
      }, {});
    } else if (dataType === "Consumption") {
      debugger;
      valuesByCountry = consumptionData.reduce(function (acc, d) {
        var country = d.country;
        var year = fetchDataByThisYear;
        acc[country] = {
          country: country,
          output: +d[year]
        };
        debugger;
        return acc;
      }, {});
    }

    var countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);
    countries.features.forEach(function (d) {
      //  debugger
      if (valuesByCountry[d.properties.name]) {
        Object.assign(d, {
          output: +valuesByCountry[d.properties.name].output
        });
      }
    });
    debugger;
    return countries;
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiZSIsImh0bWwiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJmZXRjaERhdGFCeVRoaXNZZWFyIiwiZGF0YVRpbWUiLCJtYXAiLCJEYXRlIiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YVR5cGUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJzbGlkZXIiLCJzbGlkZXJIb3Jpem9udGFsIiwibWluIiwibWF4Iiwic3RlcCIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0IiwidGlja1ZhbHVlcyIsImRlZmF1bHQiLCJ2YWwiLCJnZXRGdWxsWWVhciIsImRyb3Bkb3duIiwic2VsZWN0aW9uIiwiaW5pdGlhbERhdGFUeXBlIiwiUHJvbWlzZSIsImFsbCIsImpzb24iLCJjc3YiLCJ0b3BvSlNPTmRhdGEiLCJwcm9kdWN0aW9uRGF0YSIsImNvbnN1bXB0aW9uRGF0YSIsInZhbHVlc0J5Q291bnRyeSIsInJlZHVjZSIsImFjYyIsImNvdW50cnkiLCJ5ZWFyIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsImZvckVhY2giLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlE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QWpCO0FBR0Q7QUFDRixLQVBEO0FBUUE7QUFDQSxXQUFPZixTQUFQO0FBQ0QsR0EzQ0QsQ0FEeUI7QUFBQSxDQUEzQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgeyBsb2FkQW5kUHJvY2Vzc0RhdGEgfSBmcm9tICcuL2xvYWRBbmRQcm9jZXNzRGF0YS5qcydcblxubGV0IG1hcmdpbiA9IHsgdG9wOiA1MCwgbGVmdDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCB9LFxuICAgIGhlaWdodCA9IDYwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLFxuICAgIHdpZHRoID0gOTUwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG5cbmxldCBzdmcgPSBkMy5zZWxlY3QoXCIjbWFwXCIpXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAuYXR0cignY2xhc3MnLCAnY291bnRyaWVzJylcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgLTE1ICsgJywnICsgbWFyZ2luLnRvcCArICcpJylcblxuXG5jb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpO1xuY29uc3QgcGF0aEdlbmVyYXRvciA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG5jb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG5cbmcuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignY2xhc3MnLCAnc3BoZXJlJylcbiAgICAuYXR0cignZCcsIHBhdGhHZW5lcmF0b3Ioe3R5cGU6ICdTcGhlcmUnfSkpXG5cblxuZy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsICgpID0+IHtcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG59KSk7XG5cbmQzLnNlbGVjdChcIiN6b29tLWluXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMS4zKTtcbn0pO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1vdXRcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGQzLnpvb20oKVxuICAgIC5vbihcInpvb21cIiwgKCkgPT4ge1xuICAgICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfSlcbiAgICAuc2NhbGVCeShnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1NTApLCAxIC8gMS4zKTtcbn0pO1xuXG5sZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuXG5sb2FkQW5kUHJvY2Vzc0RhdGEoMjAxOSkudGhlbihjb3VudHJpZXMgPT4ge1xuXG4gIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgY29sb3JTY2FsZS5yYW5nZShkMy5zY2hlbWVQdXJwbGVzWzldKVxuXG4gIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG5cbiAgY29uc3Qgb3JpZ2luYWwgPSBnXG4gICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb3VudHJ5XCIpXG4gICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC5vdXRwdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgKGUsIGQpID0+IHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGUucGFnZVgpICsgJ3B4JylcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAoZS5wYWdlWSkgKyAncHgnKTtcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIChlLCBkKSA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgfSlcbiAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgfSk7XG5cbmxldCBmZXRjaERhdGFCeVRoaXNZZWFyID0gMjAxOTtcblxuLy9zbGlkZXJcbmxldCBkYXRhVGltZSA9IGQzLnJhbmdlKDAsIDE1KS5tYXAoZCA9PiBuZXcgRGF0ZSgyMDA1ICsgZCwgMTAsIDMpKVxuY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0RHJvcGRvd24nKVxubGV0IGRhdGFUeXBlID0gc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbmxldCBzbGlkZXIgPSBkM1xuICAuc2xpZGVySG9yaXpvbnRhbCgpXG4gIC5taW4oZDMubWluKGRhdGFUaW1lKSlcbiAgLm1heChkMy5tYXgoZGF0YVRpbWUpKVxuICAuc3RlcCgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KVxuICAud2lkdGgoNDAwKVxuICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJVlcIikpXG4gIC50aWNrVmFsdWVzKGRhdGFUaW1lKVxuICAuZGVmYXVsdChuZXcgRGF0ZSgyMDE5LCAxMCwgMykpXG4gIC5vbignb25jaGFuZ2UnLCB2YWwgPT4ge1xuICAgIGZldGNoRGF0YUJ5VGhpc1llYXIgPSBuZXcgRGF0ZSh2YWwpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBuZXN0IHRpbWVsaW5lIGluc2lkZSBvZiBwcm9kdWN0aW9uL2NvbnN1bXB0aW9uXG4gICAgLy8gZG9lcyBpdCByZWFsbHkgbWF0dGVyP1xuICAgIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJylcbiAgICAvLyAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIGRhdGFUeXBlID0gc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgXG4gICAgbG9hZEFuZFByb2Nlc3NEYXRhKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9KVxuICAgIH0pO1xufSlcblxuZDMuc2VsZWN0KCcjc2xpZGVyJylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuICAuYXR0cignaGVpZ2h0JywgMTAwKVxuICAuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMzAsIDMwKScpXG4gIC5jYWxsKHNsaWRlcik7XG5cblxuICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gIC5vbignY2hhbmdlJywgZnVuY3Rpb24oZCkge1xuICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG4gICAgbGV0IGluaXRpYWxEYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICBsb2FkQW5kUHJvY2Vzc0RhdGEoMjAxOSwgaW5pdGlhbERhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9KVxuICAgIH0pO1xuICB9KTsiLCJleHBvcnQgY29uc3QgbG9hZEFuZFByb2Nlc3NEYXRhID0gKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlPVwiUHJvZHVjdGlvblwiKSA9PlxuICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICBkMy5qc29uKFxuICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMTBtLmpzb25cIiksXG4gICAgICAgICAgIGQzLmNzdihcInNyYy9hc3NldHMvZGF0YS8yMDA1LTIwMTlQUk9ELmNzdlwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOUNPTlMuY3N2XCIpXG4gICAgICAgICAgLy8gIGQzLmNzdihcInNyYy9hc3NldHMvZGF0YS9qYW4yMDIwVGVzdC5jc3ZcIiksXG4gICAgICAgICBdKS50aGVuKChbdG9wb0pTT05kYXRhLCBwcm9kdWN0aW9uRGF0YSwgY29uc3VtcHRpb25EYXRhXSkgPT4ge1xuXG4gICAgICAgICAgbGV0IHZhbHVlc0J5Q291bnRyeTtcblxuICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gXCJQcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhbHVlc0J5Q291bnRyeSA9IHByb2R1Y3Rpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHtjb3VudHJ5OiBjb3VudHJ5LCBvdXRwdXQ6ICtkW3llYXJdfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwiQ29uc3VtcHRpb25cIikge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHZhbHVlc0J5Q291bnRyeSA9IGNvbnN1bXB0aW9uRGF0YS5yZWR1Y2UoKGFjYywgZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGQuY291bnRyeTtcbiAgICAgICAgICAgICAgbGV0IHllYXIgPSBmZXRjaERhdGFCeVRoaXNZZWFyO1xuICAgICAgICAgICAgICBhY2NbY291bnRyeV0gPSB7IGNvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl0gfVxuICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YSxcbiAgICAgICAgICAgICB0b3BvSlNPTmRhdGEub2JqZWN0cy5jb3VudHJpZXNcbiAgICAgICAgICAgKTtcblxuICAgICAgICAgICBjb3VudHJpZXMuZmVhdHVyZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgICAgICAgaWYgKHZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICAgICBvdXRwdXQ6ICt2YWx1ZXNCeUNvdW50cnlbZC5wcm9wZXJ0aWVzLm5hbWVdLm91dHB1dCxcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgIHJldHVybiBjb3VudHJpZXM7XG4gICAgICAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=