// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ssr: true,
  // target: 'static',

  app: {
    baseURL: '/7eminar-higher-accounting-landing/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict

    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '', // Add crossorigin attribute
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost&family=Raleway:wght@700&display=swap',
        },
      ],
    },

  },

  // swiper: {
  //   // Swiper options
  //   //----------------------
  //   // prefix: 'Swiper',
  //   // styleLang: 'css',
  //   // modules: ['navigation', 'pagination'], // all modules are imported by default
  // }

  css: ['~/assets/css/main.css'],

})
