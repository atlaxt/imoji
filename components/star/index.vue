<script setup lang="ts">
const props = defineProps<{
  fill?: boolean
  count?: number
}>()
</script>

<template>
  <UIcon
    v-for="(_, key) in props.count ?? 5"
    :key
    :name="`icon-park-${props.fill ? 'solid' : 'outline'}:star`"
    class="text-lg min-w-4 max-w-4"
    :class="{
      'text-yellow-400': props.fill,
      'dark:text-gray-700 text-gray-300': !props.fill,
    }"
  />
</template>
