angular.module("vibe", [])

.run(function ($rootScope) {
    $rootScope.countryName = "India"; // Your country name (Mandatory) | List of countries - http://is.gd/ZRQKky
	$rootScope.blogUrl = "//blog.mozillaindia.org"; // Community blog URL (Leave blank if you don't have one)
	$rootScope.hiveUrl = "//hive.mozillaindia.org"; // Hive URL (Leave blank if you don't have one)
	$rootScope.leaderboardUrl = "//devs.mozillaindia.org/leaderboard"; // Leaderboard URL (Leave blank if you don't have one)
});
