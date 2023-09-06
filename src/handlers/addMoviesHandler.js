import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';

const addMoviesHandler = () => {
    btn.addEventListener('click', async () => {
        try {
            // Fetch movies
            const movies = await addMovie('GET');
            if (movies) {
                // Handle movies data
                console.log('Fetched movies:', movies);
            } else {
                console.error('Failed to fetch movies');
            }

            // Add a new movie
            const newMovieData = {
                title: dom.inputTitle.value,
                src: dom.inputSrc.value
            };

            const addedMovie = await addMovie('POST', newMovieData);
            if (addedMovie) {
                // Handle the added movie data
                console.log('Added movie:', addedMovie);
            } else {
                console.error('Failed to add a new movie');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
};

export default addMoviesHandler;
