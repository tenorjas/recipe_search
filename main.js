let parent = document.querySelector("#search_results");

let url = "https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=";
const button = document.querySelector("button");

button.addEventListener("click", event => {
  console.log("Button has been clicked");

  let searchBox = document.getElementById("searchBox");

  const promise = fetch(url + searchBox.value).then(response => response.json()).then(recipes => {
    console.log(recipes);
    parent.textContent = "";
    recipes.results.forEach((item, index) => {
      let title = item.title;
      let anchor = item.href;
      let ingredients = item.ingredients;
      let img = item.thumbnail;

      let recipeBox = document.createElement("div");
      recipeBox.className = "recipe";

      let titleElement = document.createElement("h3");
      titleElement.textContent = title;
      let anchorElement = document.createElement("a");
      anchorElement.href = anchor;
      anchorElement.textContent = "Go to the recipe";
      let ingredientsHeader = document.createElement("p");
      ingredientsHeader.textContent = "Ingredients:";
      let ingredientsList = document.createElement("p");
      ingredientsList.textContent = ingredients;
      let image = document.createElement("img");
      if (img === "") {
        // set to placeholder
        image.src = "http://via.placeholder.com/200x200";
      } else {
        // use image in tag
        image.src = img;
      }

      recipeBox.appendChild(titleElement);
      recipeBox.appendChild(anchorElement);
      recipeBox.appendChild(ingredientsHeader);
      recipeBox.appendChild(ingredientsList);
      recipeBox.appendChild(image);

      parent.appendChild(recipeBox);
    });
  });
});
