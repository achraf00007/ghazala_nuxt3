// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Trans Ghazala - الغزالة partenaire exclusif de marKoub.ma',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Trans Ghazala - الغزالة vous permet de réserver vos tickets en ligne en 2 minutes avec markoub.ma' },
        { name: 'keywords', content: 'Transport Marchandise Maroc, Transport Marchandise Casablanca, Messagerie Maroc, Messagerie Casablanca' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'img/favicon.ico' },
        { rel: 'apple-touch-icon', href: 'img/apple-touch-icon-57x57-precomposed.png' },
        { rel: 'apple-touch-icon', href: 'img/apple-touch-icon-72x72-precomposed.png' },
        { rel: 'apple-touch-icon', href: 'img/apple-touch-icon-114x114-precomposed.png' },
        { rel: 'apple-touch-icon', href: 'img/apple-touch-icon-144x144-precomposed.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/vendors.css' },
        { rel: 'stylesheet', href: '/css/custom.css' },
        { rel: 'stylesheet', href: '/css/icon_fonts/css/all_icons.css' }
      ],
      script: [
        // { src: 'https://www.googletagmanager.com/gtag/js?id=G-FN4J25Q64L', defer: true },
        { src: '/js/jquery-3.5.1.min.js', crossorigin: 'anonymous', defer: true },
        { src: '/js/jquery-migrate-3.3.2.min.js', crossorigin: 'anonymous', defer: true },
        { src: '/js/bootstrap.bundle.min.js', defer: true, integrity: 'sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx', crossorigin: 'anonymous' },
        { src: '/js/modernizr_slider.js', defer: true },
        { src: '/js/common_scripts.js', defer: true },
        { src: '/js/main.js', defer: true },
        { src: '/js/validate.js', defer: true },
        { src: '/js/fontawesome.js', defer: true }
      ]
    }
  },

  // plugins: [
  //   { src: '~/plugins/vue-datepicker', mode: 'client' },
  //   { src: '~/plugins/vue-gallery.client', mode: 'client' },
  //   { src: '~/plugins/vue-toasts.client', mode: 'client' },
  //   { src: '~/plugins/v-select2-component', mode: 'client' },
  //   { src: '~/plugins/vue-tel-input', mode: 'client' },
  //   { src: '~/plugins/vue-js-toggle-button', mode: 'client' }
  // ]
})
