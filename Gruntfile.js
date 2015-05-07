module.exports = function (grunt) {

  var config = {

    ts: {
      default : {
        src: ["src/*.ts"],
        out:    'src/m26.js',
        options: {
          fast:   'never',
          module: 'commonjs'
        }
      }
    },

    typescript: {
      base: {
        src: ['src/**/*.ts'],
        dest: 'lib/m26.js',
        options: {
          module: 'commonjs', // commonjs or amd
          target: 'es5',      // es3 or es5
          basePath: 'src',
          sourceMap: true,
          declaration: true
        }
      }
    },

    coffee: {
      compile: {
        options: {
          join: true
        },
        files: {
          'test/m26_age_spec.js':            ['test-src/m26_age_spec.coffee'],


          'examples.js':                     ['test-src/examples.coffee']
        }
      }
    },

    mocha_istanbul: {
      coverage: {
        src: 'test', // the folder, not the files
        options: {
          coverageFolder: 'coverage',
          mask: '*_test.js',
          root: '/',
          mochaOptions: { slow: 200 }
        }
      }
    }

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', [ 'ts' ]);
};
