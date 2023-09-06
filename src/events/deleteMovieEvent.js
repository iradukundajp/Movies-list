import deleteMovieHandler from '../handlers/deleteMovieHandler.js';
const deleteMovieEvent = () => {
    // Add a click event listener to the parent container for event delegation
    const moviesContainer = document.querySelector('.movies');
    moviesContainer.addEventListener('click', deleteMovieHandler);
};

export default deleteMovieEvent;
