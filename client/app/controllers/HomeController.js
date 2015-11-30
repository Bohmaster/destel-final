'use strict';

angular.module('Destel')
  .controller('HomeController', function($scope, Slider, Destacado, Faja, Promotion, SeccionX) {

    $scope.seccion = [];

    SeccionX.find(function(data) {
      $scope.seccion = data;
      console.log('asd', $scope.seccion);
    });

    $scope.goToAdmin = function() {
      var password = prompt('Ingrese el password de area');

      if (password == "admin") {
        window.location.assign('http://localhost:3000/admin');
      }
    };

    $scope.title = "Destel Norte";

    // Initialization

    $scope.iteration = 3;

    $scope.sliders = [];

    $scope.fajas = [];

    $scope.destacados_dni = [];

    loadSliders();

    loadDestacados();

    loadFajas();

    loadPromos();

    // Loaders

    function loadSliders() {
      Slider.find(function(data) {
        $scope.sliders = data;
        console.log(data);
      });
    }

    function loadDestacados() {
      Destacado.find({
        filter: {
          where: {
            categoriaId: 1
          },
          limit: 2,
          order: 'id DESC'
        }},
      function(data) {
        $scope.destacados_dni = data;
        console.log(1, $scope.destacados_dni);
      });
      Destacado.find({
          filter: {
            where: {
              categoriaId: 2
            },
            limit: 2,
            order: 'id DESC'
          }},
        function(data) {
          $scope.destacados_veni = data;
          console.log(2, data);
        });

      console.log($scope.destacados);
    }
    Destacado.find({
        filter: {
          where: {
            categoriaId: 3
          },
          limit: 2,
          order: 'id DESC'
        }},
      function(data) {
        $scope.destacados_cuit = data;
        console.log(3, data);
      });

    function loadFajas() {
      Faja.find(function (data) {
        $scope.fajas = data;
        console.log(data);
      });

    }

    function loadPromos() {
      Promotion.find(function (data) {
        $scope.promos = data;
        console.log(data);
      });

    }

  });
