(function() {
  angular.module('autoComplete')
    .directive('autoComplete', autoComplete);

  function autoComplete() {
    var directive = {
      restrict: 'E',
      templateUrl: './auto-complete/auto-complete.directive.html',
      controller: AutoCompleteController,
      controllerAs: 'vm',
      scope: {
        options : '=options'
      },
      bindToController: true
    }
    return directive;
  }

  AutoCompleteController.$inject = ['$scope', '$timeout', 'AutoCompleteService'];

  function AutoCompleteController($scope, $timeout, AutoCompleteService) {
    var vm = this;
    var filterTimeOutId;
    vm.initAutoComplete = initAutoComplete;
    //Listener on keyup for auto-suggestion
    //ToDo : Check for non-character keyup events, for eg. arrow keyup event
    function initAutoComplete() {
       //Checking if there is a previously registered timeout
       //To avoid continuous request
      if (filterTimeOutId) {
        $timeout.cancel(filterTimeOutId);
      }
      // To delay request, waiting for next keyup event
      filterTimeOutId = $timeout(function() {
        if (vm.input.length) {
          //Fetching countries for auto-suggestion
          AutoCompleteService.getSuggestions(vm.options.suggestionUrl,vm.input).then(function(response) {
            vm.data = response.data;
          })
        }
      }, 500)
    }
  }
})()
