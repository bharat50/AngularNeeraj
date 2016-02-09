/*three steps
Create Module
Create controller class with in the module
Register Controller
*/
//Moduel - MyCustomerModule - kind of a namespace

var myapp = angular.module("MyCustomerModule", []);
 
//Class - CustomerController - we can have multiple controller with in a module
var CustomerController=function($scope)
{
    $scope.Customer={"FirstName":"Neeraj", "Amount":"999"};
    $scope.CustomerCollor = { "ColorName": "" };

    //$watch - is like setter in C# property
    //$wath - According to me is subscribing the property in KO
    $scope.$watch("Customer.Amount",function(){
        if($scope.Customer.Amount<1000)	
        {
            $scope.CustomerCollor.ColorName = "Red";
	
        }
        else
        {
            $scope.CustomerCollor.ColorName = "Blue";
        }
    });
}

myapp.controller("CustomerController",["$scope",CustomerController]);