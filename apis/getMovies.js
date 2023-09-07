import data from '../src/data.js';

const getMovies = async () => {
    try {
        const response = await fetch(data.baseUrl);
        if (!response.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${response.status}`
            );
        }
        return await response.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getMovies;
