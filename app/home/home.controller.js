
angular.module('home')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($http, $state) {
    var vm = this;

    vm.cancelBooking = cancelBooking;

    function cancelBooking(number){
      $http({
        method: "DELETE",
        url: "/guests/cancel/" + number
      })
        .then( () => {
          $state.reload();
        });
    }

    vm.customersWaiting = $http({
      method: "GET",
      url: "/guests"
    })
      .then( users => {
        vm.customersWaiting = users.data;
      });

    vm.tables = $http({
      method: "GET",
      url: "/tables/find-all-tables"
    })
      .then( tables => {
        vm.tables = tables.data;
      });
  }
