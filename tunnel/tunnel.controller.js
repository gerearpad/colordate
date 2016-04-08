(function () {
    'use strict';

    angular
        .module('app')
        .controller('TunnelController', TunnelController);

    TunnelController.$inject = ['QuestionService', '$rootScope'];
    
    function TunnelController(QuestionService, $rootScope) {
        var vm = this;
        
        vm.currentCategoryIndex = -1;
        vm.currentCategory = {};
        vm.currentQuestionIndex = -1;
        vm.currentQuestion = {};
        
        vm.getNextQuestion = getNextQuestion;
        vm.getNextCategory = getNextCategory;
        
        getNextQuestion();        
        
        function getNextQuestion(){
            vm.currentQuestionIndex++;
            if(vm.currentCategory || vm.currentCategory.questions || vm.currentCategory.questions.length <  vm.currentQuestionIndex){
                getNextCategory();
                vm.currentQuestionIndex = 0;
            }
            vm.currentQuestion = vm.currentCategory.questions[ vm.currentQuestionIndex];
            
        }

        function getNextCategory(){
            vm.currentCategoryIndex++;
            vm.currentCategory = QuestionService.GetAll()[vm.currentCategoryIndex];
        }
        
    }

})();