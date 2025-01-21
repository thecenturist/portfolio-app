<template>
    <div class="work-experience">
        <p class="work-title">Work Experiences</p>
        <div class="multi-row-grid">
            <div class="multi-row">
                <p class="title">Senior Technical Support Engineer</p>
                <p class="entity">Stryker</p>
                <p class="years">2022 - Present</p>
            </div>
            <div class="multi-row">
                <p class="title">Remote Support Technician</p>
                <p class="entity">SkyRiver IT</p>
                <p class="years">2021 - 2022</p>
            </div>
            <div class="multi-row">
                <p class="title">IT Helpdesk Technician</p>
                <p class="entity">Global Equity Finance</p>
                <p class="years">2020-2021</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.work-experience {
    margin-left: auto;
    margin-right: auto;
    max-width: 760px;
    font-family: 'Geist', sans-serif;
}
.multi-row-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.work-experience p {
    line-height: 0%;
    color: #333333;
}
.multi-row-grid p {
    font-size: 1.375rem;
}
.multi-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.title {
    color: #111111;
    font-weight: 400;
}
.entity {
    font-size: 1.1rem;
}
.years {
    font-weight: 300;
    font-size: 1rem;
}
.work-title {
    font-size: 1.7rem;
    font-weight: 600;
}
</style>