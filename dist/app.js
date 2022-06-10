"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// importing routes
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json({
  limit: 1024 * 1024 * 50,
  type: 'application/json'
});
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 50,
  type: 'application/x-www-form-urlencoded'
}); //const app = express();

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

app.use(jsonParser);
app.use(urlencodedParser); //app.use(express.bodyParser({limit: '50mb'}));

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

app.use('/api/empresas', _empresas["default"]);
app.use('/api/sucursals', _sucursals["default"]);
app.use('/api/usuarios', _usuarios["default"]);
app.use('/api/sucursalUsuarios', _sucursalUsuarios["default"]);
app.use('/api/perfils', _perfil["default"]);
app.use('/api/paginas', _paginas["default"]);
app.use('/api/permisos', _permisos["default"]);
app.use('/api/accions', _accion["default"]);
app.use('/api/tipocambios', _tipoCambio["default"]); //sistema asegurado

app.use('/api/areaTrabajos', _areaTrabajo["default"]);
app.use('/api/personals', _personal["default"]);
app.use('/api/departamentos', _departamento["default"]);
app.use('/api/asegurados', _asegurado["default"]); //

app.use('/api/companias', _companiaSeguro["default"]);
app.use('/api/tiporamos', _tipoRamo["default"]);
app.use('/api/ramos', _ramo["default"]);
app.use('/api/bancos', _banco["default"]);
app.use('/api/subramos', _subramo["default"]);
app.use('/api/subRamoCompanias', _SubRamoCompania["default"]);
app.use('/api/plans', _plan["default"]);
app.use('/api/tipomemos', _tipomemo["default"]);
app.use('/api/contratantes', _contratante["default"]);
app.use('/api/vendedors', _vendedor["default"]); //polizas

app.use('/api/atributo', _atributo["default"]);
app.use('/api/tipoPolizas', _tipoPoliza["default"]);
app.use('/api/polizas', _poliza["default"]);
app.use('/api/polizas/automotor', _polizaDetalle["default"]);
app.use('/api/polizas/generals', _polizaDetalleGeneral["default"]);
app.use('/api/polizas/personas', _polizaDetallePersona["default"]);
app.use('/api/polizas/dependientes', _polizaDetallePersonaTitular["default"]);
app.use('/api/polizas/adicionales', _polizaDetalleAdicional["default"]); //archivos

app.use('/api/carpetas', _carpeta["default"]);
app.use('/api/archivos', _archivo["default"]); //memos

app.use('/api/memos', _memo["default"]);
app.use('/api/paramProduccion', _paramProduccion["default"]); //pagos

app.use('/api/pago', _pago["default"]); //cobranza

app.use('/api/cobranzaMotivo', _cobranzaMotivo["default"]);
app.use('/api/ramoCompania', _ramoCompania["default"]); //siniestro

app.use('/api/siniestro', _siniestro["default"]);
app.use('/api/requisito', _requisito["default"]);
app.use('/api/siniestroRequisito', _siniestroRequisito["default"]);
app.use('/api/seguimiento', _siniestroSeguimiento["default"]); //reportes

app.use('/api/reporte', _reportes["default"]);
var _default = app;
exports["default"] = _default;