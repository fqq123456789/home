<script setup lang="ts">
const count = ref(0)

onMounted(() => {
  initData()
})

async function initData() {
  const res = await $fetch('/api/count')

  count.value = res.count ?? 0
}

async function handleBtnClick() {
  await $fetch('/api/count', {
    method: 'POST',
  })

  initData()
}
</script>

<template>
  <div class="h-full flex flex-col items-center justify-evenly">
    <h1 class="text-2xl font-bold">
      点击下方按钮助力开发进度！
    </h1>

    <button class="btn" @click="handleBtnClick">
      当前助力值：{{ count }}
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
