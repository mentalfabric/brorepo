angular.module('restaurant')
    .controller('restaurantCtrl', restaurantCtrl);

  function restaurantCtrl($http, $uibModal){
    var vm = this;

    vm.guests = '';
    vm.allTables;
    vm.getGuests = getGuests;
    vm.openModal = openModal;
    vm.getTables = getTables;
    vm.removeGuest = removeGuest;
    vm.sendMessage = sendMessage;
    vm.openTableModal = openTableModal;

    function removeGuest(phoneNumber){
      $http({
        method: 'DELETE',
        url: '/guests/cancel/' + phoneNumber
      })
        .then( result => {
          vm.getGuests();
        });
    }

    function getTables(){
      $http({
        method: "GET",
        url: "/tables/find-all-tables"
      })
        .then( tables => {
          vm.allTables = tables.data;
        });
    }
    getTables();

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

    function openModal(){
        $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'restaurant/restaurant_modal/restaurant_modal.html',
            controller: 'restaurant_modal_ctrl',
            controllerAs: 'restModalCtrl',
            size: 'md'
        })
          .result.finally( function(){
            vm.getGuests();
          });
    }

    function openTableModal(tableId){
      $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'restaurant/restaurant_modal/table_modal.html',
          controller: 'table_modal_ctrl',
          controllerAs: 'tableModalCtrl',
          size: 'lg',
          resolve: {
            table: function(){
              return tableId;
            },
            guests: function(){
              return vm.getGuests;
            },
            remove: function(){
              return vm.removeGuest;
            }
          }
      })
        .result.finally( function(){
          vm.getGuests();
        });
    }

    function sendMessage(phoneNumber){
      $http({
        method: 'GET',
        url: '/guests/table-ready/' + phoneNumber
      })
        .then( result => {
          alert('Message sent');
        });
    }
  }
