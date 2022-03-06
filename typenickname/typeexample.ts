//타입 별칭 2강
// 타입 별칭의 코드 예제

// interface Persons {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}
//인터페이스와 타입의 비교

// 둘이 뭔차이임? 
// type는 내부에 어떤식으로 타입이 구성되는지 볼수 있다.
let seho : Person = {
    name: '세호',
    age: 30,
}

// 3강 = 인터페이스와의 차이점
// 타입별칭 : 신규값 생성 안함 , 정의한 타입을 쉽게 참고하기 위해 이름부여
// 타입 : 확장이 불가능함 
// 인터페이스 : 확장이 가능함(extends) -> 가능하다면 얘를 사용하는걸 추천함(공식문서)