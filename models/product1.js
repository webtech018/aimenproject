var mongoose=require("mongoose");
var product1Schema =mongoose.Schema({
    name:String,
    contact:String,
    city:String,
});
const Product=mongoose.model("Product1",product1Schema);
module.exports=Product1;