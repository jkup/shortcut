module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            src: 'shortcut.js',
            options: {
                specs: 'spec/*Spec.js',
                helpers: 'spec/*Helper.js',
                vendor: [
                    'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
                    'https://raw.githubusercontent.com/velesin/jasmine-jquery/master/lib/jasmine-jquery.js'
                ]
            }
        },
        jshint: {
            files: ['shortcut.js', 'test/**/*.js']
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['jshint', 'jasmine']);
};
