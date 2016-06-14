"use strict";

var tileReduce = require("tile-reduce");
var path = require("path");

var numBuildings = 0;

tileReduce({
  bbox: [77.4368, 12.8225, 77.7564, 13.0939], // bangalore
  zoom: 12,
  map: path.join(__dirname, "/countBuildings.js"),
  sources: [{
    name: 'india',
    mbtiles: path.join(__dirname, "../../data/india.mbtiles"),
    raw: false
  }]
})
.on('reduce', function(num) {
  numBuildings += num;
})
.on('end', function() {
  console.log("Total buildings: %d", numBuildings);
});
