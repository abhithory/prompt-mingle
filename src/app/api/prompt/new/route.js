import Prompt from '@/model/prompt';
import { connectToDb } from '@/utils/connectToDb';
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectToDb()
    const { userid, promptData: { prompt, tag } } = await req.json()
    const newPrompt = new Prompt({ creator: userid, prompt, tag })
    await newPrompt.save();
    return NextResponse.json({ status: true, message: "prompt created succefully" }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message }, { status: 500 })
  }
}
