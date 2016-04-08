(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['MessagesService', 'UserService', '$location', '$routeParams', 'ColorService'];
    function MessagesController(MessagesService, UserService, $location, $routeParams, ColorService) {
        var vm = this;
        vm.title = "Messages";
        vm.openConversation = openConversation;
        vm.messages = MessagesService.getAllMessage();
        vm.conversation = MessagesService.getConversation();
        vm.userColor = ColorService.getUserColor();
        if($routeParams.userId){
            vm.user = UserService.GetById($routeParams.userId);
        }

        function openConversation(id) {
            $location.path('/messages/'+id);
        }
    }
})();
