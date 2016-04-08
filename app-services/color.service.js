(function () {
    'use strict';

    angular
        .module('app')
        .factory('ColorService', ColorService);

    ColorService.$inject = ['UserService', '$cookieStore'];

    function ColorService(UserService, $cookieStore) {
        var service = {};

        service.getRed = getRed;
        service.getGreen = getGreen;
        service.getBlue = getBlue;
        service.getRandomColor = getRandomColor;
        service.getUserColor = getUserColor;
        service.saveUserColor = saveUserColor;


        return service;

        function getRed(color){
            return '#' + color.slice(1,3) + "0000";
        }

        function getGreen(color){
            return '#00' + color.slice(3,5) + "00";
        }

        function getBlue(color){
            return '#0000' + color.slice(5,7);
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getUserColor(){
            var color = getRandomColor();
            if($cookieStore.get('userColor')){
                color = $cookieStore.get('userColor');              
            }else{
                saveUserColor(color);
            }
            return color;
        }

        function saveUserColor(color){
            $cookieStore.remove('userColor');
            $cookieStore.put('userColor', color);
        }
    }

})();