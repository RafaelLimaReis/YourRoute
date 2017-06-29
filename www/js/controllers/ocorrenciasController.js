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
      var $hora = selectedTime.getUTCHours()+':'+selectedTime.getUTCMinutes();
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
