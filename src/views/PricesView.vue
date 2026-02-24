<template>
  <section class="page-prices">
    <!-- Intro -->
    <header class="prices-intro body-custom">
      <div class="prices-intro-content">
        <p class="prices-kicker">AT21 Hair Studio</p>
        <h1 class="at21-header-text">Prijslijst</h1>

        <p class="at21-header-p">
          Hieronder vind je onze prijzen. Twijfel je wat je nodig hebt?
          Stuur gerust een berichtje, dan denken we met je mee.
        </p>

        <a
          class="prices-cta"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Afspraak maken
        </a>
      </div>
    </header>

    <h2 class="prices-section-header">Behandelingen & prijzen</h2>

    <div class="prices-container">
      <div class="price-card" v-for="section in sections" :key="section.title">
        <h2 class="price-title">{{ section.title }}</h2>

        <div class="price-row" v-for="item in section.items" :key="item.name">
          <div class="price-name">{{ item.name }}</div>
          <div class="price-amount">{{ item.price }}</div>
        </div>
      </div>

      <p class="prices-note">
        * Prijzen zijn in euro’s en kunnen variëren bij extra lengte/dikte of extra product.
      </p>
    </div>
  </section>
</template>

<script setup>
const sections = [
  {
    title: 'Heren',
    items: [
      { name: 'Wassen & knippen', price: '€ 32,95' },
      { name: 'Krullen (kort)', price: '€ 43,75' },
      { name: 'Krullen (lang)', price: '€ 69,95' },
    ],
  },
  {
    title: 'Dames',
    items: [
      { name: 'Knippen', price: '€ 36,95' },
      { name: 'Wassen & knippen', price: '€ 44,95' },
      { name: 'Wassen, knippen & föhnen', price: '€ 52,95' },
      { name: 'Krullen', price: '€ 69,95' },
      { name: 'Wassen & föhnen', price: '€ 32,75' },
    ],
  },
]
</script>

<style scoped>
.page-prices {
  width: min(1120px, 90%);
  margin: 0 auto 4rem;
}

.prices-intro {
  margin: 1rem auto 1.8rem;
  text-align: center;
}

.prices-intro-content {
  width: min(720px, 100%);
  margin: 0 auto;
}

.prices-section-header {
  margin-top: 1.4rem;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.prices-container {
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.price-card {
  background: rgba(255, 255, 255, 0.55);
  border-radius: 16px;
  padding: 1.25rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px dashed rgba(120, 101, 87, 0.25);
}

.price-row:last-child {
  border-bottom: none;
}

@media (max-width: 950px) {
  .prices-container {
    grid-template-columns: 1fr;
  }
}
</style>
