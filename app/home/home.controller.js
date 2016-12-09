angular.module('home')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($http, $state, HomeService) {
    var vm = this;
    $scope.showModal = false;

    vm.cancelBooking = cancelBooking;
    vm.customersWaiting = HomeService.customersWaiting()
      .then( (customers) => {
        vm.customersWaiting = customers;
      });

    function cancelBooking(number){
      HomeService.cancelBooking(number);
    }

    vm.openModal = () => {
      $scope.showModal = !$scope.showModal;
    }

    // home.cancelBooking(guest.phone)
    
    // vm.tables = $http({
    //   method: "GET",
    //   url: "/tables/find-all-tables"
    // })
    //   .then( tables => {
    //     vm.tables = tables.data;
    //   });
  }
