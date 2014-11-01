module.exports = function (grunt) {

  var config = {  // config entries are in alphabetical order

    coffee: {
      compile: {
        files: {
          'lib/m26.js':       ['src/*.coffee'],
          'spec/m26_spec.js': ['spec/*.coffee']
        }
      }
    },

    jasmine : {
      src : 'lib/*.js',
      options : {
        specs : 'spec/*.js'
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', [ 'coffee', 'jasmine' ]);
};
