module.exports = function (grunt) {

  var config = {

    clean: {
      lib:       ['lib/*.*', 'lib/*.d.ts'],
      lib_base:  ['lib/.baseDir*'],
      src:       ['src/*.js', 'src/*js.map'],
      test:     ['test/*.js', 'test/*.d.ts']
    },

    concat: {
      lib: {
        src: ['src/*.js'],
        dest: 'lib/m26.js'
      },
      dts: {
        src: ['src/*.d.ts'],
        dest: 'lib/m26.d.ts'
      }
    },

    ts: {
      src : {
        src: ["src/**/*.ts"],
        outDir: 'lib',
        options: {
          fast:     'never',
          module:   'commonjs',
          sourceMap: true
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
  grunt.loadTasks('tasks'); // load custom tasks in the tasks/ directory, including 'scrub-dts'
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('clean_all', [ 'clean:lib', 'clean:src', 'clean:test' ]);
  grunt.registerTask('default', [ 'clean:lib', 'clean:src', 'clean:test', 'ts:src', 'clean:lib_base', 'concat:dts', 'scrub-dts', 'ts:test', 'mocha_istanbul:coverage' ]);
  grunt.registerTask('test', [ 'clean:test', 'ts:test', 'mocha_istanbul:coverage' ]);
};
