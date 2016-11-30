module.exports = function(config) {
    var testWebpackConfig = require('./webpack/test.conf.js');

    config.set({

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: './src',

        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],

        // list of files to exclude
        exclude: [ ],

        files: [ { pattern: './specs.js', watched: false } ],

        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: { './specs.js': ['webpack', 'sourcemap'] },

        // Webpack Config at ./webpack.test.js
        webpack: testWebpackConfig,

        // Webpack please don't spam the console when running in karma!
        webpackServer: { noInfo: true },

        /*
         * test results reporter to use
         *
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: [ 'mocha' ],

        mochaReporter: {
            output: 'minimal'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            // 'Chrome',
            'PhantomJS'
        ],

        /*
         * Continuous Integration mode
         * if true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true
    });

};
