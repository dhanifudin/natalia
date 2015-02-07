module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* bower_concat {{{ */
    bower_concat: {
      all: {
        dest: 'dist/assets/js/bower.js',
        cssDest: 'dist/assets/css/bower.css',
        bowerOptions: {
          relative: false
        }
      }
    },
    /* }}} bower_concat */

    /* copy {{{ */
    copy: {
      natalia: {
        expand: true,
        flatten: false,
        cwd: 'templates/',
        src: '**',
        dest: 'dist/'
      }
    },
    /* }}} copy */

    /* connect {{{ */
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist',
          keepalive: true
        }
      },
      dev: {
        options: {
          port: 1337,
          base: 'templates',
          keepalive: true
        }
      }
    }
    /* }}} connect */
  });

  grunt.registerTask('test', ['bower_concat', 'copy']);
};
