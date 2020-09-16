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

console.log('hello');
var margin = {
  top: 50,
  left: 50,
  right: 50,
  bottom: 50
},
    height = 600 - margin.top - margin.bottom,
    width = 950 - margin.left - margin.right;
var svg = d3.select("#map").append('svg').attr('height', height + margin.top + margin.bottom).attr('width', width + margin.left + margin.right).attr('class', 'countries').append('g').attr('transform', 'translate(' + -15 + ',' + margin.top + ')'); // .attr('transform', 'translate(0, 30)')

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
}); // let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

var colorScale = d3.scaleThreshold(d3.schemeCategory10);
Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(2019).then(function (countries) {
  // console.log(
  //   countries.features.map(country => `${country.properties.name}: ${country.output}`)
  // )
  var whichData = d3.select("#selectDropdown"); // console.log(whichData)

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
  }).on("mouseover", function (d) {
    tooltip.transition().duration(400).style("opacity", 0.7);
    tooltip.html("".concat(d.properties.name, ": ").concat(Math.round(d.output * 0.0001 + 'e+1'), " mb/d")).style('left', d3.event.pageX + 'px').style('top', d3.event.pageY + 'px');
  }).on("mouseout", function (d) {
    tooltip.transition().duration(500).style("opacity", 0);
  }).append("title");
});
var fetchDataByThisYear = 2019; //slider

var dataTime = d3.range(0, 15).map(function (d) {
  return new Date(2005 + d, 10, 3);
});
var slider = d3.sliderBottom().min(d3.min(dataTime)).max(d3.max(dataTime)).step(1000 * 60 * 60 * 24 * 365).width(400).tickFormat(d3.timeFormat("%Y")).tickValues(dataTime).default(new Date(2019, 10, 3)).on('onchange', function (val) {
  debugger;
  fetchDataByThisYear = new Date(val).getFullYear();
  Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(fetchDataByThisYear).then(function (countries) {
    colorScale = d3.scaleThreshold(d3.schemeCategory10);
    colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
    colorScale.domain().sort(function (b, a) {
      return a - b;
    });
    colorScale.range(d3.schemePurples[9]);
    var tooltip = d3.select('#map').append('div').attr('class', 'tooltip').style('opacity', 0); // console.log(countries)

    var selection = g.selectAll("path").data(countries.features).attr("fill", function (d) {
      // console.log(d)
      debugger;

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
d3.select('#slider').append('svg').attr('width', 500).attr('height', 100).append('g').attr('transform', 'translate(30, 30)').call(slider); //

var toggle = ["Production", "Consumption"];
d3.select('select').selectAll('toggleOptions').data(toggle).enter().append('option').text(function (d) {
  return d;
}).attr('value', function (d) {
  return d;
}); // d3.select('.map-container')
//   .append('div')
//   .attr('class', 'map-title')
//   .text('World Map')

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
  return Promise.all([d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json"), d3.csv("src/assets/data/2005-2019PROD.csv"), d3.csv("src/assets/data/2005-2019CONS.csv") //  d3.csv("src/assets/data/jan2020Test.csv"),
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
      valuesByCountry = consumptionData.reduce(function (acc, d) {
        var country = d.country;
        var year = fetchDataByThisYear;
        acc[country] = {
          country: country,
          output: +d[year]
        };
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
    return countries;
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJwcm9qZWN0aW9uIiwiZ2VvTmF0dXJhbEVhcnRoMSIsInBhdGhHZW5lcmF0b3IiLCJnZW9QYXRoIiwiZyIsInR5cGUiLCJjYWxsIiwiem9vbSIsIm9uIiwiZXZlbnQiLCJ0cmFuc2Zvcm0iLCJzY2FsZUJ5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY29sb3JTY2FsZSIsInNjYWxlVGhyZXNob2xkIiwic2NoZW1lQ2F0ZWdvcnkxMCIsImxvYWRBbmRQcm9jZXNzRGF0YSIsInRoZW4iLCJjb3VudHJpZXMiLCJ3aGljaERhdGEiLCJkb21haW4iLCJzb3J0IiwiYiIsImEiLCJyYW5nZSIsInNjaGVtZVB1cnBsZXMiLCJ0b29sdGlwIiwic3R5bGUiLCJvcmlnaW5hbCIsInNlbGVjdEFsbCIsImRhdGEiLCJmZWF0dXJlcyIsImVudGVyIiwiZCIsIm91dHB1dCIsImh0bWwiLCJwcm9wZXJ0aWVzIiwibmFtZSIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwicGFnZVkiLCJmZXRjaERhdGFCeVRoaXNZZWFyIiwiZGF0YVRpbWUiLCJtYXAiLCJEYXRlIiwic2xpZGVyIiwic2xpZGVyQm90dG9tIiwibWluIiwibWF4Iiwic3RlcCIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0IiwidGlja1ZhbHVlcyIsImRlZmF1bHQiLCJ2YWwiLCJnZXRGdWxsWWVhciIsInNlbGVjdGlvbiIsInRvZ2dsZSIsInRleHQiLCJkYXRhVHlwZSIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwiY3N2IiwidG9wb0pTT05kYXRhIiwicHJvZHVjdGlvbkRhdGEiLCJjb25zdW1wdGlvbkRhdGEiLCJ2YWx1ZXNCeUNvdW50cnkiLCJyZWR1Y2UiLCJhY2MiLCJjb3VudHJ5IiwieWVhciIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmb3JFYWNoIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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LE1BQVAsQ0FBYzdDLENBQWQsRUFBaUI7QUFDZkMsZ0JBQU0sRUFBRSxDQUFDa0MsZUFBZSxDQUFDbkMsQ0FBQyxDQUFDRyxVQUFGLENBQWFDLElBQWQsQ0FBZixDQUFtQ0g7QUFEN0IsU0FBakI7QUFHRDtBQUNGLEtBUEQ7QUFRQSxXQUFPaEIsU0FBUDtBQUNELEdBeENELENBRHlCO0FBQUEsQ0FBM0IsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0IHsgbG9hZEFuZFByb2Nlc3NEYXRhIH0gZnJvbSAnLi9sb2FkQW5kUHJvY2Vzc0RhdGEuanMnXG5cbmNvbnNvbGUubG9nKCdoZWxsbycpXG5cbmxldCBtYXJnaW4gPSB7IHRvcDogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAgfSxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICB3aWR0aCA9IDk1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cmllcycpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIC0xNSArICcsJyArIG1hcmdpbi50b3AgKyAnKScpXG4gICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMzApJylcblxuXG5jb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpO1xuY29uc3QgcGF0aEdlbmVyYXRvciA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG5jb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG5cbmcuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignY2xhc3MnLCAnc3BoZXJlJylcbiAgICAuYXR0cignZCcsIHBhdGhHZW5lcmF0b3Ioe3R5cGU6ICdTcGhlcmUnfSkpXG5cblxuZy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsICgpID0+IHtcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG59KSk7XG5cbmQzLnNlbGVjdChcIiN6b29tLWluXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMS4zKTtcbn0pO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1vdXRcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGQzLnpvb20oKVxuICAgIC5vbihcInpvb21cIiwgKCkgPT4ge1xuICAgICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfSlcbiAgICAuc2NhbGVCeShnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1NTApLCAxIC8gMS4zKTtcbn0pO1xuXG5cbi8vIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxubG9hZEFuZFByb2Nlc3NEYXRhKDIwMTkpLnRoZW4oY291bnRyaWVzID0+IHtcbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgY291bnRyaWVzLmZlYXR1cmVzLm1hcChjb3VudHJ5ID0+IGAke2NvdW50cnkucHJvcGVydGllcy5uYW1lfTogJHtjb3VudHJ5Lm91dHB1dH1gKVxuICAvLyApXG5cbiAgbGV0IHdoaWNoRGF0YSA9IGQzLnNlbGVjdChcIiNzZWxlY3REcm9wZG93blwiKVxuICAvLyBjb25zb2xlLmxvZyh3aGljaERhdGEpXG5cbiAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gIGNvbG9yU2NhbGUuZG9tYWluKCkuc29ydCgoYiwgYSkgPT4gYSAtIGIpO1xuICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICBjb25zdCBvcmlnaW5hbCA9IGdcbiAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJnYmEoMjA0LCAyMDQsIDIwNCwgMSlcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgIC5zdHlsZSgndG9wJywgKGQzLmV2ZW50LnBhZ2VZKSArICdweCcpO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgfSlcbiAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgfSk7XG5cbmxldCBmZXRjaERhdGFCeVRoaXNZZWFyID0gMjAxOTtcblxuLy9zbGlkZXJcbmxldCBkYXRhVGltZSA9IGQzLnJhbmdlKDAsIDE1KS5tYXAoZCA9PiBuZXcgRGF0ZSgyMDA1ICsgZCwgMTAsIDMpKVxuXG5sZXQgc2xpZGVyID0gZDNcbiAgLnNsaWRlckJvdHRvbSgpXG4gIC5taW4oZDMubWluKGRhdGFUaW1lKSlcbiAgLm1heChkMy5tYXgoZGF0YVRpbWUpKVxuICAuc3RlcCgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KVxuICAud2lkdGgoNDAwKVxuICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJVlcIikpXG4gIC50aWNrVmFsdWVzKGRhdGFUaW1lKVxuICAuZGVmYXVsdChuZXcgRGF0ZSgyMDE5LCAxMCwgMykpXG4gIC5vbignb25jaGFuZ2UnLCB2YWwgPT4ge1xuICAgIGRlYnVnZ2VyXG4gICAgZmV0Y2hEYXRhQnlUaGlzWWVhciA9IG5ldyBEYXRlKHZhbCkuZ2V0RnVsbFllYXIoKTtcbiAgICBcbiAgICBsb2FkQW5kUHJvY2Vzc0RhdGEoZmV0Y2hEYXRhQnlUaGlzWWVhcikudGhlbihjb3VudHJpZXMgPT4ge1xuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50cmllcylcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKVxuICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwicmdiYSgyMDQsIDIwNCwgMjA0LCAxKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLy8gLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgICAgICB0b29sdGlwLmh0bWwoYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9OiAke01hdGgucm91bmQoKGQub3V0cHV0ICogMC4wMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5wYWdlWCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQucGFnZVkpICsgJ3B4Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfSlcblxuZDMuc2VsZWN0KCcjc2xpZGVyJylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuICAuYXR0cignaGVpZ2h0JywgMTAwKVxuICAuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMzAsIDMwKScpXG4gIC5jYWxsKHNsaWRlcilcbi8vXG5cbmNvbnN0IHRvZ2dsZSA9IFtcIlByb2R1Y3Rpb25cIiwgXCJDb25zdW1wdGlvblwiXTtcblxuZDMuc2VsZWN0KCdzZWxlY3QnKVxuICAuc2VsZWN0QWxsKCd0b2dnbGVPcHRpb25zJylcbiAgLmRhdGEodG9nZ2xlKVxuICAuZW50ZXIoKVxuICAuYXBwZW5kKCdvcHRpb24nKVxuICAudGV4dChkID0+IGQpXG4gIC5hdHRyKCd2YWx1ZScsIGQgPT4gZClcblxuLy8gZDMuc2VsZWN0KCcubWFwLWNvbnRhaW5lcicpXG4vLyAgIC5hcHBlbmQoJ2RpdicpXG4vLyAgIC5hdHRyKCdjbGFzcycsICdtYXAtdGl0bGUnKVxuLy8gICAudGV4dCgnV29ybGQgTWFwJykiLCJleHBvcnQgY29uc3QgbG9hZEFuZFByb2Nlc3NEYXRhID0gKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlPVwiUHJvZHVjdGlvblwiKSA9PlxuICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICBkMy5qc29uKFxuICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMG0uanNvblwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOVBST0QuY3N2XCIpLFxuICAgICAgICAgICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvMjAwNS0yMDE5Q09OUy5jc3ZcIilcbiAgICAgICAgICAvLyAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhL2phbjIwMjBUZXN0LmNzdlwiKSxcbiAgICAgICAgIF0pLnRoZW4oKFt0b3BvSlNPTmRhdGEsIHByb2R1Y3Rpb25EYXRhLCBjb25zdW1wdGlvbkRhdGFdKSA9PiB7XG5cbiAgICAgICAgICBsZXQgdmFsdWVzQnlDb3VudHJ5O1xuXG4gICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcIlByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gcHJvZHVjdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkLmNvdW50cnk7XG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZmV0Y2hEYXRhQnlUaGlzWWVhcjtcbiAgICAgICAgICAgICAgYWNjW2NvdW50cnldID0ge2NvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl19XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJDb25zdW1wdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZXNCeUNvdW50cnkgPSBjb25zdW1wdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkLmNvdW50cnk7XG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZmV0Y2hEYXRhQnlUaGlzWWVhcjtcbiAgICAgICAgICAgICAgYWNjW2NvdW50cnldID0geyBjb3VudHJ5OiBjb3VudHJ5LCBvdXRwdXQ6ICtkW3llYXJdIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShcbiAgICAgICAgICAgICB0b3BvSlNPTmRhdGEsXG4gICAgICAgICAgICAgdG9wb0pTT05kYXRhLm9iamVjdHMuY291bnRyaWVzXG4gICAgICAgICAgICk7XG5cbiAgICAgICAgICAgY291bnRyaWVzLmZlYXR1cmVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICAgIC8vICBkZWJ1Z2dlclxuICAgICAgICAgICAgIGlmICh2YWx1ZXNCeUNvdW50cnlbZC5wcm9wZXJ0aWVzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGQsIHtcbiAgICAgICAgICAgICAgICAgb3V0cHV0OiArdmFsdWVzQnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXS5vdXRwdXQsXG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICAgICByZXR1cm4gY291bnRyaWVzO1xuICAgICAgICAgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9