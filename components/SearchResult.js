import React, { useState, useEffect } from "react";
import axios from "axios";

// Component to display individual recipe item
const RecipeItem = ({ name, ingredients, instructions }) => (
  <div className="col-md-4">
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          <strong>Ingredients:</strong> {ingredients}
        </p>
        <p>
          <strong>Instructions:</strong> {instructions}
        </p>
      </div>
    </div>
  </div>
);

const SearchResult = () => {
  const [search, setSearch] = useState(""); // Search term entered by user
  const [recipes, setRecipes] = useState([]); // Array of fetched recipes
  const [count, setCount] = useState(0); // Count of filtered recipes
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Function to fetch recipes based on the search term
  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setError(""); // Reset error state before fetching
    try {
      const response = await axios.get("http://localhost:5003/api/search", {
        params: { search: searchTerm },
      });

      console.log("API Response:", response.data); // Debug API response

      if (response.data && response.data.length > 0) {
        setRecipes(response.data); // Set fetched recipes
        setCount(response.data.length); // Set recipe count
      } else {
        setRecipes([]); // Clear previous recipes
        setCount(0); // Reset recipe count
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
      setError("Failed to fetch recipes. Please try again later."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch recipes when the search term changes
  useEffect(() => {
    if (search.trim() === "") {
      setRecipes([]); // Clear recipes if search is empty
      setCount(0);
    } else {
      fetchRecipes(search); // Fetch recipes if search term is provided
    }
  }, [search]);

  return (
    <div className="container">
      <section className="tstbite-components my-4 my-md-5">
        <h5 className="py-3 mb-0">Search Results</h5>

        {/* Search Box */}
        <div className="input-group search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Update search term
            type="text"
            name="Search"
            placeholder="Search for recipes..."
            className="form-control bg-white"
            id="Search2"
          />
          <span className="mt-2 ml-2">
            {count} Recipe{count !== 1 ? "s" : ""}
          </span>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center py-3">
            <p className="text-danger">{error}</p>
          </div>
        )}

        {/* Loading Indicator */}
        {loading ? (
          <div className="text-center py-5">
            <h5>Loading...</h5>
          </div>
        ) : recipes.length > 0 ? (
          // Recipe Cards
          <div className="row">
            {recipes.map((recipe) => (
              <RecipeItem
                key={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            ))}
          </div>
        ) : (
          // No Recipes Found
          <div className="text-center py-5">
            <h5>No recipes found</h5>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchResult;
