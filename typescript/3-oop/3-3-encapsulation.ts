{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 캡슐화, 정보은닉
   * 외부에서 접근하면 안 되는 민감한 속성들을 감춰야 한다.
   * 아래의 관련 키워드들이 있다.
   *
   * public(default)
   * private
   * protected
   */
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level => 해당 클래스의 객체들이 공유해야 하는 데이터
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // 유효성 검사
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
}
