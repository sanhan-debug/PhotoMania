import { Schema,model } from "mongoose";

const photoSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },UploadAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type: Schema.Types.ObjectId,
        ref : 'User,'
    },
    url:{
        type:String,
        required:true
    }
});

export const Photo = model("photos",photoSchema)