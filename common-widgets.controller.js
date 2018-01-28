(function(){
  angular.module('commonWidgets')
  .controller('CommonWidgetsController',CommonWidgetsController);

   CommonWidgetsController.$inject = [];

  function CommonWidgetsController(){
    var vm = this;
    vm.options = {};
    vm.options.suggestionUrl = 'https://restcountries.eu/rest/v2/name/';
  }
})()