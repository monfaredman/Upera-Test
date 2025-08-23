<template>
  <section class="app-links-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <!-- Right side -->
        <div class="col-12 col-lg-6 text-center">
          <img src="@/assets/images/apps-images.png" alt="Apps" class="img-fluid apps-image" />
        </div>
        <!-- Left side -->
        <div class="col-12 col-lg-6 mb-4 mb-lg-0" dir="rtl">
          <h2 class="title mb-5 text-right">هر لحظه و هرجا با آپرا فیلم ببین!</h2>

          <div class="buttons-wrapper">
            <div class="d-flex justigy-content-start">

              <b-button variant="link" class="text-white d-flex align-items-center flex-shrink-0 hide-mobile"
                style="width: 150px;">
                <b-icon icon="phone" class="ml-2"></b-icon>
                <span class="mr-2">اپ موبایل</span>
              </b-button>
              <b-button variant="primary" v-for="link in appLinks.filter((item) => item.type === 'mobile')"
                :key="link.label" :href="link.href" class="app-btn d-flex align-items-center mx-2"
                style="width: 150px; height: 40px;">
                <b-icon :icon="link.icon" class="icon"></b-icon>
                <span class="label">{{ link.label }}</span>
              </b-button>
            </div>
            <div class="d-flex justigy-content-start mt-4">
              <b-button variant="link" class="text-white d-flex align-items-center flex-shrink-0 hide-mobile"
                style="width: 150px;">
                <b-icon icon="tv" class="ml-2"></b-icon>
                <span class="mr-2">اپ تلویزیون</span>
              </b-button>
              <b-button variant="primary" v-for="link in appLinks.filter((item) => item.type === 'tv')" style=" width:
                150px; height: 40px;" :key="link.label" :href="link.href"
                class="app-btn d-flex align-items-center mx-2">
                <b-icon :icon="link.icon" class="icon"></b-icon>
                <span class="label">{{ link.label }}</span>
              </b-button>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup>

const appLinks = [
  { label: 'نسخه iOS', icon: 'phone', href: '#', type: 'mobile' },
  { label: 'نسخه اندروید', icon: 'phone-fill', href: '#', type: 'mobile' },
  { label: 'اپ تلویزیون', icon: 'tv', href: '#', type: 'tv' },
  { label: 'دسترسی با مرورگر', icon: 'globe', href: '#', type: 'tv' }
]
</script>

<style scoped>
.app-links-section {
  background: #000;
  color: #fff;
  padding: 5rem 0;
}

.title {
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.6;
}

.buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.app-btn {
  background: #111;
  border: 1px solid #222;
  border-radius: 10px;
  padding: .9rem 1.1rem;
  text-decoration: none;
  color: #fff;
  font-size: 0.95rem;
  transition: .25s;
  position: relative;
  overflow: hidden;
}

.app-btn:hover {
  background: #1d1d1d;
  border-color: #333;
  transform: translateY(-2px);
}

.app-btn .icon {
  font-size: 1.2rem;
  margin-left: .6rem;
  display: inline-flex;
  width: 1.8rem;
  justify-content: center;
}

.apps-image {
  max-width: 420px;
}

@media (max-width: 991px) {
  .title {
    text-align: right !important;
  }

  .buttons-wrapper {
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
