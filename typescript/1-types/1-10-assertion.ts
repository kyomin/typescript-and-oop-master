{
  /**
   * Type Assertion ๐ฉ
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // result๋ any ํ์์ธ๋ฐ, ํ๋ก๊ทธ๋๋จธ๋ string ํ์์์ ์๊ณ  ์์ผ๋ฏ๋ก string์ด๋ผ ์ฃผ์ฅํ๋ค.
  console.log((result as string).length); // 5

  // ๋ฐ๋ฉด, ํ๋ก๊ทธ๋๋จธ๊ฐ ํ์์ ์๋ชป ์ฃผ์ฅํ๊ฒ ๋๋ฉด ์๋ฌ๊ฐ ๋ฐ์ํ  ์ ์๋ค.
  // ํ๋ก๊ทธ๋๋จธ ํ๋จ์ 100% ๋ณด์ฅํ  ๋ ์ฌ์ฉํด์ผ ํ๋ฏ๋ก ์ข์ง ์๋ค.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ
}
