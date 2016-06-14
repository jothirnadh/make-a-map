"use strict";

var turf = require("turf");

module.exports = function(data, tile, writeData, done) {
  var layer = data.india.osm;

  var parks = layer.features.filter(function(feature) {
    return feature.geometry.type == "Polygon" &&
           feature.properties.leisure == "park";
  });

  var area = parks.reduce(function(area, park) {
    area += turf.area(park);
    return area;
  }, 0);

  done(null, area);
};
