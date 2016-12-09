'use strict';

angular.module('restaurant_modal')
    .controller('restaurant_modal_ctrl', restaurant_modal_ctrl);

function restaurant_modal_ctrl($uibModalInstance, $http) {
    vm.addGuest = addGuest;
    vm.closeModal = closeModal;

    function addGuest($http) {
        $http({
            method: "POST",
            url: "/guests/newGuest",
            data: {
                name: name,
                phone: phone,
                email: email,
                numberOfPeople: party,
                preference: pref,
                special_instructions: instructions
            }
        })
            .then( reason => {
                vm.closeModal();
            });
    }

    function closeModal(){
        $uibModalInstance.dismiss();
    }
}