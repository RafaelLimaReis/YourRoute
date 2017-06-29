angular.module('starter').controller('userController', function($scope,$state){

  function data(){

  }
  $scope.logar = function(){
    /*logica de login */
    $state.go('menu.home');

    /*
      var data = new Date();
      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      var ano = data.getFullYear();
      var dataFinal =  [dia, mes, ano].join('/');

    console.log(dataFinal);*/
  }



  $scope.cadastrar = function(){
    /* cadastro de usuario */
    swal({title: "Cadastro realizado com sucesso!", 
         text: "Obrigado por se cadastrar no nosso sistema! Para usufruir de nosso aplicativo é necessário que seus dados sejam validados, assim que este processo for feito você receberá um email informando os dados para acesso.", 
         type: "success",
         confirmButtonText: 'Voltar'});
    $state.go('login');
  }
});
