const jokes = document.querySelector("#new-jokes");
const clickForNewJokes = document.querySelector("#findNewJokes");
const listOfJocke = [];
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
    console.log(data);
    data = data.data;
    jokes.textContent = data.joke;
  });
}
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
