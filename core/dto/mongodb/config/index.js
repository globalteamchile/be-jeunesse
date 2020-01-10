const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mongo:mongo123@cluster0-jiye8.mongodb.net/jeunesse?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = mongoose;