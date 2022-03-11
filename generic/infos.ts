// 제네릭 ? : c#이나 자바 등에서 많이 활용하는 문법과 유사
// 재사용 높은 컴포넌트 제작시 자주 활용하는 특징

/*
function logText<T>(text: T): T {
    return text
}
T가 뭐임?? 왜씀?? 왜 함수 파라미터쪽에 들어감?
*/

/*
제네릭의 기본 문법에 대해 간단히 알아보자
function logText(text){
console.log(text)
return text; 
}
logText(); -> 별도 타입 언급없어서 any처럼 아무거나 들어가는게 가능

제네릭 기본 문법 파트
function logText<T>(text: T):T { -> T는 쉽게 생각하면 호출시점을 참고하여 타입을 넘겨준다.
    return text
}
logText(); -> text:unknown 나옴
logText<string>('하이') -> <string>를 사용 -> 인자의 타입은 문자열이다 선언

간단 요약 : 호출시점에 호출하는 부분의 타입을 참고 -> 타입을 넘겨준다
*/

/*
기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복선언의 단점
기존 타입정의 관련 예시 
function logText(text: string) {
    return text;
}

function logNumber(num: number) {
    return num
}

logText('a')
const tests = logNumber(10) 
이런식으로 해도 문제는 없으나, 유지보수 할때는 최악임 -> 왜? 타입하나때문에 함수를 추가로 선언해?
*/

/*
 기존 타입 정의 방식과 제네릭의 차이점 - 유니온 사용하여 선언시 문제점.
 function logText(text: string | number) {
     return text
 }
 logText(10);
 logText('a'); 둘다 가능.
 이럴때 문제점 : 문자열과 숫자 공통으로 사용가능한 속성만 접근 가능, 하나만 해당하면 에러.


 */