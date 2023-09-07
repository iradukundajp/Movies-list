import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';
import createMovie from '../components/createMovie.js';

const addMoviesHandler = async () => {
    // Add a new movie
    const newMovieData = {
        title: dom.inputTitle.value,
        src: dom.inputSrc.value
    };

    const movieDom = createMovie(newMovieData);
    dom.movies.prepend(movieDom);
    await addMovie (newMovieData);
};

export default addMoviesHandler;
