import React from 'react'
import PromptCard from './PromptCard'

function ProfileComponent({ name, desc, data, handleEdit, handleDelete }) {
 console.log(data)
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className='mt-10 prompt_layout'>
        {data && data.map((post) => (
          <PromptCard
            key={post._id}
            prompt={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default ProfileComponent