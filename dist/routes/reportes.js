"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)(); //import * as accions from "../controllers/accion.controller";

router.use(cors()).use(bodyParser.json()).use(compression());

var request = require("request");

var urlReporte = 'http://3.99.76.226:8080/broker/rest/reporte';
router.get('/memo/:id', function (req, res, next) {
  var id = req.params.id; //31857e92-dd2c-4c00-8db7-1d25ee4bfa93

  var dir = urlReporte + "/memo/" + id;
  request.get({
    url: dir
  }, function (err, response, body) {
    //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
    var data = response.body;
    res.json({
      data: data
    });
  });
});
router.get('/pago/:id', function (req, res, next) {
  var id = req.params.id; //31857e92-dd2c-4c00-8db7-1d25ee4bfa93

  var dir = urlReporte + "/pago/" + id;
  request.get({
    url: dir
  }, function (err, response, body) {
    //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
    var data = response.body;
    res.json({
      data: data
    });
  });
});
router.get('/comisionPorCobrar/:id', function (req, res, next) {
  var id = req.params.id; //31857e92-dd2c-4c00-8db7-1d25ee4bfa93

  var dir = urlReporte + "/comisionPorCobrar/" + id;
  request.get({
    url: dir
  }, function (err, response, body) {
    //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
    var data = response.body;
    res.json({
      data: data
    });
  });
});
router.post('/vencimientoPolizasPorCompania', function (req, res, next) {
  var body = JSON.stringify(req.body);
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
    var data = response.body;
    res.json({
      data: data
    });
  });
});
router.post('/produccionPorSucursalCompania', function (req, res, next) {
  var body = JSON.stringify(req.body);
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
    var data = response.body;
    res.json({
      data: data
    });
  });
});
router.post('/produccion', function (req, res, next) {
  var body = JSON.stringify(req.body);
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
    var data = response.body;
    res.json({
      data: data
    });
  });
});
var _default = router;
exports["default"] = _default;