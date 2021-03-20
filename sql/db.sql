CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done boolean NOT NULL,
    projectId integer REFERENCES projects(id)
);

INSERT INTO projects (name, priority, description, deliverydate)
VALUES ('Make a Web App', 1, 'Using Javascript', '2019-05-12');

INSERT INTO projects (name, priority, description, deliverydate)
VALUES ('Make an App', 1, 'Using Dark', '2019-05-13');

INSERT INTO projects (name, priority, description, deliverydate)
VALUES ('Make a Desktop App', 1, 'Using C++', '2019-05-14');

-- Insert task data
INSERT INTO tasks (name, done, projectId)
VALUES ('Download Vuejs', false, 1);

INSERT INTO tasks (name, done, projectId)
VALUES ('Create UI Web', false, 1);

INSERT INTO tasks (name, done, projectId)
VALUES ('Download Flutter', false, 2);

INSERT INTO tasks (name, done, projectId)
VALUES ('Design UI', false, 2);



CREATE TABLE IF NOT EXISTS empresa(
    --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    razonsocial character varying(3000),
    descripcion character varying(3000),
    telefono character varying,
    nit character varying,
    representante  character varying,
    logo bytea,
    usuarioregistro character varying,
    usuariomodificacion character varying,
    fecharegistro timestamp,
    fechamodificacion timestamp,
    estado character varying
);

CREATE TABLE IF NOT EXISTS sucursal(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombre character varying(3000)  not null,
    descripcion character varying(3000),
    telefono character varying,
    actividad character varying,
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null,
     empresaId character varying REFERENCES empresa(id)
);

-- CREATE TABLE IF NOT EXISTS usuario(
--     id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
--     nombrecompleto character varying(3000),
--     usuario character varying(3000),
--     password character varying,
--     usuarioregistro character varying,
--     usuariomodificacion character varying,
--     fecharegistro timestamp,
--     fechamodificacion timestamp,
--     estado character varying
-- );

CREATE TABLE IF NOT EXISTS usuario(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombrecompleto character varying,
    nick character varying  not null unique,
    password character varying  not null,
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    empresaid character varying REFERENCES empresa(id),
    estado character varying  not null
);

CREATE TABLE IF NOT EXISTS perfil(
    --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombre character varying,
    descripcion character varying(300),
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null,
     --sucursalId integer REFERENCES sucursal(id)
     empresaId character varying REFERENCES empresa(id)
);

CREATE TABLE IF NOT EXISTS usuario_perfil(
    --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
     usuarioId character varying REFERENCES usuario(id),
      perfilId character varying REFERENCES perfil(id),
    usuarioregistro character varying,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null
);

CREATE TABLE IF NOT EXISTS sucursal_usuario(
    --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
     usuarioid character varying REFERENCES usuario(id),
      sucursalid character varying REFERENCES sucursal(id),
    usuarioregistro character varying,
    usuariomodificacion character varying,
    fecharegistro timestamp,
    fechamodificacion timestamp,
    estado character varying  not null
);

CREATE TABLE IF NOT EXISTS pagina(
    --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombre character varying  not null,
    descripcion character varying(300),
     url character varying(300),
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp,
    fechamodificacion timestamp,
    tipo character varying,
    paginaId character varying REFERENCES pagina(id),
    estado character varying  not null
);


insert into pagina(nombre,descripcion,url,usuarioregistro,fecharegistro,tipo,estado)
values ('CARTERA','CARTERA','/cartera','dticlla',NOW(),'MODULO','ACT')


insert into pagina(nombre,descripcion,url,usuarioregistro,fecharegistro,tipo,estado,paginaId)
values ('registro asegurado','registro asegurado','/registroAsegurado','dticlla',now(),'PAGINA','ACT','ecac13bc-7b55-4571-9c63-29986d92a681')


CREATE TABLE IF NOT EXISTS accion(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombre character varying  not null,
    descripcion character varying(300),
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying not null,
     paginaid character varying REFERENCES pagina(id)
);



insert into accion(nombre,descripcion,usuarioregistro,fecharegistro,estado,paginaId)
values ('REGISTRAR','REGISTRAR','DTICLLA',NOW(),'ACT','483248aa-71b5-45a0-a00b-a0642c176951'),
('MODIFICAR','MODIFICAR','DTICLLA',NOW(),'ACT','483248aa-71b5-45a0-a00b-a0642c176951'),
('LISTAR','LISTAR','DTICLLA',NOW(),'ACT','483248aa-71b5-45a0-a00b-a0642c176951'),
('APROBAR','APROBAR','DTICLLA',NOW(),'ACT','483248aa-71b5-45a0-a00b-a0642c176951'),
('BAJA','BAJA','DTICLLA',NOW(),'ACT','483248aa-71b5-45a0-a00b-a0642c176951');

/* CREATE TABLE IF NOT EXISTS pagina_accion(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying not null,
     paginaid integer REFERENCES pagina(id),
     accionid integer REFERENCES accion(id)
); */

/* insert into pagina_accion(paginaid,accionid,usuarioregistro,fecharegistro,estado)
values (2,1,'DTICLLA',NOW(),'ACT'),
(2,2,'DTICLLA',NOW(),'ACT'),
(2,3,'DTICLLA',NOW(),'ACT'),
(2,4,'DTICLLA',NOW(),'ACT'),
(2,5,'DTICLLA',NOW(),'ACT')
 */
CREATE TABLE IF NOT EXISTS permiso(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
     accionId character varying REFERENCES accion(id) ,
       /* paginaAccionId integer REFERENCES pagina_accion(id) , */
      paginaId character varying REFERENCES pagina(id),
        perfilId character varying REFERENCES perfil(id),
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null
);



---SISTEMA PATRIA

CREATE TABLE IF NOT EXISTS area_trabajo(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
     nombre character varying not null ,
      descripcion character varying ,
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null,
     empresaid character varying REFERENCES empresa(id)
);


CREATE TABLE IF NOT EXISTS personal(
     --id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    id character varying PRIMARY KEY  DEFAULT  gen_random_uuid(),
    nombrecompleto character varying not null ,
    sexo character varying not null  ,
    fechanacimiento date not null ,
    ci character varying not null ,
    telefono1 character varying,
    telefono2 character varying,
    correo1 character varying,
    correo2 character varying,
    usuarioregistro character varying  not null,
    usuariomodificacion character varying,
    fecharegistro timestamp  not null,
    fechamodificacion timestamp,
    estado character varying  not null,
    areatrabajoid character varying REFERENCES area_trabajo(id),
    sucursalid character varying REFERENCES sucursal(id)
);