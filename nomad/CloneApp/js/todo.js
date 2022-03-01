const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todoList");


//localStorage 저장용 array
// 이전 todo를 저장하기 위해 let으로 설정 
let todo = [];
const todo_key = "todo"; 

// 입력된 todo리스트 받아 처리
toDoForm.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event){
  //submit의 기본 동작은 새로고침 => 새로고침 동작을 중지시킴
  event.preventDefault();
  console.log(toDoInput.value);

  //입력한 값을 변수에 저장 
  const newToDo = toDoInput.value;

  //todo가 생성될 때마다 array에 추가 
  // todo의 구분을 위해 id를 만들어 obj형태로 array에 push
  const todoObj ={ "text" : newToDo, "id" : Date.now()}
  todo.push(todoObj);

  //li생성 후 화면출력
  insertToDo(todoObj);
  //localStorage 저장
  saveTodo();


  //enter시 input vlaue empty
  toDoInput.value= "";
}

function saveTodo(){
  localStorage.setItem(todo_key, JSON.stringify(todo))  //localStorage에는 array 저장 불가능, text만 저장 가능
  // JSON.stringify를 이용하여 JSON로 저장 (형태는 배열이지만 자료형은 String)
  // 그 후 JSON.parse를 이용해 배열형태를 만들어줌 
}

//localStorage에 저장된 todo를 배열로 만들고 화면에 출력하기 
const savedTodo =  localStorage.getItem(todo_key)

if(savedTodo != null){
  const parseToDo = JSON.parse(savedTodo)
  //만약 savwTodo가 비어있지 않으면 이전의 배열을 todd에 저장 
  todo = parseToDo
  parseToDo.forEach(insertToDo);
}


//todo 화면 출력
function insertToDo(todoObj){
  const li = document.createElement("li");
  li.id=todoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  //span 태그에 input value 삽입
  span.innerText=todoObj.text;
  console.log(span);

  //삭제버튼 추가
  button.innerText="❌";
  button.type = "button";
  //button.setAttribute("onclick","deleteToDoList()");
  button.addEventListener("click",deleteToDoList);
  
  //li 태그에 span, button 추가
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  console.log(toDoList);
}

//toDo 삭제
function deleteToDoList(event){
  const li = event.target.parentElement;
  li.remove();

  //.filter : .forEach와 같이 item에 하나씩 점근하며 item을 걸러준다 
  // boolean 값을 반환하고 true일때만 값은 반환
  todo = todo.filter((item) => item.id != li.id);
  saveTodo();
}
