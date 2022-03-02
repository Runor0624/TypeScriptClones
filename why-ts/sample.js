// function sum(a,b) {
//     return a + b;
// }
// var results = sum (10,20);
// results.toLocaleString(); // 타입스크립트와 차이 : 자동완성 없음 , 그로인한 오타가능성

// @ts-check
//ts-check는 타입스크립트와 유사한 기능을 자바스크립트에 줌

/**
 *  @param{number}  a //1번 숫자 
 *  @param{number } b //2번 숫자
 */
function sum(a,b) {
    return a + b;
}
sum (10,20); // 타입스크립트와 달리 얘를 문자열로 바꿔도 에러로 간주하지 않음, 왜? .ts가 아니라