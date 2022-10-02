{
	type Todo = {
		title: string;
		description: string;
	};

	// Readonly는 개발자들이 이미 Mapped Type을 사용해 유틸성으로 만든 타입이다.
	function display(todo: Readonly<Todo>) {
		todo.title = 'jaja'; // 읽기 전용 속성이므로 'title'에 할당할 수 없습니다.ts(2540)
	}
}
