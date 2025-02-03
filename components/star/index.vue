<script setup lang="ts">
const props = defineProps<{
  fill?: boolean
}>()
</script>

<template>
  <UIcon
    v-for="(_, key) in 5"
    :key
    :name="`icon-park-${props.fill ? 'solid' : 'outline'}:star`"
    class="text-lg min-w-4 max-w-4"
  />
</template>
