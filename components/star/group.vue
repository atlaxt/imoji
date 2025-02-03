<script setup lang="ts">
const props = defineProps<{
  value: number
}>()

const currentWidth = computed(() => {
  return `width: ${props.value}%;`
})
</script>

<template>
  <div class="relative flex justify-center items-center">
    <div class="flex flex-row absolute left-0 bottom-0 overflow-hidden" :style="currentWidth">
      <Star fill />
    </div>
    <Star class="absolute" />
  </div>
</template>
