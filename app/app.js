angular
  .module('app', [
    'ngMaterial',
    'ui.router'
  ]);
  //run app
  angular
    .module('app')
    .run(runApplication);

  runApplication.$inject = ['$stateParams', '$rootScope', '$state'];

  function runApplication($stateParams, $rootScope, $state) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }
