"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useSession, signIn, signOut, getProviders } from "next-auth/react"


function Navbar() {
    const { data: session } = useSession();

    const [allProviders, setAllProviders] = useState([])
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        async function loadAllProviders() {
            const _all = await getProviders();
            setAllProviders(_all);
        }
        loadAllProviders();
    }, [])

    return (
        <nav className="flex-between w-full pt-2 mb-4">
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/logo.png'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p className='logo_text'>PromptMingle</p>
            </Link>

            {/* Desktop navigation */}
            <div className="sm:flex hidden gap-4">
                {session?.user ?
                    <>
                        <Link href="/create-prompt" className='black_btn'>
                            Create Prompt
                        </Link>
                        <button type='button' className='outline_btn' onClick={() => signOut}
                        >Sign Out</button>
                        <Link href="/profile">
                            <Image
                                src={session?.user?.image}
                                alt='logo'
                                width={30}
                                height={30}
                                className='object-contain rounded-full'
                            />

                        </Link>
                    </>
                    :
                    Object.values(allProviders).map((provider) => {
                        return (
                            <button key={provider.id} type='button' className='outline_btn' onClick={() => signIn(provider.id)}>Sign In</button>
                        )
                    })
                }

            </div>
            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {session?.user ?
                    <>
                        <Image
                            src={session?.user?.image}
                            alt='logo'
                            width={30}
                            height={30}
                            className='object-contain cursor-pointer rounded-full'
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                        />


                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href="/profile" className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link href="/create-prompt" className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="black_btn mt-5 w-full">
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </>
                    :
                    Object.values(allProviders).map((provider) => {
                        return (
                            <button key={provider.id} type='button' className='outline_btn' onClick={() => signIn(provider.id)}>Sign In</button>
                        )
                    })
                }
            </div>

        </nav>
    )
}

export default Navbar