module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'app.js', 'public/contactlist.js'],
      gruntfile: ['Gruntfile.js']
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
    },
    watch: {
      all: {
        files: ['Gruntfile.js', 'app.js', 'routes/*.js'],
        tasks: ['jshint']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['public/**/*.{css,js}', 'views/**/*.hbs']
      }
    },
    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch', 'nodemon:dev']
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'app.js'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-install-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');


  // Default task(s).
  grunt.registerTask('default', ['jshint', 'bower_install', 'copy']);
  grunt.registerTask('dev', ['concurrent:dev']);
  grunt.registerTask('test', ['mocha_phantomjs']);
};