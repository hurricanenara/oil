

export const loadAndProcessData = () =>
    Promise.all([
        d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"),
        d3.json("src/assets/data/SeriesExport-08-20-2020-17-02-28.json"),
        // d3.csv("src/assets/data/jan2020Test.csv"),
    ])
.then(([topoJSONdata, productionData]) => {
    console.log(productionData)
  const outputByCountry = productionData.reduce((acc, d) => {
    acc[d.country] = d;
    return acc;
  }, {});

  const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);

  countries.features.forEach((d) => {
    if (outputByCountry[d.properties.name]) {
      Object.assign(d, { output: +outputByCountry[d.properties.name].output });
    }});

    return countries;
});
