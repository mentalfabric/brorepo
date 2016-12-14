angular.module('restaurant', []);

angular.module('restaurant')
  .config(function($stateProvider){
      $stateProvider
        .state('restaurant', {
          url: '/restaurant',
          templateUrl: "restaurant/restaurant.html",
          controller: 'restaurantCtrl',
          controllerAs: 'restaurantCtrl',
          css: '../less/restaurant.less'
        });
    });
