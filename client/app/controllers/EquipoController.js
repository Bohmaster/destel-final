'use strict';

angular.module('Destel')
  .controller('EquipoController', function($scope, Equipo) {
    $scope.equipos = [];
    $scope.filtro = "particular";

    $scope.getByType = function() {
      if ($scope.filtro == "particular") {
        Equipo.find({
          filter: {
            where: {
              particular: true
            }
          }
        }, function(data) {
          $scope.equipos = data;
        });
      } else {
        Equipo.find({
          filter: {
            where: {
              empresa: true
            }
          }
        }, function(data) {
          $scope.equipos = data;
        });
      }

    };

    $scope.getByType();
  });
