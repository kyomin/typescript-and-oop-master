{
  /**
   * Type Inference
   */

  // 타입을 명시하지 않아도, 선언하면서 문자열 데이터를 넘기므로 string 타입으로 지정된다.
  let text = 'hello';

  // 함수 인자에 타입을 명시하지 않으면, 기본적으로 any로 지정이 된다.
  // 변수와 마찬가지로 디폴트 매개변수로 어떤 값을 지정하면 그 값의 타입을 따른다.
  function print(message = 'hello') {
    console.log(message);
  }
  print('hi');

  // 숫자 + 숫자를 리턴하므로 리턴 값의 타입을 지정하지 않아도 자동으로 number 타입이라고 추론한다.
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2); // 결과 값이 number이므로 result는 number 타입으로 추론된다.
}
