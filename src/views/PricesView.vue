<template>
  <section class="page-prices">
    <!-- Intro -->
    <header class="prices-intro body-custom">
      <div class="prices-intro-content">
        <h1 class="at21-header-text">Behandelingen & prijzen</h1>

        <p class="at21-header-p">
          Heb je vragen over onze prijzen of behandelingen? 
          Je bent altijd welkom om te bellen of even langs te komen. 
          Voor kleuren, highlights en balayage raden we aan om langs te komen, zodat we een goede en persoonlijke prijsinschatting kunnen maken.
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

    <div class="prices-container body-custom">
      <div class="price-card" v-for="section in sections" :key="section.title">
        <h2 class="price-title">{{ section.title }}</h2>

        <div class="price-row" v-for="item in section.items" :key="item.name">
          <div class="price-name">{{ item.name }}</div>
          <div class="price-amount">{{ item.price }}</div>
        </div>
      </div>

      <p class="prices-note">
        * Afspraken die niet minimaal 24 uur van tevoren worden geannuleerd, kunnen voor 50% worden doorberekend.
      </p>
    </div>
  </section>
</template>

<script setup>
const sections = [
  {
    title: 'Heren',
    items: [
      { name: 'Wassen & knippen', price: '€ 36.50' },
      { name: 'Krullen (kort)', price: '€ 47.75' },
      { name: 'Krullen (lang)', price: '€ 73,95' },
      { name: 'Bijwerken', price: '€ 22,50' },
    ],
  },
  {
    title: 'Dames',
    items: [
      { name: 'Knippen', price: '€ 39,95' },
      { name: 'Wassen & knippen', price: '€ 48,50' },
      { name: 'Wassen, knippen & föhnen', price: '€ 59,95' },
      { name: 'Krullen', price: '€ 73,95' },
      { name: 'Wassen & föhnen', price: '€ 39,50' },
    ],
  },
  {
    title: 'Extra’s',
    items: [
      { name: 'Knippen Kinderen', price: '€ 30,00' },
      { name: 'Bijwerken', price: '€ 22,50' },
      { name: 'Pony', price: '€ 15' },
      { name: 'Wassen & drogen', price: '€ 22,95' },
    ],
  },
  {
    title: 'Kleur',
    items: [
      { name: 'Kleuren', price: ' vanaf € 74,75' },
      { name: 'Highlights', price: ' vanaf € 129,75' },
      { name: 'Balayage', price: 'vanaf € 189,75' },
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
  align-items: baseline;
  gap: 0.9rem;
  padding: 0.45rem 0;
  border-bottom: 1px dashed rgba(120, 101, 87, 0.2);
}

.price-row:last-child {
  border-bottom: 0;
}

.price-name {
  color: var(--main-color-text-2);
}

.price-amount {
  font-weight: 600;
  color: var(--main-color-text-1);
  white-space: nowrap;
}

.prices-note {
  grid-column: 1 / -1;
  margin-top: 0.25rem;
  font-size: 0.92rem;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .prices-container {
    width: min(92%, 720px);
    grid-template-columns: 1fr;
  }
}
</style>
