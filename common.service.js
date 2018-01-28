(function(){
    angular.module('commonWidgets')
    .factory('commonService',commonService)

    commonService.$inject = ['$http'];
    function commonService($http){
        var service = {
            getCountries : getCountries
        }

        function getCountries(param){
            var url = 'https://restcountries.eu/rest/v2/name/'+param;
            return $http.get(url)
        }

        return service;
    }

})()