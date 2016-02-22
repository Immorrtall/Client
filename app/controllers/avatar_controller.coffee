app = angular.module('myApp')

app.controller 'avatarCtrl',['$scope', 'PhotoLoader', 'getUser',($scope, PhotoLoader,getUser ) ->
  defaultAvatar = '../../source/assets/img/Uq28aQt9TtY.jpg'
  $scope.imageStrings = defaultAvatar
  getUser().then (data) ->
    $scope.imageStrings = if data.data.avatar then data.data.avatar.url else defaultAvatar

  $scope.processFiles = (files) ->
    angular.forEach files, (flowFile, i) ->

      fileReader = new FileReader
      fileReader.readAsDataURL flowFile.file
      fileReader.onload = (event) ->
        uri = event.target.result
        $scope.imageStrings = uri
        PhotoLoader({img:uri})

        return
      return
    return
  return
]