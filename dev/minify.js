// Minifying CSS using Uglifycss npm package
// Run command when releasing for production

// Command: node dev/minify.js

var uglifycss = require("uglifycss");

// File system
var fs = require("fs");

// Uglify API
var uglified = uglifycss.processFiles(["./framework/ambience.css"], {
  maxLineLen: 500,
  expandVars: true,
});

console.log(uglified);

// Writes in new file, creates new file if it doesn't exists. Throw error if something bad happened
fs.appendFile("./framework/min/ambience.min.css", uglified, function (err) {
  if (err) throw err;
  console.log("Saved");
});
