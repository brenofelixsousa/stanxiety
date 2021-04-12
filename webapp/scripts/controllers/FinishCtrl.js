angular.module('tutor').controller("FinishCtrl", function($scope, User) {

    $scope.populationAnxiety = 40.1 * 100 / 80;
    $scope.userAnxiety = User.getMotivation() * 100 / 80;

    $scope.share = function() {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://weblab.nees.com.br/kelly/',
            title: 'Estudo sobre motivação',
            description: 'Participe deste estudo sobre motivação!',
            layout: 'button'
        }, function (response) { });
      
    };
    
});
