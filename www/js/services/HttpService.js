angular.module('starter').service('HttpService', function($http){
  return {

    getRotas: function(){
      return $http.get('http://localhost:2000/consultaRotas')
              .then(function(rotas){
                return rotas.data;
              });
    },

    getRotasLocal: function(){
      if(typeof localStorage.rotas == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.rotas);
    },

    localRota: function($rota){
      var rotas = [];

      if(typeof localStorage.rotas != 'undefined'){
        rotas = JSON.parse(localStorage.rotas);
      }
      rotas.push($rota);

      var paraString = JSON.stringify(rotas);
      localStorage.setItem('rotas',paraString);
      return $rota;
    },

    removeLocalRota: function(rota){
      var rotas = [];
    // verifica se chave existe e monta vetor
    if (typeof localStorage.rotas != 'undefined'){
          rotas = JSON.parse(localStorage.rotas);
      }

      // cria um vetor com somente os rotas que não
      // tenham o código em prod
      rotas = rotas.filter(function (rotas){
        return rotas.id_rota != rota.id_rota;
      });
      // transforma em String
      var paraString = JSON.stringify(rotas);
      // armazena em localStorage
      localStorage.setItem('rotas', paraString);
      return true;
     // return novo;
    }
  };
});
