import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const loginTemplate = (onSubmit) => html `
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <div class="login-email">
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
            </div>
            <div class="login-password">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
            </div>
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register"> Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function loginPage(ctx) {
    const onLoginSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(loginTemplate(onLoginSubmit));
}