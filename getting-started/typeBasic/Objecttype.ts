// 타입스크립트 기초 - 변수와 함수 타입 정의하기 2강
// 튜플 : 배열에 특정 index의 타입을 지정가능 
// 배열 타입이 배열 전체에 대한 타입이면 튜플은 거기서 더 상세히 들어가서 타입지정이 가능

let address: [string,string,number] = ['seoul', 'busan',10];

// 객체
let objects = {}; //(js)

let obj : object = {}; //(ts)
// let person: object = {
//     name: 'alpha',
//     age: 100,
// }; 
// 객체로 타입정의시 내부에 어떤속성이 들어가도 딱히 신경안씀, 간단하게 사용시 이거 

let person: {name:string, age:number} = {
    name: 'alpha',
    age: 50,
} 
//객체 내부에 들어가는것도 구체적 타입지정가능

//ts 진위값 (true/false)
let show: boolean = true;