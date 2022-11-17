const myLetterBox = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const inputBox = document.getElementById("myLetterBox");
      inputBox.innerText = data.title;
    });
};
myLetterBox();

const answeredLetterBox = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const inputBox = document.getElementById("answeredLetterBox");
      inputBox.innerText = data.body;
    });
};
answeredLetterBox();

const dearWho_Check = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const dearWhoCheck = document.getElementById("dearWhoCheck");
      dearWhoCheck.innerText = name.id;
    });
};
dearWho_Check();

const fromWho_Check = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const fromWhoCheck = document.getElementById("fromWhoCheck");
      fromWhoCheck.innerText = name.id;
    });
};
fromWho_Check();
