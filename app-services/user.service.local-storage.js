(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$timeout', '$filter', '$q'];
    function UserService($timeout, $filter, $q) {

        var service = {};

        service.GetAll = GetAll;
        service.Create = Create;
        service.GetByUsername = GetByUsername;
        service.GetById = GetById;
        service.getDetail = getDetail;
        service.GetFavorites = GetFavorites;

        var users = [
            {
                id: 'm_1',
                gender: 'male',
                firstName: 'John',
                lastName: 'Doe',
                age: 28,
                hairColor: 'brown',
                eyeColor: 'brown',
                userColor: '#7288ef',
                location: 'New York',
                username: 'm_1'
            },
            {
                id: 'm_2',
                gender: 'male',
                firstName: 'Mike',
                lastName: 'Slash',
                age: 19,
                hairColor: 'brown',
                eyeColor: 'green',
                userColor: '#ee3cac',
                location: 'Washington',
                username: 'm_2'
            },
            {
                id: 'm_3',
                gender: 'male',
                firstName: 'Joe',
                lastName: 'Clark',
                age: 33,
                hairColor: 'brown',
                eyeColor: 'blue',
                userColor: '#8ff479',
                location: 'Raleigh',
                username: 'm_3'
            },
            {
                id: 'm_4',
                gender: 'male',
                firstName: 'Victor',
                lastName: 'Fox',
                age: 39,
                hairColor: 'brown',
                eyeColor: 'green',
                userColor: '#9ea957',
                location: 'London',
                username: 'm_4'
            },
            {
                id: 'm_5',
                gender: 'male',
                firstName: 'Adam',
                lastName: 'Tall',
                age: 42,
                hairColor: 'brown',
                eyeColor: 'brown',
                userColor: '#7ce7cc',
                location: 'Paris',
                username: 'm_5'
            },
            {
                id: 'm_6',
                gender: 'male',
                firstName: 'Alan',
                lastName: 'Paul',
                age: 31,
                hairColor: 'brown',
                eyeColor: 'blue',
                userColor: '#a94a7b',
                location: 'Bucharest',
                username: 'm_6'
            },
            {
                id: 'm_7',
                gender: 'male',
                firstName: 'Andy',
                lastName: 'Clay',
                age: 29,
                hairColor: 'brown',
                eyeColor: 'green',
                userColor: '#9b3f1e',
                location: 'Belgrade',
                username: 'm_7'
            },
            {
                id: 'm_8',
                gender: 'male',
                firstName: 'Chris',
                lastName: 'Wall',
                age: 31,
                hairColor: 'brown',
                eyeColor: 'green',
                userColor: '#d9eab0',
                location: 'New York',
                username: 'm_8'
            },
            {
                id: 'm_9',
                gender: 'male',
                firstName: 'Lee',
                lastName: 'Colt',
                age: 35,
                hairColor: 'brown',
                eyeColor: 'blue',
                userColor: '#4b9f8e',
                location: 'Washington',
                username: 'm_9'
            },
            {
                id: 'm_10',
                gender: 'male',
                firstName: 'Hugo',
                lastName: 'Knox',
                age: 40,
                hairColor: 'brown',
                eyeColor: 'green',
                userColor: '#76b7df',
                location: 'London',
                username: 'm_10'
            },
            {
                id: 'f_1',
                gender: 'female',
                firstName: 'Jane',
                lastName: 'Doe',
                age: 25,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#49b874',
                location: 'New York',
                username: 'f_1'
            },
            {
                id: 'f_2',
                gender: 'female',
                firstName: 'Jill',
                lastName: 'Gray',
                age: 23,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#cf5676',
                location: 'London',
                username: 'f_2'
            },
            {
                id: 'f_3',
                gender: 'female',
                firstName: 'Ella',
                lastName: 'Colt',
                age: 27,
                hairColor: 'black',
                eyeColor: 'green',
                userColor: '#135cf2',
                location: 'Paris',
                username: 'f_3'
            },
            {
                id: 'f_4',
                gender: 'female',
                firstName: 'Katie',
                lastName: 'Low',
                age: 21,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#3fa1c9',
                location: 'Bucharest',
                username: 'm_1'
            },
            {
                id: 'f_5',
                gender: 'female',
                firstName: 'Mary',
                lastName: 'Jane',
                age: 28,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#d4a358',
                location: 'New York',
                username: 'f_5'
            },
            {
                id: 'f_6',
                gender: 'female',
                firstName: 'Liza',
                lastName: 'Jones',
                age: 23,
                hairColor: 'black',
                eyeColor: 'green',
                userColor: '#51e342',
                location: 'London',
                username: 'f_6'
            },
            {
                id: 'f_7',
                gender: 'female',
                firstName: 'Anna',
                lastName: 'Cole',
                age: 30,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#8c8da6',
                location: 'Belgrade',
                username: 'f_7'
            },
            {
                id: 'f_8',
                gender: 'female',
                firstName: 'Beth',
                lastName: 'Sims',
                age: 28,
                hairColor: 'black',
                eyeColor: 'green',
                userColor: '#b1fdaf',
                location: 'Luxembourg',
                username: 'f_8'
            },
            {
                id: 'f_9',
                gender: 'female',
                firstName: 'Julie',
                lastName: 'Shaw',
                age: 32,
                hairColor: 'black',
                eyeColor: 'brown',
                userColor: '#821d03',
                location: 'Venice',
                username: 'f_9'
            },
            {
                id: 'f_10',
                gender: 'female',
                firstName: 'Daisy',
                lastName: 'Chen',
                age: 42,
                hairColor: 'black',
                eyeColor: 'blue',
                userColor: '#eea3be',
                location: 'Paris',
                username: 'test'
            }            
        ];

        return service;

        function GetAll() {
            return users;
        }

        function GetById(id) {
            var users = GetAll();

            for (var i = 0; i < users.length; i++) {
                if (id === users[i].id) {
                    return users[i];
                }
            }
            return false;
        }

        function getDetail(id, detail) {
            var users = getAll();
            for( var i=0; i<users.length; i++){
                if(users[i].id === id){
                    return users[i][detail];
                }
            }
        }

        function GetByUsername(username) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), {username: username});
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
                            deferred.resolve({
                                success: false,
                                message: 'Username "' + user.username + '" is already taken'
                            });
                        } else {
                            var users = getUsers();

                            // assign id
                            var lastUser = users[users.length - 1] || {id: 0};
                            user.id = lastUser.id + 1;

                            // save to local storage
                            users.push(user);
                            setUsers(users);

                            deferred.resolve({success: true});
                        }
                    });
            }, 0);

            return deferred.promise;
        }

        // private functions

        function getUsers() {
            if (!localStorage.users) {
                localStorage.users = JSON.stringify([]);
            }

            return JSON.parse(localStorage.users);
        }

        function setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }

        function GetFavorites() {
            return [users[1], users[4], users[6], users[7]];
        }
    }
})();