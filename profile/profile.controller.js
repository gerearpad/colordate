(function () {
    'use strict';

    angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', 'AuthenticationService'];
    
    function ProfileController($location, AuthenticationService) {
        var vm = this;
        
        vm.isMyProfile = true;
        
        vm.user = {};
        vm.user.firstName = 'Test name';
        vm.user.age = 21;
    }

})();