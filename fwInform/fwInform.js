const fwInformName = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const fwInformName = document.getElementById("fwInformName");
      fwInformName.innerText = `${name.id} 님의 비밀번호는`;
    });
};
fwInformName();

const informFw = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const informFw = document.getElementById("informFw");
      informFw.innerText = data.body;
    });
};
informFw();
