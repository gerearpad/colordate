(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
        
            .when('/profile/:userId', {
                controller: 'ProfileController',
                templateUrl: 'profile/profile.view.html',
                controllerAs: 'vm'
            })

            .when('/messages', {
                controller: 'MessagesController',
                templateUrl: 'messages/messages.view.html',
                controllerAs: 'vm'
            })

            .when('/messages/:userId', {
                controller: 'MessagesController',
                templateUrl: 'messages/message.view.html',
                controllerAs: 'vm'
            })
        
            .when('/tunnel', {
                controller: 'TunnelController',
                templateUrl: 'tunnel/tunnel.view.html',
                controllerAs: 'vm'
            })

            .when('/favorites', {
                controller: 'FavoritesController',
                templateUrl: 'favorites/favorites.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
           // var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/profile/*']) === -1;
            //var loggedIn = $rootScope.globals.currentUser;
            //if (/*restrictedPage &&*/ !loggedIn) {
                //$location.path('/login');
            //}
        });
    }

})();