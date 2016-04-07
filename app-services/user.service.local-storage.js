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

        return service;

        function GetAll() {
            var users = [
                {
                    id: 'm_1',
                    gender: 'male',
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 28,
                    hairColor: 'brown',
                    eyeColor: 'brown',
                    userColor: '#4f61c9',
                    location: 'New York'
                },
                {
                    id: 'm_2',
                    gender: 'male',
                    firstName: 'Mike',
                    lastName: 'Webb',
                    age: 32,
                    hairColor: 'brown',
                    eyeColor: 'green',
                    userColor: '#5f61c9',
                    location: 'Washington'
                },
                {
                    id: 'm_3',
                    gender: 'male',
                    firstName: 'Joe',
                    lastName: 'Clark',
                    age: 33,
                    hairColor: 'brown',
                    eyeColor: 'blue',
                    userColor: '#6f61c9',
                    location: 'Raleigh'
                },
                {
                    id: 'm_4',
                    gender: 'male',
                    firstName: 'Victor',
                    lastName: 'Fox',
                    age: 24,
                    hairColor: 'brown',
                    eyeColor: 'green',
                    userColor: '#7f61c9',
                    location: 'London'
                },
                {
                    id: 'm_5',
                    gender: 'male',
                    firstName: 'Adam',
                    lastName: 'Tall',
                    age: 36,
                    hairColor: 'brown',
                    eyeColor: 'brown',
                    userColor: '#8f61c9',
                    location: 'Paris'
                },
                {
                    id: 'm_6',
                    gender: 'male',
                    firstName: 'Alan',
                    lastName: 'Paul',
                    age: 37,
                    hairColor: 'brown',
                    eyeColor: 'blue',
                    userColor: '#9f61c9',
                    location: 'Bucharest'
                },
                {
                    id: 'm_7',
                    gender: 'male',
                    firstName: 'Andy',
                    lastName: 'Clay',
                    age: 29,
                    hairColor: 'brown',
                    eyeColor: 'green',
                    userColor: '#af61c9',
                    location: 'Belgrade'
                },
                {
                    id: 'm_8',
                    gender: 'male',
                    firstName: 'Chris',
                    lastName: 'Wall',
                    age: 31,
                    hairColor: 'brown',
                    eyeColor: 'green',
                    userColor: '#bf61c9',
                    location: 'New York'
                },
                {
                    id: 'm_9',
                    gender: 'male',
                    firstName: 'Lee',
                    lastName: 'Colt',
                    age: 35,
                    hairColor: 'brown',
                    eyeColor: 'blue',
                    userColor: '#cf61c9',
                    location: 'Washington'
                },
                {
                    id: 'm_10',
                    gender: 'male',
                    firstName: 'Hugo',
                    lastName: 'Knox',
                    age: 40,
                    hairColor: 'brown',
                    eyeColor: 'green',
                    userColor: '#df61c9',
                    location: 'London'
                },
                {
                    id: 'f_1',
                    gender: 'female',
                    firstName: 'Jane',
                    lastName: 'Doe',
                    age: 32,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#ff61c9',
                    location: 'New York'
                },
                {
                    id: 'f_2',
                    gender: 'female',
                    firstName: 'Jill',
                    lastName: 'Gray',
                    age: 30,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#3281c9',
                    location: 'London'
                },
                {
                    id: 'f_3',
                    gender: 'female',
                    firstName: 'Ella',
                    lastName: 'Colt',
                    age: 32,
                    hairColor: 'black',
                    eyeColor: 'green',
                    userColor: '#3ff1c9',
                    location: 'Paris'
                },
                {
                    id: 'f_4',
                    gender: 'female',
                    firstName: 'Katie',
                    lastName: 'Low',
                    age: 31,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#3fa1c9',
                    location: 'Bucharest'
                },
                {
                    id: 'f_5',
                    gender: 'female',
                    firstName: 'Mary',
                    lastName: 'Jane',
                    age: 34,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#3f01c9',
                    location: 'New York'
                },
                {
                    id: 'f_6',
                    gender: 'female',
                    firstName: 'Liza',
                    lastName: 'Jones',
                    age: 29,
                    hairColor: 'black',
                    eyeColor: 'green',
                    userColor: '#3f11c9',
                    location: 'London'
                },
                {
                    id: 'f_7',
                    gender: 'female',
                    firstName: 'Anna',
                    lastName: 'Cole',
                    age: 26,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#3f61d9',
                    location: 'Belgrade'
                },
                {
                    id: 'f_8',
                    gender: 'female',
                    firstName: 'Beth',
                    lastName: 'Sims',
                    age: 30,
                    hairColor: 'black',
                    eyeColor: 'green',
                    userColor: '#3f6109',
                    location: 'Luxembourg'
                },
                {
                    id: 'f_9',
                    gender: 'female',
                    firstName: 'Julie',
                    lastName: 'Shaw',
                    age: 29,
                    hairColor: 'black',
                    eyeColor: 'brown',
                    userColor: '#3f6119',
                    location: 'Venice'
                },
                {
                    id: 'f_10',
                    gender: 'female',
                    firstName: 'Daisy',
                    lastName: 'Chen',
                    age: 27,
                    hairColor: 'black',
                    eyeColor: 'blue',
                    userColor: '#3f6a49',
                    location: 'Paris'
                }
            ];

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
    }
})();