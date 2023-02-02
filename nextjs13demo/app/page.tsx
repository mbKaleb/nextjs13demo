"use client"
import { useState } from "react"
import { createEditor } from "slate"
import { Slate, Editable, withReact } from "slate-react"

export default function Home() {
	console.log(document.body.scrollHeight)
		// Create a Slate editor object that won't change across renders.
		const [editor] = useState(() => withReact(createEditor()))
		const initialValue = [
			{
			  type: 'paragraph',
			  children: [{ text: 'A line of text in a paragraph.' }],
			},
		]

	return (
		<div 
			id="DIV"
			className="absolute top-[12.52rem] left-[5rem] leading-[2.13rem] whitespace-break-spaces max-w"
		>
			<Slate editor={editor} value={initialValue}>
				<Editable />
			</Slate>
		</div>
	)
}