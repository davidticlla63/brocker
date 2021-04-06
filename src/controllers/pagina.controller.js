
import Accion from "../models/Accion";
import Pagina from "../models/Pagina";
import PaginaAccion from "../models/PaginaAccion";
import { sequelize } from "../database/database";
export async function getPaginas(req, res) {
    try {

      /*   Pagina.findAll({
            include: [
              {
                model: PaginaAccion,
                include: [
                  {
                    model: Accion
                  }
                ]
              }
            ]
          }).then(paginas => {
            const resObj = paginas.map(user => {
      
              //tidy up the user data
              return Object.assign(
                {},
                {
                  user_id: user.id,
                  username: user.username,
                  role: user.role,
                  posts: user.posts.map(post => {
      
                    //tidy up the post data
                    return Object.assign(
                      {},
                      {
                        post_id: post.id,
                        user_id: post.user_id,
                        content: post.content,
                        comments: post.comments.map(comment => {
      
                          //tidy up the comment data
                          return Object.assign(
                            {},
                            {
                              comment_id: comment.id,
                              post_id: comment.post_id,
                              commenter: comment.commenter_username,
                              commenter_email: comment.commenter_email,
                              content: comment.content
                            }
                          )
                        })
                      }
                      )
                  })
                }
              )
            });
            res.json(resObj)
          }); */
   /*      const paginas = await sequelize.query("select pa.id as paginaaccionid,pag.id paginaid,pag.nombre as nombrepagina,a.id accionid , a.nombre as nombreaccion " +
            "from pagina pag       " +
            "inner join pagina_accion pa on pa.paginaid=pag.id and pa.estado='ACT' " +
            "inner join accion a on a.id=pa.accionid  " +
            "where pag.estado='ACT' " +
            "ORDER BY pag.nombre "
            , {
                type: QueryTypes.SELECT
            }); */
        const paginas = await Pagina.findAll({
            where: { estado: 'ACT', paginaid: null  },order:[['orden','ASC']]
            , include: [{
                model: Pagina,require:true, estado: 'ACT'
                  , 
                  include: [{ model: PaginaAccion ,attributes:['id','accionid','paginaid'],require:true, estado: 'ACT',
                  // include:{ model: Accion,atributes:['id','nombre'],require:true, estado: 'ACT' }
                },
                  //{ model: Accion,atributes:['id','nombre'], estado: 'ACT', require: true }
                  
                 ]
            },{ model: PaginaAccion ,attributes:['id','accionid','paginaid'],require:true, estado: 'ACT'}
        ]
        });
        res.json({
            data: paginas
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPagina(req, res) {
    const {
        nombre,
        descripcion,
        url,
        paginaid,
        usuarioregistro,
        usuariomodificacion,
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
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'url', 'paginaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
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
            data: { estado: false, "error": e.message }
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
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePagina(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Pagina.update({
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
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePagina(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        url,
        paginaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {

        const cant = await Pagina.update({
            nombre,
            descripcion,
            url,
            paginaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, { where: { id } });


        const usuarios = await Pagina.findOne({
            where: {
                id
            }
        });


        /*    const usuarios = await Pagina.findAll({
               attributes: ['nombre', 'descripcion', 'url', 'paginaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                   'fechamodificacion', 'estado'],
               where: {
                   id
               }
           });
   
           if (usuarios.length > 0) {
               usuarios.forEach(async usuario => {
                   await usuario.update({
                       nombre,
                       descripcion,
                       url,
                       paginaid,
                       usuarioregistro,
                       usuariomodificacion,
                       fecharegistro,
                       fechamodificacion,
                       estado
                   });
               });
           }
    */
        return res.json({
            message: 'Pagina updated successfully',
            data: usuarios
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}