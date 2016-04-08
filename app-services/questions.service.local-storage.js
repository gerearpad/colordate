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
                                {text: 'Write your name on all your food, right down to individual yogurts.', points: 1},
                                {text: 'Bring it up in conversation.', points: 2},
                                {text: 'Lick it all. Lick everything. But don’t tell them.', points: 3},
                                {text: 'Start eating their food.', points: 4}
                            ]
                        },
                        {
                            text: 'Someone is using your Wi-Fi instead of paying for their own. What do you do?',
                            answers: [
                                {text: 'Let it go. Life’s too short.', points: 1},
                                {text: 'Change the network name to “Not Your Wi-Fi” to drop them a hint.', points: 2},
                                {text: 'Keep changing the password so they can’t keep logging in.', points: 3},
                                {text: 'Get rid of it all together, and go live in the woods.', points: 4}
                            ]
                        },
                        {
                            text: 'Someone in front of you at the cinema is rocking their chair back and forth, annoying you. How do you deal with it?',
                            answers: [
                                {text: 'Move seats.', points: 1},
                                {text: 'Ask them to stop.', points: 2},
                                {text: 'Keep kicking the back of their seat until they get the message.', points: 3},
                                {text: 'Kick them in the head.', points: 4}
                            ]
                        },
                        {
                            text: 'Someone near you is chewing loudly. What do you do?',
                            answers: [
                                {text: 'Nothing, but secretly start hating them.', points: 1},
                                {text: 'Ask them to be quieter.', points: 2},
                                {text: 'Chew louder until they get the message.', points: 3},
                                {text: 'Throw things at them.', points: 4}
                            ]
                        },
                        {
                            text: 'If you\'re in an argument, what\'s your go-to ending line?',
                            answers: [
                                {text: '"You know what, I think you\'re right."', points: 1},
                                {text: '"Let\'s sit down and talk this through"', points: 2},
                                {text: 'No line, you go for the silent treatment.', points: 3},
                                {text: '"Fine, I don\'t care!"', points: 4}
                            ]
                        }
                    ]
                },
                {
                    text: 'Personality',
                    questions: [
                        {
                            text: 'You arrive at a house party but no one you know is there yet. What do you do?',
                            answers: [
                                {text: 'Get the hell out of there and try again later', points: 1},
                                {text: 'Make yourself invisible by standing in the corner and staring at your phone', points: 2},
                                {text: 'See if you can find the host and introduce yourself – it\'s only polite', points: 4},
                                {text: 'Grab a drink and go and join a conversation – new friends aren\'t going to make themselves!', points: 6}
                            ]
                        },
                        {
                            text: 'Your phone rings but you don\'t recognise the number, what do you do?',
                            answers: [
                                {text: 'Throw your phone into a river and emigrate to Peru', points: 1},
                                {text: 'Quickly google the number to try and find out who it could be', points: 2},
                                {text: 'Pick up, but only if you aren\'t doing anything', points: 3},
                                {text: 'Pick it up, obviously – it might be important', points: 4}
                            ]
                        },
                        {
                            text: 'Your colleagues are having a light-hearted conversation round the table at the pub. You are...',
                            answers: [
                                {text: 'At home watching Netflix on the sofa', points: 1},
                                {text: 'Talking when you feel comfortable, but mostly listening from the fringes', points: 2},
                                {text: 'Chipping in with jokes quite often and taking control of the conversation when you can', points: 3},
                                {text: 'Leading the conversation, and probably making people laugh in the process', points: 4}
                            ]
                        },
                        {
                            text: 'How do you like to spend your week nights?',
                            answers: [
                                {text: 'At home relaxing, watching TV, on the internet or with a good book', points: 1},
                                {text: 'I like to go out and see people once or twice a week when I can', points: 2},
                                {text: 'I like to make as many plans as possible, being alone is boring', points: 3},
                                {text: 'I go along with most plans because of my crippling fear of missing out', points: 4}
                            ]
                        },
                        {
                            text: 'How do you feel when making small talk?',
                            answers: [
                                {text: 'Always extremely worried of what the other person thinks of me', points: 1},
                                {text: 'A bit awkward, but I cope fine – it\'s a part of life', points: 2},
                                {text: 'It\'s OK, but I prefer to listen than to talk about myself', points: 3},
                                {text: 'Great – it\'s always fun to get to know new people', points: 4}
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
                                {text: 'Whatever is the cheapest', points: 1},
                                {text: 'Something I know I will like', points: 2},
                                {text: 'Something I have never tried before', points: 3},
                                {text: 'Whatever is the tastiest', points: 4}
                            ]
                        },
                        {
                            text: 'You get a flat tire on the highway. What is the very first thing you do?',
                            answers: [
                                {text: 'Check for a spare', points: 1},
                                {text: 'Google "how to change a tire"', points: 2},
                                {text: 'Call a tow truck', points: 3},
                                {text: 'Punch the steering wheel', points: 4}
                            ]
                        },
                        {
                            text: 'Everyone should decide their college major based on...',
                            answers: [
                                {text: 'Whatever ensures the most financial security', points: 1},
                                {text: 'Their family\'s advice', points: 2},
                                {text: 'Whatever leads to a job they will love', points: 3},
                                {text: 'Whatever feels right', points: 4}
                            ]
                        },
                        {
                            text: 'What is the foundation of a solid romantic relationship?',
                            answers: [
                                {text: 'Shared interests', points: 1},
                                {text: 'Communication', points: 2},
                                {text: 'Trust', points: 3},
                                {text: 'Chemistry', points: 4}
                            ]
                        },
                        {
                            text: 'What version of yourself would you hate to see 10 years from now?',
                            answers: [
                                {text: 'Someone financially struggling', points: 1},
                                {text: 'Someone with no goals and no direction', points: 2},
                                {text: 'Someone in the place I am now', points: 3},
                                {text: 'Someone who is single', points: 4}
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