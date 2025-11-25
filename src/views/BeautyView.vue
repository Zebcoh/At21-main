<script setup></script>

<template>
  <section class="page-beauty">
    <!-- Hero: zelfde structuur als op de homepagina -->
    <div class="body-container-1 body-custom">
      <img
        src="../assets/images/home-main-pic.jpeg"
        class="body-container-1-img"
        alt="Schoonheidsbehandeling bij At21"
      />
      <div class="body-container-text-holder">
        <h1 class="at21-header-text">Schoonheidsbehandelingen</h1>

        <p class="at21-header-p">
          In onze salon heeft Nina haar eigen, rustige behandelruimte. Als gediplomeerd
          schoonheidsspecialist biedt zij onder andere gezichtsbehandelingen,
          wenkbrauw- en wimperbehandelingen en huidverbeterende behandelingen.
        </p>

        <p class="at21-header-p">
          Op deze pagina kun je binnenkort meer lezen over de verschillende
          behandelingen, prijzen en hoe je een haarafspraak kunt combineren met een
          schoonheidsbehandeling voor een compleet self-care moment.
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

    <!-- Beauty-services blok -->
    <div class="body-container-our-services body-custom beauty-services">
      <div class="our-services-div">
        <h2 class="our-services-h2">Gezichtsbehandelingen</h2>
        <p class="beauty-services-text">
          Ontspannende facials, dieptereiniging en huidverbeterende behandelingen
          afgestemd op jouw huidtype.
        </p>
      </div>

      <div class="our-services-div">
        <h2 class="our-services-h2">Brows &amp; lashes</h2>
        <p class="beauty-services-text">
          Wenkbrauwstyling, verven en bijvoorbeeld een lashlift voor een frisse, open
          blik.
        </p>
      </div>

      <div class="our-services-div">
        <h2 class="our-services-h2">Combi behandelingen</h2>
        <p class="beauty-services-text">
          Combineer een haarafspraak met een schoonheidsbehandeling bij Nina voor een
          compleet verwenmoment.
        </p>
      </div>
    </div>

    <!-- Contactblokje onder de beauty-sectie (boven de footer) -->
    <div class="beauty-contact">
      <p>Haverstraatpassage 18, Enschede</p>
      <p>053 303 45 05</p>
      <div class="beauty-contact-icons">
        <a href="https://www.instagram.com/at21hairstudio" target="_blank" rel="noopener noreferrer">
          <img
            src="../assets/images/instagram.svg"
            alt="Instagram At21"
            width="24"
            height="24"
          />
        </a>
        <a href="https://www.tiktok.com/@at21hairstudio" target="_blank" rel="noopener noreferrer">
          <img
            src="../assets/images/tiktok.svg"
            alt="TikTok At21"
            width="24"
            height="24"
          />
        </a>
      </div>
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

.beauty-contact {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 2em;
  font-size: 0.95rem;
  color: var(--main-color-text-3);
}

.beauty-contact p {
  margin: 0.2rem 0;
}

.beauty-contact-icons {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}

.beauty-contact-icons img {
  display: block;
}
</style>
