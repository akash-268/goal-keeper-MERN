const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const goalRoutes = require('./routes/goalRoutes')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

//Middlewares
app.use(express.json()) //Parsing the body to json
app.use(express.urlencoded({extended: false})) //Encoding to URL-encoded format

//Routes
app.use('/api/goals', goalRoutes)

//Error-Handler Middleware
app.use(errorHandler)

//Servr
app.listen(process.env.port,()=>{
    console.log(`Server started on port ${process.env.port}`)
})