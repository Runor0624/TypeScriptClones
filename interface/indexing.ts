// 인프런 강의 : 인터페이스 4강 + 5강

// 인터페이스의 인덱싱
interface StringArray {
    [index: number]: string;  
    // 배열을 제작시 사용할 index번호 항상 숫자라 number처리
}

let arr : StringArray =['a','b','c'];
// 배열의 접근방식중 일부 , 배열내부에 들어간 모든건 문자열 타입 처리

//인터페이스 딕셔너리 패턴
// 인덱싱과 유사한 방법임
// 객체를 가지고 조작시 자동으로 타입을 정의하는대 사용함.

interface StringRegex {
[key:string]: RegExp //RegExp 정규표현식 생성기
}

let obj:StringRegex = { // sth = key
// sth: /abc/, 
cssFile: /\.css$/ // .css로 끝나는 파일들 가져온다.
}

Object.keys(obj).forEach(function(value) {

})