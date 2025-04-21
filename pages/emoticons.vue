<script setup lang="ts">
definePageMeta({
  name: 'emoticons',
})

const emoticonStore = useEmoticonStore()

onMounted(async () => {
  // await emoticonStore.fetchEmoticons()
})
</script>

<template>
  <NuxtLayout>
    <template #filters>
      <EmoticonFilterSide />
    </template>
    <!-- <div v-if="!emoticonStore.isLoading" class="flex flex-wrap text-3xl gap-2 justify-center">
      <EmoticonCard
        v-for="emoticon in emoticonStore.filteredEmoticons"
        :key="emoticon.emoticon"
        :emoticon
      />
    </div> -->
    <div v-if="!emoticonStore.isLoading" class="grid lg:grid-cols-3 grid-cols-2 text-3xl gap-2">
      <EmoticonCard
        v-for="emoticon in emoticonStore.filteredEmoticons"
        :key="emoticon.emoticon"
        :emoticon
      />
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <div class="h-12 w-12 rounded-full border-4 border-t-transparent border-b-transparent border-l-[#ffc337] border-r-[#ff66c4] animate-spin" />
    </div>

    <template #footer>
      <!-- <EmojiLastUsed /> -->
    </template>
  </NuxtLayout>
</template>
