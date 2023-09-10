<script setup lang="ts">
useHead({
  title: 'Guany 的首页',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}

body {
  background-color: #ecf0f1;
  color: #121212;
}

.dark body {
  background-color: #121212;
  color: #ecf0f1;
}
</style>
