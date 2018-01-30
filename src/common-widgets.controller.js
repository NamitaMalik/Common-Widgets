(function(){
  angular.module('commonWidgets')
  .controller('CommonWidgetsController',CommonWidgetsController);

   CommonWidgetsController.$inject = [];

  function CommonWidgetsController(){
    var vm = this;
    vm.country = {};
    vm.country.suggestionUrl = 'https://restcountries.eu/rest/v2/name/';
    vm.country.placeholder = 'Search Country';
  }
})()