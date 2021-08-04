import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

//import * as accions from "../controllers/accion.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());


  var request = require("request");

  router.get('/memo/:id', function(req, res, next) {
    const { id } = req.params;
    //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
    const dir="http://107.23.14.238:8080/broker/rest/reporte/memo/"+id;
    request.get({
        url: dir,  
       
      }, function(err, response, body) {
        //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);

        const data = response.body;
      res.json({
        data: data
    });
      });
      
    });
    
    router.get('/pago/:id', function(req, res, next) {
      const { id } = req.params;
      //31857e92-dd2c-4c00-8db7-1d25ee4bfa93
      const dir="http://107.23.14.238:8080/broker/rest/reporte/pago/"+id;
      request.get({
          url: dir,  
         
        }, function(err, response, body) {
          //console.log("status: " + response.statusCode + "; message: " + response.statusMessage+"; data:"+response.body);
  
          const data = response.body;
        res.json({
          data: data
      });
        });
        
      });
      
export default router;