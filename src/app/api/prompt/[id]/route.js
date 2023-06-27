import Prompt from "@/model/prompt";
import { NextResponse } from 'next/server'


export async function GET(req, { params }) {
    try {
        await connectToDb();
        
        const _prompt = await Prompt.findById(params.id).populate("creator");
        if (!_prompt) return new Response("Prompt Not Found", { status: 404 });

        return NextResponse.json({ status: true, data: _prompt }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false, message: error.message }, { status: 500 })
    }
}

export async function PATCH(req, { params }) {
    try {
        await connectToDb();

        const { prompt, tag } = params;
        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();


        return NextResponse.json({ status: true, data: existingPrompt }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false, message: error.message }, { status: 500 })
    }
}

export async function DELETE(req, {params}) {
    try {
        await connectToDb();

        await Prompt.findByIdAndRemove(params.id);
        return NextResponse.json({ status: true, message:"deleted succefully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: false, message: error.message }, { status: 500 })
    }
}
