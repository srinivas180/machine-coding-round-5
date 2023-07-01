import { Link } from "react-router-dom";

export function Recipe({ recipe }) {
    return (
        <div className="recipes__item">
            <img className="recipe__image" src={recipe.imageURL} />
            <div>
                <p className="recipe__name">{recipe.name}</p>
                <div className="recipe__cuisine">
                    <span>Cuisine Type: </span>
                    <span>{recipe.cuisineType}</span>
                </div>
                <div className="recipe__ingredients">
                    <span>Ingredients: </span>
                    <Link to={`/recipe/${recipe._id}`}>See Recipe</Link>
                </div>
                <div className="recipe__instructions">
                    <span>Instructions: </span>
                    <Link to={`/recipe/${recipe._id}`}>See Recipe</Link>
                </div>
            </div>
        </div>
    );
}
