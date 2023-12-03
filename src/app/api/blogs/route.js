import { NextResponse } from "next/server"

export const GET = ()=>{
   return NextResponse.json({message:"Hello, world!"})
}

export const POST = ()=>{
   return NextResponse.json({message:"Hello, world!"})
}