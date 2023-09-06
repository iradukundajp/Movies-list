import getMovies from '../../apis/getMovies.js';
import dom from '../dom.js';
import createMovie from '../components/createMovie.js';

const loadHandler = async () => {
    const movies = await getMovies();
    if (movies) {
        movies.forEach((movieData) => {
            const movieDom = createMovie(movieData);
            dom.movies.appendChild(movieDom);
        });
    }
};

export default loadHandler;
