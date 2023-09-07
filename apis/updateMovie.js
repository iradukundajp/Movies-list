import dataUrl from '../src/data.js';

//const baseUrl = 'https://my-json-server.typicode.com/iradukundajp/Movies-list/movies';

const updateMovie = async (movieId, updatedData) => {
    try {
        const response = await fetch(`${dataUrl.baseUrl}/${movieId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export default updateMovie;
