import { html } from '../../../node_modules/lit-html/lit-html.js';
import { ifDefined } from '../../../node_modules/lit-html/directives/if-defined.js';

export const movieFormTemplate = (onSubmit, movie) => html `
<section class="add-movie">
    <form @submit=${onSubmit} id="add-form">
        <div class="container">
                <h1>Add Movie</h1>
                <div class="title-container">
                    <label for="movie-title">Title</label>
                    <input name="title" type="text" id="movie-title">
                </div>
    
                <div class="url-container">
                    <label for="movie-image-url">Image Url</label>
                    <input id="movie-image-url" type="text" name="imageUrl">
                </div>
    
            <div class="movie-description-container">
                <div>
                    <label for="movie-description">Description</label>
                </div>
                    <textarea id="movie-description" name="description" rows="10"></textarea>
            </div>
            <div class="mb-3">
                <input class="createbtn" type="submit" value="${movie?.title ? 'Update' : 'Create' }"/>
            </div>
        </div>
        </form>
</section>
`;