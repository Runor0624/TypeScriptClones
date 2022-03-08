// 클래스 : ES6 에서 추가

// class Person {
//     //클래스 로직
//     // 인스턴스 제작을 담당하는 기능임
//     constructor(name, age) {
//         console.log('생성되었습니다')
//         this.name = name;
//         this.age = age;
//     }
// }
// let test = new Person('세호', 30); let test를 통해 constructor 인자값도 받는거 가능
// //constructor 내부에 있는 코드를 실행한다고 생각하면됨

/*
자바스크립트의 프로토타입 소개
let user = {name : 'capt', age: 50}; 객체를 user라는 변수에 담음
let admin = {name : 'capt', age: 50, role: 'admin'} 
중복되는 객체 내부의 데이터값을 줄이는 방법중 하나 = 프로토 타입

let admin = {};
admin.__proto__ = user; 어드민의 상위요소에 user객체 권한 부여
즉 user에서 가지고 있는값 끌고와서 사용하는게 가능해진다.
admin.role = 'admin' => {role:admin}추가 + 상위요소 USer의 객체도 가져옴
*/

/*
자바스크립트 프로토타입의 활용사례
객체 생성 이후 , 기본적으로 최상위 객체를 보유하고 그 최상위 객체에 대한 프로토타입도 사용이 가능하다.
객체와 배열을 사용할때 최상위 요소의 프로토타입을 통해 추가 속성을 가져오기때문에 원할히 사용이 가능하다.
예제 : 배열의 map등등.
*/

/*
프로토 타입과 클래스간 관계
class Person {
constructor(name, age ) {
    this.name = name;
    this.age = age;
}
}
클래스는 내부적으로 어떤 결과물을 가져오나?
기존에 있던 문법만 변경 한것이다. function => class로 바꾼개념이다.

*/