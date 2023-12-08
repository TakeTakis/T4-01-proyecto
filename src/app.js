const express = require('express');
const app = express();
const puerto = 80;
const ZonasController = require('./controllers/ZonasController');
const UsuariosController = require('./controllers/UsuariosController');
const DiariosController = require('./controllers/DiariosController');
const PaginasController = require('./controllers/PaginasController');
const TrabajadoresController = require('./controllers/TrabajadoresController');

app.use(express.json());

app.get('/', function (req, res) { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/zonas', ZonasController.indexGet);
app.get('/zonas/:id([0-9]+)', ZonasController.itemGet);
app.post('/zonas', ZonasController.indexPost);
app.put('/zonas/:id([0-9]+)', ZonasController.itemPut);
app.patch('/zonas/:id([0-9]+)', ZonasController.itemPatch);

app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/diarios', DiariosController.indexGet);
app.get('/diarios/:id([0-9]+)', DiariosController.itemGet);
app.post('/diarios', DiariosController.indexPost);
app.put('/diarios/:id([0-9]+)', DiariosController.itemPut);
app.patch('/diarios/:id([0-9]+)', DiariosController.itemPatch);

app.get('/paginas', PaginasController.indexGet);
app.get('/paginas/:id([0-9]+)', PaginasController.itemGet);
app.post('/paginas', PaginasController.indexPost);
app.put('/paginas/:id([0-9]+)', PaginasController.itemPut);
app.patch('/paginas/:id([0-9]+)', PaginasController.itemPatch);

app.get('/trabajadores', TrabajadoresController.indexGet);
app.get('/trabajadores/:id([0-9]+)', TrabajadoresController.itemGet);
app.post('/trabajadores', TrabajadoresController.indexPost);
app.put('/trabajadores/:id([0-9]+)', TrabajadoresController.itemPut);
app.patch('/trabajadores/:id([0-9]+)', TrabajadoresController.itemPatch);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});