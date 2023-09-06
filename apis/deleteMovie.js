const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(
            `http://localhost:5000/movies/${movieId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(
                `Failed to delete movie with status: ${response.status}`
            );
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export default deleteMovie;
