const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string으로 이루어진 변수 선언 시 대문자 사용이 관습, 2번 이상 나오면 변수로 선언
const USERNAME_KEY = "username";

// 사실 addEventListener는 언제나 onLoginSubmit(프로그래머 정의)함수를 부를 때 인자 값을 넣어줌.
// 지금 당장 현재 실행되고 있는 상황을 인자 값으로 넘기는데, 그건 항상, 언제나 free로 넘겨줌
// 인자값 (event)으로 받을 공간만 주면 언제든 받아와 사용할 수 있음.
function onLoginSubmit(event){
    // 지금 일어나고 있는 일을 받아옴 -> event에는 submitevent가 담겨옴 ->
    // submit은 실행할 때마다 새로 고침되는 default 일이 있음 -> preventDefault로 해당 event의 기본 실행을 막음
    // 예를 들어 link의 click event는 다른 사이트로 이동하는 것이 기본 실행임
    // console.dir(event);

    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} !`; // === "Hello" + username, js의 변수를 html에 사용할 때
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // form 의 submit event
}

else{
    paintGreeting(savedUserName);
}
