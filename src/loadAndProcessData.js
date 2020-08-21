

export const loadAndProcessData = (fetchDataByThisYear) =>
         Promise.all([
           d3.json(
             "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"),
           d3.csv("src/assets/data/2005-2019.csv"),
          //  d3.csv("src/assets/data/jan2020Test.csv"),
         ]).then(([topoJSONdata, productionData]) => {

            // const mydata = productionData.map(data => {
            //     return data["2019"];
            // })
            // console.log(mydata)
            // console.log(productionData)
            // const data2015 = productionData.map()

        //    let myDate = productionData[0].data[0].date;
        //    let year = new Date(myDate).getFullYear() + 1;
        //    console.log(year);

           const outputByCountry = productionData.reduce((acc, d) => {
             let country = d.country;
             let year = fetchDataByThisYear;
             acc[country] = {country: country, output: +d[year]}
            //  debugger
             return acc;
           }, {});

          //  console.log(outputByCountry)

           const countries = topojson.feature(
             topoJSONdata,
             topoJSONdata.objects.countries
           );

           countries.features.forEach((d) => {
             if (outputByCountry[d.properties.name]) {
               Object.assign(d, {
                 output: +outputByCountry[d.properties.name].output,
               });
             }
           });

           return countries;
         });
