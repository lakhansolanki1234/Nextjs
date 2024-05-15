import mongoose from "mongoose";

const connectTODB= async()=>{
    mongoose.connect('mongodb+srv://lakhancosmotechai:Lakhan1234@cluster0.ju0hinh.mongodb.net/')
    .then(()=>console.log('database connect'))
    .catch((e)=>console.log(e));
}

export default connectTODB;