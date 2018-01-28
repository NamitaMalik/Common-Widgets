(function() {
  angular.module('commonWidgets')
    .directive('autoComplete', autoComplete);

  function autoComplete() {
    var directive = {
      restrict: 'E',
      templateUrl: 'auto-complete.directive.html',
      scope: {
        options: '='
      },
      controller: AutoCompleteController,
      controllerAs: 'vm',
      bindToController: true
    }
    return directive;
  }

  AutoCompleteController.$inject = ['$scope', '$timeout', 'commonService'];

  function AutoCompleteController($scope, $timeout, commonService) {
    var vm = this;
    var filterTimeOutId;
    vm.initAutoComplete = initAutoComplete;
    //Listener on keyup for auto-suggestion
    function initAutoComplete() {
       //Checking if there is a previously registered timeout
       //To avoid continuous request
      if (filterTimeOutId) {
        $timeout.cancel(filterTimeOutId);
      }
      // To delay request, waiting for next keyup event
      filterTimeOutId = $timeout(function() {
        if (vm.options.input.length) {
          //Fetching countries for auto-suggestion
          commonService.getCountries(vm.options.input).then(function(response) {
            vm.data = response.data;
          })
        }
      }, 500)
    }
  }
})()
