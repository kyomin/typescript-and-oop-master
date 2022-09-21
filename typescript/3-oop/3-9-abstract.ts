{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean; // ? -> optional -> 굳이 안 넣어줘도 되는 속성
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	// 추상 클래스는 객체를 만들 수 없다.
	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 해당 클래스의 객체들이 공유해야 하는 데이터
		private coffeeBeans: number = 0; // instance(object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		fillCoffeeBeans(beans: number) {
			// 유효성 검사
			if (beans < 0) {
				throw new Error('value for beans should be greater than 0');
			}
			this.coffeeBeans += beans;
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}

		private preheat(): void {
			console.log('heating up... 🔥');
		}

		// abstract 메서드는 구현 부분이 존재하지 않고, 선언만 존재한다.
		// protected 키워드로 자식 클래스에서 구현할 것을 강제한다.
		protected abstract extract(shots: number): CoffeeCup;

		// CoffeeMaker 인터페이스를 필수로 구현해야 한다.
		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}

		clean() {
			console.log('cleaning the machine...');
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			// 자식 클래스는 부모 클래스의 생서자 호출이 강제된다.
			super(beans);
		}

		private steamMilk(): void {
			console.log('Steaming some milk...');
		}

		protected extract(shots: number): CoffeeCup {
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		protected extract(shots: number): CoffeeCup {
			return {
				shots,
				hasSugar: true,
			};
		}
	}

	// CoffeeMachine은 CoffeeMaker이다.
	// CaffeLatteMachine와 SweetCoffeeMaker은 CoffeeMachine이다.
	// 따라서 CaffeLatteMachine와 SweetCoffeeMaker은 CoffeeMaker이다.
	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(16, 'S01'),
		new SweetCoffeeMaker(16),
		new CaffeLatteMachine(16, 'S01'),
		new SweetCoffeeMaker(16),
	];

	// CoffeeMaker의 makeCoffee만 호출되도록 제약되며,
	// 각자 클래스에서 구현한 다양한 방식으로 호출된다. => 다형성
	machines.forEach((machine) => {
		console.log('-----------------------------------------------');

		// makeCoffee의 extract는 각각 자식에서 구현한 extract의 내용을 따른다.
		machine.makeCoffee(1);
	});
}
