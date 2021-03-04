angular.module('tutor').controller("QuestionaryCtrl", function ($scope, $location, User) {

    $scope.questions = ["Ba", "Sinto-me Seguro", "Estou tenso"];
    $scope.answers = [];

    $scope.processAnswers = function () {

        

            var time = new Date().getTime();

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            // ans[0] = 5 - ans[0];
            // ans[1] = 5 - ans[1];
            // ans[4] = 5 - ans[4];
            // ans[7] = 5 - ans[7];
            // ans[9] = 5 - ans[9];
            // ans[10] = 5 - ans[10];
            // ans[14] = 5 - ans[14];
            // ans[15] = 5 - ans[15];
            // ans[18] = 5 - ans[18];
            // ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            // User.setActivityFlow(sum);
            // User.setPost(ans);
            // User.setEndTime(time);
            User.save();

            $location.path("/finish");

        
    }


    $scope.data = {
        group1: 'a',
        group2: 'a',
        group3: 'a',
        group4: 'a',
        group5: 'a',
        group6: 'a',
        group7: 'a',
        group8: 'a',
        group9: 'a',
        group10: 'a',
        group11: 'a',
        group12: 'a',
        group13: 'a',
        group14: 'a',
        group15: 'a',
      
        group17: 'a'
     
    };

 
      /** $location.path("/finish"); */

});
