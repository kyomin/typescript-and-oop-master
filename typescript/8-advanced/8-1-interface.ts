type PositionType = {
	x: number;
	y: number;
};
interface PositionInterface {
	x: number;
	y: number;
}

// 공통점1: object를 정의할 수 있음
const obj1: PositionType = {
	x: 1,
	y: 1,
};
const obj2: PositionInterface = {
	x: 1,
	y: 1,
	z: 1,
};

// 공통점2: class에서 구현 가능
class Pos1 implements PositionType {
	x: number;
	y: number;
}
class Pos2 implements PositionInterface {
	x: number;
	y: number;
	z: number;
}

// 공통점3: extends 및 인터섹션(&)으로 '확장' 가능
interface ZPositionInterface extends PositionInterface {
	z: number;
}
type ZPositionType = PositionType & { z: number };

// 차이점1: only interfaces can be merged
// interface는 추가 속성을 병합할 수 있다.
interface PositionInterface {
	z: number;
}
// type은 허용이 안 된다.
// type PositionType {

// }

// 차이점2: Type aliases can use computed properties
type Person = {
	name: string;
	age: number;
};
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';
