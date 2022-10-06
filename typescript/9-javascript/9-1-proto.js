const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString()); // x.__proto__에 정의
console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array);

function CoffeeMachine(beans) {
	this.beans = beans;
	// Instance member level => 만들어지는 인스턴스마다 갖고 있는다.
	// this.makeCoffee = (shots) => {
	// 	console.log('making...');
	// };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
	console.log('making...');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
