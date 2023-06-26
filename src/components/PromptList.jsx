import React from 'react'

function PromptList({ data }) {
    return (
        data && data.map((prompt) => {
            return (
                <PromptCard prompt={prompt} />
            )
        })

    )
}

function PromptCard({prompt}) {
    return (
        <div className="border-4 p-4 ">
            <p>{prompt.prompt}</p>
        </div>
    )
}

export default PromptList