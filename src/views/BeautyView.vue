<script setup>
import heroImg from '@/assets/images/home-main-pic.jpeg'
</script>

<template>
  <section class="page-beauty">
    <!-- Hero -->
    <div class="body-container-1 body-custom">
      <img
        :src="heroImg"
        class="body-container-1-img"
        alt="Schoonheidsbehandeling bij At21"
      />

      <div class="body-container-text-holder">
        <h1 class="at21-header-text">Schoonheidsbehandelingen</h1>

        <p class="at21-header-p">
          Onze gezichtsbehandelingen worden volledig afgestemd op jouw huidtype
          en behoeften. Met hoogwaardige producten zorgen we voor optimale
          verzorging, ontspanning en zichtbare resultaten.
        </p>

        <a
          class="button-primary about-us-btn"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maak een afspraak
        </a>
      </div>
    </div>

    <!-- Services -->
    <section class="beauty-services body-custom">
      <div class="beauty-services-grid">
        <article class="beauty-service-card">
          <h3 class="beauty-service-heading">Gezichtsbehandelingen</h3>
          <p class="beauty-services-text">
            Behandelingen volledig afgestemd op jouw huidtype en wensen.
            Gericht op huidverbetering, ontspanning en een frisse uitstraling.
          </p>
        </article>

        <article class="beauty-service-card">
          <h3 class="beauty-service-heading">Wenkbrauwen &amp; Wimpers</h3>
          <p class="beauty-services-text">
            Wenkbrauwstyling met wax en/of verven. Ook bieden wij wimperlifting
            aan voor een mooie, open blik.
          </p>
        </article>

        <article class="beauty-service-card">
          <h3 class="beauty-service-heading">Kriebel Treatments</h3>
          <p class="beauty-services-text">
            Verwen jezelf met een heerlijke Kriebel Treatment van 15 of 30 minuten.
            Uitgevoerd op het gezicht, hals, armen en handen.
          </p>
        </article>

        <article class="beauty-service-card">
          <h3 class="beauty-service-heading">Combi Behandelingen</h3>
          <p class="beauty-services-text">
            Combineer een schoonheidsbehandeling met een haarafspraak
            voor een compleet verwenmoment.
          </p>
        </article>
      </div>
    </section>

    <!-- Opening Hours -->
    <div class="body-custom beauty-hours">
      <h2 class="our-services-h2">Openingstijden</h2>

      <ul class="beauty-hours-list">
        <li><strong>Maandag:</strong> 13:00 – 18:30</li>
        <li><strong>Dinsdag:</strong> 09:30 – 18:30</li>
        <li><strong>Woensdag:</strong> Gesloten</li>
        <li><strong>Donderdag:</strong> 13:00 – 20:00</li>
        <li><strong>Vrijdag:</strong> 09:30 – 18:30</li>
        <li><strong>Zaterdag:</strong> 09:30 – 15:00</li>
        <li><strong>Zondag:</strong> Gesloten</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.beauty-services {
  margin-top: 3em;
}


.beauty-services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.beauty-service-card {
  background: #f7f2e9;
  border: 1px solid #ddcfb8;
  border-radius: 16px;
  padding: 1.5rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}


.beauty-service-heading {
  margin-top: 0;
  font-size: 1.45rem;
  font-weight: 500;
  color: var(--main-color-text-2);
}

.beauty-services-text {
  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--main-color-text-3);
  max-width: 34rem;
}

@media (max-width: 900px) {
  .beauty-services-grid {
    grid-template-columns: 1fr;
  }
}

.beauty-hours {
  margin-top: 2.5em;
  margin-bottom: 2em;
}

.beauty-hours-list {
  margin-top: 0.75rem;
  padding-left: 1.1rem;
  color: var(--main-color-text-3);
  line-height: 1.8;
}
</style>
