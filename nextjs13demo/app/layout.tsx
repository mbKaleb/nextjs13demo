/* eslint-disable @next/next/no-head-element */

"use client"
import "../styles/globals.css"
import Header from "./Header"
import TextBackground from "./components/TextBackground";


import { createEditor } from "slate"
import { Slate, Editable, withReact } from "slate-react"
import { useState } from "react";

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A  in a paragraph.' }],
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})

{
  
  const [editor] = useState(() => withReact(createEditor()))
  return (
    <html>
      <head>
        <style> @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap'); </style>
      </head>
      <div className="font-[] "></div>
      <body className="bg-black relative">
        <Header />
        <TextBackground />
        <div className="ml-26 mt-[6.5rem]">
          {children}
        </div>
      </body>
    </html>
  );
}

