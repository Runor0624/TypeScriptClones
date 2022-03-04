// 인프런 강의 : 인터페이스 3강

// 함수의 스펙(구조)에 인터페이스를 활용한다

interface sumFunction {
(a:number , b:number): number //함수의 규칙을 여기서 정의함(인자)
}

let sum: sumFunction; 
sum = function(a: number, b:number):number { // void 형식은 number형식에 할당이 불가하다?
return a + b; // 인터페이스에 선언한 인자의 타입을 다시 작성해준다.
}