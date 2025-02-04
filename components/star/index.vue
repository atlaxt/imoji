<script setup lang="ts">
const props = defineProps<{
  fill?: boolean
  count?: number
}>()
</script>

<template>
  <TransitionGroup name="list">
    <UIcon
      v-for="(_, key) in props.count ?? 5"
      :key
      :name="`icon-park-${props.fill ? 'solid' : 'outline'}:star`"
      class="text-lg min-w-5 max-w-5"
      :class="{
        'text-yellow-400': props.fill,
        'dark:text-gray-700 text-gray-300': !props.fill,
      }"
    />
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
