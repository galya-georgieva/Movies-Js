import { html } from '../../node_modules/lit-html/lit-html.js';

let homeTemplate = () => html `
  <section class="home-container ">
        <img src="./photo/cinema-ga7b1731f6_1920.jpg" alt="">
        <p class="text">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
<div class="buttons">
    <a class="home-btn" href="/login"><button>Login</button></a> 
    <a class="home-btn" href="/register"><button>Register</button></a>
</div>
    </section>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}