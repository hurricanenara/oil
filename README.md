### Background
We all use it, but only few know about it. Some of the earliest civilizations relied heavily on oil. The Babylonians used it to waterproof their boat, the Egyptians used it to help preserve corpses. But it wasn't until the 19th centuries the full potential of the mysterious black substance was understood and exploited. This interactive map of oil attempts to help provide comprehensive and objective data about oil.

### Functionality & MVP
With the interactive map of oil, users will be able to:
  - Visualize the range of oil data via color and heatmap
  - Toggle over each country for specific data regarding the country
  - Understand who the major producers, consumers, exporters, and importers are
  - Learn the issues that arise in each stream (upstream, midstream, downstream)

### Wireframe
[https://wireframe.cc/hPMhVD]

### Technologies
d3.js, geojson, JavaScript, canvas

### Implementation Timeline
- Day 1 (08/18/2020): Gather oil production and consumption data from reliable sources, implement interactive world map, set up app structure
- Day 2 (08/19/2020): Plot production and consumption data, implement auto-adjusting heatmap, gather crude import and export data, plot import and export
- Day 3 (08/20/2020): Implement timeline function of oil production, consumption, export & import history, add event listeners (hover, click, etc)
- Day 4 (08/21/2020): Add visualization of environmental issues caused by oil streams (oil spills, SOx/NOx emissions from transporting oil, how major players are - fighting against them)

#### Sources
- https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/statistical-review/bp-stats-review-2020-full-report.pdf
- https://www.eia.gov/opendata/
- https://www.eia.gov/energyexplained/oil-and-petroleum-products/oil-and-the-environment.php

#### Bonus
- Add world adoption of renewable energy to timeline and heatmap (categorized by type)
- Add refined products branch of oil
- Add oil price and correlate to major world events and supply & demand
