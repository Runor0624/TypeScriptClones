// command + , 를 눌러 설정으로 들어간다
// format on save 체크해제된걸 체크한다 (강의 완료 이후)

// let todoItems; // 왜 빨간줄이 뜨는가 ? 타입지정 안해서!

let todoItems : object[]; // 객체 내부에 배열이 있다는거로 타입정의

//type : any - 모든 타입을 다 받는다 , 얘만 사용하면 TS를 사용하는 의미가 없다.
// 최초 JS -> TS로 전환하는 프로젝트는 타입을 any로만 했다가 > 점차 필요한 타입으로 구체화 하는방향으로 진행


// api
// 반환타입이 미 정의됨
function fetchTodoItems():object[] { //fetchTodoItems라는 함수(객체) 타입 내부는 배열이다.
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo):void {
  // void : 리턴값이 없을 경우에 사용한다. 
  todoItems.push(todo);
}

function deleteTodo(index) {
  todoItems.splice(index, 1);
}

function completeTodo(index, todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
