<script setup>
import { useScreenWidth } from "@/assets/scripts/Screen";

const { screenWidth } = useScreenWidth();

const showNav = ref(false);

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["goToElement"]);

function goToElement(id) {
  emit("goToElement", id);
}
</script>

<template>
  <div class="nav-container" v-if="screenWidth < 1090">
    <div class="toggle-btn" @click="showNav = !showNav"></div>

    <ul class="part nav" v-if="showNav">
      <li
        v-for="item in items"
        :key="item.id"
        @click="goToElement(item.id)"
        :class="`${item.active ? 'active' : ''}`"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-container {
  position: relative;

  & .toggle-btn {
    background-color: transparent;
    background-image: url("/icons/header/menu-closed.svg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    cursor: pointer;
    filter: invert(1);
    border: none;

    &:hover {
      background-image: url("/icons/header/menu.svg");
    }
  }

  & .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    position: absolute;
    top: 105%;
    right: -10px;
    background-color: var(--primary-normal-active);
    padding: 10px;
    border-radius: 16px;

    & li {
      cursor: pointer;
      background-color: #224e8d;
      padding: 10px;
      border-radius: 8px;
      min-width: max-content;
      width: calc(100% + 20px);
      margin-left: -10px;

      &.active {
        color: #3588ff;
      }

      &:hover {
        color: #3588ff;
        padding-right: 15px;
      }

      &:active {
        color: white;
        scale: 0.95;
      }
    }
  }
}
</style>

<style>
.nav-container {
  z-index: 1000 !important;
}
</style>
