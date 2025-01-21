<template>
    <AboutRead />
    <WorkExperiences />
    <Education />
    <Disciplines />
</template>

<script>
import WorkExperiences from '../components/WorkExperiences.vue'
import AboutRead from '../components/AboutRead.vue'
import Education from '../components/Education.vue'
import Disciplines from '../components/Disciplines.vue'

export default {
    name: 'About',
    components: {
        WorkExperiences,
        AboutRead,
        Education,
        Disciplines
    }
}
</script>

<style scoped>

</style>