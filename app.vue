<script setup lang="ts">
const value = ref<number>(84)
useHead({
  title: 'Stars',
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <div class="fixed w-screen h-screen flex justify-center items-center">
    <div class="lg:w-96 w-8/12 flex flex-col items-center gap-16">
      <StarGroup :value />
      <URange v-model="value" :min="0" :max="100" />
    </div>

    <ChangeTheme color="white" class="fixed top-0 right-0 m-2" />
  </div>
</template>
