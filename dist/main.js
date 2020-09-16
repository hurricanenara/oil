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
var dataType = selected.options[selected.options.selectedIndex].text; // console.log(dataType)

var slider = d3.sliderBottom().min(d3.min(dataTime)).max(d3.max(dataTime)).step(1000 * 60 * 60 * 24 * 365).width(400).tickFormat(d3.timeFormat("%Y")).tickValues(dataTime).default(new Date(2019, 10, 3)).on('onchange', function (val) {
  fetchDataByThisYear = new Date(val).getFullYear(); // nest timeline inside of production/consumption
  // does it really matter?

  var dropdown = d3.select('#selectDropdown'); //   .on('change', function (d) {

  dataType = selected.options[selected.options.selectedIndex].text; // console.log(selected.options[selected.options.selectedIndex].text)
  // console.log(dataType)
  //   });

  Object(_loadAndProcessData_js__WEBPACK_IMPORTED_MODULE_0__["loadAndProcessData"])(fetchDataByThisYear, dataType).then(function (countries) {
    debugger;
    colorScale = d3.scaleThreshold(d3.schemeCategory10);
    colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
    colorScale.domain().sort(function (b, a) {
      return a - b;
    });
    colorScale.range(d3.schemePurples[9]);
    var tooltip = d3.select('#map').append('div').attr('class', 'tooltip').style('opacity', 0); // console.log(countries)

    var selection = g.selectAll("path").data(countries.features).attr("fill", function (d) {
      // console.log(d)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRBbmRQcm9jZXNzRGF0YS5qcyJdLCJuYW1lcyI6WyJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9OYXR1cmFsRWFydGgxIiwicGF0aEdlbmVyYXRvciIsImdlb1BhdGgiLCJnIiwidHlwZSIsImNhbGwiLCJ6b29tIiwib24iLCJldmVudCIsInRyYW5zZm9ybSIsInNjYWxlQnkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvclNjYWxlIiwic2NhbGVUaHJlc2hvbGQiLCJzY2hlbWVDYXRlZ29yeTEwIiwibG9hZEFuZFByb2Nlc3NEYXRhIiwidGhlbiIsImNvdW50cmllcyIsIndoaWNoRGF0YSIsImRvbWFpbiIsInNvcnQiLCJiIiwiYSIsInJhbmdlIiwic2NoZW1lUHVycGxlcyIsInRvb2x0aXAiLCJzdHlsZSIsIm9yaWdpbmFsIiwic2VsZWN0QWxsIiwiZGF0YSIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwib3V0cHV0IiwiaHRtbCIsInByb3BlcnRpZXMiLCJuYW1lIiwiTWF0aCIsInJvdW5kIiwicGFnZVgiLCJwYWdlWSIsImZldGNoRGF0YUJ5VGhpc1llYXIiLCJkYXRhVGltZSIsIm1hcCIsIkRhdGUiLCJzZWxlY3RlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhVHlwZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInNsaWRlciIsInNsaWRlckJvdHRvbSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tWYWx1ZXMiLCJkZWZhdWx0IiwidmFsIiwiZ2V0RnVsbFllYXIiLCJkcm9wZG93biIsInNlbGVjdGlvbiIsIlByb21pc2UiLCJhbGwiLCJqc29uIiwiY3N2IiwidG9wb0pTT05kYXRhIiwicHJvZHVjdGlvbkRhdGEiLCJjb25zdW1wdGlvbkRhdGEiLCJ2YWx1ZXNCeUNvdW50cnkiLCJyZWR1Y2UiLCJhY2MiLCJjb3VudHJ5IiwieWVhciIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJmb3JFYWNoIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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aEJULFlBRGdCLEVBRWhCQSxZQUFZLENBQUNVLE9BQWIsQ0FBcUI5RCxTQUZMLENBQWxCO0FBS0FBLGFBQVMsQ0FBQ2EsUUFBVixDQUFtQmtELE9BQW5CLENBQTJCLFVBQUNoRCxDQUFELEVBQU87QUFDakM7QUFDQyxVQUFJd0MsZUFBZSxDQUFDeEMsQ0FBQyxDQUFDRyxVQUFGLENBQWFDLElBQWQsQ0FBbkIsRUFBd0M7QUFDdEM2QyxjQUFNLENBQUNDLE1BQVAsQ0FBY2xELENBQWQsRUFBaUI7QUFDZkMsZ0JBQU0sRUFBRSxDQUFDdUMsZUFBZSxDQUFDeEMsQ0FBQyxDQUFDRyxVQUFGLENBQWFDLElBQWQsQ0FBZixDQUFtQ0g7QUFEN0IsU0FBakI7QUFHRDtBQUNGLEtBUEQ7QUFRQTtBQUNBLFdBQU9oQixTQUFQO0FBQ0QsR0EzQ0QsQ0FEeUI7QUFBQSxDQUEzQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJpbXBvcnQgeyBsb2FkQW5kUHJvY2Vzc0RhdGEgfSBmcm9tICcuL2xvYWRBbmRQcm9jZXNzRGF0YS5qcydcblxuXG5sZXQgbWFyZ2luID0geyB0b3A6IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwIH0sXG4gICAgaGVpZ2h0ID0gNjAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sXG4gICAgd2lkdGggPSA5NTAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxubGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNtYXBcIilcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJpZXMnKVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAtMTUgKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuICAgIC8vIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDMwKScpXG5cblxuY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb05hdHVyYWxFYXJ0aDEoKTtcbmNvbnN0IHBhdGhHZW5lcmF0b3IgPSBkMy5nZW9QYXRoKCkucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKVxuXG5nLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2NsYXNzJywgJ3NwaGVyZScpXG4gICAgLmF0dHIoJ2QnLCBwYXRoR2VuZXJhdG9yKHt0eXBlOiAnU3BoZXJlJ30pKVxuXG5cbmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xufSkpO1xuXG5kMy5zZWxlY3QoXCIjem9vbS1pblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZDMuem9vbSgpXG4gICAgLm9uKFwiem9vbVwiLCAoKSA9PiB7XG4gICAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9KVxuICAgIC5zY2FsZUJ5KGcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDU1MCksIDEuMyk7XG59KTtcblxuZDMuc2VsZWN0KFwiI3pvb20tb3V0XCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkMy56b29tKClcbiAgICAub24oXCJ6b29tXCIsICgpID0+IHtcbiAgICAgIGcuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH0pXG4gICAgLnNjYWxlQnkoZy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTUwKSwgMSAvIDEuMyk7XG59KTtcblxuXG4vLyBsZXQgY29sb3JTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVUaHJlc2hvbGQoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbmxvYWRBbmRQcm9jZXNzRGF0YSgyMDE5KS50aGVuKGNvdW50cmllcyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIGNvdW50cmllcy5mZWF0dXJlcy5tYXAoY291bnRyeSA9PiBgJHtjb3VudHJ5LnByb3BlcnRpZXMubmFtZX06ICR7Y291bnRyeS5vdXRwdXR9YClcbiAgLy8gKVxuXG4gIGxldCB3aGljaERhdGEgPSBkMy5zZWxlY3QoXCIjc2VsZWN0RHJvcGRvd25cIilcbiAgLy8gY29uc29sZS5sb2cod2hpY2hEYXRhKVxuXG4gIGNvbG9yU2NhbGUuZG9tYWluKFswLCAxMDAsIDUwMCwgMjAwMCwgNDAwMCwgODAwMCwgMTIwMDAsIDE2MDAwLCAyMDAwMF0pO1xuICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgY29sb3JTY2FsZS5yYW5nZShkMy5zY2hlbWVQdXJwbGVzWzldKVxuXG4gIGxldCB0b29sdGlwID0gZDMuc2VsZWN0KCcjbWFwJykuYXBwZW5kKCdkaXYnKVxuICAgICAuYXR0cignY2xhc3MnLCAndG9vbHRpcCcpXG4gICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG5cbiAgY29uc3Qgb3JpZ2luYWwgPSBnXG4gICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb3VudHJ5XCIpXG4gICAgLmF0dHIoXCJkXCIsIHBhdGhHZW5lcmF0b3IpXG4gICAgLmF0dHIoXCJmaWxsXCIsIGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkLm91dHB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC5vdXRwdXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpXCI7XG4gICAgICB9XG4gICAgfSlcbiAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNDAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNyk7XG4gICAgICB0b29sdGlwLmh0bWwoYCR7ZC5wcm9wZXJ0aWVzLm5hbWV9OiAke01hdGgucm91bmQoKGQub3V0cHV0ICogMC4wMDAxKSArICdlKzEnKX0gbWIvZGApXG4gICAgICAgIC5zdHlsZSgnbGVmdCcsIChkMy5ldmVudC5wYWdlWCkgKyAncHgnKVxuICAgICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSkgKyAncHgnKTtcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIGQgPT4ge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgIH0pXG4gICAgLmFwcGVuZChcInRpdGxlXCIpXG4gIH0pO1xuXG5sZXQgZmV0Y2hEYXRhQnlUaGlzWWVhciA9IDIwMTk7XG5cbi8vc2xpZGVyXG5sZXQgZGF0YVRpbWUgPSBkMy5yYW5nZSgwLCAxNSkubWFwKGQgPT4gbmV3IERhdGUoMjAwNSArIGQsIDEwLCAzKSlcbmxldCBzZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3REcm9wZG93bicpXG5sZXQgZGF0YVR5cGUgPSBzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dDtcbi8vIGNvbnNvbGUubG9nKGRhdGFUeXBlKVxuXG5sZXQgc2xpZGVyID0gZDNcbiAgLnNsaWRlckJvdHRvbSgpXG4gIC5taW4oZDMubWluKGRhdGFUaW1lKSlcbiAgLm1heChkMy5tYXgoZGF0YVRpbWUpKVxuICAuc3RlcCgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KVxuICAud2lkdGgoNDAwKVxuICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJVlcIikpXG4gIC50aWNrVmFsdWVzKGRhdGFUaW1lKVxuICAuZGVmYXVsdChuZXcgRGF0ZSgyMDE5LCAxMCwgMykpXG4gIC5vbignb25jaGFuZ2UnLCB2YWwgPT4ge1xuICAgIGZldGNoRGF0YUJ5VGhpc1llYXIgPSBuZXcgRGF0ZSh2YWwpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAvLyBuZXN0IHRpbWVsaW5lIGluc2lkZSBvZiBwcm9kdWN0aW9uL2NvbnN1bXB0aW9uXG4gICAgLy8gZG9lcyBpdCByZWFsbHkgbWF0dGVyP1xuICAgIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJylcbiAgICAvLyAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIGRhdGFUeXBlID0gc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFUeXBlKVxuICAgIC8vICAgfSk7XG4gICAgXG4gICAgbG9hZEFuZFByb2Nlc3NEYXRhKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlKS50aGVuKGNvdW50cmllcyA9PiB7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29sb3JTY2FsZSA9IGQzLnNjYWxlVGhyZXNob2xkKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xuICAgICAgY29sb3JTY2FsZS5kb21haW4oWzAsIDEwMCwgNTAwLCAyMDAwLCA0MDAwLCA4MDAwLCAxMjAwMCwgMTYwMDAsIDIwMDAwXSk7XG4gICAgICBjb2xvclNjYWxlLmRvbWFpbigpLnNvcnQoKGIsIGEpID0+IGEgLSBiKTtcbiAgICAgIGNvbG9yU2NhbGUucmFuZ2UoZDMuc2NoZW1lUHVycGxlc1s5XSlcblxuICAgICAgbGV0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyNtYXAnKS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0b29sdGlwJylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50cmllcylcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZ1xuICAgICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgICAuZGF0YShjb3VudHJpZXMuZmVhdHVyZXMpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBkID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKVxuICAgICAgICAgIGlmICh0eXBlb2YgZC5vdXRwdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yU2NhbGUoZC5vdXRwdXQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoMjA0LCAyMDQsIDIwNCwgMSlcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC8vIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjb3VudHJ5XCIpXG4gICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoR2VuZXJhdG9yKVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig0MDApXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNyk7XG4gICAgICAgICAgdG9vbHRpcC5odG1sKGAke2QucHJvcGVydGllcy5uYW1lfTogJHtNYXRoLnJvdW5kKChkLm91dHB1dCAqIDAuMDAxKSArICdlKzEnKX0gbWIvZGApXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCAoZDMuZXZlbnQucGFnZVgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgndG9wJywgKGQzLmV2ZW50LnBhZ2VZKSArICdweCcpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBkID0+IHtcbiAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH0pXG5cbmQzLnNlbGVjdCgnI3NsaWRlcicpXG4gIC5hcHBlbmQoJ3N2ZycpXG4gIC5hdHRyKCd3aWR0aCcsIDUwMClcbiAgLmF0dHIoJ2hlaWdodCcsIDEwMClcbiAgLmFwcGVuZCgnZycpXG4gIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDMwLCAzMCknKVxuICAuY2FsbChzbGlkZXIpXG4vL1xuXG4vLyBjb25zdCB0b2dnbGUgPSBbXCJQcm9kdWN0aW9uXCIsIFwiQ29uc3VtcHRpb25cIl07XG5cbi8vIGQzLnNlbGVjdCgnc2VsZWN0Jylcbi8vICAgLnNlbGVjdEFsbCgnb3B0aW9uJylcbi8vICAgLmRhdGEodG9nZ2xlKVxuLy8gICAuZW50ZXIoKVxuLy8gICAuYXBwZW5kKCdvcHRpb24nKVxuLy8gICAudGV4dChkID0+IGQpXG4vLyAgIC5hdHRyKCd2YWx1ZScsIGQgPT4gZClcblxuLy8gZDMuc2VsZWN0KCcubWFwLWNvbnRhaW5lcicpXG4vLyAgIC5hcHBlbmQoJ2RpdicpXG4vLyAgIC5hdHRyKCdjbGFzcycsICdtYXAtdGl0bGUnKVxuLy8gICAudGV4dCgnV29ybGQgTWFwJylcblxuXG4vLyBjb25zb2xlLmxvZygnaGVsbG8nKVxuLy8gbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vIGxldCBkcm9wZG93bk9wdGlvbnMgPSBzZWxlY3RlZC5vcHRpb25zO1xuLy8gY29uc29sZS5sb2coc2VsZWN0ZWQub3B0aW9uc1tzZWxlY3RlZC5vcHRpb25zLnNlbGVjdGVkSW5kZXhdLnRleHQpXG5cbi8vIGxldCBkcm9wZG93biA9IGQzLnNlbGVjdCgnI3NlbGVjdERyb3Bkb3duJylcbi8vICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihkKSB7XG4vLyAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdERyb3Bkb3duJylcbi8vICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC5vcHRpb25zW3NlbGVjdGVkLm9wdGlvbnMuc2VsZWN0ZWRJbmRleF0udGV4dClcbi8vICAgfSlcbiAgLy8gLm9uKCdvbmNoYW5nZScsIGUgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gIC8vIH0pXG4iLCJleHBvcnQgY29uc3QgbG9hZEFuZFByb2Nlc3NEYXRhID0gKGZldGNoRGF0YUJ5VGhpc1llYXIsIGRhdGFUeXBlPVwiUHJvZHVjdGlvblwiKSA9PlxuICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICBkMy5qc29uKFxuICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMG0uanNvblwiKSxcbiAgICAgICAgICAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhLzIwMDUtMjAxOVBST0QuY3N2XCIpLFxuICAgICAgICAgICBkMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvMjAwNS0yMDE5Q09OUy5jc3ZcIilcbiAgICAgICAgICAvLyAgZDMuY3N2KFwic3JjL2Fzc2V0cy9kYXRhL2phbjIwMjBUZXN0LmNzdlwiKSxcbiAgICAgICAgIF0pLnRoZW4oKFt0b3BvSlNPTmRhdGEsIHByb2R1Y3Rpb25EYXRhLCBjb25zdW1wdGlvbkRhdGFdKSA9PiB7XG5cbiAgICAgICAgICBsZXQgdmFsdWVzQnlDb3VudHJ5O1xuXG4gICAgICAgICAgaWYgKGRhdGFUeXBlID09PSBcIlByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gcHJvZHVjdGlvbkRhdGEucmVkdWNlKChhY2MsIGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGNvdW50cnkgPSBkLmNvdW50cnk7XG4gICAgICAgICAgICAgIGxldCB5ZWFyID0gZmV0Y2hEYXRhQnlUaGlzWWVhcjtcbiAgICAgICAgICAgICAgYWNjW2NvdW50cnldID0ge2NvdW50cnk6IGNvdW50cnksIG91dHB1dDogK2RbeWVhcl19XG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gXCJDb25zdW1wdGlvblwiKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdmFsdWVzQnlDb3VudHJ5ID0gY29uc3VtcHRpb25EYXRhLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjb3VudHJ5ID0gZC5jb3VudHJ5O1xuICAgICAgICAgICAgICBsZXQgeWVhciA9IGZldGNoRGF0YUJ5VGhpc1llYXI7XG4gICAgICAgICAgICAgIGFjY1tjb3VudHJ5XSA9IHsgY291bnRyeTogY291bnRyeSwgb3V0cHV0OiArZFt5ZWFyXSB9XG4gICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUoXG4gICAgICAgICAgICAgdG9wb0pTT05kYXRhLFxuICAgICAgICAgICAgIHRvcG9KU09OZGF0YS5vYmplY3RzLmNvdW50cmllc1xuICAgICAgICAgICApO1xuXG4gICAgICAgICAgIGNvdW50cmllcy5mZWF0dXJlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgICAvLyAgZGVidWdnZXJcbiAgICAgICAgICAgICBpZiAodmFsdWVzQnlDb3VudHJ5W2QucHJvcGVydGllcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkLCB7XG4gICAgICAgICAgICAgICAgIG91dHB1dDogK3ZhbHVlc0J5Q291bnRyeVtkLnByb3BlcnRpZXMubmFtZV0ub3V0cHV0LFxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgcmV0dXJuIGNvdW50cmllcztcbiAgICAgICAgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==