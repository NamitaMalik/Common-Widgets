(function() {
  angular.module('autoComplete')
    .directive('autoComplete', autoComplete);

  function autoComplete() {
    var directive = {
      restrict: 'E',
      templateUrl: './src/auto-complete/auto-complete.directive.html',
      controller: AutoCompleteController,
      controllerAs: 'vm',
      scope: {
        options: '='
      },
      bindToController: true
    }
    return directive;
  }

  var KEY_UP_CODE = 38;
  var KEY_DOWN_CODE = 40;
  var ENTER_KEY_CODE = 13;
  var BACK_SPACE_KEY_CODE = 8;
  var ALPHA_NUMERIC_START_KEY_CODE = 48;
  var ALPHA_NUMERIC_END_KEY_CODE = 90;

  AutoCompleteController.$inject = ['$timeout', 'AutoCompleteService'];

  function AutoCompleteController($timeout, AutoCompleteService) {
    var vm = this;
    var filterTimeOutId;
    vm.initAutoComplete = initAutoComplete;
    vm.selectSuggestion = selectSuggestion;
    vm.selectedSuggestionIndex = -1;
    vm.data = [];
    //Listener on keyup for auto-suggestion
    //ToDo : Check for non-character keyup events
    function initAutoComplete(event) {
      //Checking if there is a previously registered timeout
      //To avoid continuous request
      if (filterTimeOutId) {
        $timeout.cancel(filterTimeOutId);
      }
      if (vm.input && vm.input.length) {
        if (vm.data.length) {
          switch (event.keyCode) {
            case KEY_DOWN_CODE:
              if (vm.selectedSuggestionIndex < vm.data.length - 1) vm.selectedSuggestionIndex++;
              break;
            case KEY_UP_CODE:
              if (vm.selectedSuggestionIndex > -1) vm.selectedSuggestionIndex--;
              break;
            case ENTER_KEY_CODE:
              vm.selectSuggestion(vm.selectedSuggestionIndex);
              break;
          }
        }

        if (event.keyCode >= ALPHA_NUMERIC_START_KEY_CODE && event.keyCode <= ALPHA_NUMERIC_END_KEY_CODE  || event.keyCode===BACK_SPACE_KEY_CODE) {
          // To delay request, waiting for next keyup event
          filterTimeOutId = $timeout(function() {
            if (vm.input && vm.input.length) {
              //Fetching countries for auto-suggestion
              AutoCompleteService.getSuggestions(vm.options.suggestionUrl, vm.input).then(function(response) {
                vm.data = response.data;
                vm.selectedSuggestionIndex = -1;
              })
            }
          }, 500)
        }
      } else vm.data.length = 0;
    }

    function selectSuggestion(selectedSuggestionIndex) {
      if (selectedSuggestionIndex !== -1) {
        vm.input = vm.data && vm.data[selectedSuggestionIndex].name;
        vm.data.length = 0;
        vm.selectedSuggestionIndex = -1;
      }
    }
  }
})()
