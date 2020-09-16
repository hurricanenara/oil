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

console.log('hello');
var selected = document.getElementById('selectDropdown');
var dropdownOptions = selected.options;
console.log(selected.options[selected.options.selectedIndex].text);
var dropdown = d3.select('#selectDropdown'); // .on('onchange', e => {
//   console.log(e)
// })

console.log(dropdown);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsIndoaWNoRGF0YSIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiaHRtbCIsInByb3BlcnRpZXMiLCJuYW1lIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsImZldGNoRGF0YUJ5VGhpc1llYXIiLCJkYXRhVGltZSIsIm1hcCIsIkRhdGUiLCJzbGlkZXIiLCJzbGlkZXJCb3R0b20iLCJtaW4iLCJtYXgiLCJzdGVwIiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrVmFsdWVzIiwiZGVmYXVsdCIsInZhbCIsImdldEZ1bGxZZWFyIiwic2VsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyb3Bkb3duT3B0aW9ucyIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImRyb3Bkb3duIiwiZGF0YVR5cGUiLCJQcm9taXNlIiwiYWxsIiwianNvbiIsImNzdiIsInRvcG9KU09OZGF0YSIsInByb2R1Y3Rpb25EYXRhIiwiY29uc3VtcHRpb25EYXRhIiwidmFsdWVzQnlDb3VudHJ5IiwicmVkdWNlIiwiYWNjIiwiY291bnRyeSIsInllYXIiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZm9yRWFjaCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFB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UyxDQUFDYSxRQUFWLENBQW1CcUQsT0FBbkIsQ0FBMkIsVUFBQ25ELENBQUQsRUFBTztBQUNqQztBQUNDLFVBQUkyQyxlQUFlLENBQUMzQyxDQUFDLENBQUNHLFVBQUYsQ0FBYUMsSUFBZCxDQUFuQixFQUF3QztBQUN0Q2dELGNBQU0sQ0FBQ0MsTUFBUCxDQUFjckQsQ0FBZCxFQUFpQjtBQUNmQyxnQkFBTSxFQUFFLENBQUMwQyxlQUFlLENBQUMzQyxDQUFDLENBQUNHLFVBQUYsQ0FBYUMsSUFBZCxDQUFmLENBQW1DSDtBQUQ3QixTQUFqQjtBQUdEO0FBQ0YsS0FQRDtBQVFBLFdBQU9oQixTQUFQO0FBQ0QsR0F4Q0QsQ0FEeUI7QUFBQSxDQUEzQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgeyBsb2FkQW5kUHJvY2Vzc0RhdGEgfSBmcm9tICcuL2xvYWRBbmRQcm9jZXNzRGF0YS5qcydcblxuXG5sZXQgbWFyZ2luID0geyB0b3A6IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwIH0sXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgd2lkdGggPSA5NTAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNtYXBcIilcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJpZXMnKVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAtMTUgKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDMwKScpXG5cblxuY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGhHZW5lcmF0b3IgPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG5nLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3NwaGVyZScpXG4gICAgLmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKHt0eXBlOiAnU3BoZXJlJ30pKVxuXG5cbmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufSkpO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1pblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZDMuem9vbSgpXG4gICAgLm9uKFwiem9vbVwiLCAoKSA9PiB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9KVxuICAgIC5zY2FsZUJ5KGcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDU1MCksIDEuMyk7XG59KTtcblxuZDMuc2VsZWN0KFwiI3pvb20tb3V0XCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMSAvIDEuMyk7XG59KTtcblxuXG4vLyBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVUaHJlc2hvbGQoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmxvYWRBbmRQcm9jZXNzRGF0YSgyMDE5KS50aGVuKGNvdW50cmllcyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIGNvdW50cmllcy5mZWF0dXJlcy5tYXAoY291bnRyeSA9PiBgJHtjb3VudHJ5LnByb3BlcnRpZXMubmFtZX06ICR7Y291bnRyeS5vdXRwdXR9YClcbiAgLy8gKVxuXG4gIGxldCB3aGljaERhdGEgPSBkMy5zZWxlY3QoXCIjc2VsZWN0RHJvcGRvd25cIilcbiAgLy8gY29uc29sZS5sb2cod2hpY2hEYXRhKVxuXG4gIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgY29sb3JTY2FsZS5yYW5nZShkMy5zY2hlbWVQdXJwbGVzWzldKVxuXG4gIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG5cbiAgY29uc3Qgb3JpZ2luYWwgPSBnXG4gICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb3VudHJ5XCIpXG4gICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC5vdXRwdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNyk7XG4gICAgICB0b29sdGlwLmh0bWwoYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9OiAke01hdGgucm91bmQoKGQub3V0cHV0ICogMC4wMDAxKSArICdlKzEnKX0gbWIvZGApXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5wYWdlWCkgKyAncHgnKVxuICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIGQgPT4ge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgIH0pXG4gICAgLmFwcGVuZChcInRpdGxlXCIpXG4gIH0pO1xuXG5sZXQgZmV0Y2hEYXRhQnlUaGlzWWVhciA9IDIwMTk7XG5cbi8vc2xpZGVyXG5sZXQgZGF0YVRpbWUgPSBkMy5yYW5nZSgwLCAxNSkubWFwKGQgPT4gbmV3IERhdGUoMjAwNSArIGQsIDEwLCAzKSlcblxubGV0IHNsaWRlciA9IGQzXG4gIC5zbGlkZXJCb3R0b20oKVxuICAubWluKGQzLm1pbihkYXRhVGltZSkpXG4gIC5tYXgoZDMubWF4KGRhdGFUaW1lKSlcbiAgLnN0ZXAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSlcbiAgLndpZHRoKDQwMClcbiAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiVZXCIpKVxuICAudGlja1ZhbHVlcyhkYXRhVGltZSlcbiAgLmRlZmF1bHQobmV3IERhdGUoMjAxOSwgMTAsIDMpKVxuICAub24oJ29uY2hhbmdlJywgdmFsID0+IHtcbiAgICBkZWJ1Z2dlclxuICAgIGZldGNoRGF0YUJ5VGhpc1llYXIgPSBuZXcgRGF0ZSh2YWwpLmdldEZ1bGxZZWFyKCk7XG4gICAgXG4gICAgbG9hZEFuZFByb2Nlc3NEYXRhKGZldGNoRGF0YUJ5VGhpc1llYXIpLnRoZW4oY291bnRyaWVzID0+IHtcbiAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZVRocmVzaG9sZChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbiAgICAgIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oKS5zb3J0KChiLCBhKSA9PiBhIC0gYik7XG4gICAgICBjb2xvclNjYWxlLnJhbmdlKGQzLnNjaGVtZVB1cnBsZXNbOV0pXG5cbiAgICAgIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAvLyBjb25zb2xlLmxvZyhjb3VudHJpZXMpXG5cbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGdcbiAgICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgICAgLmRhdGEoY291bnRyaWVzLmZlYXR1cmVzKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZCA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZClcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgIGlmICh0eXBlb2YgZC5vdXRwdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC5vdXRwdXQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoMjA0LCAyMDQsIDIwNCwgMSlcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC8vIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb3VudHJ5XCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoR2VuZXJhdG9yKVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNyk7XG4gICAgICAgICAgdG9vbHRpcC5odG1sKGAke2QucHJvcGVydGllcy5uYW1lfTogJHtNYXRoLnJvdW5kKChkLm91dHB1dCAqIDAuMDAxKSArICdlKzEnKX0gbWIvZGApXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCAoZDMuZXZlbnQucGFnZVgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgndG9wJywgKGQzLmV2ZW50LnBhZ2VZKSArICdweCcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBkID0+IHtcbiAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH0pXG5cbmQzLnNlbGVjdCgnI3NsaWRlcicpXG4gIC5hcHBlbmQoJ3N2ZycpXG4gIC5hdHRyKCd3aWR0aCcsIDUwMClcbiAgLmF0dHIoJ2hlaWdodCcsIDEwMClcbiAgLmFwcGVuZCgnZycpXG4gIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDMwLCAzMCknKVxuICAuY2FsbChzbGlkZXIpXG4vL1xuXG4vLyBjb25zdCB0b2dnbGUgPSBbXCJQcm9kdWN0aW9uXCIsIFwiQ29uc3VtcHRpb25cIl07XG5cbi8vIGQzLnNlbGVjdCgnc2VsZWN0Jylcbi8vICAgLnNlbGVjdEFsbCgnb3B0aW9uJylcbi8vICAgLmRhdGEodG9nZ2xlKVxuLy8gICAuZW50ZXIoKVxuLy8gICAuYXBwZW5kKCdvcHRpb24nKVxuLy8gICAudGV4dChkID0+IGQpXG4vLyAgIC5hdHRyKCd2YWx1ZScsIGQgPT4gZClcblxuLy8gZDMuc2VsZWN0KCcubWFwLWNvbnRhaW5lcicpXG4vLyAgIC5hcHBlbmQoJ2RpdicpXG4vLyAgIC5hdHRyKCdjbGFzcycsICdtYXAtdGl0bGUnKVxuLy8gICAudGV4dCgnV29ybGQgTWFwJylcblxuXG5jb25zb2xlLmxvZygnaGVsbG8nKVxubGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbmxldCBkcm9wZG93bk9wdGlvbnMgPSBzZWxlY3RlZC5vcHRpb25zO1xuY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQpXG5cbmxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJyk7XG4gIC8vIC5vbignb25jaGFuZ2UnLCBlID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9KVxuXG4gIGNvbnNvbGUubG9nKGRyb3Bkb3duKSIsImV4cG9ydCBjb25zdCBsb2FkQW5kUHJvY2Vzc0RhdGEgPSAoZmV0Y2hEYXRhQnlUaGlzWWVhciwgZGF0YVR5cGU9XCJQcm9kdWN0aW9uXCIpID0+XG4gICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgIGQzLmpzb24oXG4gICAgICAgICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3dvcmxkLWF0bGFzQDIvY291bnRyaWVzLTEwbS5qc29uXCIpLFxuICAgICAgICAgICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvMjAwNS0yMDE5UFJPRC5jc3ZcIiksXG4gICAgICAgICAgIGQzLmNzdihcInNyYy9hc3NldHMvZGF0YS8yMDA1LTIwMTlDT05TLmNzdlwiKVxuICAgICAgICAgIC8vICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvamFuMjAyMFRlc3QuY3N2XCIpLFxuICAgICAgICAgXSkudGhlbigoW3RvcG9KU09OZGF0YSwgcHJvZHVjdGlvbkRhdGEsIGNvbnN1bXB0aW9uRGF0YV0pID0+IHtcblxuICAgICAgICAgIGxldCB2YWx1ZXNCeUNvdW50cnk7XG5cbiAgICAgICAgICBpZiAoZGF0YVR5cGUgPT09IFwiUHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZXNCeUNvdW50cnkgPSBwcm9kdWN0aW9uRGF0YS5yZWR1Y2UoKGFjYywgZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGQuY291bnRyeTtcbiAgICAgICAgICAgICAgbGV0IHllYXIgPSBmZXRjaERhdGFCeVRoaXNZZWFyO1xuICAgICAgICAgICAgICBhY2NbY291bnRyeV0gPSB7Y291bnRyeTogY291bnRyeSwgb3V0cHV0OiArZFt5ZWFyXX1cbiAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBcIkNvbnN1bXB0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhbHVlc0J5Q291bnRyeSA9IGNvbnN1bXB0aW9uRGF0YS5yZWR1Y2UoKGFjYywgZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgY291bnRyeSA9IGQuY291bnRyeTtcbiAgICAgICAgICAgICAgbGV0IHllYXIgPSBmZXRjaERhdGFCeVRoaXNZZWFyO1xuICAgICAgICAgICAgICBhY2NbY291bnRyeV0gPSB7IGNvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl0gfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YSxcbiAgICAgICAgICAgICB0b3BvSlNPTmRhdGEub2JqZWN0cy5jb3VudHJpZXNcbiAgICAgICAgICAgKTtcblxuICAgICAgICAgICBjb3VudHJpZXMuZmVhdHVyZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgICAgLy8gIGRlYnVnZ2VyXG4gICAgICAgICAgICAgaWYgKHZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZCwge1xuICAgICAgICAgICAgICAgICBvdXRwdXQ6ICt2YWx1ZXNCeUNvdW50cnlbZC5wcm9wZXJ0aWVzLm5hbWVdLm91dHB1dCxcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgICAgIHJldHVybiBjb3VudHJpZXM7XG4gICAgICAgICB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=