var myApp = angular.module('myApp');

var URL_BASE = "http://localhost:3000/api/";

myApp.directive('inspect', function() {
  return {
    restrict: 'EA',
    controller: function($scope) {
      console.log($scope);
    }
  }
});

myApp.directive("upload", function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/fileUpload.html',
    controller: function($rootScope, $scope) {

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.upload = function() {

        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({

          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            $scope.entry.values['image'] = $scope.files[0].name;
          }

        });

      }

    }

  }

});

myApp.directive("cuadroUno", function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/fileUpload.html',
    controller: function($rootScope, $scope) {

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.upload = function() {

        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({

          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            $scope.entry.values['cuadro_1'] = $scope.files[0].name;
          }

        });

        console.log($scope.entry);

      }

    }

  }

});

myApp.directive("cuadroDos", function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/fileUpload.html',
    controller: function($rootScope, $scope) {

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.upload = function() {

        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({

          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            $scope.entry.values['cuadro_2'] = $scope.files[0].name;
          }

        });

        console.log($scope.entry);

      }

    }

  }

});

myApp.directive("cuadroTres", function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/fileUpload.html',
    controller: function($rootScope, $scope) {

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.upload = function() {

        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({

          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            $scope.entry.values['cuadro_3'] = $scope.files[0].name;
          }

        });

        console.log($scope.entry);

      }

    }

  }

});

myApp.directive("cuadroCuatro", function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/fileUpload.html',
    controller: function($rootScope, $scope) {

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.upload = function() {

        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({

          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            $scope.entry.values['cuadro_4'] = $scope.files[0].name;
          }

        });

        console.log($scope.entry);

      }

    }

  }

});

myApp.directive('imagen', function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/image.html',
    link: function(scope, elm, attrs) {
      scope.data = attrs.data;
      console.log(scope);
    }
  }
});

myApp.directive('compiles', function($compile) {
  return {
    restrict: 'A',
    compile: function(elem, attrs) {

      var x = attrs.compiles;
      var y = "<span>" + x + "</span>";

      attrs.compiles = y;

      return function postLink(scope, elem, attrs) {

        attrs.$observe('compiles', function(value) {

          console.log(value);

          var linkFn = $compile(value);
          var content = linkFn(scope);
          elem.append(content);

        });

      }
    }

  }
});

myApp.directive('bloques', function() {
  return {
    restrict: 'EA',
    templateUrl: 'fields/blocks.html',
    controller: function($scope, Bloque) {

      $scope.bloques = [];

      loadBlocks();

      $scope.onFileSelect = function($files) {

        console.log("File/s selected", $files);

        $scope.files = $files;

        console.log($scope);

        console.log($scope.files);

      };

      $scope.addBlock = function() {
        var formData = new FormData();

        // formData.append("categoryId", $scope.entry.values['id']);
        console.log($scope.files);

        for (var index in $scope.files) {
          console.log(index);
          var file = $scope.files[index];
          formData.append('file', file);
        }

        $.ajax({
          url: URL_BASE + 'containers/images/upload',
          type: 'POST',
          data: formData,
          processData: false,  // tell jQuery not to process the data
          contentType: false,  // tell jQuery not to set contentType
          success : function(data) {
            console.log(data);
            Bloque.create({
              image: $scope.files[0].name,
              seccionXId: $scope.entry.values['id']
            }, function(data) {
              console.log(data);
              loadBlocks();
            }, function(err) {
              console.log(err);
            });
          }
        });

        console.log($scope.entry);
      };

      $scope.removeBlock = function(id) {
        Bloque.deleteById({
          id: id
        }, function(data) {
          console.log(data);
          loadBlocks();
        });
      };

      function loadBlocks() {
        Bloque.find({
          filter: {
            where: {
              seccionXId: $scope.entry.values['id']
            }
          }
        }, function(data) {
          $scope.bloques = data;
        });
      }

    }
  }
});
