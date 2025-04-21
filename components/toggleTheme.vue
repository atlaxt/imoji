<script setup lang='ts'>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggleDark() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
const mounted = ref<boolean>(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <UButton
    v-if="mounted"
    :icon="`lucide:${isDark ? 'moon' : 'sun'}`"
    class="text-2xl"
    variant="link"
    @click="toggleDark"
  />
  <USkeleton v-else class="w-8 h-8" />
</template>
