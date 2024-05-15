import connectTODB from "@/app/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function POST(req:any){
    try{

        await connectTODB();
        const extractData=await req.json();

        const newlycreateddata=await Blog.create(extractData)

        if(newlycreateddata){
            return NextResponse.json({
                success:true,
                Message:"Failed to add new Blog"
            })
        } 
        else{
            return NextResponse.json({
                success:false,
                message:'Something Wrong'
            })
        }

    }
    catch(e){
        console.log(e);

        return NextResponse.json({
            success:false,
            message:'Something Wrong'
        })
    }
}