/**
 * Grunt configuration file.
 * Automate the tasks commonly performed. 
 */
module.exports = function (grunt) {

    require('time-grunt')(grunt);
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // task configuration will be written here.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // execute shell commands
        shell: {
            options: {
                stdout: true
            },
            npm_install: {
                command: 'npm install'
            },
            bower_install: {
                command: 'bower install --allow-root'
            },
            update: {
                command: 'npm run update'
            },
            config_devel: {
                command: 'cat src/config/enviroments/devel.js > src/config/configuration.js'
            },
            config_prod: {
                command: 'cat src/config/enviroments/prod.js > src/config/configuration.js'
            }
        },
        // validate files with JSHint.
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                force: true,
                esversion: 6,
            },
            frontend: [],
            backend: ['Gruntfile.js', '!src/public', 'src/*.js', 'src/**/*.js', 'src/**/**/*.js']
        }
    });

    // register all tasks here... 
    grunt.registerTask('default', ['shell:config_prod']);
    grunt.registerTask('install', ['shell:npm_install', 'shell:bower_install']);

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('lint:frontend', ['jshint:frontend']);
    grunt.registerTask('lint:backend', ['jshint:backend']);

    // update the dependencies of the package.json.
    grunt.registerTask('update', ['shell:update']);

};