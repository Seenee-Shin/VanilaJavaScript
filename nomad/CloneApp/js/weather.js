//현재 사용자 위치 좌표 
//navigator.geolocation.getCurrentPosition(성공시 실행 , 실패시 실행)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//weather API 사용 
// API Key 
const API_KEY = '9492207d54270c9f4cd6adc4314e0112';




function onGeoOk(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log("location :" + lat,lon)
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  
  //fetch로 서버에 url 정보 요청 
  fetch(url)
    //.then: fetch요청이 끝난후 실행되는 함수.
    // response를 json형태롤 변경
    .then(response => response.json())

    //.then을 중첩사용 (위 함수가 끝난 뒤 아래함수 실행)
    .then(data => {
      console.log(data.name, data.weather[0].main)
      
      //날씨정보 출력
      const city = document.querySelector("#weather  span:nth-of-type(1)")
      const temp = document.querySelector("#weather  span:nth-of-type(2)")
      const weather = document.querySelector("#weather span:nth-of-type(3)")
      
      city.innerText = data.name;
      temp.innerText = Math.floor(data.main.temp);
      weather.innerText = data.weather[0].main;
    })
  
}

function onGeoError(){
  alert("Can't find you") 
}
