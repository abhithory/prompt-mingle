"use client";

import React, { useEffect, useState } from 'react'
import PromptList from './PromptList';

function Feed() {
  const [allPrompts, setAllPrompts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    async function loadPrompts() {
      const _prompts = await fetch("/api/prompt");
      // console.log((await _prompts.json()).data);
      setAllPrompts((await _prompts.json()).data);
    }
    loadPrompts();
  }, [])

  const handleSearchChange = (e) => {
  }

  const handleTagClick = (tagName) => {
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {searchText ? (
        <PromptList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptList data={allPrompts}
          handleTagClick={handleTagClick}
        />
      )}
    </section>
  )
}

export default Feed