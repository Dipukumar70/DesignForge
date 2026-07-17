const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({


name:{


type:String,

required:true


},



tokens:{


type:Object,

default:{}


},



components:{


type:Object,

default:{}


},



owner:{


type:mongoose.Schema.Types.ObjectId,


ref:"User",


required:true


}



},


{
timestamps:true
}

);



module.exports = mongoose.model(
"Project",
projectSchema
);