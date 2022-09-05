{
  /**
   * Type Assertion 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result는 any 타입인데, 프로그래머는 string 타입임을 알고 있으므로 string이라 주장한다.
  console.log((result as string).length); // 5

  // 반면, 프로그래머가 타입을 잘못 주장하게 되면 에러가 발생할 수 있다.
  // 프로그래머 판단에 100% 보장할 때 사용해야 하므로 좋지 않다.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱
}
