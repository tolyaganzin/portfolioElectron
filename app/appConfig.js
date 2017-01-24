angular
  .module('app')
    .config(configApplication);

configApplication.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider'];

function configApplication($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {
  // Extend the red theme with a different color and make the contrast color black instead of white.
  // For example: raised button text will be black instead of white.
  var myPrimaryMap = $mdThemingProvider.extendPalette('blue');
  var myAccentMap = $mdThemingProvider.extendPalette('light-blue');
  var myWarnMap = $mdThemingProvider.extendPalette('yellow');

  // Register the new color palette map with the name
  $mdThemingProvider.definePalette('myPrimary', myPrimaryMap);
  $mdThemingProvider.definePalette('myAccent', myAccentMap);
  $mdThemingProvider.definePalette('myWarn', myWarnMap);

  //Register 'myTheme'
  // Use that theme for the primary intentions and accent
  $mdThemingProvider.theme('myTheme')
    .primaryPalette('myPrimary')
    .accentPalette('myAccent')
    .warnPalette('myWarn', {
      'default': 'A700' // use shade A700 for default, and keep all other shades the same
    });


  $urlRouterProvider.otherwise('/enter');
  $stateProvider
    .state('enter', {
      url: '/enter',
      controller: 'enterController'
    })
    .state('main', {
      url:      '/main',
      abstract: true,
      templateUrl: 'app/views/mainToolbarView.html',
      controller: "mainController",
      controllerAs: "main"
    })
    .state('start', {
      url:    '/start',
      parent: 'main',
      views: {
        'content@main': {
          templateUrl:  'app/views/mainContentView.html'
        }
      }
    })
    .state('me',{
      url:    '/me',
      parent: 'main',
      views: {
        'content@main': {
          template: 'My profile state. Click on Portfolio toolbar text to go "main" state!'
        }
      }
    });
}
