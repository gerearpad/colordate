(function () {
    'use strict';

    angular
        .module('app')
        .controller('FavoritesController', FavoritesController);

    FavoritesController.$inject = ['UserService', '$rootScope', 'ColorService'];
    function FavoritesController(UserService, $rootScope, ColorService) {
        var vm = this;

        vm.title = 'Favorites';
        vm.user = null;
        vm.allUsers = [];
        vm.getRed = ColorService.getRed;
        vm.getGreen = ColorService.getGreen;
        vm.getBlue = ColorService.getBlue;
        vm.userColor = ColorService.getUserColor();
        //vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadAllFavorite();
        }

        //function loadCurrentUser() {
        //    UserService.GetByUsername($rootScope.globals.currentUser.username)
        //        .then(function (user) {
        //            vm.user = user;
        //        });
        //}

        function loadAllFavorite() {
            vm.favoriteUsers = UserService.GetFavorites();
            console.log(vm.favoriteUsers);
        }
    }

})();