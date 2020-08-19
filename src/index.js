
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


svg.call(d3.zoom().on('zoom', () => {
    g.attr('transform', d3.event.transform);
}));

// Promise.all([
    // json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
    // tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv')
// ]).then(([tsvData, topoJSONdata]) => {

Promise.all([
  d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"),
  d3.csv("src/assets/data/jan2020Test.csv"),
]).then(([topoJSONdata, productionData]) => {

    const outputByCountry = productionData.reduce((acc, d) => {
        acc[d.country] = d;
        return acc;
    }, {});

    console.log(+outputByCountry["Algeria"].output)

    const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);

    countries.features.forEach(d => {
        // debugger
        // console.log(d.properties.name)
        if (outputByCountry[d.properties.name]) {
            debugger
            // Object.assign({}, d["output"], +outputByCountry[d.properties.name].output)
            Object.assign(d, {output: +outputByCountry[d.properties.name].output});
            debugger
        }
    });

    // console.log(countries.features)

    g
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", pathGenerator)
      .append("title")
      .text((d) => d.properties.name);

});
  
// d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then((data) => {
//     // console.log(data)
//   }
// );

//   const countryName = tsvData.reduce((accumulator, d) => {
//     accumulator[d.iso_n3] = d.name;
//     return accumulator;
//   }, {});
//accumulator method is like the forEach method, but cleaner

// d3.tsv("https://unpkg.com/browse/world-atlas@1.1.4/world/110m.tsv")
//     .then(data => console.log(data))