<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
      rel="stylesheet"
    />

    <div class="navbar">
      <!-- Logo klikbaar naar home -->
      <RouterLink to="/" class="brand-link">
        <h2>at21 hairstudio <strong class="katakana-header">ツ</strong></h2>
      </RouterLink>

      <nav class="nav-menu">
        <!-- Haarstudio knopje wordt Prijslijst -->
        <RouterLink to="/prijslijst" class="nav-link">Prijslijst</RouterLink>

        <RouterLink to="/schoonheidsbehandelingen" class="nav-link">
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

      <div class="nav-socials">
        <a href="https://www.instagram.com/at21hairstudio">
          <img
            src="../assets/images/instagram.svg"
            class="social-media-links"
            alt=""
            width="36px"
            height="36px"
            style="margin-right: 8px"
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
</template>

<script>
export default {}
</script>

<style scoped>
.brand-link {
  text-decoration: none;
  color: inherit;
}
</style>
