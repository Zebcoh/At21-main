<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="page-home">
    <div class="body-container-1 body-custom">
      <img
        src="../assets/images/home-main-pic.jpeg"
        class="body-container-1-img"
      />
      <div class="body-container-text-holder">
        <h1 class="at21-header-text hero-title">
          {{ t("header.heroTitleLine1") }}
          <span class="hero-second-line">{{ t("header.heroTitleLine2") }}</span>
        </h1>
        <p class="at21-header-p">{{ t("header.heroIntro") }}</p>
        <div class="hero-actions">
          <a
            class="button-primary about-us-btn"
            href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          >
            {{ t("header.bookButton") }}
          </a>
          <RouterLink class="button-secondary" to="/prijslijst">{{
            t("header.secondaryCta")
          }}</RouterLink>
        </div>
        <ul class="hero-trust-list">
          <li>{{ t("header.trust1") }}</li>
          <li>{{ t("header.trust2") }}</li>
          <li>{{ t("header.trust3") }}</li>
        </ul>
      </div>
    </div>

    <h1 class="body-header">{{ t("services.title") }}</h1>
    <div class="body-container-our-services body-custom">
      <div class="our-services-div">
        <img
          src="../assets/images/gallery-3.jpeg"
          alt=""
          class="our-services-img"
        />
        <h2 class="our-services-h2">{{ t("services.curlyHair") }}</h2>
      </div>
      <div class="our-services-div">
        <img
          src="../assets/images/coloring.jpg"
          alt=""
          class="our-services-img"
        />
        <h2 class="our-services-h2">{{ t("services.colorations") }}</h2>
      </div>
      <div class="our-services-div">
        <img
          src="../assets/images/eyebrows.jfif"
          alt=""
          class="our-services-img"
        />
        <h2 class="our-services-h2">{{ t("services.beautyBrows") }}</h2>
      </div>
    </div>

    <h1 class="body-header">{{ t("aboutUs.title") }}</h1>
    <div class="body-container-about-us body-custom">
      <div class="container-flex-duo">
        <div>
          <h2 class="about-us-greeting">{{ t("aboutUs.greeting") }}</h2>
          <p class="about-us-description">
            {{ t("aboutUs.shortDescription") }}
          </p>
        </div>
        <div class="about-cta-row">
          <RouterLink
            class="button-secondary about-action-btn"
            to="/schoonheidsbehandelingen"
            >{{ t("aboutUs.readMore") }}</RouterLink
          >
          <a
            class="button-primary about-us-btn button-centered about-action-btn"
            href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          >
            {{ t("aboutUs.bookButton") }}
          </a>
        </div>
      </div>
      <img src="../assets/images/julia-nina.jfif" class="about-us-img" />
    </div>

    <div class="body-container-visit-us body-custom">
      <div class="body-container-text-holder">
        <h1 class="visit-us-header m-1-b">{{ t("visitUs.title") }}</h1>
        <p class="m-2-b">{{ t("visitUs.address") }}</p>

        <h2 class="m-1-b visit-us-h2">{{ t("visitUs.hours.title") }}</h2>
        <p>{{ t("visitUs.hours.monday") }}</p>
        <p>{{ t("visitUs.hours.tuesday") }}</p>
        <p>{{ t("visitUs.hours.wednesday") }}</p>
        <p>{{ t("visitUs.hours.thursday") }}</p>
        <p>{{ t("visitUs.hours.friday") }}</p>
        <p>{{ t("visitUs.hours.saturday") }}</p>
        <p>{{ t("visitUs.hours.sunday") }}</p>

        <h2 class="m-1-b visit-us-h2">{{ t("visitUs.contact.title") }}</h2>
        <p class="m-1-b">
          {{ t("visitUs.contact.phone") }}<br />
          julia@21hairstudio.nl
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.2783855801717!2d6.8978786!3d52.2201599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8155ee83d8b59%3A0x79af1bab32f5a5f3!2sAt%2021%20Hairstudio!5e0!3m2!1sen!2snl!4v1721219169053!5m2!1sen!2snl"
        width="600"
        height="550"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        class="margin-top-map gmap"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <section class="final-cta body-custom">
      <h2>{{ t("finalCta.title") }}</h2>
      <p>{{ t("finalCta.subtitle") }}</p>
      <a
        class="button-primary"
        href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
      >
        {{ t("finalCta.button") }}
      </a>
    </section>
  </section>
</template>

<style scoped>
@import "@/assets/home.css";

.hero-title {
  line-height: 1.1;
}

.hero-second-line {
  display: block;
  font: inherit;
  letter-spacing: inherit;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.button-secondary {
  text-decoration: none;
  border: 1px solid var(--main-color-text-1);
  color: var(--main-color-text-1);
  padding: 0.8em 1.5em;
  border-radius: 8px;
  font-weight: 500;
}

.hero-trust-list {
  margin-top: 1.4rem;
  list-style: none;
  padding: 0;
}

.hero-trust-list li {
  margin-bottom: 0.35rem;
}

.about-cta-row {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.about-us-greeting {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: left;
}

.about-us-description {
  text-align: left;
  line-height: 1.75;
  font-size: 1.08rem;
  max-width: 48ch;
  margin-bottom: 1.5rem;
}

.about-action-btn {
  min-width: 190px;
  text-align: center;
  padding: 0.8em 1.45em;
}

.final-cta {
  margin: 4rem auto 1.5rem;
  background: rgba(120, 101, 87, 0.1);
  border-radius: 20px;
  text-align: center;
  padding: 2rem;
  display: block;
}

.final-cta p {
  margin: 0.6rem 0 1.2rem;
}

@media (max-width: 950px) {
  .about-us-greeting,
  .about-us-description {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .about-cta-row {
    justify-content: center;
  }
}
</style>
