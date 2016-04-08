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
            {from:'m_1', user:'John1 Doe1', message:'Hi man, how are you?', date:'04/01/2016', read: false},
            {from:'m_2', user:'John2 Doe2', message:'Ok, see you later', date:'03/22/2016', read: true},
            {from:'f_1', user:'John3 Doe3', message:'Yes, it\'s fine by me', date:'03/12/2016', read: true},
            {from:'f_2', user:'John5 Doe5', message:'Oh, really?', date:'02/15/2016', read: true},
            {from:'f_3', user:'John4 Doe4', message:'That is so cool', date:'01/31/2016', read: false}
        ];

        var conversation = [
            {fromme:true, message:'Hello!'},
            {fromme:false, message:'Hi! How are you?'},
            {fromme:true, message:'I\'m fine.Do you wanna go out see a movie?'},
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