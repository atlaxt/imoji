<script setup lang="ts">
const emojiStore = useEmojiStore()
onMounted(() => {
  emojiStore.fetchLastEmojis()
})
</script>

<template>
  <div class="w-full lg:flex hidden flex-col gap-2 px-3 mb-2 h-24 overflow-hidden">
    <p class="text-sm text-zinc-500">
      Last Used Emojis
    </p>
    <div class="flex flex-row items-center overflow-hidden gap-2">
      <CardEmoji
        v-for="emoji in emojiStore.lastEmojis"
        :key="emoji.emoji"
        :emoji
      />
    </div>
  </div>
</template>
