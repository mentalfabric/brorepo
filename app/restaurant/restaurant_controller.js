'use strict';

angular.module('restaurant')
    .controller('restaurantCtrl', restaurantCtrl);

    function restaurantCtrl($http) {
        let vm = this;

        vm.guests;
        vm.getGuests = getGuests;
        vm.removeGuest = removeGuest;

        function removeGuest(phoneNumber){
          $http({
            method: 'DELETE',
            url: '/guests/cancel/' + phoneNumber
          })
            .then( result => {
              getGuests();
            });
        }

        function getGuests(){
            $http({
                method: "GET",
                url: "/guests"
            })
                .then( result => {
                    vm.guests = result.data;
                });
        }
        vm.getGuests();
    }
