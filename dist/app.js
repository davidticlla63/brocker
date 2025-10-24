"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _empresas = _interopRequireDefault(require("./routes/empresas"));
var _sucursals = _interopRequireDefault(require("./routes/sucursals"));
var _usuarios = _interopRequireDefault(require("./routes/usuarios"));
var _sucursalUsuarios = _interopRequireDefault(require("./routes/sucursalUsuarios"));
var _perfil = _interopRequireDefault(require("./routes/perfil"));
var _paginas = _interopRequireDefault(require("./routes/paginas"));
var _areaTrabajo = _interopRequireDefault(require("./routes/areaTrabajo"));
var _personal = _interopRequireDefault(require("./routes/personal"));
var _permisos = _interopRequireDefault(require("./routes/permisos"));
var _departamento = _interopRequireDefault(require("./routes/departamento"));
var _accion = _interopRequireDefault(require("./routes/accion"));
var _asegurado = _interopRequireDefault(require("./routes/asegurado"));
var _companiaSeguro = _interopRequireDefault(require("./routes/companiaSeguro"));
var _tipoRamo = _interopRequireDefault(require("./routes/tipoRamo"));
var _ramo = _interopRequireDefault(require("./routes/ramo"));
var _banco = _interopRequireDefault(require("./routes/banco"));
var _subramo = _interopRequireDefault(require("./routes/subramo"));
var _SubRamoCompania = _interopRequireDefault(require("./routes/SubRamoCompania"));
var _tipoPoliza = _interopRequireDefault(require("./routes/tipoPoliza"));
var _poliza = _interopRequireDefault(require("./routes/poliza"));
var _archivo = _interopRequireDefault(require("./routes/archivo"));
var _tipomemo = _interopRequireDefault(require("./routes/tipomemo"));
var _contratante = _interopRequireDefault(require("./routes/contratante"));
var _vendedor = _interopRequireDefault(require("./routes/vendedor"));
var _carpeta = _interopRequireDefault(require("./routes/carpeta"));
var _tipoCambio = _interopRequireDefault(require("./routes/tipoCambio"));
var _plan = _interopRequireDefault(require("./routes/plan"));
var _polizaDetalle = _interopRequireDefault(require("./routes/polizaDetalle"));
var _polizaDetalleGeneral = _interopRequireDefault(require("./routes/polizaDetalleGeneral"));
var _polizaDetallePersona = _interopRequireDefault(require("./routes/polizaDetallePersona"));
var _polizaDetallePersonaTitular = _interopRequireDefault(require("./routes/polizaDetallePersonaTitular"));
var _polizaDetalleAdicional = _interopRequireDefault(require("./routes/polizaDetalleAdicional"));
var _memo = _interopRequireDefault(require("./routes/memo"));
var _pago = _interopRequireDefault(require("./routes/pago"));
var _siniestro = _interopRequireDefault(require("./routes/siniestro"));
var _requisito = _interopRequireDefault(require("./routes/requisito"));
var _siniestroSeguimiento = _interopRequireDefault(require("./routes/siniestroSeguimiento"));
var _cobranzaMotivo = _interopRequireDefault(require("./routes/cobranzaMotivo"));
var _ramoCompania = _interopRequireDefault(require("./routes/ramoCompania"));
var _reportes = _interopRequireDefault(require("./routes/reportes"));
var _siniestroRequisito = _interopRequireDefault(require("./routes/siniestroRequisito"));
var _paramProduccion = _interopRequireDefault(require("./routes/paramProduccion"));
var _atributo = _interopRequireDefault(require("./routes/atributo"));
var _periodo = _interopRequireDefault(require("./routes/periodo"));
var _documento = _interopRequireDefault(require("./routes/documento"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//const helmet = require('helmet');

// importing routes

var http = require('http');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 50,
  type: 'application/json'
});
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 50,
  type: 'application/x-www-form-urlencoded'
});

//const app = express();

var app = (0, _express["default"])();
/* const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // Will not compress responses, if this header is present
    return false;
  }
  // Resort to standard compression
  return compression.filter(req, res);
};

// Compress all HTTP responses
app.use(compression({
  level:100,
  // filter: Decide if the answer should be compressed or not,
  // depending on the 'shouldCompress' function above
  filter: shouldCompress,
  // threshold: It is the byte threshold for the response 
  // body size before considering compression, the default is 1 kB
  threshold: 10*1000
})); */

// middlewares
app.use(function (req, res, next) {
  res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests');
  next();
});
app.use(jsonParser);
app.use(urlencodedParser);

//app.use(express.bodyParser({limit: '50mb'}));

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());

/* 
var rdlc = require('../index.js')
rdlc ({ report: 'test.rdl' }, function (err, result) {
  if (!!err) throw err;
  var fs = require('fs')
  fs.writeFileSync('test.pdf', result)
})
 */

app.use(function (req, res, next) {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});
app.use('/api/empresas', _empresas["default"]);
app.use('/api/sucursals', _sucursals["default"]);
app.use('/api/usuarios', _usuarios["default"]);
app.use('/api/sucursalUsuarios', _sucursalUsuarios["default"]);
app.use('/api/perfils', _perfil["default"]);
app.use('/api/paginas', _paginas["default"]);
app.use('/api/permisos', _permisos["default"]);
app.use('/api/accions', _accion["default"]);
app.use('/api/tipocambios', _tipoCambio["default"]);

//sistema asegurado
app.use('/api/areaTrabajos', _areaTrabajo["default"]);
app.use('/api/personals', _personal["default"]);
app.use('/api/departamentos', _departamento["default"]);
app.use('/api/asegurados', _asegurado["default"]);
//
app.use('/api/companias', _companiaSeguro["default"]);
app.use('/api/tiporamos', _tipoRamo["default"]);
app.use('/api/ramos', _ramo["default"]);
app.use('/api/bancos', _banco["default"]);
app.use('/api/subramos', _subramo["default"]);
app.use('/api/subRamoCompanias', _SubRamoCompania["default"]);
app.use('/api/plans', _plan["default"]);
app.use('/api/tipomemos', _tipomemo["default"]);
app.use('/api/contratantes', _contratante["default"]);
app.use('/api/vendedors', _vendedor["default"]);
//polizas
app.use('/api/atributo', _atributo["default"]);
app.use('/api/tipoPolizas', _tipoPoliza["default"]);
app.use('/api/polizas', _poliza["default"]);
app.use('/api/polizas/automotor', _polizaDetalle["default"]);
app.use('/api/polizas/generals', _polizaDetalleGeneral["default"]);
app.use('/api/polizas/personas', _polizaDetallePersona["default"]);
app.use('/api/polizas/dependientes', _polizaDetallePersonaTitular["default"]);
app.use('/api/polizas/adicionales', _polizaDetalleAdicional["default"]);

//archivos
app.use('/api/carpetas', _carpeta["default"]);
app.use('/api/archivos', _archivo["default"]);
//memos
app.use('/api/memos', _memo["default"]);
app.use('/api/paramProduccion', _paramProduccion["default"]);
//pagos
app.use('/api/pago', _pago["default"]);
//cobranza
app.use('/api/cobranzaMotivo', _cobranzaMotivo["default"]);
app.use('/api/ramoCompania', _ramoCompania["default"]);
//siniestro
app.use('/api/siniestro', _siniestro["default"]);
app.use('/api/requisito', _requisito["default"]);
app.use('/api/siniestroRequisito', _siniestroRequisito["default"]);
app.use('/api/seguimiento', _siniestroSeguimiento["default"]);

//reportes
app.use('/api/reporte', _reportes["default"]);

//parametrizacion
app.use('/api/periodo', _periodo["default"]);

//documento Word
app.use('/api/documento', _documento["default"]);

//protocolo de biometrico ZKTECO G3

/*
 Nº	Campo	Descripción	Ejemplo
1	PIN	ID del usuario en el reloj	10
2	Fecha	Fecha de la marcación	2025-08-15
3	Hora	Hora de la marcación	09:39:29
4	Verificación	Método de verificación (0=Password, 1=Huella, 15=Tarjeta, etc.)	0
5	Estado	Tipo de marcación (0=Entrada, 1=Salida, 2=Break, etc.)	1
6	WorkCode	Código de trabajo asignado	0
7	Reservado1	Usado en algunos modelos para áreas especiales	0
8	Reservado2	Usado en algunos modelos para GPS o datos adicionales	0
9	Reservado3	Otro dato interno	0
10	Reservado4	Otro dato interno	0 
*/

// Middleware para capturar texto crudo
app.use('/iclock/cdata', _express["default"].text({
  type: '*/*'
}));
var DEVICE_SN = 'AEH2232960135';
var DEVICE_IP = '192.168.241.157';

// Cuando el dispositivo te pregunta si hay algo que hacer
/* app.get('/iclock/getrequest', (req, res) => {
    console.log('Solicitud GETREQUEST:', req.query);

    // Aquí podrías indicar que envíe toda la tabla de usuarios
    // usando un comando especial, pero si solo quieres recibir cuando él envíe, responde vacío.
    res.send('');
}); */

// Cuando el dispositivo envía datos de usuarios
/* app.post('/iclock/cdata', async (req, res) => {
  const raw = req.body.trim();
  console.log('ATTLOG recibido:\n', raw);

  const campos = raw.split(/\s+/);
  const pin = campos[0];
  const fechaHora = campos[1] + ' ' + campos[2];
  const tipoVerificacion = campos[3];
  const estado = campos[4];

  const usuarios = await obtenerUsuarios();
  console.log('Usuarios:', usuarios);
  const infoUsuario = usuarios[pin] || { nombre: 'Desconocido' };

  console.log({
    pin,
    usuario: infoUsuario,
    fechaHora,
    tipoVerificacion,
    estado
  });

  res.send('OK');
}); */

/* function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: DEVICE_IP,
      port: 80,
      path: `/iclock/cdata?SN=${DEVICE_SN}&table=USER`,
      method: 'POST'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const lineas = data.trim().split('\n');
        const usuarios = {};

        lineas.forEach(line => {
          const campos = line.split(/\s+/);
          const pin = campos[0];
          const nombre = campos[1]; // depende de cómo venga el nombre
          usuarios[pin] = { nombre };
        });

        resolve(usuarios);
      });
    });

    req.on('error', (err) => {
      console.error('Error al obtener usuarios:', err.message);
      resolve({});
    });

    req.end();
  });
}
 */

app.get('/iclock/getrequest', function (req, res) {
  console.log("Solicitud GET desde el biométrico:", req.query);

  // Si quieres que el biométrico te devuelva los usuarios:
  // Le envías un "CMD=DATA QUERY USERINFO"
  var sn = req.query.SN;
  var response = "GET OPTION FROM:".concat(sn, "\n") + "Content-Length: 27\n\n" + "CMD=DATA QUERY USERINFO\tTable=USER";
  res.type('text/plain');
  res.send(response);
});
app.post('/iclock/cdata', function (req, res) {
  var raw = req.body.trim();
  console.log('Evento recibido RAW:', raw);
  var parts = raw.split(/\s+/);
  var data = {
    pin: parts[0] || null,
    fecha: parts[1] || null,
    hora: parts[2] || null,
    verificacion: parts[3] || null,
    estado: parts[4] || null,
    workCode: parts[5] || null,
    reservado1: parts[6] || null,
    reservado2: parts[7] || null,
    reservado3: parts[8] || null,
    reservado4: parts[9] || null
  };
  console.log('Parseado:', data);
  res.status(200).send('OK');
});

/* app.get('/iclock/getrequest', (req, res) => {
    res.status(200).send('');
}); */
var _default = exports["default"] = app;