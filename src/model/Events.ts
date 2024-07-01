import mongoose, {Schema, Document} from "mongoose";


export interface Events extends Document {
    title: string;
    banner: string;
    description: string;
    location: string;
    maxUsers: number;
    dateTime: Date;
    host: string;
    registers: string[];
}

const EventsSchema: Schema<Events> = new mongoose.Schema({
    title: {
        type: String,
        required:[true,"title is required"],
        trim: true
    },
    banner: {
        type:String,
        required: [true,"banner is required"],
    },
    description: {
        type:String,
        required: [true,"description is required"],
    },
    location: {
        type:String,
        required: [true,"location is required"],
    },
    maxUsers: {
        type:Number,
        required: [true,"maxUsers is required"],
    },
    dateTime: {
        type:Date,
        required: [true,"dateTime is required"]
    },
    host: {
        type:String,
        required: [true,"host is required"],
    },
    registers: {
        type:[String],
        default: []
    }
})

const eventsModel = (mongoose.models.Events as mongoose.Model<Events>) ||mongoose.model<Events>('Events',EventsSchema)

export default eventsModel;

