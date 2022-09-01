{
  /** 
   * Union Types: OR
  */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up'); // 인자에 대한 힌트를 얻을 수 있다.

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;  // 8, 16, 32 중 하나만 할당할 수 있다.

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;      
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: 'logged in'
      }
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    // 좋지 않은 방법 -> 유니온 양이 많아질수록 분기 처리가 복잡해진다.
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);      
    }
  }
}