// 제네릭 파트 : 제네릭의 장점 ~ 제네릭 실전예제 살펴보기- 코드에 타입정의 파트 까지

// 제네릭 써서 얻는 타입상 장점은 ? : 타입정의에 대한 주도권 확보가 가능하다, 
// 함수정의시 타입을 비워놓다가 어떤타입이 들어갈지 호출시 정의하는것, 타입을 추론하여 최종 리턴값까지 부착디 가능한것.
// 여러가지 타입 커버가 가능해짐

function logText<T>(text: T): T { //logText 바로뒤에 <T>는 어떤 타입을 받겠다 하는것, 이후 T는 인자와 리턴값도 유사하게 받는다는것
    return text
}
const alpha = logText<string>('strings') // 나는 이 함수의 출력값을 문자열로 받겠다.
alpha.split('') // 타입스크립트 : 아 이거 문자열이라고? ok.
const beta = logText<boolean>(false); 

