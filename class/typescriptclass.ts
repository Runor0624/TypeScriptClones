// 타입스크립트의 클래스는 es6과 뭐가 다른가?

/*
JS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
*/

/*
TS
class Person {
    private name : string; (private 클래스 안에서만 쓸거야!)
    public age : number; (public : 아무대서나 쓸거야!)
    readonly log : string (readonly: 읽기가능)

    constructor(name : string, age: number) {
        this.name = name;
        this.age = age
    }
}
*/