import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeSearchPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        description: '',
    });
    const [editingRecipe, setEditingRecipe] = useState(null);

    // Fetch all recipes
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:5003/api/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle search form submit
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use the /search endpoint to filter recipes by the search term
            const response = await axios.get('http://localhost:5003/api/search', {
                params: { search: searchQuery }, // Pass search query to the backend
            });
            setRecipes(response.data); // Update recipes based on the search
        } catch (error) {
            console.error('Error searching recipes:', error);
        }
    };

    // Handle form input changes for adding/editing recipe
    const handleRecipeInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe((prev) => ({ ...prev, [name]: value }));
    };

    // Add or update recipe
    const handleRecipeSubmit = async (e) => {
        e.preventDefault();
        const endpoint = editingRecipe
            ? `http://localhost:5003/api/recipes/${editingRecipe.id}`
            : 'http://localhost:5003/api/recipes';
        const method = editingRecipe ? 'PUT' : 'POST';

        try {
            const response = await axios({
                method,
                url: endpoint,
                data: newRecipe,
            });

            if (response.status === 200 || response.status === 201) {
                alert(editingRecipe ? 'Recipe updated successfully!' : 'Recipe added successfully!');
                setNewRecipe({ name: '', description: '' });
                setEditingRecipe(null);
                fetchRecipes(); // Re-fetch recipes after add/update
            } else {
                alert('Error saving recipe.');
            }
        } catch (error) {
            console.error('Error saving recipe:', error);
        }
    };

    // Edit recipe
    const editRecipe = (recipe) => {
        setEditingRecipe(recipe);
        setNewRecipe(recipe);
    };

    // Delete recipe
    const deleteRecipe = async (recipeId) => {
        try {
            const response = await axios.delete(`http://localhost:5003/api/recipes/${recipeId}`);
            if (response.status === 200) {
                alert('Recipe deleted successfully!');
                fetchRecipes();
            } else {
                alert('Error deleting recipe.');
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    useEffect(() => {
        fetchRecipes(); // Fetch all recipes on initial load
    }, []);

    return (
        <div className="container">
            <h1>Recipe Search & Management</h1>

            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            <form onSubmit={handleRecipeSubmit}>
                <h2>{editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newRecipe.name}
                        onChange={handleRecipeInputChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={newRecipe.description}
                        onChange={handleRecipeInputChange}
                        required
                    />
                </label>
                <button type="submit">{editingRecipe ? 'Update Recipe' : 'Add Recipe'}</button>
            </form>

            <h2>All Recipes</h2>
            <ul>
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <h3>{recipe.name}</h3>
                            <p>{recipe.description}</p>
                            <button onClick={() => editRecipe(recipe)}>Edit</button>
                            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </ul>
        </div>
    );
};

export default RecipeSearchPage;
