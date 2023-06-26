"use client"
import CreatePromptForm from '@/components/CreatePromptForm'
import React, { useState } from 'react'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


function page() {
  const router = useRouter();


  const { data: session, status } = useSession()

  const [creating, setCreating] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: ""
  })


  async function createPrompt(e) {
    e.preventDefault();
    setCreating(true)
    try {
      
      const _res = await fetch("/api/prompt/new", {
        method:"POST",
        body:JSON.stringify({
          promptData:prompt,
          userid:session.user.id
        })
      })
      if (_res.ok) {
        router.push("/")
      }
    } catch (error) {
      
      console.log(error);
    } finally{
      setCreating(false)
    }
  }
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Create Post</span>
      </h1>
      <p>create and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform</p>
      <CreatePromptForm creating={creating} setPrompt={setPrompt} prompt={prompt} handleCreatePrompt={createPrompt} />
    </section>
  )
}

export default page