import { mongoose } from "mongoose";

const DataSchema = mongoose.Schema(
    {
        
        name:{
            type: String,
            required:true,
        },
        age:{
            type: Number,
            required:true,
        },
        status:{
            type: Boolean,
            required:true,
        }
        
    }
);

export const Data = mongoose.model("Model001", DataSchema);