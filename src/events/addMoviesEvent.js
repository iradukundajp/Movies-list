import addMoviesHandler from '../handlers/addMoviesHandler.js';
import dom from '../dom.js';
const addMoviesEvent = () => {
    dom.btn.addEventListener('click', addMoviesHandler);
};

export default addMoviesEvent;
