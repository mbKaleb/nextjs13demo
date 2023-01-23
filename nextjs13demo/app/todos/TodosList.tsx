

const fetchTodos = async () => {
	const res await fetch('https://jsonplaceholder.typicode.com/todos')
	const data = await res.json()
}

export default async function TodosList() {
	const todos = await fetchTodos()

	return (<div>
		
	</div>)
}