// 이넘 파트
// 이넘 : 특정 값의 집단을 의미하는 자료형  - 드롭다운 , 정해진 목록에 대한 데이터 지정시 사용

// 숫자형 이넘 - 별도 값 지정이 없을 경우 숫자형으로 간주된다, 인덱스 번호처럼 0,1,2 로 증가한다, 초기값이 10이면 10에서 1,2,3 증가한다.
enum Shoes {
    Nike, // 0
    Adidas // 1
} // Shoes에는 Nike와 Adidas만 들어감

let alpha = Shoes.Nike;
console.log(alpha); //0

// 문자형 이넘
enum Alpha {
    pizza = '피자',
    kim = '킴'
}
let Beta = Alpha.pizza;
console.log(Beta); // 콘솔에서 피자로 출력

// 그럼 이넘 은 언제 사용하는가?
// 하단의 예제처럼 enum에서 미리 선언된 값만 사용이 가능하게 한다.
// 예제

enum Answers {
    Yes = 'Yes',
    No = 'No',
}

function askQuestion (answer: Answers) {
if(answer === Answers.Yes) {
    console.log('ok')
}
if(answer === Answers.No) {
    console.log('no')
}
}
askQuestion(Answers.Yes);
askQuestion(Answers.No);