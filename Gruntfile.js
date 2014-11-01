module.exports = function (grunt) {

  var config = {  // config entries are in alphabetical order

    coffee: {
      compile: {
        files: {
          'lib/m26.js': ['src/*.coffee'],

          'spec/m26_base_spec.js':          ['spec/m26_base_spec.coffee'],
          'spec/m26_distance_spec.js':      ['spec/m26_distance_spec.coffee'],
          'spec/m26_elapsed_time_spec.js':  ['spec/m26_elapsed_time_spec.coffee'],
          'spec/m26_speed_spec.js':         ['spec/m26_speed_spec.coffee']
        }
      }
    },

    jasmine : {
      src : 'lib/m26.js',
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
