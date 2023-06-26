import Link from 'next/link'
import React from 'react'

function CreatePromptForm({ creating, setPrompt, handleCreatePrompt, prompt
}) {
    return (
        <form onSubmit={handleCreatePrompt} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Your AI Prompt
                </span>
                <textarea value={prompt.prompt} placeholder='Write your prompt here' onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })} className='form_textarea' required>
                </textarea>
            </label>

            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Field of Prompt{" "}
                    <span className='font-normal'>
                        (#product, #webdevelopment, #idea, etc.)
                    </span>
                </span>
                <input value={prompt.tag} type="text" placeholder='#Tag' onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })} required className='form_input' />
            </label>

            <div className="flex-end mx-3 mb-5 gap-4">
                <Link href="/" className='text-gray-500 text-sm'>
                    Cancel
                </Link>
                <button type='submit' disabled={creating}
                className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                >
                    {creating? "Creating":"Create"}
                </button>
            </div>
        </form>
    )
}

export default CreatePromptForm