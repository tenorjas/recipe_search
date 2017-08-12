let parent = document.querySelector("#search_results");

let url = "https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=";
const button = document.querySelector("button");

button.addEventListener("click", event => {
  console.log("Button has been clicked");

  let searchBox = document.getElementById("searchBox");

  const promise = fetch(url + searchBox.value).then(response => response.json()).then(recipe => {
    console.log(recipe);
  });
});
