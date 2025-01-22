<template>
    <div class="projects grid slide delay02">
        <Project v-for="project in projects" :company="project.company" :description="project.description" :image="project.image" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue'
const projects = ref([
    {
        company: "Note Taker",
        description: "Simple Note Taking app",
        image: "notetaker"
    },
    {
        company: "SSL2ooL",
        description: "SSL Task Automation App",
        image: "ss2ool"
    },
    {
        company: "Anjola.Work",
        description: "This very site you're on",
        image: "anjolawork"
    }
])

</script>

<style scoped>

.projects a {
    text-decoration: none;
}
.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between; 
	max-width: 1200px;
	margin: 0 auto;
}
</style>