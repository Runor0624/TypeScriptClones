// 인터페이스에 제네릭 선언하기 

// interface Dropdown {
//     value: string; 
//     selected: boolean;
// }
// const obj: Dropdown = {value: '10', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
} // 타입선언 시점에 타입을 추가로 넘겨서 관련된 데이터를 변경하겠다 선언

const obj: Dropdown<number> = {value: 10 , selected: false}; // value T하여 제네릭형태로 변경됨.
