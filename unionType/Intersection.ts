// 연산자를 이용한 타입정의 4~5강

// 인터섹션 타입이란? - 명령어 : &

/*
let han: string | number | boolean - 이 3가지 타입중 1개만 만족함
let han: string & number & boolean - 이 3가지 타입을 모두 만족함.
*/

interface InterTest {
    name: string;
    skill: string;
}

interface InterPerson {
    name: string;
    age: number;
}

function askSomeones (someone: InterPerson & InterTest) {
    someone.age;
    someone.name;
    someone.skill; 
} //모두 만족하여 해당 interface만 가지고 있는 타입도 가져온다.

// 유니온과 InterSection의 차이점 : |와 & 의 차이점
/*
1. 유니온 타입 : 들어가는 인터페이스 중 하나가 된다, 인터페이스중 하나를 따라간다.
 - 얘네중 하나의 선택지를 가질수 있다.
askSomeone({name: '김', skill: '잠'})
askSomeone({name: "최", age: 20}) - 얘네중 하나로 따라간다, 실무에서는 유니온을 더 많이 사용한다.

2.Intersection Type : 들어가는 인터페이스 속성을 모두 가져온다
 - 즉 들어가는 인터페이스 데이터값 모두 가져와야 정상 작동한다.
  - 두개의 타입을 모두포함한 새로운 타입을 만드는 개념임



*/