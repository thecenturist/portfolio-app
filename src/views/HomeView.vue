<template>
    <div class="home-view">
        <Header />
        <AboutSnippet />
        <EmailDisplay />
    </div>
    
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Header from '../components/Header.vue'
import AboutSnippet from '../components/AboutSnippet.vue'
import EmailDisplay from '../components/EmailDisplay.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        AboutSnippet,
        EmailDisplay
    }
}
</script>

<style scoped>
.home-view {
    align-items: center;
}
</style>