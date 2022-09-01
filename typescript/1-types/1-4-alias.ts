{
  /** 
   * Type Alias
   * 프로그래머가 새로운 타입을 정의할 수 있다.
  */
  type Text = string;
  const name: Text = 'jake';
  type Num = number;
  type Student = {
    name: string,
    age: number
  };
  const student: Student = {
    name: 'jake',
    age: 20
  };

  /** 
   * String Literal Types
  */
  type Name = 'name';
  let jakeName: Name;
  // jakeName = 'kyo'; <- 에러! 'name'이라는 문자열만 허용한다.
  type JSON = 'json';
  const json: JSON = 'json';
}