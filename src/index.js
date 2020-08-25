import { loadAndProcessData } from './loadAndProcessData.js'
import { data } from 'autoprefixer';
import { selectAll } from 'd3';

let margin = { top: 50, left: 50, right: 50, bottom: 50 },
    height = 600 - margin.top - margin.bottom,
    width = 1100 - margin.left - margin.right;

let svg = d3.select("#map")
    .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left, margin.right)
    .attr('class', 'countries')
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

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
  // Smooth zooming
  d3.zoom()
    .on("zoom", () => {
      g.attr("transform", d3.event.transform);
    })
    .scaleBy(g.transition().duration(550), 1.3);
});

d3.select("#zoom-out")
    .on("click", function () {
  // Ordinal zooming
  d3.zoom()
    .on("zoom", () => {
      g.attr("transform", d3.event.transform);
    })
    .scaleBy(g.transition().duration(550), 1 / 1.3);
});

const dataType = ["Production", "Consumption"];

d3.select('#selectDropdown')
  .selectAll('dataTypeOptions')
    .data(dataType)
    .enter()
    .append('option')
    .text(d => d)
    .attr('value', d => d);

let colorScale = d3.scaleOrdinal();

loadAndProcessData(2019).then(countries => {
  debugger
  // colorScale.domain(countries.features.map(d => { if (typeof d.output === 'number') return d.output }))
  colorScale.domain(countries.features.map(d => {
    debugger
    if (typeof d.output === 'number') {
      return d.output;
    } else {
      return 0;
    }
     }
  ))
  colorScale.domain().sort((b, a) => a - b);
  colorScale.range(d3.schemeSpectral[9]);
  // console.log(countries)
  // console.log(colorScale.domain().sort((b, a) => a - b));
  // console.log(colorScale.domain())

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
      tooltip.html(`${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`)
        .style('left', (d3.event.pageX) + 'px')
        .style('top', (d3.event.pageY) + 'px');
      // console.log(`${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`)
      // console.log(d3.event);
      // d3.select(d3.event.target).text("hello")
    })
    .on("mouseout", d => {
      tooltip.transition()
      .duration(500)
      .style("opacity", 0);
    })
    .append("title")
    // .text((d) => `${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`)
    // console.log(original.selectAll("text"));
    // console.log(original.selectAll("title"));
    // console.log(d3.select('.countries'));
    // d3.select('.countries')._groups[0].addEventListener("mouseenter", (e) => {
    //   console.log(e);
    // })
  });

let fetchDataByThisYear = 2019;

//slider
let dataTime = d3.range(0, 15).map(d => new Date(2005 + d, 10, 3))

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
    debugger
    fetchDataByThisYear = new Date(val).getFullYear();
    
    loadAndProcessData(fetchDataByThisYear).then(countries => {
      let tooltip = d3.select('#map').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0)
      // console.log(countries)
      // colorScale.domain(countries.features.map(d => { if (typeof d.output === 'number') return d.output }))
      colorScale.domain(countries.features.map(d => {
        if (typeof d.output === 'number') {
          return d.output;
        } else {
          return 0;
        }
      }
      ))
      colorScale.domain().sort((a, b) => a - b);
      colorScale.range(d3.schemeSpectral[9]);
      // console.log(countries)
      // console.log(colorScale.domain().sort((b, a) => a - b));
      // console.log(colorScale.domain());
      // console.log(countries.features);

      const selection = g
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
          tooltip.html(`${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px');
          // console.log(`${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`)
          // console.log(d3.event);
          // d3.select(d3.event.target).text("hello")
        })
        .on("mouseout", d => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        })
        // .append("title")
        // .text((d) => {
        //   debugger;
        //   console.log(
        //     `${d.properties.name}: ${
        //       Math.round(d.output * 0.01 + "e+1") * 0.01
        //     } mb/d`
        //   );
        //   // return `${d.properties.name}: ${
        //   //   Math.round(d.output * 0.01 + "e+1") * 0.01
        //   // } mb/d`;
        //   return "hello";
        // });
        // console.log(selection.selectAll("title"))
        // console.log(selection)
    });
  })

d3.select('#slider')
  .append('svg')
  .attr('width', 500)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30, 30)')
  .call(slider)
//

  
