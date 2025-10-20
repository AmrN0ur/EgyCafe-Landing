<script setup>
import { ref } from "vue";
import { useScreenWidth } from "@/assets/scripts/Screen";
import Nav from "./Nav.vue";

const { screenWidth } = useScreenWidth();

function goToLogin() {
  window.location.href = "https://egycafe.net/login";
}

function goToElement(Id) {
  document.getElementById(Id).scrollIntoView({
    behavior: "smooth",
  });
}

const navItems = ref([
  {
    name: "الرئيسية",
    id: "hero",
    active: true,
  },
  {
    name: "المميزات",
    id: "features",
  },
  {
    name: "كيف يعمل",
    id: "howItsWork",
  },
  {
    name: "الأسعار",
    id: "pricing",
  },
  {
    name: "تواصل معنا",
    id: "contact",
  },
  {
    name: "الأسئلة الشائعة",
    id: "faq",
  },
]);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="part logo" v-if="screenWidth > 1090">
        <a href="">
          <img src="/images/logo.svg" alt="شعار ايجى كافى" />
        </a>
      </div>

      <ul class="part nav" v-if="screenWidth > 1090">
        <li
          v-for="item in navItems"
          :key="item.id"
          @click="goToElement(item.id)"
          :class="`${item.active ? 'active' : ''}`"
        >
          {{ item.name }}
        </li>
      </ul>

      <Nav
        v-else
        :items="navItems"
        :showItems="screenWidth > 1090"
        @goToElement="goToElement($event)"
      />

      <div class="part actions">
        <button class="btn btn-primary" @click="goToLogin">تسجيل الدخول</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 30px;

  & .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    width: 100% !important;

    & .part {
      width: fit-content;

      &.logo {
      }

      &.nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 35px;
        font-size: 16px;
        font-weight: 700;
        line-height: 150%;

        & li {
          cursor: pointer;

          &.active {
            color: #3588ff;
          }

          &:hover {
            color: #3588ff;
          }

          &:active {
            color: white;
            scale: 0.95;
          }
        }
      }

      &.actions {
        & .btn {
          padding: 10px;
          background-color: var(--primary-normal-active);
          color: var(--text-color);
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
      }
    }
  }
}

@media (max-width: 1090px) {
  .header {
    & .container {
      & .part {
        &.logo {
        }

        &.nav {
          & li {
          }
        }

        &.actions {
          & .btn {
          }
        }
      }
    }
  }
}
</style>
