<template>
    <div v-if="isVisible" class="back-to-top" @click="scrollToTop">
        <i class="pi pi-arrow-up"></i> <!-- PrimeIcons arrow-up icon -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isVisible = ref(false)
const handleScroll = () => {
    isVisible.value = window.scrollY > 300
}
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

</script>

<style scoped>
@import "primeicons/primeicons.css";
/* Style for the back to top button */
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--back-to-top-background);
  color: var(--back-to-top-color);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  transition: opacity 0.3s ease;
}

.back-to-top:hover {
  background-color: var(--back-to-top-color-hover);
}

.pi-arrow-up {
  font-size: 18px;
}
</style>