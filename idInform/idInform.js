const idInformName = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const idInformName = document.getElementById("idInformName");
      idInformName.innerText = `${name.id} 님의 아이디는`;
    });
};
idInformName();

const informId = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const informId = document.getElementById("informId");
      informId.innerText = data.body;
    });
};
informId();
