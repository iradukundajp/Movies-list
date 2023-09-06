import dom from '../dom.js';
import editMovieHandler from '../handlers/editMovieHandler.js';

const editMovieEvent = () => {
    dom.movies.addEventListener('click', editMovieHandler);
};

export default editMovieEvent;
