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
var selected = document.getElementById('selectDropdown');
var dataType = selected.options[selected.options.selectedIndex].text;
var slider = d3.sliderBottom().min(d3.min(dataTime)).max(d3.max(dataTime)).step(1000 * 60 * 60 * 24 * 365).width(400).tickFormat(d3.timeFormat("%Y")).tickValues(dataTime).default(new Date(2019, 10, 3)).on('onchange', function (val) {
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
  var initialDataType = selected.options[selected.options.selectedIndex].text; // console.log(selected.options[selected.options.selectedIndex].text)

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
}); // .on('onchange', e => {
//   console.log(e)
// })
// const toggle = ["Production", "Consumption"];
// d3.select('select')
//   .selectAll('option')
//   .data(toggle)
//   .enter()
//   .append('option')
//   .text(d => d)
//   .attr('value', d => d)
// d3.select('.map-container')
//   .append('div')
//   .attr('class', 'map-title')
//   .text('World Map')
// console.log('hello')
// let selected = document.getElementById('selectDropdown')
// let dropdownOptions = selected.options;
// console.log(selected.options[selected.options.selectedIndex].text)
// let dropdown = d3.select('#selectDropdown')
//   .on('change', function(d) {
//     let selected = document.getElementById('selectDropdown')
//     console.log(selected.options[selected.options.selectedIndex].text)
//   })
// .on('onchange', e => {
//   console.log(e)
// })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiaHRtbCIsInByb3BlcnRpZXMiLCJuYW1lIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsImZldGNoRGF0YUJ5VGhpc1llYXIiLCJkYXRhVGltZSIsIm1hcCIsIkRhdGUiLCJzZWxlY3RlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhVHlwZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInNsaWRlciIsInNsaWRlckJvdHRvbSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tWYWx1ZXMiLCJkZWZhdWx0IiwidmFsIiwiZ2V0RnVsbFllYXIiLCJkcm9wZG93biIsInNlbGVjdGlvbiIsImluaXRpYWxEYXRhVHlwZSIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwiY3N2IiwidG9wb0pTT05kYXRhIiwicHJvZHVjdGlvbkRhdGEiLCJjb25zdW1wdGlvbkRhdGEiLCJ2YWx1ZXNCeUNvdW50cnkiLCJyZWR1Y2UiLCJhY2MiLCJjb3VudHJ5IiwieWVhciIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmb3JFYWNoIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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Q0FBYUMsSUFBZCxDQUFuQixFQUF3QztBQUN0QzhDLGNBQU0sQ0FBQ0MsTUFBUCxDQUFjbkQsQ0FBZCxFQUFpQjtBQUNmQyxnQkFBTSxFQUFFLENBQUN3QyxlQUFlLENBQUN6QyxDQUFDLENBQUNHLFVBQUYsQ0FBYUMsSUFBZCxDQUFmLENBQW1DSDtBQUQ3QixTQUFqQjtBQUdEO0FBQ0YsS0FQRDtBQVFBO0FBQ0EsV0FBT2YsU0FBUDtBQUNELEdBM0NELENBRHlCO0FBQUEsQ0FBM0IsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiaW1wb3J0IHsgbG9hZEFuZFByb2Nlc3NEYXRhIH0gZnJvbSAnLi9sb2FkQW5kUHJvY2Vzc0RhdGEuanMnXG5cbmxldCBtYXJnaW4gPSB7IHRvcDogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAgfSxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICB3aWR0aCA9IDk1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cmllcycpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIC0xNSArICcsJyArIG1hcmdpbi50b3AgKyAnKScpXG5cblxuY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGhHZW5lcmF0b3IgPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG5nLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3NwaGVyZScpXG4gICAgLmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKHt0eXBlOiAnU3BoZXJlJ30pKVxuXG5cbmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufSkpO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1pblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZDMuem9vbSgpXG4gICAgLm9uKFwiem9vbVwiLCAoKSA9PiB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9KVxuICAgIC5zY2FsZUJ5KGcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDU1MCksIDEuMyk7XG59KTtcblxuZDMuc2VsZWN0KFwiI3pvb20tb3V0XCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMSAvIDEuMyk7XG59KTtcblxubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxubG9hZEFuZFByb2Nlc3NEYXRhKDIwMTkpLnRoZW4oY291bnRyaWVzID0+IHtcblxuICBjb2xvclNjYWxlLmRvbWFpbihbMCwgMTAwLCA1MDAsIDIwMDAsIDQwMDAsIDgwMDAsIDEyMDAwLCAxNjAwMCwgMjAwMDBdKTtcbiAgY29sb3JTY2FsZS5kb21haW4oKS5zb3J0KChiLCBhKSA9PiBhIC0gYik7XG4gIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICBsZXQgdG9vbHRpcCA9IGQzLnNlbGVjdCgnI21hcCcpLmFwcGVuZCgnZGl2JylcbiAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuXG4gIGNvbnN0IG9yaWdpbmFsID0gZ1xuICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgIC5hdHRyKFwiZFwiLCBwYXRoR2VuZXJhdG9yKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZC5vdXRwdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwicmdiYSgyMDQsIDIwNCwgMjA0LCAxKVwiO1xuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgdG9vbHRpcC5odG1sKGAke2QucHJvcGVydGllcy5uYW1lfTogJHtNYXRoLnJvdW5kKChkLm91dHB1dCAqIDAuMDAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAuc3R5bGUoJ2xlZnQnLCAoZDMuZXZlbnQucGFnZVgpICsgJ3B4JylcbiAgICAgICAgLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQucGFnZVkpICsgJ3B4Jyk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZW91dFwiLCBkID0+IHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICB9KVxuICAgIC5hcHBlbmQoXCJ0aXRsZVwiKVxuICB9KTtcblxubGV0IGZldGNoRGF0YUJ5VGhpc1llYXIgPSAyMDE5O1xuXG4vL3NsaWRlclxubGV0IGRhdGFUaW1lID0gZDMucmFuZ2UoMCwgMTUpLm1hcChkID0+IG5ldyBEYXRlKDIwMDUgKyBkLCAxMCwgMykpXG5jb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG5sZXQgZGF0YVR5cGUgPSBzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dDtcblxubGV0IHNsaWRlciA9IGQzXG4gIC5zbGlkZXJCb3R0b20oKVxuICAubWluKGQzLm1pbihkYXRhVGltZSkpXG4gIC5tYXgoZDMubWF4KGRhdGFUaW1lKSlcbiAgLnN0ZXAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSlcbiAgLndpZHRoKDQwMClcbiAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiVZXCIpKVxuICAudGlja1ZhbHVlcyhkYXRhVGltZSlcbiAgLmRlZmF1bHQobmV3IERhdGUoMjAxOSwgMTAsIDMpKVxuICAub24oJ29uY2hhbmdlJywgdmFsID0+IHtcbiAgICBmZXRjaERhdGFCeVRoaXNZZWFyID0gbmV3IERhdGUodmFsKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgLy8gbmVzdCB0aW1lbGluZSBpbnNpZGUgb2YgcHJvZHVjdGlvbi9jb25zdW1wdGlvblxuICAgIC8vIGRvZXMgaXQgcmVhbGx5IG1hdHRlcj9cbiAgICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gICAgLy8gICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBkYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIFxuICAgIGxvYWRBbmRQcm9jZXNzRGF0YShmZXRjaERhdGFCeVRoaXNZZWFyLCBkYXRhVHlwZSkudGhlbihjb3VudHJpZXMgPT4ge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICAgIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oKS5zb3J0KChiLCBhKSA9PiBhIC0gYik7XG4gICAgICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgICAgIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG5cbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdcbiAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwicmdiYSgyMDQsIDIwNCwgMjA0LCAxKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLy8gLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgICAgICB0b29sdGlwLmh0bWwoYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9OiAke01hdGgucm91bmQoKGQub3V0cHV0ICogMC4wMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5wYWdlWCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQucGFnZVkpICsgJ3B4Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfSlcblxuZDMuc2VsZWN0KCcjc2xpZGVyJylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuICAuYXR0cignaGVpZ2h0JywgMTAwKVxuICAuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMzAsIDMwKScpXG4gIC5jYWxsKHNsaWRlcilcblxuICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gIC5vbignY2hhbmdlJywgZnVuY3Rpb24oZCkge1xuICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG4gICAgbGV0IGluaXRpYWxEYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0KVxuICAgICAgICBsb2FkQW5kUHJvY2Vzc0RhdGEoMjAxOSwgaW5pdGlhbERhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9KVxuICAgIH0pO1xuICB9KVxuXG5cblxuXG4gIC8vIC5vbignb25jaGFuZ2UnLCBlID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9KVxuXG4vLyBjb25zdCB0b2dnbGUgPSBbXCJQcm9kdWN0aW9uXCIsIFwiQ29uc3VtcHRpb25cIl07XG5cbi8vIGQzLnNlbGVjdCgnc2VsZWN0Jylcbi8vICAgLnNlbGVjdEFsbCgnb3B0aW9uJylcbi8vICAgLmRhdGEodG9nZ2xlKVxuLy8gICAuZW50ZXIoKVxuLy8gICAuYXBwZW5kKCdvcHRpb24nKVxuLy8gICAudGV4dChkID0+IGQpXG4vLyAgIC5hdHRyKCd2YWx1ZScsIGQgPT4gZClcblxuLy8gZDMuc2VsZWN0KCcubWFwLWNvbnRhaW5lcicpXG4vLyAgIC5hcHBlbmQoJ2RpdicpXG4vLyAgIC5hdHRyKCdjbGFzcycsICdtYXAtdGl0bGUnKVxuLy8gICAudGV4dCgnV29ybGQgTWFwJylcblxuXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxuLy8gbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vIGxldCBkcm9wZG93bk9wdGlvbnMgPSBzZWxlY3RlZC5vcHRpb25zO1xuLy8gY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQpXG5cbi8vIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJylcbi8vICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dClcbi8vICAgfSlcbiAgLy8gLm9uKCdvbmNoYW5nZScsIGUgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gIC8vIH0pXG4iLCJleHBvcnQgY29uc3QgbG9hZEFuZFByb2Nlc3NEYXRhID0gKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlPVwiUHJvZHVjdGlvblwiKSA9PlxuICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICBkMy5qc29uKFxuICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMG0uanNvblwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOVBST0QuY3N2XCIpLFxuICAgICAgICAgICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvMjAwNS0yMDE5Q09OUy5jc3ZcIilcbiAgICAgICAgICAvLyAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhL2phbjIwMjBUZXN0LmNzdlwiKSxcbiAgICAgICAgIF0pLnRoZW4oKFt0b3BvSlNPTmRhdGEsIHByb2R1Y3Rpb25EYXRhLCBjb25zdW1wdGlvbkRhdGFdKSA9PiB7XG5cbiAgICAgICAgICBsZXQgdmFsdWVzQnlDb3VudHJ5O1xuXG4gICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcIlByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gcHJvZHVjdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkLmNvdW50cnk7XG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZmV0Y2hEYXRhQnlUaGlzWWVhcjtcbiAgICAgICAgICAgICAgYWNjW2NvdW50cnldID0ge2NvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl19XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJDb25zdW1wdGlvblwiKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gY29uc3VtcHRpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHsgY291bnRyeTogY291bnRyeSwgb3V0cHV0OiArZFt5ZWFyXSB9XG4gICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUoXG4gICAgICAgICAgICAgdG9wb0pTT05kYXRhLFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YS5vYmplY3RzLmNvdW50cmllc1xuICAgICAgICAgICApO1xuXG4gICAgICAgICAgIGNvdW50cmllcy5mZWF0dXJlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgICAgICBpZiAodmFsdWVzQnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgICAgICAgIG91dHB1dDogK3ZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0ub3V0cHV0LFxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgcmV0dXJuIGNvdW50cmllcztcbiAgICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==