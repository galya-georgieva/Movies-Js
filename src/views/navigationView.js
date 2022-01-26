import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const showUserInfo = (email) => html `
    <span>Welcome, ${email}</span>
`;

const guestButtons = () => html `
   <li><a class="login-page" href="/login">Login</a></li>  
   <li><a class="register-page" href="/register">Register</a></li>  
`;

const privateButtons = (onLogout) => html `
    <li><a class="movies-page" href="/my-movies">My Movies</a></li>  
    <li><a class="add-movies-page" href="/movies/add">Add Movie</a></li>  
    <li><a class="logout-page" @click=${onLogout} href="#">Logout</a></li>  
`;

const navigationTemplate = (isAuthenticated, email, onLogout) => html `
        <nav>
            <div class="navbar">
                <ul>
                 <li><a href="/"><i class="fas fa-film"></i></a></li>   
                 <li><a class="nav-link active" aria-current="page" href="/">Home</a></li>  
                 <li><a class="nav-link" href="/movies">Movies</a></li>  
                     ${isAuthenticated 
                         ? privateButtons(onLogout)
                         : guestButtons()
                     }
                     ${isAuthenticated && showUserInfo(email)}
                </ul>
            </div>
        </nav>
`;

export function renderNavigation(ctx) {
    const onLogout = (e) => {
        e.preventDefault();

        authService.logout()
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    return navigationTemplate(ctx.isAuthenticated, ctx.email, onLogout);
}