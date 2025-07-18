import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudnary url
            required: true,
        },
        thumbnail: {         //cloudnary url
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        discription: {
            type: String,
            required: true,
        },
        duration: {    //cloudnary url
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0  
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, {  timestamps: true } )

   videoSchema.plugin(mongooseAggregatePaginate)
    

export const Video = mongoose.model("Video", videoSchema)

//mongoose-aggregate-paginate-v2 = agrication query lakhava mate
