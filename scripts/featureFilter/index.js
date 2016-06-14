"use strict";

var tileReduce = require("tile-reduce");
var path = require("path");
var fs = require("fs");

tileReduce({
  bbox: [77.4368, 12.8225, 77.7564, 13.0939], // bangalore
  zoom: 12,
  map: path.join(__dirname, "/featureFilter.js"),
  sources: [{
    name: 'india',
    mbtiles: path.join(__dirname, "../../data/india.mbtiles"),
    raw: false
  }]
});
