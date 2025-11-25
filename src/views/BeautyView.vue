<script setup>
</script>

<template>
  <section class="page-beauty">
    <div class="body-container-1 body-custom beauty-hero">
      <img
        src="../assets/images/home-main-pic.jpeg"
        class="body-container-1-img"
        alt="Schoonheidsbehandeling bij At21"
      />
      <div class="body-container-text-holder">
        <h1 class="body-header">Schoonheidsbehandelingen</h1>
        <p class="at21-header-p">
          In onze salon heeft Nina haar eigen, rustige behandelruimte. Als gediplomeerd
          schoonheidsspecialist biedt zij onder andere gezichtsbehandelingen, wenkbrauw- en
          wimperbehandelingen en huidverbeterende behandelingen.
        </p>
        <p class="at21-header-p">
          Op deze pagina kun je binnenkort meer lezen over de verschillende behandelingen,
          prijzen en hoe je een haarafspraak kunt combineren met een schoonheidsbehandeling
          voor een compleet self-care moment.
        </p>
        <a
          class="button-primary"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maak een afspraak
        </a>
      </div>
    </div>

    <div class="body-container-our-services body-custom beauty-grid">
      <div class="our-services-div">
        <h2 class="our-services-header">Gezichtsbehandelingen</h2>
        <p class="our-services-p">
          Ontspannende facials, dieptereiniging en huidverbeterende behandelingen afgestemd
          op jouw huidtype.
        </p>
      </div>
      <div class="our-services-div">
        <h2 class="our-services-header">Brows &amp; lashes</h2>
        <p class="our-services-p">
          Wenkbrauwstyling, verven en bijvoorbeeld een lashlift voor een frisse, open blik.
        </p>
      </div>
      <div class="our-services-div">
        <h2 class="our-services-header">Combi behandelingen</h2>
        <p class="our-services-p">
          Combineer een haarafspraak met een schoonheidsbehandeling bij Nina voor een
          compleet verwenmoment.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-beauty {
  margin-top: 2rem;
}

.beauty-hero {
  display: flex;
  gap: 4rem;
  align-items: flex-start; /* --> tekst begint bovenaan naast de foto */
  margin-top: 1rem;        /* --> blok iets hoger op de pagina */
}

.beauty-grid {
  margin-top: 3rem;
}

@media (max-width: 950px) {
  .beauty-hero {
    flex-direction: column;
  }

  .beauty-grid {
    grid-template-columns: 1fr;
  }
}
</style>
