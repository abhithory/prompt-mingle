import Navbar from "@/components/Navbar"
import "@/styles/globals.css"


export const metadata = {
    title: "Prompt Mingle",
    description: "Insprie and create"
}

export default function layout({children}) {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Navbar />
            {children}
            </main>
        </body>
    </html>
  )
}
