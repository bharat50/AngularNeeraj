var myapp = angular.module("MyCustomerModule");
var EmpController = function ($scope) {
    $scope.Customer = { "FirstNAme": "Neeraj", "Amount": "1000" };
    $scope.CustomerCollor = { "ColorName": "" };

    //$watch - is like setter in C# property 
    $scope.$watch("Customer.Amount", function () {
        if ($scope.Customer.Amout < 1000) {
            $scope.CustomerCollor.FirstName = "Red";

        }
        else {
            $scope.CustomerCollor.FirstName = "Blue";
        }
    });
}

myapp.controller("asd", ["$scope", EmpController]);