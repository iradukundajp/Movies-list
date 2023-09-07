import updateMovie from '../../apis/updateMovie.js';

const editMovieHandler = async (event) => {
    if (event.target.classList.contains('edit-button')) {
        // Get the movie ID, current title, and current source URL from the dataset properties of the button
        const movieId = event.target.dataset.movieId;
        const currentTitle = event.target.dataset.movieTitle;
        const currentSrc = event.target.dataset.movieSrc;

        // Prompt the user to enter a new title
        const newTitle = prompt('Enter new movie title:', currentTitle);
        // Prompt the user to enter a new source URL, with the current source URL as a placeholder
        const newSrc = prompt('Enter new movie source URL:', currentSrc);

        // Check if the user didn't cancel both prompts
        if (newTitle !== null && newSrc !== null) {
            // Create an object with the updated movie data
            const updatedData = { title: newTitle, src: newSrc };
            const movieDom = document.querySelector('.selected');
            movieDom.querySelector('h2').innerText = updatedData.title;
            movieDom.querySelector('img').src = updatedData.src;
            movieDom.querySelector('img').alt = updatedData.title;

            // Call the updateMovie function to update the movie on the server
            const updatedMovie = await updateMovie(movieId, updatedData);

            if (updatedMovie) {
                // Show a success message if the update was successful
                alert('Movie updated successfully!');
            } else {
                // Show an error message if the update failed
                alert('Failed to update the movie.');
            }
        }
    }
};

export default editMovieHandler;
