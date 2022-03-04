// 인프런 강의 : 인터페이스 6강
// 인터페이스 확장 : 명령어 extends , props처럼 다른 인터페이스에서 선언한거 가져옴
// 인터페이스 확장의 규칙 : 9번 줄 처럼 확장받을경우 Person과 Developer의 규칙 모두를 준수해야함.
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}