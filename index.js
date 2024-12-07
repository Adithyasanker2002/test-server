require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

const pfServer=express()
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
require('./config/connection')

const PORT = 3000 || process.env.PORT

// const PORT = 3000 || process.env.PORT
pfServer.listen(PORT,()=>{
   console.log(`Project Fair Server started at port : ${PORT} and waiting For Client Request`);
   
})
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red"> Project Fair Server started and waiting For Client Requestyyy </h1>`)
 })

//  POST
// pfServer.post('/',(req,res)=>{
//     res.status(200).send("Post request")
// })