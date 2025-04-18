<script setup lang="ts">
useHead({
  title: 'imoji – Copy & Explore Emojis Easily',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'imoji' },
    { name: 'description', content: 'imoji lets you explore and copy emojis with skin tone filters, recent usage, and fast search. Super smooth UX.' },
    { name: 'keywords', content: 'emoji, emojis, ascii, copy emoji, emoji list, emoji skin tone, fast emoji search, imoji' },
    { name: 'theme-color', content: '#ffc337' },

    { property: 'og:title', content: 'imoji – Copy & Explore Emojis Easily' },
    { property: 'og:description', content: 'Explore emojis by category and skin tone. One click to copy. Super clean UI.' },
    { property: 'og:image', content: 'https://imoji.co/og.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: 'https://imoji.co' },
    { property: 'og:type', content: 'website' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'imoji – Copy & Explore Emojis' },
    { name: 'twitter:description', content: 'Fast emoji explorer with copy feature and tone filters.' },
    { name: 'twitter:image', content: 'https://imoji.co/og.jpg' },
    { name: 'twitter:creator', content: '@yourhandle' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'canonical', href: 'https://imoji.co' },
  ],

  script: [
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1948589981733097',
      crossorigin: 'anonymous',
    },
  ],
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
div {
  font-family: 'Poppins', sans-serif;
}
</style>
