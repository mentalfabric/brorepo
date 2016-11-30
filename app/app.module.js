angular.module('app', [
  'templates',
  'ui.bootstrap',
  'ui.router',
  'home',
  'restaurant',
  'welcome'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
  })
  .run(function () {

  });
