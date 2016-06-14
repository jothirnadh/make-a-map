"use strict";

var tileReduce = require("tile-reduce");
var path = require("path");

var totalArea = 0;

tileReduce({
  bbox: [77.4368, 12.8225, 77.7564, 13.0939], // bangalore,
  zoom: 12,
  map: path.join(__dirname, "/areaOfBuildings.js"),
  sources: [{
    name: 'india',
    mbtiles: path.join(__dirname, "../../data/india.mbtiles"),
    raw: false
  }]
})
.on('reduce', function(area) {
  totalArea += area;
})
.on('end', function() {
  console.log("Total area of buildings (m²): %s", totalArea.toFixed(2));
});
