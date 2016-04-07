(function () {
    'use strict';

    angular
        .module('app')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$location', 'MessagesService'];
    function MessagesController($location, MessagesService) {
        var vm = this;
        vm.messages = MessagesService.getAllMessage();
        console.log(vm.messages);
    }
})();
