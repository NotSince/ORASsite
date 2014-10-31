module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            debug: "dist/debug/*",
            prod: "dist/prod/*"
        },
        less: {
            debug: {
                options: {
                    paths: ["src/styles/"]
                },
                files: {
                    "dist/debug/styles/main.css": "src/styles/main.less"
                }
            },
            prod: {
                options: {
                    paths: ["src/styles"],
                    cleancss: true
                },
                files: {
                    "dist/prod/styles/main.css": "src/styles/main.less"
                }
            }
        },
        copy: {
            debug: {
                src: ["src/index.html", "src/scripts/**/*.js"],
                dest: "dist/debug/"
            },
            prod: {
                src: "src/index.html",
                dest: "dist/prod/"
            }
        },
        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "dist/prod/index.html": "src/index.html"
                }
            }
        },
        uglify: {
            prod: {
                options: {
                    mangle: false
                },
                files: {
                    expand: true,
                    cwd: "src/scripts",
                    src: "**/*.js",
                    dest: "dist/prod/scripts"
                }
            }
        },
        jshint: {
            all: ["Gruntfile.js", "src/scripts/**/*.js"]
        },
        htmllint: {
            all: {
                options: {
                    force: false
                },
                src: "src/index.html"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-htmllint");

    grunt.registerTask("default", ["clean:debug", "htmllint:all", "jshint:all", "less:debug", "copy:debug"]);
    grunt.registerTask("prod", ["clean:prod", "htmllint:all", "jshint:all", "less:prod", "htmlmin:prod", "uglify:prod"]);
};

