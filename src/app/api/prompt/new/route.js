import { NextResponse } from 'next/server'

  export async function POST(req) {
    console.log("req");
    console.log(await req.json());
    return NextResponse.json({message:"this is message"})
  }
