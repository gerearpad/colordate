(function () {
    'use strict';

    angular
        .module('app')
        .factory('MessagesService', MessagesService);

    MessagesService.$inject = ['UserService'];

    function MessagesService(UserService) {
        var service = {};

        service.getAllMessage = getAllMessage;
        service.getConversation = getConversation;

        var messages = [
            {from:'m_1', message:'Hy man, how are you?', date:'march 04', read: false},
            {from:'m_2', message:'Hy man, how are you?', date:'march 04', read: true},
            {from:'f_1', message:'Hy man, how are you?', date:'march 04', read: false},
            {from:'f_2', message:'Hy man, how are you?', date:'march 04', read: true},
            {from:'f_3', message:'Hy man, how are you?', date:'march 04', read: false}
        ];

        var conversation = [
            {fromme:true, message:'Hello!'},
            {fromme:false, message:'Hy! How are you?'},
            {fromme:true, message:'I\'m fine.Do you wanna go out see a moovie?'},
            {fromme:true, message:'You can choose it if you want...'},
            {fromme:false, message:'Ok, I\'m in.'},
            {fromme:false, message:'Tomorrow evening Batman vs Superman?'},
        ];

        return service;

        function getAllMessage(){
            return messages;
        }
        function getConversation(){
            return conversation;
        }
    }

})();