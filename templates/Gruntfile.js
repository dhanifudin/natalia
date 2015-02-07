module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* bower_concat {{{ */
    all: {
      dest: 'js/bower.js',
      cssDest: 'css/bower.css',
      bowerOptions: {
        relative: false
      }
    }
    /* }}} bower_concat */

  });
};

