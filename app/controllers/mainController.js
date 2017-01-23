angular
  .module('app')
  .controller('mainController', mainController);

  mainController.$ingect = ['$mdMedia', '$mdSidenav'];

  function mainController($mdMedia, $mdSidenav) {
    var vm = this;

    vm.toggleLeft = buildToggler('left');
    //vm.sideMenuToggle = sideMenuToggle;

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  }
