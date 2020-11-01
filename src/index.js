import { loadAndProcessData } from './loadAndProcessData.js'

let margin = { top: 50, left: 50, right: 50, bottom: 50 },
    height = 600 - margin.top - margin.bottom,
    width = 950 - margin.left - margin.right;

let svg = d3.select("#map")
    .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left + margin.right)
    .attr('class', 'countries')
    .append('g')
    .attr('transform', 'translate(' + -15 + ',' + margin.top + ')')


const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection);

const g = svg.append('g')

g.append('path')
    .attr('class', 'sphere')
    .attr('d', pathGenerator({type: 'Sphere'}))


g.call(d3.zoom().on('zoom', () => {
    g.attr('transform', d3.event.transform);
}));

d3.select("#zoom-in").on("click", function () {
  d3.zoom()
    .on("zoom", () => {
      g.attr("transform", d3.event.transform);
    })
    .scaleBy(g.transition().duration(550), 1.3);
});

d3.select("#zoom-out")
    .on("click", function () {
  d3.zoom()
    .on("zoom", () => {
      g.attr("transform", d3.event.transform);
    })
    .scaleBy(g.transition().duration(550), 1 / 1.3);
});

let colorScale = d3.scaleThreshold(d3.schemeCategory10);

loadAndProcessData(2019).then(countries => {

  colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
  colorScale.domain().sort((b, a) => a - b);
  colorScale.range(d3.schemePurples[9])

  let tooltip = d3.select('#map').append('div')
     .attr('class', 'tooltip')
     .style('opacity', 0)

  const original = g
    .selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", pathGenerator)
    .attr("fill", d => {
      if (typeof d.output === 'number') {
        return colorScale(d.output)
      } else {
        return "rgba(204, 204, 204, 1)";
      }
    })
    .on("mouseover", d => {
      tooltip.transition()
        .duration(400)
        .style("opacity", 0.7);
      tooltip.html(`${d.properties.name}: ${Math.round((d.output * 0.0001) + 'e+1')} mb/d`)
        .style('left', (d3.event.pageX) + 'px')
        .style('top', (d3.event.pageY) + 'px');
    })
    .on("mouseout", d => {
      tooltip.transition()
      .duration(500)
      .style("opacity", 0);
    })
    .append("title")
  });

let fetchDataByThisYear = 2019;

//slider
let dataTime = d3.range(0, 15).map(d => new Date(2005 + d, 10, 3))
const selected = document.getElementById('selectDropdown')
let dataType = selected.options[selected.options.selectedIndex].text;

let slider = d3
  .sliderBottom()
  .min(d3.min(dataTime))
  .max(d3.max(dataTime))
  .step(1000 * 60 * 60 * 24 * 365)
  .width(400)
  .tickFormat(d3.timeFormat("%Y"))
  .tickValues(dataTime)
  .default(new Date(2019, 10, 3))
  .on('onchange', val => {
    fetchDataByThisYear = new Date(val).getFullYear();
    console.log(fetchDataByThisYear)

    // nest timeline inside of production/consumption
    // does it really matter?
    let dropdown = d3.select('#selectDropdown')
    //   .on('change', function (d) {
      dataType = selected.options[selected.options.selectedIndex].text;
    
    loadAndProcessData(fetchDataByThisYear, dataType).then(countries => {
      debugger
      colorScale = d3.scaleThreshold(d3.schemeCategory10);
      colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
      colorScale.domain().sort((b, a) => a - b);
      colorScale.range(d3.schemePurples[9])

      let tooltip = d3.select('#map').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)

      const selection = g
        .selectAll("path")
        .data(countries.features)
        .attr("fill", d => {
          if (typeof d.output === 'number') {
            debugger
            return colorScale(d.output)
          } else {
            return "rgba(204, 204, 204, 1)";
          }
        })
        .enter()
        // .append("path")
        .attr("class", "country")
        .attr("d", pathGenerator)
        .on("mouseover", d => {
          tooltip.transition()
            .duration(400)
            .style("opacity", 0.7);
          tooltip.html(`${d.properties.name}: ${Math.round((d.output * 0.001) + 'e+1')} mb/d`)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px');
        })
        .on("mouseout", d => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        })
    });
  })

d3.select('#slider')
  .append('svg')
  .attr('width', 500)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30, 30)')
  .call(slider)

  let dropdown = d3.select('#selectDropdown')
  .on('change', function(d) {
    let selected = document.getElementById('selectDropdown')
    let initialDataType = selected.options[selected.options.selectedIndex].text;
    // console.log(selected.options[selected.options.selectedIndex].text)
        loadAndProcessData(2019, initialDataType).then(countries => {
      debugger
      colorScale = d3.scaleThreshold(d3.schemeCategory10);
      colorScale.domain([0, 100, 500, 2000, 4000, 8000, 12000, 16000, 20000]);
      colorScale.domain().sort((b, a) => a - b);
      colorScale.range(d3.schemePurples[9])

      let tooltip = d3.select('#map').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)

      const selection = g
        .selectAll("path")
        .data(countries.features)
        .attr("fill", d => {
          if (typeof d.output === 'number') {
            debugger
            return colorScale(d.output)
          } else {
            return "rgba(204, 204, 204, 1)";
          }
        })
        .enter()
        // .append("path")
        .attr("class", "country")
        .attr("d", pathGenerator)
        .on("mouseover", d => {
          tooltip.transition()
            .duration(400)
            .style("opacity", 0.7);
          tooltip.html(`${d.properties.name}: ${Math.round((d.output * 0.001) + 'e+1')} mb/d`)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px');
        })
        .on("mouseout", d => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        })
    });
  })




  // .on('onchange', e => {
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
