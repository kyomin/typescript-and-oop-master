# 프로젝트 개요

프로젝트 관리 및 기록 소프트웨어인 노션 앱을 타입스크립트를 이용하여 흉내내어 본다.   
![typescript_4_141c526618](https://user-images.githubusercontent.com/46395776/222939678-a84b43f4-d438-4999-bcb8-f9cf29c7e741.gif)
   
# 프로젝트 실행

1. 타입스크립트 전역 설치 : `npm install -g typescript`
2. 프로젝트 루트 폴더로 이동 : cd ./motion-project
3. 컴파일 : tsc
4. VSCode Live Server 익스텐션 설치
5. index.html 파일 열고 우클릭 > Open with Live Server
   
# 타입스크립트의 특징

### 컴파일 언어, 정적 타입 언어
자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있다.   
이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환된다.   
코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다는 장점이 있다.   
하지만 코드 작성 시 매번 타입을 결정해야 하기 때문에 번거롭고 코드량이 증가하며 컴파일 시간이 오래 걸린다는 단점이 있다.   
   
### 자바스크립트 슈퍼셋(Superset)
타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어이다.   
따라서 유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있다.
   
### 객체 지향 프로그래밍 지원
타입스크립트는 ES6에서 새롭게 사용된 문법을 포함하고 있으며 클래스, 인터페이스, 상속, 모듈 등과 같은 객체 지향 프로그래밍 패턴을 제공한다.
   
# 타입스크립트 사용을 고려해야 하는 이유

### 높은 수준의 코드 탐색과 디버깅
타입스크립트는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거한다.   
또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있다.   
실제로 한 연구에 따르면 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지할 수 있다고 한다.
   
### 자바스크립트 호환
타입스크립트는 자바스크립트와 100% 호환된다.   
따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있다.   
타입스크립트는 앱과 웹을 구현하는 자바스크립트와 동일한 용도로 사용 가능하며 서버 단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발한다.
   
### 강력한 생태계
타입스크립트는 그리 오래되지 않은 언어임에도 불구하고 강력한 생태계를 가지고 있다.   
대부분의 라이브러리들이 타입스크립트를 지원하며 마이크로소프트의 비주얼 스튜디오 코드(VSCode)를 비롯해 각종 에디터가 타입스크립트 관련 기능과 플러그인을 지원한다.
   
### 점진적 전환 가능
기존의 자바스크립트 프로젝트를 타입스크립트로 전환하는데 부담이 있다면 추가 기능이나 특정 기능에만 타입스크립트를 도입함으로써 프로젝트를 점진적으로 전환할 수 있다.   
자바스크립트에 주석을 추가하는 것에서부터 시작해 시간이 지남에 따라 코드베이스가 완전히 바뀌도록  준비 기간을 가질 수 있다.   
   
하지만, 새로운 프로그래밍 언어에 대한 러닝 커브(Learning Curve), 상대적으로 낮은 가독성, 코드량 증가 등의 이유로 타입스크립트 사용을 망설이는 개발자가 많다.   
프로젝트 성격에 따라 타입스크립트를 사용할지 결정하면 된다.   
프로젝트의 규모가 크고 복잡할수록, 유지보수가 중요한 장기 프로젝트일수록 타입스크립트의 이점이 부각될 것이다.
   
# 프론트엔드 프레임워크와 타입스크립트

### 리액트(React)
리액트와 타입스크립트의 호환성은 비교적 좋은 편이다.   
최근 들어 많은 개발자들이 리액트와 타입스크립트 조합을 선택하고 있다.   
리액트 공식 홈페이지에서는 타입스크립트를 사용하기 위한 가이드를 제시하고 있다.   
페이스북에서 공식적으로 배포하는 리액트 웹 개발용 보일러 플레이트(Boilerplate, 구조·설정 작업을 자동으로 진행해주는 도구이자 명령어)인 Create React App은 간단한 옵션 추가만으로 타입스크립트를 사용할 수 있도록 지원한다.
   
### 뷰(Vue.js)
뷰 2.0에서는 타입스크립트를 사용할 수 있지만 몇몇 라이브러리의 도움을 받아야 하거나 구현 자체가 안 되는 문제도 다수 있었다.   
다행스럽게도 최근 릴리즈된 뷰 3.0부터는 타입스크립트를 공식 지원한다.   
뷰 3.0 CLI(Command Line Interface)는 타입스크립트 도구화 지원을 기본으로 제공한다.
   
### 앵귤러(Angular)
자바스크립트 기반인 앵귤러 버전 1과 달리 버전 2부터는 타입스크립트 기반으로 만들어졌고 타입스크립트를 권장하고 있다.
   
# 타입스크립트로 어떻게 전환하면 좋을까?
자바스크립트 프로젝트를 타입스크립트로 어떻게 전환할 수 있을까?   
유효한 자바스크립트는 유효한 타입스크립트이며 타입스크립트는 모든 타입을 명시적으로 선언하지 않아도 최선을 다해 타입을 추론하려고 한다.   
이러한 사실은 자바스크립트를 타입스크립트로 점진적, 단계적으로 전환할 수 있음을 의미한다.   
   
### 비주얼 스튜디오 코드(VSCode)로 자바스크립트 페어링
비주얼 스튜디오 코드에는 편집기 또는 특정 작업 영역(프로젝트)에 대해 자바스크립트에서 타입스크립트 검사를 활성화 할 수 있는 설정이 포함되어 있다.   
.vscode/setting.json에 다음 코드를 추가할 수 있다.   
   
```javascript
{
 "Javascript.implicitProjectConfig.checkJs": true
}
```   
   
이제 타입이 안전하지 않은 줄에는 에디터에서 해당 코드를 에러로 표시한다.   
이러한 에러 메시지는 에디터에만 표시되며 코드에는 영향을 주지 않는다.   
`@ts-ignore - 해당 줄`   
`@ts-nocheck - 전체`   
해당 코드를 추가하여 타입 체크를 선택적으로 비활성화 할 수도 있다.
   
### 자바스크립트용 타입스크립트 컴파일러 사용
타입스크립트 컴파일러를 설치하고 스크립트를 실행하거나 설정한다.   
tsconfig.json 파일을 사용하여 컴파일러 설정을 세팅한다.   
   
```javascript
{
 "compilerOptions": {
  "allowJs": true
  "checkJs": false
  "outDir": "./dist"
  "rootDir": "./src"
  "strict": false
 }
}
```   
   
"allowJs": true // 타입스크립트 컴파일러를 통해 실행할 자바스크립트 파일을 선택   
"checkJs": false // 자바스크립트 파일에 대한 타입 체크   
   
타입스크립트 컴파일러를 실행하고 자바스크립트를 확인한다.   
"checkJs": true 타입 체크를 활성화하고 타입 체크를 진행한다.
   
### 자바스크립트 파일을 타입스크립트 파일로 변환
자바스크립트에서 타입이 안전한 파일인지 확인한 후 하나씩 타입스크립트 파일로 변환한다(.js -> .ts).   
allowJs를 활성화 했으므로 한 번에 모두 이동할 필요 없이 점진적으로 이동할 수 있다.   
이미 자바스크립트 코드에 대한 타입 체크를 실행했으므로 업데이트가 너무 많지 않을 것이다.
   
### 엄격한 타입 체크
타입 체크를 더 엄격하게 하는 몇 가지 옵션이 있다.   
   
```javascript
{
 "compilerOptions": {
 "noImplicitAny": true,
 "strictNullChecks": true,
 "strictFunctionTypes": true,
 "strictBindCallApply": true,
 "strictPropertyInitialization": true,
 "noImplicitThis": true,
 "alwaysStrict": true
}
```   
   
하나씩 활성화 해 문제를 해결한다.
   
# 한눈에 보는 타입스크립트 기본 문법

### 기본 타입
타입스크립트는 다양한 기본 타입을 제공한다.   
Boolean, Number, String, Object, Array, Tuple, Enum, Any, Void, Null, Undefined, Never   
   
- 변수에 타입 설정
```javascript
let str: string = 'hi';
let num: number = 100;

let arr: Array = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: { name: string, age: number} = {
 name: 'hoho',
 age: 22
};
```   
   
- 함수에 타입 설정
```javascript
function add(a: number, b: number): number {
return a+b;
}
//옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
 console.log(a);
}
```   
   
기본 타입 중 자바스크립트에 존재하지 않는 타입은 다음과 같다.   
   
- Tuple: 배열의 타입 순서와 배열 길이를 지정할 수 있는 타입
```javascript
var arr: [string, number] = ['aa', 100];
```   
   
- Enum: Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입.   
값의 종류가 일정한 범위로 정해져 있는 경우에 유용하다.   
기본적으로 0부터 시작하며 값은 1씩 증가한다.
```javascript
enum Shoes {
 Nike = '나이키',
 Adidas= '아디다스'
}
```   
   
- Any: 모든 데이터 타입을 허용한다.   
   
- Void: 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입이다.   
   
- Never: 특정 값이 절대 발생할 수 없을 때 사용한다.
   
### 인터페이스
인터페이스는 타입을 정의한 규칙을 의미한다.   
   
```javascript
interface User {
 age: number;
 name: string;
}
```   
   
- 변수와 함수에 활용한 인터페이스
```javascript
var person: User = {
 age: 30,
 name: 'aa'
}

function getUser(user: User) {
 console.log(user);
}
```   
   
- 인덱싱
```javascript
interface StringArray {
 [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 10 //Error;
```   
   
- 딕셔너리 패턴
```javascript
interface StringRegexDictionary {
 [key: string]: RegExp
}

var obj: StringRegexDictionary = {
 cssFile: /\.css$/,
 jsFile: 'a' //Error
}

obj['cssFile'] = /\.css$/;
obj['jsFile'] = 'a' //Error
```   
   
- 인터페이스 확장
```javascript
interface Person{
 name: string;
 age: number;
}

interface User extends Person{
 language: string;
}
```
   
### 오퍼레이터
- Union 타입: 자바스크립트의 OR 연산자와 같은 의미의 타입이다.   
Union 타입으로 지정하면 각 타입의 공통된(보장된) 속성에만 접근 가능하다.   
   
```javascript
function askSomeone(someone: Developer2 | Person) {
 console.log(someone);
}
```   
   
- Intersection 타입: 자바스크립트의 AND 연산자와 같은 의미의  타입이다.   
각각의 모든 타입이 포함된 객체를 넘기지 않으면 에러가 발생한다.   
   
```javascript
function askSomeone(someone: Developer & Person) {
 console.log(someone);
}
```
   
### 제네릭
한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.   
제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미한다.   
   
```javascript
function logText <T> (text: T):T {
 return text;
}

logText<string>('aa');
logText<number>(100);
```
   
### 타입 추론
타입 추론이란 타입스크립트가 코드를 해석하는 과정을 뜻한다.   
   
```javascript
var a = true;

a = 100; //Error
```   
   
해당 코드는 a 변수를 Boolean 타입으로 추론했기 때문에 Number 타입을 할당하면 에러가 발생한다.   
   
- 가장 적절한 타입(Best Common Type): 배열에 담긴 값들을 추론하여 Union 타입으로 묶어 나가는 것을 말한다.   
   
```javascript
var arr = [1, 2, true];
```   
   
타입스크립트는 해당 코드의 타입을 Number | Boolean으로 정의한다.   
   
- 인터페이스와 제네릭을 이용한 타입 추론 방식
```javascript
interface Dropdown<T>{
 value: T,
 text: 'String'
}

var items: Dropdown<boolean> {
 value: true,
 text: 'aa'
}
```
   
### 타입 단언
타입 단언이란 타입스크립트가 해석하는 것보다 더 확실한 목적을 가지고 개발자가 해당 코드에 타입을 직접 지정하는 것을 의미한다.   
   
```javascript
var a;
a = 10;
a = 'string';
var b = a as string;
```   
   
이는 DOM API 조작에서 많이 사용한다.   
   
```javascript
// 타입추론 시 HTMLDivElementㅣnull로 반환
var div = document.querySelector('div') as HTMLDivElement;
div.innerText;
```   
   
위의 타입 단언으로 null을 대비한 분기문을 작성하지 않아도 된다.
   
### 타입 호환
타입 호환이란 특정 타입이 다른 타입에 잘 호환되는지를 의미한다.   
   
- 구조적 타이핑: 코드 구조 관점에서 타입이 서로 호환되는지를 판단하는 것이다.   
구조적으로 더 큰 타입은 작은 타입을 호환할 수 없다.   
   
```javascript
interface Developer {
 name: string;
 age: string;
}
interface Person {
 name: string;
}

var developer: Developer;
var person: Person;

developer = person; //Error
person = developer;
```