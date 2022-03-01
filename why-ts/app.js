// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username'); //username.innerText가 여기로감.
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response); // 데이터 덩어리들 여기로 옴
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user); 
      username.innerText = user[0].name; // <- 첫 데이터의 name을 가져오게함 , index.html에 해당부분에 표시
      email.innerText = user[0].email; // <- 이메일을 가져옴
      // address.innerText = user[0].address; // [Object, object 출력] , 이러한부분이 타입스크립트를 사용하면 유용함
      address.innerText = user[0].address.street
      // user가 가져오는 response.data를 보여줌
      // 배열 내부에 객체 10개가 들어감

    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
