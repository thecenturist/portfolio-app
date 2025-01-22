<template>
    <div class="header-section">
        <p>Software Support & Development. Cloud Engineering. & More</p>
    </div>
</template>

<style scoped>

.header-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    box-sizing: border-box;
    margin: 150px auto;
}

.header-section p {
    font-family: 'Geist', sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    word-wrap: break-word;
}

@media(max-width: 600px){
    .header-section {
        margin: 50px auto;
    }
    .header-section p {
        font-size: 1.6rem;
        word-wrap: break-word;
    }
}
</style>