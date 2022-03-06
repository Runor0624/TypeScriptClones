// 타입 별칭 1강
// 타입 별칭 = 특정타입 + 인터페이스 참조 가능한 타입 변수

//string 사용
// const name: string = '123';

//타입 별칭 사용
type Myname = string; // 얘라는 키워드 활용
const names: Myname = '123'; 
// type에서 미리 선언한 타입을 불러오는 형식으로 사용

//interface에서도 사용
type Developers = {
    alpha : string;
    skill: string;
}

//제네릭 에서도 사용가능
type Users<T> = {
    beta : T
}
