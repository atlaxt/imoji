<script setup lang="ts">
const emoticonStore = useEmoticonStore()

onMounted(() => {
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-3 justify-end transition-transform duration-300">
    <div class="w-full h-full flex lg:gap-4 gap-x-2 gap-y-1 flex-row items-center overflow-x-auto lg:py-0 lg:px-2 lg:pb-0 py-1 px-2 pb-2">
      <EmoticonCardGroup
        v-for="group in emoticonStore.groupOptions"
        :key="group.key"
        :group
      />
    </div>
  </div>
</template>
