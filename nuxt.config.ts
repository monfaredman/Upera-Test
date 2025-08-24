export default {
  target: 'static',
  ssr: false,
  srcDir: '.',


  head: {
    titleTemplate: '%s • StreamFlix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VOD app built with Nuxt 2 & Video.js' }
    ],

  },


  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
    '~/assets/scss/custom-bootstrap.scss',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],


  plugins: [
    '~/plugins/bootstrap-vue.js',
    { src: '~/plugins/swiper.client.js', mode: 'client' },
  ],



  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fa', iso: 'fa-IR', file: 'fa.json', name: 'فارسی' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/'
  },

  build: {
    transpile: ['bootstrap-vue']
  },

}