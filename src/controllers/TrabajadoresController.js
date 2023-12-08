const TrabajadoresModel = require('../models/trabajadores');

class TrabajadoresController {
    static async indexGet(req, res) {
        let data = await TrabajadoresModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await TrabajadoresModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await TrabajadoresModel.insertar(newData);

            res.status(201)
                .header('Location', `/trabajadores/${insertedId}`)
                .send({status: 201, message: 'Trabajador creado con POST'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await TrabajadoresModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Trabajador Actulizacion hecha con PUT'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request'});
        }
    }

        static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await TrabajadoresModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Trabajador Actualizacion hecha por PATCH'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = TrabajadoresController;