import deleteMovie from '../../apis/deleteMovie.js';

const deleteMovieHandler = async (id) => {
   document.getElementById(String(id)).remove();

   await deleteMovie(id);

   
};

export default deleteMovieHandler;
