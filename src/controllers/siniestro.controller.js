import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Siniestro from "../models/Siniestro";

export async function getSiniestros(req, res) {
    try {
        const siniestros = await Siniestro.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: siniestros
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createSiniestro(req, res) {
    const {
        fechanotificacion,
        fechasiniestro,
        comentarioinicial,
        resumenejecutivo,
        resumenfinal,
        montoindemnizar,
        fecharecordatoria,
        notarecordatoria,
        tpoliza,
        status,
        encargadoid,
        usuarioregistro,
        usuariomodificacion,
        idpolizadetalle,
        polizaid,
        sucursalid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSiniestro = await Siniestro.create({
            fechanotificacion,
            fechasiniestro,
            comentarioinicial,
            resumenejecutivo,
            resumenfinalsiniestro: resumenfinal,
            montoindemnizar,
            fecharecordatorio: fecharecordatoria,
            notarecordatorio: notarecordatoria,
            tipo: tpoliza,
            estadosiniestro: status,
            encargadoid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            idpolizadetalle,
            polizaid,
            sucursalid,
            estadosiniestro
        }, {
            fields: ['fechanotificacion',
                'fechasiniestro',
                'comentarioinicial',
                'resumenejecutivo',
                'resumenfinalsiniestro',
                'montoindemnizar',
                'fecharecordatorio',
                'notarecordatorio',
                'tipo',
                'estadosiniestro',
                'encargadoid',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'idpolizadetalle',
                'polizaid',
                'sucursalid']
        });
        if (newSiniestro) {
            return res.json({
                message: 'Siniestro created successfully',
                data: newSiniestro
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSiniestro(req, res) {
    const { id } = req.params;
    const { fechanotificacion,
        fechasiniestro,
        comentarioinicial,
        resumenejecutivo,
        resumenfinal,
        montoindemnizar,
        fecharecordatoria,
        notarecordatoria,
        tpoliza,
        status,
        encargadoid,
        usuarioregistro,
        usuariomodificacion,
        idpolizadetalle,
        polizaid,
        sucursalid } = req.body;
    try {
        const updateRowCount = await Siniestro.update({
            fechanotificacion,
            fechasiniestro,
            comentarioinicial,
            resumenejecutivo,
            resumenfinalsiniestro: resumenfinal,
            montoindemnizar,
            fecharecordatorio: fecharecordatoria,
            notarecordatorio: notarecordatoria,
            tipo: tpoliza,
            estadosiniestro: status,
            encargadoid,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion: new Date(),
            idpolizadetalle,
            polizaid,
            sucursalid
        }, {
            where: {
                id
            }
        });

        const siniestros = await Siniestro.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Siniestro update successfully',
            count: siniestros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSiniestro(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Siniestro.findOne({
            where: {
                id
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deleteSiniestro(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Siniestro.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Siniestro deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaSiniestro(req, res) {
    const { id } = req.params;

    console.log("bajaSiniestro");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Siniestro.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const siniestros = await Siniestro.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Siniestro baja successfully',
            count: siniestros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getSiniestroPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const siniestros = await sequelize.query(`select ss.* ,p.nropoliza,p.valorasegurado,c.nombre contratante 
             ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from siniestro ss 
            inner join poliza p on p.id = ss.polizaid 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join sub_ramo sr on sr.id=rc.subramoid 
            inner join ramo r on r.id=rc.ramoid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join contratante c on c.id=p.contratanteid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
            where  s.id= '` + sucursalid + `'  and ss.estado IN ('ACT') order by ss.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ siniestros });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getSiniestroPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {

        const siniestros = await sequelize.query(`select ss.*,p.nropoliza,p.valorasegurado,c.nombre contratante 
             ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from siniestro ss 
            inner join poliza p on p.id = ss.polizaid 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join sub_ramo sr on sr.id=rc.subramoid 
            inner join ramo r on r.id=rc.ramoid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join contratante c on c.id=p.contratanteid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
            where  s.empresaid= '` + empresaid + `'  and ss.estado IN ('ACT','CER') order by ss.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ siniestros });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/
export async function getTotalSiniestrosPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {
        let query = `select count(*) cantidad from siniestro si 
            inner join sucursal s on s.id =si.sucursalid  
            inner join empresa e on e.id =s.empresaid 
            where si.estadosiniestro  in ('Proceso') and si.estado ='ACT' and e.id = '` + empresaid + `'`;

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: pagos
        }
        );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/
export async function getTotalSiniestrosPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {
        let query = `select count(*) cantidad from siniestro si  
            where si.estadosiniestro  in ('Proceso') and si.estado ='ACT'  and si.sucursalid ='` + sucursalid + `'`;

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
            res.json({
                data: pagos
            })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}