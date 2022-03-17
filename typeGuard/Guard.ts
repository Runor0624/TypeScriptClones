// 타입가드
interface Developer {
name : string;
skill: string;

}

interface Person {
    name: string;
    age: number;

}

function introduce() : Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron man'}
}
let tonys = introduce();

if ((tonys as Developer).skill) {
   let skills =  (tonys as Developer).skill;
} else if ((tonys as Person).age) {
    let ages = (tonys as Person).age;
}

//// 타입가드 정의

function isDeveloper (target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined
}

if (isDeveloper(tonys)) {
    tonys.skill
} else {
    tonys.age
}