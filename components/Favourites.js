import React, { useState, useEffect } from 'react';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [favoritesCount, setFavoritesCount] = useState(0);

    // Fetch favorite recipes and total count when the component mounts
    useEffect(() => {
        fetch(`http://localhost:5003/api/favorites`)
            .then((res) => res.json())
            .then((data) => {
                setFavorites(data);
                setFavoritesCount(data.length);
            })
            .catch((err) => console.error('Error fetching favorites:', err));
    }, []);

    // Remove recipe from favorites
    const removeFromFavorites = async (recipeId) => {
        try {
            const response = await fetch(`http://localhost:5003/api/favorites/${recipeId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setFavorites((prevFavorites) =>
                    prevFavorites.filter((recipe) => recipe.id !== recipeId)
                );
                setFavoritesCount((prevCount) => prevCount - 1);
                alert('Recipe removed from favorites');
            } else {
                const error = await response.json();
                alert(error.message);
            }
        } catch (error) {
            console.error('Error removing recipe from favorites:', error);
        }
    };

    return (
        <div className="container">
            <section className="tstbite-components my-4 my-md-5 desserts-box">
                <div className="row align-items-center pt-0 pt-md-5">
                    <div className="col-lg-9 col-8">
                        <h5 className="py-3 mb-0">
                            <img src="assets/images/icons/badge-heart.svg" alt="Icon" className="mr-2" />
                            Favorites
                        </h5>
                    </div>
                    <div className="col-lg-3 col-4">
                        <div className="sort-filter pb-0">
                            <select className="form-control">
                                <option disabled selected>
                                    Sort by
                                </option>
                                <option value="name">Name</option>
                                <option value="date">Date Added</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-wrap pt-3 pb-4 mb-2 tstbite-svg">
                    <div className="mr-2 mr-md-3">
                        <small className="font-size-16">({favoritesCount} Recipes)</small>
                    </div>
                </div>
                <div className="row">
                    {favorites.length > 0 ? (
                        favorites.map((recipe) => (
                            <div key={recipe.id} className="col-lg-3 col-md-4 col-6">
                                <figure className="my-3 my-md-4 tstbite-card">
                                    {/* Removed Link and kept only the button */}
                                    <h5>{recipe.name}</h5>

                                    {/* Separate button section for Remove from Favorites */}
                                    <button
                                        onClick={() => removeFromFavorites(recipe.id)}
                                        className="btn btn-danger remove-button"
                                    >
                                        Remove from Favorites
                                    </button>
                                </figure>
                            </div>
                        ))
                    ) : (
                        <p>No favorite recipes found.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FavoritesPage;
