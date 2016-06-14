"use strict";

module.exports = function(data, tile, writeData, done) {
  var layer = data.india.osm;

  var buildings = layer.features.filter(function(feature) {
    return feature.geometry.type == "Polygon" &&
           feature.properties.building == "yes";
  });
  
  var numBuildings = buildings.length;

  done(null, numBuildings);
};
