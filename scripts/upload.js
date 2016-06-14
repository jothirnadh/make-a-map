var upload = require("mapbox-upload");
var path = require("path");

var progress = upload({
  file: path.join(__dirname, "../data/buildings-and-parks.mbtiles"),
  account: "<username>",
  accesstoken: "<accesstoken>",
  mapid: "<username>.<tileset>"
});

progress.on("error", function(error) {
  if (err) throw err;
});

progress.once("finished", function() {
  console.log("Upload finished");
});
