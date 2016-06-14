"use strict";

module.exports = function(data, tile, writeData, done) {
  var layer = data.india.osm;

  var parks = layer.features.filter(function(feature) {
    return feature.geometry.type == "Polygon" &&
           feature.properties.leisure == "park";
  });

  var numParks = parks.length;

  done(null, numParks);
};
