<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <UButton
    :icon="`heroicons:${isDark ? 'sun' : 'moon'}`"
    color="gray"
    variant="ghost"
    size="lg"
    @click="toggleColorMode"
  />
</template>
