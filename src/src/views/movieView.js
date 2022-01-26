import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js';

const movieCardTemplate = ({
    _id,
    title,
    img,
}) => html `
    <section class="films">
        <div class="films-container">
            <li>
                <div class="photo">
                    <img src="${img}">
                </div>
                <div class="name">
                    <h3>${title}</h3>
                </div>
                <div class="details">
                    <a href="/movies/${_id}">
                        <button>Details</button>
                    </a>
                </div>
            </li>
        </div>
    </section>
`;

const moviesTemplate = (movies) => html `
    <ul class="movie-list">
        ${movies.map(x => movieCardTemplate(x))}
    </ul>
`;

export function moviePage(ctx) {
    movieService.getAll()
        .then(movies => {
            ctx.render(moviesTemplate(movies));
        });
}

export function myMoviesPage(ctx) {
    movieService.getMyMovies(ctx.userId)
        .then(movies => {
            ctx.render(moviesTemplate(movies));
        });
}