const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')
require('dotenv').config()
const uri = process.env.URI
const client = new MongoClient(uri)
const db = client.db(process.env.DB).collection(process.env.COLL)
const contactsDAO = require('./contactsDAO')

app.listen(3000, () => {
    console.log("Servidor rodando...")
})

app.get('/all', async (req, res) => {
    const docs = await contactsDAO.getContacts(db)
    res.json(JSON.parse(JSON.stringify(docs, null, 2)))
})

app.get('/add/:n/:t/:e', async (req, res) => {
    const doc = {
        nome: req.params.n,
        telefone: req.params.t,
        email: req.params.e,
        favorito: false
    }
    const result = await contactsDAO.insertContact(db, doc)
    res.json(result)
})

app.get('/del/:n', async (req, res) => {
    const name = req.params.n
    const result = await contactsDAO.deleteContactByNome(db, name)
    res.json(result)
})

app.get('/update/:e/:t', async (req, res) => {
    const old_email = req.params.e
    const new_tel = req.params.t
    const result = await contactsDAO.updateTelefoneByEmail(db, old_email, new_tel)
    console.log(old_email)
    console.log(new_tel)
    res.json(result)
})