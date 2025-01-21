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
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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