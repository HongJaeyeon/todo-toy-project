function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "bdc7c65e76aba21cba5f57312fee5fcf";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const cityName = document.querySelector("#weather span:last-child");
    const weather = document.querySelector("#weather span:first-child");

    // fetch는 js가 url로 연결하는 함수.
    // server가 준비되는데 시간이 걸리므로 '준비되면'이라는 then 함수 사용. 
    // 기다려서 얻어온 값을 인자인 response로 받고 response.json에 접근
    // 접근하고 나면 (then) data.name등 실제 정보를 쓸 수 있음
    fetch(url).then(response => response.json()).then(data => {
                cityName.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("I can't get your current position");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);