{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean; // ? -> optional -> 굳이 안 넣어줘도 되는 속성
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 해당 클래스의 객체들이 공유해야 하는 데이터
		private coffeeBeans: number = 0; // instance(object) level

		constructor(
			coffeeBeans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {
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

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots,
				hasMilk: false,
			};
		}

		clean() {
			console.log('cleaning the machine...');
		}

		// CoffeeMaker 인터페이스를 필수로 구현해야 한다.
		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			const coffee = this.extract(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}

	interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup;
	}

	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
	}

	// 싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 비싼 우유 거품기
	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Fancy Steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 차가운 우유 거품기
	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Cold Steaming some milk...');
		}

		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 우유를 첨가하지 않고, 받은 CoffeeCup을 원형 그대로 돌려준다.
	class NoMilk implements MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup {
			return cup;
		}
	}

	// 설탕 제조기
	class AutomaticSugarMixer implements SugarProvider {
		private getSugar(): boolean {
			console.log('Getting some sugar');
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	// 수동 설탕 제조기
	class SugarMixer implements SugarProvider {
		private getSugar(): boolean {
			console.log('Getting some sugar by hands');
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	// 설탕을 첨가하지 않고, 받은 CoffeeCup을 원형 그대로 돌려준다.
	class NoSugar implements SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup {
			return cup;
		}
	}

	// Milk
	const cheapMilkMaker = new CheapMilkSteamer();
	const fancyMilkMaker = new FancyMilkSteamer();
	const coldMilkMaker = new ColdMilkSteamer();
	const noMilk = new NoMilk();

	// Sugar
	const automaticSugarMaker = new AutomaticSugarMixer();
	const sugarMaker = new SugarMixer();
	const noSugar = new NoSugar();

	// 구현하기에 따라서 다형성을 띌 수 있는 MilkFrother와 SugarProvider 인터페이스를 정의하고,
	// 이를 구현하는 클래스들을 만들어 조립함으로써(composition)
	// 다음과 같이 원하는 커피 머신들을 만들 수 있다.
	const automaticSweetMachine = new CoffeeMachine(
		12,
		noMilk,
		automaticSugarMaker
	);
	const sweetMachine = new CoffeeMachine(12, noMilk, sugarMaker);
	const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
	const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
	const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, sugarMaker);
}
