angular.module('starter').service('ocorrenciasService', function($http){
  return {
    Tempo: function($tempo){
      var tempo = [];

      if(typeof localStorage.tempo != 'undefined'){
        tempo = JSON.parse(localStorage.tempo);
      }
      tempo.push($tempo);

      var paraString = JSON.stringify(tempo);
      localStorage.setItem('tempo',paraString);
      return true;
    },

    getTempoRotas: function(){
      if(typeof localStorage.tempo == 'undefined')
        return false;
      else{
       return JSON.parse(localStorage.tempo);

     }
    },

    deleteTempoRota: function(info){
        var tempo = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.tempo != 'undefined'){
            tempo = JSON.parse(localStorage.tempo);
        }

        // cria um vetor com somente os tempo que não
        // tenham o código em prod
        console.log(info);
        tempo = tempo.filter(function (tempo){
          return tempo.local != info.local;
        });
        console.log(tempo);
        // transforma em String
        var paraString = JSON.stringify(tempo);
        // armazena em localStorage
        localStorage.setItem('tempo', paraString);
        return true;
       // return novo;
    },

    bancoTempoRotas: function(info){
      return $http.post('http://localhost:2000/bancoTempoRotas',info)
        .then(function(response) {
         return response.data;
      });;
    },


    cargaDescarga: function($info){
      var cargaDescarga = [];

      if(typeof localStorage.cargaDescarga != 'undefined'){
        cargaDescarga = JSON.parse(localStorage.cargaDescarga);
      }
      cargaDescarga.push($info);

      var paraString = JSON.stringify(cargaDescarga);
      localStorage.setItem('cargaDescarga',paraString);
      return true;
    },

    getCargaDescarga: function(){
      if(typeof localStorage.cargaDescarga == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.cargaDescarga);
    },

    deleteCargaDescarga: function(info){
        var cargaDescarga = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.cargaDescarga != 'undefined'){
            cargaDescarga = JSON.parse(localStorage.cargaDescarga);
        }

        // cria um vetor com somente os cargaDescarga que não
        // tenham o código em prod
        console.log(info);
        cargaDescarga = cargaDescarga.filter(function (cargaDescarga){
          return cargaDescarga.status != info.status;
        });
        console.log(cargaDescarga);
        // transforma em String
        var paraString = JSON.stringify(cargaDescarga);
        // armazena em localStorage
        localStorage.setItem('cargaDescarga', paraString);
        return true;
       // return novo;
    },

    bancoCargaDescarga: function(info){
      return $http.post('http://localhost:2000/bancoCargaDescarga',info);
    },

    alimentacao: function($info){
      var alimentacao = [];

      if(typeof localStorage.alimentacao != 'undefined'){
        alimentacao = JSON.parse(localStorage.alimentacao);
      }
      alimentacao.push($info);

      var paraString = JSON.stringify(alimentacao);
      localStorage.setItem('alimentacao',paraString);
      return true;
    },

    getAlimentacao: function(){
      if(typeof localStorage.alimentacao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.alimentacao);
    },

    deleteAlimentacao: function(info){
        var alimentacao = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.alimentacao != 'undefined'){
            alimentacao = JSON.parse(localStorage.alimentacao);
        }

        // cria um vetor com somente os alimentacao que não
        // tenham o código em prod
        console.log(info);
        alimentacao = alimentacao.filter(function (alimentacao){
          return alimentacao.valor != info.valor;
        });
        console.log(alimentacao);
        // transforma em String
        var paraString = JSON.stringify(alimentacao);
        // armazena em localStorage
        localStorage.setItem('alimentacao', paraString);
        return true;
       // return novo;
    },

    bancoAlimentacao: function(info){
      return $http.post('http://localhost:2000/bancoAlimentacao',info);
    },

    descansoPernoite: function($info){
      var descansoPernoite = [];

      if(typeof localStorage.descansoPernoite != 'undefined'){
        descansoPernoite = JSON.parse(localStorage.descansoPernoite);
      }
      descansoPernoite.push($info);

      var paraString = JSON.stringify(descansoPernoite);
      localStorage.setItem('descansoPernoite',paraString);
      return true;
    },

    getDescansoPernoite: function(){
      if(typeof localStorage.descansoPernoite == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.descansoPernoite);
    },

    deleteDescansoPernoite: function(info){
        var descansoPernoite = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.descansoPernoite != 'undefined'){
            descansoPernoite = JSON.parse(localStorage.descansoPernoite);
        }

        // cria um vetor com somente os descansoPernoite que não
        // tenham o código em prod
        console.log(info);
        descansoPernoite = descansoPernoite.filter(function (descansoPernoite){
          return descansoPernoite.valor != info.valor;
        });
        console.log(descansoPernoite);
        // transforma em String
        var paraString = JSON.stringify(descansoPernoite);
        // armazena em localStorage
        localStorage.setItem('descansoPernoite', paraString);
        return true;
       // return novo;
    },

    bancoDescansoPernoite: function(info){
      return $http.post('http://localhost:2000/bancoDescansoPernoite',info);
    },

    manutencao: function($info){
      var manutencao = [];

      if(typeof localStorage.manutencao != 'undefined'){
        manutencao = JSON.parse(localStorage.manutencao);
      }
      manutencao.push($info);

      var paraString = JSON.stringify(manutencao);
      localStorage.setItem('manutencao',paraString);
      return true;
    },

    getManutencao: function(){
      if(typeof localStorage.manutencao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.manutencao);
    },

    deleteManutencao: function(info){
        var manutencao = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.manutencao != 'undefined'){
            manutencao = JSON.parse(localStorage.manutencao);
        }

        // cria um vetor com somente os manutencao que não
        // tenham o código em prod
        console.log(info);
        manutencao = manutencao.filter(function (manutencao){
          return manutencao.tipo != info.tipo;
        });
        console.log(manutencao);
        // transforma em String
        var paraString = JSON.stringify(manutencao);
        // armazena em localStorage
        localStorage.setItem('manutencao', paraString);
        return true;
       // return novo;
    },

    bancoManutencao: function(info){
      return $http.post('http://localhost:2000/bancoManutencao',info);
    },

    abastecimento: function($info){
      var abastecimento = [];

      if(typeof localStorage.abastecimento != 'undefined'){
        abastecimento = JSON.parse(localStorage.abastecimento);
      }
      abastecimento.push($info);

      var paraString = JSON.stringify(abastecimento);
      localStorage.setItem('abastecimento',paraString);
      return true;
    },

    getAbastecimento: function(){
      if(typeof localStorage.abastecimento == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.abastecimento);
    },

    deleteAbastecimento: function(info){
        var abastecimento = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.abastecimento != 'undefined'){
            abastecimento = JSON.parse(localStorage.abastecimento);
        }

        // cria um vetor com somente os abastecimento que não
        // tenham o código em prod
        console.log(info);
        abastecimento = abastecimento.filter(function (abastecimento){
          return abastecimento.km != info.km;
        });
        console.log(abastecimento);
        // transforma em String
        var paraString = JSON.stringify(abastecimento);
        // armazena em localStorage
        localStorage.setItem('abastecimento', paraString);
        return true;
       // return novo;
    },

    bancoAbastecimento: function(info){
      return $http.post('http://localhost:2000/bancoAbastecimento',info);
    },


    fiscalizacao: function($info){
      var fiscalizacao = [];

      if(typeof localStorage.fiscalizacao != 'undefined'){
        fiscalizacao = JSON.parse(localStorage.fiscalizacao);
      }
      fiscalizacao.push($info);

      var paraString = JSON.stringify(fiscalizacao);
      localStorage.setItem('fiscalizacao',paraString);
      return true;
    },

    getFiscalizacao: function(){
      if(typeof localStorage.fiscalizacao == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.fiscalizacao);
    },

    deleteFiscalizacao: function(info){
        var fiscalizacao = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.fiscalizacao != 'undefined'){
            fiscalizacao = JSON.parse(localStorage.fiscalizacao);
        }

        // cria um vetor com somente os fiscalizacao que não
        // tenham o código em prod
        console.log(info);
        fiscalizacao = fiscalizacao.filter(function (fiscalizacao){
          return fiscalizacao.tipo != info.tipo;
        });
        console.log(fiscalizacao);
        // transforma em String
        var paraString = JSON.stringify(fiscalizacao);
        // armazena em localStorage
        localStorage.setItem('fiscalizacao', paraString);
        return true;
       // return novo;
    },

    bancoFiscalizacao: function(info){
      return $http.post('http://localhost:2000/bancoFiscalizacao',info);
    },


    cliente: function($info){
      var cliente = [];

      if(typeof localStorage.cliente != 'undefined'){
        cliente = JSON.parse(localStorage.cliente);
      }
      cliente.push($info);

      var paraString = JSON.stringify(cliente);
      localStorage.setItem('cliente',paraString);
      return true;
    },

    getCliente: function(){
      if(typeof localStorage.cliente == 'undefined')
        return false;
      else
      return JSON.parse(localStorage.cliente);
    },

    deleteCliente: function(info){
        var cliente = [];
      // verifica se chave existe e monta vetor
      if (typeof localStorage.cliente != 'undefined'){
            cliente = JSON.parse(localStorage.cliente);
        }

        // cria um vetor com somente os cliente que não
        // tenham o código em prod
        console.log(info);
        cliente = cliente.filter(function (cliente){
          return cliente.observacao != info.observacao;
        });
        console.log(cliente);
        // transforma em String
        var paraString = JSON.stringify(cliente);
        // armazena em localStorage
        localStorage.setItem('cliente', paraString);
        return true;
       // return novo;
    },

    bancoCliente: function(info){
      return $http.post('http://localhost:2000/bancoCliente',info);
    },

  }
});
