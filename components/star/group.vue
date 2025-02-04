<script setup lang="ts">
const props = defineProps<{
  value: number
  count: number
}>()

const currentWidth = computed(() => {
  return `width: ${props.value}%;`
})
</script>

<template>
  <div class="relative flex justify-center items-center">
    <Star :count="props.count" class="absolute" />
    <div class="flex flex-row absolute left-0 bottom-0 overflow-hidden" :style="currentWidth">
      <Star :count="props.count" fill />
    </div>
  </div>
</template>
