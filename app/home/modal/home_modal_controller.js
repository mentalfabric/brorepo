angular.module('home')
  .controller('home_modal_ctrl', home_modal_ctrl);

  function home_modal_ctrl($uibModalInstance, $http, HomeService) {
    let vm = this;

    vm.cancelBooking = cancelBooking;
    vm.closeModal = closeModal;

    function cancelBooking(number){
      HomeService.cancelBooking(number);
      closeModal();
    }

    function closeModal() {
      $uibModalInstance.dismiss();
    }
  }
