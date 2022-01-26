import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const registerTemplate = (onSubmit) => html `
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Register</h1>
            <div class="register-username">
                <label for="username">Username</label>
                <input placeholder="Enter Username" name="username" type="text">
            </div>
            <div class="register-email">
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
            </div>
            <div class="register-password">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="********" name="password">
            </div>
            <div class="register-repeat-password">
                <!-- <label for="repeatPassword">Repeat Password</label> -->
                <div> <p>Repeat Password</p></div>
                <input id="repeatPassword" type="password" placeholder="********" name="repeatPassword">
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login"> Sign up</a></p>
            </div>
        </div>
    </form>
</section>
`;

export function registerPage(ctx) {
    const onRegisterSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let username = formData.get('username').trim();
        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
        let repeatPass = formData.get('repeatPassword').trim();

        if (!username || !email || !password || !repeatPass) {
            return alert('All fields are required');
        }
        if (password != repeatPass) {
            return alert('Passwords don\'t match');
        }

        authService.register(username, email, password)
            .then(() => {
                ctx.page.redirect('/');
            });
    }

    ctx.render(registerTemplate(onRegisterSubmit));
}