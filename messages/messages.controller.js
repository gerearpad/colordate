(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['MessagesService', 'UserService'];
    function MessagesController(MessagesService, UserService) {
        var vm = this;
        vm.title = "Messages";
        //vm.getDetail = UserService.getDetail;
        vm.messages = MessagesService.getAllMessage();
        vm.conversation = MessagesService.getConversation();
    }
})();
