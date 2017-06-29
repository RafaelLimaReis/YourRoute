CREATE TABLE abastecimento(
id_abastecimento	SERIAL,
id_rota			INTEGER,
data_abastecimento	DATE,
hora			DATE,
km			INTEGER,
valor			NUMERIC,
CONSTRAINT pk_id_abastecimento PRIMARY KEY(id_abastecimento)
);


CREATE TABLE alimentacao(
id_alimentacao		SERIAL,
id_rota			INTEGER,
data_alimentacao	DATE,
hora			DATE,
valor			NUMERIC,
CONSTRAINT pk_id_alimentacao PRIMARY KEY(id_alimentacao)
);

CREATE TABLE cargaDescarga(
id_carga		SERIAL,
id_rota			INTEGER,
data_cargaDescarga	DATE,
hora			DATE,
status			VARCHAR,
CONSTRAINT pk_id_carga PRIMARY KEY(id_carga)
);

DROP TABLE descansoPernoite

CREATE TABLE cliente(
id_cliente		SERIAL,
id_rota			INTEGER,
data_cliente		DATE,
hora			DATE,
observacao		VARCHAR,
CONSTRAINT pk_id_cliente PRIMARY KEY(id_cliente)
);

CREATE TABLE descansoPernoite(
id_descanso		SERIAL,
id_rota			INTEGER,
data_descanso		DATE,
hora			DATE,
valor			NUMERIC,
CONSTRAINT pk_id_descanso PRIMARY KEY(id_descanso)
);

CREATE TABLE fiscalizacao(
id_fiscalizacao		SERIAL,
id_rota			INTEGER,
data_fiscalizacao	DATE,
hora			DATE,
tipo			VARCHAR,
CONSTRAINT pk_id_fiscalizacao PRIMARY KEY(id_fiscalizacao)
);

CREATE TABLE manutencao(
id_manutencao		SERIAL,
id_rota			INTEGER,
data_manutencao		DATE,
hora			DATE,
valor			NUMERIC,
tipo			VARCHAR,
CONSTRAINT pk_id_manutencao PRIMARY KEY(id_manutencao)
);

CREATE TABLE tempo(
id_tempo		INTEGER,
id_rota			INTEGER,
data_tempo		DATE,
hora			DATE,
local_tempo		VARCHAR,
CONSTRAINT pk_id_tempo PRIMARY KEY(id_tempo)
);