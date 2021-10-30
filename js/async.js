const jokes = document.querySelector("#new-jokes");
const clickForNewJokes = document.querySelector("#findNewJokes");
const jokeElement = document.querySelector("#jokelist");
const listOfJocke = [];
// fetch api with axios
const myFunction = async () => {
  const config = {
    method: "get",
    url: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  };
  let response = await axios(config);
  return response;
};

function getJock() {
  myFunction().then((data) => {
    data = data.data;
    jokes.textContent = data.joke;
  });
}
for (let i = 0; i < 10; i++) {
  myFunction().then((data) => {
    listOfJocke.push(data.data.joke);
  });
}
console.log(joke);
listOfJocke.forEach((joke) => {
  /* jokeElement.innerHTML += `<li> ${joke}</li>`; */
  // here I am tryin get 10 jokes from array but it didn't work
});
clickForNewJokes.addEventListener("click", getJock);
getJock();

//swipe js
document.querySelector("ul").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  const btn = e.target.closest("button");
  if (li && li.scrollLeft === 0) {
    li.scrollBy({
      left: 1,
      behavior: "smooth",
    });
  } else if (!btn && li) {
    li.scrollBy({
      left: -1,
      behavior: "smooth",
    });
  } else if (btn && li) {
    li.remove();
  }
});
