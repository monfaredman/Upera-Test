export default {
  target: 'server',
  ssr: true,
  srcDir: '.',
  
  
  head: {
  titleTemplate: '%s • StreamFlix',
  meta: [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'description', name: 'description', content: 'VOD app built with Nuxt 2 & Video.js' }
  ],
  link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
  },
  
  
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-rtl/dist/css/bootstrap-rtl.min.css',
    // '@/assets/css/main.scss'
  ],

  
  plugins: [
    '~/plugins/bootstrap-vue.js',
    { src: '~/plugins/swiper.client.js', mode: 'client' },
    ],


  // modules: [
  // 'nuxt-i18n',
  // ],
  
  
  // If you want to use @nuxtjs/i18n instead, disable 'nuxt-i18n' above and enable this:
  // buildModules: ['@nuxtjs/i18n'],
  
  
  i18n: {
  locales: [
  { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
  { code: 'fa', iso: 'fa-IR', file: 'fa.json', name: 'فارسی' }
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'lang/'
  },
  
  }