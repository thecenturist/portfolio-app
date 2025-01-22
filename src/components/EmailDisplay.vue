<template>
    <div class="email-display">
        <p class="copy">Get in touch <span>(Click to copy)</span></p>
        <p class="email" v-html="emailText" v-on:click="copyEmail"></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const emailAddress = "aj.akinremi@yahoo.com"
const emailText = ref(emailAddress)
const copyEmail = () => {
    navigator.clipboard.writeText(emailText.value)
    emailText.value = "Email copied"
    setTimeout(() => {
       emailText.value = emailAddress 
    }, 4000);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.email-display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1200px;
    margin: 150px auto;
    font-family: 'Geist', sans-serif;
    line-height: 5px;
}
.copy {
    font-size: 1.375rem;
    font-weight: 300;
}
.email-display p span {
    color: var(--primary-body-color);
}
.email {
    font-size: 3.7vw;
    cursor: pointer;
    color: var(--primary-text-color);
    font-weight: 600;
}
@media(max-width: 600px){
    .email-display {
        margin: 50px auto;
    }
}
</style>