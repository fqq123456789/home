<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const count = ref(0)

function increment() {
  count.value++
}
</script>

<template>
  <div class="h-full flex flex-col items-center justify-evenly">
    <h1 class="text-2xl font-bold">
      点击下方按钮助力开发进度！
    </h1>

    <button class="btn" @click="increment">
      + {{ count }}
    </button>

    <div class="flex gap-4">
      <a
        class="i-carbon-logo-github icon-btn"
        href="https://github.com/tlyboy/home"
        target="_blank"
        rel="noopener noreferrer"
      />

      <button
        class="i-carbon-sun dark:i-carbon-moon icon-btn"
        @click="toggleDark"
      />
    </div>
  </div>
</template>
