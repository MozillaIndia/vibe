angular.module("vibe")

.controller("evangelistsCtrl", function($scope, $http) {
	$http.get("/evangelists.json")
	    .success(function (data) {
	    	$scope.evangelists = data;
	    })

	    .error (function (data) {
	    	$scope.data = "Request failed!";
	    });
});
