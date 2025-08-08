// npm init -y, npm i mongodb, npm i express
const { MongoClient, ObjectId } = require('mongodb');
const uri = '';

const client = new MongoClient(uri);

const app = express();

let db, love;

await client.connect();

async function getData() {

    await client.connect();

    db = await client.db('lovelace'); //nombre de la DB

    love = db.collection('love'); //nombre de la coleccion

    return await love.find().toArray();

}
app.get('/data', async (request, response) =>{
    response.json(await getData())
})
//endpoint

app.post('/data', (request, response) =>{
    
})

app.liste(300, (error) =>{
    if
})