import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config'
import path from 'path'
import jwt from 'jsonwebtoken'
import axios from 'axios';

function generateOTP() {
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';

    var len = string.length;
    for (let i = 0; i < 5; i++) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}

async function Auth(req, res, next) {
    try {
        await client.connect()
        const db = client.db('ProjectDatabase')
        const data = await db.collection('jwt_tokens').find({ jwt_token: req.headers.auth }).toArray()
        if (data?.length === 1) {
            jwt.verify(req.headers.auth, process.env.excryptSecret, (err, data) => {
                if (err) res.send({
                    msg: "Authentication Failed !"
                })
                else {
                    req.clientDetails = data
                    next()
                }
            })
        } else res.send({
            msg: 'Authentication Failed !'
        })
    } catch (E) {
        res.send({
            msg: "Authentication Failed !"
        })
    } finally {
        await client.close();
    }
}

function ClearOTP(OTP) {
    setTimeout(async () => {
        try {
            console.log("OTP Cleared !")
            await client.connect()
            const db = client.db('ProjectDatabase')
            await db.collection('otp').deleteOne({
                OTP: OTP,
                // LogID: req.body.LogID,
            })
        } catch (e) {
            console.error(e)
        } finally {
            await client.close()
        }
    }, (1000 * 20 * 5))
}

const client = new MongoClient(process.env.uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

let app = express()
let port = 8080
app.use(cors())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}))
app.use(express.static(path.join(`${process.cwd()}`, "build")))

app.listen(port, async () => {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("server is listening at port : ", port)

    } finally {
        await client.close();
    }
})


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
    '/login',
    '/signup',
    '/otp'
]

app.get(global_routes, (req, res) => {
    console.log(path.join(`${process.cwd()}`, 'build', 'index.html'))
    res.sendFile(path.join(`${process.cwd()}`, 'build', 'index.html'))
})

app.post('/login', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('ProjectDatabase')
        const data = await db.collection('Login').find({
            ph_no: req.body.ph_no,
            password: req.body.password
        }).toArray()

        if (data?.length === 1) {
            try {
                let token = jwt.sign({
                    ph_no: req.body.ph_no,
                    password: req.body.password
                }, process.env.excryptSecret, { expiresIn: '12h' })

                await db.collection('jwt_tokens').insertOne({
                    jwt_token: token
                })
                res.send({
                    jwtToken: token,
                    login: true,
                    ph_no: req.body.ph_no,
                    msg: 'Login Successful !'
                })
            } catch (e) {
                console.error(e)
                res.send({ msg: 'Authentication Failed !' })
            }
        } else res.send({ msg: 'Authentication Failed !' })

    } catch (e) {
        res.send({ msg: 'Authentication Failed !' })
    } finally {
        await client.close();
    }
})

app.delete('/logout', Auth, async (req, res) => {
    try {
        await client.connect()
        const db = client.db('ProjectDatabase')
        await db.collection('jwt_tokens').deleteOne({ jwt_token: req.headers.auth })
        res.send({
            msg: 'User Logged Out !'
        })
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
})

app.post('/getOtp', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            ph_no,
            password
        } = req.body;

        let OTP = generateOTP()
        await client.connect()
        const db = client.db('ProjectDatabase')
        const response = await db.collection('Login').find({ ph_no: ph_no }).toArray()
        // if(response)
        if (response.length === 1)
            res.send({ msg: "Phone Number Already Exists !" })
        else
            axios.get(`https://api.authkey.io/request?authkey=${process.env.authkey}&mobile=${ph_no}&country_code=91&sid=${process.env.sid}&otp=${OTP}`)
                .then(async data => {
                    console.log(data.data)
                    if (data.data.Message === 'Submitted Successfully') {
                        await client.connect()
                        await db.collection('otp').insertOne({
                            OTP: OTP,
                            LogID: data.data.LogID,
                        })
                        ClearOTP(OTP)
                        res.send({
                            firstName,
                            lastName,
                            ph_no,
                            password,
                            OTP: OTP,
                            // Message: 'Submitted Successfully'
                            ...data.data
                        });

                    }
                })
                .catch(err => {
                    console.error(err)
                    res.send({ msg: "Server error !" })
                })

    } catch (e) {
        console.log("Data =>", e)
        res.send({ msg: "Server error !" })
    } finally {
        await client.close()
    }
})

app.post('/verifyOtp', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            ph_no,
            password
        } = req.body;
        await client.connect()
        const db = client.db('ProjectDatabase')
        const response = await db.collection('otp').find({
            OTP: req.body.OTP,
            LogID: req.body.LogID,
        }).toArray()
        if (response.length === 1) {
            await db.collection('otp').deleteOne({
                OTP: req.body.OTP,
                LogID: req.body.LogID,
            })
            await db.collection('Login').insertOne({
                ph_no: ph_no,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            res.send({ verification: true })
        } else {
            res.send({ msg: "OTP Expired !" })
        }

    } catch (e) {
        console.log("Data =>", e)
        res.send({ msg: "Server error !" })
    }
})