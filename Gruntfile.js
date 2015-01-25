module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'shortcut.min.js': 'shortcut.js'
                }
            }
        },
        jasmine: {
            src: 'shortcut.js',
            options: {
                specs: 'test/**/*Spec.js',
                helpers: 'test/**/*Helper.js',
                vendor: [
                    'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
                    'test/jasmine-jquery.js'
                ]
            }
        },
        jshint: {
            files: ['shortcut.js', 'test/**/*.js', '!test/jasmine-jquery.js']
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify', 'jasmine']);
};
