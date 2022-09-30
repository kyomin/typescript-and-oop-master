// 인터페이스로 기능들의 명세서를 작성한다.
interface Stack {
	readonly size: number;
	push(value: string): void;
	pop(): string;
}

type StackNode = {
	readonly value: string;
	readonly next?: StackNode;
};

// 인터페이스 구현체 클래스
class StackImpl implements Stack {
	private _size: number = 0; // 클래스 내부에서 쓰이는 변수는 관례적으로 언더바스코어(_) 붙여주기
	private head?: StackNode; // 연결리스트로 구현할 것이다.
	constructor(private capacity: number) {}
	get size() {
		// 게터를 통해 외부에서 접근할 수 있도록 한다.
		return this._size;
	}

	push(value: string) {
		if (this.size === this.capacity) {
			throw new Error('Stack is full!');
		}
		const node: StackNode = { value, next: this.head }; // 새로운 노드 생성
		this.head = node; // 이제 헤드는 새로운 노드를 가리킨다.
		this._size++;
	}

	pop(): string {
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

const stack = new StackImpl(10);
stack.push('1');
stack.push('2');
stack.push('3');
while (stack.size !== 0) {
	console.log(stack.pop());
}

stack.pop(); // Error: Stack in empty!
