(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['MessagesService', 'UserService', '$location', '$routeParams'];
    function MessagesController(MessagesService, UserService, $location, $routeParams) {
        var vm = this;
        vm.title = "Messages";
        vm.openConversation = openConversation;
        vm.messages = MessagesService.getAllMessage();
        vm.conversation = MessagesService.getConversation();
        if($routeParams.userId){
            vm.fromId = $routeParams.userId;
            vm.user = "John2 Doe2";
        }

        function openConversation(id) {
            $location.path('/messages/'+id);
        }
    }
})();
