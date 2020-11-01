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
  fetchDataByThisYear = new Date(val).getFullYear();
  console.log(fetchDataByThisYear); // nest timeline inside of production/consumption
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiaHRtbCIsInByb3BlcnRpZXMiLCJuYW1lIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsImZldGNoRGF0YUJ5VGhpc1llYXIiLCJkYXRhVGltZSIsIm1hcCIsIkRhdGUiLCJzZWxlY3RlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhVHlwZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInNsaWRlciIsInNsaWRlckJvdHRvbSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tWYWx1ZXMiLCJkZWZhdWx0IiwidmFsIiwiZ2V0RnVsbFllYXIiLCJjb25zb2xlIiwibG9nIiwiZHJvcGRvd24iLCJzZWxlY3Rpb24iLCJpbml0aWFsRGF0YVR5cGUiLCJQcm9taXNlIiwiYWxsIiwianNvbiIsImNzdiIsInRvcG9KU09OZGF0YSIsInByb2R1Y3Rpb25EYXRhIiwiY29uc3VtcHRpb25EYXRhIiwidmFsdWVzQnlDb3VudHJ5IiwicmVkdWNlIiwiYWNjIiwiY291bnRyeSIsInllYXIiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZm9yRWFjaCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFD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LEVBQU87QUFDakM7QUFDQyxVQUFJMkMsZUFBZSxDQUFDM0MsQ0FBQyxDQUFDRyxVQUFGLENBQWFDLElBQWQsQ0FBbkIsRUFBd0M7QUFDdENnRCxjQUFNLENBQUNDLE1BQVAsQ0FBY3JELENBQWQsRUFBaUI7QUFDZkMsZ0JBQU0sRUFBRSxDQUFDMEMsZUFBZSxDQUFDM0MsQ0FBQyxDQUFDRyxVQUFGLENBQWFDLElBQWQsQ0FBZixDQUFtQ0g7QUFEN0IsU0FBakI7QUFHRDtBQUNGLEtBUEQ7QUFRQTtBQUNBLFdBQU9mLFNBQVA7QUFDRCxHQTNDRCxDQUR5QjtBQUFBLENBQTNCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCB7IGxvYWRBbmRQcm9jZXNzRGF0YSB9IGZyb20gJy4vbG9hZEFuZFByb2Nlc3NEYXRhLmpzJ1xuXG5sZXQgbWFyZ2luID0geyB0b3A6IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwIH0sXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgd2lkdGggPSA5NTAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNtYXBcIilcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJpZXMnKVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAtMTUgKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuXG5cbmNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9OYXR1cmFsRWFydGgxKCk7XG5jb25zdCBwYXRoR2VuZXJhdG9yID0gZDMuZ2VvUGF0aCgpLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcblxuZy5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdjbGFzcycsICdzcGhlcmUnKVxuICAgIC5hdHRyKCdkJywgcGF0aEdlbmVyYXRvcih7dHlwZTogJ1NwaGVyZSd9KSlcblxuXG5nLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgKCkgPT4ge1xuICAgIGcuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbn0pKTtcblxuZDMuc2VsZWN0KFwiI3pvb20taW5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGQzLnpvb20oKVxuICAgIC5vbihcInpvb21cIiwgKCkgPT4ge1xuICAgICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfSlcbiAgICAuc2NhbGVCeShnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1NTApLCAxLjMpO1xufSk7XG5cbmQzLnNlbGVjdChcIiN6b29tLW91dFwiKVxuICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZDMuem9vbSgpXG4gICAgLm9uKFwiem9vbVwiLCAoKSA9PiB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9KVxuICAgIC5zY2FsZUJ5KGcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDU1MCksIDEgLyAxLjMpO1xufSk7XG5cbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVUaHJlc2hvbGQoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmxvYWRBbmRQcm9jZXNzRGF0YSgyMDE5KS50aGVuKGNvdW50cmllcyA9PiB7XG5cbiAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gIGNvbG9yU2NhbGUuZG9tYWluKCkuc29ydCgoYiwgYSkgPT4gYSAtIGIpO1xuICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICBjb25zdCBvcmlnaW5hbCA9IGdcbiAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJnYmEoMjA0LCAyMDQsIDIwNCwgMSlcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgIC5zdHlsZSgndG9wJywgKGQzLmV2ZW50LnBhZ2VZKSArICdweCcpO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgfSlcbiAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgfSk7XG5cbmxldCBmZXRjaERhdGFCeVRoaXNZZWFyID0gMjAxOTtcblxuLy9zbGlkZXJcbmxldCBkYXRhVGltZSA9IGQzLnJhbmdlKDAsIDE1KS5tYXAoZCA9PiBuZXcgRGF0ZSgyMDA1ICsgZCwgMTAsIDMpKVxuY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0RHJvcGRvd24nKVxubGV0IGRhdGFUeXBlID0gc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbmxldCBzbGlkZXIgPSBkM1xuICAuc2xpZGVyQm90dG9tKClcbiAgLm1pbihkMy5taW4oZGF0YVRpbWUpKVxuICAubWF4KGQzLm1heChkYXRhVGltZSkpXG4gIC5zdGVwKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpXG4gIC53aWR0aCg0MDApXG4gIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlWVwiKSlcbiAgLnRpY2tWYWx1ZXMoZGF0YVRpbWUpXG4gIC5kZWZhdWx0KG5ldyBEYXRlKDIwMTksIDEwLCAzKSlcbiAgLm9uKCdvbmNoYW5nZScsIHZhbCA9PiB7XG4gICAgZmV0Y2hEYXRhQnlUaGlzWWVhciA9IG5ldyBEYXRlKHZhbCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zb2xlLmxvZyhmZXRjaERhdGFCeVRoaXNZZWFyKVxuXG4gICAgLy8gbmVzdCB0aW1lbGluZSBpbnNpZGUgb2YgcHJvZHVjdGlvbi9jb25zdW1wdGlvblxuICAgIC8vIGRvZXMgaXQgcmVhbGx5IG1hdHRlcj9cbiAgICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gICAgLy8gICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBkYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIFxuICAgIGxvYWRBbmRQcm9jZXNzRGF0YShmZXRjaERhdGFCeVRoaXNZZWFyLCBkYXRhVHlwZSkudGhlbihjb3VudHJpZXMgPT4ge1xuICAgICAgZGVidWdnZXJcbiAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICAgIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oKS5zb3J0KChiLCBhKSA9PiBhIC0gYik7XG4gICAgICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgICAgIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG5cbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdcbiAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwicmdiYSgyMDQsIDIwNCwgMjA0LCAxKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLy8gLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDQwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgICAgICB0b29sdGlwLmh0bWwoYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9OiAke01hdGgucm91bmQoKGQub3V0cHV0ICogMC4wMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5wYWdlWCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQucGFnZVkpICsgJ3B4Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNTAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfSlcblxuZDMuc2VsZWN0KCcjc2xpZGVyJylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgLmF0dHIoJ3dpZHRoJywgNTAwKVxuICAuYXR0cignaGVpZ2h0JywgMTAwKVxuICAuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMzAsIDMwKScpXG4gIC5jYWxsKHNsaWRlcilcblxuICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gIC5vbignY2hhbmdlJywgZnVuY3Rpb24oZCkge1xuICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG4gICAgbGV0IGluaXRpYWxEYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0KVxuICAgICAgICBsb2FkQW5kUHJvY2Vzc0RhdGEoMjAxOSwgaW5pdGlhbERhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9KVxuICAgIH0pO1xuICB9KVxuXG5cblxuXG4gIC8vIC5vbignb25jaGFuZ2UnLCBlID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9KVxuXG4vLyBjb25zdCB0b2dnbGUgPSBbXCJQcm9kdWN0aW9uXCIsIFwiQ29uc3VtcHRpb25cIl07XG5cbi8vIGQzLnNlbGVjdCgnc2VsZWN0Jylcbi8vICAgLnNlbGVjdEFsbCgnb3B0aW9uJylcbi8vICAgLmRhdGEodG9nZ2xlKVxuLy8gICAuZW50ZXIoKVxuLy8gICAuYXBwZW5kKCdvcHRpb24nKVxuLy8gICAudGV4dChkID0+IGQpXG4vLyAgIC5hdHRyKCd2YWx1ZScsIGQgPT4gZClcblxuLy8gZDMuc2VsZWN0KCcubWFwLWNvbnRhaW5lcicpXG4vLyAgIC5hcHBlbmQoJ2RpdicpXG4vLyAgIC5hdHRyKCdjbGFzcycsICdtYXAtdGl0bGUnKVxuLy8gICAudGV4dCgnV29ybGQgTWFwJylcblxuXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxuLy8gbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vIGxldCBkcm9wZG93bk9wdGlvbnMgPSBzZWxlY3RlZC5vcHRpb25zO1xuLy8gY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQpXG5cbi8vIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJylcbi8vICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dClcbi8vICAgfSlcbiAgLy8gLm9uKCdvbmNoYW5nZScsIGUgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gIC8vIH0pXG4iLCJleHBvcnQgY29uc3QgbG9hZEFuZFByb2Nlc3NEYXRhID0gKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlPVwiUHJvZHVjdGlvblwiKSA9PlxuICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICBkMy5qc29uKFxuICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMG0uanNvblwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOVBST0QuY3N2XCIpLFxuICAgICAgICAgICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvMjAwNS0yMDE5Q09OUy5jc3ZcIilcbiAgICAgICAgICAvLyAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhL2phbjIwMjBUZXN0LmNzdlwiKSxcbiAgICAgICAgIF0pLnRoZW4oKFt0b3BvSlNPTmRhdGEsIHByb2R1Y3Rpb25EYXRhLCBjb25zdW1wdGlvbkRhdGFdKSA9PiB7XG5cbiAgICAgICAgICBsZXQgdmFsdWVzQnlDb3VudHJ5O1xuXG4gICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcIlByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gcHJvZHVjdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkLmNvdW50cnk7XG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZmV0Y2hEYXRhQnlUaGlzWWVhcjtcbiAgICAgICAgICAgICAgYWNjW2NvdW50cnldID0ge2NvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl19XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJDb25zdW1wdGlvblwiKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gY29uc3VtcHRpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHsgY291bnRyeTogY291bnRyeSwgb3V0cHV0OiArZFt5ZWFyXSB9XG4gICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUoXG4gICAgICAgICAgICAgdG9wb0pTT05kYXRhLFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YS5vYmplY3RzLmNvdW50cmllc1xuICAgICAgICAgICApO1xuXG4gICAgICAgICAgIGNvdW50cmllcy5mZWF0dXJlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgICAgICBpZiAodmFsdWVzQnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgICAgICAgIG91dHB1dDogK3ZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0ub3V0cHV0LFxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgcmV0dXJuIGNvdW50cmllcztcbiAgICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==