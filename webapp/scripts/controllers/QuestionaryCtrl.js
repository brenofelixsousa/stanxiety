angular
  .module("tutor")
  .controller("QuestionaryCtrl", function ($scope, $location, User) {
    $scope.questions = [
      "Quantidade de automóveis de passeio exclusivamente para uso particular:",
      "Quantidade de empregados mensalistas, considerando apenas os que trabalham pelo menos cinco dias por semana: ",
      "Quantidade de máquinas de lavar roupa, excluindo tanquinho:",
      "Quantidade de banheiros:",
      "DVD, incluindo qualquer dispositivo que leia DVD e desconsiderando DVD de automóvel:",
      "Quantidade de geladeiras:",
      "Quantidade de freezers independentes ou parte da geladeira:",
      "Quantidade de microcomputadores, considerando computadores de mesa, laptops, notebooks e netbooks e desconsiderando tablets, palms ou smartphones",
      "Quantidade de lavadora de louças:",
      "Quantidade de fornos de micro-ondas:",
      "Quantidade de motocicletas, desconsiderando as usadas exclusivamente para uso profissional:",
      "Quantidade de máquinas secadoras de roupas, considerando lava e seca:",
    ];
    $scope.answers = [];

    $scope.processAnswers = function () {
      var ans = $scope.answers;
      console.log(ans);

      // invert positive answers
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

      function add(a, b) {
        return parseInt(a) + parseInt(b);
      }

    //   User.setName($scope.name);
      User.setAge($scope.age);
      User.setGender($scope.gender);
      User.setEmail($scope.email);
      User.setEthnicity($scope.ethnicity);
      User.setSexualOrientation($scope.sexualOrientation);
      User.setCivilState($scope.civilState);
      User.setCity($scope.city);
      // User.setActivityFlow(sum);
      // User.setPost(ans);
      // User.setEndTime(time);
      User.save();

      $location.path("/finish");

      $scope.data = {
        group1: "a",
        group2: "a",
        group3: "a",
        group4: "a",
        group5: "a",
        group6: "a",
        group7: "a",
        group8: "a",
        group9: "a",
        group10: "a",
        group11: "a",
        group12: "a",
        group13: "a",
        group14: "a",
        group15: "a",
        group17: "a",
      };

      /** $location.path("/finish"); */
    };
  });
