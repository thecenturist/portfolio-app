<template>
    <div class="home-view">
        <Header />
        <Projects />
        <AboutSnippet />
        <EmailDisplay />
        <BackToTop />
    </div>
    
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Header from '../components/Header.vue'
import AboutSnippet from '../components/AboutSnippet.vue'
import EmailDisplay from '../components/EmailDisplay.vue'
import Footer from '../components/Footer.vue'
import BackToTop from '../components/BackTop.vue'
import Projects from '../components/Projects.vue'

export default {
    name: 'Home',
    components: {
        Header,
        AboutSnippet,
        EmailDisplay,
        BackToTop,
        Projects
    }
}
</script>

<style scoped>
.home-view {
    align-items: center;
}
</style>