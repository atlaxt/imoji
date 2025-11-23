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
    { name: 'twitter:creator', content: '@atlaxtt' },
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
    <div class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#f14a90] to-[#e9ec06] dark:opacity-30 opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#e60462] to-[#c6fc03] dark:opacity-30 opacity-40 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
