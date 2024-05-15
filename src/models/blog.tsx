import mongoose from "mongoose";


const blogschema=new mongoose.Schema({
    title:String,
    description:String
},{timestamps:true})

const Blog=mongoose.models.Blogs || mongoose.model("Blogs",blogschema);

export default Blog;