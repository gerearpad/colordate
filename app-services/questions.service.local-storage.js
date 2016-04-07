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
        
        function GetAll(){
            return [
                    {
                        name: 'Lifestyle'
                        questions: [
                            {
                                text: 'What do you do to stop your roommates eating your food?', 
                                answers: [{text: 'Bring it up in conversation.',points: 0}, {text: 'Lick it all. Lick everything. But don’t tell them.', points: 1},
                                            {text: 'Write your name on all your food, right down to individual yogurts.', points: 2}, {text: 'Start eating their food.', points: 4}] 
                            },
                            {
                                text: 'Someone is using your Wi-Fi instead of paying for their own. What do you do?', 
                                answers: [{text: 'Get rid of it all together, and go live in the woods.', points: 1}, 
                                    {text: 'Change the network name to “Not Your Wi-Fi” to drop them a hint.', points: 2}, 
                                    {text: 'Let it go. Life’s too short.', points: 3},{text: 'Keep changing the password so they can’t keep logging in.', points: 4}]
                            },
                            {
                                text: 'Someone in front of you at the cinema is rocking their chair back and forth, annoying you. How do you deal with it?',
                                answers : [{text: 'Keep kicking the back of their seat until they get the message.', points: 1}, 
                                {text: 'Move seats.', points: 2},{text: 'Ask them to stop.', points: 3},{text: 'Kick them in the head.', points: 4}]
                            },
                            {
                                text: 'Someone near you is chewing loudly. What do you do?',
                                answers : [{text: 'Chew louder until they get the message.', points: 1}, 
                                {text: 'Nothing, but secretly start hating them.', points: 2},
                                {text: 'Send them an email that uses the word ‘sorry,’ multiple times.', points: 3}, 
                                {text: 'Throw things at them.', points: 4}, {text: 'Loudly play a YouTube video of someone chewing loudly.', points: 5}, 
                                {text: 'Ask them to be quieter.', points: 6}]
                            },
                            {
                                text: '',
                                answers : [{text: '', points: }, {text: '', points: },{text: '', points: },{text: '', points: }]
                            }
                        ]
                    },
                    {
                        name: 'Personality',
                        questions: []
                    },
                    {
                        name    : 'Nature',
                        questions: []
                    }
                ];

        }

      function GetByCategory(categoryName) {
            var categoryQuestion = [];
            var allCategoriesAndQuestions = GetAll();
            allCategoriesAndQuestions.forEach(function(category){
                if(category.name == categoryName){
                    categoryQuestion = category.questions;
                }
            })
    
       }
    }
})();