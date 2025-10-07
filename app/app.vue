<script setup>
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  }
})
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