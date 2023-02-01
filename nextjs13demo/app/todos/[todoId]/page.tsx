import { Todo } from "../TodosList"
import { notFound } from "next/navigation"

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodos = async (todoId:string) => {

    const res = await fetch( 
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: {revalidate: 60} }
        )
    const todo: Todo = await res.json()
    return todo
    }

export default async function TodoPage({params: { todoId }}: PageProps) {

	const todo = await fetchTodos(todoId);

	if (!todo.id) { return notFound() }

    const fchelper = (e:any) => {
        console.log(e)
    }

  return (
    <div>
        <div contentEditable={true} className={"focus:outline-none"}>
            #{todo.id}: {todo.title}
        </div>
        <p>Completed: {todo.completed ? "Yes": "No"}</p>
        <p>
            By User: {todo.userId}
        </p>
    </div>
  )
}

export async function generateStaticParams( ) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json()

    const sTodos = todos.splice(0, 10)

    return sTodos.map(todo => ({
        todoId: todo.id.toString()
    }))
}