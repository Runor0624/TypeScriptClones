// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username'); //username.innerText가 여기로감.
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/***
 * @typedef {object} Address // 이렇게 작성하면
 * @property {string} street
 * @property {string} city
 */

/** //이건 주석이 아닌 JSDoc 소스코드에 주석다는 용도로 사용하는 마크업언어, 타입스크립트와 유사한 기능으로 작동함.
 * @typedef {object} User // 아래에 사용한 타입에 대한 타입객체의 프로퍼티 정의
 * @property {string} name //문자열로 name를 받겠다는것
 * @property {string} email // 문자열로 이메일 받음
 * @property {Address} address //위에서 작성한 Address를 얘한테 사용가능해짐
 */

/**
 * @returns {Promise<User>}  //<>은 제네릭 이라는 부분이다. , fetchUser을 호출하면 프로미스에 User라는 타입이 들어감
 */ 
function fetchUser() {
  return axios.get(url); // 이부분을 사용함으로 인해서
}

fetchUser().then(function(response)  {
  // response.address // 이게 왜 되는가? 상단 프로퍼티에서 타입을 선언했기때문
  response.address.street //자동완성 형식으로 Address 내부 요소를 사용가능
}); // 타입스크립트의 장점 : 브라우저에서 보기전에 에러를 먼저 보여줘서 사전 방지가 가능

function startApp() {
  // axios
  //   .get(url)
  fetchUser() // 로 대체 가능함
    .then(function (response) {
      console.log(response); // 데이터 덩어리들 여기로 옴
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user); 
      username.innerText = user[0].name; // <- 첫 데이터의 name을 가져오게함 , index.html에 해당부분에 표시
      email.innerText = user[0].email; // <- 이메일을 가져옴
      // address.innerText = user[0].address; // [Object, object 출력] , 이러한부분이 타입스크립트를 사용하면 유용함
      address.innerText = user[0].address.street // url에서 가져오는 api에 address내부에 들어간 데이터중 하나를 꺼내옴
      // user가 가져오는 response.data를 보여줌
      // 배열 내부에 객체 10개가 들어감

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
