<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <UButton
      :icon="`heroicons:${isDark ? 'sun' : 'moon'}`"
      color="white"
      variant="ghost"
      @click="toggleColorMode"
    />
  </div>
</template>
