import { useContext } from "react";
import { useParams } from "react-router";
import { RecipesContext } from "../../contexts/RecipesContext";

export function RecipeDetails() {
    const { recipeId } = useParams();
    const { recipes } = useContext(RecipesContext);

    const recipe = recipes.find(({ _id }) => recipeId === _id);
    return (
        <div className="container">
            <h1>{recipe.name}</h1>
            <div>
                <img style={{ width: "250px" }} src={recipe.imageURL} />
            </div>
            <div>
                <p>Cuisine: {recipe.cuisineType}</p>
                <p>
                    Ingredients:{" "}
                    {recipe.ingredients.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))}
                </p>
                <p>
                    Instructions:{" "}
                    <ol>
                        {recipe.instructions.map((instruction) => (
                            <li>{instruction}</li>
                        ))}
                    </ol>
                </p>
            </div>
        </div>
    );
}
