import express from 'express';

const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("ok server")
})

app.listen(port,()=>{
    console.log(`Server up is on :${port}`)
})