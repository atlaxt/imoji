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
    class="flex flex-col fixed left-0 pb-2 top-0 w-screen h-screen items-center
  "
  >
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#f14a90] to-[#e9ec06] dark:opacity-30 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#e60462] to-[#c6fc03] dark:opacity-30 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="relative flex flex-col z-10 lg:w-5xl w-full h-full">
      <AppHeader />
      <div class="lg:h-2/6 lg:mb-4 mb-2">
        <slot name="filters" />
      </div>
      <div
        class="bg-primary-50 dark:bg-primary-950 rounded-t-lg lg:mx-0 flex flex-col
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
      <slot name="footer" />
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
