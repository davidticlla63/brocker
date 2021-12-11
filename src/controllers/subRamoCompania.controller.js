import { sequelize } from "../database/database";
import SubRamoCompania from "../models/SubRamoCompania";
const { QueryTypes } = require('sequelize');


export async function createSubRamoCompania(req, res) {
    const {
        porcentajecomision,
        porcentajecomisioncredito,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacredito,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        ramoid,
        subramoid,
        companiaseguroid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        if  (subramoid !=null){
            const regSubRamoCompanias = await SubRamoCompania.findAll({ where: { subramoid, companiaseguroid, estado: 'ACT' } });
            console.log(regSubRamoCompanias);
            if (regSubRamoCompanias.length > 0) {
                // authentication failed
                throw new Error("Ya existe Ramo asignado a la Compania!!");
            }
        }else if(subramoid!=null){
            const regSubRamoCompanias = await SubRamoCompania.findAll({ where: { ramoid, companiaseguroid, estado: 'ACT' } });
            console.log(regSubRamoCompanias);
            if (regSubRamoCompanias.length > 0) {
                // authentication failed
                throw new Error("Ya existe Ramo asignado a la Compania!!");
            }
        }
        


        let newSubRamoCompania = await SubRamoCompania.create({
            porcentajecomision,
            porcentajecomisioncredito,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacredito,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion:new Date(),
            estado,
            ramoid,
            subramoid,
            companiaseguroid
        }, {
            fields: ['porcentajecomision',
                'porcentajecomisioncredito',
                'porcentajeprima',
                'porcentajeprimacredito',
                'nota',
                'notacredito', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado', 'ramoid',
                'subramoid', 'companiaseguroid']
        });
        if (newSubRamoCompania) {
            return res.json({
                message: 'SubRamoCompania created successfully',
                data: newSubRamoCompania
            });
        }
    } catch (e) {
        console.log(e);
        res.json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSubRamoCompania(req, res) {
    const { id } = req.params;
    const { porcentajecomision,
        porcentajecomisioncredito,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacredito,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        ramoid,
        subramoid,
        companiaseguroid } = req.body;
    try {
        /*      const regSubRamoCompanias=await SubRamoCompania.findAll({ where :{subramoid,companiaseguroid,estado:'ACT'}});
             console.log(regSubRamoCompanias);
             if (regSubRamoCompanias.length > 0) {
                 // authentication failed
                 throw new Error("Ya existe Ramo asignado a la Compania!!");
             } */
        const updateRowCount = await SubRamoCompania.update({
            porcentajecomision,
            porcentajecomisioncredito,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacredito,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid,
            subramoid,
            companiaseguroid
        }, {
            where: {
                id
            }
        });

        const subRamoCompania = await SubRamoCompania.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'SubRamoCompania update successfully',
            count: subRamoCompania
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getSubRamoCompania(req, res) {
    try {
        const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function subRamoCompaniaPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        console.log(req.params)
        //const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT', subramoid } });

        const subRamoCompania = await sequelize.query("select rc.*,r.nombre nombreramo from sub_ramo_compania  rc " +
            "inner join ramo r on r.id=rc.ramoid " +
            "where r.empresaid= '" + empresaid + "' and rc.estado ='ACT' order by rc.id "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function subRamoCompaniaPorRamo(req, res) {
    const {
        subramoid } = req.params;
    try {
        console.log(req.params)

        const subRamoCompania = await sequelize.query("select rc.*,r.nombre nombreramo from sub_ramo_compania  rc " +
            "inner join ramo r on r.id=rc.ramoid " +
            "where r.id= '" + subramoid + "' and rc.estado ='ACT' order by rc.id "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



/* export async function subRamoCompaniaPorCompania(req, res) {
    const {
        companiaseguroid } = req.params;
    try {
        const subRamoCompania = await sequelize.query("select rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,r.spvs spvsramo,s.spvs spvsubramo,t.spvs spvstiporamo from sub_ramo_compania  rc  " +
            "inner join ramo r on r.id=s.ramoid " +
            "left join ramo s on s.ramoid=r.id " +
            "inner join tipo_ramo t on t.id=r.tiporamoid " +
            "where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by rc.id "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
 */

export async function subRamoCompaniaPorCompania(req, res) {
    const {
        companiaseguroid } = req.params;
    try {
        const subRamoCompania = await sequelize.query("select rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when s.spvs is null then '00' else  s.spvs end  spvsubramo,t.spvs spvstiporamo " +
            "from sub_ramo_compania  rc  " +
            "inner join ramo r on r.id=rc.ramoid  " +
            "left join ramo s on s.ramoid=r.id  and  s.id=rc.subramoid  " +
            "inner join tipo_ramo t on t.id=r.tiporamoid  " +
            "where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by rc.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }    
}

export async function subRamoCompaniaYCompaniaPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        const subRamoCompania = await sequelize.query("select  c.cia_spvs, c.nombre compania, rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when s.spvs is null then '00' else  s.spvs end  spvsubramo,t.spvs spvstiporamo " +
            "from sub_ramo_compania  rc  " +
            "inner join ramo r on r.id=rc.ramoid  " +
            "left join ramo s on s.ramoid=r.id  and  s.id=rc.subramoid  " +
            "inner join tipo_ramo t on t.id=r.tiporamoid  " +
            "inner join compania_seguro c on c.id=r.companiaseguroid  " +
            "where c.empresaid= '" + empresaid + "' and c.estado='ACT' and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }

}


export async function getOneSubRamoCompania(req, res) {
    try {
        const { id } = req.params;
        const usuario = await SubRamoCompania.findOne({
            where: {
                id
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteSubRamoCompania(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await SubRamoCompania.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'SubRamoCompania deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function bajaSubRamoCompania(req, res) {
    const { id } = req.params;

    console.log("bajaSubRamoCompania");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await SubRamoCompania.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const subRamoCompania = await SubRamoCompania.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'SubRamoCompania baja successfully',
            count: subRamoCompania
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}