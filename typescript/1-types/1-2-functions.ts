{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number , num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional Parameter => ?를 붙여 받아도 되고 안 받아도 되는 인자 표시
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('jake', 'kim');
  printName('jake');
  printName('jake', undefined);

  // Default Parameter => 전달하지 않았을 때 기본적으로 가지는 값 지정
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage('message');
  printMessage();

  // Rest Parameter => 전개 연산자 이용
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}