Vibe
====

The bottom-up from-the-scratch events' portal for MozillaIndia.org

## How to deploy Vibe for your comunity

- Fork the repo
- Edit the config.js file

For example, to deploy Vibe for german community (which lists the future events happening in Germany)

```
.run(function ($rootScope) {
    $rootScope.countryName = "Germany";
    $rootScope.blogUrl = "";
    $rootScope.hiveUrl = "";
    $rootScope.leaderboardUrl = "";
});
```

>Note: This is deployed in github pages
