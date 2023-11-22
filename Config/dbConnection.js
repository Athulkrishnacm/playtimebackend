import mongoose from "mongoose";

const connection = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/playtime')
}
mongoose.set('strictQuery',true);

export default connection