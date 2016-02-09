var app = angular.module("EmpRegistrationModule", []);

var EmployeeController = function ($scope,$http)
{
    var url = "http://localhost:2377/api/employee";
    var onSuccess = function (response)
    {
        $scope.SuccessMessage = "Data Submited successfully"
    };

    var onError = function (reason)
    {
        $scope.ErrorMessage = "Could not load data";
    };

    $scope.SaveData = function ()
    {
        var mydata = $.param({
            "Name": $scope.name,
            "Company": $scope.company,
            "Location": $scope.location,
            "Rating": $scope.rating,
            "Language": $scope.language,
            "Salary": $scope.Salary,
            "Email": $scope.email,
            "ContactNo":$scope.contactno

        });
        $http({
            method: 'POST',
            url: url,
            data: mydata,
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }).then(onSuccess,onError);

    }
}
app.controller("EmployeeController", ["$scope", "$http", EmployeeController]);