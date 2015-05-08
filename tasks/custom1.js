
var fs = require('fs');
var sprintf = require("sprintf-js").sprintf

module.exports = function(grunt) {

  grunt.registerTask('scrub-dts', 'scrub-dts', function() {
    console.log('scrub-dts');
    var lines = fs.readFileSync('lib/m26.d.ts', 'utf-8').toString().split("\n");
    var filtered_lines = [];
    filtered_lines.push('/// <reference path="../typings/node/node.d.ts" />');
    filtered_lines.push('');

    for (i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line.indexOf('///') >= 0) {
        // filtered_lines.push('');
      }
      else {
        filtered_lines.push(line);
      }
    }
    content = filtered_lines.join("\n");
    fs.writeFileSync('lib/m26.d.ts', content, 'utf8');
    console.log('file written: lib/m26.d.ts');
  });

  grunt.registerTask('build-timestamp', 'Create a build_timestamp.txt file', function() {
    var d  = new Date();
    var ts = d.toString();
    grunt.log.writeln('build-timestamp: ' + ts);
    var outFile = fs.openSync('app/views/build_timestamp.txt', 'w+');
    fs.writeSync(outFile, '\n<!-- ' + ts + ' -->\n');
    fs.closeSync(outFile);
  });

  grunt.registerTask('copy-node-modules', 'Copy selected node_module files to public/js/', function() {

    infile  = 'node_modules/sb-js/lib/string_buffer.js'
    outfile = 'public/js/string_buffer.js'
    fs.createReadStream(infile).pipe(fs.createWriteStream(outfile));
    console.log(sprintf("copy-node-modules: %s -> %s", infile, outfile))

    infile  = 'node_modules/counter-hash-js/lib/counter_hash.js'
    outfile = 'public/js/counter_hash.js'
    fs.createReadStream(infile).pipe(fs.createWriteStream(outfile));
    console.log(sprintf("copy-node-modules: %s -> %s", infile, outfile))
  });

};
