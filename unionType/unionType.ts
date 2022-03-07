// 연산자를 이용한 타입정의 1강
// 타입의 장점을 살리면서 타입 관련 문제를 해결하는 방법임.
// 단축키 : | 
// 뭐하는 기능인가? : 타입을 1개 이상 사용하게 해준다.


function logMessage(value: string | number) {
    console.log(value);
   
}
logMessage('hi')
logMessage(122)

// 연산자를 이용한 타입정의 2강
// 유니온 타입의 장점 : 1개 이상의 타입을 쓰고 싶을때 사용가능하게 함, 같이 언급된 타입중 1개가 되게한다
// 유니온 타입의 장점 : 타입을 구분하는대 장점이 된다(타입 가드)
// 타입가드 : 특정 타입으로 타입의 범위를 줄여가며 추측하는것.

// 연산자를 이용한 타입정의 3강
// 유니온 타입의 특징

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
} // 2개의 다른 인터페이스 준비

function askSomeone(someone: Developer | Person) {
    // someone를 통해 2가지 인터페이스의 속성을 모두 받겠다.
    // 유니온 타입의 특징중 일부.
    // 왜 someone쳐보니 name만 접근가능함?  TS : 도대체 뭔값 들어오는거여? , 둘다 똑같은 타입인 name만 가져오자.
    someone.name

}

