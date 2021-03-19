export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'ホーム' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ホームディスクリプション',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxt-meta-test.herokuapp.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://lh3.googleusercontent.com/fife/ABSRlIotah-01mmrOSvSvcxLcRjl8vRff58FKYgd_IeuikFbmgGoGXAjlH40eB3_TdsKfLOfULH9v69vCHmwbYR_0P5o8-C2Nba1O3AhVW58aHT9I_6BdMxZBIKqRtGZjqFTulG4MkAcnexTO1hLr3Cb5FtWqdKmVpYLL_Y1IKdNhZjXBqi-p71de-tFJTsjgubuub-urbG0GYKG6A3pMZiUH49A8PtNt7y1xGrz5ggCgO1dubdMYcwn0kdywoeYgVBGfBfcgo-kejIdWurkUM66-jjPtWa4fsFjkF_yMSZ3H2kdyTBx6han9ez8tZx9kY8JciOS4GXakRYt0FG72r9daufG9gxC2rAifJOolJbR5_TTiNb72D1OaPqgT_m5DFmCUfGB0FxLxQBRsn0IqCfGtB778HdF-X51q28U1vaFAEIaxnjXZ2-ZwNIY0cEcDtDfJWm8a3sgQGVgWZVoTwXlOBrIL_T3t4UOXbKIKnV24GkqpnQqUan1VtHPTPMSm74ETMIer-ft2ZVi-YEPw2bRlS91uv_2vwTtxyGdZtf29TK5TsGBNFz6kOjl7UaR15MbY_P6OFii_NniAHijsCnVVsr4xAHKgluQ9fPq3s1_5iFKZPGewG0bP7aHbdiJQdy27eIECIUout6xDxwmFusNsuitkLnQkh7LvvuvGQxlpahJygNUmYh1xrP6w5MKx5enpyRVV_Sjlu9ilrbJPx0V7E5r87SwHrglsA=w2770-h1752-ft',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
