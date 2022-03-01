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
  
  //fetch로 url 정보 요청 
  //.then: fetch요청이 끝난후 실행되는 함수.
  fetch(url).then(re);
  
}

function onGeoError(){

  alert("Can't find you") 
}
