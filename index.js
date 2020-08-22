const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./queries')
const { request, response } = require('express')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (request, response)=>{
    response.json({info: 'api de prueba'})
})

app.get('/person',db.getPerson)
app.post('/person',db.addPerson)

app.listen(process.env.PORT || 3002, () => {
    console.log('server listenig')
})