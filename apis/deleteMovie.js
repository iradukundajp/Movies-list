const deleteMovie = async (movieId) => {
    try {
        const response = await fetch(
            `https://my-json-server.typicode.com/iradukundajp/Movies-list/movies/${movieId}`,
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
