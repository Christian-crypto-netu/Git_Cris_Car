import mongoose from "mongoose";
import {Urldb} from './config.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(Urldb);
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}