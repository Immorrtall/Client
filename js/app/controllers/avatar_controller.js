// Generated by CoffeeScript 1.10.0
(function() {
  var app;

  app = angular.module('myApp');

  app.controller('avatarCtrl', [
    '$scope', 'PhotoLoader', 'getUser', function($scope, PhotoLoader, getUser) {
      var defaultAvatar;
      defaultAvatar = '../../source/assets/img/Uq28aQt9TtY.jpg';
      $scope.imageStrings = defaultAvatar;
      getUser().then(function(data) {
        return $scope.imageStrings = data.data.avatar ? data.data.avatar.url : defaultAvatar;
      });
      $scope.processFiles = function(files) {
        angular.forEach(files, function(flowFile, i) {
          var fileReader;
          fileReader = new FileReader;
          fileReader.readAsDataURL(flowFile.file);
          fileReader.onload = function(event) {
            var uri;
            uri = event.target.result;
            $scope.imageStrings = uri;
            PhotoLoader({
              img: uri
            });
          };
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=avatar_controller.js.map