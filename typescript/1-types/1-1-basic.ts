{
  /** 
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
  */

  // number
  const num: number = 1;
  
  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = true;

  // undefined: 값이 비어있지 아닌지 아직 결정되지 않았을 때
  let name: undefined;  // 단독적으로 undefined를 쓰는 경우는 없다.
  let age: number | undefined;  // 이와 같이 유니온 타입으로 옵셔널한 값을 표현한다.
  age = undefined;
  age = 1;

  // null: 값이 확실히 비었음을 의미
  let person: null; // 마찬가지로 단독으로 사용하지 않는다.
  let person2: string | null;

  // unknown: 모든 타입을 허용하므로 가능하면 쓰지 않는다.
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any: unknown과 마찬가지로 모든 타입을 허용하므로 가능하면 쓰지 않는다.
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while(true) {
      // do something
    }
  }

  // object
  let obj: object;  // 마찬가지로 어떤 객체도 허용하므로 가능하면 쓰지 않는다.
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({ name: 'jake' });
  acceptSomeObject({ animal: 'cat' });
}