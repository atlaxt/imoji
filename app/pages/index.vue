<script setup lang="ts">
const { data } = await useFetch('/api/emoji')
</script>

<template>
  <UPage class="border">
    <UContainer class="h-full border">
      <!-- <div class="flex h-full overflow-y-auto flex-wrap text-3xl lg:gap-2 justify-center">
        <EmojiCard
          v-for="emoji in data?.emojis"
          :key="emoji.emoji"
          :emoji="emoji"
          hover-animation
        />
      </div> -->
    </UContainer>
  </UPage>
</template>
