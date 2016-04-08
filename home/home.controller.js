(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', 'ColorService'];
    function HomeController(UserService, $rootScope, ColorService) {
        var vm = this;

        vm.title = 'Matches';
        vm.user = null;
        vm.allUsers = [];
        vm.getRed = ColorService.getRed;
        vm.getGreen = ColorService.getGreen;
        vm.getBlue = ColorService.getBlue;
        //vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            vm.allUsers = UserService.GetAll();
        }
    }

})();