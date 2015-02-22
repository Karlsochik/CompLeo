module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        watch: {
            options: {
                livereload: false
            },
            style: {
                files: ['dev/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
        },
        copy: {
            source: {
                expand: true,
                cwd: 'dev', // from witch folder
                src: ['js/**/*', '**/*.html', 'img/**/*', 'bootstrap-3.3.2-dist/**/*'], // what files
                dest: 'build' // copy into this folder
            }
        },
        sass: {
            dist: {
                // options: { style: 'compressed' },
                files: { 'build/css/style.css': 'dev/scss/style.scss' }
            }
        }
    });

    grunt.registerTask('build', ['copy', 'sass']);
    grunt.registerTask('watcher', ['build', 'watch']);
};