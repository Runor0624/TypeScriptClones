// 인프런 강의 : 인터페이스 2강
interface Users {
    age: number;
    name: string;
}

//함수에 인터페이스 활용, 보통 함수에 인터페이스를 사용하는 경우가 많다.
//FE에서 가장 인터페이스가 많이 활용되는 구간 -> API호출 , API데이터 모양 규정등

//함수에 인터페이스 활용 : 인자에 인터페이스 사용 -> 관련된 코드가 인터페이스를 준수하는지 확인하는게 TS의 역할
function getUser(user: Users) { 
//getUser은 인터페이스의 규정을 준수하는 데이터만 받는다, 왜? 인자 user 타입이 Users기떄문

console.log(user)
}
const tester = {
    name: '테스터',
    age: 40
}
getUser(tester)
