<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'nl' : 'en'
}
</script>

<template>
  <body>
    <div class="language-toggle">
      <button @click="toggleLanguage" class="lang-btn">
        {{ locale === 'en' ? 'NL' : 'EN' }}
      </button>
    </div>
    <div class="body-container-1 body-custom">
      <img src="../assets/images/home-main-pic.jpeg" class="body-container-1-img" />
      <div class="body-container-text-holder">
        <h1 class="at21-header-text">{{ t('header.title') }}</h1>
        <p class="at21-header-p">
          {{ t('header.intro', ['At 21 hairstudio', 'you', 'your unique style', 'best version of yourself']) }}
        </p>
        <a
          class="button-primary about-us-btn"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
        >
          {{ t('header.bookButton') }}
        </a>
      </div>
    </div>
    <h1 class="body-header">{{ t('services.title') }}</h1>
    <div class="body-container-our-services body-custom">
      <div class="our-services-div">
        <div class="inner">
          <img src="../assets/images/men-haircut.jpg" alt="" class="our-services-img" />
          <h2 class="our-services-h2">{{ t('services.washingCutting') }}</h2>
        </div>
      </div>
      <div class="our-services-div">
        <div class="inner">
          <img src="../assets/images/fohnen-blow-dry.jpg" alt="" class="our-services-img" />
          <h2 class="our-services-h2">{{ t('services.blowDry') }}</h2>
        </div>
      </div>
      <div class="our-services-div">
        <div class="inner">
          <img src="../assets/images/our-services-3.jpeg" alt="" class="our-services-img" />
          <h2 class="our-services-h2">{{ t('services.highlightsBalayage') }}</h2>
        </div>
      </div>
    </div>
    <div class="body-container-our-services body-custom">
      <div class="our-services-div">
        <div class="inner">
          <img src="../assets/images/coloring.jpg" alt="" class="our-services-img" />
          <h2 class="our-services-h2">{{ t('services.colorations') }}</h2>
        </div>
      </div>
      <div class="our-services-div">
        <div class="inner">
          <img src="../assets/images/gallery-3.jpeg" alt="" class="our-services-img" />
          <h2 class="our-services-h2">{{ t('services.curlyHair') }}</h2>
        </div>
      </div>
    </div>
    <h1 class="body-header">{{ t('aboutUs.title') }}</h1>
    <div class="body-container-about-us body-custom">
      <div class="body-container-about-us">
        <div class="container-flex-duo">
          <div>
            <h2 class="about-us-text">{{ t('aboutUs.greeting') }}</h2>
            <p class="about-us-text">
              {{ t('aboutUs.description', ['At 21 hairstudio', 'gezond mogelijk', 'heerlijk', 'natuurlijk mogelijk', 'Curly girls', 'Krullen knippen en stylen', 'mijn specialiteit']) }}
            </p>
          </div>
          <a
            class="button-primary about-us-btn button-centered"
            href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          >
            {{ t('aboutUs.bookButton') }}
          </a>
        </div>
      </div>
      <img src="../assets/images/julia-nina.jfif" class="about-us-img" />
    </div>
    <div class="body-container-visit-us body-custom">
      <div class="body-container-text-holder">
        <h1 class="visit-us-header m-1-b">{{ t('visitUs.title') }}</h1>
        <p class="m-2-b">{{ t('visitUs.address') }}</p>
        <h2 class="m-1-b visit-us-h2">{{ t('visitUs.hours.title') }}</h2>
        <p>{{ t('visitUs.hours.monday') }}</p>
        <p>{{ t('visitUs.hours.tuesday') }}</p>
        <p>{{ t('visitUs.hours.wednesday') }}</p>
        <p>{{ t('visitUs.hours.thursday') }}</p>
        <p>{{ t('visitUs.hours.friday') }}</p>
        <p>{{ t('visitUs.hours.saturday') }}</p>
        <p>{{ t('visitUs.hours.sunday') }}</p>
        <h2 class="m-1-b visit-us-h2">{{ t('visitUs.contact.title') }}</h2>
        <p class="m-1-b">
          {{ t('visitUs.contact.phone') }}<br />
          {{ t('visitUs.contact.email') }}
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
  </body>
</template>

<style scoped>
@import '@/assets/home.css';

.language-toggle {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.lang-btn {
  padding: 8px 16px;
  background-color: #6a4e3a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.lang-btn:hover {
  background-color: #8b6b4f;
}

.strong_text {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #6a4e3a;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  margin: 0.2em;
}

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