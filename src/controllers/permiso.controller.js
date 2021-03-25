
import Accion from "../models/Accion";
import Pagina from "../models/Pagina";
import Permiso from "../models/Permiso";
import Perfil from "../models/Perfil";

export async function getPermisos(req, res) {
    try {

        const permisos = await Permiso.findAll({
            where: { estado: 'ACT' }//,include:Perfil
            , include: [{ model: Pagina, require: true}, 
            { model: Accion, require: true } ,
        {model:Perfil, require: true}]
        });
        res.json({
            data: permisos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPermiso(req, res) {
    const {
        accionid,
        paginaid,
        perfilid,
        usuarioregistro,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPermiso = await Permiso.create({
            paginaaccionid,
            perfilid,
            usuarioregistro,
            fecharegistro:new Date(),
            fechamodificacion: new Date(),
            estado
        }, {
            fields: ['paginaaccionid', 'perfilid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
            'fechamodificacion', 'estado']

            
        });
        if (newPermiso) {
            return res.json({
                message: 'Permiso created successfully',
                data: newPermiso
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

export async function getOnePermiso(req, res) {
    try {
        const { id } = req.params;
        const permiso = await Permiso.findOne({
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

export async function deletePermiso(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Permiso.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Permiso deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updatePermiso(req, res) {
    const { id } = req.params;
    const { paginaaccionid,
        perfilid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {

        const cant= await Permiso.update({
            paginaaccionid,
            perfilid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        },{where:{id}});


            const permisos = await Permiso.findOne({
                where: {
                    id
                }
            } );
        

        return res.json({
            message: 'Permiso updated successfully',
            data: permisos
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}