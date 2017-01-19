angular
  .module('app')
    .config(configApplication);

configApplication.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider'];

function configApplication($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    .state('main',{
      url: '/main',
      template: 'main state'
    });
}
