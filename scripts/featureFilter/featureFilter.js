"use strict";

var featureFilter = require("feature-filter");

var filter = [
  "all",
  ["==", "$type", "Polygon"],
  ["any",
    ["==", "building", "yes"],
    ["==", "leisure", "park"]
  ]
];

function geojsonFilter(featureFilter) {
  var types = ['Unknown', 'Point', 'LineString', 'Polygon'];

  return function(feature) {
    var layerFeature = Object.assign({}, feature);
    layerFeature.type = types.indexOf(layerFeature.geometry.type);
    return featureFilter(layerFeature);
  }
}

var isBuildingOrPark = geojsonFilter(featureFilter(filter));

module.exports = function(data, tile, writeData, done) {
  var layer = data.india.osm;

  var features = layer.features.filter(isBuildingOrPark);
  features.forEach(function(feature) {
    writeData(JSON.stringify(feature) + "\n");
  });

  done(null, null);
};
