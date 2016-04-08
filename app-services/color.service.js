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


        return service;

        function getRed(color){
            console.log(color.slice(1,3));
            return '#' + color.slice(1,3) + "0000";
        }

        function getGreen(color){
            return '#00' + color.slice(3,5) + "00";
        }

        function getBlue(color){
            return '#0000' + color.slice(5,7);
        }
    }

})();