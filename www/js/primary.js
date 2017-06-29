// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','ionic-modal-select','ionic-timepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'userController'
  })

  .state('cadUsuario',{
    url:'/cadUsuario',
    templateUrl:'templates/cadUsuario.html',
    controller:'userController'
  })
  .state('errorLogin',{
    url:'/errorLogin',
    templateUrl:'templates/errorLogin.html'
  })
  .state('errorCad',{
    url:'/errorCad',
    templateUrl:'templates/errorCad.html'
  })

  .state('menu',{
    url:'menu',
    templateUrl:'templates/menu.html',
    controller:'generalController',
    abstract:true
  })

  .state('menu.home',{
    url:'/home',
    views :{
      'Conteudo' : {
        templateUrl: 'templates/home.html',
        controller:'generalController'
      }
    }
  })

  .state('menu.route',{
    url:'/route',
    views:{
      'Conteudo': {
        templateUrl:'templates/route.html',
        controller:'apiMaps'
      }
    }
  })

  .state('menu.listRoute',{
    url:'/listRoute',
     views:{
       'Conteudo': {
        templateUrl:'templates/listRoute.html',
        controller:'generalController'
       }
     }
  })

  .state('menu.detalheRota',{
    url:'/detalheRota',
    views:{
      'Conteudo':{
        templateUrl:'templates/detalheRota.html',
        controller:'generalController'
      }
    }
  })

  .state('menu.myRoutes',{
    url:'/myRoutes',
    views:{
      'Conteudo':{
        templateUrl:'templates/myRoute.html',
        controller:'generalController'
      }
    }
  })


  .state('menu.ocorrencias',{
    url:'/ocorrencias',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias.html',
        controller:'generalController'
      }
    }
  })

//ocorrencias
  .state('menu.tempoRotas',{
    url:'/tempoRotas',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/tempoRotas.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.cargaDescarga',{
    url:'/cargaDescarga',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/cargaDescarga.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.alimentacao',{
    url:'/alimentacao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/alimentacao.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.descansoPernoite',{
    url:'/descansoPernoite',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/descansoPernoite.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.manutencao',{
    url:'/manutencao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/manutencao.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.abastecimento',{
    url:'/abastecimento',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/abastecimento.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.fiscalizacao',{
    url:'/fiscalizacao',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/fiscalizacao.html',
        controller:'ocorrenciasController'
      }
    }
  })

  .state('menu.cliente',{
    url:'/cliente',
    views:{
      'Conteudo':{
        templateUrl:'templates/ocorrencias/cliente.html',
        controller:'ocorrenciasController'
      }
    }
  })

//cadastros
.state('menu.cadTempoRota',{
  url:'/cadTempoRota',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/tempoRotas.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadCargaDescarga',{
  url:'/cadCargaDescarga',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/cargaDescarga.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadAlimentacao',{
  url:'/cadAlimentacao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/alimentacao.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadDescansoPernoite',{
  url:'/cadDescansoPernoite',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/descansoPernoite.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadManutencao',{
  url:'/cadManutencao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/manutencao.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadAbastecimento',{
  url:'/cadAbastecimento',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/abastecimento.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadFiscalizacao',{
  url:'/cadFiscalizacao',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/fiscalizacao.html',
      controller:'ocorrenciasController'
    }
  }
})

.state('menu.cadCliente',{
  url:'/cadCliente',
  views:{
    'Conteudo':{
      templateUrl:'templates/ocorrencias/registro/cliente.html',
      controller:'ocorrenciasController'
    }
  }
})

  $urlRouterProvider.otherwise('/login');
});

angular.module('starter').controller('apiMaps',function($scope, $state, $cordovaGeolocation, $http, $rootScope){

//GOOGLE MAPS
//Exibição de mapa
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//Função de markup
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

     var marker = new google.maps.Marker({
         map: $scope.map,
         animation: google.maps.Animation.DROP,
         position: latLng
     });

     var infoWindow = new google.maps.InfoWindow({
         content: "Here I am!"
     });

     google.maps.event.addListener(marker, 'click', function () {
         infoWindow.open($scope.map, marker);
     });

   });
  });
//FIM GOOGLE MAPS
});

angular.module('starter').controller('generalController',function($scope, $state, $cordovaGeolocation, $http, $rootScope, HttpService, ocorrenciasService){

  var options = {timeout: 10000, enableHighAccuracy: true};

//função de dados "cidade, dia semana, dia, mes e ano"
 $scope.dadosLocalizacao = function(){
  /* funcao de data */
  meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
	semana = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
	hoje = new Date();
	dia = hoje.getDate();
	dias = hoje.getDay();
	mes = hoje.getMonth();
	ano = hoje.getFullYear();
  var registro = ', ' + semana[dias] + ', dia ' + dia + ' de ' + meses[mes] + '  de ' + ano;
  $scope.dados = registro;
/* funcao de cidade do maps */
   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     var lat = latLng.lat();
     var long = latLng.lng();
     $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+long+'&key=AIzaSyA9FlzaMej0KZu58pWT0DXa0BLL4dZVzc8')
     .then(function(response){
       $scope.dados = response.data.results[0].address_components[3].long_name + $scope.dados;
     });
   });
 }

/* Filtro */
 $scope.filtros = [
     'datapartida','dataentrega', 'destino', 'partida'
   ];

  $scope.buscaRotas = function (){
    HttpService.getRotas()
      .then(function(rotas){
        $scope.bancoRotas = rotas;
      });
  }

  $scope.buscaRotasLocal = function (){
    $scope.localRotas =  HttpService.getRotasLocal();
    $scope.$broadcast('scroll.refreshComplete');
  }

$scope.visualizarRota = function($rota){

  $state.go('menu.route');

  //Instanciar o DistanceMatrixService
  var service = new google.maps.DistanceMatrixService();
  //executar o DistanceMatrixService
    service.getDistanceMatrix(
    {
        //Origem
        origins: [$rota.partida],
        //Destino
        destinations: [$rota.destino],
        //Modo (DRIVING | WALKING | BICYCLING)
        travelMode: google.maps.TravelMode.DRIVING,
        //Sistema de medida (METRIC | IMPERIAL)
        unitSystem: google.maps.UnitSystem.METRIC
        //Vai chamar o callback
    }, callback);
    //Tratar o retorno do DistanceMatrixService
    function callback(response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK)
            $("#map").attr("src", "https://maps.google.com/maps?saddr=" + response.originAddresses + "&daddr=" + response.destinationAddresses + "&output=embed");
        };


};

 $scope.localRota = function($rota){
   HttpService.localRota($rota);
   swal("Salvo!", "Rota sincronizada com sucesso.", "success");
   $state.go('menu.listRoute');
 }

 $scope.verificaRota = function($rota) {
   let rotasLocal = HttpService.getRotasLocal();
   let qtd = Object.keys(rotasLocal).length;

    if(rotasLocal == false){
      $rota['chave'] = false;
    }else{
      for(var i = 0; i <= qtd - 1; i++){
        if($rota.id_rota == rotasLocal[i].id_rota){
          $rota['chave'] = true;
          break;
        }else{
          $rota['chave'] = false;
        }
      };
    }
    $rootScope.detalheRota = $rota;
    $state.go('menu.detalheRota');
 };

 $scope.removeLocalRota = function($rota){
  swal({
    title: "Têm certeza que deseja remover essa rota da sua lista?",
    text: "Essa ação não podera ser revertida",
    type: "warning",
    showCancelButton: true,
    cancelButtonText:"Cancelar",
    confirmButtonColor: "blue",
    confirmButtonText: "Sim, tenho certeza",
    closeOnConfirm: false
    },
    function(){
      var retorno = HttpService.removeLocalRota($rota);
      if(retorno == true)
        swal("Removido!", "Sua rota acaba de ser excluida com sucesso.", "success");
      });
    };

  $scope.sincronizar = function(){
    var tempo = ocorrenciasService.getTempoRotas();
    var manutencao = ocorrenciasService.getManutencao();
    var fiscalizacao = ocorrenciasService.getFiscalizacao();
    var descansoPernoite = ocorrenciasService.getDescansoPernoite();
    var cliente = ocorrenciasService.getCliente();
    var cargaDescarga = ocorrenciasService.getCargaDescarga();
    var alimentacao = ocorrenciasService.getAlimentacao();
    var abastecimento = ocorrenciasService.getAbastecimento();

    var cont = 0;

    if(tempo.length != 0){
      for(cont in tempo){
        ocorrenciasService.bancoTempoRotas(tempo[cont]);
      }
      cont = 0;
    };

    if(manutencao.length != 0){
      for(cont in manutencao){
        ocorrenciasService.bancoManutencao(manutencao[cont]);
      }
      cont = 0;
    };

    if(fiscalizacao.length != 0){
      for(cont in fiscalizacao){
        ocorrenciasService.bancoFiscalizacao(fiscalizacao[cont]);
      }
      cont = 0;
    };

    if(descansoPernoite.length != 0){
      for(cont in descansoPernoite){
        ocorrenciasService.bancoDescansoPernoite(descansoPernoite[cont]);
      }
      cont = 0;
    };

    if(cliente.length != 0){
      for(cont in cliente){
        ocorrenciasService.bancoCliente(cliente[cont]);
      }
      cont = 0;
    };

    if(cargaDescarga.length != 0){
      for(cont in cargaDescarga){
        ocorrenciasService.bancoCargaDescarga(cargaDescarga[cont]);
      }
      cont = 0;
    };

    if(alimentacao.length != 0){
      for(cont in alimentacao){
        ocorrenciasService.bancoAlimentacao(alimentacao[cont]);
      }
      cont = 0;
    };

    if(abastecimento.length != 0){
      for(cont in abastecimento){
        ocorrenciasService.bancoAbastecimento(abastecimento[cont]);
      }
      cont = 0;
    };
    swal("Sincronizado!", "Dados sincronizados com sucesso.", "success");
    localStorage.clear();
  }
});

angular.module('starter').controller('ocorrenciasController',   function($scope,ocorrenciasService,$state,$rootScope,ionicTimePicker){
const id = $rootScope.detalheRota.id_rota;

$scope.tempo = {id_rota:id};
$scope.info = {id_rota:id};

var hora = null;

$scope.continuarRota = function(){
  $state.go('menu.route');
  console.log(id);
}

$scope.dataPicker = function(){
  var ipObj1 = {
  callback: function (val) {      //Mandatory
    if (typeof (val) === 'undefined') {
      console.log('Time not selected');
    } else {
      var selectedTime = new Date(val * 1000);
      console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
      var hora = selectedTime.getUTCHours()+':'+selectedTime.getUTCMinutes();
    }
  },
  inputTime: 50400,   //Optional
  format: 24,         //Optional
  step: 15,           //Optional
  setLabel: 'Salvar'    //Optional
};

 ionicTimePicker.openTimePicker(ipObj1);
 console.log(ipObj1);
}

  var sweetAlert = function(retorno){
    if(retorno == true){
      swal("Bom Trabalho!", "Ocorrencia cadastrada com sucesso!", "success");
    }
  };

  var verifica = function(info){
    console.log(info);
    var cont = info.length;
    for(var i=0; i < info.length; i++){
      if(id != info[i].id_rota){
        info.splice([i],1);
      }
    }
    return info;
  }

  $scope.inicioFimLocal = function(){
      let retorno = ocorrenciasService.Tempo($scope.tempo);
      sweetAlert(retorno);
      $state.go('menu.tempoRotas');
  };

  $scope.getTempoRotas = function(){
    var info = ocorrenciasService.getTempoRotas();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteTempoRota = function(tempo){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteTempoRota(tempo);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.cargaDescarga = function(){
    let retorno = ocorrenciasService.cargaDescarga($scope.info);
    sweetAlert(retorno);
    $state.go('menu.cargaDescarga');
  };

  $scope.getCargaDescarga = function(){
    var info = ocorrenciasService.getCargaDescarga();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteCargaDescarga = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteCargaDescarga(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.alimentacao = function(){
    let retorno = ocorrenciasService.alimentacao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.alimentacao');
  }

  $scope.getAlimentacao = function(){
    var info = ocorrenciasService.getAlimentacao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteAlimentacao = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteAlimentacao(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.descansoPernoite = function(){
    let retorno = ocorrenciasService.descansoPernoite($scope.info);
    sweetAlert(retorno);
    $state.go('menu.descansoPernoite');
  }

  $scope.getDescansoPernoite = function(){
    var info = ocorrenciasService.getDescansoPernoite();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteDescansoPernoite = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteDescansoPernoite(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.manutencao = function(){
    let retorno = ocorrenciasService.manutencao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.manutencao');
  }

  $scope.getManutencao = function(){
    var info = ocorrenciasService.getManutencao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteManutencao = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteManutencao(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.abastecimento = function(){
    let retorno = ocorrenciasService.abastecimento($scope.info);
    sweetAlert(retorno);
    $state.go('menu.abastecimento');
  }

  $scope.getAbastecimento = function(){
    var info = ocorrenciasService.getAbastecimento();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteAbastecimento = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteAbastecimento(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };


  $scope.fiscalizacao = function(){
    let retorno = ocorrenciasService.fiscalizacao($scope.info);
    sweetAlert(retorno);
    $state.go('menu.fiscalizacao');
  }

  $scope.getFiscalizacao = function(){
    var info = ocorrenciasService.getFiscalizacao();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteFiscalizacao = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteFiscalizacao(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

  $scope.cliente = function(){
    let retorno = ocorrenciasService.cliente($scope.info);
    sweetAlert(retorno);
    $state.go('menu.cliente');
  }

  $scope.getCliente = function(){
    var info = ocorrenciasService.getCliente();
    info = verifica(info);
    $scope.info = info;
  }

  $scope.deleteCliente = function(info){
    swal({
      title: "Têm certeza que deseja remover o registro?",
      text: "Essa ação não podera ser revertida",
      type: "warning",
      showCancelButton: true,
      cancelButtonText:"Cancelar",
      confirmButtonColor: "blue",
      confirmButtonText: "Sim, tenho certeza",
      closeOnConfirm: false
      },
      function(){
        var retorno = ocorrenciasService.deleteCliente(info);
        if(retorno == true)
          swal("Removido!", "Registro removido com sucesso.", "success");
        });
  };

});

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
