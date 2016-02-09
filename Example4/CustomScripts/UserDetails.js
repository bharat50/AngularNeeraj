var userDetails = angular.module("EmpRegistrationModule");
var userDetailsController = function ($scope, $http,$interval,$log,$anchorScroll,$location,mycustomhub) {
    //Calling rest Get method to fetch the userName
    var url = "http://localhost:2377/api/employee/Neeraj";
    var onSuccess = function (response) {
        $scope.user = response.data;
        //Chain of promises
        $http.get("http://localhost:2377/api/employee").then(onAllEmpDetails, onError);
    }

    //-------------
    //onSuccess1 - mycustomhub - dependency injection used and service return data not the response
    var onSuccess1 = function (data) {
        $scope.user = data;
        //Chain of promises
        mycustomhub.getEmployees().then(onAllEmpDetails1, onError);
    }
    var onAllEmpDetails1 = function (data) {
        $scope.allemps = data;
        $location.hash("searchResultDiv"); //Find which location
        $anchorScroll();//Scorll until the hash tag is not found
    }

    //-------------

    var onAllEmpDetails = function (response) {
        $scope.allemps = response.data;
        $location.hash("searchResultDiv"); //Find which location
        $anchorScroll();//Scorll until the has tag is not found
    }
    var onError = function (reason)
    {
        $scope.ErrorMessage = "Could not fetch Employee";
    }
    $scope.searchbyname = function (firstname) {
        url = "http://localhost:2377/api/employee/" + firstname;
        if (countDownInterval) {
            $log.info("Searching for: " + firstname);
            //$http.get(url).then(onSuccess, onError); //to run using http service directly
            mycustomhub.getEmp(firstname).then(onSuccess1, onError); //To run dependency injection ex
            $interval.cancel(countDownInterval);
            $scope.countDown = null;
        }
    }
    $scope.sortemployeeby = "-Salary";  
    $scope.countDown = 10;
    var countDownInterval = null;
    var begingcountDown = function () {
        countDownInterval=  $interval(decrementInterval, 1000, $scope.countDown);
    }
    var decrementInterval = function () {
        $scope.countDown -= 1;
        if ($scope.countDown < 1) { $scope.searchbyname($scope.firstname); }
    }
    //$http.get(url).then(onSuccess, onError); //to run using http service directly
    $http.get(url).then(onSuccess1, onError);//To run dependency injection ex
    begingcountDown();
}
userDetails.controller("userDetailsController", ["$scope", "$http",'$interval','$log','$anchorScroll','$location','mycustomhub', userDetailsController]);