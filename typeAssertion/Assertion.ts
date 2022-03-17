// 타입단언
let a; // <-- 타입스크립트는 우선 any 로 판단
// let b = a // <-- a가 any라 b도 any로 변경
let b = a as string 
//TS보다 개발자가 타입을 더 잘 아는상황, 
// 딴소리하지말고 TS너는 내가 하란대로 타입지정해

// DOM API 조작
