// Generated by CoffeeScript 1.10.0
(function() {
  var app;

  app = angular.module('myApp');

  app.factory('getUser', function($http) {
    return function(id) {
      if (id) {
        return $http.get('http://localhost:3000/user/' + id);
      } else {
        return $http.get('http://localhost:3000/currentUser');
      }
    };
  });

}).call(this);

//# sourceMappingURL=getUser.js.map
