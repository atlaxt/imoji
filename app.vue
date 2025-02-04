<script setup lang="ts">
import NumberFlow from '@number-flow/vue'

useHead({
  title: 'Stars',
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})

const value = ref<number>(47)
const count = ref<number>(5)
const preciseMode = ref<boolean>(true)
</script>

<template>
  <div class="fixed w-screen h-screen flex justify-center items-center poppins-regular">
    <div class="lg:w-96 w-8/12 flex flex-col items-center gap-16">
      <StarGroup class="" :count :value />
      <URange v-model="value" size="xs" :step="preciseMode ? undefined : (100 / (count * 2))" :min="0" :max="100" />
      <div class="w-full flex justify-between items-center">
        <UButton
          size="xs"
          variant="solid"
          icon="heroicons:minus" @click="() => {
            if (count !== 1)
              count--
          }"
        />
        <NumberFlow class="font-bold flex items-center" :value="count" />
        <UButton
          size="xs"
          icon="heroicons:plus" @click="() => {
            if (count !== 15)
              count++
          }"
        />
      </div>

      <div class="flex items-center justify-center gap-2 w-full">
        <StarGroup class="scale-[1.2]" :count="1" :value="50" />
        <UToggle
          v-model="preciseMode"
          size="sm"
          @click="() => {
            preciseMode = !preciseMode

            if (!preciseMode)
              value = Math.round(value)
          }"
        />
        <StarGroup class="scale-[1.2]" :count="1" :value="80" />
      </div>
    </div>

    <div class="absolute top-0 right-0 m-2 flex items-center gap-2">
      <a target="_blank" href="https://github.com/atlasyigitaydin/stars">
        <UButton
          color="white"
          size="lg" variant="link" icon="mdi:github"
        />
      </a>
      <ChangeTheme class="" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins-regular {
  font-family: "Poppins", serif;
}
</style>
