const { connectMysql } = require('../dbconnection');
class TrabajadoresModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Trabajador');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Trabajador').where('id_trabajador', id);
    }
    
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Trabajador').insert(datos).returning('id_trabajador');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Trabajador').where('id_trabajador', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_trabajador'] = id;
        await db('Trabajador').where('id_trabajador', id).del();
        await db.insert(newData).into('Trabajador');
        return id;
    }

}

module.exports = TrabajadoresModel;