{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // 유효성 검증
      }
      this.internalAge = num;
    }

    // 생성자의 인자에 private으로 명시하면 바로 멤버변수로 설정이 된다.
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  user.age = 6; // setter age 호출
  console.log(user.fullName);
}
