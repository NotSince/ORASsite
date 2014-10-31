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
                    "dist/debug/styles/main.css": "src/styles/main.less"
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

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("default", ["clean:debug", "less:debug", "copy:debug"]);
}

