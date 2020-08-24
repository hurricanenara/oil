import { loadAndProcessData } from './loadAndProcessData.js'
import { data } from 'autoprefixer';

let margin = { top: 50, left: 50, right: 50, bottom: 50 },
    height = 600 - margin.top - margin.bottom,
    width = 1100 - margin.left - margin.right;

let svg = d3.select("#map")
    .append('svg')
    .attr('height', height + margin.top + margin.bottom)
    .attr('width', width + margin.left, margin.right)
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

const colorScale = d3.scaleOrdinal();

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
    // add code to render year selected
  })

d3.select('#slider')
  .append('svg')
  .attr('width', 500)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30, 30)')
  .call(slider)
//

const dataType = ["Production", "Consumption"];

d3.select('#selectDropdown')
  .selectAll('dataTypeOptions')
    .data(dataType)
    .enter()
    .append('option')
    .text(d => d)
    .attr('value', d => d);

  loadAndProcessData().then(countries => {
    colorScale.domain(countries.features.map(d => {if (typeof d.output === 'number') return d.output}))
    colorScale.domain().sort((b, a) => a - b);
    const testnum = colorScale.domain().sort((b, a) => a - b);
    colorScale.range(d3.schemeSpectral[9]);

  g.selectAll("path")
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
    .append("title")
    .text((d) => `${d.properties.name}: ${Math.round((d.output * 0.01) + 'e+1') * 0.01} mb/d`);
});
  
