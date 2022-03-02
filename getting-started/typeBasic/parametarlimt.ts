// 타입스크립트 기초 - 변수와 함수 타입 정의하기 4강
// ts가 함수의 파라미터의 타입을 제한하는방법
// js와의 차이점 , 더 엄격하게 문제를 잡아준다

function limit(a:number, b:number) :number {
    return a + b;
}
limit(50,100);
// limit(50,100,40) // 에러 : 야 파라미터값 2개인대 왜 3개넣냐?
