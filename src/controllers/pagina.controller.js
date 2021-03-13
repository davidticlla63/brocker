
import Pagina from "../models/Pagina";

export async function getPaginas(req, res) {
    try {

        const paginas = await Pagina.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: paginas
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPagina(req, res) {
    const {
        nombre,
        descripcion,
        paginaid,
        paginaregistro,
        paginamodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPagina = await Pagina.create({
            nombre,
            descripcion,
            url,
            paginaid,
            paginaregistro,
            paginamodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion','url', 'paginaid', 'paginaregistro', 'paginamodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newPagina) {
            return res.json({
                message: 'Pagina created successfully',
                data: newPagina
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

export async function getOnePagina(req, res) {
    try {
        const { id } = req.params;
        const pagina = await Pagina.findOne({
            where: {
                id
            }
        });
        res.json({
            data: pagina
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deletePagina(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Pagina.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Pagina deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updatePagina(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        url,
        paginaid,
        paginaregistro,
        paginamodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {

        const paginas = await Pagina.findAll({
            attributes: ['nombre', 'descripcion','url', 'paginaid', 'paginaregistro', 'paginamodificacion', 'fecharegistro',
                'fechamodificacion', 'estado'],
            where: {
                id
            }
        });

        if (paginas.length > 0) {
            paginas.forEach(async pagina => {
                await pagina.update({
                    nombre,
                    descripcion,
                    url,
                    paginaid,
                    paginaregistro,
                    paginamodificacion,
                    fecharegistro,
                    fechamodificacion,
                    estado
                });
            });
        }

        return res.json({
            message: 'Pagina updated successfully',
            data: paginas
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}