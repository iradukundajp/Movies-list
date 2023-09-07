import deleteMovieHandler from '../handlers/deleteMovieHandler.js';
import editMovieHandler from '../handlers/editMovieHandler.js';
const createMovie = (movieData) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.id = movieData.id; // Set a unique ID for each movie

    const titleElement = document.createElement('h2');
    titleElement.textContent = movieData.title;

    const imgElement = document.createElement('img');
    imgElement.src = movieData.src;
    imgElement.alt = movieData.title;

    const id = movieData.id;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.dataset.movieId = movieData.id;
    editButton.dataset.movieTitle = movieData.title;
    editButton.dataset.movieSrc = movieData.src;
    editButton.addEventListener('click', () => {
        movieElement.classList.add('selected');
        editMovieHandler(id);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        deleteMovieHandler(id);
    });

    movieElement.appendChild(titleElement);
    movieElement.appendChild(imgElement);
    movieElement.appendChild(editButton);
    movieElement.appendChild(deleteButton);

    return movieElement;
};

export default createMovie;
