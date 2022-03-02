// 타입스크립트 기초 - 변수와 함수 타입 정의하기 3강
// 파라미터 + 반환값

function sums(a: number, b:number) {
     //파라미터에도 타입지정 가능 :number로 리턴값 타입지정도 가능
    return a + b;
}
sums(10,20);

function alpha(): number {
    return 20;
    // alpha 함수의 리턴값은 number 타입이다, 리턴값으로 number가 들어가니 에러해제
}

function tests(a: number , b:number) :number {
    return a + b;
} // 함수의 기본형
