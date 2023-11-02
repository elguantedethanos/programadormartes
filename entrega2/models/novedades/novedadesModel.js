var pool = require('./bd');

async function insertNovedad(obj) {
    try {
        var query ="insert into novedades set ?";
        var rows = await pool.query(query, [obj]); return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}


async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;    
}
async function getNovedadById(id){
    var query = "select * from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}
async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
async function buscarNovedades(busqueda) {
    var query = "select * from novedades where titulo like ? OR subtitulo like? Or cuerpo like?";
    var rows = await pool.query(query, ['%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%']);
    return rows;  
}
module.exports = {getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById, buscarNovedades}
router.get('/', async function (req, res, next){
    var novedades
    if (req.query.q === undefined) {
        novedades = await novedadesModel.getNovedades();
    } else {
        novedades = await novedadesModel.buscarNovedades(req.query.q);
    }
    res.render('admin/novedades',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades,
        is_search: req.query.q !== undefined,
        q: req.query.q
    });
});

