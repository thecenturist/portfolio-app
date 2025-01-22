<template>
    <div class="about-snippet">
        <p>
            I’m AJ, a software support engineer and developer based in San Diego, CA with over 5 years of diverse experience. I specialize in supporting software products, crafting web applications, aligning business objectives with user needs, and overseeing comprehensive design projects. My passion lies in tackling diverse challenges in the dynamic design landscape.
        </p>
        <router-link to="/about">More about me</router-link>
    </div>
</template>

<style scoped>
.about-snippet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 150px auto;
}

.about-snippet p {
    font-family: 'Geist';
    font-size: 1.375rem;
    line-height: 160%;
    color: var(--primary-body-color);
    font-weight: 300;
    max-width: 760px;
    align-items: center;
}

.about-snippet a {
    text-decoration: none;
    font-family: 'Geist', sans-serif;
    color: var(--primary-text-color);
    font-style: bold;
    font-size: 1.375rem;
    cursor: pointer;
}
.about-snippet a:hover {
    color: var(--primary-body-color);
    text-decoration: underline;
}

@media(max-width: 600px){
    .about-snippet {
        margin: 50px auto;
    }
}
</style>