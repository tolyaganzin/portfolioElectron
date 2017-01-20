angular
  .module('app')
  .controller('enterController', enterController);

  enterController.$ingect = ['$state'];

  function enterController($state) {
    $state.go('start');
  }
