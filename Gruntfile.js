/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '* http://PROJECT_WEBSITE/\n' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
    'YOUR_NAME; Licensed MIT */\n',
    // Task configuration.
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['browserify']
      }
    },
    browserify: {
      dist: {
        files: {
          'bundle.js': ['src/main.js']
        },
        options: {
          browserifyOptions: {
            debug: true
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.

};
