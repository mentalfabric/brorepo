angular.module('app', [
  "ui.bootstrap",
  'drag',
  'templates',
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
