'use strict';

angular.module('restaurant')
    .controller('restaurantCtrl', restaurantCtrl);
    

    function restaurantCtrl($http) {
        let vm = this;

        vm.guests;
        vm.getGuests = getGuests;
        vm.openModal = openModal;

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

    function openModal() {
        $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'restaurant/restaurant_modal/restaurant_modal.html',
            controller: 'restaurant_modal_ctrl',
            controllerAs: 'restModalCtrl',
            size: 'md'
        });
    }