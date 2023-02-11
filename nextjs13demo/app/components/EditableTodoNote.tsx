"use client"
import { createEditor } from "slate"
import { Slate, Editable, withReact } from "slate-react"
import { useState } from "react";


export default function EditableTodoNote(props: any ) {
    const { id, userId, title, completed } = props

    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: title }],
        },
    ]

  return (
    <>
        <Slate editor={editor} value={initialValue} >
            <Editable />
        </Slate>
    </>
  )
}