<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">a</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="/content" class="button--grey"> Content </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'ホーム（これはSPAで書き換えられています）',
        description: 'ホームディスクリプション',
        type: 'article',
        url: 'https://nuxt-meta-test.herokuapp.com',
        image:
          'https://lh3.googleusercontent.com/fife/ABSRlIotah-01mmrOSvSvcxLcRjl8vRff58FKYgd_IeuikFbmgGoGXAjlH40eB3_TdsKfLOfULH9v69vCHmwbYR_0P5o8-C2Nba1O3AhVW58aHT9I_6BdMxZBIKqRtGZjqFTulG4MkAcnexTO1hLr3Cb5FtWqdKmVpYLL_Y1IKdNhZjXBqi-p71de-tFJTsjgubuub-urbG0GYKG6A3pMZiUH49A8PtNt7y1xGrz5ggCgO1dubdMYcwn0kdywoeYgVBGfBfcgo-kejIdWurkUM66-jjPtWa4fsFjkF_yMSZ3H2kdyTBx6han9ez8tZx9kY8JciOS4GXakRYt0FG72r9daufG9gxC2rAifJOolJbR5_TTiNb72D1OaPqgT_m5DFmCUfGB0FxLxQBRsn0IqCfGtB778HdF-X51q28U1vaFAEIaxnjXZ2-ZwNIY0cEcDtDfJWm8a3sgQGVgWZVoTwXlOBrIL_T3t4UOXbKIKnV24GkqpnQqUan1VtHPTPMSm74ETMIer-ft2ZVi-YEPw2bRlS91uv_2vwTtxyGdZtf29TK5TsGBNFz6kOjl7UaR15MbY_P6OFii_NniAHijsCnVVsr4xAHKgluQ9fPq3s1_5iFKZPGewG0bP7aHbdiJQdy27eIECIUout6xDxwmFusNsuitkLnQkh7LvvuvGQxlpahJygNUmYh1xrP6w5MKx5enpyRVV_Sjlu9ilrbJPx0V7E5r87SwHrglsA=w2770-h1752-ft',
      },
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description,
        },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description,
        },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
