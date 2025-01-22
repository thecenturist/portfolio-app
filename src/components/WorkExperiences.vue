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
    color: var(--primary-body-color);
    
}

.multi-row {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.title {
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 1.365rem;
}
.entity {
    font-size: 1.1rem;
    color: #666666
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