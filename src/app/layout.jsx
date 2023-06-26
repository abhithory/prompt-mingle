import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/components/NextAuthProvider";
import "@/styles/globals.css";


export const metadata = {
    title: "Prompt Mingle",
    description: "Insprie and create"
}

export default function layout({ children }) {
    return (
        <html lang="en">
            <body>
                <NextAuthProvider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Navbar />
                        {children}
                    </main>
                </NextAuthProvider>
            </body>
        </html>
    )
}
