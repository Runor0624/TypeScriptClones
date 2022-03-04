// command + , 를 눌러 설정으로 들어간다
// format on save 체크해제된걸 체크한다 (강의 완료 이후)

// let todoItems; // 왜 빨간줄이 뜨는가 ? 타입지정 안해서!
// type Todo = {
//   id: number,
//   title: string,
//   done:boolean
// }; // 이런식으로도 todoItems를 대체 가능

interface Todo {
  id:number,
  title: string,
  done:boolean
} // 아니면 이렇게 인터페이스를 사용하거나?

let todoItems : Todo[]; // 19번째 줄과 동일한 기능을 작동함

// let todoItems : {id:number; title:string; done:boolean}[]; // 객체 내부에 배열이 있다는거로 타입정의
// todos 내부 객체에 대해 타입 세부적인 타입정의
// 그러나 todo와 관련된걸 계속 이렇게 타입을 지정해줘야 하는가? type로 몰아버려도 됨

//type : any - 모든 타입을 다 받는다 , 얘만 사용하면 TS를 사용하는 의미가 없다.
// 최초 JS -> TS로 전환하는 프로젝트는 타입을 any로만 했다가 > 점차 필요한 타입으로 구체화 하는방향으로 진행


// api
// 반환타입이 미 정의됨
function fetchTodoItems():Todo[] {
   //fetchTodoItems라는 함수(객체) 타입 내부는 배열이다.
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] { // 윗줄에서 선언된 todo와 타입동일화
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo):void {
  // void : 리턴값이 없을 경우에 사용한다. 
  todoItems.push(todo); // 할일 목록을 받아서 todo를 추가시킴.
}

function deleteTodo(index: number):void { 
  // 왜 index에 number 타입 정의하는가? : 배열의 index값 이기 때문
  // void 왜씀 ? : 리턴값 없음.
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo: Todo):void {
  todo.done = true; //todo.done = true; 는 왜 에러처리를 하는가?

  // todo의 타입은 객체로 선언되있음 , 그러나 todo.done도 동일한 타입으로 처리하는지 확신이 안되서 그러는거임.
  // 상단에서 todos에 대한 타입을 정의한것을 그대로 가져오면 컴퓨터는 : 아 타입지정했네 하고 에러를 해제함.
  //TS 특징 : JS보다 에러가 친절해짐  
  todoItems.splice(index, 1, todo);
}

// business logic
// 할일중에 첫 목록 반환하는 용도로 사용함.
function logFirstTodo(): object { 
  // 왠 객체? :todos 배열 내부 데이터는 객체로 감싸짐
  return todoItems[0]; //todos의 첫 item값
}

function showCompleted(): object[] { //배열 내부에 여러가지 객체가 들어가있음.
  return todoItems.filter(item => item.done);
  // filter : 특정조건에 해당하는것만 필터링 해줌.
  // item이 item.done가 될 경우 item.done 처리된게 배열로 들어감.
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // void 왜씀 ? : return 값이 없잖아요?
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템4',
    done: false,
  }; // 방법1 : 필요한 데이터를 따로 선언하고 함수에 추가한다.
  addTodo(item1)
  addTodo({
    id: 5,
    title: '아이템5',
    done: false,
  }); // 방법2 : 함수에 필요한 데이터를 한번에 때려박는다.
}

// NOTE: 유틸 함수
function log(): void { // 리턴값 없으므로 void
  // console.log(todoItems);
}

todoItems = fetchTodoItems(); 
//todoItems가 구체적인 값을 보유하기위해 fetchTodoItems의 타입 구체화 필요
addTwoTodoItems();
log();
