import express from 'express'
import cors from 'cors'
import path from 'path'
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://sairajeshk17:RFYctzjSYH1TAQJB@cluster0.sbv9mxh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const database = 'sample_mflix'//'sample_restaurants' //'sample_training'
let collection

const app = express()

const port = 8080
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(`${process.cwd()}`, "build")))

const global_routes = [
    '/',
    '/work',
    '/dashboard/home',
    '/dashboard/account',
    '/dashboard/settings',
    '/dashboard/payment',
    '/dashboard/notifications',
    '/signup',
    '/signin',
    '/experience'
]

app.get(global_routes, (req, res) => {
    res.sendFile(path.join(`${process.cwd()}`, 'build', 'index.html'))
})

app.listen(port, async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // const db = client.db(database)/

        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
})

app.get('/movies', async (req, res) => {
    await client.connect()
    const db = client.db(database)
    collection = db.collection('movies')
    const data = await collection.find({}).limit(20).toArray()

    res.send(data)
})