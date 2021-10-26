fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json()) //callback function
  .then((joke) => console.log(joke));
