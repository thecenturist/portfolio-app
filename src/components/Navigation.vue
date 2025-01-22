<template>
    <header class="header slide">
        <router-link class="logo" to="/">Anjolaoluwa "AJ" Akinremi</router-link>
        <nav class="navbar" :class="{'navbar-collapsed': !isMenuOpen}">
            <router-link to="/about">About</router-link>
            <a href="https://github.com/thecenturist" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/aj-akinremi//" target="_blank">LinkedIn</a>
            <a @click="toggleDarkMode" id="dark-mode-toggle"><i :class="darkMode ? 'pi pi-sun' : 'pi pi-moon'" style="font-size: 2rem;"></i></a>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const darkMode = ref(false)
const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    if(darkMode.value){
        document.body.setAttribute('data-theme', 'dark')
    } else {
        document.body.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}
onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        darkMode.value = true
        document.body.setAttribute('data-theme', 'dark')
    }
})
</script>

<style scoped>
@import "primeicons/primeicons.css";

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
    color: var(--primary-text-color);
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
    color: var(--primary-text-color);
    font-weight: 500;
}

a {
    cursor: pointer;
    text-decoration: none;
}
.navbar a {
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    margin-left:60px;
    transition: 0.3s ease;
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
#dark-mode-toggle {
    text-decoration: none;
    /* border: 1px solid var(--primary-text-color); */
    padding: 5px;
    border-radius: 50px;
}
@media(max-width: 600px){
    .logo {
        font-size: 20px;
    }
}
</style>