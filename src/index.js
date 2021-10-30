const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('./database')

const app = express()

app.set('Port', 4000)
app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// Rutas

app.use('/api/', require('./routes/prueba.routes'))


/* start server */

app.listen(app.get('Port'), () => {
    console.log('escuchando puertooo', app.get('Port'))
})