// 타입스크립트는 .ts 의 확장자를 보유한다 , 리액트 사용시 .tsx
function add(a: number, b:number):number { // 괄호뒤의 타입은 반환해주는 타입
    return a + b;
}
add(10, 20); // 정해진 타입 : 숫자를 모두 준수할경우 별문제 없음
add(10, '20'); // 정해진 타입과 달라서 에러로 처리함 , 에러의 사전방지

const result = add(10,20);
result.toLocaleString(); //숫자 > 문자열로 전환


