// 제네릭 - 타입 제한 관련
// 왜이리 분량이 길음 ? : TS 숙련 용도로 길게하는거도 있고 입문자들이 가장 어려워 하는 파트가 여기임.

// 타입제한 : 제네릭을 조금더 엄격하게 쓰거나 옵션을 많이 주고 싶을때 사용한다.

function logTextLength<T>(text: T[]): T[] { // []을 사용하여 타입에 대한 구체적인 힌트를 TS에 넘긴다
    // console.log(text.length) 문자열인대 에러 왜띄움? :Ts는 제대로 몰라요.
    /* text.forEach(function (text) {
        console.log(text);
    }) */
return text;
}
logTextLength(['12345'])

// 제네릭 타입 제한 2 - 정의된 타입 이용
interface LengthType {
    length: number;

}
function logTextLengths<T extends LengthType>(text: T): T { //extends에 인터페이스 추가하여 추가속성 받음
    text.length;
    return text;
}
logTextLengths({length: 15}) //정의된 속성은 어떻게 집어넣어도 상관없음.

// 제네릭 타입 제한 3 -keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    //extends keyof ShoppingItem 을 통해 ShoppingItem 내부 속성중 하나가 제네릭으로 변환됨, 즉 인터페이스 내부로 제네릭 작동범위 제한.
return itemOption
}
getShoppingItemOption(10); // 에러 : 인터페이스에 해당하는 속성을 받는지 제대로 확인 불가
getShoppingItemOption('name'); // 인터페이스에서 선언된 키값으로만 타입제한을 하겠다.
