<script setup>
function goLogin() {
  window.location.href = "https://example.com";
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="part logo">
        <img src="/images/logo.svg" alt="شعار ايجى كافى" />
      </div>

      <ul class="part nav">
        <li><a href="#home">الرئيسية</a></li>
        <li><a href="#features">المميزات</a></li>
        <li><a href="#how-it-works">كيف يعمل</a></li>
        <li><a href="#pricing">الأسعار</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
        <li><a href="#faq">الأسئلة الشائعة</a></li>
      </ul>

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
          &:hover {
            cursor: pointer;
            color: #3588ff;
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
</style>
