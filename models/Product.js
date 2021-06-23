const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    price:{
        type:Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
})

const Product=mongoose.model('Product',productSchema);
module.exports=Product;