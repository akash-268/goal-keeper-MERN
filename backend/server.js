const express = require('express')
const dotenv = require('dotenv').config()
const goalRoutes = require('./routes/goalRoutes')
const app = express()

app.use('/api/goals', goalRoutes)

app.listen(process.env.port,()=>{
    console.log(`Server started on port ${process.env.port}`)
})