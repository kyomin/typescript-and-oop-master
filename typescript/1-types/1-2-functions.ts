{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript β¨
  function add(num1: number , num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  function jsFetchNum(id) {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript β¨
  function fetchNum(id: string): Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional Parameter => ?λ₯Ό λΆμ¬ λ°μλ λκ³  μ λ°μλ λλ μΈμ νμ
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('jake', 'kim');
  printName('jake');
  printName('jake', undefined);

  // Default Parameter => μ λ¬νμ§ μμμ λ κΈ°λ³Έμ μΌλ‘ κ°μ§λ κ° μ§μ 
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage('message');
  printMessage();

  // Rest Parameter => μ κ° μ°μ°μ μ΄μ©
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}