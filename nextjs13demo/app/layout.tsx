/* eslint-disable @next/next/no-head-element */

"use client"
import "../styles/globals.css"
import Header from "./Header"
import TextBackground from "./TextBackground";


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
      <head></head>
      <body>
        <Header />
        <TextBackground />
        {children}
      </body>
    </html>
  );
}
