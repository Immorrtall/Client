// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(config) {
    return config.set({
      basePath: './',
      frameworks: ['jasmine'],
      preprocessors: {
        'spec/**/**/*.coffee': ['coffee'],
        'dist/angular-google-maps.js': ['coverage']
      },
      coverageReporter: {
        reporters: [
          {
            type: 'html',
            dir: 'dist/coverage/',
            subdir: 'dist'
          }, {
            type: 'cobertura',
            dir: 'dist/coverage/',
            subdir: 'dist'
          }
        ]
      },
      files: [
        'node_modules/phantomjs-polyfill/bind-polyfill.js', 'bower_components/lodash/lodash.js', 'bower_components/angular/angular.js', 'bower_components/angular-mocks/angular-mocks.js', 'bower_components/angular-simple-logger/dist/angular-simple-logger.min.js', 'dist/angular-google-maps.js', 'spec/coffee/bootstrap/bootstrap.coffee', 'spec/coffee/bootstrap/google-api-mock.coffee', 'spec/coffee/bootstrap/initiator.coffee', {
          pattern: '*coffee',
          included: false
        }, 'spec/coffee/**/*.spec.coffee'
      ],
      exclude: [],
      reporters: ['mocha', 'coverage'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['PhantomJS'],
      captureTimeout: 60000,
      singleRun: false,
      plugins: ['karma-mocha-reporter', 'karma-jasmine', 'karma-coverage', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coffee-preprocessor']
    });
  };

}).call(this);

//# sourceMappingURL=karma.conf.js.map