// console.log('Hello World')
const express = require('express')
const dotenv = require('dotenv').config()
// const port=5000

const app = express()

app.listen(process.env.port,()=>{
    console.log(`Server started on port ${process.env.port}`)
})