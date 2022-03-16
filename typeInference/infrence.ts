// 타입 추론?
// 타입스크립트가 해당 코드를 어떻게 해석하는지의 과정 = 타입추론

/* ts의 추론하는 과정 
let x = 3
 x에 대한 별도의 타입 지정이 없어도 일단 number로 간주함 , 이거처럼 변수 선언 혹은 초기화시 타입이 추론됨
 이외에도 변수,속성,인자의 기본값 등을 설정할때 타입 추론 발생 
*/

let a = 'abc'; 
//vs 코드에서 우리가 코드를 작성할때 vs코드와 타입스크립트가 얘가 어떤 코드인지 이렇게 확인해서 보여주는 과정도 해당

function getB(c = 10) { 
    // c?: number - 함수 호출시 c 값을 넘기지 않으면 c = 10을 기본으로 가지고 아래 줄을 진행하는것으로 간주
    let d = 'hello'; 
    return c + d
}
/* 왜 getB(c?: number): string가 나오는가? 인자 = 숫자 , d의 문자열을 더해서 결과물로 문자열이 될꺼라고 ts가 짐작 */

/* 인터페이스와 제네릭을 사용한 타입추론 방식 */
interface Dropdown<T> {
value: T //제네릭으로 인해 변동가능성 존재
title: string; // 문자열 고정
}

let shoppingItem: Dropdown<string> = {
    //<string>로 넘겨서 제네릭은 문자열이 된다.
    title: 'test',
    value: 'test2'
}

/* 복잡한 구조에서 타입 추론 방식 */
interface DetailDropdown<K> extends Dropdown<K>{
     // DetailDropDown에 들어간 K가 tag의 타입으로도 들어감, Dropdown을 가져옴
    description : string;
    tag: K;
}

let detailedItem: DetailDropdown<number> = {
    // number로 변경되면 제네릭으로 받는값은 number로 변경된다, 타입이 별도로 선언된것은 영향을 받지 않는다.
    title: 'abc',
    description: 'ab',
}

/* best common type 추론 방식 : ts가 어떤 타입인지 짐작하는 알고리즘 */
let arr = [0, 1, true]; // 가장 근접한 타입을 유니온 타입으로 표현해주는것
let arrs = [1,2,3];