(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$routeParams', 'AuthenticationService', 'UserService'] ;
    
    function ProfileController($location, $routeParams, AuthenticationService, UserService) {
        var vm = this;
        
        vm.isMyProfile = false;
        
        vm.user = {};
            
        loadUserDetails();
        function loadUserDetails(){
            var indexUser = $routeParams.userId;
            UserService.GetById(indexUser).then(function(data){
                vm.user = data;                                              
            });
        }
    }

})();