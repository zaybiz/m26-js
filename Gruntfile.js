module.exports = function (grunt) {

  var config = {

    clean: {
      lib:  ['lib/*.*'],
      test: ['test/*.js', 'test/*.d.ts']
    },

    concat: {
      lib: {
        src: ['src/*.js'],
        dest: 'lib/m26.js'
      }
    },

    ts: {
      default : {
        files: [
          { src: ['src/m26_constants.ts'], dest: 'lib/m26.js' }
        ],
        options: {
          fast:   'never',
          module: 'commonjs'
        }
      }
    },

    typescript: {
      base: {
        src: ['src/*.ts'],
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-typescript');
  grunt.registerTask('default', [ 'clean:lib', 'clean:test', 'ts', 'concat:lib' ]);
};
