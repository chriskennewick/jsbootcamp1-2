module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'app.js', 'public/contactlist.js']
    },
    copy: {
      main: {
        files: [{
          src: ["bower_components/**"],
          dest: "public/"
        }]
      }
    },
    clean: ["bower_components", "public/bower_components", "node_modules"],
    mocha_phantomjs: {
      options: {},
      all: ['tests/**/*.html']
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-install-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'bower_install', 'copy']);
  grunt.registerTask('test', ['mocha_phantomjs']);
};