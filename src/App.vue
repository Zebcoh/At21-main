<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="container">
    <RouterView /> <!-- Router rendert hier HomeView.vue -->
  </main>
  <Footer />
</template>

<style>
@import '@/assets/main.css';
@import '@/assets/home.css';
</style>
