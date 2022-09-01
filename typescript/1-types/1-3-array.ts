{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // fruits.push('tomato'); <- 에러! 변경 불가!
  }

  // Tuple => 배열은 배열인데, 서로 다른 타입을 담을 수 있다. 인덱스로 접근하기 때문에 가독성이 좋지 않아 잘 사용하지 않는다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
}