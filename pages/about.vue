<script setup lang="ts">
definePageMeta({
  name: 'about',
  path: '/about',
})
</script>

<template>
  <NuxtLayout>
    <section class="mx-auto px-4 overflow-y-auto py-10 text-zinc-800 dark:text-zinc-100 leading-relaxed space-y-6">
      <div class="ml-0 hover:ml-2 duration-300">
        <UButton
          icon="lucide:arrow-left"
          label="Back to Emojis"
          variant="ghost"
          to="/"
          class="mb-4"
        />
      </div>

      <h1 class="text-3xl font-bold">
        About imoji
      </h1>

      <p>
        <strong>imoji</strong> is a simple and fast emoji explorer, designed to help you find, copy, and use emojis effortlessly.
      </p>

      <p>
        Unlike emoji pickers embedded in your device or browser, imoji focuses on speed, clarity, and customization.
        You can filter emojis by group or skin tone, view your recently used ones, and copy any emoji with a single click.
      </p>

      <p>
        All of your data — including favorites and recent emojis — is stored locally in your browser.
        No user tracking, no cookies, no external analytics scripts beyond minimal usage stats.
      </p>

      <hr class="border-zinc-300 dark:border-zinc-700">

      <h2 class="text-xl font-semibold">
        Why?
      </h2>
      <p>
        Because typing <code class="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-700 rounded text-sm">:smile:</code> or searching in mobile keyboards is frustrating.
        We wanted a lightweight, clean alternative that works fast and feels delightful.
      </p>

      <hr class="border-zinc-300 dark:border-zinc-700">

      <h2 class="text-xl font-semibold">
        Who made this?
      </h2>
      <p>
        This project was built by
        <a href="https://github.com/atlaxt" target="_blank" class="underline hover:text-pink-500 font-medium">Atlas Yiğit Aydın</a>,
        a frontend developer and indie maker.
      </p>
      <p>
        If you like this project, feel free to ⭐ it on
        <a href="https://github.com/atlaxt/imoji" target="_blank" class="underline hover:text-pink-500">GitHub</a>
        or
        <a href="https://www.buymeacoffee.com/atlaxt" target="_blank" class="underline hover:text-yellow-500">buy me a coffee</a>.
      </p>

      <hr class="border-zinc-300 dark:border-zinc-700">

      <p class="text-sm text-zinc-500">
        MIT Licensed • Open Source • Made with ☕ in Türkiye
      </p>
    </section>
  </NuxtLayout>
</template>
