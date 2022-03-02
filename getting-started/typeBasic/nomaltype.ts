// ts에는 총 12개의 변수타입을 보유한다.
// 타입스크립트 기초 - 변수와 함수 타입 정의하기 1강

// let str = 'hello world!'; //(JS) str이라는 변수를 만들어 안에 hello world를 넣음

let str: string = 'hello world!' // (ts) str의 타입을 문자열로 간주한다는 선언

let num: number = 10; //(ts) num에 숫자라는 타입 선언

let arr: Array<number> = [1,2,3,4,5]; 
//(ts) 얘의 타입은 배열이며 내부에 들어가는건 숫자타입이다.

let heros: Array<string> = ['abc', 'cde', 'edf', 'abd'] 
// 숫자인 타입에 대한 에러 출력, 야 타입다르다 똑바로 써라 하고 경고
// 그러면 배열 내부에 다른 타입을 쓰려면 어떻게 할까?

let items: number[]  = [4,5,6,7,8,9,9,10]; //arr과 동일함.