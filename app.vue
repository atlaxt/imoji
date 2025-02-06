<script setup lang="ts">
import NumberFlow from '@number-flow/vue'

useHead({
  title: 'Stars',
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})

const value = ref<number>(0)
const count = ref<number>(5)
const preciseMode = ref<boolean>(true)

onMounted(() => {
  const animateValue = (refValue: any, targetValue: number, duration: number) => {
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      refValue.value = Math.floor(progress * targetValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  animateValue(value, 87, 1200)
})
</script>

<template>
  <div class="fixed w-screen h-screen flex justify-center items-center poppins-regular">
    <div class="lg:w-96 w-8/12 flex flex-col items-center gap-16">
      <StarGroup class="h-5" :count :value />
      <URange v-model="value" color="gray" size="xs" :step="preciseMode ? undefined : (100 / (count * 2.01))" :min="0" :max="100" />
      <div class="w-full flex justify-between items-center">
        <UButton
          color="gray"
          size="xs"
          variant="solid"
          icon="heroicons:minus"
          @click="() => {
            if (count !== 1)
              count--
          }"
        />
        <NumberFlow class="font-bold flex items-center" :value="count" />
        <UButton
          color="gray"
          size="xs"
          icon="heroicons:plus"
          @click="() => {
            if (count !== 15)
              count++
          }"
        />
      </div>

      <div class="flex items-center justify-center gap-2 w-full">
        <StarGroup class="scale-[1.2]" :count="1" :value="50" />
        <UToggle
          v-model="preciseMode"
          color="gray"
          size="sm"
          @click="() => {
            preciseMode = !preciseMode

            if (!preciseMode)
              value = Math.round(value)
          }"
        />
        <StarGroup class="scale-[1.2]" :count="1" :value="65" />
      </div>
    </div>

    <a class="fixed bottom-0" target="_blank" href="https://github.com/atlasyigitaydin/stars">
      <UButton
        label="atlasyigitaydin"
        color="gray"
        size="sm" variant="link" icon="mdi:github"
      />
    </a>
    <ChangeTheme class="fixed right-0 top-0 m-2" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.poppins-regular {
  font-family: "Poppins", serif;
}
</style>
