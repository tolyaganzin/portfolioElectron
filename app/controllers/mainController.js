angular
  .module('app')
  .controller('mainController', mainController);

  mainController.$ingect = ['$scope', '$mdMedia', '$mdSidenav'];

  function mainController($scope, $mdMedia, $mdSidenav) {
    var vm = this;
    vm.showAndHide = !$mdMedia('gt-sm');
    vm.toggleLeft = buildToggler('left');

    $scope.$watch(function() { return $mdMedia('gt-sm'); }, function(sm) {
      vm.showAndHide = sm;
    });

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  }
