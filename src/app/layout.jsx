import "@/styles/globals.css"


export const metadata = {
    title: "Prompt Mingle",
    description: "Insprie and create"
}

export default function layout({children}) {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}
