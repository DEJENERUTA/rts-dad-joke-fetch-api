/* const jokes = document.querySelector("#new-jokes");
const clickForNewJokes = document.querySelector("#findNewJokes");

async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await jokeData.json();
  jokes.textContent = joke.joke;
}

getJock();
clickForNewJokes.addEventListener("click", getJock);
 */
