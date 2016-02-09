(function () {
    var Module = angular.module("MyModule", ["ngRoute"]);
    //when we use ngRoute directive then $routeProvider is provided
    Module.config(function ($routeProvider) {
        $routeProvider.when("/Home",
            {
                templateUrl: "/Editor.html",
                controller:HomeController

            }).when("/About", {
                templateUrl: "/AboutUs.html",
                controller: HomeController

            }).when("/Default", {
                templateUrl: "/Default.html",
                controller: HomeController

            }).otherwise({redirectTo:"/Default"});
    });

}());