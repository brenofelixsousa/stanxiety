angular
  .module("tutor")
  .controller(
    "FlowCtrl",
    function ($scope, $window, $location, configService, User) {
      var themes = ["default", "stFemale", "stMale"];

      var random = Math.floor(Math.random() * 10000) % 3;

      $scope.questions = [
        "Fui desafiado, mas acredito que minhas habilidades me permitiriam enfrentar o desafio",
        "Fiz as coisas corretamente sem pensar em como fazer",
        "Sabia claramente o que queria fazer",
        "Estava muito claro para mim como eu estava me saindo na atividade",
        "Minha atenção estava focada inteiramente no que eu estava fazendo",
        "Tinha um senso de controle sobre o que estava fazendo",
        "Não estava preocupado com o que os outros podiam estar pensando de mim",
        "O tempo pareceu estar alterado (mais lento ou mais acelerado)",
        "Realmente curti a experiência da atividade que estava fazendo",
        "Minhas habilidades combinavam com o desafio da atividade que estava fazendo",
        "As coisas pareciam estar acontecendo automaticamente",
        "Tive uma clara noção do que queria fazer",
        "Estava consciente do quão bem eu estava fazendo",
        "Não me esforcei para manter a minha mente no que estava acontecendo",
        "Senti que poderia controlar o que estava fazendo",
        "Não estava preocupado sobre como os outros podem ter me avaliado",
        "A forma como o tempo passou parecia ser diferente do normal",
        "Amei a sensação que estava experimentando, e quero ter esse sentimento novamente",
        "Senti que era competente o suficiente para atender às demandas da situação",
        "Fiz coisas automaticamente, sem pensar muito",
        "Eu sabia o que queria alcançar",
        "Tive uma boa ideia sobre como estava me saindo na atividade quando estava envolvido nela",
        "Tive total concentração",
        "Tive uma sensação de total controle sobre o que estava fazendo",
        "Não estava preocupado com a forma como estava me apresentando",
        "Pareceu que o tempo passou rapidamente",
        "A experiência me deixou com uma ótima sensação",
        "O desafio e minhas habilidades estavam em um nível igualmente alto",
        "Fiz coisas automaticamente sem ter que pensar",
        "Meus objetivos estavam claramente definidos",
        "Eu poderia dizer, pela forma como as coisas estavam progredindo, quão bem eu estava indo",
        "Estava completamente focado na tarefa em questão",
        "Eu me senti no total controle das minhas ações",
        "Eu não estava preocupado com o que os outros podiam estar pensando de mim",
        "Perdi a noção do tempo",
        "Achei a experiência extremamente recompensadora",
      ];
      $scope.answers = [];

      var time = new Date().getTime();

      $scope.processAnswers = function () {
        //console.log($scope.answers);
        //  validation
        if ($scope.answers.lenght < 20) {
          $scope.msg = "Por favor, responda todas as perguntas!";
        } else {
          function add(a, b) {
            return parseInt(a) + parseInt(b);
          }

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
          console.log("FLOW: " + sum);

          User.setFlowPoints(sum);
          User.setFlow(ans);
          User.setEndTime(time);
          User.save();

          console.log(User.getResponse());
          // User.save();
          $location.path("/questionary");
        }
      };
    }
  );
