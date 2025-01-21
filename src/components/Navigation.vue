<template>
    <header class="header slide">
        <router-link class="logo" to="/">Anjolaoluwa "AJ" Akinremi</router-link>
        <nav class="navbar">
            <router-link to="/about">About</router-link>
            <a href="https://github.com/thecenturist" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/aj-akinremi//" target="_blank">LinkedIn</a>
        </nav>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.header {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
}

.logo {
    font-size: 36px;
}
.logo:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
}
.logo, .header a {
    font-family: 'Outfit';
    color: #111111;
    font-weight: 500;
}

a {
    cursor: pointer;
    text-decoration: none;
}
.navbar a {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    margin-left:60px;
}
.navbar a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #FFF;
}
.navbar a:hover {
    text-decoration: underline;
    text-decoration-thickness: 4px;
}
</style>