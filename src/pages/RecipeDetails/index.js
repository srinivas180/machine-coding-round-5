import { useContext } from "react";
import { useParams } from "react-router";
import { RecipesContext } from "../../contexts/RecipesContext";

export function RecipeDetails() {
    const { recipeId } = useParams();
    const { recipes } = useContext(RecipesContext);

    const recipe = recipes.find(({ _id }) => recipeId === _id);
    return <h1>{recipe.name}</h1>;
}
