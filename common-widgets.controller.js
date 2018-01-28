
(function(){
  angular.module('commonWidgets')
  .controller('CommonWidgetsController',CommonWidgetsController);

   CommonWidgetsController.$inject = ['$scope'];

  function CommonWidgetsController($scope){
    var vm = this;
    vm.options = {};
    vm.options.input = '';
    vm.options.data = ['India','Germany','United States','Ireland'];
  }

})()