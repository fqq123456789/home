<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
</script>

<template>
  <div class="h-full flex flex-col items-center justify-evenly">
    <h1 class="text-2xl font-bold">
      分享当前页面助力开发进度！
    </h1>

    <div class="rounded bg-white px-4 py-2 dark:bg-dark">
      <span>当前助力值：</span>
      <span class="text-hex-3498db">{{ data?.pageview }}</span>
    </div>

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
