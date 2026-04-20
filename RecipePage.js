import React, { useState, useEffect } from "react";
import "./RecipePage.css"; // Import the CSS file

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]); // Store all recipes
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });
  const [view, setView] = useState("all"); // Default view shows all recipes
  const [editingRecipe, setEditingRecipe] = useState(null); // Track the recipe being edited

  // Fetch recipes based on the selected view (All or Filtered)
  const fetchRecipes = async () => {
    try {
      const endpoint =
        view === "all"
          ? "http://localhost:5003/api/recipes"
          : `http://localhost:5003/api/recipes?status=${view}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update recipe
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = editingRecipe
      ? `http://localhost:5003/api/recipes/${editingRecipe.id}`
      : "http://localhost:5003/api/recipes";
    const method = editingRecipe ? "PUT" : "POST";

    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        alert(
          editingRecipe
            ? "Recipe updated successfully!"
            : "Recipe added successfully!"
        );
        setNewRecipe({ name: "", ingredients: "", instructions: "" });
        setEditingRecipe(null);
        fetchRecipes();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Failed to add/update recipe: " + errorData.message);
      }
    } catch (error) {
      console.error("Error adding/updating recipe:", error);
      alert("Failed to connect to the server.");
    }
  };

  // Edit recipe (fill the form with the recipe's data)
  const editRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setNewRecipe({
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    });
  };

  // Delete recipe
  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `http://localhost:5003/api/recipes/${recipeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Recipe deleted successfully!");
        fetchRecipes();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Failed to delete recipe: " + errorData.message);
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to connect to the server.");
    }
  };

  // Use effect to fetch recipes on load and when the view changes
  useEffect(() => {
    fetchRecipes();
  }, [view]);

  return (
    <div className="container">
      <h1>Recipe Management</h1>

      {/* Form for adding or editing a recipe */}
      <div className="recipe-form-container">
      <div className="recipe-image-side" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  {/* Image 1 */}
  <img
    src="https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Recipe Image 1"
    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
  />
  {/* Image 2 */}
  <img
    src="https://media.istockphoto.com/id/1097078866/vector/culinary-recipe-card-with-cook-cap-and-apron.jpg?s=612x612&w=0&k=20&c=OwHlE6sxpIzU0rA3mZPA6wRc1wKmYg75Xipv7iLlHFI="
    alt="Recipe Image 2"
    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
  />
  {/* Image 3 */}
  <img
    src="https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=0&k=20&c=NK_z9zwAsRZZLeFWgcO-b4gsHnYg4kVFdvK6IYDOMXY="
    alt="Recipe Image 3"
    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
  />
</div>

        <form onSubmit={handleSubmit}>
          <h2>{editingRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
          <div className="row">
            <label>
              Title:
              <input
                type="text"
                name="name"
                value={newRecipe.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="row">
            <label>
              Ingredients:
              <textarea
                name="ingredients"
                value={newRecipe.ingredients}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="row">
            <label>
              Instructions:
              <textarea
                name="instructions"
                value={newRecipe.instructions}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">
            {editingRecipe ? "Update Recipe" : "Add Recipe"}
          </button>
        </form>
      </div>

      {/* Toggle views for All, Active, or Inactive recipes */}
      <div className="toggle-buttons">
        <button onClick={() => setView("all")}>All Recipes</button>
        {/* Add buttons for Active/Inactive recipes if needed */}
      </div>

      {/* Display recipes based on selected view */}
<h2>{view === "all" ? "All Recipes" : "Filtered Recipes"}</h2>
{/* Display recipes based on selected view */}
<h2>{view === "all" ? "All Recipes" : "Filtered Recipes"}</h2>
<div className="recipe-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  <ol> {/* Use ordered list for numbered items */}
    {recipes.map((recipe, index) => (
      <li key={recipe.id} style={{ listStyleType: 'none', marginBottom: '20px' }}> {/* Remove default list style */}
        <div className="recipe-header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span className="recipe-number" style={{ fontSize: '1.5em', fontWeight: 'bold', marginRight: '10px' }}>
            {index + 1}
          </span>
          <h3 style={{ display: 'inline', marginLeft: '10px', textAlign: 'center' }}>
            {recipe.name}
          </h3> {/* Inline recipe name */}
        </div>
        <p style={{ textAlign: 'center' }}>
          <strong>Ingredients:</strong>
        </p>
        <ol style={{ textAlign: 'center' }}>
          {recipe.ingredients
            .split(/[,;\n]+/) // Split by commas, semicolons, or newlines
            .map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li> // Render each ingredient
            ))}
        </ol>
        <p style={{ textAlign: 'center' }}>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => editRecipe(recipe)}>Edit</button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ol>
</div>


<style>
  {`
    .recipe-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px; /* Space between number and recipe content */
    }

    .recipe-number {
      font-size: 1.5em;
      font-weight: bold;
      margin-right: 10px; /* Space between number and recipe name */
    }
  `}
</style>

    </div>
  );
};

export default RecipePage;
