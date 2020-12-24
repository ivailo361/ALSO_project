const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const { MongoClient } = require('mongodb');
var ObjectId = require('mongodb').ObjectId;

// const db_user = process.env.db_user || "";
// const db_pass = process.env.db_pass || "";
// $env:db_user="koko" write down in the consol before start node file invocation

const databaseName = "also";
const uri = `mongodb+srv://${config.db_user}:${config.db_pass}@cluster0-zpn4z.mongodb.net?retryWrites=true&w=majority`
// const uri = `mongodb+srv://koko:<password>@cluster0-zpn4z.mongodb.net/<dbname>?retryWrites=true&w=majority`
// const collectionName = "cubesList"

async function connectDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    return client.connect()
}

async function connectSession() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    return client.connect()

}

module.exports = {
    connectDB,
    connectSession
}