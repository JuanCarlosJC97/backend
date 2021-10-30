const {Router} = require('express')
const route = Router()
const prueba = require('../controllers/prueba.controllers')

route.get('/', prueba.obtener)
route.post('/', prueba.registrar)
route.put('/', prueba.actualizar)
route.delete('/',prueba.eliminar)

module.exports = route