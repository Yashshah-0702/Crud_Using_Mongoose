const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productschema = new Schema({
    title:{
       type:String,
       required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Product',productschema)