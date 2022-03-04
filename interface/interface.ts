// 인터페이스 : 반복되는 타입을 여기에 몰아넣어서 사용, 항상 동일타입 
// 동일 규칙으로 사용 , 상호간 약속
interface User {
    age: number,
    name: string, // 이렇게 선언하면
}

//변수에 활용
let test: User = {
    age: 33, // 인터페이스 에서 선언된 타입을 모두 가져와야함.
name: 'han'
}