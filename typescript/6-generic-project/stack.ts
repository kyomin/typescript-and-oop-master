// 인터페이스로 기능들의 명세서를 작성한다.
interface Stack<T> {
	readonly size: number;
	push(value: T): void;
	pop(): T;
}

type StackNode<T> = {
	readonly value: T;
	readonly next?: StackNode<T>;
};

// 인터페이스 구현체 클래스
class StackImpl<T> implements Stack<T> {
	private _size: number = 0; // 클래스 내부에서 쓰이는 변수는 관례적으로 언더바스코어(_) 붙여주기
	private head?: StackNode<T>; // 연결리스트로 구현할 것이다.
	constructor(private capacity: number) {}
	get size() {
		// 게터를 통해 외부에서 접근할 수 있도록 한다.
		return this._size;
	}

	push(value: T) {
		if (this.size === this.capacity) {
			throw new Error('Stack is full!');
		}
		const node = { value, next: this.head }; // 새로운 노드 생성
		this.head = node; // 이제 헤드는 새로운 노드를 가리킨다.
		this._size++;
	}

	pop(): T {
		// 느슨한 타입 체크
		// null == undefined => true
		if (this.head == null) {
			throw new Error('Stack in empty!');
		}
		const node = this.head;
		this.head = node.next;
		this._size--;
		return node.value;
	}
}

const stack = new StackImpl<string>(10);
stack.push('dear');
stack.push('my');
stack.push('hello');
while (stack.size !== 0) {
	console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(1);
stack2.push(2);
stack2.push(3);
while (stack2.size !== 0) {
	console.log(stack2.pop());
}
