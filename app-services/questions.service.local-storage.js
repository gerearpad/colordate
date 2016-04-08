(function () {
    'use strict';

    angular
        .module('app')
        .factory('QuestionService', QuestionService);

    QuestionService.$inject = ['$timeout', '$filter', '$q'];

    function QuestionService($timeout, $filter, $q) {

        var service = {};

        service.GetAll = GetAll;
        service.GetByCategory = GetByCategory;

        return service;

        function GetAll() {
            return [
                {
                    text: 'Lifestyle',
                    questions: [
                        {
                            text: 'What do you do to stop your roommates eating your food?',
                            answers: [
                                {text: 'Write your name on all your food.', points: 1, id: 1},
                                {text: 'Bring it up in conversation.', points: 2, id: 2},
                                {text: 'Lick it all. Lick everything. But don’t tell them.', points: 3, id: 3},
                                {text: 'Start eating their food.', points: 4, id: 4}
                            ]
                        },
                        {
                            text: 'Someone near you is chewing loudly. What do you do?',
                            answers: [
                                {text: 'Nothing, but secretly start hating them.', points: 1, id: 13},
                                {text: 'Ask them to be quieter.', points: 2, id: 14},
                                {text: 'Chew louder until they get the message.', points: 3, id: 15},
                                {text: 'Throw things at them.', points: 4, id: 16}
                            ]
                        },
                        {
                            text: 'If you\'re in an argument, what\'s your go-to ending line?',
                            answers: [
                                {text: '"You know what, I think you\'re right."', points: 1, id: 17},
                                {text: '"Let\'s sit down and talk this through"', points: 2, id: 18},
                                {text: 'No line, you go for the silent treatment.', points: 3, id: 19},
                                {text: '"Fine, I don\'t care!"', points: 4, id: 20}
                            ]
                        }
                    ]
                },
                {
                    text: 'Personality',
                    questions: [
                        {
                            text: 'You arrive at a party but no one you know is there yet. What do you do?',
                            answers: [
                                {text: 'Get the hell out of there and try again later', points: 1, id: 21},
                                {text: 'Make yourself invisible by staring at your phone', points: 2, id: 22},
                                {text: 'See if you can find the host and introduce yourself', points: 4, id: 23},
                                {text: 'Grab a drink and go and join a conversation', points: 6, id: 24}
                            ]
                        },
                        {
                            text: 'Your phone rings but you don\'t know who it is, what do you do?',
                            answers: [
                                {text: 'Throw your phone into a river and emigrate to Peru', points: 1, id: 25},
                                {text: 'Google the number to try and find out who it could be', points: 2, id: 26},
                                {text: 'Pick up, but only if you aren\'t doing anything', points: 3, id: 27},
                                {text: 'Pick it up, obviously – it might be important', points: 4, id: 28}
                            ]
                        },
                        {
                            text: 'How do you feel when making small talk?',
                            answers: [
                                {text: 'Always worried of what the other person thinks of me', points: 1, id: 36},
                                {text: 'A bit awkward, but I cope fine – it\'s a part of life', points: 2, id: 37},
                                {text: 'It\'s OK, but I prefer to listen than to talk about myself', points: 3, id: 38},
                                {text: 'Great – it\'s always fun to get to know new people', points: 4, id: 39}
                            ]
                        },
                    ]
                },
                {
                    text: 'Nature',
                    questions: [
                        {
                            text: 'You go out to dinner with a friend. What are you ordering?',
                            answers: [
                                {text: 'Whatever is the cheapest', points: 1, id: 40},
                                {text: 'Something I know I will like', points: 2, id: 41},
                                {text: 'Something I have never tried before', points: 3, id: 42},
                                {text: 'Whatever is the tastiest', points: 4, id: 43}
                            ]
                        },
                        {
                            text: 'You get a flat tire on the highway. What is the very first thing you do?',
                            answers: [
                                {text: 'Check for a spare', points: 1, id: 44},
                                {text: 'Google "how to change a tire"', points: 2, id: 45},
                                {text: 'Call a tow truck', points: 3, id: 46},
                                {text: 'Punch the steering wheel', points: 4, id: 47}
                            ]
                        },
                        {
                            text: 'What version of yourself would you hate to see 10 years from now?',
                            answers: [
                                {text: 'Someone financially struggling', points: 1, id: 56},
                                {text: 'Someone with no goals and no direction', points: 2, id: 57},
                                {text: 'Someone in the place I am now', points: 3, id: 58},
                                {text: 'Someone who is single', points: 4, id: 59}
                            ]
                        }
                    ]
                }
            ];
        }

        function GetByCategory(categoryName) {
            var categoryQuestion = [];
            var allCategoriesAndQuestions = GetAll();
            allCategoriesAndQuestions.forEach(function (category) {
                if (category.name == categoryName) {
                    categoryQuestion = category.questions;
                }
            })

        }
    }
})();