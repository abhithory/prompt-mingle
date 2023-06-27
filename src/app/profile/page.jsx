"use client";

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import { useRouter } from "next/navigation";
import ProfileComponent from '@/components/ProfileComponent';


function Profile() {
    const router = useRouter();
    const { data: session } = useSession();
    const [allPrompts, setAllPrompts] = useState([]);

    useEffect(() => {
        async function loadPrompts() {
            const _prompts = await fetch(`/api/users/${session.user.id}/prompts`);
            setAllPrompts((await _prompts.json()).data);
        }
        if (session?.user?.id) {
            loadPrompts();
        }
    }, [session?.user?.id]);

    const handleTagClick = (tagName) => {

    }

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };


    const handleDelete = async (post) => {
        const hasConfirmed = confirm(
            "Are you sure you want to delete this prompt?"
        );

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE",
                });
                const filteredPosts = allPrompts.filter((item) => item._id !== post._id);
                setAllPrompts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <ProfileComponent
            name='My'
            desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
            data={allPrompts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default Profile