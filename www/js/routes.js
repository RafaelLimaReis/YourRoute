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

  .state('menu.ajuda',{
    url:'/ajuda',
    views:{
      'Conteudo':{
        templateUrl:'templates/ajuda.html'
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
