const jokes = document.querySelector("#new-jokes");
const clickForNewJokes = document.querySelector("#findNewJokes");

const myFunction = async () => {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await response.json();
  return data;
};

function getJock() {
  myFunction().then((data) => {
    jokes.textContent = data.joke;
  });
}
clickForNewJokes.addEventListener("click", getJock);
getJock();
