module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            debug: {
                files: "dist/debug/*"
            },
            prod: {
                files: "dist/prod/*"
            }
        },
        less: {
            debug: {
                options: {
                    paths: ["src/styles"]
                },
                files: {
                    cwd: "src/styles/",
                    src: "**/*.less",
                    dest: "dist/debug/styles/",
                    ext: ".css",
                    expand: true
                }
            },
            prod: {
                options: {
                    paths: ["src/styles"],
                    cleancss: true
                },
                files: {
                    cwd: "src/styles/",
                    src: "**/*.less",
                    dest: "dist/prod/styles/",
                    ext: ".css",
                    expand: true
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
        }
    });

    grunt.loadNpmTasks("grunt-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");
}

