async function myFunction() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headerrs: {
      Accept: "application/json",
    },
  });
}
