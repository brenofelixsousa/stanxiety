angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;

    $scope.questions = ["Sinto-me desafiado, mas acredito que minhas habilidades irão me permitir enfrentar o desafio",
    "Faço coisas corretamente sem pensar sobre como fazer", 
    "Sei claramente o que quero fazer", 
    "É muito claro para mim como estou me saindo na atividade",
    "Minha atenção está focada inteiramente no que estou fazendo", 
    "Tenho um senso de controle sobre o que estou fazendo", 
    "Não estou preocupado com o que os outros podem estar pensando de mim", 
    "O tempo parece alterado (mais devagar ou mais rápido)",
    "Realmente gosto da experiência que estou tendo", 
    "Minhas habilidades combinam com o desafio que estou experimentando", 
    "As coisas parecem acontecer automaticamente", 
    "Tenho uma forte noção do que quero fazer",
    "Estou ciente do quão bem estou fazendo", 
    "Não há esforço em manter a minha mente no que está acontecendo", 
    "Sinto que posso controlar o que estou fazendo", 
    "Não estou preocupado em como os outros podem me avaliar",
    "A forma como o tempo passa parece ser diferente da normal", 
    "Amo a sensação relacionada ao que estou fazendo e quero sentir novamente", 
    "Sinto que sou competente o suficiente para atender às demandas da situação", 
    "Realizo a atividade automaticamente sem pensar muito",
    "Sei o que quero alcançar", 
    "Tenho uma boa ideia do quão bem estou me saindo enquanto estou envolvido na tarefa/atividade", 
    "Tenho total concentração", 
    "Tenho um sentimento de total controle sobre o que estou fazendo",
    "Não estou preocupado com a forma como estou me apresentando", 
    "Parece que o tempo passa rapidamente", 
    "A experiência me deixa me sentindo ótimo", 
    "O desafio e minhas habilidades estão em um nível igualmente alto",
    "Faço as coisas de forma espontânea e automática sem ter que pensar", 
    "Meus objetivos estão claramente definidos", 
    "Pela forma como as coisas estão progredindo percebo se estou indo bem",
    "Estou completamente focado na tarefa em questão", 
    "Sinto-me em total controle das minhas ações", 
    "Perdi minha noção de consciência sobre o tempo",
    "A experiência é extremamente recompensadora"];
    $scope.answers = [];

    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function() {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            ans[0] = 5 - ans[0];
            ans[1] = 5 - ans[1];
            ans[4] = 5 - ans[4];
            ans[7] = 5 - ans[7];
            ans[9] = 5 - ans[9];
            ans[10] = 5 - ans[10];
            ans[14] = 5 - ans[14];
            ans[15] = 5 - ans[15];
            ans[18] = 5 - ans[18];
            ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            console.log(ans);
            console.log("PRETEST: " + sum);

            configService.setTheme(themes[random]);
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setTestType(themes[random]);
            User.setPretestPoints(sum);
            User.setPre(ans);

            console.log(User.getResponse());
            // User.save();
            $location.path("/home");

        };

    };
});
