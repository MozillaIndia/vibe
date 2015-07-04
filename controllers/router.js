angular.module("vibe")

.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when("/events", {
		templateUrl: "/views/events.html",
		controller: "eventsCtrl"
	})

	.when("/evangelists", {
		templateUrl: "/views/evangelists.html",
		controller: "evangelistsCtrl"
	})

	.otherwise({
		redirectTo: "/events"
	})

	$locationProvider.html5Mode(true);
});
