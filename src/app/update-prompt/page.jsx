"use client"
import CreatePromptForm from '@/components/CreatePromptForm'
import React, { useState } from 'react'

import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";


function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");


  const { data: session, status } = useSession()

  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: ""
  })


  async function updatePrompt(e) {
    e.preventDefault();
    setLoading(true)
    try {
      const _res = await fetch("/api/prompt/"+promptId, {
        method:"PATCH",
        body:JSON.stringify({
          prompt:prompt.prompt,
          tag:prompt.tag
        })
      })
      if (_res.ok) {
        router.push("/")
      }
    } catch (error) {
      
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>Update Prompt</span>
      </h1>
      <CreatePromptForm type={"Update"} loading={loading} setPrompt={setPrompt} prompt={prompt} handleForm={updatePrompt} />
    </section>
  )
}

export default page