const { connectMysql } = require('../dbconnection');
class PaginasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Pagina');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Pagina').where('id_pagina', id);
    }
    
    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Pagina').insert(datos).returning('id_pagina');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Pagina').where('id_pagina', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_pagina'] = id;
        await db('Pagina').where('id_pagina', id).del();
        await db.insert(newData).into('Pagina');
        return id;
    }

}

module.exports = PaginasModel;