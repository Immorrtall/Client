// Generated by CoffeeScript 1.10.0
(function() {
  var app;

  app = angular.module('myApp');

  app.directive('dropDirective', [
    'ImageService', function(ImageService) {
      return {
        restrict: 'AE',
        link: function(scope, elem) {
          elem.bind('dragenter', function(event) {
            elem.textContent = '';
            event.stopPropagation();
            event.preventDefault();
          });
          elem.bind('dragover', function(event) {
            event.stopPropagation();
            event.preventDefault();
          });
          elem.bind('drop', function(event) {
            var dt, f, files, i, reader;
            event.stopPropagation();
            event.preventDefault();
            dt = event.dataTransfer || event.originalEvent && event.originalEvent.dataTransfer;
            files = event.target.files || dt && dt.files;
            i = 0;
            f = void 0;
            while (f = files[i]) {
              reader = new FileReader;
              reader.readAsDataURL(f);
              reader.onload = (function(theFile) {
                return function(e) {
                  var newFile;
                  newFile = {
                    name: theFile.name,
                    type: theFile.type,
                    size: theFile.size,
                    lastModifiedDate: theFile.lastModifiedDate
                  };
                  ImageService.imagelist.pop();
                  ImageService.imagelist.push({
                    stats: newFile,
                    file: theFile,
                    URL: URL.createObjectURL(theFile),
                    base64: reader.result
                  });
                  ImageService.image = ImageService.imagelist[ImageService.imagelist.length - 1];
                  scope.$apply();
                };
              })(f);
              i++;
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=dropDirective.js.map
