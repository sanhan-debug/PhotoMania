import express from 'express';
import  dotenv from 'dotenv';
import { pageRouter } from './Routers/pageRouters.js';
import mongoose from 'mongoose';

const app = express()
dotenv.config()
const PORT = process.env.PORT
const URI = process.env.URI
// Connect to the DB

// ejs template engine
app.set("view engine",'ejs')

// static files middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// get
app.use('/',pageRouter)

app.use('/about',pageRouter)

app.use('/photos/',pageRouter)

// app.use('/users/',pageRouter)

app.listen(PORT,()=>{
    console.log(`Server up is on : ${PORT}`)

    mongoose.connect(URI).then(()=>{
        console.log("Connected to the mongodb successfully")
    })
})