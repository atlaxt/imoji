<script setup lang="ts">
import NumberFlow from '@number-flow/vue'

useHead({
  title: 'Stars',
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})

const value = ref<number>(84)
const count = ref<number>(5)
const preciseMode = ref<boolean>(true)
</script>

<template>
  <div class="fixed w-screen h-screen flex justify-center items-center poppins-regular">
    <div class="lg:w-96 w-8/12 flex flex-col items-center gap-16">
      <StarGroup :count :value />
      <UDivider />
      <URange v-model="value" :step="preciseMode ? undefined : (100 / (count * 2))" color="gray" :min="0" :max="100" />
      <div class="w-full flex justify-between items-center">
        <UButton
          color="gray"
          variant="solid"
          icon="heroicons:minus" @click="() => {
            if (count !== 1)
              count--
          }"
        />
        <NumberFlow class="" :value="count" />
        <UButton
          color="gray"
          icon="heroicons:plus" @click="() => {
            if (count !== 20)
              count++
          }"
        />
      </div>

      <div class="flex items-center justify-center gap-2 w-full">
        <StarGroup :count="1" :value="50" />
        <UToggle
          v-model="preciseMode"
          color="gray" @click="() => {
            preciseMode = !preciseMode

            if (!preciseMode)
              value = Math.round(value)
          }"
        />
        <StarGroup :count="1" :value="80" />
      </div>
    </div>

    <ChangeTheme color="gray" class="fixed top-0 right-0 m-2" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins-regular {
  font-family: "Poppins", serif;
}
</style>
