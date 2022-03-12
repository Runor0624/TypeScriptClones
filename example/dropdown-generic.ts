interface DropDownItem<T> {
value: T;
selected: boolean
}


// interface Email {
//   value : string;
//   selected: boolean;
// } // emails 에서 사용하는 타입 인터페이스화

// const emails: {value:string, selected: boolean}[] = [ 
  const emails: DropDownItem<string>[] =[
  //{value:string, selected: boolean}[] 내부데이터가 객체라 {}를 먼저 선언, 내부 데이터 value와 selected의 타입선언
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// } // numberOfProducts에서 사용하는 타입 인터페이스화

// const numberOfProducts: {value: number, selected: boolean}[] = [
  const numberOfProducts: DropDownItem<number>[] =[
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: {value: string; selected: boolean}) { //const emails 의 타입을 한번더 선언
// function createDropdownItem(item: | {value: number; selected: boolean} | {value: string; selected: boolean}) {
  function createDropdownItem(item: DropDownItem<string> | DropDownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// function createDropdownItem(item: {value:string; selected: boolean}) 시 문제점 : value속성을 타 함수도 보유함, 그래서 문제발생가능성존재
// 이때의 대안 : 제네릭이 등장한다
// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

