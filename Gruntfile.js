module.exports = function (grunt) {

  var config = {

    coffee: {
      compile: {
        files: {
          'lib/m26.js':                    ['src/*.coffee'],

          'test/m26_base_spec.js':         ['test-src/m26_base_spec.coffee'],
          'test/m26_distance_spec.js':     ['test-src/m26_distance_spec.coffee'],
          'test/m26_elapsed_time_spec.js': ['test-src/m26_elapsed_time_spec.coffee'],
          'test/m26_speed_spec.js':        ['test-src/m26_speed_spec.coffee'],
          'test/spec_helper.js':           ['test-src/spec_helper.coffee']
        }
      }
    },

    jasmine : {
      src : 'lib/m26.js',
      options : {
        specs : 'test/*.js'
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', [ 'coffee', 'jasmine' ]);
};
