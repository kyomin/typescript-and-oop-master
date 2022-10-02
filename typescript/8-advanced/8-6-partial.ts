{
	type Todo = {
		title: string;
		description: string;
		label: string;
		priority: 'high' | 'low';
	};

	// Partial은 Mapped Type을 이용하여 모든 속성의 성질은 Optional로 만든다.
	function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
		// fieldsToUpdate에 명시된 속성들은 todo에 의해 뿌려진 속성과 일치하는 것들에 덮어씌어진다.
		return { ...todo, ...fieldsToUpdate };
	}
	const todo: Todo = {
		title: 'learn TypeScript',
		description: 'study hard',
		label: 'study',
		priority: 'high',
	};
	const updated = updateTodo(todo, { priority: 'low' });
	console.log(updated);
}
