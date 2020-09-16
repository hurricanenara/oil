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
var selected = document.getElementById('selectDropdown');
var dataType = selected.options[selected.options.selectedIndex].text;
console.log(dataType);
var slider = d3.sliderBottom().min(d3.min(dataTime)).max(d3.max(dataTime)).step(1000 * 60 * 60 * 24 * 365).width(400).tickFormat(d3.timeFormat("%Y")).tickValues(dataTime).default(new Date(2019, 10, 3)).on('onchange', function (val) {
  debugger;
  fetchDataByThisYear = new Date(val).getFullYear(); // nest timeline inside of production/consumption
  // does it really matter?

  var dropdown = d3.select('#selectDropdown').on('change', function (d) {
    console.log(selected.options[selected.options.selectedIndex].text);
  });
  Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(fetchDataByThisYear, dataType).then(function (countries) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsIndoaWNoRGF0YSIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiaHRtbCIsInByb3BlcnRpZXMiLCJuYW1lIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsImZldGNoRGF0YUJ5VGhpc1llYXIiLCJkYXRhVGltZSIsIm1hcCIsIkRhdGUiLCJzZWxlY3RlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhVHlwZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzbGlkZXIiLCJzbGlkZXJCb3R0b20iLCJtaW4iLCJtYXgiLCJzdGVwIiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrVmFsdWVzIiwiZGVmYXVsdCIsInZhbCIsImdldEZ1bGxZZWFyIiwiZHJvcGRvd24iLCJzZWxlY3Rpb24iLCJQcm9taXNlIiwiYWxsIiwianNvbiIsImNzdiIsInRvcG9KU09OZGF0YSIsInByb2R1Y3Rpb25EYXRhIiwiY29uc3VtcHRpb25EYXRhIiwidmFsdWVzQnlDb3VudHJ5IiwicmVkdWNlIiwiYWNjIiwiY291bnRyeSIsInllYXIiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZm9yRWFjaCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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RCxPQUxpQixFQUtmLEVBTGUsQ0FBbEI7QUFNRDs7QUFFQSxRQUFNM0QsU0FBUyxHQUFHOEQsUUFBUSxDQUFDQyxPQUFULENBQ2hCVCxZQURnQixFQUVoQkEsWUFBWSxDQUFDVSxPQUFiLENBQXFCaEUsU0FGTCxDQUFsQjtBQUtBQSxhQUFTLENBQUNhLFFBQVYsQ0FBbUJvRCxPQUFuQixDQUEyQixVQUFDbEQsQ0FBRCxFQUFPO0FBQ2pDO0FBQ0MsVUFBSTBDLGVBQWUsQ0FBQzFDLENBQUMsQ0FBQ0csVUFBRixDQUFhQyxJQUFkLENBQW5CLEVBQXdDO0FBQ3RDK0MsY0FBTSxDQUFDQyxNQUFQLENBQWNwRCxDQUFkLEVBQWlCO0FBQ2ZDLGdCQUFNLEVBQUUsQ0FBQ3lDLGVBQWUsQ0FBQzFDLENBQUMsQ0FBQ0csVUFBRixDQUFhQyxJQUFkLENBQWYsQ0FBbUNIO0FBRDdCLFNBQWpCO0FBR0Q7QUFDRixLQVBEO0FBUUEsV0FBT2hCLFNBQVA7QUFDRCxHQXhDRCxDQUR5QjtBQUFBLENBQTNCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCB7IGxvYWRBbmRQcm9jZXNzRGF0YSB9IGZyb20gJy4vbG9hZEFuZFByb2Nlc3NEYXRhLmpzJ1xuXG5cbmxldCBtYXJnaW4gPSB7IHRvcDogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAgfSxcbiAgICBoZWlnaHQgPSA2MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSxcbiAgICB3aWR0aCA9IDk1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuXG5sZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cmllcycpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIC0xNSArICcsJyArIG1hcmdpbi50b3AgKyAnKScpXG4gICAgLy8gLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMzApJylcblxuXG5jb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvTmF0dXJhbEVhcnRoMSgpO1xuY29uc3QgcGF0aEdlbmVyYXRvciA9IGQzLmdlb1BhdGgoKS5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG5jb25zdCBnID0gc3ZnLmFwcGVuZCgnZycpXG5cbmcuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignY2xhc3MnLCAnc3BoZXJlJylcbiAgICAuYXR0cignZCcsIHBhdGhHZW5lcmF0b3Ioe3R5cGU6ICdTcGhlcmUnfSkpXG5cblxuZy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsICgpID0+IHtcbiAgICBnLmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG59KSk7XG5cbmQzLnNlbGVjdChcIiN6b29tLWluXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMS4zKTtcbn0pO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1vdXRcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGQzLnpvb20oKVxuICAgIC5vbihcInpvb21cIiwgKCkgPT4ge1xuICAgICAgZy5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfSlcbiAgICAuc2NhbGVCeShnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1NTApLCAxIC8gMS4zKTtcbn0pO1xuXG5cbi8vIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxubG9hZEFuZFByb2Nlc3NEYXRhKDIwMTkpLnRoZW4oY291bnRyaWVzID0+IHtcbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgY291bnRyaWVzLmZlYXR1cmVzLm1hcChjb3VudHJ5ID0+IGAke2NvdW50cnkucHJvcGVydGllcy5uYW1lfTogJHtjb3VudHJ5Lm91dHB1dH1gKVxuICAvLyApXG5cbiAgbGV0IHdoaWNoRGF0YSA9IGQzLnNlbGVjdChcIiNzZWxlY3REcm9wZG93blwiKVxuICAvLyBjb25zb2xlLmxvZyh3aGljaERhdGEpXG5cbiAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gIGNvbG9yU2NhbGUuZG9tYWluKCkuc29ydCgoYiwgYSkgPT4gYSAtIGIpO1xuICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcblxuICBjb25zdCBvcmlnaW5hbCA9IGdcbiAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImNvdW50cnlcIilcbiAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gY29sb3JTY2FsZShkLm91dHB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInJnYmEoMjA0LCAyMDQsIDIwNCwgMSlcIjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC43KTtcbiAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMDEpICsgJ2UrMScpfSBtYi9kYClcbiAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgIC5zdHlsZSgndG9wJywgKGQzLmV2ZW50LnBhZ2VZKSArICdweCcpO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgfSlcbiAgICAuYXBwZW5kKFwidGl0bGVcIilcbiAgfSk7XG5cbmxldCBmZXRjaERhdGFCeVRoaXNZZWFyID0gMjAxOTtcblxuLy9zbGlkZXJcbmxldCBkYXRhVGltZSA9IGQzLnJhbmdlKDAsIDE1KS5tYXAoZCA9PiBuZXcgRGF0ZSgyMDA1ICsgZCwgMTAsIDMpKVxubGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbmxldCBkYXRhVHlwZSA9IHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0O1xuY29uc29sZS5sb2coZGF0YVR5cGUpXG5cbmxldCBzbGlkZXIgPSBkM1xuICAuc2xpZGVyQm90dG9tKClcbiAgLm1pbihkMy5taW4oZGF0YVRpbWUpKVxuICAubWF4KGQzLm1heChkYXRhVGltZSkpXG4gIC5zdGVwKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpXG4gIC53aWR0aCg0MDApXG4gIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlWVwiKSlcbiAgLnRpY2tWYWx1ZXMoZGF0YVRpbWUpXG4gIC5kZWZhdWx0KG5ldyBEYXRlKDIwMTksIDEwLCAzKSlcbiAgLm9uKCdvbmNoYW5nZScsIHZhbCA9PiB7XG4gICAgZGVidWdnZXJcbiAgICBmZXRjaERhdGFCeVRoaXNZZWFyID0gbmV3IERhdGUodmFsKS5nZXRGdWxsWWVhcigpO1xuXG4gICAgLy8gbmVzdCB0aW1lbGluZSBpbnNpZGUgb2YgcHJvZHVjdGlvbi9jb25zdW1wdGlvblxuICAgIC8vIGRvZXMgaXQgcmVhbGx5IG1hdHRlcj9cbiAgICBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4gICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0KVxuICAgICAgfSk7XG4gICAgXG4gICAgbG9hZEFuZFByb2Nlc3NEYXRhKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBjb2xvclNjYWxlID0gZDMuc2NhbGVUaHJlc2hvbGQoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbihbMCwgMTAwLCA1MDAsIDIwMDAsIDQwMDAsIDgwMDAsIDEyMDAwLCAxNjAwMCwgMjAwMDBdKTtcbiAgICAgIGNvbG9yU2NhbGUuZG9tYWluKCkuc29ydCgoYiwgYSkgPT4gYSAtIGIpO1xuICAgICAgY29sb3JTY2FsZS5yYW5nZShkMy5zY2hlbWVQdXJwbGVzWzldKVxuXG4gICAgICBsZXQgdG9vbHRpcCA9IGQzLnNlbGVjdCgnI21hcCcpLmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgLy8gY29uc29sZS5sb2coY291bnRyaWVzKVxuXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBnXG4gICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpXG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICBpZiAodHlwZW9mIGQub3V0cHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGQub3V0cHV0KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAvLyAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY291bnRyeVwiKVxuICAgICAgICAuYXR0cihcImRcIiwgcGF0aEdlbmVyYXRvcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpO1xuICAgICAgICAgIHRvb2x0aXAuaHRtbChgJHtkLnByb3BlcnRpZXMubmFtZX06ICR7TWF0aC5yb3VuZCgoZC5vdXRwdXQgKiAwLjAwMSkgKyAnZSsxJyl9IG1iL2RgKVxuICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9KVxuICAgIH0pO1xuICB9KVxuXG5kMy5zZWxlY3QoJyNzbGlkZXInKVxuICAuYXBwZW5kKCdzdmcnKVxuICAuYXR0cignd2lkdGgnLCA1MDApXG4gIC5hdHRyKCdoZWlnaHQnLCAxMDApXG4gIC5hcHBlbmQoJ2cnKVxuICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgzMCwgMzApJylcbiAgLmNhbGwoc2xpZGVyKVxuLy9cblxuLy8gY29uc3QgdG9nZ2xlID0gW1wiUHJvZHVjdGlvblwiLCBcIkNvbnN1bXB0aW9uXCJdO1xuXG4vLyBkMy5zZWxlY3QoJ3NlbGVjdCcpXG4vLyAgIC5zZWxlY3RBbGwoJ29wdGlvbicpXG4vLyAgIC5kYXRhKHRvZ2dsZSlcbi8vICAgLmVudGVyKClcbi8vICAgLmFwcGVuZCgnb3B0aW9uJylcbi8vICAgLnRleHQoZCA9PiBkKVxuLy8gICAuYXR0cigndmFsdWUnLCBkID0+IGQpXG5cbi8vIGQzLnNlbGVjdCgnLm1hcC1jb250YWluZXInKVxuLy8gICAuYXBwZW5kKCdkaXYnKVxuLy8gICAuYXR0cignY2xhc3MnLCAnbWFwLXRpdGxlJylcbi8vICAgLnRleHQoJ1dvcmxkIE1hcCcpXG5cblxuLy8gY29uc29sZS5sb2coJ2hlbGxvJylcbi8vIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG4vLyBsZXQgZHJvcGRvd25PcHRpb25zID0gc2VsZWN0ZWQub3B0aW9ucztcbi8vIGNvbnNvbGUubG9nKHNlbGVjdGVkLm9wdGlvbnNbc2VsZWN0ZWQub3B0aW9ucy5zZWxlY3RlZEluZGV4XS50ZXh0KVxuXG4vLyBsZXQgZHJvcGRvd24gPSBkMy5zZWxlY3QoJyNzZWxlY3REcm9wZG93bicpXG4vLyAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oZCkge1xuLy8gICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG4vLyAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQpXG4vLyAgIH0pXG4gIC8vIC5vbignb25jaGFuZ2UnLCBlID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9KVxuIiwiZXhwb3J0IGNvbnN0IGxvYWRBbmRQcm9jZXNzRGF0YSA9IChmZXRjaERhdGFCeVRoaXNZZWFyLCBkYXRhVHlwZT1cIlByb2R1Y3Rpb25cIikgPT5cbiAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgZDMuanNvbihcbiAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vd29ybGQtYXRsYXNAMi9jb3VudHJpZXMtMTBtLmpzb25cIiksXG4gICAgICAgICAgIGQzLmNzdihcInNyYy9hc3NldHMvZGF0YS8yMDA1LTIwMTlQUk9ELmNzdlwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOUNPTlMuY3N2XCIpXG4gICAgICAgICAgLy8gIGQzLmNzdihcInNyYy9hc3NldHMvZGF0YS9qYW4yMDIwVGVzdC5jc3ZcIiksXG4gICAgICAgICBdKS50aGVuKChbdG9wb0pTT05kYXRhLCBwcm9kdWN0aW9uRGF0YSwgY29uc3VtcHRpb25EYXRhXSkgPT4ge1xuXG4gICAgICAgICAgbGV0IHZhbHVlc0J5Q291bnRyeTtcblxuICAgICAgICAgIGlmIChkYXRhVHlwZSA9PT0gXCJQcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhbHVlc0J5Q291bnRyeSA9IHByb2R1Y3Rpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHtjb3VudHJ5OiBjb3VudHJ5LCBvdXRwdXQ6ICtkW3llYXJdfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IFwiQ29uc3VtcHRpb25cIikge1xuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gY29uc3VtcHRpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHsgY291bnRyeTogY291bnRyeSwgb3V0cHV0OiArZFt5ZWFyXSB9XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUoXG4gICAgICAgICAgICAgdG9wb0pTT05kYXRhLFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YS5vYmplY3RzLmNvdW50cmllc1xuICAgICAgICAgICApO1xuXG4gICAgICAgICAgIGNvdW50cmllcy5mZWF0dXJlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgICAgICBpZiAodmFsdWVzQnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgICAgICAgIG91dHB1dDogK3ZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0ub3V0cHV0LFxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgcmV0dXJuIGNvdW50cmllcztcbiAgICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==