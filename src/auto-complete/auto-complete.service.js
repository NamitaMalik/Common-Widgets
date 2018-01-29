(function(){
    angular.module('autoComplete')
    .service('AutoCompleteService',AutoCompleteService)
    AutoCompleteService.$inject = ['$http'];
    function AutoCompleteService($http){
        var service = {
            getSuggestions : getSuggestions
        }
        function getSuggestions(url,param){
            var url = url+param;
            return $http.get(url)
        }
        return service;
    }
})()