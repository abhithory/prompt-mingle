"use client";

import React, { useEffect, useState } from 'react'
import PromptList from './PromptList';

function Feed() {
  const [allPrompts, setAllPrompts] = useState([]);

  useEffect(() => {
    async function loadPrompts(){
      const _prompts = await fetch("/api/prompt");
      // console.log((await _prompts.json()).data);
      setAllPrompts((await _prompts.json()).data);
    }
    loadPrompts();
  }, [])
  
  return (
    <section className="w-full flex flex-col">
      <input type="text" />
      <PromptList data={allPrompts} />
    </section>
  )
}

export default Feed