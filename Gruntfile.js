/*global module:false*/

'use strict';

module.exports = function (grunt) {

    // Loads grunt tasks automatically - no need to add "grunt.loadNpmTasks('grunt-task...')"
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        autoprefixer: {

            options: {
                browsers: ['last 3 versions', 'ie 8', 'ie 9']
            },

            dist: {
                src: 'assets/css/styles.css'
            }
        },

        devserver: {

            desktop: {
                options: {
                    index: 'index.html',
                    port: 3000
                }
            }

        },

        watch: {
            js: {
                files: ['Gruntfile.js', 'assets/js/**/*.js'],
                tasks: ['jshint', 'jscs', 'eslint']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            src: ['Gruntfile.js', 'assets/js/**/*.js']
        },

        jscs: {
            options: {
                config: '.jscs.json' // more awesome rules here http://jscs.info/rules.html
            },
            src: ['Gruntfile.js', 'assets/js/**/*.js']
        },

        eslint: {
            options: {
                configFile: '.eslintrc' // more even awesomer rules http://eslint.org/docs/rules/
            },
            target: ['Gruntfile.js', 'assets/js/**/*.js']
        },

        wiredep: {

            task: {
                src: [
                    'index.html'
                ]
            }

        }

    });

    grunt.registerTask('default', ['test', 'autoprefixer']);
    grunt.registerTask('server', ['devserver:desktop', 'watch:js']);
    grunt.registerTask('test', ['jshint', 'jscs', 'eslint']);

    grunt.registerMultiTask('devserver', function () {

        var options = this.options();
        var connect = require('connect');
        var morgan = require('morgan');
        var serveStatic = require('serve-static');
        var pushState = require('connect-pushstate');
        var port = options.port;

        return connect()
        .use(pushState())
        .use(serveStatic('.', {
            index: options.index
        }))
        .use(morgan('dev'))
        .listen(port, function () {
            console.log('Application server stated on port', port);
        });

    });

};