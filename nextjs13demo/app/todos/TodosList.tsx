import Link from "next/link"

export type Todo = {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

const fetchTodos = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos')
	const todos: Todo[] = await res.json()
	return todos
}

export default async function TodosList() {
	const todos = await fetchTodos()

	return (<div className="absolute ml-28">
		{todos.slice(0,25).map((todo)=> (
			<p key={todo.id} className="leading-9" >
				<Link href={`/todos/${todo.id}`}>
					Todo: {todo.id}
				</Link>
			</p>
		))}
	</div>)
}