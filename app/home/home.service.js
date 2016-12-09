angular.module('home')
  .service('HomeService', HomeService);

  function HomeService($state, $http){
    var vm = this;
    vm.data;

    vm.cancelBooking = (number) => {
      $http({
        method: "DELETE",
        url: "/guests/cancel/" + number
      })
        .then( () => {
          $state.reload();
        });
    }

    vm.customersWaiting = () => {
      return $http({
        method: "GET",
        url: "/guests"
      })
      .then( users => {
        vm.data = users.data;
        return vm.data;
      });
    }
    
  }
