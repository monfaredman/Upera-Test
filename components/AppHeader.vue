<template>
  <b-navbar class="app-header-bar px-3" :class="{ 'scrolled-bg': isScrolled }"
    style="position: fixed; top: 0; width: 100%; z-index: 1030;">
    <b-navbar-brand href="/" class="flex-shrink-0 brand-width">
      <img src="@/assets/images/new-logo.png" alt="Logo" height="40">
    </b-navbar-brand>

    <b-input-group class="mx-3 flex-grow-1 text-right hide-mobile" style="max-width: 480px;">
      <b-form-input class="rounded-lg"
        style="border: 1px solid white; background-color: transparent; color: white; padding-left: 2.5rem;"
        aria-label="Search" placeholder="جستجو"></b-form-input>
      <b-input-group-prepend
        style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); z-index: 10; pointer-events: none;">
        <b-icon icon="search" class="text-white"></b-icon>
      </b-input-group-prepend>
    </b-input-group>

    <b-button variant="link" class="text-white d-flex align-items-center flex-shrink-0 hide-mobile">
      <img src="@/assets/images/penguin-icon.png" alt="Penguin Logo" class="mr-2" height="24">
      <span class="mr-2">کودک</span>
    </b-button>

    <b-navbar-nav class="ml-0 d-flex flex-row align-items-center flex-shrink-0 justify-content-end
        flex-grow-1">
      <b-button variant="secondary" class="d-flex text-center align-items-center 
            rounded-xl justify-content-center mx-1 px-2" :class="{ 'px-8': !isMobile, 'text-sm': isMobile }"
        :style="{ width: isMobile ? '8rem' : '14rem', fontSize: isMobile ? '0.8rem' : '1rem' }">
        <b-icon icon="credit-card" class="ml-2"></b-icon>
        پرداخت خودکار
      </b-button>
      <b-dropdown variant="primary" right :class="{ 'text-sm': isMobile }"
        :style="{ width: isMobile ? '8rem' : '14rem', fontSize: isMobile ? '0.8rem' : '1rem' }">
        <template #button-content>
          <b-icon icon="person-circle" class="ml-2"></b-icon>
          پروفایل
        </template>
        <b-dropdown-item>حساب من</b-dropdown-item>
        <b-dropdown-item>خروج</b-dropdown-item>
      </b-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobile: false,
      isScrolled: false
    };
  },
  mounted() {
    this.updateIsMobile();
    window.addEventListener('resize', this.updateIsMobile);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    updateIsMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
::placeholder {
  color: white;
}

.b-navbar-nav {
  flex-direction: row !important;
}

/* explicit flex styling on the navbar root (scoped requires our custom class) */
.app-header-bar {
  display: flex !important;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  justify-content: start !important;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* align children */
.app-header-bar>* {
  align-self: center;
}

/* Set width for b-navbar-brand */
.brand-width {
  width: 150px;
  /* Adjust the width as needed */
  margin-right: 0;
  text-align: right;
}

.scrolled-bg {
  background: linear-gradient(to bottom, #1a1a1a, #1a1a1a, #1a1a1a, transparent) !important;
  opacity: 0.95;
}

/* d-flex now works (conflicting bootstrap-rtl removed) */
@media (max-width: 767.98px) {
  .hide-mobile {
    display: none !important;
  }
}
</style>
