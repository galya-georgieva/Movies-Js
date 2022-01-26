import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js';

const priveButtons = (_id) => html `
    <div class="prive-buttons">
        <a class="btn btn-success" href="/movies/${_id}/edit">Edit</a>
        <a class="btn btn-danger" href="/movies/${_id}/delete">Delete</a>
    </div>
`;

const publicButtons = (_id) => html `
    <div class="public-buttons">
        <button class="btn btn-success">Up</button>
        <button class="btn btn-danger">Down</button>
    </div>
`;

const movieDetailsTemplate = ({
    _id,
    isOwn,
    title,
    description,
    img,
}) => html `
   <section class="film">
    <div class="film-container">
        <div class="photo">
            <img src="${img}">
        </div>
           <div class="name">
               <h2>${title}</h3>
           </div>
           <div class="description-container">
             <p class="description">${description}</p>
           </div>
           
           <div>
               ${isOwn
                ? priveButtons(_id)
                : publicButtons(_id)
            }
        </div>
    </div>
</div>
    
   </section>
`;

export function movieDetailsPage(ctx) {
    movieService.getOne(ctx.params.movieId)
        .then(movieData => {
            let templateData = {
                isOwn: movieData._ownerId == ctx.userId,
                ...movieData,
            };

            ctx.render(movieDetailsTemplate(templateData));
        })
}