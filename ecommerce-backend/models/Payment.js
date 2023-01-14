const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema

const PaymentSchema = new mongoose.Schema({
    
            product : {
                type: ObjectId,
                ref : 'Product'
            },
      
            paymentStatus:{
               type:Boolean,
            },

    // paymentIntent : {},

    // orderStatus : {
    //     type : String,
    //     default: 'Not processed yet',
    //     enum : [
    //         "Not processed yet",
    //         "Processing",
    //         "Dispatched",
    //         "Cancelled",
    //         "Delivered",
    //         "Cash On Delivery",
    //     ]
    // },

    orderedBy : {type: ObjectId, ref: "User"},

}, {timestamps : true})

module.exports = mongoose.model("PaymentSchema", PaymentSchema);