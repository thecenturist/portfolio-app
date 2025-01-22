<template>
    <AboutRead />
    <WorkExperiences />
    <Education />
    <Disciplines />
    <BackToTop />
</template>

<script>
import WorkExperiences from '../components/WorkExperiences.vue'
import AboutRead from '../components/AboutRead.vue'
import Education from '../components/Education.vue'
import Disciplines from '../components/Disciplines.vue'
import BackToTop from '../components/BackTop.vue'


export default {
    name: 'About',
    components: {
        WorkExperiences,
        AboutRead,
        Education,
        Disciplines,
        BackToTop
    }
}
</script>

<style scoped>

</style>