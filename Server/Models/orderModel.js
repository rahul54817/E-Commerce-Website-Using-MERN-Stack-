const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
    },
    user_carts :{
        type : Array,
        required : true
    },
    shipping_cost : {
        type : Number,
        required : true

    },
    sub_total : {
        type : Number,
        required : true
    },
    total_cost : {
        type : Number,
        required : true
    }       
},{timestamps : true})

module.exports = mongoose.model('Order', orderSchema)