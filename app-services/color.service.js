(function () {
    'use strict';

    angular
        .module('app')
        .factory('ColorService', ColorService);

    ColorService.$inject = ['UserService'];

    function ColorService(UserService) {
        var service = {};

        service.getRed = getRed;
        service.getGreen = getGreen;
        service.getBlue = getBlue;
        service.getRandomColor = getRandomColor;


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
    }

})();