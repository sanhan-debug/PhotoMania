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
    }
});

export const Photo = model("photos",photoSchema)