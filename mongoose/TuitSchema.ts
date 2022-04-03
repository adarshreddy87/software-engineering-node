/**
 * @file Defines mongoose schema for documents in the tuits collection
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: String, ref:'UserModel'},
    postedOn: {type: Date, default: Date.now},
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0}
    }

}, {collection: "tuits"});
export default TuitSchema;