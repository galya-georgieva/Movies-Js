import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const deleteMovieTemplate = (onClick, movie) => html `
<div class="container-message">
    <div class="message" role="alert">
        Are you sure you want to delete movie ${movie.title} ?
    </div>
    
    <div>
        <a class="cancel-btn" href="/movies/${movie._id}">Cancel</a>
        <button class="delete-btn" @click=${onClick}>Delete</button>
    </div>
</div>
`;

export function deleteMoviePage(ctx) {
    const onMovieDelete = () => {
        movieService.deleteMovie(ctx.params.movieId)
            .then(res => {
                console.log(res);
                ctx.page.redirect('/movies');
            });
    }

    movieService.getOne(ctx.params.movieId)
        .then(movie => {
            ctx.render(deleteMovieTemplate(onMovieDelete, movie))
        })
}