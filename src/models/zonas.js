const { connectMysql } = require('../dbconnection');
class ZonasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Zona');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Zona').where('id_zona', id);
    }
    
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Zona').insert(datos).returning('id_zona');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Zona').where('id_zona', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_zona'] = id;
        await db('Zona').where('id_zona', id).del();
        await db.insert(newData).into('Zona');
        return id;
    }

}

module.exports = ZonasModel;