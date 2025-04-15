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
    <div v-else class="min-h-full min-w-full flex justify-center items-center">
      <Loading />
    </div>
  </NuxtLayout>
</template>
