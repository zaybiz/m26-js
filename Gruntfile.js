module.exports = function (grunt) {

  var config = {

    clean: {
      lib:  ['lib/*.*', 'lib/*.d.ts'],
      src:  ['src/*.js', 'src/js.map'],
      test: ['test/*.js', 'test/*.d.ts']
    },

    concat: {
      lib: {
        src: ['src/*.js'],
        dest: 'lib/m26.js'
      }
    },

    ts: {
      src : {
        files: [
          { src: ['src/*.ts'], dest: 'lib/m26.js' }
        ],
        options: {
          fast:   'never',
          module: 'commonjs'
        }
      },
      test : {
        files: [
          { src: ['test/*.ts'] }
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

    copy: {
      dts: {
        files: [
          { expand: true, src: ['src/*.d.ts'], dest: 'lib/', flatten: true }
        ],
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        dest: 'dist/built.js',
      },
    },

    concat: {
      tsd: {
        src:  ['lib/*.d.ts'],
        dest:  'lib/m26.d.ts'
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.registerTask('default', [ 'clean:lib', 'clean:src', 'clean:test', 'ts:src', 'ts:test', 'concat:lib', 'copy:dts', 'mocha_istanbul:coverage' ]);
  grunt.registerTask('test', [ 'clean:test', 'ts:test', 'mocha_istanbul:coverage' ]);
};
