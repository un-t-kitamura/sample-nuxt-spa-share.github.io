<template>
  <div class="container">
    <p>isContent id:{{ $route.params.id }}</p>
    <nuxt-link to="/">Home<nuxt-link>
  </div>
</template>

<script>
export default {
  head() {
      return {
        title: `Content id:${this.$route.params.id}`,
        meta: [
        {
            hid: 'description',
            name: 'description',
            content: `Content id:${this.$route.params.id} description`
        },
        { hid: 'og:description', property: 'og:description', content: 'ディスクリプション' },
        { hid: 'og:url', property: 'og:url', content: 'ページのURL' },
        { hid: 'og:image', property: 'og:image', content: '画像のURL' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'ディスクリプション' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'ページのURL' },
        { hid: 'twitter:description', property: 'twitter:description', content: '画像のURL' },
        { hid: 'ttwitter:url', property: 'twitter:url', content: '画像のURL' },
        { hid: 'twitter:image', property: 'twitter:description', content: '画像のURL' },
        ],
    }
  }
}
</script>
<style>

</style>
