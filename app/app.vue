<script setup>
useHead({
  head: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  },
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
  },
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style src="@/assets/styles/normalize.css"></style>
<style src="@/assets/styles/master.css"></style>
