<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const emojiStore = useEmojiStore()

onMounted(async () => {
  await emojiStore.fetchEmojis()
})
</script>

<template>
  <NuxtLayout>
    <div v-if="!emojiStore.isLoading" class="flex flex-wrap text-3xl lg:gap-2 justify-center">
      <CardEmoji
        v-for="emoji in emojiStore.filteredEmojis"
        :key="emoji.emoji"
        :emoji
        hover-animation
      />
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <div class="h-12 w-12 rounded-full border-4 border-t-transparent border-b-transparent border-l-[#ffc337] border-r-[#ff66c4] animate-spin" />
    </div>
  </NuxtLayout>
</template>
