import deleteMovie from '../../apis/deleteMovie.js';

const deleteMovieHandler = async (event) => {
    const target = event.target;

    // Check if the clicked element is a "Delete" button
    if (target.classList.contains('delete-button')) {
        // Extract movieId from the dataset
        const movieId = target.dataset.movieId;

        // Call the deleteMovie function to delete the movie from the server
        const deletedMovie = await deleteMovie(movieId);

        if (deletedMovie) {
            // If the deletion is successful, remove the movie's DOM element
            const movieElement = target.closest('.movie');
            if (movieElement) {
                movieElement.remove();
            }
        }
    }
};

export default deleteMovieHandler;
