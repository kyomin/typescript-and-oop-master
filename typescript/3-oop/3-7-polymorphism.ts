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

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 현재 클래스 객체를 생성해 리턴한다.
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    // CoffeeMaker 인터페이스를 필수로 구현해야 한다.
    makeCoffee(shots: number): CoffeeCup {
      // 아래 일련의 호출 함수들은 굳이 외부에서 호출하지 않아도 되는 함수들이다.
      // 내부에서만 쓰인다. => private으로 지정
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

    // makeCoffee 메서드 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
      // 부모의 makeCoffee를 호출
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // makeCoffee 메서드 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
      // 부모의 makeCoffee를 호출
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // CoffeeMachine은 CoffeeMaker이다.
  // CaffeLatteMachine와 SweetCoffeeMaker은 CoffeeMachine이다.
  // 따라서 CaffeLatteMachine와 SweetCoffeeMaker은 CoffeeMaker이다.
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S01'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S01'),
    new SweetCoffeeMaker(16),
  ];

  // CoffeeMaker의 makeCoffee만 호출되도록 제약되며,
  // 각자 클래스에서 구현한 다양한 방식으로 호출된다. => 다형성
  machines.forEach((machine) => {
    console.log('-----------------------------------------------');
    machine.makeCoffee(1);
  });
}
