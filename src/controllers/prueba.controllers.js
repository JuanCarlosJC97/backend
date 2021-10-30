const prueba={}

prueba.obtener = (req,res) =>{
    res.send('prueba de get')
} 

prueba.crear = (req,res) => {
    res.send('prueba de postman')
}

prueba.actualizar = (req,res) =>{
    res.send('prueba de actualizar put')
} 

prueba.eliminar = (req,res) => {
    res.send('prueba de eliminar delete')
}

prueba.registrar = async(req, res) => {
    const {nombre, apellido, salario} = req.body
    const registro = new Empleado({
        nombre,
        apellido, 
        salario
    })
    await registro.save()
    res.json({
        mensaje: 'Registrado'
    })
}

module.exports = prueba