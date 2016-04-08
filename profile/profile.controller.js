(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', '$rootScope', 'AuthenticationService', 'UserService', 'ColorService'] ;
    
    function ProfileController($location, $routeParams, $rootScope, AuthenticationService, UserService, ColorService) {
        var vm = this;

        vm.title = "Profile";
        vm.isMyProfile = false;
        vm.getRed = ColorService.getRed;
        vm.getGreen = ColorService.getGreen;
        vm.getBlue = ColorService.getBlue;
        vm.userColor = ColorService.getUserColor();

        vm.user = {};
            
        loadUserDetails();
        function loadUserDetails(){
            var indexUser = $routeParams.userId;
            vm.user = UserService.GetById(indexUser);
            
             vm.isMyProfile =  $rootScope.globals.currentUser === vm.user.id;
        }
    }

})();