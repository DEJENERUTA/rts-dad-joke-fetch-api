fetch("https://icanhazdadjoke.com/j/<joke_id>")
  .then((response) => response.json())
  .then((response) => console.log(response));
