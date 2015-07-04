angular.module("vibe")

.controller("eventsCtrl", function($rootScope, $scope, $http) {
	var dateToday = new Date(),
	    dateString = dateToday.getFullYear() + "-" + (dateToday.getMonth()+1) + "-" + dateToday.getDate(),
	    repsUri = "https://reps.mozilla.org/api/v1/event/?offset=0&limit=0&start__gte=" + dateString + "&query=" + $rootScope.countryName;
	$http.jsonp(repsUri + "&callback=JSON_CALLBACK")
	    .success (function (data) {	    
	        $scope.events = data.objects;
	    })

	    .error (function (data) {
	    	$scope.data = "Request failed!";
	    });
});
