module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'app.js', 'public/contactlist.js']
    },
    bower : {
      install: {
        options:{
          install: true,
          targetDir: "public/bower_components",
          cleanBowerDir: true,
          cleanTargetdir: false,
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', ['jshint','bower']);

};
