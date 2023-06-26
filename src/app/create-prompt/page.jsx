"use client"
import CreatePromptForm from '@/components/CreatePromptForm'
import React, { useState } from 'react'

function page() {
  const [creating, setCreating] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: ""
  })


  async function createPrompt(e) {
    e.preventDefault();
    setCreating(true)
    console.log(prompt);
    setCreating(false)
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