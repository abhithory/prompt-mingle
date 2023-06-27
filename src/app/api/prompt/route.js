import Prompt from "@/model/prompt";
import { connectToDb } from "@/utils/connectToDb";
import { NextResponse } from 'next/server'


export async function GET() {
    try {
        await connectToDb();
        const _allPrompts = await Prompt.find({}).populate("creator");
        return NextResponse.json({ status: true,data:_allPrompts }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false,message:error.message }, { status: 500 })
    }
}
