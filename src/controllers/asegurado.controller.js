import { sequelize } from "../database/database";
import Archivo from "../models/Archivo";
const { QueryTypes } = require('sequelize');
import Asegurado from "../models/Asegurado";

export async function getAsegurados(req, res) {
    try {
        const asegurados = await Asegurado.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: asegurados
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createAsegurado(req, res) {
    const {
        tipoasegurado,
        apellidopaterno,
        apellidomaterno,
        nombres,
        nombrecompleto,
        ci,
        nit,
        sexo,
        telefonoasegurado,
        telefonodomicilio,
        telefonotrabajo,
        correo,
        fotografia,
        direccionasegurado,
        fechanacimiento,

        fechavencimientocarnet,
        fechavencimientobrevet,
        fechavencimientofundempresa,
        relacionasegurado,
        cargorepresentante,

        //personalcobranza,
        apellidopaternocobranza,
        apellidomaternocobranza,
        nombrescobranza,
        nombrecompletocobranza,
        telefonocobranza,
        direccioncobranza,
        correocobranza,

        //nombrerepresentante,
        apellidopaternorepresentante,
        apellidomaternorepresentante,
        nombresrepresentante,
        nombrecompletorepresentante,
        direccionrepresentante,
        emailrepresentante,
        telefonorepresentante,
        celularrepresentante,

        departamentoid,
        sucursalid,
        ejecutivoid,
        carteraid,
        usuarioregistro,
        usuariomodificacion,
        archivos
    } = req.body;
    let t = await sequelize.transaction();
    let newAsegurado;
    try {

        /*   if (tipoasegurado == 'corporativo') {
              fechanacimiento= null;
          } */
        //const transaction= sequelize.transaction;
        newAsegurado = await Asegurado.create({
            tipoasegurado,
            apellidopaterno,
            apellidomaterno,
            nombres,
            nombrecompleto,
            ci,
            nit,
            sexo,
            telefonoasegurado,
            telefonodomicilio,
            telefonotrabajo,
            correo,
            fotografia,
            direccionasegurado,
            fechanacimiento,

            //fechavencimientocarnet:fechavencimientocarnet==null?null:fechavencimientocarnet,
            fechavencimientocarnet,
            fechavencimientobrevet,
            fechavencimientofundempresa,
            relacionasegurado,
            cargorepresentante,
            //personalcobranza,
            apellidopaternocobranza,
            apellidomaternocobranza,
            nombrescobranza,
            nombrecompletocobranza,
            telefonocobranza,
            direccioncobranza,
            correocobranza,

            //nombrerepresentante,
            apellidopaternorepresentante,
            apellidomaternorepresentante,
            nombresrepresentante,
            nombrecompletorepresentante,
            direccionrepresentante,
            emailrepresentante,
            telefonorepresentante,
            celularrepresentante,

            departamentoid,
            sucursalid,
            ejecutivoid,
            carteraid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT'
        }, {
            fields: ['tipoasegurado', 'apellidopaterno',
                'apellidomaterno',
                'nombres',
                'nombrecompleto',
                'ci',
                'nit',
                'sexo',
                'telefonoasegurado',
                'telefonodomicilio',
                'telefonotrabajo',
                'correo',
                'fotografia',
                'direccionasegurado',
                'fechanacimiento',

                'fechavencimientocarnet',
                'fechavencimientobrevet',
                'fechavencimientofundempresa',
                'relacionasegurado',
                'cargorepresentante',
                //personalcobranza,
                'apellidopaternocobranza',
                'apellidomaternocobranza',
                'nombrescobranza',
                'nombrecompletocobranza',
                'telefonocobranza',
                'direccioncobranza',
                'correocobranza',

                //nombrerepresentante,
                'apellidopaternorepresentante',
                'apellidomaternorepresentante',
                'nombresrepresentante',
                'nombrecompletorepresentante',
                'direccionrepresentante',
                'emailrepresentante',
                'telefonorepresentante',
                'celularrepresentante',

                'departamentoid',
                'sucursalid',
                'ejecutivoid',
                'carteraid',
                'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        }, { transaction: t });


        // step 2  archivos
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newAsegurado.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: newAsegurado.id,
                sucursalid: sucursalid,
                carpetaid: archivos[i].carpetaid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'carpetaid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });
        }

        await t.commit();

        if (newAsegurado) {
            return res.json({
                message: 'Asegurado created successfully',
                data: newAsegurado
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newAsegurado) {
                await Asegurado.destroy({ where: { id: newAsegurado.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
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
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
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
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateAsegurado(req, res) {
    const { id } = req.params;
    const { tipoasegurado, apellidopaterno,
        apellidomaterno,
        nombres,
        nombrecompleto,
        ci,
        nit,
        sexo,
        telefonoasegurado,
        telefonodomicilio,
        telefonotrabajo,
        correo,
        fotografia,
        direccionasegurado,
        fechanacimiento,


        fechavencimientocarnet,
        fechavencimientobrevet,
        fechavencimientofundempresa,
        relacionasegurado,
        cargorepresentante,

        //personalcobranza,
        apellidopaternocobranza,
        apellidomaternocobranza,
        nombrescobranza,
        nombrecompletocobranza,
        telefonocobranza,
        direccioncobranza,
        correocobranza,

        //nombrerepresentante,
        apellidopaternorepresentante,
        apellidomaternorepresentante,
        nombresrepresentante,
        nombrecompletorepresentante,
        direccionrepresentante,
        emailrepresentante,
        telefonorepresentante,
        celularrepresentante,

        departamentoid,
        sucursalid,
        ejecutivoid,
        carteraid,
        usuariomodificacion,
        estado, archivos, archivoseliminados } = req.body;
    let t = await sequelize.transaction();
    try {
        const updateRowCount = await Asegurado.update({
            tipoasegurado,
            apellidopaterno,
            apellidomaterno,
            nombres,
            nombrecompleto,
            ci,
            nit,
            sexo,
            telefonoasegurado,
            telefonodomicilio,
            telefonotrabajo,
            correo,
            fotografia,
            direccionasegurado,
            fechanacimiento,

            fechavencimientocarnet,
            fechavencimientobrevet,
            fechavencimientofundempresa,
            relacionasegurado,
            cargorepresentante,

            //personalcobranza,
            apellidopaternocobranza,
            apellidomaternocobranza,
            nombrescobranza,
            nombrecompletocobranza,
            telefonocobranza,
            direccioncobranza,
            correocobranza,

            //nombrerepresentante,
            apellidopaternorepresentante,
            apellidomaternorepresentante,
            nombresrepresentante,
            nombrecompletorepresentante,
            direccionrepresentante,
            emailrepresentante,
            telefonorepresentante,
            celularrepresentante,

            departamentoid,
            sucursalid,
            ejecutivoid,
            carteraid,
            usuariomodificacion,
            fechamodificacion: new Date(),
            estado
        }, {
            where: {
                id
            }
        }, { transaction: t });


        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // step 2  archivos
        for (let i = 0; i < archivos.length; i++) {

            await Archivo.create({
                codigo: id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: id,
                sucursalid: sucursalid,
                carpetaid: archivos[i].carpetaid,
                usuarioregistro: usuariomodificacion,
                usuariomodificacion: usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'carpetaid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });

        }
        await t.commit();
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
        if (t) {
            await t.rollback();
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaAsegurado(req, res) {
    const { id } = req.params;
    const {
        //    id,
        usuariobaja
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Asegurado.update({
            usuariobaja,
            /*  fechamodificacion:moment().format(), */
            fechambaja: new Date(),
            estado: 'BAJ'
        }, {
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
            data: { estado: false, "error": e.message }
        });
    }
}

export async function aseguradosPorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const asegurados = await Asegurado.findAll({ where: { estado: 'ACT', sucursalid } , order: [
            ['fechamodificacion', 'DESC']
        ]});
        res.json({
            data: asegurados
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function aseguradosPorSucursalYTipo(req, res) {
    try {
        const { sucursalid, tipoasegurado } = req.params;

        let string = `select a.*, e.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento 
             from asegurado a 
            inner join personal e on e.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
             where a.sucursalid='` + sucursalid + `' and a.tipoasegurado='` + tipoasegurado + `' and a.estado='ACT' order by a.fechamodificacion desc `
        //console.log(string)
        const asegurados = await sequelize.query(string
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function todoLosAseguradosPorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;

        let string = `select a.*, e.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento 
             from asegurado a 
            inner join personal e on e.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
             where a.sucursalid='` + sucursalid + `'  and a.estado='ACT' order by a.fechamodificacion desc `
        //console.log(string)
        const asegurados = await sequelize.query(string
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function todoLosAseguradosPorEmpresa(req, res) {
    try {
        const { empresaid } = req.params;

        let string = `select a.*, e.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento,s.nombre sucursal 
             from asegurado a 
            inner join personal e on e.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
            inner join sucursal s on s.id=a.sucursalid 
             where s.empresaid='` + empresaid + `'  and a.estado='ACT' order by a.fechamodificacion desc `
        //console.log(string)
        const asegurados = await sequelize.query(string
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function aseguradosPorEmpresaYTipo(req, res) {
    try {
        const { empresaid, tipoasegurado } = req.params;
        //const asegurados = await Asegurado.findAll({ where: { estado: 'ACT',sucursalid,tipoasegurado }});
        let query = `select a.*, ej.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento 
            from asegurado a 
            inner join sucursal s on s.id=a.sucursalid 
             inner join empresa e on e.id=s.empresaid 
            inner join personal ej on ej.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
            where e.id='` + empresaid + `' and a.tipoasegurado='` + tipoasegurado + `' and a.estado='ACT' order by a.fechamodificacion desc `;
        //console.log(query)
        const asegurados = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function aseguradosPorSucursals(req, res) {
    try {
        const { sucursalid } = req.params;

        let string =`select a.id,a.nombrecompleto,a.tipoasegurado,e.id as ejecutivoid, e.nombrecompleto as ejecutivo,c.id as carteraid, c.nombrecompleto as cartera,d.id as departamentoid, d.nombre departamento,case when a.tipoasegurado='individual' then a.ci else a.nit end ci_nit 
             from asegurado a 
            inner join personal e on e.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
            where a.sucursalid='` + sucursalid + `' and a.estado='ACT' order by a.fechamodificacion desc `
        //console.log(string)
        const asegurados = await sequelize.query(string
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function aseguradosPorEmpresas(req, res) {
    try {
        const { empresaid } = req.params;
        //const asegurados = await Asegurado.findAll({ where: { estado: 'ACT',sucursalid,tipoasegurado }});
        let query = `select a.id,a.nombrecompleto,a.tipoasegurado,ej.id as ejecutivoid, ej.nombrecompleto as ejecutivo,c.id as carteraid, c.nombrecompleto as cartera,d.id as departamentoid, d.nombre departamento,case when a.tipoasegurado='individual' then a.ci else a.nit end ci_nit  
            from asegurado a 
            inner join sucursal s on s.id=a.sucursalid 
             inner join empresa e on e.id=s.empresaid 
            inner join personal ej on ej.id=a.ejecutivoid 
            inner join personal c on c.id = a.carteraid 
            inner join departamento d on d.id = a.departamentoid 
            where e.id='` + empresaid + `' and a.estado='ACT' order by a.fechamodificacion desc `;
       // console.log(query)
        const asegurados = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json(asegurados);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}