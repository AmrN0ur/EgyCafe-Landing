<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  dir: {
    type: String,
    default: "center",
  },
});
</script>

<template>
  <div class="title">
    <h1 class="title" v-if="props.title">{{ props.title }}</h1>

    <p class="text" v-if="props.text">{{ props.text }}</p>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: v-bind(dir);
  gap: 16px;
  width: 100%;
  height: max-content;

  & .title {
    text-align: v-bind(dir);
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
  }

  & .text {
    text-align: v-bind(dir);
    color: #90A1B9;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
