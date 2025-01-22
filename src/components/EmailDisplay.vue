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
    .email {
        font-size: 2rem;
    }
}
</style>