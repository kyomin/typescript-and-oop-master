interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log('full time!!');
	}
	workFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay() {
		console.log('part time!!');
	}
	workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다!
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}
const jake = new FullTimeEmployee();
const jerry = new PartTimeEmployee();
jake.workFullTime();
jerry.workPartTime();

const jakeAfterPay = payBad(jake);
const jerryAfterPay = payBad(jerry);
// payBad 호출 후, 타입이 Employee로 리턴되어 workFullTime, workPartTime에 접근 불가
// jakeAfterPay.workFullTime();
// jerryAfterPay.workPartTime();

// 제네릭도 extends 키워드를 이용해 제약조건을 걸 수 있다.
// 즉, 여기서는 Employee 인터페이스를 확장한 타입만 받을 수 있는 것이다.
// 때문에 pay 함수 호출을 할 수 있다고 보장받는 것이다.
function pay<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}
const jake2 = new FullTimeEmployee();
const jerry2 = new PartTimeEmployee();
jake.workFullTime();
jerry.workPartTime();

const jake2AfterPay = pay(jake);
const jerry2AfterPay = pay(jerry);
jake2AfterPay.workFullTime();
jerry2AfterPay.workPartTime();

/* 또 다른 제네릭 조건 예제 */
const obj = {
	name: 'jake',
	age: 20,
};

const obj2 = {
	animal: 'dog',
};

// '임의의' 객체의 '임의의' key 값을 받아 value를 리턴하는 함수
// key는 임의의 객체 안에 있는 key 중 하나로 제약 받는다.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
