// Generated by CoffeeScript 1.10.0
(function() {
  var app;

  app = angular.module('myApp');

  app.service('TranslationService', function(langFactory) {
    this.translation = null;
    this.changeLanguage = function(lang) {
      this.translation = langFactory(lang);
    };
  });

}).call(this);

//# sourceMappingURL=TranslationService.js.map
