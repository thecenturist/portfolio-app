<template>
    <div class="disciplines">
        <p class="heading">Disciplines</p>
        <div class="multi-row-grid">
            <p>Software support</p>
            <p>Back-End</p>
            <p>Front-End</p>
            <p>Linux</p>
            <p>AWS</p>
            <p>CI/CD</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>Java</p>
            <p>Cloud computing</p>
            <p>Database</p>
            <p>Networking</p>
            <p>Automation</p>
            <p>Containerization</p>
            <p>Monitoring</p>
            <p>Deployment</p>
            <p>Version Control</p>
        </div>
    </div>
</template>

<style scoped>
.disciplines {
    max-width: 760px;
    margin: 0 auto;
    font-family: 'Geist', sans-serif;
}
.heading {
    font-size: 1.7rem;
    font-weight: 600;
}
.multi-row-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.multi-row-grid p {
    font-size: 1.375rem;
    font-weight: lighter;
    line-height: 0%;
}
.multi-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
</style>