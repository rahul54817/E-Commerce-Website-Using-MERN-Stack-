const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
    
    },
    brand : {
        type : String,
        required : true
    },
    mrp : {
        type : Number,
       

    },
    category:{
        type : String,
        required : true

    },
    image : {
        type : String,
        required : true
    }
    },{timestamp : true});

module.exports = mongoose.model('Product', productSchema);

    

