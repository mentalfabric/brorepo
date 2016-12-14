angular.module('restaurant')
    .controller('restaurant_modal_ctrl', restaurant_modal_ctrl);

function restaurant_modal_ctrl($uibModalInstance, $http) {
    let vm = this;

    vm.addGuest = addGuest;
    vm.closeModal = closeModal;

    function addGuest(fname,lname, phone, email, party, pref, instructions) {
        $http({
            method: "POST",
            url: "/guests/newGuest",
            data: {
                fname: fname,
                lname: lname,
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
