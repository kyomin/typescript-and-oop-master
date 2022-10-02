{
	type Video = {
		title: string;
		author: string;
	};

	// 모든 key를 순회하며 옵셔널(?)로 만든다.
	type Optional<T> = {
		[P in keyof T]?: T[P]; // for .. in
	};
	type VideoOptional = Optional<Video>;
	type Animal = {
		name: string;
		age: number;
	};
	const animal: Optional<Animal> = {
		name: 'dog',
	};

	// 모든 key를 순회하며 readonly로 만든다.
	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};
	const video: ReadOnly<Video> = {
		title: 'hi',
		author: 'jake',
	};
	// video.title = 'hello'; -> 변경 불가

	// 이렇게 일일이 속성 하나하나에 성질을 변화시키는 것은 귀찮은 작업이고 확장성이 좋지 않다.
	// type VideoOptional = {
	// 	title?: string;
	// 	author?: string;
	// };
	// type VideoReadOnlyreadonly = {
	// 	readonly title: string;
	// 	readonly author: string;
	// };

	type Nullable<T> = { [P in keyof T]: T[P] | null };
	const obj: Nullable<Video> = {
		title: null,
		author: null,
	};

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
