// import '../src/styles/index.scss';

// let production = [];

// d3.csv("src/assets/data/jan2020Test.csv").then(function(data) {
//     data.forEach((d) => {
//         d.output = +d.output
//         // debugger
//         production.push(d);
//     });
// });

// let divSelection = d3.select('body').selectAll('div');

// divSelection
//     .data(production)
//     .enter()
// .append('div')
//     .text(d => {
//         return d.country;
//     })
//     .attr("class", "bar")
//     .style("width", d => +d.output * 0.1 + "px");

// const plot = () => {
//     const width = 500;
//     const height = 200;

// }

// console.log(production);

let myData = [
  { title: "Despacito", amount: 5.68 },
  { title: "Shape of You", amount: 3.89 },
  { title: "See You Again", amount: 3.85 },
  { title: "Uptown Funk", amount: 3.32 },
  { title: "Masha and the Bear: Recipe for Disaster", amount: 3.31 },
  { title: "Gangam Style", amount: 3.23 },
  { title: "Sorry", amount: 3.03 },
  { title: "Sugar", amount: 2.8 },
  { title: "Shake it Off", amount: 2.67 },
  { title: "Roar", amount: 2.65 },
  { title: "Bailando", amount: 2.63 },
  { title: "Thinking Out Loud", amount: 2.53 },
  { title: "Counting Stars", amount: 2.51 },
  { title: "Dark Horse", amount: 2.46 },
  { title: "Lean On", amount: 2.43 },
];

let divSelection = d3.select("body").selectAll("div");

divSelection
  .data(myData)
  .enter()
  .append("div")
  .text(function (d) {
    return d.title + ": " + d.amount + " views";
  })
  .attr("class", "bar")
  .style("width", function (d) {
    return d.amount * 50 + "px";
  });