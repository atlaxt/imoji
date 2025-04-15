<script setup lang="ts">
useHead({
  title: 'Emojix – Copy & Explore Emojis Easily',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'description', content: 'Emojix lets you explore and copy emojis with skin tone filters, recent usage, and fast search. Super smooth UX.' },
    { name: 'author', content: 'Emojix' },
    { name: 'theme-color', content: '#ffc337' },

    { property: 'og:title', content: 'Emojix – Copy & Explore Emojis Easily' },
    { property: 'og:description', content: 'Explore emojis by category and skin tone. One click to copy. Super clean UI.' },
    // { property: 'og:image', content: 'https://emojix.atlaxt.me/og-image.png' },
    { property: 'og:url', content: 'https://emojix.atlaxt.me' },
    { property: 'og:type', content: 'website' },

    // { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Emojix – Copy & Explore Emojis' },
    { name: 'twitter:description', content: 'Fast emoji explorer with copy feature and tone filters.' },
    // { name: 'twitter:image', content: 'https://emojix.atlaxt.me/og-image.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
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
  font-family: 'Lexend', sans-serif;
}
</style>
