<template>
  <section class="page-prices">
    <!-- Intro -->
    <header class="prices-intro body-custom">
      <div class="prices-intro-content">
        <p class="prices-kicker">AT21 Hair Studio</p>
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
    </header>

    <!-- Prijzen -->
    <h2 class="body-header prices-section-header">Behandelingen & prijzen</h2>

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
  {
    title: 'Kinderen',
    items: [{ name: 'Knippen', price: '€ 25,00' }],
  },
  {
    title: 'Extra’s',
    items: [
      { name: 'Bijwerken', price: '€ 15,00' },
      { name: 'Pony', price: '€ 7,50' },
      { name: 'Wassen & drogen', price: '€ 19,50' },
    ],
  },
  {
    title: 'Kleur',
    items: [
      { name: 'Shades 10cc', price: '€ 13,75' },
      { name: 'Shades 30cc', price: '€ 32,75' },
      { name: 'Uitgroei 10cc', price: '€ 15,25' },
      { name: 'Uitgroei 30cc', price: '€ 41,25' },
      { name: 'Uitgroei + knippen + drogen', price: '€ 86,20' },
      { name: 'Uitgroei + knippen + föhnen', price: '€ 98,20' },
    ],
  },
  {
    title: 'Basis kleuring',
    items: [
      // Kort
      { name: 'Kort: kleuring & drogen', price: '€ 45,00' },
      { name: 'Kort: kleuring & föhnen', price: '€ 60,00' },
      { name: 'Kort: kleuring + knippen & drogen', price: '€ 75,00' },
      { name: 'Kort: kleuring + knippen & föhnen', price: '€ 90,00' },

      // Halflang
      { name: 'Halflang: kleuring & drogen', price: '€ 50,00' },
      { name: 'Halflang: kleuring & föhnen', price: '€ 65,00' },
      { name: 'Halflang: kleuring + knippen & drogen', price: '€ 80,00' },
      { name: 'Halflang: kleuring + knippen & föhnen', price: '€ 95,00' },

      // Lang
      { name: 'Lang: kleuring & drogen', price: '€ 60,00' },
      { name: 'Lang: kleuring & föhnen', price: '€ 80,00' },
      { name: 'Lang: kleuring + knippen & drogen', price: '€ 90,00' },
      { name: 'Lang: kleuring + knippen & föhnen', price: '€ 110,00' },
    ],
  },
  {
    title: 'Highlights',
    items: [
      { name: 'Bovenop', price: '€ 44,75' },
      { name: 'Half', price: '€ 65,00' },
      { name: 'Totaal', price: '€ 86,00' },
      { name: 'Lang haar: totaal', price: '€ 119,95' },
    ],
  },
  {
    title: 'Bruid & opsteken',
    items: [
      { name: 'Opsteken (half)', price: '€ 21,95' },
      { name: 'Opsteken (lang)', price: '€ 41,95' },
      { name: 'Proefkapsel bruid', price: '€ 79,95' },
      { name: 'Bruidskapsel', price: '€ 144,75' },
    ],
  },
]
</script>

<style scoped>
.prices-intro {
  margin: 0.8rem auto 1.5rem;
}

.prices-intro-content {
  width: min(720px, 100%);
  text-align: center;
  padding: 1.25rem 1rem 0.75rem;
}

.prices-kicker {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--main-color-text-1);
  margin-bottom: 0.7rem;
  opacity: 0.85;
}

.prices-intro-content .at21-header-text {
  font-size: clamp(2.1rem, 4.6vw, 3rem);
  margin-bottom: 0.2em;
}

.prices-intro-content .at21-header-p {
  max-width: 56ch;
  margin: 0 auto 1.2rem;
  line-height: 1.55;
}

.prices-section-header {
  margin-top: 1.4rem;
}

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
