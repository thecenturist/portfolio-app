<template>
    <div class="education">
        <p class="work-title">Education</p>
        <div class="multi-row">
            <p class="title">Bachelor of Computer Science</p>
            <p class="entity">San Diego Mesa College</p>
            <p class="years">2023 - Present</p>
        </div>
        <div class="multi-row">
            <p class="title">High School</p>
            <p class="entity">William C. Crawford High School</p>
            <p class="years">2018</p>
        </div>
    </div>
</template>

<style scoped>
.education {
    margin: 100px auto;
    max-width: 760px;
    font-family: 'Geist', sans-serif;
}
.education p {
    line-height: 0%;
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