<script setup>
import Navigation from './components/Navigation.vue'

import Footer from './components/Footer.vue'
</script>

<template>
    <Navigation />
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'">
            <component :is="Component" />
        </transition>
    </router-view>
    <Footer />
</template>

<style scoped>
</style>
