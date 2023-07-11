const express = require('express')
const app = express()
const mongoose = require('mongoose')
const body = require('body-parser')
const router = require('./routes/route')

app.set('view engine', 'ejs')
app.set('views', 'view')
app.use(body.urlencoded({ extended: false }))

 
app.use(router)


mongoose.connect('mongodb://localhost:27017/').then(result => {
    // console.log(result)
    console.log("Connected to database..")
    app.listen(8000)
})
    .catch(err => { console.log(err) })