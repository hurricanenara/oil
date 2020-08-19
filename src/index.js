// import {geoMercator} from 'd3';
// import * as d3 from 'd3';
// import { feature } from 'topojson';

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
svg.append('path')
    .attr('class', 'sphere')
    .attr('d', pathGenerator({type: 'Sphere'}))

d3.json("https://unpkg.com/world-atlas@1.1.4/world/110m.json").then((data) => {
  const countries = topojson.feature(data, data.objects.countries);

  svg.selectAll('path').data(countries.features)
    .enter().append('path')
    .attr('class', 'country')
    .attr('d', pathGenerator);
});