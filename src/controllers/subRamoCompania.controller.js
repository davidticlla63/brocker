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
        estado,
        ramoid,
        ramopadreid,
        companiaseguroid,
    sucursalid } = req.body;
    try {
       /*  //const transaction= sequelize.transaction;
        if  (ramopadreid !=null){
            const regSubRamoCompanias = await SubRamoCompania.findAll({ where: { ramopadreid, companiaseguroid, estado: 'ACT' } });
            console.log(regSubRamoCompanias);
            if (regSubRamoCompanias.length > 0) {
                // authentication failed
                throw new Error("Ya existe Ramo asignado a la Compania!!");
            }
        }else if(ramopadreid!=null){ */
            const regSubRamoCompanias = await SubRamoCompania.findAll({ where: { ramoid, companiaseguroid,sucursalid, estado: 'ACT' } });
            console.log(regSubRamoCompanias);
            if (regSubRamoCompanias.length > 0) {
                // authentication failed
                throw new Error("Ya existe Ramo asignado a la Compañia!!");
            }
       /*  } */
        


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
            ramopadreid,
            companiaseguroid
            ,sucursalid
        }, {
            fields: ['porcentajecomision',
                'porcentajecomisioncredito',
                'porcentajeprima',
                'porcentajeprimacredito',
                'nota',
                'notacredito', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado', 'ramoid',
                'ramopadreid', 'companiaseguroid','sucursalid']
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
        ramopadreid,
        companiaseguroid } = req.body;
    try {
        /*      const regSubRamoCompanias=await SubRamoCompania.findAll({ where :{ramopadreid,companiaseguroid,estado:'ACT'}});
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
            ramopadreid,
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
        //const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT', ramopadreid } });

        const subRamoCompania = await sequelize.query(`select rc.*,r.nombre nombreramo from sub_ramo_compania  rc 
            inner join ramo r on r.id=rc.ramoid 
            where r.empresaid= '` + empresaid + `' and rc.estado ='ACT' order by r.nombre `
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
        ramoid } = req.params;
    try {
        console.log(req.params)

        const subRamoCompania = await sequelize.query(`select rc.*,r.nombre nombreramo,p.nombre nombreramopadre from sub_ramo_compania  rc 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo p on rc.ramopadreid=r.id 
            where r.id= '` + ramoid + `' and rc.estado ='ACT' order by r.nombre `
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
        const subRamoCompania = await sequelize.query("select rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,r.spvs spvsramo,s.spvs spvsubramo,t.spvs spvstiporamo from sub_ramo_compania  rc  
            "inner join ramo r on r.id=s.ramoid 
            "left join ramo s on s.ramoid=r.id 
            "inner join tipo_ramo t on t.id=r.tiporamoid 
            "where rc.companiaseguroid= '` + companiaseguroid + `' and rc.estado ='ACT' order by rc.id "
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
        const subRamoCompania = await sequelize.query(`select  r.id,c.cia_spvs, c.nombre compania, rc.*,r.nombre nombreramo,p.nombre nombreramopadre,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else p.spvs end spvsramopadre, t.spvs spvstiporamo , s.nombre sucursal 
            from sub_ramo_compania  rc  
            inner join ramo r on r.id=rc.ramoid  
            left join ramo p on rc.ramopadreid=r.id 
            inner join tipo_ramo t on t.id=r.tiporamoid  
            inner join compania_seguro c on c.id =rc.companiaseguroid   
            inner join sucursal s on s.id=rc.sucursalid 
            where rc.companiaseguroid= '` + companiaseguroid + `' and rc.estado ='ACT' order by c.nombre,r.nombre `
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
        const subRamoCompania = await sequelize.query(`select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo,s.nombre sucursal 
            from sub_ramo_compania  rc  
            inner join ramo r on r.id=rc.ramoid  
            left join ramo p on rc.ramopadreid=r.id 
            inner join tipo_ramo t on t.id=r.tiporamoid  
            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'
            inner join sucursal s on s.id=rc.sucursalid 
            where c.empresaid= '` + empresaid + `'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc `
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

export async function subRamoCompaniaYCompaniaPorSucursal(req, res) {
    const {
        sucursalid } = req.params;
    try {
        const subRamoCompania = await sequelize.query(`select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo ,s.nombre sucursal 
            from sub_ramo_compania  rc  
            inner join ramo r on r.id=rc.ramoid  
            left join ramo p on rc.ramopadreid=r.id 
            inner join tipo_ramo t on t.id=r.tiporamoid  
            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'
            inner join sucursal s on s.id=rc.sucursalid 
            where c.sucursalid= '` + sucursalid + `'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc `
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