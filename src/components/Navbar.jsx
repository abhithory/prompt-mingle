import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <nav className="flex-between w-full mt-2 mb-4">
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
            <div className="sm:flex hidden">

                <Link href="/create-prompt" className='black_btn'>
                    Create Prompt
                </Link>

            </div>
            {/* mobile navigation */}
            <div className="sm:hidden flex">
                <Image
                    src='/assets/images/logo.png'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
            </div>

        </nav>
    )
}

export default Navbar