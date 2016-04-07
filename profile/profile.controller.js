(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', '$rootScope', 'AuthenticationService', 'UserService'] ;
    
    function ProfileController($location, $routeParams, $rootScope, AuthenticationService, UserService) {
        var vm = this;

        vm.isMyProfile = false;  ;
        
        vm.user = {};
            
        loadUserDetails();
        function loadUserDetails(){
            var indexUser = $routeParams.userId;
            vm.user = UserService.GetById(indexUser);
            
             vm.isMyProfile =  $rootScope.globals.currentUser === vm.user.id;
        }
    }

})();