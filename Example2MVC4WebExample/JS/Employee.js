var app = angular.module("EmployeeModule", []);
var EmployeeController = function ($scope, $http)
{   
    var url = "http://localhost:1782/api/employee";
    var onSuccess = function (response) {
        $scope.employeedata = response.data;
    }
    var onError = function (reason)
    {
        $scope.errormessage = "Could not load data";
    }
        $scope.GetDataFromDB = function () {
        $http.get(url).then(onSuccess, onError);
        //or use
        /*
        $http({
            method: 'GET',
            url: url           
        });
        */

    }

    $scope.SaveData = function () {
        //To serialize data in javascript we use param
        //the format we specify - here in this case is json
        //param - given Column Names check the spacing
        var mydata=$.param({"FirstName": $scope.empFName, "City": $scope.empCity});
        $http({
            method: 'POST',
            url: url,
            data: mydata,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        })
    }

}

app.controller("EmployeeController", ["$scope", "$http", EmployeeController]);
