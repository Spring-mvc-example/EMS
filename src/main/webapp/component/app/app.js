var ems = angular.module('ems', [ 'ngRoute' ]);

ems.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'pages/login/Login.html'
	}).when('/register', {
		templateUrl : 'pages/register/Register.html'
	}).when('/home', {
		templateUrl : 'pages/home/Home.html',
		controller: "mainController"
	}).otherwise({
		redirectTo : '/login'
	});
});

ems
		.controller(
				'mainController',
				function($scope, $http) {
					$scope.getDataFromServer = function() {
						$http(
								{
									method : 'GET',
									url : 'http://localhost:8080/Employee_Management_System/employee/getEmployee',
									headers : {
										'Content-Type' : 'application/json'
									}
								}).success(function(data, status, headers) {
							$scope.employeeInformation = data;
						}).error(function(data, status, headers) {

						});
					}
				});

/*ems
 .controller(
 "mainController",
 function($scope, $http) {
 $scope.getDataFromServer = function() {
 $http(
 {
 method : 'GET',
 url : 'http://localhost:8080/Employee_Management_System/employee/getEmployee',
 headers : {
 'Content-Type' : 'application/json'
 }
 }).success(function(data, status, headers) {
 $scope.employeeInformation = data;
 }).error(function(data, status, headers) {

 });
 }
 });*/