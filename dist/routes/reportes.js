"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mailers = require("../mailers");

var _database = require("../database/database");

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)(); //import * as tokenVerificacion  from '../jwt/jwtVerificacion'
//import * as accions from "../controllers/accion.controller";

router.use(cors()).use(bodyParser.json()).use(compression());

var request = require("request");

var fs = require("fs");

var urlReporte = 'http://localhost:8080/broker/rest/reporte'; //,tokenVerificacion.ensureToken   aumentar para revisar el token

router.get('/memo/:id', function (req, res, next) {
  var id = req.params.id;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/memo/" + id;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.get('/poliza/:id', function (req, res, next) {
  var id = req.params.id;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/poliza/" + id;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.get('/poliza/:id/:tipo', function (req, res, next) {
  var _req$params = req.params,
      id = _req$params.id,
      tipo = _req$params.tipo;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/poliza/" + id + "/" + tipo;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.get('/siniestro/:id', function (req, res, next) {
  var id = req.params.id;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/siniestro/" + id;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.get('/pago/:id', function (req, res, next) {
  var id = req.params.id;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/pago/" + id;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.get('/vencimientoPoliza/:id', function (req, res, next) {
  var id = req.params.id;

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/vencimientoPoliza/" + id;
    request.get({
      url: dir
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      var data = response.body;
      /* const personals =  sequelize.query(`  select cs.nombre nombrecompania,a.correocobranza,a.direccionasegurado,a.nombrecompleto as nombreasegurado,a.telefonoasegurado,a.telefonodomicilio,r.nombre nombreramo,s.nombre as sucursal,p.nropoliza ,p.valorasegurado ,p.fechafin 
      from poliza p 
      inner join sucursal s on s.id=p.sucursalid 
      inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
      inner join ramo r on r.id=rc.ramoid
      inner join asegurado a on a.id=p.tomadorid 
      inner join compania_seguro cs on cs.id=p.companiaseguroid 
      where 
      p.id= '`+ id + `'
      order by cs.nombre,a.nombrecompleto,p.fechamodificacion desc `
        , {
          type: QueryTypes.SELECT
        });
      */

      var mensaje = "Poliza vencida por favor apersonarse a las oficinas de su Broker...";
      var mailOptions = {
        from: 'gamsc@gmsantacruz.gob.bo',
        to: 'dticlla@gmsantacruz.gob.bo',
        //to: personals[0].correocobranza,
        //subject: 'Vencimiento de Poliza - ' +personals[0].nropoliza,
        subject: 'Vencimiento de Poliza',
        text: mensaje,
        html: '',
        attachments: [{
          /*  filename: 'archivo.pdf',    
           contents: buf,   
           cid: cid    */
          //filename: 'poliza'+personals[0].nropoliza+'.pdf',
          filename: 'poliza.pdf',
          path: 'data:application/pdf;base64,' + data
        }]
        /*  html:`<h1>Esta es una etiqueta H1. Utilízala en el título.</h1>
         <h2>Esta es una etiqueta H2. Utilízala en los encabezados de secciones.</h2>
         <h3>Esta es una etiqueta H3. Utilízala en sub-secciones.</h3>
         <h4>Esta es una etiqueta H4. No se usan muy a menudo.</h4>
         <h5>Esta es una etiqueta H5.</h5>
         <h6>Esta es una etiqueta H6.</h6>` */

      }; //envio de correos

      _mailers.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.json({
            data: 'Error al enviar: ' + error
          });
          console.log('mensaje: ' + error);
        } else {
          res.json({
            data: 'Email enviado: ' + info.response
          });
          console.log('Email enviado: ' + info.response);
        }

        _mailers.transporter.close();
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.post('/comisionPorCobrar', function (req, res, next) {
  //const { id } = req.params;
  var body = JSON.stringify(req.body);

  try {
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    var dir = urlReporte + "/comisionPorCobrar";
    request.post({
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.post('/vencimientoPolizasPorCompania', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/vencimientoPolizaPorCompania";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.post('/produccionPorSucursalCompania', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionPorSucursalCompania";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
router.post('/produccion', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccion";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE SINIESTRO */

router.post('/siniestroPorEmpresa', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/siniestroPorEmpresa";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE SINIESTRO */

router.post('/siniestroPorSucursal', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/siniestroPorSucursal";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION COMISIONES */

router.post('/produccionComisionGeneral', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionComisionGeneral";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION COMISIONES EGRESO */

router.post('/produccionComisionEgreso', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionComisionEgreso";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION COMISIONES INGRESO */

router.post('/produccionComisionIngreso', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionComisionIngreso";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION PRIMA NETA GENERAL */

router.post('/produccionPrimaNetaGeneral', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionPrimaNetaGeneral";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION PRIMA NETA EGRESO */

router.post('/produccionPrimaNetaEgreso', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionPrimaNetaEgreso";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PRODUCCION PRIMA NETA INGRESO */

router.post('/produccionPrimaNetaIngreso', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/produccionPrimaNetaIngreso";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE POLIZAS EN VENCIMIENTO */

router.post('/polizasAutomotorVencimiento', function (req, res, next) {
  var body = JSON.stringify(req.body);

  try {
    var dir = urlReporte + "/polizasAutomotorVencimiento";
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE PAGOS REALIZADOS */

router.post('/pagosRealizados/:tipo', function (req, res, next) {
  var body = JSON.stringify(req.body);
  var tipo = req.params.tipo;

  try {
    var dir = urlReporte + "/pagosRealizados/" + tipo;
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
/**REPORTE DE SINIESTROS REALIZADOS */

router.post('/siniestrosRealizados/:tipo', function (req, res, next) {
  var body = JSON.stringify(req.body);
  var tipo = req.params.tipo;

  try {
    var dir = urlReporte + "/siniestrosRealizados/" + tipo;
    request.post({
      /*     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, */
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      url: dir,
      body: body
    }, function (err, response, body) {
      //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
      try {
        var data = response.body;
        res.json({
          data: data
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {
        estado: false,
        "error": error.message
      }
    });
  }
});
var _default = router;
exports["default"] = _default;