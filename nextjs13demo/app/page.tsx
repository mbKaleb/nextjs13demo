"use client"
import Link from "next/link"
import { useState } from "react"
import { createEditor } from "slate"
import { Slate, Editable, withReact } from "slate-react"

export default function Home() {
		// Create a Slate editor object that won't change across renders.
		const [editor] = useState(() => withReact(createEditor()))
		const initialValue = [
			{
			  type: 'paragraph',
			  children: [{ text: 'A line of text in a paragraph.' }],
			},
		]
		let height = window.innerHeight;


	return (
		<div 
			id="DIV"
			className="absolute top-[12.52rem]  ml-28 leading-[2.13rem] whitespace-break-spaces max-w"
		>	
			<Link href={`/todos/`}>Todos</Link>
			<Slate editor={editor} value={initialValue}>
				<Editable />
			</Slate>
		</div>
	)
}