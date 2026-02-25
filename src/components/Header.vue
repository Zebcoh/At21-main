<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { locale } = useI18n();

const isActive = (path) => route.path === path;

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "nl" : "en";
};
</script>

<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
      rel="stylesheet"
    />

    <div class="navbar">
      <RouterLink to="/" class="brand-link">
        <h2>at21 hairstudio <strong class="katakana-header">ツ</strong></h2>
      </RouterLink>

      <nav class="nav-menu">
        <RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }"
          >Home</RouterLink
        >

        <RouterLink
          to="/prijslijst"
          class="nav-link"
          :class="{ active: isActive('/prijslijst') }"
        >
          Prijslijst
        </RouterLink>

        <RouterLink
          to="/schoonheidsbehandelingen"
          class="nav-link"
          :class="{ active: isActive('/schoonheidsbehandelingen') }"
        >
          Schoonheidsbehandelingen
        </RouterLink>

        <a
          class="nav-link nav-link-cta"
          href="https://widget.salonhub.nl/a/at21hairstudio/enschede/link.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Afspraak maken
        </a>
      </nav>

      <div class="nav-extras">
        <button @click="toggleLanguage" class="header-lang-btn">
          {{ locale === "en" ? "NL" : "EN" }}
        </button>

        <div class="nav-socials">
          <a href="https://www.instagram.com/at21hairstudio">
            <img
              src="../assets/images/instagram.svg"
              class="social-media-links"
              alt=""
              width="36px"
              height="36px"
            />
          </a>
          <a href="https://www.tiktok.com/@at21hairstudio">
            <img
              src="../assets/images/tiktok.svg"
              class="social-media-links"
              alt=""
              width="36px"
              height="36px"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-link {
  text-decoration: none;
  color: inherit;
}

.nav-extras {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-lang-btn {
  border: 1px solid var(--main-color-text-1);
  background: transparent;
  color: var(--main-color-text-1);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
}

.nav-socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-socials a {
  display: inline-flex;
  align-items: center;
}

.header-lang-btn:hover {
  background-color: rgba(120, 101, 87, 0.08);
}
</style>
