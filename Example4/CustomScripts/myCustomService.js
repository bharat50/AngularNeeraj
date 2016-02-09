(function () {
    var mycustomhub = function ($http) {
        var url = "http://localhost:2377/api/employee/";
        var getemp = function (username) {
            return $http.get(url + username).then(function (response) {
                return response.data
            });
        };

        var getemployees = function () {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };

        return {
            getEmp: getemp,
            getEmployees: getemployees
        };

    };
    var module = angular.module('EmpRegistrationModule');
    module.factory("mycustomhub", mycustomhub);
}());
/*
imedetially fire function initiation
Dependency Injection
we've created our own service that will be used to make http call and thus the http call will go off 
from the modules

*/