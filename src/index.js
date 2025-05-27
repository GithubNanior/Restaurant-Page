import "./styles.css";

const container = document.querySelector("main");

showHome();

document.querySelector("#btn-home").addEventListener("click", (event) => {
    showHome();
});

document.querySelector("#btn-menu").addEventListener("click", (event) => {
    showMenu();
});

document.querySelector("#btn-about").addEventListener("click", (event) => {
    showAbout();
});

function showHome()
{
    container.innerHTML = `
<h1>Attack of the Pizza Tower</h1>
<hr>
<br>
<p>
    Making the spiciest pizza in town since 1984
</p>
    `;
}

function showMenu()
{
    container.innerHTML = `
<h1>Menu</h1>
<hr>
<br>
<h2>Pure chilli</h2>
<p>
    Powerful taste, melts on the tip o- Actually, it simply melts your tongue.
</p>
<br>
<h2>Fire pizza</h2>
<p>
    This is fire! Extinguish it!
</p>
<br>
<h2>Pain of dark souls pizza</h2>
<p>
    For the masochistic! Tastes like swallowing a bastard sword.
</p>
    `;
}

function showAbout()
{
    container.innerHTML = `
<h1>About us</h1>
<hr>
<br>
<p>
    We're a group of passionate dark souls enjoyers making pizza reminiscent of the pain of life, making you run back time and time again as though you just lost a bossfight!
</p>
    `;
}