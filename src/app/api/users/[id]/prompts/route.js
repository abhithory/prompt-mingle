import Prompt from "@/model/prompt";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from 'next/server'


export async function GET(req, {params}) {
    try {
        await connectToDb();
        console.log(params.is);
        const _allPrompts = await Prompt.find({creator: params.id}).populate("creator");
        return NextResponse.json({ status: true,data:_allPrompts }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false,message:error.message }, { status: 500 })
    }
}
