<template>
  <section class="page-prices">
    <!-- Hero -->
    <div class="body-container-1 body-custom">
      <img
        src="../assets/images/home-main-pic.jpeg"
        class="body-container-1-img"
        alt="Prijslijst at21 hairstudio"
      />

      <div class="body-container-text-holder">
        <h1 class="at21-header-text">Prijslijst</h1>

        <p class="at21-header-p">
          Hieronder vind je onze prijzen. Twijfel je wat je nodig hebt (bijv. lengte/dikte of een combi)?
          Stuur gerust even een berichtje, dan denken we met je mee.
        </p>

        <a
          class="button-primary about-us-btn"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Afspraak maken
        </a>
      </div>
    </div>

    <!-- Prijzen -->
    <h1 class="body-header">Behandelingen & prijzen</h1>

    <div class="prices-container body-custom">
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
    title: 'Knippen',
    items: [
      { name: 'H Wassen & Knippen', price: '€ 32,95' },
      { name: 'V Knippen', price: '€ 36,95' },
      { name: 'V Wassen knippen', price: '€ 44,95' },
      { name: 'K knippen', price: '€ 25,00' },
      { name: 'Bijwerken', price: '€ 15,00' },
      { name: 'Pony', price: '€ 7,50' },
    ],
  },
  {
    title: 'Krullen',
    items: [
      { name: 'H Krullen Kort', price: '€ 43,75' },
      { name: 'H Krullen Lang', price: '€ 69,95' },
      { name: 'V krullen', price: '€ 69,95' },
    ],
  },
  {
    title: 'Wassen & styling',
    items: [
      { name: 'V Wassen knippen Fohnen', price: '€ 52,95' },
      { name: 'V wassen & fohnen', price: '€ 32,75' },
      { name: 'Wassen drogen', price: '€ 19,50' },
    ],
  },
  {
    title: 'Shades & uitgroei',
    items: [
      { name: 'Shades 10cc', price: '€ 13,75' },
      { name: 'Shades 30cc', price: '€ 32,75' },
      { name: 'Uitgroei 10cc', price: '€ 15,25' },
      { name: 'Uitgroei 30cc', price: '€ 41,25' },
      { name: 'Uitgroei, knippen & drogen', price: '€ 86,20' },
      { name: 'Uitgroei, knippen & fohnen', price: '€ 98,20' },
    ],
  },
  {
    title: 'Basis kleuring (kort haar)',
    items: [
      { name: 'Basis Kleuring & drogen kort haar', price: '€ 45,00' },
      { name: 'Basis Kleuring & Fohnen kort haar', price: '€ 60,00' },
      { name: 'Basis Kleuring Knippen & drogen kort', price: '€ 75,00' },
      { name: 'Basis Kleuring Knippen & fohnen kort', price: '€ 90,00' },
    ],
  },
  {
    title: 'Basis kleuring (halflang haar)',
    items: [
      { name: 'Basis Kleuring & drogen halflang haar', price: '€ 50,00' },
      { name: 'Basis Kleuring & Fohnen halflang haar', price: '€ 65,00' },
      { name: 'Basis Kleuring Knippen & drogen halflang', price: '€ 80,00' },
      { name: 'Basis Kleuring Knippen & fohnen halflang', price: '€ 95,00' },
    ],
  },
  {
    title: 'Basis kleuring (lang haar)',
    items: [
      { name: 'Basis Kleuring & drogen lang haar', price: '€ 60,00' },
      { name: 'Basis Kleuring & Fohnen lang haar', price: '€ 80,00' },
      { name: 'Basis Kleuring Knippen & drogen lang', price: '€ 90,00' },
      { name: 'Basis Kleuring Knippen & fohnen lang', price: '€ 110,00' },
    ],
  },
  {
    title: 'Highlights',
    items: [
      { name: 'Highlights bovenop', price: '€ 44,75' },
      { name: 'Highlights half', price: '€ 65,00' },
      { name: 'Highlights totaal', price: '€ 86,00' },
      { name: 'Highlights lang haar totaal', price: '€ 119,95' },
    ],
  },
  {
    title: 'Opsteken & bruid',
    items: [
      { name: 'Opsteken half', price: '€ 21,95' },
      { name: 'Opsteken lang', price: '€ 41,95' },
      { name: 'Proefkapsel bruid', price: '€ 79,95' },
      { name: 'Buidskapsel', price: '€ 144,75' },
    ],
  },
]
</script>

<style scoped>
.prices-container {
  width: 80%;
  margin: 2rem auto 4rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.price-card {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(120, 101, 87, 0.18);
  border-radius: 16px;
  padding: 1.25rem 1.25rem;
}

.price-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--main-color-text-2);
  margin-bottom: 0.75rem;
}

.price-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0;
  border-bottom: 1px dashed rgba(120, 101, 87, 0.25);
}

.price-row:last-child {
  border-bottom: none;
}

.price-name {
  color: var(--main-color-text-3);
}

.price-amount {
  color: var(--main-color-text-2);
  font-weight: 600;
  white-space: nowrap;
}

.prices-note {
  grid-column: 1 / -1;
  margin-top: 0.5rem;
  color: var(--main-color-text-3);
  opacity: 0.9;
  font-size: 0.95rem;
}

@media (max-width: 950px) {
  .prices-container {
    grid-template-columns: 1fr;
    width: 90%;
  }
}
</style>
