// 브라우저 환경에서 this는 글로벌 객체인 Window를 가리킨다.
console.log(this);
function simpleFunc() {
	console.log(this);
}
simpleFunc(); // window.simpleFunc

class Counter {
	count = 0;
	increase = function () {
		console.log(this);
	};
}
const counter = new Counter();
counter.increase(); // 호출하는 주체가 Counter 인스턴스이므로 this는 Counter를 가리킨다.

// Output: undefined => let과 const로 선언한 변수는 window에 등록되지 않으므로 this는 정보를 잃는다.
// caller를 호출하는 것은 window도 그 어떤 것도 아니기 때문이다.
const caller = counter.increase;
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 호출하는 주체가 Bob 인스턴스이므로 this는 Bob 가리킨다.

// 위의 caller에서 this에 대한 정보를 잃지 않기 위해서는 bind를 이용한다.
// 함수를 호출하는 주체에 따라서 this가 달라지므로 아래와 같이 해당 함수를 특정 객체와 bind 한다.
// 그러면 해당 함수를 가리키는 어떤 포인터가 함수를 호출하더라도 this는 counter의 클래스를 가리키게 된다.
const bindCaller = counter.increase.bind(counter);
bindCaller(); // Counter

// 위와 같이 일일이 bind를 하지 않아도
// Arrow Function으로 함수를 정의하게 되면
// 항상 Arrow Function이 정의된 해당 객체를 this로 가리키게 된다. => 나도 이 특성을 실무에서 가끔 이용한다.
class ArrowCounter {
	count = 0;
	increase = () => {
		console.log(this);
	};
}
const arrowCounter = new ArrowCounter();
const arrowCaller = arrowCounter.increase;
arrowCaller(); // ArrowCounter
