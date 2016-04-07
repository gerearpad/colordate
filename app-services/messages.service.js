(function () {
    'use strict';

    angular
        .module('app')
        .factory('MessagesService', MessagesService);

    MessagesService.$inject = ['UserService'];

    function MessagesService(UserService) {
        var service = {};

        service.getAllMessage = getAllMessage;

        var messages = [
            {from:'m_1', message:'Hy man, how are you?', date:'march 04', read: false},
            {from:'m_2', message:'Hy man, how are you?', date:'march 04', read: true},
            {from:'f_1', message:'Hy man, how are you?', date:'march 04', read: false},
            {from:'f_2', message:'Hy man, how are you?', date:'march 04', read: true},
            {from:'f_3', message:'Hy man, how are you?', date:'march 04', read: false}
        ];

        return service;

        function getAllMessage(){
            return messages;
        }
    }

})();