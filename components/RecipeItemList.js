import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeItem from './TastemadeGang';

const RecipeItemList = ({ count }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:5003/api/recipes/random/${count}`);
        setRecipes(response.data); // Update the recipes state
      } catch (error) {
        setError('Error fetching recipes'); // Set error state
        console.error('Error fetching recipes', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchRecipes(); // Call the fetch function on mount or count change
  }, [count]); // Re-fetch whenever 'count' changes

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="row">
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <RecipeItem
            key={recipe.id} // Unique key based on 'id'
            image={recipe.image} // Recipe image (ensure this exists in your backend data)
            name={recipe.name} // Recipe name
          />
        ))
      ) : (
        <div className="text-center">No recipes found</div>
      )}
    </div>
  );
};

export default RecipeItemList;
