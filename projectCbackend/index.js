import express from 'express'
import cors from 'cors'
import path from 'path'
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://sairajeshk17:RFYctzjSYH1TAQJB@cluster0.sbv9mxh.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const database = 'Users'//'sample_restaurants' //'sample_training'

const app = express()

const port = 8080
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(`${process.cwd()}`, "build")))

const global_routes = [
    '/',
    '/work',
    '/dashboard/home',
    '/dashboard/profile',
    '/dashboard/settings',
    '/dashboard/bill',
    '/signup',
    '/signin',
    '/experience',
    '/classes',
    '/login'
]

app.get(global_routes, (req, res) => {
    res.sendFile(path.join(`${process.cwd()}`, 'build', 'index.html'))
})

app.listen(port, async () => {
    try {
        console.log(`Server is Listening at Port ${port} !`)
    } catch (e) {
        console.error(e)
    }
})

app.post('/signin', async (req, res) => {
    try {
        await client.connect();
        const data = await client.db(database).collection('UserList').find({ username: req.body.email, password: req.body.password }).toArray()
        const attendance = await client.db(database).collection('Attendance').find({ username: req.body.email }).toArray()
        const bill = await client.db(database).collection('Bills').find({ username: req.body.email }).toArray()
        const Projects = await client.db(database).collection('Projects').find({ username: req.body.email }).toArray()

        if (data.length === 1) {
            const batch = await client.db(database).collection('Batch').find({ batch: data[0].batch }).toArray()
            res.send({
                login: true,
                msg: "Login Success !",
                name: data[0].name,
                username: req.body.email,
                totaldays: attendance[0].totaldays,
                attended: attendance[0].attended,
                bill: bill[0].bill,
                date: bill[0].date,
                assignments: Projects[0].projects,
                course: batch[0].syllubus.reverse(),
                batch: data[0].batch
            })
        }
        else
            res.send({ login: false, msg: "Please Check username & password !" })
    } catch (e) {
        res.send({ login: false, msg: 'Login Failed !' })
    } finally {
        client.close()
    }
})