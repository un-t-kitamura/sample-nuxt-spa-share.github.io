<template>
  <div class="container">
    <div>content</div>
    <img
      src="https://lh3.google.com/u/0/d/1ehwZbr2E3x5N3yMmtSPfumAUrhtrSei9=w2770-h1752-iv1"
      alt=""
      width="100"
      height="100"
    />
    <nuxt-link to="/"></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'コンテンツ（これはSPAで書き換えられています）',
        description: 'コンテンツディスクリプション',
        type: 'article',
        url: 'https://nuxt-meta-test.herokuapp.com/content/',
        image: 'https://i.imgur.com/eIpnnv5.png',
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
