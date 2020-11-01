export const loadAndProcessData = (fetchDataByThisYear, dataType="Production") =>
         Promise.all([
           d3.json(
             "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"),
           d3.csv("src/assets/data/2005-2019PROD.csv"),
           d3.csv("src/assets/data/2005-2019CONS.csv")
          //  d3.csv("src/assets/data/jan2020Test.csv"),
         ]).then(([topoJSONdata, productionData, consumptionData]) => {

          let valuesByCountry;

          if (dataType === "Production") {
            valuesByCountry = productionData.reduce((acc, d) => {
              let country = d.country;
              let year = fetchDataByThisYear;
              acc[country] = {country: country, output: +d[year]}
              return acc;
            }, {});
          } else if (dataType === "Consumption") {
            debugger
            valuesByCountry = consumptionData.reduce((acc, d) => {
              let country = d.country;
              let year = fetchDataByThisYear;
              acc[country] = { country: country, output: +d[year] }
              debugger
              return acc;
            }, {});
          }

           const countries = topojson.feature(
             topoJSONdata,
             topoJSONdata.objects.countries
           );

           countries.features.forEach((d) => {
            //  debugger
             if (valuesByCountry[d.properties.name]) {
               Object.assign(d, {
                 output: +valuesByCountry[d.properties.name].output,
               });
             }
           });
           debugger
           return countries;
         });
