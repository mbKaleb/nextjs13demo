import { Todo } from "../TodosList"
import { notFound } from "next/navigation"

import EditableTodoNote from "../../components/EditableTodoNote"

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodos = async (todoId:string) => {
    const res = await fetch( 
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: {revalidate: 60} } //incremental site regen in seconds
        )
    const todo: Todo = await res.json()
    return todo
    }

export default async function TodoPage({params: { todoId }}: PageProps) {

	const todo = await fetchTodos(todoId);
	if (!todo.id) { return notFound() }

    //Here we have a server component with a dynamic child! 
  return (
  <>
    <EditableTodoNote title={todo.title} id={todo.id} userId={todo.userId} completed={todo.completed} /> 
  </>
  )
}


export async function generateStaticParams( ) {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json()

    const sTodos = todos.splice(0, 10)

    return sTodos.map(todo => ({
        todoId: todo.id.toString() //must be a string
    }))
}