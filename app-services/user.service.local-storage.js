﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$timeout', '$filter', '$q'];
    function UserService($timeout, $filter, $q) {

        var service = {};

        service.GetAll = GetAll;
        service.Create = Create;
        //service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        //service.Update = Update;

        return service;

        function GetAll() {
            var users = [
                {gender:'male', firstName: 'John', lastName: 'Doe', age: 31, hairColor: 'brown', eyeColor: 'green', userColor:'#3f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John1', lastName: 'Doe1', age: 21, hairColor: 'brown', eyeColor: 'green', userColor:'#4f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John2', lastName: 'Doe2', age: 41, hairColor: 'brown', eyeColor: 'green', userColor:'#5f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John3', lastName: 'Doe3', age: 33, hairColor: 'brown', eyeColor: 'green', userColor:'#6f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John4', lastName: 'Doe4', age: 24, hairColor: 'brown', eyeColor: 'green', userColor:'#7f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John5', lastName: 'Doe5', age: 43, hairColor: 'brown', eyeColor: 'green', userColor:'#8f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John6', lastName: 'Doe6', age: 37, hairColor: 'brown', eyeColor: 'green', userColor:'#9f61c9', location:'NewYork'},
                {gender:'male', firstName: 'John7', lastName: 'Doe7', age: 27, hairColor: 'brown', eyeColor: 'green', userColor:'#af61c9', location:'NewYork'},
                {gender:'male', firstName: 'John8', lastName: 'Doe8', age: 25, hairColor: 'brown', eyeColor: 'green', userColor:'#bf61c9', location:'NewYork'},
                {gender:'male', firstName: 'John9', lastName: 'Doe9', age: 39, hairColor: 'brown', eyeColor: 'green', userColor:'#cf61c9', location:'NewYork'},
                {gender:'male', firstName: 'John10', lastName: 'Doe10', age: 40, hairColor: 'brown', eyeColor: 'green', userColor:'#df61c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane', lastName: 'Doe', age: 22, hairColor: 'black', eyeColor: 'brown', userColor:'#ef61c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane1', lastName: 'Doe1', age: 26, hairColor: 'black', eyeColor: 'brown', userColor:'#ff61c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane2', lastName: 'Doe2', age: 32, hairColor: 'black', eyeColor: 'brown', userColor:'#3281c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane3', lastName: 'Doe3', age: 42, hairColor: 'black', eyeColor: 'brown', userColor:'#3ff1c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane4', lastName: 'Doe4', age: 35, hairColor: 'black', eyeColor: 'brown', userColor:'#3fa1c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane5', lastName: 'Doe5', age: 42, hairColor: 'black', eyeColor: 'brown', userColor:'#3f01c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane6', lastName: 'Doe6', age: 36, hairColor: 'black', eyeColor: 'brown', userColor:'#3f11c9', location:'NewYork'},
                {gender:'female', firstName: 'Jane7', lastName: 'Doe7', age: 41, hairColor: 'black', eyeColor: 'brown', userColor:'#3f61d9', location:'NewYork'},
                {gender:'female', firstName: 'Jane8', lastName: 'Doe8', age: 30, hairColor: 'black', eyeColor: 'brown', userColor:'#3f6109', location:'NewYork'},
                {gender:'female', firstName: 'Jane9', lastName: 'Doe9', age: 29, hairColor: 'black', eyeColor: 'brown', userColor:'#3f6119', location:'NewYork'},
                {gender:'female', firstName: 'Jane10', lastName: 'Doe10', age: 27, hairColor: 'black', eyeColor: 'brown', userColor:'#3f6a49', location:'NewYork'}
            ];

            return users;
        }

        //function GetById(id) {
        //    var deferred = $q.defer();
        //    var filtered = $filter('filter')(getUsers(), { id: id });
        //    var user = filtered.length ? filtered[0] : null;
        //    deferred.resolve(user);
        //    return deferred.promise;
        //}

        function GetByUsername(username) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { username: username });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
        }

        function Create(user) {
            var deferred = $q.defer();

            // simulate api call with $timeout
            $timeout(function () {
                GetByUsername(user.username)
                    .then(function (duplicateUser) {
                        if (duplicateUser !== null) {
                            deferred.resolve({ success: false, message: 'Username "' + user.username + '" is already taken' });
                        } else {
                            var users = getUsers();

                            // assign id
                            var lastUser = users[users.length - 1] || { id: 0 };
                            user.id = lastUser.id + 1;

                            // save to local storage
                            users.push(user);
                            setUsers(users);

                            deferred.resolve({ success: true });
                        }
                    });
            }, 1000);

            return deferred.promise;
        }

        //function Update(user) {
        //    var deferred = $q.defer();
        //
        //    var users = getUsers();
        //    for (var i = 0; i < users.length; i++) {
        //        if (users[i].id === user.id) {
        //            users[i] = user;
        //            break;
        //        }
        //    }
        //    setUsers(users);
        //    deferred.resolve();
        //
        //    return deferred.promise;
        //}

        //function Delete(id) {
        //    var deferred = $q.defer();
        //
        //    var users = getUsers();
        //    for (var i = 0; i < users.length; i++) {
        //        var user = users[i];
        //        if (user.id === id) {
        //            users.splice(i, 1);
        //            break;
        //        }
        //    }
        //    setUsers(users);
        //    deferred.resolve();
        //
        //    return deferred.promise;
        //}

        // private functions

        function getUsers() {
            if(!localStorage.users){
                localStorage.users = JSON.stringify([]);
            }

            return JSON.parse(localStorage.users);
        }

        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }
    }
})();