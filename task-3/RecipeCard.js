import React from "react";

/* Task 3 - Below is a card component that displays a recipe. Change whatever you need to to make the component more reusable. */

function RecipeCard({ handleChangeRecipe }) {
  return (
    <div>
      <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fonejive.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fbanana-soup.jpg&f=1&nofb=1" />
      <h2>My Favourite Soup</h2>
      <h3>Benana</h3>
      <h4>30 November 2020</h4>
      <p>
        This is my favourite soup recipe to warm your peel on these cold winter
        days. Description of recipe...
      </p>
      <button onClick={handleChangeRecipe}>Get Benana Recipes</button>
    </div>
  );
}

export default RecipeCard;
