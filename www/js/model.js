var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var core_use = require('cors');
var pg = require('pg');
var md5 = require('md5');

app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'bd_yourroute2', //env var: PGDATABASE
  password: 'root', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var pool = new pg.Pool(config);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////REQUISIÇÕES DE BUSCA//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/consultaRotas', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('SELECT * FROM tb_rotas',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoTempoRotas', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO tempo (id_rota,data_tempo,hora,local_tempo,status) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',\'' + req.body.local + '\',\'' + req.body.status + '\')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoManutencao', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO manutencao (id_rota,data_manutencao,hora,valor,tipo) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',' + req.body.valor + ',\'' + req.body.tipo + '\')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoFiscalizacao', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO fiscalizacao (id_rota,data_fiscalizacao,hora,tipo) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',\'' + req.body.tipo + '\')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoDescansoPernoite', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO descansopernoite (id_rota,data_descanso,hora,valor) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',' + req.body.valor + ')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoCliente', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO cliente (id_rota,data_cliente,hora,observacao) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',\'' + req.body.observacao + '\')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoCargaDescarga', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO cargadescarga (id_rota,data_cargadescarga,hora,status) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',\'' + req.body.status + '\')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoAlimentacao', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO alimentacao (id_rota,data_alimentacao,hora,valor) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',' + req.body.valor + ')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.post('/bancoAbastecimento', function (req, res) {

	// to run a query we can acquire a client from the pool,
	// run a query on the client, and then return the client to the pool
	pool.connect(function(err, client, done) {
	  if(err) {
		return console.error('error fetching client from pool', err);
	  }
	  client.query('INSERT INTO abastecimento (id_rota,data_abastecimento,hora,km,valor) VALUES(' + req.body.id_rota + ', \'' + req.body.date + '\',\'' + req.body.hora + '\',' + req.body.km + ',' + req.body.valor + ')',
      function(err, result) {
		//call `done()` to release the client back to the pool
		done();

		if(err) {
		  return console.error('error running query', err);
		}
		res.setHeader('Access-Control-Allow-Origin','*');
    res.json(result.rows); // servidor retorna a consulta em formato json
		});
	});
});

app.listen(2000);
