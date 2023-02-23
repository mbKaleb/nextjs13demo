import Link from "next/link"

export type Todo = {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

const fetchTodos = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
		next: { revalidate: 60 } //revalidate after 60 seconds
	})
	const todos: Todo[] = await res.json()
	return todos
}

export default async function TodosList() {
	const todos = await fetchTodos()

	return (<div className="absolute">
		{todos.slice(0,25).map((todo)=> (
			<p key={todo.id} className="leading-9" >
				<Link href={`/todos/${todo.id}`}>
					Todo: {todo.id}
				</Link>
			</p>
		))}
	</div>)
}

export async function generateStaticParams() {
	//Values of keys must be strings
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos: Todo[] = await res.json();

	const trimmedTodos = todos.splice(0, 10);

	return todos.map((todos) => ({
		todoId: todos.id.toString()
	}))
}
