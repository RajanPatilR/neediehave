needieHave.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../templates/_partialHome.html'
        })
}]);
