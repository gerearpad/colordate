(function () {
    'use strict';

    angular
        .module('app')
        .controller('TunnelController', TunnelController);

    TunnelController.$inject = ['QuestionService', '$rootScope', '$location'];
    
    function TunnelController(QuestionService, $rootScope, $location) {
        var vm = this;
        
        vm.title = "Profile Questions";
        vm.currentCategoryIndex = -1;
        vm.currentCategory = {};
        vm.currentQuestionIndex = -1;
        vm.currentQuestion = {};
        vm.isFinish = false;
        
        vm.getNextQuestion = getNextQuestion;
        vm.getNextCategory = getNextCategory;
        
        getNextQuestion();        
        
        function getNextQuestion(){
            vm.currentQuestionIndex++;
            if(vm.currentCategory == undefined || vm.currentCategory.questions == undefined || vm.currentCategory.questions.length <=  vm.currentQuestionIndex){                
                getNextCategory();
                vm.currentQuestionIndex = 0;
            }          
            if(vm.isFinish == false && vm.currentCategory !== undefined && vm.currentCategory.questions !== undefined ){
                vm.currentQuestion = vm.currentCategory.questions[ vm.currentQuestionIndex];
            }
            
        }

        function getNextCategory(){
            vm.currentCategoryIndex++;
            vm.currentCategory = QuestionService.GetAll()[vm.currentCategoryIndex];    
            if(vm.currentCategoryIndex >= QuestionService.GetAll().length){
                  $location.path('/');   
            }
        }
        
    }

})();