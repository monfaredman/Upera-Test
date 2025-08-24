<template>
  <b-navbar class="app-header-bar px-3" :class="{ 'scrolled-bg': isScrolled }"
    style="position: fixed; top: 0; width: 100%; z-index: 1030;">
    <b-navbar-brand href="/" class="brand-width">
      <img src="@/assets/images/new-logo.png" alt="Logo" :height="isMobile ? '40' : '60'">
    </b-navbar-brand>

    <b-input-group class="mx-3 flex-grow-1 text-right hide-mobile" style="max-width: 360px; height: 3rem;">
      <b-form-input
        style="border: 1px solid white; background-color: transparent; color: white; padding-right: 2.5rem; border-radius: 0.5rem; height: 100%;"
        aria-label="Search" placeholder="جستجو فیلم,سریال,بازیگر و کارگردان"></b-form-input>
      <b-input-group-prepend
        style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); z-index: 10; pointer-events: none;">
        <b-icon icon="search" class="text-white" font-scale="1.5"></b-icon>
      </b-input-group-prepend>
    </b-input-group>

    <b-button variant="text" class="text-white d-flex align-items-center flex-shrink-0 hide-mobile">
      <img src="@/assets/images/penguin-icon.png" alt="Penguin Logo" height="28">
      <span class="mr-2" style="font-size: 1.4rem;">کودک</span>
    </b-button>

    <b-navbar-nav class="ml-0 d-flex flex-row align-items-center flex-shrink-0 justify-content-end
      flex-grow-1">
      <b-button variant="secondary" class="d-flex text-center align-items-center 
         justify-content-center px-2"
        :class="{ 'px-8': !isMobile, 'text-sm': isMobile, 'ml-1': isMobile, 'ml-3': !isMobile }"
        :style="{ width: isMobile ? '8rem' : '20rem', fontSize: isMobile ? '0.8rem' : '1rem', height: isMobile ? '2.5rem' : '3rem' }"
        style="border-radius: 0.6rem;">
        <b-icon icon="credit-card" class="ml-2"></b-icon>
        پرداخت خودکار
      </b-button>
      <template v-if="isMobile">
        <b-button variant="primary" class="profile-login-btn"
          style="font-size: 0.8rem; height: 2.5rem; width: 4rem;border-radius: 0.6rem;">
          ورود
        </b-button>
      </template>
      <template v-else>
        <b-dropdown variant="primary" right :class="{ 'text-sm': isMobile }" class="profile-dropdown"
          :style="{ width: isMobile ? '4rem' : '8rem', fontSize: isMobile ? '0.8rem' : '1rem', height: isMobile ? '2.5rem' : '3rem' }">
          <template #button-content>
            <b-icon icon="person-circle" class="ml-2"></b-icon>
            پروفایل
          </template>
          <b-dropdown-item>حساب من</b-dropdown-item>
          <b-dropdown-item>خروج</b-dropdown-item>
        </b-dropdown>
      </template>
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

.profile-dropdown ::v-deep .btn {
  border-radius: 0.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 130px;
  /* Adjust the width as needed */
  margin-right: 0;
  text-align: right;
}

@media (min-width: 768px) {
  .brand-width {
    width: 160px;
  }
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
