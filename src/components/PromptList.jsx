import React from 'react'
import PromptCard from './PromptCard'

function PromptList({ data }) {
    return (
        <div className='mt-16 prompt_layout'>

        {data && data.map((prompt, handleTagClick) => {
            return (
            <PromptCard key={prompt._id} prompt={prompt} handleTagClick={handleTagClick} />
            )
        })}
        </div>

    )
}

export default PromptList