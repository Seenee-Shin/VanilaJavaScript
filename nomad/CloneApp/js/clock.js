const clock = document.querySelector("h2#clock");
//setInterbal : 지정한 매 순간마다 싷행
//setInterval(sayHello, 5000); sayHello를 5초간격으로 실행


//setTimeout : 지정한 시간이 지난 후 실행 
//setTimeout(sayHello, 5000)  sayHello함수를 5초 후 실행

//new Date() : 현재시간 표시 

function getDate(){
  const date = new Date()
  const hour = String (date.getHours()).padStart(2,"0");
  const min = String (date.getMinutes()).padStart(2,"0");
  const sec = String (date.getSeconds()).padStart(2,"0");
  //padStart, padEnd : 문자열의 길이를 맞춰줄때 사용 
  //Start일 경우 해당 문자열 앞에 문자 추가, End일 경우 해당 문자열 뒤 문자추가
  // String에만 사용가능 하기 때문에 숫자일 경우 String으로 형변환

  clock.innerText =`${hour}:${min}:${sec}`;

}
getDate(); // 처음에 기다리지 않고 불러주기
setInterval(getDate, 1000)