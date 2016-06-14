"use strict";

var turf = require("turf");

module.exports = function(data, tile, writeData, done) {
  var layer = data.india.osm;

  var buildings = layer.features.filter(function(feature) {
    return feature.geometry.type == "Polygon" &&
           feature.properties.building == "yes";
  });

  var area = buildings.reduce(function(area, building) {
    area += turf.area(building);
    return area;
  }, 0);
  
  done(null, area);
};
