angular.module("vibe")

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise("/events");
	$locationProvider.html5Mode(true);

	$stateProvider
	.state("events", {
		url: "/events",
		templateUrl: "/views/events.html",
		controller: "eventsCtrl"
	})

	.state("evangelists", {
		url: "/evangelists",
		templateUrl: "/views/evangelists.html",
		controller: "evangelistsCtrl"
	});

});
