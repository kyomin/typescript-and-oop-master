{
	const obj = {
		name: 'jake',
	};
	obj.name; // jake
	obj['name']; // jake

	type Animal = {
		name: string;
		age: number;
		gender: 'male' | 'female';
	};

	type Name = Animal['name']; // string
	const text: Name = 'hello';

	type Gender = Animal['gender']; // 'male' | 'female'

	type Keys = keyof Animal; // 'name' | 'age' | 'gender'
	const key: Keys = 'age';

	type Person = {
		name: string;
		gender: Animal['gender'];
	};
	const person: Person = {
		name: 'jake',
		gender: 'male',
	};
}
