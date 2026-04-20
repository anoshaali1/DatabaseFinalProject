import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [comments, setComments] = useState({});

    useEffect(() => {
        fetch('http://localhost:5003/api/recipes')
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error('Error fetching recipes:', err));
    }, []);

    useEffect(() => {
        if (recipes.length > 0) {
            recipes.forEach((recipe) => {
                fetch(`http://localhost:5003/api/comments/${recipe.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setComments((prev) => ({
                            ...prev,
                            [recipe.id]: data,
                        }));
                    })
                    .catch((err) => console.error('Error fetching comments:', err));
            });
        }
    }, [recipes]);

    const addComment = async (recipeId, comment) => {
        if (!comment.trim()) {
            alert('Comment cannot be empty.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5003/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recipe_id: recipeId, comment }),
            });

            if (!response.ok) {
                const error = await response.json();
                alert(`Failed to add comment: ${error.message}`);
                return;
            }

            const newComment = await response.json();
            setComments((prev) => ({
                ...prev,
                [recipeId]: [...(prev[recipeId] || []), newComment],
            }));
            alert('Comment added successfully!');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const removeComment = async (commentId, recipeId) => {
        try {
            const response = await fetch(`http://localhost:5003/api/comments/${commentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const error = await response.json();
                alert(`Failed to remove comment: ${error.message}`);
                return;
            }

            setComments((prev) => ({
                ...prev,
                [recipeId]: prev[recipeId].filter((comment) => comment.id !== commentId),
            }));
            alert('Comment removed successfully!');
        } catch (error) {
            console.error('Error removing comment:', error);
        }
    };

    const addToFavorites = async (recipeId) => {
        try {
            const response = await fetch('http://localhost:5003/api/favorites', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: recipeId }),
            });

            if (response.ok) {
                alert('Recipe added to favorites successfully!');
            } else {
                const error = await response.json();
                alert(`Failed to add recipe to favorites: ${error.message}`);
            }
        } catch (error) {
            console.error('Error adding recipe to favorites:', error);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '30px' }}>
        {/* Images and Heading Section */}
        <div className="row mb-4" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Image Section */}
            <div className="col-md-6" style={{ flex: 1 }}>
                <img
                    src="https://media.istockphoto.com/id/1347995200/photo/vintage-wooden-recipe-box-trunk-with-natural-recipe-cards-in-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=N2n0caokbBvIS5zl3TunqyaS0kIjQ1kFVfSSElQxEOA="
                    alt="Couple Cooking"
                    className="img-fluid"
                    style={{
                        width: '100%', // Adjust the size as necessary
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
    
            {/* Text Section */}
            <div className="col-md-6" style={{ flex: 1, textAlign: 'right' }}>
                <div
                    style={{
                        color: 'black',
                        fontSize: '30px',
                        fontWeight: 'bold',
                    }}
                >
                    <h1>Recipe Page</h1>
                    {/* New Link for joining the Tastemade gang */}
                    <div style={{ marginBottom: '10px' }}>
                            <p>
                                Want to join the Tastemade gang? Send your recipes to{' '}
                                <a
                                    href="mailto:ammasajid@gmail.com"
                                    style={{
                                        color: '#FF6F61',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ammasajid@gmail.com
                                </a>{' '}
                                and get featured in our next week's user list!
                            </p>
                        </div>

                    <Link
                        to="/favourites"
                        className="btn"
                        style={{
                            backgroundColor: '#FF6F61',
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        Go to Favorites
                    </Link>
                </div>
            </div>
        </div>
 

            <h2 className="mb-4 text-center" style={{ color: 'black', fontSize: '20px' }}>
    List Of Our Recipes!
</h2>


            {/* Recipes Section */}
            <div className="row">
    {recipes.length > 0 ? (
        recipes.map((recipe) => (
            <div
                key={recipe.id}
                className="col-md-12 mb-4"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div
                    className="card"
                    style={{
                        borderColor: '#FF6F61',
                        width: '500px', // Set a fixed width for the card
                        padding: '15px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        margin: '0 auto', // Center the card horizontally
                    }}
                >
                    <h3 className="card-title" style={{ color: '#FF6F61' }}>
                        {recipe.name}
                    </h3>
                    <p><strong>Ingredients:</strong></p>
                    <ol>
                        {recipe.ingredients.split(',').map((ingredient, index) => (
                            <li key={index}>{ingredient.trim()}</li>
                        ))}
                    </ol>
                    <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    <button
                        onClick={() => addToFavorites(recipe.id)}
                        className="btn mb-3"
                        style={{ backgroundColor: 'black', color: '#FF6F61' }}
                    >
                        Add to Favorites
                    </button>

                    <textarea
                        placeholder="Write a comment..."
                        className="form-control mb-2"
                        id={`comment-${recipe.id}`}
                    />
                    <button
                        onClick={() => {
                            const commentText = document.getElementById(`comment-${recipe.id}`).value.trim();
                            if (commentText) {
                                addComment(recipe.id, commentText);
                                document.getElementById(`comment-${recipe.id}`).value = '';
                            }
                        }}
                        className="btn mb-2"
                        style={{ backgroundColor: '#FF6F61', color: 'black' }}
                    >
                        Add Comment
                    </button>

                    <div>
                        <h4 className="d-inline-block" style={{ fontSize: '1.2rem', color: '#FF6F61' }}>
                            Comments
                        </h4>
                        <ul className="list-group mt-3">
                            {comments[recipe.id]?.length > 0 ? (
                                comments[recipe.id].map((comment) => (
                                    <li key={comment.id} className="list-group-item">
                                        {comment.comment}
                                        <p className="text-muted" style={{ fontSize: '0.8em' }}>
                                            {new Date(comment.created_at).toLocaleString()}
                                        </p>
                                        <button
                                            onClick={() => removeComment(comment.id, recipe.id)}
                                            className="btn btn-sm float-right"
                                            style={{ backgroundColor: '#FF6F61', color: 'black' }}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p>No comments yet.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <p>No recipes available.</p>
    )}
</div>

            {/* Additional Section with Images at the End of Page */}
            <div className="mt-5">
                <h2 className="text-center" style={{ color: 'black' }}>Explore More</h2>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                   
                    <div className="col-md-6 mb-4">
                        <img
                            src="https://media.istockphoto.com/id/2013327687/photo/baking-background-with-cooking-book-and-ingredients.jpg?s=1024x1024&w=is&k=20&c=4ZpcKc5UYDydx6Mafsn4rHro0dXtBRn6DGrZi6qxc2c="
                            alt="Baking Ingredients"
                            className="img-fluid"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-6 mb-4">
                        <img
                            src="https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=612x612&w=0&k=20&c=f7BnJRCqLKaj_DEQB1SB71_eRT8y1XRP52dDyYRSxuE="
                            alt="Vegetable Salad"
                            className="img-fluid"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
