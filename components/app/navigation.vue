<script setup lang="ts">
const route = useRoute()

const emojiNavItems =   { label: 'Emojis', to: { name: 'emojis' }} 
const emoticonNavItems = { label: 'Emoticons', to: { name: 'emoticons' } }

</script>

<template>
  <nav class="flex gap-3 w-full items-center px-6">
    <NuxtLink
      :to="{name: emojiNavItems.to.name}"
      class="relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200
             hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-white
             dark:hover:text-white"
      :class="{
        'bg-gradient-to-r from-yellow-400 to-pink-500 text-white shadow-md':
          route.name === emojiNavItems.to.name,
        'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200':
          route.name !== emojiNavItems.to.name,
      }"
    >
      {{ emojiNavItems.label }}
    </NuxtLink>

    <UTooltip text="Coming soon" :delay-duration="100">
      <div
      class="relative select-none opacity-40 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200
      hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-white
      dark:hover:text-white"
      >
      {{ emoticonNavItems.label }}
    </div>
  </UTooltip>
  </nav>
</template>
