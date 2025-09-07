<script setup></script>
<template>
  <Header />
  <main>
    <HomeView />
  </main>
  <br />
  <br />
  <br />

  <Footer />
</template>

<style>
@import '@/assets/main.css';
@import '@/assets/home.css';

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue';
export default {
  name: 'App',
  components: {
    HomeView
  },
  setup() {}
}
</script>
