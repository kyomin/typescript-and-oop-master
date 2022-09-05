{
  /**
   * Enum
   * 결론부터 말하면, 이것 대신에 Union 타입을 사용하는 것이 좋다.
   */

  // JavaScript => Enum 타입이 따로 없다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  // freeze를 사용하여 객체 내부의 속성값을 변경할 수 없도록 고정하는 방법을 사용한다.
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });

  // TypeScript
  enum Days {
    Monday, // 0(사용자가 설정하지 않으면 디폴트로 0을 갖고 순차적으로 증가)
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  console.log(Days.Friday);

  let day: Days = Days.Saturday;
  day = Days.Monday;
  day = 10; // number 타입도 넣을 수 있는 문제가 있다.

  // 유니온 타입으로도 충분히 Enum 역할을 할 수 있다.
  type DaysOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  let dayOfWeek: DaysOfWeek = 'Sunday'; // DaysOfWeek 이외의 다른 문자열은 허용하지 않는다.
}
