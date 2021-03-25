
import Asegurado from "../models/Asegurado";

export async function getAsegurados(req, res) {
    try {
        const asegurados = await Asegurado.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: asegurados
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createAsegurado(req, res) {
    const {
        apellidopaterno,
        apellidomaterno,
        nombres,
        nombrecompleto,
        ci,
        nit,
        telefonoasegurado,
        telefonodomicilio,
        telefonotrabajo,
        correo,
        fotografia,
        direccionasegurado,
    
        //personalcobranza,
        apellidopaternocobranza,
        apellidomaternocobranza,
        nombrescobranza,
        nombrecompletocobranza,
        telefonocobranza,
        direccioncobranza,
    
        //nombrerepresentante,
        apellidopaternorepresentante,
        apellidomaternorepresentante,
        nombresrepresentante,
        nombrecompletorepresentante,
        direccionrepresentante,
        emailrepresentante,
        telefonorepresentante,
        celularrepresentante,
    
        sucursalid,
        ejecutivoid,
        carteraid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newAsegurado = await Asegurado.create({
            apellidopaterno,
        apellidomaterno,
        nombres,
        nombrecompleto,
        ci,
        nit,
        telefonoasegurado,
        telefonodomicilio,
        telefonotrabajo,
        correo,
        fotografia,
        direccionasegurado,
    
        //personalcobranza,
        apellidopaternocobranza,
        apellidomaternocobranza,
        nombrescobranza,
        nombrecompletocobranza,
        telefonocobranza,
        direccioncobranza,
    
        //nombrerepresentante,
        apellidopaternorepresentante,
        apellidomaternorepresentante,
        nombresrepresentante,
        nombrecompletorepresentante,
        direccionrepresentante,
        emailrepresentante,
        telefonorepresentante,
        celularrepresentante,
    
        sucursalid,
        ejecutivoid,
        carteraid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado:'ACT'
        }, {
            fields: ['apellidopaterno',
            'apellidomaterno',
            'nombres',
            'nombrecompleto',
            'ci',
            'nit',
            'telefonoasegurado',
            'telefonodomicilio',
            'telefonotrabajo',
            'correo',
            'fotografia',
            'direccionasegurado',
        
            //personalcobranza,
            'apellidopaternocobranza',
            'apellidomaternocobranza',
            'nombrescobranza',
            'nombrecompletocobranza',
            'telefonocobranza',
            'direccioncobranza',
        
            //nombrerepresentante,
            'apellidopaternorepresentante',
            'apellidomaternorepresentante',
            'nombresrepresentante',
            'nombrecompletorepresentante',
            'direccionrepresentante',
            'emailrepresentante',
            'telefonorepresentante',
            'celularrepresentante',
        
            'sucursalid',
            'ejecutivoid',
            'carteraid',
             'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newAsegurado) {
            return res.json({
                message: 'Asegurado created successfully',
                data: newAsegurado
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOneAsegurado(req, res) {
    try {
        const { id } = req.params;
        const asegurado = await Asegurado.findOne({
            where: {
                id
            }
        });
        res.json({
            data: asegurado
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deleteAsegurado(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Asegurado.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Asegurado deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateAsegurado(req, res) {
    const { id } = req.params;
    const {  apellidopaterno,
        apellidomaterno,
        nombres,
        nombrecompleto,
        ci,
        nit,
        telefonoasegurado,
        telefonodomicilio,
        telefonotrabajo,
        correo,
        fotografia,
        direccionasegurado,
    
        //personalcobranza,
        apellidopaternocobranza,
        apellidomaternocobranza,
        nombrescobranza,
        nombrecompletocobranza,
        telefonocobranza,
        direccioncobranza,
    
        //nombrerepresentante,
        apellidopaternorepresentante,
        apellidomaternorepresentante,
        nombresrepresentante,
        nombrecompletorepresentante,
        direccionrepresentante,
        emailrepresentante,
        telefonorepresentante,
        celularrepresentante,
    
        sucursalid,
        ejecutivoid,
        carteraid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Asegurado.update({
            apellidopaterno,
            apellidomaterno,
            nombres,
            nombrecompleto,
            ci,
            nit,
            telefonoasegurado,
            telefonodomicilio,
            telefonotrabajo,
            correo,
            fotografia,
            direccionasegurado,
        
            //personalcobranza,
            apellidopaternocobranza,
            apellidomaternocobranza,
            nombrescobranza,
            nombrecompletocobranza,
            telefonocobranza,
            direccioncobranza,
        
            //nombrerepresentante,
            apellidopaternorepresentante,
            apellidomaternorepresentante,
            nombresrepresentante,
            nombrecompletorepresentante,
            direccionrepresentante,
            emailrepresentante,
            telefonorepresentante,
            celularrepresentante,
        
            sucursalid,
            ejecutivoid,
            carteraid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        },{
            where: {
                id
            }
        });

        const asegurados = await Asegurado.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Asegurado update successfully',
            count: asegurados
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaAsegurado(req, res) {
    const { id } = req.params;

   console.log("bajaAsegurado");
    const { 
   //    id,
        usuariobaja
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Asegurado.update({   
            usuariobaja,
           /*  fechamodificacion:moment().format(), */
           fechambaja:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const asegurados = await Asegurado.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Asegurado baja successfully',
            count: asegurados
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}