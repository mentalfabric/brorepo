angular.module('home')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($http, $state, $uibModal, HomeService) {
    var vm = this;
    vm.openModal = openModal;

    vm.customersWaiting = HomeService.customersWaiting()
      .then( (customers) => {
        vm.customersWaiting = customers;
      });

    function openModal(){
      $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'home/modal/home_modal.html',
        controller: 'home_modal_ctrl',
        controllerAs: 'homeModalCtrl',
        size: 'sm'
      })
        .result.finally( function() {
          $state.reload();
        });
    };
  }
