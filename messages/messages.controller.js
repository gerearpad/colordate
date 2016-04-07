(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = [ 'MessagesService'];
    function MessagesController(MessagesService) {
        var vm = this;
        vm.title = "Messages";
        vm.messages = MessagesService.getAllMessage();
        vm.conversation = MessagesService.getConversation();
    }
})();
