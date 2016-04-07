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

        function GetAll() {
            return [
                {
                    name: 'Lifestyle',
                    questions: [
                        {
                            text: 'What do you do to stop your roommates eating your food?',
                            answers: [
                                {
                                    text: 'Write your name on all your food, right down to individual yogurts.',
                                    points: 1
                                },
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
                                {text: 'Send them an email that uses the word ‘sorry,’ multiple times.', points: 2},
                                {text: 'Ask them to be quieter.', points: 3},
                                {text: 'Chew louder until they get the message.', points: 4},
                                {text: 'Loudly play a YouTube video of someone chewing loudly.', points: 5},
                                {text: 'Throw things at them.', points: 6}
                            ]
                        },
                        {
                            text: 'If you\'re in an argument, what\'s your go-to ending line?',
                            answers: [
                                {text: '"You know what, I think you\'re right."', points: 1},
                                {text: '"Let\'s sit down and talk this through"', points: 2},
                                {text: 'No line, you go straight for the silent treatment.', points: 3},
                                {text: '"Fine, I don\'t care!"', points: 4},
                                {text: '"You\'d better comply, or else..."', points: 5}
                            ]
                        }
                    ]
                },
                {
                    name: 'Personality',
                    questions: [
                        {
                            text: 'You arrive at a house party but no one you know is there yet. What do you do?',
                            answers: [
                                {text: 'Get the hell out of there and try again later', points: 1},
                                {
                                    text: 'Go and hide in the toilet and text your friend telling them to get there urgently',
                                    points: 2
                                },
                                {
                                    text: 'Try to make yourself invisible by standing in the corner and staring at your phone',
                                    points: 3
                                },
                                {
                                    text: 'Loiter near the snack table and hope someone starts up a conversation with you',
                                    points: 4
                                },
                                {
                                    text: 'See if you can find the host and introduce yourself – it\'s only polite',
                                    points: 5
                                },
                                {
                                    text: 'Grab a drink and go and join a conversation – new friends aren\'t going to make themselves!',
                                    points: 6
                                }
                            ]
                        },
                        {
                            text: 'Your phone rings but you don\'t recognise the number, what do you do?',
                            answers: [
                                {text: 'Throw your phone into a river and emigrate to Peru', points: 1},
                                {text: 'Let it ring out, there\'s no way you\'re speaking to some stranger', points: 2},
                                {text: 'Quickly google the number to try and find out who it could be', points: 3},
                                {text: 'Pick up, but only if you aren\'t doing anything', points: 4},
                                {text: 'Pick it up, obviously – it might be important', points: 5}
                            ]
                        },
                        {
                            text: 'Your colleagues are having a light-hearted conversation round the table at the pub. You are...',
                            answers: [
                                {text: 'At home watching Netflix on the sofa', points: 1},
                                {
                                    text: 'Listening and feeling a little awkward, but not feeling confident enough to talk much',
                                    points: 2
                                },
                                {
                                    text: 'Talking when you feel comfortable, but mostly listening from the fringes',
                                    points: 3
                                },
                                {
                                    text: 'Chipping in with jokes quite often and taking control of the conversation when you can',
                                    points: 4
                                },
                                {
                                    text: 'Leading the conversation, and probably making people laugh in the process',
                                    points: 5
                                }
                            ]
                        },
                        {
                            text: 'How do you like to spend your week nights?',
                            answers: [
                                {text: 'At home relaxing, watching TV, on the internet or with a good book', points: 1},
                                {
                                    text: 'It totally depends how I feel, some weeks I\'ll be really busy, others I just want to chill',
                                    points: 2
                                },
                                {text: 'I like to go out and see people once or twice a week when I can', points: 3},
                                {text: 'I like to make as many plans as possible, being alone is boring', points: 4},
                                {
                                    text: 'I go along with most plans because of my crippling fear of missing out',
                                    points: 5
                                }
                            ]
                        },
                        {
                            text: 'How do you feel when making small talk?',
                            answers: [
                                {text: 'Always extremely worried of what the other person thinks of me', points: 1},
                                {text: 'A bit awkward, but I cope fine – it\'s a part of life', points: 2},
                                {
                                    text: 'It always feels a little pointless, but it\'s not the worst thing in the world',
                                    points: 3
                                },
                                {text: 'It\'s OK, but I prefer to listen than to talk about myself', points: 4},
                                {text: 'Great – it\'s always fun to get to know new people', points: 5}
                            ]
                        },
                    ]
                },
                {
                    name: 'Nature',
                    questions: [
                        {
                            text: 'You go out to dinner with a friend. What are you ordering?',
                            answers: [
                                {text: 'Whatever is the cheapest', points: 1},
                                {text: 'Whatever seems to be the most nutritionally balanced', points: 2},
                                {text: 'Something different from my friend, so we can share', points: 3},
                                {text: 'Something I know I will like', points: 4},
                                {text: 'Something I have never tried before', points: 5},
                                {text: 'Whatever is the tastiest', points: 6}
                            ]
                        },
                        {
                            text: 'You get a flat tire on the highway. What is the very first thing you do?',
                            answers: [
                                {text: 'Check for a spare', points: 1},
                                {text: 'Google "how to change a tire"', points: 2},
                                {text: 'Call a tow truck', points: 3},
                                {text: 'Call a friend or family member for support', points: 4},
                                {text: 'Punch the steering wheel', points: 5},
                                {text: 'Scream', points: 6}
                            ]
                        },
                        {
                            text: 'Everyone should decide their college major based on...',
                            answers: [
                                {text: 'Whatever opens up the most doors career-wise', points: 1},
                                {text: 'Whatever ensures the most financial security', points: 2},
                                {text: 'Their family\'s advice', points: 3},
                                {text: 'Whatever leads to a job they will love', points: 4},
                                {text: 'Whatever allows them to feel fulfilled', points: 5},
                                {text: 'Whatever feels right', points: 6}
                            ]
                        },
                        {
                            text: 'What is the foundation of a solid romantic relationship?',
                            answers: [
                                {text: 'Shared interests', points: 1},
                                {text: 'Horoscope compatibility', points: 2},
                                {text: 'Communication', points: 3},
                                {text: 'Trust', points: 4},
                                {text: 'Respect', points: 5},
                                {text: 'Chemistry', points: 6}
                            ]
                        },
                        {
                            text: 'What version of yourself would you hate to see 10 years from now?',
                            answers: [
                                {text: 'Someone financially struggling', points: 1},
                                {text: 'Someone with no goals and no direction', points: 2},
                                {text: 'Someone who works constantly with no time for themselves', points: 3},
                                {text: 'Someone in the place I am now', points: 4},
                                {text: 'Someone chronically dissatisfied with what they\'re doing', points: 5},
                                {text: 'Someone who is single', points: 6}
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