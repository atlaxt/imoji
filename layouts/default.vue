<script setup lang="ts">
const app = useApp()
const scrollContainer = ref<HTMLElement>()

function handleScroll() {
  if (scrollContainer.value) {
    app.scrollY = scrollContainer.value.scrollTop
  }
}

onMounted(() => {
  scrollContainer.value?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="flex flex-col fixed left-0 top-0 w-screen h-screen items-center
  "
  >
    <div class="relative flex flex-col z-10 lg:w-4xl w-full h-full">
      <AppHeader />
      <div class="lg:h-2/6 lg:mb-4 mb-2">
        <Welcome />
      </div>
      <div
        class="bg-primary-50 dark:bg-primary-950 rounded-t-lg lg:mx-0 flex flex-col py-1
        w-full h-full
        overflow-y-auto
       [&::-webkit-scrollbar]:w-1
       [&::-webkit-scrollbar-track]:rounded-full
       [&::-webkit-scrollbar-track]:bg-primary-100
       [&::-webkit-scrollbar-thumb]:rounded-full
       [&::-webkit-scrollbar-thumb]:bg-primary-300
       mb-4
      "
      >
        <slot />
      </div>
      <LastUsed />
    </div>
  </div>
</template>

<style scoped>
canvas {
  pointer-events: none;
}
div {
  font-family: 'Poppins', sans-serif;
}
</style>
