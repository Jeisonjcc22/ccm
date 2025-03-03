//Ficha 2721427 Analisis y desarrollo de software API GA7-220501096-AA5-EV02
//Proyecto CCM Control y consumo de material


//Integrantes: Caren Carillo
//             Cristhian Rocha
//             Jeison Contreras


const express = require('express');
const cors = require('cors'); // Importar CORS
const bodyParser = require('body-parser');
const app = express();

// Middleware

app.use(cors({
    origin: ['http://192.168.31.196:3000', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(express.static('public')); // Carpeta donde están los archivos estáticos


// Importar rutas
const authRoutes = require('./routes/auth');                    // Ruta autenticacion.
const registroRoutes = require('./routes/registros');           // Ruta Registros equipos o materiales.
const usuariosRoutes = require('./routes/usuarios');            // Ruta Creacion usuario.
const casosRoutes = require('./routes/casos');                  // Ruta Insercion de casos.

// Ruta para el inicio
app.get('/inicio', (req, res) => {
    res.sendFile(__dirname + '/public/inicio.html'); // Redirige a inicio.html en la carpeta public
});


// Usar rutas
app.use('/auth', authRoutes);
app.use('/registros', registroRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/casos', casosRoutes);



// Servidor
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});
