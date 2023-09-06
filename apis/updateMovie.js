const updateMovie = async (movieId, updatedData) => {
    try {
        const response = await fetch(
            `http://localhost:5000/movies/${movieId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            }
        );

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export default updateMovie;
