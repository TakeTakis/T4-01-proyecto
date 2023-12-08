const { connectMysql } = require('../dbconnection');
class DiariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Diario');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Diario').where('id_diario', id);
    }
    
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Diario').insert(datos).returning('id_diario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Diario').where('id_diario', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_diario'] = id;
        await db('Diario').where('id_diario', id).del();
        await db.insert(newData).into('Diario');
        return id;
    }

}

module.exports = DiariosModel;