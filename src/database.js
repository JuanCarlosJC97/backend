const mongos = require('mongoose')

URI = ('mongodb://localhost/empleados')
mongos.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>console.log('base conectada'))
.catch(error=>console.log(error))

module.exports = mongos