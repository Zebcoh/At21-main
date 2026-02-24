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
    <div class="body-container-our-services body-custom beauty-services">
      <div class="our-services-div">
        <h2 class="our-services-h2">Gezichtsbehandelingen</h2>
        <p class="beauty-services-text">
          Behandelingen volledig afgestemd op jouw huidtype en wensen.
          Gericht op huidverbetering, ontspanning en een frisse uitstraling.
        </p>
      </div>

      <div class="our-services-div">
        <h2 class="our-services-h2">Wenkbrauwen &amp; Wimpers</h2>
        <p class="beauty-services-text">
          Wenkbrauwstyling met wax en/of verven. Ook bieden wij wimperlifting
          aan voor een mooie, open blik.
        </p>
      </div>

      <div class="our-services-div">
        <h2 class="our-services-h2">Kriebel Treatments</h2>
        <p class="beauty-services-text">
          Verwen jezelf met een heerlijke Kriebel Treatment van 15 of 30 minuten.
          Uitgevoerd op het gezicht, hals, armen en handen.
        </p>
      </div>

      <div class="our-services-div">
        <h2 class="our-services-h2">Combi Behandelingen</h2>
        <p class="beauty-services-text">
          Combineer een schoonheidsbehandeling met een haarafspraak
          voor een compleet verwenmoment.
        </p>
      </div>
    </div>

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

.beauty-services-text {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--main-color-text-3);
  max-width: 26rem;
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
