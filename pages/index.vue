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
  head() {
    return {
      title: `home`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Content description`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'ディスクリプション',
        },
        { hid: 'og:url', property: 'og:url', content: 'ページのURL' },
        { hid: 'og:image', property: 'og:image', content: '画像のURL' },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'ディスクリプション',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'ページのURL',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: '画像のURL',
        },
        { hid: 'ttwitter:url', property: 'twitter:url', content: '画像のURL' },
        {
          hid: 'twitter:image',
          property: 'twitter:description',
          content: '画像のURL',
        },
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
