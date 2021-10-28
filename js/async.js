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

/* const url = "https://swapi.dev/api/";
fetch(url).then((data) => console.logo(data));

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* const url = "https://swapi.dev/api/";
fetch(url)
  .catch((error) => console.log("BAD", error))
  .then((response) => console.log("GOOD", response)); */

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
