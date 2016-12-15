angular.module('restaurant')
  .controller('table_modal_ctrl', table_modal_ctrl);

  function table_modal_ctrl($uibModalInstance, $http, table, guests, remove){
    var vm = this;

    vm.selectedGuest;
    vm.allGuests;
    vm.dropdownValue = 0;
    vm.getGuests = getGuests;
    vm.selectGuest = selectGuest;
    vm.removeGuest = remove;
    vm.selectedTable = table;
    vm.setTable = setTable;
    vm.closeModal = closeModal;
    vm.toggleDropdown = toggleDropdown;

    function getGuests(){
        $http({
            method: "GET",
            url: "/guests"
        })
            .then( result => {
                vm.allGuests = result.data;
            });
    }
    vm.getGuests();

    function setTable(){
      $http({
        method: "PUT",
        url: "tables/change-availability",
        data: {
          tableId: vm.selectedTable
        }
      })
        .then( result => {
          console.log(result.data.available);
          remove(vm.selectedGuest.phone);
          closeModal();
        });
    }

    function toggleDropdown(){
      if (!vm.dropdownValue) {
        vm.dropdownValue = 1;
      } else vm.dropdownValue = 0;
    }

    function selectGuest(guest){
      vm.selectedGuest = guest;
    }

    function closeModal(){
      $uibModalInstance.dismiss();
    }
  }
